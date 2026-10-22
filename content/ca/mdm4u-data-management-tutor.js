'use strict';
// MDM4U Data Management tutor (ag- school course door; Canada cluster Plan 2, row 17).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, fetched raw with curl on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/mdm4u-data-management-tutor/):
//  - The Ontario Curriculum, Grades 11 and 12: Mathematics (2007), www.edu.gov.on.ca/eng/curriculum/secondary/math1112currb.pdf
//    (math1112currb.pdf, pdftotext math1112currb-raw.txt). MDM4U description: "This course broadens students' understanding of
//    mathematics as it relates to managing data."; "carry out a culminating investigation that integrates statistical concepts and
//    skills"; "Students planning to enter university programs in business, the social sciences, and the humanities will find this course
//    of particular interest."; prerequisite "Functions, Grade 11, University Preparation, or Functions and Applications, Grade 11,
//    University/College Preparation"; programme overview "is designed to satisfy the prerequisites for a number of university programs
//    that may include statistics courses, such as those found in the social sciences and the humanities" and "Fathom, a
//    ministry-licensed dynamic statistical program."; five strands A Counting and Probability, B Probability Distributions, C
//    Organization of Data for Analysis, D Statistical Analysis, E Culminating Data Management Investigation; overall expectations in
//    plain-word fragments; specific expectations B2.6 "approximately 68% of the data values are within one standard deviation of the
//    mean and approximately 95% of the data values are within two standard deviations of the mean", B2.5 "the probability that a
//    continuous random variable takes any single value is zero", B2.8 "recognize a z-score as the positive or negative number of
//    standard deviations from the mean", B1.4 binomial "(e.g., independent trials)", B1.5 hypergeometric "(e.g., dependent trials)",
//    C2.1 "the need for randomization, replication, and control in experimental studies", C2.2 "simple random, systematic, stratified,
//    convenience, voluntary", C2.3 "response bias, measurement bias, non-response bias, sampling bias", D1.4 "accurate to within 3
//    percentage points, 19 times out of 20", D2.4 "determine the fit of an individual data point to the linear model", E1.1 "pose a
//    significant problem of interest", E1.5 "specify any limitations of the conclusions", E2.4 "critique the mathematical work of
//    others in a constructive manner", strand E footnote "by addressing a single problem on probability and statistics or by
//    addressing two smaller problems, one on probability and the other on statistics."
//  - Ontario curriculum content API (facts-schools-contests.md fact 38, ontario/api-senior-math-courses.json): MDM4U "Mathematics of Data
//    Management", 2007, Grade 12, University Preparation, same prerequisite text.
//  - future.utoronto.ca/undergraduate-programs/computer-science/ (fact 211): Mississauga (TMX) lists MDM4U as "Recommended".
//  - future.utoronto.ca/undergraduate-programs/psychology/ (raw copy): Scarborough block (TPS, TXF): "One Math (Calculus & Vectors /
//    Advanced Functions / Mathematics of Data Management)" marked Recommended; Mississauga block (TMP) lists ENG4U / EAE4U, MHF4U and
//    SBI4U; St. George block (TLG) lists ENG4U / EAE4U, SBI4U and MCV4U.
//  - uwaterloo.ca/future-students/programs/accounting-and-financial-management (raw copy): recommended courses "Principles of Financial
//    Accounting" and "Mathematics of Data Management".
//  - Data: Environment and Climate Change Canada historical daily data, station TORONTO CITY (climate ID 6158355, station ID 31688), 2025,
//    bulk CSV from climate.weather.gc.ca (toronto-city-31688-2025-daily.csv, 365 rows, 6 days with no max/min, flag M). Licence: ECCC
//    Data Services End-use Licence, version 2.1.1, August 2026 (eccc-licence.html): "including for commercial purposes"; attribution
//    "Data Source: Environment and Climate Change Canada".
//  - Time: facts-geo.md section 3 (tzdb 2026e).
// Our own material, labelled on the page: toronto_2025.py (Python 3.13, standard library only) and its printed output
// (toronto_2025_output.txt): 359 usable days, mean high 13.8, median 13.7, sd 11.3, quartiles 3.9 / 23.8, within 1 sd 58.8%, within
// 2 sd 99.4%, July n 31 mean 29.2 sd 2.9 within 1 sd 58.1% within 2 sd 100.0%, hottest July day 33.3 z 1.42, month means and sds,
// r = 0.968, low = 0.866 x high - 6.03, predicted low 15.6 on a 25.0 degree day. Worked problems and practice answers checked in
// verify_ours.py: team of 4 from 7 + 5 (P at least one Grade 12 = 92/99, exactly two each = 14/33, expected Grade 12 count 5/3);
// guessing 20 four-option questions (exact P(X >= 8) = 0.1018, normal with continuity correction 0.0984, without 0.0607).
// Lesson family: check the shape before you choose the model.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const PY = `# MDM4U mini investigation (ours): Toronto City daily temperatures, 2025.
# Data Source: Environment and Climate Change Canada (station TORONTO CITY, climate ID 6158355).
import csv
import statistics as st

with open("toronto-city-31688-2025-daily.csv", encoding="utf-8-sig") as f:
    rows = list(csv.DictReader(f))

def col(name):                      # header text starts "Max Temp (" etc.
    return next(k for k in rows[0] if k.startswith(name))

MAX, MIN = col("Max Temp ("), col("Min Temp (")
days = [r for r in rows if r[MAX] != "" and r[MIN] != ""]   # drop missing (flag M)
highs = [float(r[MAX]) for r in days]
lows = [float(r[MIN]) for r in days]
print("days in file:", len(rows), " usable:", len(days))

# 1. One variable: the daily high
q1, q2, q3 = st.quantiles(highs, n=4, method="inclusive")
mean, sd = st.mean(highs), st.stdev(highs)
print(f"high: mean {mean:.1f}, median {q2:.1f}, sd {sd:.1f}")
print(f"quartiles {q1:.1f} / {q3:.1f}, IQR {q3 - q1:.1f}")
print(f"lowest high {min(highs):.1f}, highest high {max(highs):.1f}")
for k in (1, 2):
    share = sum(1 for h in highs if abs(h - mean) <= k * sd) / len(highs)
    print(f"within {k} sd of the mean: {share:.1%}")

