'use strict';
// High school statistics tutoring, non-AP (ag- guide door; UK and US exams cluster, row US003). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Every fact read raw with curl on 31 October 2026; copies in
// keyword-research-2026-09/uk-us-gap/src/statistics-tutoring-online/:
//  - thecorestandards.org/Math/Content/HSS/ (introduction and overview): "message is often obscured by variability";
//    "Statistics provides tools for describing variability in data and for making informed decisions that take it into
//    account"; "Randomization has two important uses in drawing statistical conclusions"; "A statistically significant
//    outcome is one that is unlikely to be due to chance alone"; probability model "a list or description of the possible
//    outcomes (the sample space)"; independence and conditional probability "can be approached through the analysis of
//    two-way tables"; four domains and their cluster headings.
//  - HSS/ID, HSS/IC, HSS/CP, HSS/MD standard texts: S-ID.A.1 dot plots, histograms, box plots; S-ID.A.4 normal curve "Recognize
//    that there are data sets for which such a procedure is not appropriate"; S-ID.C.9 "Distinguish between correlation and
//    causation"; S-IC.A.1 "a process for making inferences about population parameters based on a random sample"; S-IC.B.4
//    "develop a margin of error through the use of simulation models for random sampling"; S-IC.B.6 "Evaluate reports based
//    on data"; S-CP.A.3 conditional probability as P(A and B)/P(B); S-CP.B.7 Addition Rule; S-MD marked (+).
//  - CCSS Mathematics standards PDF (corestandards.org/wp-content/uploads/2023/09/Math_Standards1.pdf), page 57: (+) marks
//    "Additional mathematics that students should learn in order to take advanced courses such as calculus, advanced
//    statistics, or discrete mathematics"; "All standards without a (+) symbol should be in the common mathematics curriculum
//    for all college and career ready students."
//  - Utah State Board of Education, Utah High School Mathematics Graduation Pathways (2021 PDF): Secondary Math I includes
//    "Descriptive Statistics", Secondary Math II "Conditional Probability", Secondary Math III "Data Collection and Analysis";
//    "Introductory Statistics" listed under Alternative Selections, which "meet graduation requirements but are not sufficient
//    to meet post-secondary requirements"; concurrent-enrollment Statistics (QL) and AP Statistics as a choice after
//    Secondary Math III. Concurrent math flyer: Statistics "Covers descriptive and statistical methods used to understand data."
// Our own material, labelled: a two-way table of 200 students (job and study time), an outlier example (mean 27.125, median 19,
// IQR 8.5, upper fence 36.25), a simulated margin of error (about 0.10 for p-hat 0.58, n = 100), a regression interpretation,
// an expected-value spinner (5/3 points), a twelve-item practice set and a semester support plan.
// Lesson family: variability first; conditional probability read in the right direction.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'COURSE HELP', blurb: 'High school statistics outside AP: the four Common Core domains, two-way tables, simulation and margin of error, with worked examples and practice.' },
  slug: 'statistics-tutoring-online',
  code: 'st',
  accent: '#3B6C75',
  accentRationale: 'High school statistics tutoring: a slate teal #3B6C75 from the US allocation table, 5.52:1 on paper #FBF8F2 and 4.75:1 on the deepest tint, cool and data-like, apart from the warm credit-exam pages',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  routeLabel: 'Statistics tutoring online',
  title: 'Statistics Tutoring Online: High School Stats, Non-AP Help',
  description: 'High school statistics tutoring online: the Common Core S-ID, S-IC, S-CP and S-MD standards explained, two-way tables, margin of error and our own practice set.',
  ogDescription: 'Non-AP high school statistics, from box plots to margin of error. What the Common Core asks for, where students slip, and how live tutoring helps.',
  twitterDescription: 'High school statistics (non-AP) explained from the Common Core, with worked examples.',
  pageName: 'Statistics Tutoring Online',
  webPageDescription: 'A guide for students and parents to high school statistics and probability outside AP, built from the Common Core statistics standards and a state pathway document, with original worked examples, a Python simulation and a practice set.',
  courseDescription: 'High school statistics and probability taught live online for grades 9 to 12, in a class of 15 to 20 or one to one, alongside the student\'s own school course.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Statistics tutoring online',
  navLinks: [
    { href: '#standards', label: 'What is taught' },
    { href: '#hard', label: 'Hard ideas' },
    { href: '#worked', label: 'Worked examples' },
    { href: '#practice', label: 'Practice' },
    { href: '#ladder', label: 'Where it appears' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; High school math &middot; Statistics and probability',
  h1: 'Statistics tutoring online for high school',
  lede: 'Plenty of high school students meet statistics outside the AP track: a semester elective, a unit inside Integrated Math, the data chapters of Algebra 1 and 2, or an introductory statistics course. The arithmetic is rarely the problem. The trouble is the reasoning: why the median beats the mean on skewed data, which way round a conditional probability goes, and what a margin of error actually promises. This page lays out what the Common Core asks for, then works through it.',
  secondaryCta: { href: '#standards', label: 'See the four domains' },
  wa: 'Hello Modern Age Coders, my child is taking high school statistics (not AP) and needs help. Could we book a free first class?',
  heroNote: 'Live math teaching since 2020 &middot; 10,000+ students &middot; grades 9 to 12',
  spec: [
    ['Level', 'High school, non-AP'],
    ['Standards', 'Common Core S-ID, S-IC, S-CP, S-MD'],
    ['Core ideas', 'Variability, randomness, conditional probability'],
    ['Tools', 'Plots, two-way tables, simulation'],
    ['Formats', 'Batch of 15 to 20, or 1-on-1'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'High school statistics outside AP follows the Common Core Statistics and Probability category: interpreting categorical and quantitative data (S-ID), making inferences and justifying conclusions (S-IC), conditional probability (S-CP) and, for advanced courses, using probability to make decisions (S-MD). Modern Age Coders teaches it live online, in a batch of 15 to 20 or 1-on-1, through our Statistics and Probability course.',

  picks: {
    eyebrow: 'Statistics courses',
    h2: 'Three courses for high school statistics',
    lede: 'The statistics course matches a school semester; the other two serve students heading for the AP exam or toward data work.',
    items: [
      { course: 'statistics-probability-maths-course', code: 'ST / 01', title: 'Statistics and probability', note: 'Data, probability and inference at high school level.' },
      { course: 'ap-statistics-maths-exam-prep-course', code: 'ST / 02', title: 'AP Statistics', note: 'For students who move on to the AP course.' },
      { course: 'data-analytics-mathematics-masterclass', code: 'ST / 03', title: 'Math for data science', note: 'Statistics put to work with real data sets.' }
    ]
  },

  sections: [
    {
      id: 'standards', tint: 'tint', eyebrow: 'What is taught',
      h2: 'What does high school statistics cover under the Common Core?',
      lede: 'Four domains sit in the Common Core\'s Statistics and Probability category. Most non-AP courses teach the first three in full and dip into the fourth.',
      body: [
        { kind: 'table', caption: 'Common Core high school Statistics and Probability domains and their clusters (thecorestandards.org, Math/Content/HSS, read 31 October 2026)', head: ['Domain', 'Code', 'Clusters, in the standards\' own headings'], rows: [
          ['Interpreting Categorical and Quantitative Data', 'S-ID', 'Summarize, represent, and interpret data on a single count or measurement variable; on two categorical and quantitative variables; interpret linear models'],
          ['Making Inferences and Justifying Conclusions', 'S-IC', 'Understand and evaluate random processes underlying statistical experiments; make inferences and justify conclusions from sample surveys, experiments and observational studies'],
          ['Conditional Probability and the Rules of Probability', 'S-CP', 'Understand independence and conditional probability and use them to interpret data; use the rules of probability to compute probabilities of compound events in a uniform probability model'],
          ['Using Probability to Make Decisions', 'S-MD', 'Calculate expected values and use them to solve problems; use probability to evaluate outcomes of decisions (all standards marked (+))']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.thecorestandards.org/Math/Content/HSS/" rel="noopener" target="_blank">Common Core High School Statistics and Probability</a> and its domain pages for <a class="ag-inline-link" href="https://www.thecorestandards.org/Math/Content/HSS/ID/" rel="noopener" target="_blank">S-ID</a>, <a class="ag-inline-link" href="https://www.thecorestandards.org/Math/Content/HSS/IC/" rel="noopener" target="_blank">S-IC</a>, <a class="ag-inline-link" href="https://www.thecorestandards.org/Math/Content/HSS/CP/" rel="noopener" target="_blank">S-CP</a> and <a class="ag-inline-link" href="https://www.thecorestandards.org/Math/Content/HSS/MD/" rel="noopener" target="_blank">S-MD</a>.' },
        { kind: 'two', mt: true,
          leftH3: 'What the (+) sign means',
          left: [
            'The Common Core mathematics document marks with (+) the "Additional mathematics that students should learn in order to take advanced courses such as calculus, advanced statistics, or discrete mathematics."',
            'It adds that "All standards without a (+) symbol should be in the common mathematics curriculum for all college and career ready students." So S-ID, S-IC and most of S-CP are meant for everyone, while expected value and the general Multiplication Rule are extras that a statistics elective often includes.'
          ],
          rightH3: 'Why the subject feels different from algebra',
          right: [
            'The Common Core introduction puts it plainly: decisions would be easy "if the data always sent a clear message, but the message is often obscured by variability." Statistics, it says, "provides tools for describing variability in data and for making informed decisions that take it into account."',
            'Algebra rewards one right answer. Statistics rewards a justified judgment: which plot, which measure of center, how much to trust a sample. That shift is where most of our tutoring time goes.'
          ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Shape, center, spread', p: 'The introduction describes distributions as "symmetric, skewed, flat, or bell shaped" and pairs mean with standard deviation, median with interquartile range.' },
          { h3: 'Randomness as a tool', p: 'Random samples support conclusions about a population; random assignment supports a fair comparison of treatments.' },
          { h3: 'Probability models', p: 'A model is "a list or description of the possible outcomes (the sample space)", each given a probability.' }
        ] }
      ]
    },
    {
      id: 'hard', tint: 'deep', eyebrow: 'Hard ideas',
      h2: 'Which parts of high school statistics do students find hardest?',
      lede: 'In our teaching, four ideas cause most of the lost marks: choosing a summary, reading conditional probability, the logic of randomization, and correlation. Each has a precise line in the standards.',
      body: [
        { kind: 'table', caption: 'Four sticking points, the standard that names each, and the habit we build (standard text from thecorestandards.org; the habit column is ours)', head: ['Sticking point', 'Standard', 'What the standard says', 'Habit we build'], rows: [
          ['Mean or median?', 'S-ID.A.2, A.3', 'Use statistics appropriate to the shape of the data; account for possible effects of extreme data points (outliers)', 'Plot first, then pick the summary'],
          ['Which way is the condition?', 'S-CP.A.3, A.5', 'Conditional probability of A given B as P(A and B)/P(B); explain it in everyday language', 'Say "out of the ones that..." aloud before dividing'],
          ['Why randomize?', 'S-IC.B.3', 'Recognize the purposes of and differences among sample surveys, experiments, and observational studies; explain how randomization relates to each', 'Name the study type before any conclusion'],
          ['Correlation is not proof', 'S-ID.C.9', 'Distinguish between correlation and causation', 'Ask what else could explain the pattern']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Randomization does two separate jobs',
          left: [
            'The standards say "Randomization has two important uses in drawing statistical conclusions." A random sample makes it possible to draw valid conclusions about a whole population; random assignment "allows a fair comparison of the effectiveness of those treatments."',
            'Students often blur the two. A survey of randomly chosen students can describe the school but cannot show cause; a randomized experiment can suggest cause but only for the people like those in it.'
          ],
          rightH3: 'Significance, in plain words',
          right: [
            'The Common Core defines it in one sentence: "A statistically significant outcome is one that is unlikely to be due to chance alone, and this can be evaluated only under the condition of randomness."',
            'At this level, students judge significance with simulation rather than formulas. S-IC.B.5 asks them to "use simulations to decide if differences between parameters are significant", which is why our lessons lean on short Python simulations.'
          ] },
        { kind: 'p', mt: true, html: 'The last S-IC standard is the one that lasts longest after school ends: "Evaluate reports based on data." The introduction asks students, when reading statistics in the news, "to consider the study design, how the data were gathered, and the analyses employed as well as the data summaries and the conclusions drawn." We finish most units with a short report, written by us, for students to take apart.' }
      ]
    },
    {
      id: 'worked', tint: 'tint', eyebrow: 'Worked examples',
      h2: 'How do you read a two-way table and a box plot correctly?',
      lede: 'Five examples we wrote ourselves, one per sticking point plus an expected value. None is taken from a textbook, a state test or a released item.',
      body: [
        { kind: 'table', caption: 'Our two-way table: 200 students surveyed on a part-time job and weekly study time (invented data)', head: ['', 'Studies more than 5 hours', 'Studies 5 hours or less', 'Total'], rows: [
          ['Has a part-time job', '24', '56', '80'],
          ['No part-time job', '54', '66', '120'],
          ['Total', '78', '122', '200']
        ], numCols: [1, 2, 3] },
        { kind: 'table', mt: true, caption: 'Reading the table (ours)', head: ['Question', 'Working', 'Answer'], rows: [
          ['P(studies more than 5 hours, given a job)', 'Restrict to the job row: 24 out of 80', '0.30'],
          ['P(studies more than 5 hours, given no job)', 'Restrict to the no-job row: 54 out of 120', '0.45'],
          ['P(has a job, given studies more than 5 hours)', 'Restrict to the first column: 24 out of 78', 'about 0.31'],
          ['Are job and long study independent?', 'P(job) x P(long study) = 0.40 x 0.39 = 0.156, but P(both) = 24/200 = 0.12', 'No, the product rule fails'],
          ['Does a job cause less study?', 'This is an observational survey, not an experiment', 'Not shown; only an association']
        ] },
        { kind: 'table', mt: true, caption: 'Our outlier example: minutes of homework one week, eight students: 12, 15, 15, 18, 20, 22, 25, 90', head: ['Step', 'Working', 'Result'], rows: [
          ['Mean', '217 divided by 8', '27.125 minutes'],
          ['Median', 'Average of the 4th and 5th values, 18 and 20', '19 minutes'],
          ['Quartiles', 'Q1 = median of 12, 15, 15, 18; Q3 = median of 20, 22, 25, 90', 'Q1 = 15, Q3 = 23.5'],
          ['IQR and fence', 'IQR = 8.5; upper fence = 23.5 + 1.5 x 8.5', '36.25, so 90 is an outlier'],
          ['Choice of summary', 'One value drags the mean above seven of the eight students', 'Report median and IQR']
        ] },
        { kind: 'code', mt: true, label: 'margin_of_error_sim.py (our example)', lang: 'Python 3', code: 'import random\n\n# A sample of 100 students: 58 said yes. How far might a sample proportion wander?\np_hat, n, trials = 0.58, 100, 10000\nresults = []\nfor _ in range(trials):\n    yes = sum(1 for _ in range(n) if random.random() < p_hat)\n    results.append(yes / n)\n\nresults.sort()\nlow, high = results[int(0.025 * trials)], results[int(0.975 * trials)]\nprint(f"middle 95% of simulated proportions: {low:.2f} to {high:.2f}")\nprint(f"margin of error is about {(high - low) / 2:.2f}")   # close to 0.10', note: 'Our simulation for S-IC.B.4, which asks students to "develop a margin of error through the use of simulation models for random sampling." Each run differs slightly; the margin comes out near 0.10, so a fair report is "about 48% to 68% say yes".' },
        { kind: 'table', mt: true, caption: 'Two more of ours: a fitted line, and an expected value', head: ['Problem', 'Reasoning', 'Result'], rows: [
          ['A line fitted to quiz score against hours studied is y = 2.4x + 31, with r = 0.62. Interpret it.', 'Slope: each extra hour goes with about 2.4 more points. Intercept: the model predicts 31 at zero hours. r = 0.62 is a moderate positive linear association.', 'Association, not proof that studying caused the gain'],
          ['A spinner awards 0 points half the time, 2 points a third of the time and 6 points a sixth of the time. What is the expected score per spin?', '0 x 1/2 + 2 x 1/3 + 6 x 1/6 = 0 + 2/3 + 1', '5/3, about 1.67 points']
        ] }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice',
      h2: 'Original high school statistics practice problems with answers',
      lede: 'Twelve short problems we wrote across the four domains, then a plan for supporting a one-semester school course.',
      body: [
        { kind: 'table', caption: 'High school statistics practice written by us, answers in the last column', head: ['#', 'Domain', 'Problem', 'Answer'], rows: [
          ['1', 'S-ID', 'Data: 3, 4, 4, 5, 9. Find the mean and the median.', 'Mean 5, median 4'],
          ['2', 'S-ID', 'Which plot shows the five-number summary directly?', 'A box plot'],
          ['3', 'S-ID', 'A data set is strongly right-skewed. Which measure of center fits better?', 'The median'],
          ['4', 'S-ID', 'Heights are roughly normal with mean 160 cm and standard deviation 8 cm. About what percent lie between 152 and 168?', 'About 68%'],
          ['5', 'S-ID', 'Is r = -0.9 weaker than r = 0.5?', 'No, it is stronger (negative)'],
          ['6', 'S-IC', 'A gym asks its own members whether exercise matters. What is the problem?', 'The sample is not random; it is biased'],
          ['7', 'S-IC', 'Volunteers choose whether to try a new study app. Survey, experiment or observational study?', 'Observational study'],
          ['8', 'S-IC', 'A spinning coin lands tails 5 times in a row. Under a fair model, how likely is that?', '1/32, about 0.03'],
          ['9', 'S-CP', 'Number cube: P(even or greater than 4)?', '4/6 = 2/3'],
          ['10', 'S-CP', 'P(A) = 0.5, P(B) = 0.4, P(A and B) = 0.2. Independent?', 'Yes, 0.5 x 0.4 = 0.2'],
          ['11', 'S-CP', 'P(A and B) = 0.12 and P(B) = 0.3. Find P(A given B).', '0.4'],
          ['12', 'S-MD', 'A fair number cube scores its face value. Expected score?', '3.5']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Weeks 1 and 2: one-variable data.</b> Dot plots, histograms and box plots by hand, then the choice between mean with standard deviation and median with IQR.',
          '<b>Weeks 3 and 4: two variables.</b> Two-way tables with joint, marginal and conditional relative frequencies; scatter plots and the meaning of slope and intercept.',
          '<b>Week 5: correlation.</b> Computing r with technology and practising one sentence that separates association from cause.',
          '<b>Weeks 6 and 7: study design.</b> Surveys, experiments and observational studies; bias; simulating a margin of error.',
          '<b>Weeks 8 and 9: probability rules.</b> Sample spaces, the Addition Rule, independence and conditional probability from tables.',
          '<b>Week 10 onward: matching the school calendar.</b> Normal-curve estimates, expected value if the course includes it, and review before each school test.'
        ] },
        { kind: 'p', mt: true, html: 'This plan is ours and follows the order of the Common Core domains; the teacher reorders it to fit the student\'s school textbook and test dates. We never complete graded homework or school projects for a student. We teach the method, and the student does the work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where statistics appears',
    h2: 'Where does statistics show up before and beyond AP?',
    lede: 'One state\'s published pathway shows how statistics threads through every year. Utah\'s graduation pathways chart, from the Utah State Board of Education in 2021, is the example here.',
    table: { caption: 'Statistics in the Utah high school mathematics pathways (Utah State Board of Education, Graduation Pathways PDF, 2021)', head: ['Course or stage', 'Statistics content Utah lists'], rows: [
      ['Secondary Math I', 'Descriptive Statistics'],
      ['Secondary Math II', 'Conditional Probability'],
      ['Secondary Math III', 'Data Collection and Analysis'],
      ['Alternative selection (after Secondary Math II)', 'Introductory Statistics'],
      ['College mathematics credit (after Secondary Math III)', 'A college Statistics course, or AP Statistics']
    ] },
    left: { h3: 'The caution Utah adds', ps: [
      'Utah says its alternative courses, Introductory Statistics among them, "meet graduation requirements but are not sufficient to meet post-secondary requirements."',
      'Families choosing a statistics elective should check whether it is meant as preparation for college math, or as an interest course.'
    ] },
    right: { h3: 'What a college statistics course covers', ps: [
      'Utah\'s concurrent enrollment flyer describes its Statistics course as one that "Covers descriptive and statistical methods used to understand data", recommended for majors such as nursing, psychology and the social sciences.',
      'Other states name and sequence their courses differently, so check your own district\'s course guide.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Math courses around high school statistics',
    lede: 'Courses for the algebra statistics leans on, for the AP route, and for students who want to use data in code.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'The algebra underneath', courses: [
        { code: 'ST / F / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Linear models start here.' },
        { code: 'ST / F / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Grades 9 to 12 in sequence.' },
        { code: 'ST / F / 03', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Grade 6 to 8 data and probability.' }
      ] },
      { num: 'II', h3: 'Statistics', sub: 'School and exam level', courses: [
        { code: 'ST / S / 01', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'The non-AP course.' },
        { code: 'ST / S / 02', slug: 'ap-statistics-maths-exam-prep-course', title: 'AP Statistics', blurb: 'Course and exam.' },
        { code: 'ST / S / 03', slug: 'sat-math-prep-course', title: 'SAT math', blurb: 'Data questions included.' }
      ] },
      { num: 'III', h3: 'Data in practice', sub: 'Beyond the classroom', courses: [
        { code: 'ST / D / 01', slug: 'data-analytics-mathematics-masterclass', title: 'Math for data science', blurb: 'Statistics with real data.' },
        { code: 'ST / D / 02', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Simulation in Python.' },
        { code: 'ST / D / 03', slug: 'college-mathematics-complete-masterclass', title: 'College math', blurb: 'After high school.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Statistics lessons that keep pace with the school course',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, timed to the unit in class.' },
      { time: 'Weekends', l: 'Longer sessions with a data set to explore.' },
      { time: '1-on-1', l: 'Built around the student\'s own textbook.' }
    ],
    cells: [
      { h3: 'Plot before computing', p: 'Every data question starts with a picture.' },
      { h3: 'Sentences, not just numbers', p: 'Interpretations written in context.' },
      { h3: 'Simulation in Python', p: 'Randomness students can watch.' },
      { h3: 'Tables read aloud', p: 'Conditional probability said in words.' },
      { h3: 'Reports to critique', p: 'Our own news-style claims to test.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty, or just one.' }
    ]
  },

  projectsH2: 'Work from our students',
  projectsLede: 'Some students go on to chart their own data in code. See more on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'What families and students have written about us on Google, unedited.',

  fees: {
    h2: 'Fees',
    lede: 'Statistics classes are billed monthly in US dollars, with no long contract. The first class costs nothing, so a student can try a lesson before a parent decides.',
    free: ['A free first class', 'Bring the current unit or worksheet', 'No card needed'],
    group: ['A class of 15 to 20', 'The same teacher each week', 'Pick your batch time', 'Billed monthly'],
    one: ['One teacher, one student', 'Matched to the school syllabus', 'Times that suit you']
  },

  faq: {
    eyebrow: 'Questions students ask',
    h2: 'High school statistics: common questions',
    items: [
      { q: 'What is taught in high school statistics?', a: 'Under the Common Core, high school statistics covers interpreting categorical and quantitative data, making inferences and justifying conclusions, and conditional probability, with expected value and decision-making for advanced courses. Plots, measures of center and spread, two-way tables, regression and simulation run through all of it.' },
      { q: 'Is high school statistics the same as AP Statistics?', a: 'No. AP Statistics is a College Board course with its own exam. A non-AP statistics course or unit follows the state standards and the school\'s own tests, and is usually less formal about inference. We have a separate page for AP Statistics tutoring.' },
      { q: 'Is statistics harder than algebra?', a: 'It is different rather than harder. Algebra usually has one correct answer, while statistics asks students to choose a method and justify a conclusion about messy data. Students who are strong at procedures sometimes find that shift uncomfortable at first.' },
      { q: 'What is conditional probability in simple terms?', a: 'It is a probability worked out inside a smaller group. The Common Core defines the probability of A given B as P(A and B) divided by P(B): out of the outcomes where B happens, what fraction also have A. Reading a two-way table row by row is the easiest way to see it.' },
      { q: 'Why does my child keep losing marks on interpretation questions?', a: 'Usually because the answer gives a number without context. A full interpretation names the variables, the units and the direction, for example that each extra hour goes with about 2.4 more points. We practise those sentences every lesson.' },
      { q: 'Do high school statistics students need a graphing calculator?', a: 'That depends on the school. The Common Core expects technology for some tasks, such as computing a correlation coefficient and estimating areas under the normal curve with calculators, spreadsheets or tables. We also use short Python programs for simulation.' },
      { q: 'Can you help with a statistics project for school?', a: 'We can teach the method: how to frame a question, collect data fairly, choose plots and write a conclusion. We do not collect data for the student, write the report or edit it for a grade. The work must be the student\'s own.' },
      { q: 'Where can I find free high school statistics practice problems?', a: 'Our own practice set is on this page with answers. The student\'s textbook and school materials are the next place to look, since tests follow them. We do not reproduce state test items or publisher questions.' },
      { q: 'When are your statistics classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with the Common Core or any state?', a: 'No. Modern Age Coders is an independent online school. We teach from the published standards and each student\'s school course, and we are not affiliated with any state, district or publisher.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Other math help for high school students and families.',
    items: [
      { href: '/ap-statistics-tutoring-online', label: 'AP Statistics tutoring', p: 'For students on the AP route.' },
      { href: '/algebra-2-tutoring-online', label: 'Algebra 2 tutoring', p: 'Functions and data models together.' },
      { href: '/common-core-math-tutor', label: 'Common Core math tutor', p: 'The standards behind school math.' },
      { href: '/online-math-tutor-10th-grade', label: 'Tenth grade math', p: 'A year when statistics units appear.' },
      { href: '/python-for-data-science', label: 'Python for data science', p: 'Statistics carried into code.' },
      { href: '/online-math-tutor-cost', label: 'Math tutor cost', p: 'How tutoring is usually priced.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us the course name, the unit your child is on and the date of the next test. The teacher starts with one plot and one two-way table to see how your child reasons.',
    readFirst: 'Read <a class="ag-inline-link" href="/how-we-teach">how our classes work</a>, or browse <a class="ag-inline-link" href="/courses">all our courses</a>.',
    note: 'Our teachers teach live from India, with after-school slots across US time zones from Eastern to Pacific. A WhatsApp message is the quickest way to reach us.',
    formNote: 'The first class is free and asks for no payment details.'
  },

  footer: {
    cols: [
      { h4: 'High school math', links: [
        { href: '/ap-statistics-tutoring-online', label: 'AP Statistics' },
        { href: '/algebra-2-tutoring-online', label: 'Algebra 2' },
        { href: '/precalculus-tutoring-online', label: 'Precalculus' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/common-core-math-tutor', label: 'Common Core math' },
        { href: '/online-math-tutor-11th-grade', label: 'Grade 11 math' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'P(A | B) = P(A and B) / P(B)'
  },

  personalityCss: `
.ag-root.ag-st .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-st .ag-capsule { border-left-width: 3px; border-radius: 4px; }
.ag-root.ag-st .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-st .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-st .ag-section-head h2 { max-width: 30ch; }
`,

  dossier: {
    curriculumAuthority: 'Common Core State Standards, High School Statistics and Probability (thecorestandards.org Math/Content/HSS and domain pages ID, IC, CP, MD) and the CCSS mathematics PDF page 57 on (+) standards, read raw 31 October 2026; Utah State Board of Education High School Mathematics Graduation Pathways (2021) and concurrent math flyer.',
    localProject: 'Our worked examples: a 200-student two-way table (P = 0.30 and 0.45, independence test 0.156 vs 0.12); an outlier set (mean 27.125, median 19, IQR 8.5, fence 36.25); a Python margin-of-error simulation (about 0.10 for p-hat 0.58, n = 100); a fitted-line interpretation; an expected-value spinner (5/3). Twelve-item practice set and semester support plan. Lesson family: variability first, conditional probability read in the right direction.',
    requiredMentions: ['message is often obscured by variability', 'Randomization has two important uses in drawing statistical conclusions', 'A statistically significant outcome is one that is unlikely to be due to chance alone', 'develop a margin of error through the use of simulation models for random sampling', 'Evaluate reports based on data.', 'Distinguish between correlation and causation', 'advanced statistics, or discrete mathematics', 'meet graduation requirements but are not sufficient to meet post-secondary requirements', 'Covers descriptive and statistical methods used to understand data'],
    sources: [
      { claim: 'Common Core High School Statistics and Probability introduction and domain overview.', url: 'https://www.thecorestandards.org/Math/Content/HSS/' },
      { claim: 'S-ID, S-IC, S-CP, S-MD standard texts.', url: 'https://www.thecorestandards.org/Math/Content/HSS/IC/' },
      { claim: 'CCSS mathematics PDF: meaning of (+) standards.', url: 'https://corestandards.org/wp-content/uploads/2023/09/Math_Standards1.pdf' },
      { claim: 'Utah High School Mathematics Graduation Pathways: statistics in Secondary Math I to III, Introductory Statistics, college Statistics.', url: 'https://www.schools.utah.gov/curr/mathematics/_mathematics_/_core/CoreStandardsGraduationPathways.pdf' }
    ],
    rejectedClaims: [
      'AP Statistics exam structure: not described here; it lives on our AP Statistics page.',
      'Textbook or state-test items: not reproduced; every example and problem is ours.',
      'Grade improvement promises: refused.',
      'California Department of Education framework pages returned a web-application firewall block; not retried.',
      'Any affiliation with the Common Core, a state or a publisher: none.'
    ]
  }
};
