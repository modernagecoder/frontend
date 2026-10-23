'use strict';
// Math tutor, Vaughan (cg- city page, Canada cluster Wave 2, row 163). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md (section "Province, city and math-tutor city pages").
// Spine: chance and data through Ontario math up to MDM4U probability, routed to the live spokes; one probability lesson,
// a two-way table and conditional probability, on York Region's street trees along regional roads in Vaughan; a worked
// "flip the condition" problem; the Euclid contest slice (with Waterloo's scholarship note); a price section built as
// a decision table.
// Sources, read raw on 22 October 2026 (curriculum, contest and admission facts from keyword-research-2026-09/ca/
// facts-schools-contests.md with saved raw files in ca/src/; geography from ca/facts-geo.md; York files in
// ca/src-pilots/math-tutor-vaughan/):
//  - Ontario DCP API: MDM4U "Mathematics of Data Management" (2007); MHF4U, MCV4U, MCR3U titles; MTH1W (2021). EQAO windows
//    for 2026-27 (Grades 3 and 6 "May 4 - June 8, 2027", Grade 9 "January 12 - February 5, 2027", en dashes in source).
//  - CEMC Euclid: "Students in their final year of secondary school or CEGEP students."; "North and South America: Tuesday,
//    April 6, 2027"; "10 questions; a mix of final answer only and full-solution."; "Time allowed for completion is 2.5
//    hours."; "Written annually by over 25 000 participants worldwide". Waterloo CS page: contest "is not required for
//    admission, but writing one of these contests is required for some scholarships offered by the Faculty of Mathematics"
//    (CSMC and/or Euclid). Through a school; past contests free.
//  - facts-geo.md: Vaughan is in the Toronto CMA; 905 belt overlay 289/365/742/905; Ontario UTC-5 from 1 November 2026.
//  - York Region Open Data, "Street Trees" item 293d80c24bf54a4f8ab66bddaeaab184 (saved): snippet "To provide the location
//    and information about street trees within regional road right-of-ways owned or maintained by York Region."; description
//    "The data includes all Regional owned street trees in urban areas and partial data available for Regional owned street
//    trees in rural areas."; licenseInfo points to the York Region Open Data Licence (PDF saved): "Use the Information
//    commercially", credit statement "Contains public sector information made available under The Regional Municipality of
//    York's Open Data Licence". Layer OpenData/Biodiversity/MapServer/0: count endpoint with MUNICIPALITY='Vaughan' returned
//    20,127; rows downloaded in 11 pages (vtrees_0 to vtrees_20000.json) on 22 October 2026.
// Our own calculations (vtrees.py, page_snippet.py, python -I): 20,127 records, all STATUS Active, 20,127 distinct TREEID;
// top common names Ivory Silk Lilac 2,294, Kentucky Coffee Tree 1,496, Silver Maple 963, Honey-Locust 873, Sugar Maple 791;
// 53 genera, Acer 4,365; height bands 0-2 m 399, 2-5 m 11,483, 5-10 m 4,570, 10-15 m 2,075, 15-20 m 1,041, 20+ m 429,
// blank 130; road section Urban-Boulevard 14,141, Rural-Ditch 3,865; ownership Regional ROW 19,816; YEARPLANTED 9999 in 104
// rows; 47 streets, Rutherford Road 2,327, Highway 27 1,983, Highway 7 1,692. Two-way table maple x height: maple 45,
// 1,869, 1,206, 604, 442, 159, blank 40; other 354, 9,614, 3,364, 1,471, 599, 270, blank 90. P(maple) 0.2169; P(15 m or
// taller | maple) 601/4,365 = 0.1377; P(15 m or taller | not maple) 869/15,762 = 0.0551; P(maple | 15 m or taller)
// 601/1,470 = 0.4088. Counts of rows only; no figure is a sum of published parts.
// Lesson family: two-way tables, conditional probability and reversing a condition; sentinel values (9999).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const CODE = [
  'import glob, json',
  'from collections import Counter',
  '',
  'trees = []',
  'for name in sorted(glob.glob("vtrees_*.json")):',
  '    trees += [f["attributes"] for f in json.load(open(name))["features"]]',
  '',
  'table = Counter()',
  'for t in trees:',
  '    maple = (t["SPECIES"] or "").startswith("Acer")',
  '    tall = t["TREEHEIGHT"] in ("15 - 20 metres", "20+ metres")',
  '    table[maple, tall] += 1',
  '',
  'maples = table[True, True] + table[True, False]',
  'print("trees:", len(trees), "maples:", maples)',
  'print("P(maple):", round(maples / len(trees), 4))',
  'print("P(tall | maple):", round(table[True, True] / maples, 4))',
  'print("P(tall | not maple):", round(table[False, True] / (len(trees) - maples), 4))',
  'print("P(maple | tall):", round(table[True, True] / (table[True, True] + table[False, True]), 4))'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'VAUGHAN MATH', label: 'Math tutor in Vaughan', blurb: 'Math help for Vaughan students with chance and data traced up to MDM4U, a York Region street tree lesson on conditional probability, and the Euclid contest.' },
  market: CA,
  slug: 'math-tutor-vaughan',
  code: 'mtv',
  accent: '#385C32',
  accentRationale: 'Vaughan math: a muted conifer green, #385C32, allocated for this row; the nearest other Canada accent is #2F662E, 14.0 RGB units away (Euclidean); contrast 7.22 on the paper #FBF8F2 (6.79 and 6.21 on the two paper tints)',
  pageType: 'city',
  place: {
    name: 'Vaughan',
    eyebrow: 'Math tutor, Vaughan, Ontario',
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
  routeLabel: 'Math tutor in Vaughan',
  title: 'Math Tutor Vaughan | Live Online, Grade 1 to MDM4U and MCV4U',
  description: 'Live online math tutoring for Vaughan students: Ontario probability and data up to MDM4U, a York Region street tree lesson on two-way tables, and the Euclid contest.',
  ogDescription: 'Pick a tall street tree on a Vaughan regional road and the chance it is a maple is about 41 percent. A Vaughan math tutor page that shows the working.',
  twitterDescription: 'Vaughan math tutoring, live online, with a real probability lesson on York Region tree data.',
  ogImageCourse: 'statistics-probability-maths-course',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Math Tutoring for Vaughan Students',
    description: 'Live online math for Vaughan students from Grade 1 to Grade 12, including Ontario data and probability, MDM4U, MHF4U and MCV4U support, and Euclid contest preparation.'
  },

  h1: 'Math tutoring for Vaughan, live online',
  capsuleQ: 'Is there a live math tutor for students in Vaughan?',
  capsule: 'Modern Age Coders tutors Vaughan students in math live online, Grade 1 to Grade 12, one to one or in a group of 15 to 20 at the same level. Senior students take Ontario Grade 12 University Math (MHF4U and MCV4U) or Waterloo Math Contests: Gauss to Euclid, and younger children take a maths course built for their age. The first lesson is free.',
  lead: 'Probability is the part of school math most Vaughan families never hear about until Grade 12, when MDM4U appears on a course selection sheet. Yet chance and data run through Ontario math from the early grades, and the reasoning they need, asking &ldquo;out of what?&rdquo; before writing any fraction, is the same at age eight and at seventeen. This page follows that reasoning through the Ontario courses, links each stage to the page where we teach it in depth, and then sets one real problem. York Region keeps a record of the street trees along its regional roads, more than twenty thousand of them in Vaughan, and a simple question about maples and tall trees turns into the conditional probability that MDM4U tests.',
  wa: 'Hello Modern Age Coders, I would like a free math class for a student in Vaughan.',

  picks: {
    eyebrow: 'Math course picks for Vaughan',
    h2: 'Four places a Vaughan student can start',
    intro: 'Each suits a grade and a goal; the teacher in the free lesson tells you honestly whether it suits your student.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', band: 'Grades 1 to 5', note: 'Number sense, fractions and first data and chance questions, with every step said out loud.' },
      { course: 'statistics-probability-maths-course', band: 'Grades 10 to 12', note: 'Counting, probability and distributions taught from real data, the core of MDM4U and of any first statistics course.' },
      { course: 'ontario-grade-12-university-math-mhf4u-mcv4u-course', band: 'Grades 11 and 12', note: 'MHF4U and MCV4U support beside the school course. It does not grant an Ontario credit; the school does.' },
      { course: 'waterloo-math-contests-gauss-to-euclid-course', band: 'Grades 7 to 12, contest-minded', note: 'Euclid preparation for final-year students and the earlier CEMC contests, using original problems.' }
    ]
  },

  sections: [
    {
      id: 'chance', tint: '', eyebrow: 'Ontario math in Vaughan',
      h2: 'Chance and data in Ontario math, from the early grades to MDM4U',
      intro: 'Vaughan public schools follow the Ontario curriculum. The table traces data and probability by stage, with our summary of each and a link to the page where we go further.',
      body: [
        { kind: 'table', caption: 'Data and probability through Ontario math, our summary by stage; course titles from the Ontario curriculum service, assessment dates from EQAO for 2026 to 2027', head: ['Stage', 'What the student does with chance and data', 'Read next'], rows: [
          ['Grades 1 to 3', 'Sorting, tallying and describing how likely an everyday event is; EQAO Primary assessment from 4 May to 8 June 2027', '<a class="cg-inline-link" href="/eqao-grade-3-math-practice">Grade 3 practice</a>'],
          ['Grades 4 to 6', 'Graphs, averages and probability as a fraction of outcomes; EQAO Junior assessment in the same window', '<a class="cg-inline-link" href="/eqao-grade-6-math-practice">Grade 6 practice</a>, <a class="cg-inline-link" href="/ontario-grade-6-math-and-coding-help">math and coding</a>'],
          ['Grades 7 and 8', 'Experimental against theoretical probability, and data used to make a decision', '<a class="cg-inline-link" href="/gauss-contest-preparation">Gauss preparation</a>'],
          ['Grade 9, MTH1W', 'Data collection and representation inside the de-streamed course; EQAO Grade 9 from 12 January to 5 February 2027', '<a class="cg-inline-link" href="/mth1w-grade-9-math-explained">MTH1W</a>, <a class="cg-inline-link" href="/eqao-grade-9-math-practice">Grade 9 practice</a>'],
          ['Grade 11', 'MCR3U or MCF3M, which build the function skills later statistics leans on', '<a class="cg-inline-link" href="/mcr3u-functions-tutor">MCR3U</a>, <a class="cg-inline-link" href="/mcf3m-vs-mcr3u">MCF3M or MCR3U</a>'],
          ['Grade 12, MDM4U', 'Mathematics of Data Management: counting, probability, distributions and a culminating data project', '<a class="cg-inline-link" href="/mdm4u-data-management-tutor">MDM4U</a>']
        ] },
        { kind: 'p', text: 'MDM4U is often chosen as the &ldquo;other&rdquo; Grade 12 math course, next to MHF4U Advanced Functions and MCV4U Calculus and Vectors. It is not easier, just different: where calculus asks how fast something changes, data management asks how sure we can be. Students aiming at programs that list both MHF4U and MCV4U can read our <a class="cg-inline-link" href="/mhf4u-advanced-functions-tutor">MHF4U</a> and <a class="cg-inline-link" href="/mcv4u-calculus-and-vectors-tutor">MCV4U</a> pages; the ministry says Advanced Functions must come before or alongside Calculus and Vectors.' },
        { kind: 'p', text: 'A very common probability mistake, at any age, is a missing denominator. A child says a spinner gives &ldquo;three chances&rdquo;; a teenager writes P = 601 without saying out of how many. Fixing that habit early saves marks for years, and the tree lesson below is built to expose it.' },
        { kind: 'callout', h3: 'Next to school, never instead of it', p: 'We teach alongside the school math course and we do not grant Ontario credits. Credits and marks for MDM4U, MHF4U, MCV4U and every course come from the student&rsquo;s school. We are not connected with the Ontario Ministry of Education, EQAO or the Vaughan school boards.' }
      ]
    },
    {
      id: 'trees', tint: 'deep', eyebrow: 'Vaughan data lesson',
      h2: 'Maples, tall trees and a two-way table on Vaughan&rsquo;s regional roads',
      intro: 'York Region publishes a dataset of the street trees along the regional roads it owns or maintains. We downloaded every Vaughan record and built a two-way table. The counts and probabilities below are ours.',
      body: [
        { kind: 'p', text: 'York Region describes the data as the location and information about street trees within regional road right-of-ways owned or maintained by York Region. Its description adds a caveat that a careful student should copy into any report: the data includes all Regional owned street trees in urban areas and partial data available for Regional owned street trees in rural areas. So these are trees on regional roads such as Rutherford Road and Highway 7, not every tree in the city, and the rural count is incomplete by York Region&rsquo;s own account.' },
        { kind: 'table', caption: 'Vaughan rows of the York Region Street Trees layer, downloaded 22 October 2026: our counts', head: ['What we counted', 'Our result'], rows: [
          ['Records for Vaughan (all marked Active)', '20,127'],
          ['Most common trees by common name', 'Ivory Silk Lilac 2,294; Kentucky Coffee Tree 1,496; Silver Maple 963; Honey-Locust 873; Sugar Maple 791'],
          ['Maples (genus Acer, all species)', '4,365, the largest of 53 genera'],
          ['Height bands', '0 to 2 m: 399; 2 to 5 m: 11,483; 5 to 10 m: 4,570; 10 to 15 m: 2,075; 15 to 20 m: 1,041; over 20 m: 429; blank: 130'],
          ['Road section types', 'Urban-Boulevard 14,141; Rural-Ditch 3,865; four smaller types'],
          ['Year planted recorded as 9999', '104 records'],
          ['Streets with the most records', 'Rutherford Road 2,327; Highway 27 1,983; Highway 7 1,692']
        ] },
        { kind: 'table', mt: true, caption: 'Two-way table, our counts: maples against other trees, by whether the tree is in the 15 m or taller bands (blank heights counted as not tall)', head: ['', '15 m or taller', 'Under 15 m or blank', 'Total'], rows: [
          ['Maple', '601', '3,764', '4,365'],
          ['Not a maple', '869', '14,893', '15,762'],
          ['Total', '1,470', '18,657', '20,127']
        ] },
        { kind: 'p', text: 'Every probability in MDM4U is a fraction with a carefully chosen denominator, and a two-way table makes the choice visible. Out of all 20,127 trees, 4,365 are maples, so P(maple) is about 0.217. Out of the 4,365 maples, 601 are in the tall bands, so P(tall given maple) is about 0.138, while for other trees it is 869 out of 15,762, about 0.055. The program below rebuilds the table from the raw files and prints each probability:<code class="cg-mt-2">' + CODE + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The year 9999', p: 'One hundred and four records give 9999 as the year planted. That is not a prediction; it is a placeholder meaning the year is unknown. A student who computes an average planting year without removing it gets a number a few decades in the future.' },
          { h3: 'Blank heights', p: 'One hundred and thirty records have no height band. We counted them as not tall, and the caption says so. Dropping them instead moves P(tall given maple) only from 0.1377 to about 0.139, and checking that is good practice.' },
          { h3: 'A genus, not a name', p: 'Silver Maple, Sugar Maple, Norway Maple and Hedge Maple all belong to Acer. Grouping by the first word of the scientific name, as our code does, catches every maple; grouping by common name would split them.' }
        ] },
        { kind: 'callout', h3: 'Licence and attribution', p: 'Contains public sector information made available under The Regional Municipality of York&rsquo;s Open Data Licence. The counts and probabilities are ours. York Region and the City of Vaughan do not endorse this page or our classes.' }
      ]
    },
    {
      id: 'worked', tint: '', eyebrow: 'A worked problem, ours',
      h2: 'Flip the condition: if a regional-road tree in Vaughan is tall, how likely is it a maple?',
      intro: 'Students who are comfortable with P(tall given maple) often stumble when the question is turned around. This problem, ours, uses the two-way table above.',
      body: [
        { kind: 'p', text: '<strong>Question.</strong> A tree is chosen at random from the 20,127 Vaughan records. You are told it is in the 15 m or taller bands. What is the probability that it is a maple? Compare your answer with P(maple) for a tree chosen with no information at all.' },
        { kind: 'p', text: '<strong>Step 1, change the denominator.</strong> Knowing the tree is tall means we only look at the tall column, which has 1,470 trees. That is the new &ldquo;out of&rdquo;.' },
        { kind: 'p', text: '<strong>Step 2, count the favourable cases.</strong> Of those 1,470 tall trees, 601 are maples. So P(maple given tall) = 601 &divide; 1,470 &asymp; 0.409, about 41 percent.' },
        { kind: 'p', text: '<strong>Step 3, compare.</strong> With no information, P(maple) &asymp; 0.217. Learning that the tree is tall almost doubles the chance it is a maple. The two events are not independent; if they were, the two probabilities would be equal.' },
        { kind: 'p', text: '<strong>Step 4, check with the multiplication rule.</strong> P(maple and tall) = P(maple) &times; P(tall given maple) = (4,365 &divide; 20,127) &times; (601 &divide; 4,365) = 601 &divide; 20,127 &asymp; 0.0299. Dividing that by P(tall) = 1,470 &divide; 20,127 gives 601 &divide; 1,470 again. Two routes, one answer: this is Bayes&rsquo; rule doing nothing more mysterious than changing the denominator.' },
        { kind: 'p', text: '<strong>Try it yourself.</strong> Using the full height bands in the first table, find the probability that a randomly chosen record is in the 2 to 5 m band, then the probability that two records chosen at random without replacement are both in that band. Explain why the second answer is not simply the first one squared.' }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'Waterloo contests in Vaughan',
      h2: 'The Euclid contest for Vaughan students in their final year',
      intro: 'For a Vaughan student in Grade 12, the CEMC contest that matters most is the Euclid. It is longer and deeper than the earlier contests, and it connects to university scholarships.',
      body: [
        { kind: 'table', caption: 'The 2027 Euclid contest, from CEMC&rsquo;s page read on 22 October 2026', head: ['Detail', 'What CEMC says'], rows: [
          ['Who writes it', 'Students in their final year of secondary school, or CEGEP students'],
          ['Date', 'Tuesday 6 April 2027 (North and South America)'],
          ['Paper', '10 questions, a mix of final answer only and full solution'],
          ['Time', '2.5 hours'],
          ['Reach', 'Written each year by over 25,000 participants worldwide']
        ] },
        { kind: 'p', text: 'The University of Waterloo&rsquo;s computer science admission page says that writing a contest such as the Euclid is not required for admission, but writing one of these contests is required for some scholarships offered by the Faculty of Mathematics. For a Vaughan student applying to Waterloo math or computer science, that turns an April Tuesday into a real opportunity. Our <a class="cg-inline-link" href="/euclid-contest-preparation">Euclid preparation page</a> covers the paper, and the probability reasoning in this page&rsquo;s worked problem is close to what Euclid&rsquo;s counting questions need.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Entered by a school', p: 'CEMC accepts entries only from schools. A Vaughan student whose school is not writing can, on CEMC&rsquo;s advice, look for another local school willing to let them join.' },
          { h3: 'Ten years of papers', p: 'CEMC&rsquo;s archive of past contests is free and needs no account. We use it for timed practice and write our own problems for teaching.' },
          { h3: 'Earlier contests', p: 'CEMC lists Pascal, Cayley and Fermat for 23 and 24 February 2027, and the CSMC for 18 November 2026. The <a class="cg-inline-link" href="/cemc-waterloo-contests-preparation">Waterloo contests page</a> lists them all.' }
        ] },
        { kind: 'callout', h3: 'Not connected with CEMC or Waterloo', p: 'CEMC&rsquo;s rule is that &ldquo;all students must participate through their school&rdquo;. We are not connected with CEMC or the University of Waterloo, and we never copy their problems or solutions. Our contest problems are original and labelled as ours.' }
      ]
    },
    {
      id: 'price', tint: '', eyebrow: 'Math tutor price in Vaughan',
      h2: 'Which kind of math help is worth its price for your Vaughan student?',
      intro: 'Fees for each of our formats are listed in the fees section of this page, in the currency for your location. The better question is which format fits the student.',
      body: [
        { kind: 'table', caption: 'Matching the format to the student, our guidance; we do not quote other tutors&rsquo; rates', head: ['If your student...', 'Consider', 'Why'], rows: [
          ['is roughly on track and wants steady practice', 'Our live online group of 15 to 20', 'Structured lessons every week, other students&rsquo; questions to learn from, one monthly fee'],
          ['has one clear gap, such as conditional probability', 'Our one-to-one lessons', 'Time spent only on what is missing, at times you choose, for a higher monthly fee'],
          ['is far ahead or aiming at the Euclid', 'One-to-one, or the contest course', 'Pace and problems set for the student rather than the class'],
          ['needs an adult physically present to stay focused', 'A tutor who visits your home', 'Usually paid by the hour at that tutor&rsquo;s rate, including the travel']
        ] },
        { kind: 'p', text: 'When comparing quotes from Vaughan tutors, put them in the same unit, live teaching hours a month, before comparing numbers. Then ask what the hours contain: is the plan built on the Ontario course code? Does the teacher make the student explain the denominator, as it were, or just give the answer? A fee is only good value if the student is doing the thinking.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From tally charts to conditional probability',
    intro: 'Grades are approximate. In the free lesson the teacher finds the real starting point from what the student can explain.',
    cols: [
      { band: 'Grades 1 to 3', h3: 'Counting and sorting', p: 'Number sense, tallies and simple likely-or-unlikely questions.', courses: ['early-math-foundations', 'elementary-mathematics-complete-masterclass'] },
      { band: 'Grades 4 to 8', h3: 'Fractions and chance', p: 'Fractions, averages and probability as outcomes over total, with Gauss puzzles.', courses: ['comprehensive-middle-school-mathematics-mastery', 'maths-through-coding'] },
      { band: 'Grades 9 and 10', h3: 'Algebra and data', p: 'MTH1W, Grade 10 algebra and data handled with care.', courses: ['complete-high-school-mathematics-mastery', 'waterloo-math-contests-gauss-to-euclid-course'] },
      { band: 'Grades 11 and 12', h3: 'MDM4U, MHF4U, MCV4U', p: 'Probability and distributions, or functions and calculus, beside the school course.', courses: ['statistics-probability-maths-course', 'ontario-grade-12-university-math-mhf4u-mcv4u-course'] }
    ]
  },

  ai: {
    eyebrow: 'Math and AI',
    h2: 'Can a Vaughan student just ask AI for the probability?',
    intro: 'It will give a number. Whether the number answers the question that was asked is another matter.',
    p1: 'Ask a chatbot for &ldquo;the probability a tall tree is a maple&rdquo; and it may well return 0.138, which is the probability a maple is tall: the condition reversed. The arithmetic is perfect and the answer is wrong. Catching that is exactly the skill MDM4U assesses, and it cannot be delegated.',
    p2: 'Our teachers ask students to name the denominator before computing, sketch the table, and only then use a calculator or code to check. Anything handed in for marks is written by the student alone.',
    closer: 'Data management is about judging evidence. A tool can count; it cannot decide which count answers the question.',
    blogAnchor: 'how clear thinking still beats the shortcut'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online math for students across Vaughan',
    intro: 'Woodbridge, Maple, Thornhill or Kleinburg: lessons reach the student at home, with no drive along Major Mackenzie.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Clock changes', p: 'Clocks in Vaughan fall back an hour on 1 November 2026 (UTC-5) and spring forward on 14 March 2027 (UTC-4). Every class is stated in Eastern time, and we re-confirm in each changeover week.' },
      { h3: 'Tables drawn live', p: 'Students build two-way tables and tree diagrams on a shared board, so the teacher sees which count went in the wrong cell.' },
      { h3: 'Planned from the course', p: 'Whatever the student is enrolled in, Grade 7 math, MTH1W or MDM4U, sets the plan and the pace.' },
      { h3: 'Vaughan numbers', p: 'A Vaughan number on 365, 742, 289 or 905 works in the form; type ten digits and skip the leading 1.' },
      { h3: 'First lesson free', p: 'Your student gets a genuine lesson pitched at the right level and a course recommendation at the end; we never ask for card details.' }
    ],
    spec: { title: 'No Vaughan centre', p: 'Modern Age Coders has no tutoring centre in Vaughan and claims none. Every lesson is live and online, taught from India, and a student needs a computer with a microphone and a steady connection.' }
  },

  fees: {
    h2: 'Math tutoring fees for Vaughan',
    intro: 'The amounts below appear in the currency for where you are.',
    first: 'A full live lesson at no cost, ending with a recommended course and level.',
    group: 'The monthly fee for a live group of 15 to 20 students at the same level.',
    private: 'The monthly fee for one teacher with one student, at times that suit you.',
    closer: 'Vaughan families pay the Canada-wide fee; there is no city surcharge. We charge nothing until the free lesson is done and you have said yes to a course and a time.'
  },

  reviewsH2: 'Vaughan families can read what others wrote about us on Google',

  book: {
    h2: 'Book a free math lesson for your Vaughan student',
    intro: 'Tell us the grade and any course code. A Grade 2 child might start with a sorting game; a Grade 12 MDM4U student might start with the street tree table.',
    success: 'Thank you. The team will be in touch soon about a math class for Vaughan.'
  },

  faq: {
    h2: 'Vaughan math tutoring questions',
    intro: 'What Vaughan parents and students ask us most.',
    items: [
      { q: 'Can I find a math tutor in Vaughan through you?', a: 'Yes, online. We have no Vaughan office; students are taught live from home, one to one or in a group of 15 to 20 at the same level.' },
      { q: 'How much does a math tutor in Vaughan cost with you?', a: 'The fees section on this page shows the free first lesson and the monthly fees for a group or one-to-one, in your own currency. We do not put figures in this answer.' },
      { q: 'What is the difference between your class and a private tutor at home?', a: 'A home tutor travels to you and normally charges per hour. We teach online: a live group of 15 to 20 at one level for a monthly fee, or one-to-one online for a higher monthly fee, with nobody travelling.' },
      { q: 'Do you tutor MDM4U data management?', a: 'Yes. Probability, counting and distributions are taught from real data, as in the tree lesson on this page, alongside the school course.' },
      { q: 'Will your lessons count toward an Ontario credit?', a: 'They will not. Credits are not something we grant; the school awards the credit and the mark, and we teach beside that course.' },
      { q: 'Can you prepare a Vaughan student for the Euclid contest?', a: 'Yes. CEMC lists the 2027 Euclid for Tuesday 6 April 2027. The student writes it through a school, and we prepare with original problems.' },
      { q: 'Does writing the Euclid help with Waterloo admission?', a: 'Waterloo says such a contest is not required for admission, but writing one is required for some scholarships offered by its Faculty of Mathematics.' },
      { q: 'When are your classes for Vaughan students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are given in Eastern time.' },
      { q: 'Do you teach younger children in Vaughan?', a: 'Yes, from about age 6, with short lessons on number sense and explaining each answer.' },
      { q: 'My teen is good at calculus but weak at probability. Is that common?', a: 'It happens. The two need different habits, and probability errors are often about the denominator, which focused practice can fix.' }
    ]
  },

  next: {
    eyebrow: 'More for Vaughan and Canada',
    h2: 'Related math pages for Vaughan students',
    html: 'Our <a class="cg-inline-link" href="/online-math-tutor-canada">math tutoring page for all of Canada</a> covers every province. For Grade 12 courses, see <a class="cg-inline-link" href="/mdm4u-data-management-tutor">MDM4U</a>, <a class="cg-inline-link" href="/mhf4u-advanced-functions-tutor">MHF4U</a> and <a class="cg-inline-link" href="/mcv4u-calculus-and-vectors-tutor">MCV4U</a>; for contests, <a class="cg-inline-link" href="/euclid-contest-preparation">Euclid preparation</a>. The province page is <a class="cg-inline-link" href="/coding-classes-in-ontario">Ontario</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Vaughan math and Canada',
  footerPlaces: [
    { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' },
    { href: '/mdm4u-data-management-tutor', label: 'MDM4U help' },
    { href: '/euclid-contest-preparation', label: 'Euclid contest' },
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/coding-classes-in-canada', label: 'Canada hub' }
  ],

  personalityCss: `
.cg-root.cg-mtv .cg-hero h1 { font-weight: 700; letter-spacing: -0.014em; line-height: 1.07; }
.cg-root.cg-mtv .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-mtv .cg-section-head h2 { max-width: 31ch; }
.cg-root.cg-mtv .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mtv .cg-table caption { text-align: left; font-weight: 600; }
.cg-root.cg-mtv #trees code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.55; padding: 0.9rem 1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-mtv #worked strong { color: var(--cg-accent); }
.cg-root.cg-mtv .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.7rem; }
`,

  dossier: {
    curriculumAuthority: 'Ontario, read 22 October 2026 from the Ontario curriculum content API and saved raw: MDM4U (2007), MHF4U, MCV4U (MHF4U prior or concurrent), MCR3U, MCF3M and MTH1W course records; EQAO 2026-27 windows. CEMC Euclid eligibility, 6 April 2027 date, format, 2.5 hours and reach; Waterloo computer science page on contests and Faculty of Mathematics scholarships; the through-a-school rule. Vaughan area codes and Eastern time offsets from facts-geo.md.',
    localProject: 'York Region Open Data, Street Trees layer (York Region Open Data Licence), Vaughan records downloaded 22 October 2026 in 11 pages (count endpoint 20,127). Our counts: Ivory Silk Lilac 2,294 most common; Acer 4,365 of 53 genera; height bands; 104 records with year planted 9999; Rutherford Road 2,327. Two-way table maple x tall (15 m or more): 601, 3,764, 869, 14,893; P(maple) 0.217, P(tall given maple) 0.138, P(tall given other) 0.055, P(maple given tall) 0.409. Labelled as ours. Lesson family: conditional probability and two-way tables.',
    requiredMentions: [
      'Ivory Silk Lilac 2,294',
      'Kentucky Coffee Tree 1,496',
      'Rutherford Road 2,327',
      '601 &divide; 1,470',
      'Urban-Boulevard 14,141',
      'Year planted recorded as 9999',
      '14,893',
      'So P(maple given tall) = 601',
      'over 25,000 participants worldwide',
      'the largest of 53 genera'
    ],
    sources: [
      { claim: 'York Region Open Data: Street Trees item (purpose, urban and partial rural coverage, licence pointer).', url: 'https://www.arcgis.com/home/item.html?id=293d80c24bf54a4f8ab66bddaeaab184' },
      { claim: 'York Region: Street Trees map service layer queried for Vaughan records.', url: 'https://ww8.yorkmaps.ca/arcgis/rest/services/OpenData/Biodiversity/MapServer/0' },
      { claim: 'York Region Open Data Licence (commercial use, credit statement, non-endorsement), saved PDF.', url: 'https://insights-york.opendata.arcgis.com/' },
      { claim: 'Ontario curriculum content API: senior math course records including MDM4U.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items?system.type=l2___course&elements.code%5Bin%5D=MCR3U,MHF4U,MCV4U,MDM4U,MPM2D,MTH1W,MCF3M,MAP4C,MEL4E&depth=0' },
      { claim: 'EQAO: 2026-27 assessment windows.', url: 'https://www.eqao.com/the-assessments/' },
      { claim: 'CEMC: Euclid contest (eligibility, date, format, reach).', url: 'https://cemc.uwaterloo.ca/contests/euclid' },
      { claim: 'University of Waterloo: Computer Science admission page (contests and scholarships).', url: 'https://uwaterloo.ca/future-students/programs/computer-science' },
      { claim: 'CEMC: how contests work (entry through a school).', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' }
    ],
    rejectedClaims: [
      'Any Vaughan population figure: StatCan was not reachable live.',
      'That these are all of Vaughan\'s trees: refused; the layer covers regional road right-of-ways only, with partial rural data by York Region\'s own description.',
      'Tree health or condition figures: the health field was not downloaded or used.',
      'An average planting year: not printed, because 104 records hold the 9999 placeholder.',
      'Other tutors\' rates in Vaughan: not sourced, so not printed.',
      'Any fee figure or currency in the copy: fees render from the template only.',
      'That our lessons earn an Ontario credit: refused; we do not grant Ontario credits.',
      'Names of Vaughan schools, boards or private people: not used.',
      'Any affiliation with York Region, the City of Vaughan, the Ontario Ministry of Education, EQAO, CEMC or the University of Waterloo.'
    ]
  }
};
