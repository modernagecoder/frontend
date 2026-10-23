'use strict';
// Nova Scotia (cg- province page, Canada cluster Wave 2, row 94). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md. Not repeated from canada-coding-curriculum-by-province (which
// quotes only the CP12 module list and the CodeHS Java line): this page owns the graduation credit rules, the provincial
// assessment calendar, the Mathematics 10 exam and a provincial open data project.
// curriculum.novascotia.ca and support.novascotia.ca did not connect today (no retry); elearning.ednet.ns.ca was read
// earlier today by the research worker (other-provinces/ns-vs-computer-programming-12.html).
// Spine: what a Nova Scotia student needs to graduate and where programming fits, the assessment calendar from Grade 3 to
// the Mathematics 10 exam, a library statistics project that teaches rates rather than totals, and Atlantic time.
// Sources, read raw on 22 October 2026 (copies in keyword-research-2026-09/ca/src/coding-classes-in-nova-scotia/):
//  - ednet.ns.ca, Credits for Graduation Diploma (creditsforgraduationdiplomaen.pdf): "Students require a minimum of 18
//    credits to graduate. No more than seven of the 18 credits may be for grade 10 courses, and at least five must be for
//    grade 12 courses."; "3 mathematics (one credit at each grade level)"; "1 other from science or technology: eligible
//    courses can be found in the Public School Programs (PSP) within the categories of Sciences; Skilled Trades; Technology
//    Education; and Technology Integration and ICT Courses."; "Extended Mathematics 11 (full year-two credits) meets the
//    requirements of one mathematics credit and one technology credit."; schools are encouraged to allow "20, 21, or even
//    24 credits". The contact named in the PDF is not reproduced.
//  - plans.ednet.ns.ca, Provincial Assessments and Examinations (plans-home.html): "Each year, Nova Scotia students in Grades
//    3, 6, and 8 participate in provincial assessments in literacy (reading and writing) and mathematics."; Grade 10 exams in
//    English 10, Français 10 and Mathematics 10; next administrations Grade 3 "May 10-26, 2027" (en dash in source), Grade 6
//    "TBD", Grade 8 "May 17-June 8, 2027", "Mathematics & Mathematiques 10: June 23, 2027"; "Students will complete the
//    grade 6 and 8 assessments online using school devices instead of on paper." Mathematics 10 page: given after Mathematics
//    10, Pre-IB Mathematics 10, Mathématiques 10, Mathématiques Pré-IB 10; teachers score with a provincial Marking Guide;
//    "the exam counts for 20% of the final course mark"; "one two-hour session"; on paper, multiple choice and constructed
//    response. Grade 6 page: October and beginning of November; math in four parts of about 30 minutes. Grade 8 page: May
//    and June; "Results are not used to determine report card grades or grade level placement decisions."
//  - ednet.ns.ca Public School Program pages: Primary to Grade 3 integrate "information technology" with language arts and
//    mathematics; Grades 7 and 8 "the numeracy block which includes mathematics, technology and science"; "The secondary
//    school program begins at grade 9."; "Advanced Placement courses are available for students in Nova Scotia."
//  - Nova Scotia Virtual School, Computer Programming 12 (other-provinces/ns-vs-computer-programming-12.html): category
//    "Technology Education", second semester; "Students will be expected to understand and apply the basic skills and
//    processes of problem solving using computer programming"; course materials on CodeHS in Java.
//  - Department name "Education and Early Childhood Development" (ednet.ns.ca; plans.ednet.ns.ca "(EECD)").
//  - facts-geo.md: Halifax is the seat of government (Constitution Act, 1867 s.68); America/Halifax UTC-4 / UTC-3, Cape
//    Breton America/Glace_Bay with the same offsets; area codes 782 and 902 (shared with PEI). No populations.
//  - CEMC (facts-schools-contests.md): BCC 9 to 20 November 2026; CCC Wednesday 17 February 2027; Pascal, Cayley and
//    Fermat 23 and 24 February 2027; through a school.
//  - Nova Scotia open data, Nova Scotia Public Libraries Statistics (data.novascotia.ca view tnu4-55e9; department
//    "Communities, Culture, Tourism and Heritage"; coverage 2019-04-01 to 2025-03-31; licence "Nova Scotia Open Government
//    Licence"), rows.csv downloaded with curl on 22 October 2026 15:51 UTC (5,208 bytes, sha256 19c3fe85...75b7), metadata
//    view_tnu4-55e9.json. Usage note: the Same Page shared catalogue "in April 2023 also affected borrowing patterns and data
//    collection"; earlier closures affected 2019-2020 to 2021-2022 figures (not repeated on the page beyond "closures").
//    Licence text: support.novascotia.ca did not connect, so read from the Internet Archive copy of
//    support.novascotia.ca/services/open-data-portal-licence (20260723052527, saved ns-opendata-licence_IA20260723.html):
//    "including for commercial purposes"; attribution "Contains information licensed under the Open Government Licence -
//    Nova Scotia" (en dash in source, hyphen here); version 1.1; non-endorsement.
// Our own calculations (py/library_rates.py, python -I; output library_rates.out.txt), 2024-2025 rows: loans per item owned
// Halifax Public Libraries 6.99, Annapolis Valley 5.34, South Shore 4.18, Colchester-East Hants 3.77, Cape Breton 2.82,
// Pictou-Antigonish 2.59, Eastern Counties 2.49, Cumberland 2.47, Western Counties 1.87; in-person visits per hour open
// Halifax 76.3 down to Eastern Counties 2.1; visits change 2022-2023 to 2024-2025 from -12.6% (Annapolis Valley) to +24.7%
// (Halifax). 9 regions x 6 fiscal years = 54 rows. Regions never summed into a provincial total.
// Lesson family: rates and percent change (dividing by the right denominator) instead of raw totals.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import csv',
  '',
  'with open("tnu4-55e9.csv", encoding="utf-8") as f:',
  '    rows = list(csv.DictReader(f))',
  '',
  'def number(text):',
  '    return float(text.replace(",", ""))',
  '',
  'latest = [r for r in rows if r["Year"] == "2024-2025"]',
  'earlier = {r["Library region"]: r for r in rows if r["Year"] == "2022-2023"}',
  '',
  'for r in sorted(latest, key=lambda r: number(r["Borrowing"]) / number(r["Items owned"]), reverse=True):',
  '    turnover = number(r["Borrowing"]) / number(r["Items owned"])',
  '    per_hour = number(r["Annual in-person visits"]) / number(r["Hours open"])',
  '    before = number(earlier[r["Library region"]]["Annual in-person visits"])',
  '    change = 100 * (number(r["Annual in-person visits"]) - before) / before',
  '    print(r["Library region"], round(turnover, 2), round(per_hour, 1), round(change, 1))'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'province', tag: 'NOVA SCOTIA', label: 'Nova Scotia', blurb: 'Coding, Java, Python and AI for Nova Scotia students: graduation credits, Computer Programming 12, the Mathematics 10 exam and a library data project.' },
  market: CA,
  slug: 'coding-classes-in-nova-scotia',
  code: 'ns',
  accent: '#3D5717',
  accentRationale: 'Nova Scotia: a deep spruce-moss green, #3D5717, allocated to row 94; contrast 7.70 on the paper #FBF8F2, 7.24 on #F5F1E8 and 6.62 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Nova Scotia',
    eyebrow: 'Nova Scotia, Canada',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'By province', href: '/canada-coding-curriculum-by-province' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Nova Scotia',
  title: 'Coding Classes in Nova Scotia | Live Online Java and Python',
  description: 'Live online coding, Java, Python and AI classes for Nova Scotia students: graduation credits, Computer Programming 12, the Math 10 exam and a data project.',
  ogDescription: 'Nova Scotia students need 18 credits, three of them in math, and can take Computer Programming 12 in Java. Here is how school, exams and live online coding classes fit together.',
  twitterDescription: 'Nova Scotia coding, Java, Python and AI classes, live online on Atlantic time.',
  ogImageCourse: 'java-programming-masterclass-for-teens',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Coding, Java, Python and AI Classes for Nova Scotia Students',
    description: 'Live online coding for Nova Scotia students from Primary to adult: blocks, Python, Java for Computer Programming 12, AI and machine learning, high school math and CCC preparation, taught in English alongside school.'
  },

  h1: 'Coding classes in Nova Scotia',
  capsuleQ: 'Where can a Nova Scotia student get real coding lessons with a live teacher?',
  capsule: 'Modern Age Coders gives Nova Scotia students live online lessons in coding, Python, Java and AI, for anyone aged 6 or older, taught one to one or in a shared group of fifteen to twenty. Python and AI for Kids is the common first course for younger children; high school students often choose Java for Teens, which matches Computer Programming 12. Lessons run on Atlantic time, and the first is free.',
  lead: 'In Nova Scotia, coding is woven into the early grades as information technology, sits beside math and science in the Grade 7 and 8 numeracy block, and becomes a course of its own in Computer Programming 12, which the province\'s virtual school teaches in Java. The graduation rules give technology a place too, through one compulsory credit that can come from science or technology courses. What the system cannot give every student is a programming teacher every week from Grade 4 to Grade 12. This page sets out the credit rules and the 2026 to 2027 assessment calendar from the department\'s own pages, turns the province\'s public library statistics into a Python exercise, and explains how live classes on Atlantic time fit around a Nova Scotia school year.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a student in Nova Scotia.',

  picks: {
    eyebrow: 'Course picks for Nova Scotia',
    h2: 'Four courses Nova Scotia families start with',
    intro: 'Chosen by age and by what Nova Scotia schools teach at each stage, then confirmed in a free first lesson.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Grades 4 to 7', note: 'A first typed language for children who have outgrown blocks, built on the problem solving the Grade 7 and 8 numeracy block expects.' },
      { course: 'java-programming-masterclass-for-teens', band: 'Grades 10 to 12', note: 'Java from the first class to objects and projects, the language the Nova Scotia Virtual School uses for Computer Programming 12.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Grades 9 to 12', note: 'Algebra through calculus, for a province that requires a math credit in each of Grades 10, 11 and 12 and examines Mathematics 10.' },
      { course: 'ccc-junior-and-senior-preparation-course', band: 'Grades 9 to 12', note: 'For contest-minded students: original practice for the Canadian Computing Competition, which accepts Java as well as Python and C++.' }
    ]
  },

  sections: [
    {
      id: 'school', tint: '', eyebrow: 'Coding in Nova Scotia schools',
      h2: 'Where programming fits in a Nova Scotia education, Primary to Grade 12',
      intro: 'The Department of Education and Early Childhood Development publishes the Public School Program and the graduation rules on its EDnet site. Everything here was read on 22 October 2026. Words in quotation marks belong to the department; the plain-English summaries were written by us.',
      body: [
        { kind: 'table', caption: 'Technology and programming through a Nova Scotia school career (Nova Scotia Education and Early Childhood Development pages; summaries ours)', head: ['Stage', 'What the department says', 'Where coding can fit'], rows: [
          ['Primary to Grade 3', 'Literacy and numeracy come first, with &ldquo;information technology&rdquo; among the subjects integrated with language arts and mathematics', 'Short block-coding tasks inside math and reading projects'],
          ['Grades 7 and 8', 'Timetables have &ldquo;the numeracy block which includes mathematics, technology and science&rdquo;', 'Typed code fits naturally into the numeracy block'],
          ['Grade 9', '&ldquo;The secondary school program begins at grade 9.&rdquo;', 'The year to build Python or Java fluency before course choices narrow'],
          ['Grade 12', 'Computer Programming 12 is offered through the Nova Scotia Virtual School in its Technology Education category, with course materials in Java', 'A full programming course, built around a realistic project']
        ] },
        { kind: 'p', text: 'The virtual school describes Computer Programming 12 by what students do: they &ldquo;will be expected to understand and apply the basic skills and processes of problem solving using computer programming&rdquo;, plan solutions and work together on a realistic problem. It runs in the second semester and uses CodeHS in Java, with other development tools allowed for project work. Students who meet Java for the first time that semester spend much of it on syntax; students who arrive fluent can spend it on the project.' },
        { kind: 'table', mt: true, caption: 'Nova Scotia High School Graduation Diploma: the credit rules that matter for a future programmer (Credits for Graduation Diploma, Education and Early Childhood Development)', head: ['Rule', 'Department wording'], rows: [
          ['Total', '&ldquo;Students require a minimum of 18 credits to graduate.&rdquo; At most seven may be Grade 10 courses and at least five must be Grade 12 courses'],
          ['Mathematics', '&ldquo;3 mathematics (one credit at each grade level)&rdquo;, in Grades 10, 11 and 12'],
          ['Science or technology', 'One more credit from science or technology, chosen from the Public School Programs categories Sciences; Skilled Trades; Technology Education; and Technology Integration and ICT Courses'],
          ['Extended Mathematics 11', 'A full-year, two-credit course that counts as one mathematics credit and one technology credit'],
          ['Beyond the minimum', 'Schools are encouraged to schedule so students can complete 20, 21, or even 24 credits']
        ] },
        { kind: 'callout', h3: 'Next to the school course, not instead of it', p: 'Our classes support students in Computer Programming 12, in math courses and in grades with no programming course at all, and we do not grant Nova Scotia credits. Whether a course counts toward the diploma is settled by the school and the department. We are not connected with Education and Early Childhood Development, a regional centre for education or the Nova Scotia Virtual School.' }
      ]
    },
    {
      id: 'exams', tint: 'tint', eyebrow: 'Provincial assessments',
      h2: 'Nova Scotia\'s assessment calendar for 2026 to 2027, and the Mathematics 10 exam',
      intro: 'The department\'s Student Assessment division runs provincial assessments in Grades 3, 6 and 8 and examinations at the end of three Grade 10 courses. Windows are the department\'s, read on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Nova Scotia provincial assessments and examinations, next administrations (Education and Early Childhood Development, Student Assessment)', head: ['Who writes it', 'What', 'Next administration'], rows: [
          ['Grade 3', 'Reading, writing and mathematics assessment', '10 to 26 May 2027'],
          ['Grade 6', 'Reading, writing and mathematics assessment, held in October and early November', 'To be announced'],
          ['Grade 8', 'Reading, writing and mathematics assessment, held in May and June', '17 May to 8 June 2027'],
          ['Grade 10', 'Mathematics 10 or Mathématiques 10 examination', '23 June 2027']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The Mathematics 10 exam', p: 'Students write it at the end of Mathematics 10, Pre-IB Mathematics 10 or their French equivalents, on paper, in one two-hour session. Teachers score it with a provincial marking guide, and the department says the exam counts for 20% of the final course mark.' },
          { h3: 'Grades 6 and 8 go online', p: 'The department says students will complete the Grade 6 and 8 assessments online using school devices instead of on paper. The Grade 6 math portion comes in four parts of about 30 minutes, so typing and reading a screen matter as much as arithmetic.' },
          { h3: 'Not a report card mark', p: 'For Grade 8, the department states that results are not used to determine report card grades or grade level placement decisions. They guide teaching. The Grade 10 exam is different: it is part of the course mark.' }
        ] },
        { kind: 'p', text: 'We do not coach students on assessment items, and we never reproduce them; the department publishes its own sample questions for Mathematics 10. What we do is teach the mathematics properly, in the order a Nova Scotia course covers it, with problems we write ourselves. For a student heading to Grade 10 math, a few weeks of algebra worked through short Python programs, where every equation has to be typed exactly and every answer checked, tends to show where the gaps are faster than a worksheet.' }
      ]
    },
    {
      id: 'libraries', tint: 'deep', eyebrow: 'Nova Scotia data project',
      h2: 'Which library system lends its collection the most? Rates, not totals, on Nova Scotia\'s open data',
      intro: 'The province publishes annual statistics for its nine regional public library systems. Our students download the file and learn the most useful idea in data work: divide by the right thing before you compare. Every figure below is our own calculation.',
      body: [
        { kind: 'table', caption: 'Our calculation on Nova Scotia Public Libraries Statistics, 2024-2025 fiscal year (downloaded 22 October 2026): loans per item owned, in-person visits per hour open, and the change in visits since 2022-2023', head: ['Library region', 'Loans per item owned', 'Visits per hour open', 'Visits since 2022-2023'], rows: [
          ['Halifax Public Libraries', '6.99', '76.3', '+24.7%'],
          ['Annapolis Valley Regional Library', '5.34', '11.3', '-12.6%'],
          ['South Shore Public Libraries', '4.18', '18.3', '+1.8%'],
          ['Colchester-East Hants Public Library', '3.77', '28.3', '+15.4%'],
          ['Cape Breton Regional Library', '2.82', '13.6', '+18.7%'],
          ['Pictou-Antigonish Regional Library', '2.59', '23.1', '+24.6%'],
          ['Eastern Counties Regional Library', '2.49', '2.1', '+24.6%'],
          ['Cumberland Public Libraries', '2.47', '6.8', '+19.0%'],
          ['Western Counties Regional Library', '1.87', '13.4', '+1.2%']
        ] },
        { kind: 'p', text: 'The script below produces every number in the table from the downloaded CSV, using only the Python standard library:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Pick a denominator', p: 'Halifax borrows far more items than any other system, which says little on its own because it also owns far more. Dividing borrowing by items owned gives loans per item, a measure of how hard a collection works. On that measure Halifax still leads, at 6.99, but Annapolis Valley is close behind at 5.34.' },
          { h3: '2. Compare like with like', p: 'Percent change needs the same region at two dates. The script builds a dictionary of 2022-2023 rows keyed by region, then looks each 2024-2025 row up in it. Most systems gained visitors over those two years; Annapolis Valley fell by 12.6%.' },
          { h3: '3. Question the odd one', p: 'Eastern Counties shows 2.1 in-person visits per hour open, far below every other system. The file\'s definition of hours open includes branches, bookmobiles and satellite locations, so students ask whether the hours and the visits measure the same places before drawing any conclusion.' }
        ] },
        { kind: 'callout', h3: 'What not to do with this file', p: 'We never add the nine regions together to make a provincial figure; the department publishes regions, and a sum of them is not a number it stands behind. The usage note also warns that closures in the early years and the Same Page shared catalogue, introduced in April 2023, changed borrowing and data collection, which is why our comparison starts in 2022-2023.' },
        { kind: 'p', text: 'A Grade 12 extension: plot public access computers against program attendance for the nine systems and decide whether a straight line is honest with only nine points. Contains information licensed under the Open Government Licence - Nova Scotia. Data: Nova Scotia Public Libraries Statistics, published by the Department of Communities, Culture, Tourism and Heritage on the <a class="cg-inline-link" href="https://data.novascotia.ca/d/tnu4-55e9">Nova Scotia open data portal</a>. The rates, changes and script are ours, and the Province of Nova Scotia does not endorse this page.' }
      ]
    },
    {
      id: 'contests', tint: '', eyebrow: 'Contests from Nova Scotia',
      h2: 'CEMC computing and math contests for Nova Scotia schools',
      intro: 'Nova Scotia schools can order the University of Waterloo\'s CEMC contests like schools anywhere in Canada. The dates below are CEMC\'s for North and South America.',
      body: [
        { kind: 'table', caption: 'Selected CEMC contests for 2026 to 2027 (dates and eligibility as CEMC lists them)', head: ['Contest', 'Who', 'Date'], rows: [
          ['Beaver Computing Challenge', 'Grade 10 or below; no programming required', '9 to 20 November 2026'],
          ['Canadian Computing Competition', 'Junior or Senior by skill, in Java, Python, C or C++', 'Wednesday 17 February 2027'],
          ['Pascal, Cayley and Fermat', 'Grades 9, 10 and 11', '23 and 24 February 2027']
        ] },
        { kind: 'p', text: 'For a student taking Computer Programming 12 in Java, the CCC is the obvious next challenge: CEMC accepts Java alongside Python, C and C++, and lets each student choose Junior or Senior whatever their grade. Students write it at school, online, and a school has to place the order, since CEMC does not take individual registrations. We teach contest skills with problems we write, and leave CEMC\'s own past papers, which are free online, for timed practice. See our <a class="cg-inline-link" href="/beaver-computing-challenge-guide">Beaver Computing Challenge guide</a> and <a class="cg-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation page</a>. We have no tie to CEMC.' }
      ]
    },
    {
      id: 'time', tint: 'tint', eyebrow: 'Atlantic time',
      h2: 'Nova Scotia time, India time and the two clock changes this school year',
      intro: 'Nova Scotia, including Cape Breton, keeps Atlantic time and still changes clocks in spring and autumn. The table lines that up with India, where our teachers work; the example times and conversions are ours.',
      body: [
        { kind: 'table', caption: 'Atlantic time and India time, 2026 to 2027 (offsets from IANA tzdb 2026e, America/Halifax and America/Glace_Bay; example times ours, not fixed class times)', head: ['Period', 'Nova Scotia offset', 'India is ahead by', 'Saturday 10 am in Halifax is, in India', 'Weekday 4 pm in Halifax is, in India'], rows: [
          ['To 1 November 2026', 'UTC-3', '8 hours 30 minutes', '6:30 pm Saturday', '12:30 am the next day'],
          ['1 November 2026 to 14 March 2027', 'UTC-4', '9 hours 30 minutes', '7:30 pm Saturday', '1:30 am the next day'],
          ['From 14 March 2027', 'UTC-3', '8 hours 30 minutes', '6:30 pm Saturday', '12:30 am the next day']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Halifax and Cape Breton', p: 'The time zone database lists Cape Breton under its own zone name, America/Glace_Bay, but with the same offsets as Halifax, so Sydney and Halifax always share a clock. We confirm every class in Atlantic time.' },
          { h3: 'Phone numbers', p: 'Nova Scotia numbers use the 902 and 782 area codes, which Prince Edward Island shares. Both are accepted by our booking form, which already carries the +1, so only the ten-digit number is needed.' },
          { h3: 'Close to India evenings', p: 'Of all Canadian provinces apart from Newfoundland and Labrador, Atlantic Canada sits closest to India time, so weekend morning classes in Nova Scotia land in the Indian early evening.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From Primary block coding to Computer Programming 12',
    intro: 'These bands are a guide only; the free class shows where each student should start.',
    cols: [
      { band: 'Primary to Grade 3', h3: 'Blocks and stories', p: 'Block coding tied to reading and counting, the way Nova Scotia integrates information technology in the early grades.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Grades 4 to 8', h3: 'First typed code', p: 'Python with loops and functions, ready for the numeracy block of Grades 7 and 8.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Grades 9 to 11', h3: 'Python, then Java', p: 'Python taken properly, then Java, so Computer Programming 12 can be about the project.', courses: ['python-complete-masterclass-teens', 'java-programming-masterclass-for-teens'] },
      { band: 'Grade 12 and beyond', h3: 'AI and contests', p: 'Machine learning on real data and CCC preparation for students who want a contest.', courses: ['ai-ml-masterclass-teens', 'ccc-junior-and-senior-preparation-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI tool can total a column. Knowing not to is the skill',
    intro: 'The library project turns on one judgment, which numbers to divide and which never to add, and that judgment is exactly what students need when AI does the arithmetic.',
    p1: 'Ask an AI assistant which Nova Scotia library system is busiest and it may hand back raw borrowing totals, which only say that Halifax is biggest. A student who has worked the file knows to ask a better question, loans per item or visits per open hour, and to check an odd figure such as 2.1 visits an hour before believing it.',
    p2: 'So our students build their own analysis first and compare it with a tool\'s answer second. Teenagers use AI tools only within each tool\'s age rules, with a parent\'s permission where the tool requires it. Children under 13 learn how AI works by writing their own small programs rather than using tools built for adults.',
    closer: 'Computer Programming 12 asks students to identify problems and select effective strategies; choosing the right denominator is one of the first strategies a programmer working with data has to learn.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online from Yarmouth to Cape Breton',
    intro: 'A real teacher leads each lesson over video, which puts a student in Antigonish and a student in Halifax in one class.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Across the province', p: 'Halifax, Dartmouth, Sydney, Truro, New Glasgow, Kentville, Bridgewater or Yarmouth: wherever a student lives, the lesson and the teacher are the same.' },
      { h3: 'Two ways to learn', p: 'Join fifteen to twenty classmates working at the same level, or book individual lessons to move faster or to get help on a Computer Programming 12 project.' },
      { h3: 'Nova Scotia grades', p: 'Teachers plan in Nova Scotia grades, from Primary, and know when the Mathematics 10 exam and the second-semester programming course fall.' },
      { h3: 'Java or Python', p: 'Students preparing for Computer Programming 12 can learn in Java from the start; younger students usually begin in Python and move on.' },
      { h3: 'Start free', p: 'Lesson one costs nothing. It is taught like any other class, and at the end the teacher suggests a level, a course and a regular time.' }
    ],
    spec: { title: 'No Nova Scotia office', p: 'Modern Age Coders has no centre in Nova Scotia and claims none. Teaching is live online from India, and a student needs a computer with a microphone, speakers and a steady internet connection.' }
  },

  fees: {
    h2: 'Fees for Nova Scotia families',
    intro: 'Every fee is shown with its currency beside it.',
    first: 'An introductory live lesson with no charge, after which the teacher proposes a starting level, course and weekly slot.',
    group: 'The monthly fee for a place in a batch of fifteen to twenty learners at one level.',
    private: 'The monthly fee for individual lessons with one teacher, at agreed times.',
    closer: 'There is one Canadian fee, so a Nova Scotia family pays what a family in Ontario or Alberta pays. No charge is made before the free lesson, or before the course and schedule are settled; holidays and missed classes are explained on the pricing page.'
  },

  reviewsH2: 'Google reviews from families and students',

  book: {
    h2: 'Tell us about your Nova Scotia student',
    intro: 'The first task is set by level: a block-coding story for a Grade 1 child, a Python number game for Grade 6, or the library statistics for a Grade 11 student who wants real data.',
    success: 'Thank you. The team will be in touch soon about a class for Nova Scotia.'
  },

  faq: {
    h2: 'Nova Scotia coding questions',
    intro: 'What Nova Scotia families most often ask before the first class.',
    items: [
      { q: 'Do you have coding classes in Nova Scotia?', a: 'Yes, live and online. There is no Nova Scotia centre; students join from home with a teacher, in a group batch of fifteen to twenty or one to one.' },
      { q: 'Is there a computer programming course in Nova Scotia high schools?', a: 'Yes. Computer Programming 12 is offered through the Nova Scotia Virtual School, in its Technology Education category, with course materials in Java. Ask your school how students enrol.' },
      { q: 'How many credits does a Nova Scotia student need to graduate?', a: 'At least 18, according to the department. No more than seven can be Grade 10 courses, at least five must be Grade 12 courses, and three must be mathematics, one at each grade level.' },
      { q: 'Do your classes count toward the Nova Scotia graduation diploma?', a: 'No. We do not grant Nova Scotia credits. Diploma credits come from school courses; our classes build the skills alongside them.' },
      { q: 'When is the Mathematics 10 exam?', a: 'The department lists 23 June 2027 for Mathematics 10 and Mathématiques 10. The exam is written on paper in one two-hour session and counts for 20% of the final course mark.' },
      { q: 'Should my teen learn Java or Python first?', a: 'For a student planning on Computer Programming 12, Java is a sensible early choice because the virtual school course uses it. Younger students usually start with Python, then add Java.' },
      { q: 'What time are classes for Nova Scotia families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All times are confirmed in Atlantic time.' },
      { q: 'Can a Nova Scotia student write the Canadian Computing Competition?', a: 'Yes, if their school places an order with CEMC, which has set the 2027 contest for Wednesday 17 February 2027. Java, Python, C and C++ are all allowed.' },
      { q: 'Do 902 and 782 numbers work in your form?', a: 'Yes. Enter the ten digits of any Nova Scotia number; the country code is already in place.' },
      { q: 'How young can a child start?', a: 'From about age 6, in Primary or Grade 1, with block coding. Typed Python usually begins around Grade 4, and adults are welcome at any stage.' },
      { q: 'Where are the fees listed?', a: 'Further up this page, under Fees. You will see three lines, for the free introductory lesson, the group rate per month and the one-to-one rate per month, each shown in your currency. Payment only starts after the introductory lesson.' }
    ]
  },

  next: {
    eyebrow: 'More for Canada',
    h2: 'Other pages for Nova Scotia students',
    html: 'For all of Canada, go to <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a>; <a class="cg-inline-link" href="/canada-coding-curriculum-by-province">the curriculum by province</a> compares Nova Scotia with its neighbours. Contest dates for the whole country sit in the <a class="cg-inline-link" href="/canada-math-and-coding-contest-calendar">Canadian contest calendar</a>, and students who need math support can read about <a class="cg-inline-link" href="/online-math-tutor-canada">online math tutoring in Canada</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Nova Scotia and Canada',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/canada-coding-curriculum-by-province', label: 'Curriculum by province' },
    { href: '/canada-math-and-coding-contest-calendar', label: 'Contest calendar' },
    { href: '/beaver-computing-challenge-guide', label: 'Beaver Computing Challenge' },
    { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' }
  ],

  personalityCss: `
.cg-root.cg-ns .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.8vw, 2.1rem); }
.cg-root.cg-ns .cg-hero h1 { font-weight: 710; letter-spacing: -0.017em; line-height: 1.07; }
.cg-root.cg-ns .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-ns .cg-eyebrow { letter-spacing: 0.1em; font-weight: 660; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-ns .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.01em; }
.cg-root.cg-ns .cg-table caption { font-weight: 630; text-align: left; }
.cg-root.cg-ns .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ns #libraries code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.79rem; line-height: 1.6; padding: 0.9rem 1.05rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-ns .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.75rem; }
.cg-root.cg-ns .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Nova Scotia, read 22 October 2026 from ednet.ns.ca and plans.ednet.ns.ca (Education and Early Childhood Development) and saved raw: Credits for Graduation Diploma (18 credits, Grade 10 and Grade 12 limits, three math credits, one science or technology credit from Sciences, Skilled Trades, Technology Education, Technology Integration and ICT Courses, Extended Mathematics 11 as math plus technology, 20 to 24 credits encouraged); Public School Program pages (Primary to 3 information technology integrated; Grades 7 and 8 numeracy block; secondary program begins at Grade 9; AP available); Provincial Assessments and Examinations (Grades 3, 6, 8 assessments; Grade 10 exams; 2026-27 windows; Grade 6 and 8 online; Mathematics 10 exam 23 June 2027, 20% of course mark, two hours, paper; Grade 8 results not used for report cards). Nova Scotia Virtual School Computer Programming 12 (Technology Education, second semester, Java on CodeHS). Atlantic time and Cape Breton zone from tzdb 2026e; area codes 782 and 902 from facts-geo.md. CEMC dates via facts-schools-contests.md.',
    localProject: 'Nova Scotia open data, Nova Scotia Public Libraries Statistics (Communities, Culture, Tourism and Heritage; Open Government Licence - Nova Scotia), rows.csv downloaded with curl on 22 October 2026 and analysed with our script library_rates.py (python -I), 2024-2025 against 2022-2023: loans per item owned from 6.99 (Halifax Public Libraries) to 1.87 (Western Counties); visits per hour open from 76.3 to 2.1 (Eastern Counties); visits change from -12.6% (Annapolis Valley) to +24.7% (Halifax). Regions never summed. Labelled as ours. Lesson family: rates and percent change instead of totals.',
    requiredMentions: [
      'Nova Scotia Public Libraries Statistics',
      'Open Government Licence - Nova Scotia',
      'Students require a minimum of 18 credits to graduate.',
      'Technology Integration and ICT Courses',
      'Extended Mathematics 11',
      'the numeracy block which includes mathematics, technology and science',
      'America/Glace_Bay',
      'Eastern Counties shows 2.1 in-person visits per hour open',
      'Same Page shared catalogue',
      'counts for 20% of the final course mark'
    ],
    sources: [
      { claim: 'Credits for Graduation Diploma (Nova Scotia Education and Early Childhood Development).', url: 'https://www.ednet.ns.ca/docs/creditsforgraduationdiplomaen.pdf' },
      { claim: 'Provincial Assessments and Examinations: grades, 2026-27 windows, online Grade 6 and 8 assessments.', url: 'https://plans.ednet.ns.ca/' },
      { claim: 'Mathematics 10 provincial examination: courses, 20% of the final mark, two-hour paper session.', url: 'https://plans.ednet.ns.ca/mathematics-10' },
      { claim: 'Grade 8 provincial assessment: results not used for report card grades.', url: 'https://plans.ednet.ns.ca/grade-8' },
      { claim: 'Public School Program, Primary to Grade 3 (information technology integrated).', url: 'https://www.ednet.ns.ca/psp/teaching-learning/learning/programs-curriculum/grade-levels/primary-3' },
      { claim: 'Public School Program, Grades 4 to 8 (numeracy block in Grades 7 and 8).', url: 'https://www.ednet.ns.ca/psp/teaching-learning/learning/programs-curriculum/grade-levels/4-8' },
      { claim: 'Public School Program, Grades 9 to 12 (secondary program begins at Grade 9; AP available).', url: 'https://www.ednet.ns.ca/psp/teaching-learning/learning/programs-curriculum/grade-levels/9-12' },
      { claim: 'Nova Scotia Virtual School, Computer Programming 12.', url: 'https://elearning.ednet.ns.ca/index.php/cm-course/computer-programming-12/' },
      { claim: 'Nova Scotia open data: Nova Scotia Public Libraries Statistics.', url: 'https://data.novascotia.ca/d/tnu4-55e9' },
      { claim: 'Open Government Licence - Nova Scotia, version 1.1 (read from the Internet Archive copy of 23 July 2026; the live host did not connect).', url: 'https://support.novascotia.ca/services/open-data-portal-licence' },
      { claim: 'CEMC contests 2026-27: BCC, CCC, Pascal, Cayley and Fermat dates; languages; through a school.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'IANA tzdb northamerica: America/Halifax and America/Glace_Bay.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Nova Scotia or Halifax population figure: none printed.',
      'A provincial total for library borrowing, visits or items: never summed from the nine regions.',
      'That Computer Programming 12 counts as the science or technology graduation credit: not stated; the page quotes the categories and leaves eligibility to the school.',
      'The pandemic detail in the library usage note: reduced to "closures"; no health content on the page.',
      'The contact person named in the credits PDF: not reproduced.',
      'Course facts from curriculum.novascotia.ca: the host did not connect today; nothing is quoted from it.',
      'Reproducing provincial assessment items: refused; we point to the department\'s own samples.',
      'That our classes grant or count toward a Nova Scotia credit: refused.',
      'Any affiliation with Education and Early Childhood Development, a regional centre for education, the Nova Scotia Virtual School, the Province of Nova Scotia or CEMC.'
    ]
  }
};