for lo in range(-10, 40, 10):       # a text histogram, 10-degree bins
    n = sum(1 for h in highs if lo <= h < lo + 10)
    print(f"{lo:>4} to {lo + 10:<3} {n:>3} " + "#" * (n // 4))

# 2. One month: is July closer to normal?
july = [float(r[MAX]) for r in days if r["Month"] == "07"]
jm, js = st.mean(july), st.stdev(july)
j1 = sum(1 for h in july if abs(h - jm) <= js) / len(july)
j2 = sum(1 for h in july if abs(h - jm) <= 2 * js) / len(july)
print(f"July: n {len(july)}, mean {jm:.1f}, sd {js:.1f}, within 1 sd {j1:.1%}, within 2 sd {j2:.1%}")
print(f"hottest July day {max(july):.1f}, z = {(max(july) - jm) / js:.2f}")
for m in ("01", "04", "07", "10"):  # how spread out is each season?
    x = [float(r[MAX]) for r in days if r["Month"] == m]
    print(f"month {m}: mean {st.mean(x):5.1f}, sd {st.stdev(x):.1f}")

# 3. Two variables: does the high predict the low?
r = st.correlation(highs, lows)
slope, intercept = st.linear_regression(highs, lows)
print(f"r = {r:.3f}, r squared = {r * r:.3f}")
print(f"low = {slope:.3f} x high + ({intercept:.2f})")
print(f"predicted low on a 25.0 degree day: {slope * 25 + intercept:.1f}")`;

const OUT = `days in file: 365  usable: 359
high: mean 13.8, median 13.7, sd 11.3
quartiles 3.9 / 23.8, IQR 19.9
lowest high -9.8, highest high 36.5
within 1 sd of the mean: 58.8%
within 2 sd of the mean: 99.4%
 -10 to 0    47 ###########
   0 to 10   96 ########################
  10 to 20   77 ###################
  20 to 30  115 ############################
  30 to 40   24 ######
July: n 31, mean 29.2, sd 2.9, within 1 sd 58.1%, within 2 sd 100.0%
hottest July day 33.3, z = 1.42
month 01: mean  -1.1, sd 3.7
month 04: mean  12.6, sd 6.3
month 07: mean  29.2, sd 2.9
month 10: mean  16.6, sd 5.5
r = 0.968, r squared = 0.936
low = 0.866 x high + (-6.03)
predicted low on a 25.0 degree day: 15.6`;

const SRC_DOC = '<a class="ag-inline-link" href="https://www.edu.gov.on.ca/eng/curriculum/secondary/math1112currb.pdf" rel="noopener" target="_blank">The Ontario Curriculum, Grades 11 and 12: Mathematics (2007)</a>';
const ECCC = '<a class="ag-inline-link" href="https://climate.weather.gc.ca/historical_data/search_historic_data_e.html" rel="noopener" target="_blank">Environment and Climate Change Canada historical climate data</a>';
const LIC = '<a class="ag-inline-link" href="https://eccc-msc.github.io/open-data/licence/readme_en/" rel="noopener" target="_blank">ECCC Data Services End-use Licence</a>';

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'MDM4U TUTOR', blurb: 'Data Management from the 2007 Ontario curriculum, with a Python investigation of Toronto weather data, two probability problems, twelve practice questions and a culminating investigation guide.' },
  slug: 'mdm4u-data-management-tutor',
  code: 'mdmt',
  accent: '#1E7011',
  accentRationale: 'MDM4U tutor, Canada: a field green, #1E7011, allocated for this row; 6.4 RGB units from the nearest site accent (#247212), 16.7 from the nearest built Canada page (#17610F), but only 12.0 from the alloc.tsv accent of the unbuilt row coding-and-ai-classes-in-edmonton (#2A7011), under the 14 floor: kept as allocated and flagged in the report; contrast 5.86 on the paper #FBF8F2 and 5.04 on the deepest tint #EDE7DA',
  pageType: 'market',
  market: CA,
  courseCodePage: true,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'MDM4U Data Management tutor',
  title: 'MDM4U Data Management Tutor: Grade 12 Help and Practice',
  description: 'MDM4U tutor for Ontario Grade 12: the five strands from the curriculum, a Python investigation of Toronto weather data, worked probability and practice.',
  ogDescription: 'Mathematics of Data Management explained from the 2007 Ontario curriculum: counting, probability distributions, data collection, statistics and the culminating investigation. With a Python analysis of real Toronto temperatures and twelve practice questions.',
  twitterDescription: 'MDM4U Data Management, strand by strand, with a real-data Python investigation.',
  pageName: 'MDM4U Data Management Tutor',
  webPageDescription: 'A guide for Ontario Grade 12 students and parents to MDM4U, Mathematics of Data Management, built from the 2007 curriculum document, with a Python investigation of Environment and Climate Change Canada data, two worked probability problems, twelve practice questions and a culminating investigation plan.',
  courseDescription: 'Live online MDM4U help for Ontario Grade 12 students, in a batch or one to one, alongside the school course, including support with the culminating investigation. No Ontario credit is granted.',
  crumbs: [{ name: 'Canada', href: '/coding-classes-in-canada' }, { name: 'Ontario', href: '/coding-classes-in-ontario' }],
  crumbLabel: 'MDM4U tutor',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#covers', label: 'Five strands' },
    { href: '#worked', label: 'Probability' },
    { href: '#project', label: 'Python project' },
    { href: '#investigation', label: 'Culminating task' },
    { href: '#practice', label: 'Practice' }
  ],
  eyebrow: 'Ontario &middot; Grade 12 &middot; MDM4U Data Management',
  h1: 'MDM4U Data Management tutor, with real data',
  lede: 'Data Management is the Grade 12 math course that ends with a project of the student&rsquo;s own: a question, a data set, and a report defended in front of the class. Before that come counting, probability, distributions and statistics, each with its own traps. This page sets out MDM4U from the 2007 curriculum, solves two probability problems, runs a short Python investigation on real Toronto weather data, and gives twelve practice questions of ours. We teach alongside the school course and do not grant Ontario credits; the credit comes from the student&rsquo;s school.',
  secondaryCta: { href: '#project', label: 'See the Python project' },
  wa: 'Hello Modern Age Coders, my teen in Ontario is taking MDM4U Data Management and would like help, including with the culminating investigation. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; Statistics, probability and the culminating investigation',
  spec: [
    ['Course', 'MDM4U, Mathematics of Data Management'],
    ['Grade', '12, university preparation'],
    ['Before it', 'MCR3U or MCF3M'],
    ['Strands', 'Five, ending in an investigation'],
    ['Tools', 'Spreadsheets, Fathom, or Python'],
    ['Format', 'A batch, or one to one'],
    ['Credit', 'None granted: the school grants it'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In brief',
  capsule: 'MDM4U is Mathematics of Data Management, Ontario&rsquo;s Grade 12 university-preparation course in counting, probability, probability distributions and statistics, ending in a culminating investigation. It follows MCR3U or MCF3M. Modern Age Coders teaches MDM4U live online, in a batch or one to one, through our course Statistics and Probability: Data to Hypothesis Testing.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Three courses for a Data Management student',
    lede: 'The first matches MDM4U&rsquo;s statistics and probability closely. The second goes deeper, and the third adds the programming that makes a culminating investigation easier.',
    items: [
      { course: 'statistics-probability-maths-course', code: 'MDMT / 01', title: 'Statistics and probability', note: 'Counting, distributions, sampling, correlation and regression: the core of MDM4U, taught live.' },
      { course: 'ap-statistics-maths-exam-prep-course', code: 'MDMT / 02', title: 'Statistics, further', note: 'Inference and study design in more depth, for students heading into social science or business.' },
      { course: 'data-science-course-for-teens-python-data', code: 'MDMT / 03', title: 'Data science for teens', note: 'Python for cleaning, summarising and charting a real data set, the skills behind the project below.' }
    ]
  },

  sections: [
    {
      id: 'covers', tint: 'tint', eyebrow: 'The Ontario curriculum',
      h2: 'What MDM4U covers: five strands, one investigation',
      lede: 'MDM4U&rsquo;s course description reads: &ldquo;This course broadens students&rsquo; understanding of mathematics as it relates to managing data.&rdquo; Students &ldquo;carry out a culminating investigation that integrates statistical concepts and skills&rdquo;. Unlike the other Grade 12 university math courses, it has five strands, and the fifth is the investigation itself.',
      body: [
        { kind: 'table', caption: 'MDM4U strands and what the overall expectations ask, from the 2007 Ontario mathematics curriculum (read 22 October 2026)', head: ['Strand', 'From the overall expectations', 'In class (our reading)'], rows: [
          ['A. Counting and Probability', 'solve problems involving &ldquo;the probability of an event or a combination of events for discrete sample spaces&rdquo;, and apply &ldquo;permutations and combinations&rdquo;', 'Sample spaces, complements, independence and conditional probability, then counting with factorials, permutations and combinations'],
          ['B. Probability Distributions', 'discrete distributions with &ldquo;expected values&rdquo;; continuous distributions, standard deviations and &ldquo;key features of the normal distribution&rdquo;', 'Uniform, binomial and hypergeometric distributions, then the normal curve and z-scores'],
          ['C. Organization of Data for Analysis', 'the role of data and &ldquo;the variability inherent in data&rdquo;; &ldquo;the characteristics of a good sample, some sampling techniques, and principles of primary data collection&rdquo;', 'Types of data, sampling methods, kinds of bias, and designing a fair survey'],
          ['D. Statistical Analysis', 'draw conclusions from &ldquo;one-variable data using numerical and graphical summaries&rdquo; and from two-variable data; applications in &ldquo;the media and the advertising industry&rdquo;', 'Mean, median, spread and boxplots; scatter plots, correlation and regression; reading statistics in the news critically'],
          ['E. Culminating Data Management Investigation', '&ldquo;design and carry out a culminating investigation&rdquo;, then communicate the findings and critique the investigations of others', 'A project with a question, data, analysis, a written report and a short presentation']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The detail that shows up on tests',
          left: [
            'Strand B states the empirical rule word for word: &ldquo;approximately 68% of the data values are within one standard deviation of the mean and approximately 95% of the data values are within two standard deviations of the mean&rdquo;. It also defines a z-score as &ldquo;the positive or negative number of standard deviations from the mean&rdquo;. Both feed directly into our Python project below, where the rule is tested on real data and partly fails.',
            'The binomial and hypergeometric distributions are told apart by one condition: the curriculum ties the binomial to &ldquo;(e.g., independent trials)&rdquo; and the hypergeometric to &ldquo;(e.g., dependent trials)&rdquo;. Choosing the right one is often the whole question, as our first worked problem shows.'
          ],
          rightH3: 'Data collection is examined, not assumed',
          right: [
            'Strand C names the sampling methods students must compare, &ldquo;simple random, systematic, stratified, convenience, voluntary&rdquo;, and the biases they must recognise: &ldquo;response bias, measurement bias, non-response bias, sampling bias&rdquo;. It also asks for &ldquo;the need for randomization, replication, and control in experimental studies&rdquo;.',
            'Strand D brings this to the news. Students interpret a statistic that is &ldquo;accurate to within 3 percentage points, 19 times out of 20&rdquo;, a phrasing often seen in published polls, and they use residuals to &ldquo;determine the fit of an individual data point to the linear model&rdquo;.'
          ] },
        { kind: 'two', mt: true,
          leftH3: 'Who the course is for',
          left: [
            'The description says that students &ldquo;planning to enter university programs in business, the social sciences, and the humanities will find this course of particular interest.&rdquo; The programme overview adds that it &ldquo;is designed to satisfy the prerequisites for a number of university programs that may include statistics courses, such as those found in the social sciences and the humanities&rdquo;.',
            'It is also the Grade 12 university course with the widest entry: MCF3M students can take it as well as MCR3U students.'
          ],
          rightH3: 'Prerequisite, tools and credit',
          right: [
            'The course page lists &ldquo;Functions, Grade 11, University Preparation, or Functions and Applications, Grade 11, University/College Preparation&rdquo;, and the ministry&rsquo;s online course record gives the same text with the year 2007.',
            'The programme overview names spreadsheets and &ldquo;Fathom, a ministry-licensed dynamic statistical program.&rdquo; We teach the same ideas with whatever tool the school uses, and with Python for students who want to code their investigation. MDM4U is one credit, with the usual split of term work and a final evaluation.'
          ] },
        { kind: 'source', html: 'Source: ' + SRC_DOC + ', programme overview and MDM4U pages, read 22 October 2026, and the MDM4U record on the ministry&rsquo;s curriculum website, checked the same day. Expectations that use symbols are described, not quoted. The ministry has no involvement with this page.' }
      ]
    },
    {
      id: 'stuck', tint: 'deep', eyebrow: 'Where students lose marks',
      h2: 'Where MDM4U gets tricky',
      lede: 'Data Management has a reputation as the gentler Grade 12 math course. The algebra is lighter, but the reasoning is subtle, and a wrong first decision sinks an otherwise perfect solution. These are the decisions we see go wrong most.',
      body: [
        { kind: 'table', caption: 'Decisions that decide an MDM4U answer (ours)', head: ['Decision', 'The common slip', 'The question to ask first'], rows: [
          ['Permutation or combination?', 'Using a permutation when order does not matter, which overcounts', 'If I swap two chosen items, is it a different outcome?'],
          ['Direct count or complement?', 'Adding up many cases for an &ldquo;at least one&rdquo; question', 'Is the opposite event a single, easy case?'],
          ['Independent or mutually exclusive?', 'Treating the two words as the same idea', 'Can both happen at once? Does one change the other&rsquo;s probability?'],
          ['Binomial or hypergeometric?', 'Using the binomial when items are drawn without replacement', 'Does each trial change the chances of the next?'],
          ['Is a normal model fair?', 'Using z-scores on data that is skewed or has two humps', 'What does the histogram look like?'],
          ['Correlation or cause?', 'Reading a high r as proof that one variable drives the other', 'Could a third variable move both?']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Words carry the maths', p: 'In MDM4U, &ldquo;at least&rdquo;, &ldquo;given that&rdquo; and &ldquo;without replacement&rdquo; each change the method. We have students underline them before writing a single number.' },
          { h3: 'Tables beat formulas early', p: 'A tree diagram or a two-way table makes conditional probability visible. Formulas come after the picture makes sense, not before.' },
          { h3: 'Interpretation earns marks', p: 'A correlation of 0.97 is a number. Saying what it does and does not show is the answer the marker is looking for.' }
        ] }
      ]
    },
    {
      id: 'worked', tint: 'tint', eyebrow: 'Worked problems, ours',
      h2: 'Two probability problems, solved with the reasoning shown',
      lede: 'We wrote both problems for this page at MDM4U test level, one on counting and one on distributions. The point of each is the choice of method. Every probability was checked by computer.',
      body: [
        { kind: 'p', html: '<b>Problem 1, counting and probability.</b> A math club has 7 Grade 11 students and 5 Grade 12 students. A team of 4 is chosen at random. (a) What is the probability the team includes at least one Grade 12 student? (b) What is the probability it has exactly two of each grade?' },
        { kind: 'ol', items: [
          '<b>Decide whether order matters.</b> A team is a group, not a line-up: swapping two members gives the same team. So count with combinations.',
          '<b>Count the whole sample space.</b> Choosing 4 from 12 gives C(12, 4) = 495 equally likely teams.',
          '<b>For (a), use the complement.</b> &ldquo;At least one&rdquo; would mean adding four cases. Its opposite, &ldquo;no Grade 12 student&rdquo;, is one case: all 4 from the 7 Grade 11s, C(7, 4) = 35 ways. So P(at least one) = 1 &minus; 35/495 = 460/495 = 92/99, about 0.929.',
          '<b>For (b), multiply the choices.</b> Choose 2 of the 7 Grade 11s, C(7, 2) = 21, and 2 of the 5 Grade 12s, C(5, 2) = 10. That is 21 &times; 10 = 210 teams, so P = 210/495 = 14/33, about 0.424.',
          '<b>Name the distribution.</b> The number of Grade 12 students on the team follows a hypergeometric distribution: each choice is made without replacement, so the trials are dependent. Its probabilities for 0 to 4 Grade 12 students are 7/99, 35/99, 14/33, 14/99 and 1/99, and the expected number is 5/3.',
          '<b>Check the total.</b> The five probabilities add to 1, and 5/3 is 4 &times; 5/12: the team size times the Grade 12 share of the club. Both checks pass.'
        ] },
        { kind: 'p', mt: true, html: '<b>Problem 2, binomial and normal.</b> A student guesses every answer on a 20-question multiple-choice quiz with four options per question. What is the probability of 8 or more correct? Compare the exact binomial answer with a normal approximation.' },
        { kind: 'ol', items: [
          '<b>Check the binomial conditions.</b> 20 trials, each a success or not, a constant probability of 1/4, and guesses that do not affect each other. All four hold, so X, the number correct, is binomial with n = 20 and p = 0.25.',
          '<b>Find the centre and spread.</b> The expected value is np = 5. The standard deviation is the square root of np(1 &minus; p) = 3.75, about 1.94.',
          '<b>Compute the exact answer.</b> Add P(X = k) = C(20, k)(0.25)<sup>k</sup>(0.75)<sup>20 &minus; k</sup> for k = 8 to 20. With technology the total is about 0.1018: roughly one guesser in ten scores 8 or more.',
          '<b>Approximate with the normal curve.</b> np = 5 and n(1 &minus; p) = 15 are both at least 5, so a normal model is reasonable but only just. Because the binomial is discrete, &ldquo;8 or more&rdquo; starts at 7.5 on a continuous scale: z = (7.5 &minus; 5)/1.94, about 1.29, giving about 0.098.',
          '<b>Compare and explain.</b> 0.098 against 0.102: close. Without the continuity correction, z = (8 &minus; 5)/1.94, about 1.55, gives about 0.061, which is far off. The half-unit shift is what makes the approximation work.'
        ] },
        { kind: 'table', mt: true, caption: 'Three answers to the same question (ours; computed with Python and SymPy)', head: ['Method', 'Calculation', 'P(8 or more correct)'], numCols: [2], rows: [
          ['Exact binomial', 'Sum of C(20, k)(0.25)<sup>k</sup>(0.75)<sup>20 &minus; k</sup>, k = 8 to 20', '0.1018'],
          ['Normal, with continuity correction', 'P(Z &ge; 1.29)', '0.0984'],
          ['Normal, without correction', 'P(Z &ge; 1.55)', '0.0607']
        ] }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'A Python investigation, ours',
      h2: 'A mini investigation with real data: Toronto&rsquo;s daily temperatures in 2025',
      lede: 'This short investigation is ours, and it uses the same steps as a culminating investigation: a question, a reliable secondary source, cleaning, one-variable and two-variable analysis, and honest conclusions. The data is Environment and Climate Change Canada&rsquo;s daily record for the Toronto City station, which anyone can download free.',
      body: [
        { kind: 'p', html: '<b>The questions.</b> (1) What did a typical daily high look like in Toronto in 2025, and does a normal model describe the year? (2) Does a single month fit the normal model better? (3) How well does a day&rsquo;s high temperature predict its low?' },
        { kind: 'ol', items: [
          '<b>Get the data.</b> On ECCC&rsquo;s historical data page, search for the station TORONTO CITY (climate ID 6158355), choose daily data for 2025, and download the CSV. Save it next to the script as toronto-city-31688-2025-daily.csv.',
          '<b>Read before you compute.</b> The file has 365 rows, one per day. Six days have no high or low recorded, marked with the flag M. A real investigation reports this instead of hiding it.',
          '<b>Clean in one line, on purpose.</b> The script keeps only days with both a high and a low, which leaves 359. Deleting rows is a decision, so the report must say how many and why.',
          '<b>Run the script.</b> It uses only Python&rsquo;s standard library, so nothing needs installing. The code and its real output are below.'
        ] },
        { kind: 'code', label: 'Python &middot; toronto_2025.py (ours)', lang: 'python', code: PY, note: 'Written and run with Python 3.13. The statistics module&rsquo;s stdev is the sample standard deviation, often written s. Quartiles use the inclusive method; a spreadsheet or Fathom may give slightly different quartiles, and a report should name the method used.' },
        { kind: 'code', label: 'Output of the run (ours)', lang: 'text', code: OUT },
        { kind: 'table', mt: true, caption: 'What the output shows, set against the empirical rule (ours, from the run above)', head: ['Data set', 'Mean high', 'Standard deviation', 'Within 1 SD', 'Within 2 SD', 'Normal model predicts'], numCols: [1, 2, 3, 4], rows: [
          ['All of 2025, 359 days', '13.8&deg;C', '11.3&deg;C', '58.8%', '99.4%', 'about 68% and 95%'],
          ['July 2025, 31 days', '29.2&deg;C', '2.9&deg;C', '58.1%', '100.0%', 'about 68% and 95%']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Conclusions from the one-variable analysis',
          left: [
            'The year does not fit a normal model. Only 58.8% of days fall within one standard deviation of the mean, well short of 68%, and 99.4% fall within two. The text histogram explains why: there is one hump from 0 to 10&deg;C and another from 20 to 30&deg;C. A year is a mixture of seasons, and a mixture of two groups is flatter than a bell.',
            'The mean (13.8&deg;C) and median (13.7&deg;C) almost agree, so the data is roughly symmetric. Symmetric is not the same as normal; that is the main lesson of this step.'
          ],
          rightH3: 'One month alone',
          right: [
            'July is narrower, with a standard deviation of only 2.9&deg;C, but 31 values is a small sample, and its shares within one and two standard deviations (58.1% and 100.0%) still do not match the bell. The hottest July day, 33.3&deg;C, has a z-score of only 1.42. A student should report that the normal model is not supported here rather than force it.',
            'The four sample months add a finding the question did not ask for: spread is largest in April (6.3&deg;C) and October (5.5&deg;C), and smallest in July (2.9&deg;C). Spring and autumn days are the least predictable.'
          ] },
        { kind: 'two', mt: true,
          leftH3: 'Conclusions from the two-variable analysis',
          left: [
            'The correlation between each day&rsquo;s high and low is r = 0.968, very strong and positive, and r squared = 0.936: about 94% of the variation in daily lows is explained by the linear model on the highs. The regression line is low = 0.866 &times; high &minus; 6.03, so a 25.0&deg;C day predicts a low of about 15.6&deg;C.',
            'The prediction is safe inside the range of the data (highs from &minus;9.8 to 36.5&deg;C in this file). Using the line for a 45&deg;C day would be extrapolation, and the report should say so.'
          ],
          rightH3: 'What the correlation does not show',
          right: [
            'A high temperature does not cause a low temperature. Both are driven by the same things: the season, the air mass over the city, cloud cover. In MDM4U&rsquo;s language this is a common-cause relationship, and it is the sentence that turns a correct number into a full-mark interpretation.',
            'Limitations belong in the report too: one station, one year, and six missing days. A follow-up could compare several years, or a lakeside station with an inland one.'
          ] },
        { kind: 'source', html: 'Data Source: Environment and Climate Change Canada, daily data for TORONTO CITY (climate ID 6158355), 2025, downloaded 22 October 2026 from ' + ECCC + ', used under the ' + LIC + ' (version 2.1.1, August 2026), which allows use &ldquo;including for commercial purposes&rdquo;. The analysis, code and conclusions are ours, and nothing here suggests ECCC endorses them.' }
      ]
    },
    {
      id: 'investigation', tint: 'tint', eyebrow: 'The culminating investigation',
      h2: 'Planning the MDM4U culminating investigation',
      lede: 'Strand E asks students to &ldquo;pose a significant problem of interest&rdquo;, carry out the study, and present it. A footnote allows the work to be done &ldquo;by addressing a single problem on probability and statistics or by addressing two smaller problems, one on probability and the other on statistics.&rdquo; Schools set their own format, so start from the teacher&rsquo;s rubric. The plan below is ours.',
      body: [
        { kind: 'ol', items: [
          '<b>Choose a question you can answer with data you can get.</b> &ldquo;Is Toronto getting warmer?&rdquo; needs decades of data; &ldquo;How did 2025 highs differ by season?&rdquo; needs one file. Pick the second kind first, then widen it.',
          '<b>Find a source you can defend.</b> Government open data, such as ECCC or Statistics Canada, beats a random website. Note the licence and the attribution line as you download.',
          '<b>Write the plan before touching the data.</b> Name the variables, the population and the sample, and list possible sources of bias. The curriculum asks students to consider sample size and bias at this stage, not after.',
          '<b>Clean openly.</b> Record every row you remove and why. A short &ldquo;data decisions&rdquo; paragraph earns credit and protects you from questions.',
          '<b>Analyse one variable, then two.</b> Summaries and a graph for each variable; then a scatter plot, a correlation and a regression line if the question has two variables.',
          '<b>Check the model before you use it.</b> Look at the histogram before applying a normal model, and at the residuals before trusting a line.',
          '<b>Conclude, then limit.</b> State what the data shows, then what it cannot show. The curriculum asks students to &ldquo;specify any limitations of the conclusions&rdquo;.',
          '<b>Rehearse the presentation and the questions.</b> Students also &ldquo;critique the mathematical work of others in a constructive manner&rdquo;, so expect classmates to ask about your sample and your cleaning.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How we help, and where we stop',
          left: [
            'We help students choose a workable question, find a source, plan the analysis, learn the tools and check their reasoning. We read drafts and ask the questions a marker would ask.',
            'We do not write the report or run the analysis for the student. The investigation is assessed as the student&rsquo;s own work, and it is also the part of the course where they learn the most.'
          ],
          rightH3: 'Spreadsheet, Fathom or Python?',
          right: [
            'Use whatever the teacher expects. A spreadsheet is fine for a few hundred rows; Python, as above, handles thousands and makes every step repeatable. Students who already code often find a script easier to explain than a chain of spreadsheet formulas.',
            'Whichever tool is used, the report should show the method in words. A marker cannot award credit for a number whose origin is hidden.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice, ours',
      h2: 'Twelve MDM4U practice questions',
      lede: 'Our own questions, written for this page and checked with Python. They follow the strands in order. Answers with reasons come straight after.',
      body: [
        { kind: 'ol', items: [
          '<b>Arrangements.</b> How many different arrangements are there of the letters in TORONTO?',
          '<b>Order or not.</b> In how many ways can 3 books be chosen from 10? In how many ways can 3 of the 10 be placed in order on a shelf?',
          '<b>Mutually exclusive events.</b> Two dice are rolled. Find P(the sum is 7 or the dice show a double).',
          '<b>Complement.</b> A die is rolled 4 times. Find P(at least one six).',
          '<b>Conditional probability.</b> In a class of 30, 18 take MHF4U, 12 take MDM4U and 7 take both. A student taking MHF4U is picked at random. Find P(they also take MDM4U). Are the two events independent?',
          '<b>Expected value.</b> A game gives 10 points with probability 1/6, 2 points with probability 1/3, and 0 points otherwise. Find the expected points per game.',
          '<b>Binomial.</b> A basketball player makes 30% of three-point attempts. In 10 independent attempts, find P(exactly 3 made).',
          '<b>z-scores.</b> Test marks are normally distributed with mean 68 and standard deviation 8. Find the z-score of a 74 and the share of students below it.',
          '<b>Normal tail.</b> In the same class, what share scored above 84? Compare the table answer with the empirical rule.',
          '<b>Sampling.</b> Name the technique and one bias risk: (a) every tenth name on an alphabetical list, starting from a random one; (b) a survey link posted online that anyone can answer.',
          '<b>Correlation.</b> In our Toronto data, r = 0.968 between daily highs and lows. A classmate says warm days cause warm nights. What type of relationship is this really?',
          '<b>Centre.</b> For the data 3, 4, 4, 5, 5, 6, 40, find the mean and the median. Which better describes a typical value, and why?'
        ] }
      ]
    },
    {
      id: 'answers', tint: 'tint', eyebrow: 'Answers, ours',
      h2: 'Answers, with the reason for each',
      lede: 'Most MDM4U marks are for the method and the interpretation, so each answer gives both.',
      body: [
        { kind: 'ol', items: [
          '<b>420.</b> Seven letters, with T twice and O three times: 7!/(2! &times; 3!) = 5040/12 = 420. Dividing by the repeats removes arrangements that look identical.',
          '<b>120 and 720.</b> Choosing is a combination, C(10, 3) = 120. Shelving is a permutation, 10 &times; 9 &times; 8 = 720. Each choice of 3 can be ordered 3! = 6 ways, and 120 &times; 6 = 720.',
          '<b>1/3.</b> P(sum 7) = 6/36 and P(double) = 6/36. A double always has an even sum, so it can never be 7: the events are mutually exclusive and the probabilities add to 12/36.',
          '<b>About 0.518.</b> The complement is no six in four rolls, (5/6)<sup>4</sup>, about 0.482. So P(at least one) = 1 &minus; (5/6)<sup>4</sup>, about 0.518.',
          '<b>7/18, about 0.389; not independent.</b> Among the 18 MHF4U students, 7 also take MDM4U. Overall, P(MDM4U) = 12/30 = 0.4. Since 0.389 is not 0.4, knowing a student takes MHF4U slightly changes the chance, so the events are dependent, if only just.',
          '<b>7/3, about 2.33 points.</b> E = 10(1/6) + 2(1/3) + 0(1/2) = 10/6 + 4/6 = 14/6. An expected value need not be a possible outcome of one game.',
          '<b>About 0.267.</b> C(10, 3)(0.3)<sup>3</sup>(0.7)<sup>7</sup> = 120 &times; 0.027 &times; 0.0824, about 0.267. The trials are independent with a constant probability, so the binomial applies.',
          '<b>z = 0.75; about 77% scored below.</b> z = (74 &minus; 68)/8 = 0.75, and the normal table gives about 0.7734 to the left of 0.75.',
          '<b>About 2.3%.</b> 84 is two standard deviations above the mean, z = 2. The table gives about 0.0228 above it. The empirical rule says about 95% lie within two standard deviations, leaving about 2.5% in each tail: close, but rounder.',
          '<b>(a) Systematic sampling; (b) a voluntary sample.</b> In (a), bias appears if the list has a pattern every tenth name. In (b), only people who choose to answer respond, usually those with strong views: a voluntary response bias that no sample size fixes.',
          '<b>A common-cause relationship.</b> The season and the weather pattern raise or lower both the high and the low together. A strong correlation alone never shows cause; the context does.',
          '<b>Mean about 9.57, median 5; the median.</b> The single value 40 pulls the mean far above most of the data. The median ignores how extreme the outlier is, so it describes the typical value better.'
        ] }
      ]
    },
    {
      id: 'pathway', tint: 'deep', eyebrow: 'After Grade 12',
      h2: 'MDM4U in university admission: recommended more often than required',
      lede: 'MDM4U appears on admission pages in a different way from Advanced Functions or Calculus and Vectors. These listings are copied from the universities&rsquo; own pages.',
      body: [
        { kind: 'table', caption: 'How Data Management appears on some university admission pages (read 22 October 2026)', head: ['Program', 'How MDM4U is listed', 'Other math on the listing'], rows: [
          ['University of Toronto Mississauga, Computer Science (TMX)', 'MDM4U, marked &ldquo;Recommended&rdquo;', 'MHF4U and MCV4U'],
          ['University of Toronto Scarborough, Psychology (TPS, TXF)', '&ldquo;One Math (Calculus &amp; Vectors / Advanced Functions / Mathematics of Data Management)&rdquo;, marked Recommended', 'Any one of the three'],
          ['University of Toronto Mississauga, Psychology (TMP)', 'Not listed', 'MHF4U'],
          ['University of Waterloo, Accounting and Financial Management', 'A recommended course, with Principles of Financial Accounting', 'Advanced Functions and Calculus and Vectors, each with a 75% minimum']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What this means when choosing Grade 12 courses',
          left: [
            'For many programs, MDM4U strengthens an application without replacing Advanced Functions or Calculus and Vectors. The same psychology program can list MDM4U as one acceptable math option on one campus and ask for Advanced Functions on another, so students should read the listing for the exact campus and program.',
            'For social science and humanities programs that use statistics, the curriculum&rsquo;s own description makes MDM4U the natural fit, and its first-year statistics courses will feel familiar.'
          ],
          rightH3: 'Taking MDM4U with the other Grade 12 courses',
          right: [
            'Many students take MDM4U alongside MHF4U and MCV4U. The courses share little content, so the load is in the volume of work rather than overlapping ideas, and the culminating investigation needs time blocked out weeks ahead.',
            'Requirements change between cycles, so check each program&rsquo;s page in the autumn of Grade 12. We are not connected with either university.'
          ] },
        { kind: 'source', html: 'Sources, read 22 October 2026: <a class="ag-inline-link" href="https://future.utoronto.ca/undergraduate-programs/computer-science/" rel="noopener" target="_blank">University of Toronto, Computer Science</a>; <a class="ag-inline-link" href="https://future.utoronto.ca/undergraduate-programs/psychology/" rel="noopener" target="_blank">University of Toronto, Psychology</a>; <a class="ag-inline-link" href="https://uwaterloo.ca/future-students/programs/accounting-and-financial-management" rel="noopener" target="_blank">University of Waterloo, Accounting and Financial Management</a>.' }
      ]
    },
    {
      id: 'credit', tint: '', eyebrow: 'Credit and timing',
      h2: 'MDM4U online and in summer school: we teach, the school credits',
      lede: 'When a family searches for MDM4U online, it is worth separating two things: getting the credit, and understanding the course. We do the second.',
      body: [
        { kind: 'two',
          leftH3: 'Where the credit comes from',
          left: [
            'An MDM4U credit is granted by the school or program that teaches and evaluates it, including a student&rsquo;s own school, a board summer program, or a private school that is permitted to grant Ontario credits. Modern Age Coders is a tutoring service; we teach alongside the course and do not grant Ontario credits.',
            'That also means we never submit work for a student or contact their school about marks. Our role is the explanation, the practice and the feedback on drafts.'
          ],
          rightH3: 'When help is most useful',
          right: [
            'Three points in the course draw the most requests: the counting unit, where permutations and combinations first collide; the move to distributions and z-scores; and the weeks of the culminating investigation.',
            'A compressed summer MDM4U course leaves little time for the investigation. Starting the question and the data search before the course begins makes a real difference.'
          ] },
        { kind: 'p', mt: true, html: 'We book classes in Eastern time for most of Ontario, which is UTC-4 until the clocks fall back on 1 November 2026 and UTC-5 until they spring forward on 14 March 2027. Our teachers work on India time (UTC+5:30), 9 hours 30 minutes ahead of Eastern time in summer and 10 hours 30 minutes ahead in winter. If you are in a part of northwestern Ontario on another clock, tell us your local time.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your teen is now',
    h2: 'Four stages in Data Management',
    lede: 'Stages we see in our own MDM4U students. They describe reasoning, not marks.',
    table: { caption: 'Stages of an MDM4U student (ours)', head: ['Stage', 'What it sounds like'], rows: [
      ['1. Formula hunter', '&ldquo;Which formula is this one?&rdquo; asked before reading the question twice'],
      ['2. Method chooser', 'Decides between permutation and combination, binomial and hypergeometric, with a reason'],
      ['3. Model checker', 'Looks at the shape of the data before using a normal model or a line'],
      ['4. Investigator', 'Poses a question, cleans data openly, and states what the conclusions cannot show']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your teen to explain the difference between &ldquo;independent&rdquo; and &ldquo;mutually exclusive&rdquo; in their own words. It is a quick test of whether the probability unit has landed.',
      'Watch the calendar for the culminating investigation. It is spread over weeks, and the students who struggle are usually the ones who start late.'
    ] },
    right: { h3: 'For students', ps: [
      'Underline the words that choose the method: at least, given that, without replacement, in order.',
      'Draw the histogram before you use the normal distribution. Our Toronto data shows how often the bell does not fit.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine more courses for data-minded students',
    lede: 'Live online with one regular teacher for each course, taught to a batch or to a single student.',
    bands: [
      { num: 'I', h3: 'Grade 12 math', sub: 'Grades 11 and 12', courses: [
        { code: 'MDMT / G12 / 01', slug: 'ontario-grade-12-university-math-mhf4u-mcv4u-course', title: 'Ontario Grade 12 University Math', blurb: 'Advanced Functions and Calculus and Vectors, the other two Grade 12 courses.' },
        { code: 'MDMT / G12 / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Algebra and functions support across Grades 9 to 12.' },
        { code: 'MDMT / G12 / 03', slug: 'sat-math-prep-course', title: 'SAT Math', blurb: 'Includes data analysis questions, for US applications.' }
      ] },
      { num: 'II', h3: 'Data and code', sub: 'Teens', courses: [
        { code: 'MDMT / DAT / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The language used in the investigation above.' },
        { code: 'MDMT / DAT / 02', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Orange data mining for teens', blurb: 'Visual data analysis and machine learning without code.' },
        { code: 'MDMT / DAT / 03', slug: 'mysql-mastery-for-teens', title: 'SQL for teens', blurb: 'Asking questions of a database, from the first query.' }
      ] },
      { num: 'III', h3: 'After high school', sub: 'University and beyond', courses: [
        { code: 'MDMT / NXT / 01', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Excel, SQL, Python and dashboards for first-year students.' },
        { code: 'MDMT / NXT / 02', slug: 'data-analytics-mathematics-masterclass', title: 'Math for data science', blurb: 'Statistics and linear algebra behind machine learning.' },
        { code: 'MDMT / NXT / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Where probability and data meet real models.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live classes through the semester and the investigation',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school on Eastern time, set by the batch you choose.' },
      { time: 'Weekends', l: 'Eastern time mornings, handy in investigation weeks.' },
      { time: '1-on-1', l: 'Booked around tests, project checkpoints and the final.' }
    ],
    cells: [
      { h3: 'School order', p: 'Units taught as the class meets them.' },
      { h3: 'Method first', p: 'The choice of method, said out loud.' },
      { h3: 'Real data sets', p: 'Open government data, used properly.' },
      { h3: 'Draft feedback', p: 'Questions a marker would ask.' },
      { h3: 'Your tools', p: 'Spreadsheet, Fathom or Python.' },
      { h3: 'Group or private', p: 'Batches of fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Projects by our students',
  projectsLede: 'Students who learn to code with us build projects like these; several started from a data question. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Reviews left on Google by families and students, as they wrote them.',

  fees: {
    h2: 'Fees',
    lede: 'The first class is on us. Ongoing classes come as eight live sessions a month for a monthly fee, shown with its currency code, and you can stop at the end of any month with no term commitment.',
    free: ['Free first class', 'Bring a test or a project draft', 'No card required'],
    group: ['Fifteen to twenty per batch', 'A regular teacher', 'Batch time of your choice', 'Monthly payment'],
    one: ['A private teacher', 'Around tests and checkpoints', 'Built from the school course']
  },

  faq: {
    eyebrow: 'Questions from Ontario families',
    h2: 'MDM4U: what families ask',
    items: [
      { q: 'What is MDM4U?', a: 'MDM4U is Mathematics of Data Management, Grade 12, University Preparation, in Ontario\'s 2007 senior mathematics curriculum. It has five strands: counting and probability, probability distributions, organization of data for analysis, statistical analysis, and a culminating data management investigation.' },
      { q: 'Do you grant the MDM4U credit?', a: 'No. We teach alongside the student\'s school course and do not grant Ontario credits. The credit is granted by the school or program that delivers and evaluates MDM4U. We provide teaching, practice and feedback.' },
      { q: 'What is the prerequisite for MDM4U?', a: 'Functions, Grade 11, University Preparation (MCR3U), or Functions and Applications, Grade 11, University/College Preparation (MCF3M). Both are printed on the MDM4U course page of the 2007 curriculum.' },
      { q: 'Is MDM4U easier than MHF4U or MCV4U?', a: 'It uses less algebra, but it is not automatically easier. The difficulty is in choosing the right method, such as permutation or combination, binomial or hypergeometric, and in interpreting results in words. The culminating investigation also takes sustained work over several weeks.' },
      { q: 'What is the culminating investigation?', a: 'It is the fifth strand: students pose a significant problem, gather and analyse data, draw conclusions with their limitations, write a report and present it. The curriculum allows one problem on probability and statistics or two smaller problems, one on each. Schools set the format and rubric.' },
      { q: 'Will you do my teen\'s culminating investigation?', a: 'No. We help choose a question, find a reliable data source, plan the analysis, learn the tools and review drafts, but the work and the writing stay the student\'s own. That is how it is assessed, and it is where the learning happens.' },
      { q: 'Do universities require MDM4U?', a: 'Some recommend it rather than require it. On 22 October 2026, the University of Toronto Mississauga Computer Science listing marked MDM4U as recommended, and the Scarborough Psychology listing accepted it as one of three recommended math options. Always check the exact program and campus.' },
      { q: 'Can MDM4U be done with Python?', a: 'The course is about the mathematics, not a tool. Schools commonly use spreadsheets or Fathom. Python works well for a culminating investigation with a large data set, and we teach it to students who want to use it, if their teacher accepts it.' },
      { q: 'When are classes for Ontario students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Ontario families book in Eastern time; the clocks change on 1 November 2026 and 14 March 2027.' },
      { q: 'What do MDM4U classes cost?', a: 'The first class is free. Then classes are paid monthly, eight live sessions a month, and you can stop after any month. The fees section of this page shows the current amount for a batch and for one-to-one lessons.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Ontario students working with data and probability.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'All our pages for Canadian families.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor for Canada', p: 'Math tutoring through the Canadian grades.' },
      { href: '/ap-statistics-tutoring-online', label: 'Statistics tutoring', p: 'Inference and study design, one to one.' },
      { href: '/blog/probability-for-beginners', label: 'Probability for beginners', p: 'The ideas under strand A, from scratch.' },
      { href: '/python-for-data-science', label: 'Python for data science', p: 'The tools behind our Toronto investigation.' },
      { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario', p: 'Programming classes for Ontario students.' },
      { href: '/online-math-tutor-12th-grade', label: 'Grade 12 math tutoring', p: 'Help in the final year of high school.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'How a live class with us runs.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us where your teen is in MDM4U: the current unit, the next test, or the stage of the culminating investigation. The first class starts there.',
    readFirst: 'Want to look around first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describes a class, and our <a class="ag-inline-link" href="/python-for-data-science">Python for data science page</a> shows the kind of analysis used above.',
    note: 'All classes are live online with teachers in India: no travel, no home visits, just a video call. Ontario families usually reach us fastest on WhatsApp.',
    formNote: 'There is no charge and no card for the first class.'
  },

  footer: {
    cols: [
      { h4: 'Data and statistics', links: [
        { href: '/courses/statistics-probability-maths-course', label: 'Statistics and probability course' },
        { href: '/courses/data-science-course-for-teens-python-data', label: 'Data science for teens' },
        { href: '/ap-statistics-tutoring-online', label: 'Statistics tutoring' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario' },
        { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' },
        { href: '/python-for-data-science', label: 'Python for data science' }
      ] }
    ],
    bottomRight: 'Look at the shape before choosing the model'
  },

  personalityCss: `
.ag-root.ag-mdmt .ag-hero h1 { letter-spacing: -0.01em; max-width: 22ch; }
.ag-root.ag-mdmt .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-mdmt .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-mdmt .ag-table caption { text-align: left; }
.ag-root.ag-mdmt .ag-code-head span { text-transform: uppercase; letter-spacing: 0.05em; }
.ag-root.ag-mdmt .ag-steps li { margin-bottom: 0.55rem; }
`,

  dossier: {
    curriculumAuthority: 'The Ontario Curriculum, Grades 11 and 12: Mathematics (2007), fetched raw 22 October 2026: MDM4U description and prerequisite; programme overview including Fathom; strands A to E (plain-word fragments); specific expectations B1.4, B1.5, B2.5, B2.6, B2.8, C2.1, C2.2, C2.3, D1.4, D2.4, E1.1, E1.5, E2.4 and the strand E footnote. Ontario curriculum content API record for MDM4U. U of T Computer Science (TMX) and Psychology (TPS/TXF, TMP) pages; Waterloo AFM page. ECCC daily data for Toronto City 2025 and the ECCC Data Services End-use Licence 2.1.1.',
    localProject: 'Our Python mini investigation of Environment and Climate Change Canada daily data for TORONTO CITY (climate ID 6158355), 2025: 365 rows, 6 missing days removed, 359 used; mean high 13.8, median 13.7, sd 11.3; 58.8% within one sd and 99.4% within two, so a normal model does not fit the year (two humps); July sd 2.9, z of hottest day 1.42; month spreads largest in April and October; r = 0.968 between highs and lows, low = 0.866 x high - 6.03, a common-cause relationship. Two worked probability problems (a hypergeometric team choice, 92/99 and 14/33; a binomial guessing quiz, exact 0.1018 vs normal 0.0984 with continuity correction), twelve practice questions, an eight-step culminating investigation plan. Lesson family: check the shape before you choose the model.',
    requiredMentions: ['This course broadens students&rsquo; understanding of mathematics as it relates to managing data.', 'approximately 68% of the data values are within one standard deviation of the mean', 'simple random, systematic, stratified, convenience, voluntary', 'accurate to within 3 percentage points, 19 times out of 20', 'by addressing two smaller problems, one on probability and the other on statistics.', 'Fathom, a ministry-licensed dynamic statistical program.', 'One Math (Calculus &amp; Vectors / Advanced Functions / Mathematics of Data Management)', 'TORONTO CITY (climate ID 6158355)', 'within 1 sd of the mean: 58.8%', 'low = 0.866 x high + (-6.03)', 'P = 210/495 = 14/33', 'Look at the shape before choosing the model'],
    sources: [
      { claim: 'MDM4U description, prerequisite, five strands and expectations, Fathom, the culminating investigation footnote.', url: 'https://www.edu.gov.on.ca/eng/curriculum/secondary/math1112currb.pdf' },
      { claim: 'The MDM4U course record: Mathematics of Data Management, 2007, Grade 12 University Preparation, prerequisite text.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items?system.type=l2___course&elements.code%5Bin%5D=MCR3U,MHF4U,MCV4U,MDM4U,MPM2D,MTH1W,MCF3M,MAP4C,MEL4E&depth=0' },
      { claim: 'U of T Mississauga Computer Science lists MDM4U as recommended.', url: 'https://future.utoronto.ca/undergraduate-programs/computer-science/' },
      { claim: 'U of T Psychology: Scarborough accepts one of MCV4U, MHF4U or MDM4U as a recommended math; Mississauga lists MHF4U.', url: 'https://future.utoronto.ca/undergraduate-programs/psychology/' },
      { claim: 'Waterloo AFM lists Mathematics of Data Management as a recommended course.', url: 'https://uwaterloo.ca/future-students/programs/accounting-and-financial-management' },
      { claim: 'Toronto City daily climate data, 2025, and its licence (commercial use allowed with attribution).', url: 'https://eccc-msc.github.io/open-data/licence/readme_en/' }
    ],
    rejectedClaims: [
      'That the year of Toronto highs is normally distributed: our run shows 58.8% within one sd, so the page says the model does not fit.',
      'That a high temperature causes the low: the page calls it a common-cause relationship.',
      'Quoting the curriculum examples about forest fires, incomes or medical treatment: left out (disaster, money and health content).',
      'That MDM4U is required for the programs listed: the pages read mark it recommended or list it as one option.',
      'That we complete or write any part of a culminating investigation: the page says we do not.',
      'Any population or StatCan figure: none used; the data is weather only.',
      'Any mark or admission outcome from our classes: none promised.',
      'Any affiliation with the Ontario Ministry of Education, ECCC, Waterloo or U of T: none, and the page says so.'
    ]
  }
};
