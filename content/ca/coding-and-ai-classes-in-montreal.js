'use strict';
// Montreal (cg- city page, Canada cluster Plan 2 Wave 2, row 102). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md. Shape from coding-and-ai-classes-in-toronto.js, prose fresh.
// Spine: Montreal students climb a different ladder from the rest of Canada (Secondary I to V, then CEGEP), the city's open
// data arrives in French, and a year of its permanent bike counters teaches the hardest everyday data skill: time.
// The Montreal rink history is used on ai-and-machine-learning-classes-in-canada, so this page uses a different dataset.
// Sources, read raw on 22 October 2026 (Quebec and contest facts from keyword-research-2026-09/ca/facts-schools-contests.md,
// with saved raw files in ca/src/quebec/ and ca/src/coding-classes-in-quebec/; geography from ca/facts-geo.md; the counter
// files, package metadata and licence deed in ca/src-pilots/coding-and-ai-classes-in-montreal/):
//  - quebec.ca, Quebec Education Program, secondary: "comprises programs of study for students from Secondary I to Secondary
//    V"; the list of secondary programs names Mathematics, Science and Technology, Applied Science and Technology and others,
//    and no computer science or programming subject (our observation from the raw page).
//  - QEP Mathematics, Secondary Cycle Two (English PDF): "Cultural, Social and Technical (CST), Technical and Scientific (TS)
//    and Science (S)"; "All of these options allow students to enroll in a preuniversity program."
//  - quebec.ca CEGEP overview: pre-university "requires two years of full-time study"; technical "requires three years of
//    full-time study"; "Universities use the R score to analyze applications".
//  - Charter of the French language, CQLR c C-11, s.1 "French is the official language of Québec." (Internet Archive copy of
//    legisquebec, 10 November 2025, per facts-geo.md).
//  - CEMC: CCC "Wednesday, February 17, 2027" and "This contest is available in English and French."; BCC "available in English
//    only", "Monday, November 9, 2026 to Friday, November 20, 2026"; Euclid "Students in their final year of secondary school
//    or CÉGEP students", "Tuesday, April 6, 2027"; CSMC "Students in Grades 11 and 12 and CÉGEP students", "Wednesday, November
//    18, 2026" (ordering closed 22 October 2026, so not presented as open); "all students must participate through their
//    school"; past contests free.
//  - facts-geo.md: Montreal island area codes 263/438/514; suburbs (Laval, Longueuil, Terrebonne) 354/450/579 (CNAC files via
//    the Internet Archive); Quebec on UTC-5 from 1 November 2026, UTC-4 from 14 March 2027 (IANA tzdb 2026e, America/Toronto).
//  - Ville de Montréal open data, dataset "Compteurs cyclistes permanents" (CKAN id cyclistes): licence "Creative Commons
//    Attribution 4.0 International" (package_show read live 22 October 2026); resource "Velos - Comptage 2025 - Eco-Compteur",
//    comptage_velo_2025.csv, 76,334,524 bytes, sha256 7f1c554f...dc59a3; sites file localisations_globale.csv (128 sites); CC BY
//    4.0 deed "for any purpose, even commercially".
// Our own calculations (montreal_counters.py, python -I, output montreal_counters.out.txt; extra checks run on the same file):
// 1,404,316 rows, 45 counters, 96 quarter-hour slots per day, 365 dates; 26 counters complete (at least 365 x 96 - 4 = 35,036
// rows); 25 of them have 92 rows on 9 March 2025, one keeps 96 with the lost hour as blank rows; 5 blank values in the file;
// 482,308 rows record zero passages; monthly passages at the 26 complete counters Jan 133,286, Feb 90,564, Mar 241,784,
// Apr 567,324, May 1,021,855, Jun 1,430,009, Jul 1,381,183, Aug 1,384,069, Sep 1,459,622, Oct 1,081,422, Nov 460,335,
// Dec 124,474; busiest complete counter REV St-Denis/Duluth dir nord 929,477; highest quarter-hour value 434 at Rachel /
// Pie IX, 30 May 2025, 23:15 (cause not stated in the file).
// Lesson family: grouping a time series by month, checking completeness before comparing, and the daylight-saving gap.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import csv',
  '',
  'EXPECTED = 365 * 96 - 4  # 9 March 2025 lost one hour to the clock change',
  'rows_per_counter = {}',
  'monthly = {}',
  'march_9 = {}',
  '',
  'with open("comptage_velo_2025.csv", encoding="utf-8") as counts_file:',
  '    for row in csv.DictReader(counts_file):',
  '        counter = row["id_compteur"]',
  '        rows_per_counter[counter] = rows_per_counter.get(counter, 0) + 1',
  '        if row["date"] == "2025-03-09":',
  '            march_9[counter] = march_9.get(counter, 0) + 1',
  '        if row["nb_passages"] == "":',
  '            continue',
  '        key = (counter, row["date"][:7])',
  '        monthly[key] = monthly.get(key, 0) + int(row["nb_passages"])',
  '',
  'complete = {c for c, n in rows_per_counter.items() if n >= EXPECTED}',
  'print(len(rows_per_counter), "counters,", len(complete), "complete")',
  'print("rows on 9 March:", sorted(march_9[c] for c in complete))',
  'for month in sorted({m for (c, m) in monthly}):',
  '    total = sum(n for (c, m), n in monthly.items() if c in complete and m == month)',
  '    print(month, total)'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'MONTREAL', label: 'Montreal', blurb: 'Coding and AI for Montreal learners, set against Quebec\'s Secondary I to V and CEGEP ladder, with a year of the city\'s bike counter data.' },
  market: CA,
  slug: 'coding-and-ai-classes-in-montreal',
  code: 'amom',
  accent: '#614726',
  accentRationale: 'Montreal: a muted roasted brown, #614726, warm without turning orange; nearest site accent 6.4 RGB units away and every Canada accent at least 15.2 away; contrast 8.13 on the paper #FBF8F2 and above 6.9 on all three paper tints',
  pageType: 'city',
  place: {
    name: 'Montreal',
    eyebrow: 'Montreal, Quebec',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Quebec' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'CEGEP prep', href: '/cegep-computer-science-preparation' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Montreal',
  title: 'Coding and AI Classes in Montreal | Live Online, in English',
  description: 'Live online coding, Python and AI classes for Montreal learners, taught in English: the Quebec school ladder to CEGEP, CEMC contest dates and a bike data project.',
  ogDescription: 'Montreal students go from Secondary V to CEGEP, not Grade 12. Here is how coding fits that ladder, the 2026 to 2027 CEMC dates, and a project on city bike counters.',
  twitterDescription: 'Montreal coding, Python and AI classes, live online in English, for secondary, CEGEP and adult learners.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and AI Classes for Montreal Learners',
    description: 'Live online coding in English for Montreal learners from age 6 to adult: Python for children and teens, AI and machine learning, and Python for CEGEP students and working adults, placed by level.'
  },

  h1: 'Coding and AI classes in Montreal',
  capsuleQ: 'Where can a Montreal learner study coding and AI live, in English?',
  capsule: 'Montreal learners aged 6 to adult can study coding, Python and AI with Modern Age Coders, live online and in English, one to one or in groups of fifteen to twenty. Children begin with Python and AI for Kids, teens with Python for Teens, and CEGEP students and adults with our Python Masterclass. A free first class sets the level.',
  lead: 'A Montreal student does not count school years in grades for long. Quebec numbers its secondary years Secondary I through Secondary V, and the usual road to a Quebec university then passes through a two-year pre-university program at a CEGEP, while technical programs there take three. That changes how coding should be planned here: a teenager the same age as an Ontario Grade 12 student can already be a college student in Montreal, and the right class for them is an adult-paced one. This page lays out where code does and does not appear in the Quebec program, which CEMC contests are open to CEGEP students, what a Montreal family should know about our teaching language, and a project we built on a year of the city\'s own bike counter readings, a file that quietly contains a missing hour.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a learner in Montreal.',

  picks: {
    eyebrow: 'Course picks for Montreal',
    h2: 'Four starting points for Montreal learners',
    intro: 'Matched to Quebec\'s stages from elementary school to CEGEP, then checked against the learner in the free first lesson.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Typed Python for children who are ready for more than blocks: loops, choices, drawings with code and small games of their own design.' },
      { course: 'python-complete-masterclass-teens', band: 'Secondary I to V', note: 'Python from a first program to files and data, the foundation for the bike counter project on this page and for any later AI work.' },
      { course: 'ai-ml-masterclass-teens', band: 'Secondary IV and V', note: 'Machine learning built step by step in Python, with every model tested against data the student has checked by hand.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'CEGEP and adults', note: 'An adult-paced Python course for CEGEP students and working Montrealers, from first syntax to programs that handle real files.' }
    ]
  },

  sections: [
    {
      id: 'ladder-qc', tint: '', eyebrow: 'The Quebec ladder',
      h2: 'Secondary V, then CEGEP: why coding is planned differently in Montreal',
      intro: 'Quebec publishes its school program on quebec.ca. We read the pages below on 22 October 2026; quoted words are the government\'s and the rest is our summary.',
      body: [
        { kind: 'table', caption: 'Where a Montreal learner sits, by stage, from Quebec government pages read 22 October 2026 (quotes Quebec\'s; summaries ours)', head: ['Stage', 'What Quebec says', 'What it means for coding'], rows: [
          ['Secondary I to V', 'The secondary program covers students &ldquo;from Secondary I to Secondary V&rdquo;', 'Five secondary years, named by level rather than grade, so we place students by Secondary level'],
          ['Secondary Cycle Two math', 'Three options: CST, TS and Science (S); &ldquo;All of these options&rdquo; lead to a pre-university program', 'The Science option leans hardest on algebra, which suits students heading for computer science'],
          ['CEGEP, pre-university', 'A program that &ldquo;requires two years of full-time study&rdquo;', 'Most future university computer science students spend these two years at CEGEP first'],
          ['CEGEP, technical', 'A program that &ldquo;requires three years of full-time study&rdquo;', 'Career-focused programs, including computing ones, that lead straight to work'],
          ['University entry', '&ldquo;Universities use the R score to analyze applications&rdquo;', 'CEGEP marks, not secondary marks alone, carry a student into university']
        ] },
        { kind: 'p', text: 'There is one gap worth naming. The list of secondary programs of study on quebec.ca, read on 22 October 2026, includes mathematics, several science and technology courses, financial education and more, but no separate computer science or programming subject. Code can appear inside other subjects at a school\'s choice, yet nothing on that list guarantees a Montreal teenager writes a program before CEGEP. That is the space our classes fill: the steady practice of writing, testing and explaining code, which school timetables here leave to chance.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For Secondary I to III', p: 'Most children this age join Python for Teens or, if younger, Python and AI for Kids. The aim is fluency: reading code aloud, predicting what it prints, then changing it on purpose.' },
          { h3: 'For Secondary IV and V', p: 'Students choosing between CST, TS and Science often want proof they enjoy technical work. A term of Python and data gives them that evidence before the option is fixed. Our pages on <a class="cg-inline-link" href="/quebec-secondary-4-math-cst-ts-science">the Secondary 4 options</a> and <a class="cg-inline-link" href="/quebec-secondary-5-math-tutor">Secondary 5 math</a> go deeper.' },
          { h3: 'For CEGEP students', p: 'A CEGEP student is placed with adults, on an adult pace. Our page on <a class="cg-inline-link" href="/cegep-computer-science-preparation">preparing for CEGEP computer science</a> covers the jump from secondary math to a college programming course.' }
        ] },
        { kind: 'callout', h3: 'Our place beside school and college', p: 'We teach alongside a learner\'s school or CEGEP courses; we do not grant Quebec credits, diplomas or R score marks. We are not connected with the Ministère de l\'Éducation, any school service centre, any CEGEP or the Ville de Montréal.' }
      ]
    },
    {
      id: 'language', tint: 'tint', eyebrow: 'Language',
      h2: 'English lessons in a French-language province',
      intro: 'A family should know this before booking, not after.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'What the law says', p: 'Section 1 of Quebec\'s Charter of the French language states: French is the official language of Québec. The city\'s open data shows it too: the bike counter file on this page arrives with French column names.' },
          { h3: 'What we offer', p: 'Our lessons, materials and written feedback are in English. We do not teach in French, and we would rather say so here than accept a booking from a family expecting otherwise.' },
          { h3: 'Why it still works for many', p: 'Python keywords, error messages and most documentation are in English, so many bilingual Montreal learners are comfortable coding in it. The bike counter file on this page is in French, and reading it is part of the exercise.' }
        ] }
      ]
    },
    {
      id: 'bikes', tint: 'deep', eyebrow: 'Montreal data project',
      h2: 'When does Montreal ride? A year of the city\'s bike counters, and the missing hour',
      intro: 'The Ville de Montréal publishes readings from its permanent bike counters as open data, every quarter-hour, under a Creative Commons licence. Our students take the 2025 file, group it by month and test whether the counters are complete enough to compare. Every number below is our calculation from the file as downloaded on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Our monthly sums of recorded passages in 2025 at the 26 counters with a complete year, from the Ville de Montréal file comptage_velo_2025.csv (downloaded 22 October 2026). A passage is one bike detected passing one counter, not one person', head: ['Month of 2025', 'Passages at the 26 complete counters'], rows: [
          ['January', '133,286'],
          ['February', '90,564'],
          ['March', '241,784'],
          ['April', '567,324'],
          ['May', '1,021,855'],
          ['June', '1,430,009'],
          ['July', '1,381,183'],
          ['August', '1,384,069'],
          ['September', '1,459,622'],
          ['October', '1,081,422'],
          ['November', '460,335'],
          ['December', '124,474']
        ] },
        { kind: 'p', text: 'Most students guess July for the peak. At these 26 counters it is September, by a short head over June, and February is the quietest month at roughly one sixteenth of September. Commuting after the summer holidays is a plausible reason, but the file records bikes, not reasons, so we teach students to write that sentence as a guess. The program that produced the table is below; it uses only Python\'s standard library and expects the downloaded file in the same folder:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Read the French headers', p: 'The columns are date, heure, id_compteur and nb_passages. A student who has never studied French still works out that nb_passages is the count, from the numbers alone, then checks the guess against the dataset page.' },
          { h3: '2. Check completeness first', p: 'The 2025 file has 1,404,316 rows from 45 counters, but only 26 report every quarter-hour of the year. Comparing months across all 45 would mix counters that were switched on, moved or offline, so the table uses the complete 26 only.' },
          { h3: '3. Find the missing hour', p: 'A full year should give 365 days of 96 quarter-hours. On 9 March 2025, 25 of the complete counters have 92 rows, because clocks jumped from 2 am to 3 am; one keeps 96 rows with the vanished hour stored as blanks. That is why the script expects 4 fewer rows.' }
        ] },
        { kind: 'table', mt: true, caption: 'Other checks our students run on the same Ville de Montréal file (our results, downloaded 22 October 2026)', head: ['Question', 'What the file shows'], rows: [
          ['Quarter-hours with zero passages recorded', '482,308 rows'],
          ['Rows with a blank count', '5'],
          ['Busiest complete counter in 2025', 'REV St-Denis/Duluth dir nord, 929,477 passages'],
          ['Highest single quarter-hour value', '434, at the Rachel / Pie IX counter, 30 May 2025 at 23:15'],
          ['Sites listed in the separate locations file', '128, of which 77 are labelled ECO-Compteur and 51 Ville']
        ] },
        { kind: 'callout', h3: 'What a passage count cannot prove', p: 'A rider who passes the same counter twice is counted twice, and counters marked dir nord and dir sud count each direction separately, so no row here is a number of cyclists. The 434 at 23:15 might be a night ride, a group or a sensor fault; the file does not say, and a good analyst leaves it at that.' },
        { kind: 'p', text: 'The data comes from the Ville de Montréal, published under the Creative Commons Attribution 4.0 International licence, which permits reuse for any purpose, including commercial use, with credit. Source: Ville de Montréal, Compteurs cyclistes permanents (<a class="cg-inline-link" href="https://donnees.montreal.ca/dataset/cyclistes">dataset page</a>, <a class="cg-inline-link" href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>). The sums and checks are ours, and the city has not endorsed this page or our classes.' }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'Contests',
      h2: 'CEMC contests a Montreal student or CEGEP student can write in 2026 to 2027',
      intro: 'CEMC, the Centre for Education in Mathematics and Computing at the University of Waterloo, names CEGEP students outright in two of its contests, which matters in a province where final-year learners are often at college. Dates are CEMC\'s dates for the Americas, read 22 October 2026.',
      body: [
        { kind: 'table', caption: 'CEMC contests open to Montreal learners, 2026 to 2027, with CEMC\'s eligibility and language wording where it applies', head: ['Contest', 'Who CEMC says may write it', 'Date'], rows: [
          ['Beaver Computing Challenge (English only)', 'Students up to Grade 10, at three levels; no coding experience needed', '9 to 20 November 2026'],
          ['Canadian Computing Competition (English and French)', 'Any participant, at a Junior or Senior level chosen by programming skill', 'Wednesday 17 February 2027'],
          ['Euclid', '&ldquo;Students in their final year of secondary school or C&Eacute;GEP students&rdquo;', 'Tuesday 6 April 2027'],
          ['CSMC (Canadian Senior Mathematics Contest)', 'Grades 11 and 12 and C&Eacute;GEP students; the 2026 ordering deadline has passed', 'Wednesday 18 November 2026']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Registration runs through schools', p: 'CEMC\'s rule is plain: all students must participate through their school, or through another local school willing to host them. A CEGEP student asks their college, not CEMC.' },
          { h3: 'The CCC, in either language', p: 'The 2027 Canadian Computing Competition is set for Wednesday 17 February 2027, according to CEMC, and is offered in French as well as English. Students may use C, C++, Python or Java.' },
          { h3: 'Free papers, original lessons', p: 'CEMC posts its last ten years of contests online at no cost. We point students to <a class="cg-inline-link" href="https://cemc.uwaterloo.ca/resources/past-contests">those papers</a> and teach with problems we write, never by reproducing CEMC\'s questions or solutions.' }
        ] },
        { kind: 'p', text: 'The counter project is closer to contest work than it looks: reading structured input, grouping by a key and refusing to compare incomplete groups are exactly the habits a CCC problem rewards. For contest training, see our <a class="cg-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation page</a>; for the math side, <a class="cg-inline-link" href="/cemc-waterloo-contests-preparation">Waterloo contest preparation</a>. Neither CEMC nor the University of Waterloo is connected with Modern Age Coders.' }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Class times',
      h2: 'Montreal hours in India time for 2026 to 2027',
      intro: 'Montreal keeps Eastern time and changes its clocks twice a year; our teachers in India keep one offset. The hours below are worked examples for judging a slot, not a published schedule.',
      body: [
        { kind: 'table', caption: 'Example Montreal class hours shown in India time. Quebec follows the America/Toronto zone in the IANA time zone database (release 2026e); the arithmetic is ours', head: ['In Montreal', 'Offset', 'Tuesday 4:30 to 5:30 pm is, in India', 'Saturday 9 to 10 am is, in India'], rows: [
          ['Up to 1 November 2026', 'UTC-4', 'Wednesday 2 to 3 am', 'Saturday 6:30 to 7:30 pm'],
          ['Winter, 1 November 2026 to 14 March 2027', 'UTC-5', 'Wednesday 3 to 4 am', 'Saturday 7:30 to 8:30 pm'],
          ['Summer, from 14 March 2027', 'UTC-4', 'Wednesday 2 to 3 am', 'Saturday 6:30 to 7:30 pm']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Montreal time comes first', p: 'Every time we send a Montreal family is written in Eastern time. Around 1 November 2026 and 14 March 2027 we confirm it again, so no one has to work out the change.' },
          { h3: 'Island and suburb numbers', p: 'Numbers on the island use 514, 438 and 263; Laval, Longueuil and the other suburbs use 450, 579 and 354. The form takes any of them as ten digits after the +1.' },
          { h3: 'The same gap, in code', p: 'The 92-row day in the bike file is the spring change seen from the data side. Students who plot the file with a timezone-aware date type watch the gap explain itself, which teaches more than a rule about clocks.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a child\'s first program to CEGEP-level Python',
    intro: 'Stages are approximate; the free class places each learner by what they can already do.',
    cols: [
      { band: 'Elementary, ages 6 to 8', h3: 'Blocks and stories', p: 'Short block programs, animations and puzzles a child can explain step by step.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Elementary, ages 9 to 12', h3: 'First typed code', p: 'Python with loops, conditions and functions, and an early look at how AI tools make guesses.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Secondary I to V', h3: 'Python and data', p: 'Python taken seriously, real files like the bike counters, then machine learning for older students.', courses: ['python-complete-masterclass-teens', 'ai-ml-masterclass-teens'] },
      { band: 'CEGEP and adults', h3: 'Adult pace', p: 'Python from the ground up for college students and working adults, and data analysis for those who need it at work.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI assistant can sum the bike file. Can it tell you the sum is unfair?',
    intro: 'Only if the person asking already knows to check.',
    p1: 'Ask a chatbot for monthly totals from the Montreal counter file and it will produce code that runs. Whether it warns you that 19 of the 45 counters are missing parts of the year, or that 9 March is four rows short, depends entirely on whether you thought to ask. Most beginners do not, and the chart they publish quietly compares counters that were not all switched on.',
    p2: 'We teach the other way round. Students plan the steps, write the grouping themselves and test the result before trusting it. As they grow older they use AI tools under age rules we follow, as a second pair of eyes on work they understand, not as a source of answers to copy.',
    closer: 'Thinking clearly about a problem is the skill that survives every new tool; code is how a student proves they have done it.',
    blogAnchor: 'our longer piece on why learning to code still matters when AI can write it'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How live online classes work from Montreal',
    intro: 'Learners join from home, so the island, Laval and the South Shore all share the same classroom.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Two formats', p: 'Join a group of fifteen to twenty learners at the same stage, or take private lessons with one teacher if you need a faster pace or a specific project.' },
      { h3: 'Placed by Quebec stage', p: 'Teachers plan by Secondary level and CEGEP year rather than Ontario grades, and place CEGEP students with adults.' },
      { h3: 'Language of teaching', p: 'English throughout: explanations, code comments and written feedback. Learners who think in French are welcome to ask questions in simple English.' },
      { h3: 'Equipment', p: 'Any computer with a real keyboard, a working microphone and internet steady enough for video. A keyboard matters more than a fast processor.' },
      { h3: 'Starting', p: 'The first class is a real lesson at no charge, ending with a recommended level, course and time. No card is requested.' }
    ],
    spec: { title: 'No Montreal premises', p: 'Modern Age Coders has no office or classroom in Montreal or anywhere in Quebec, and claims none. All teaching is live online from India.' }
  },

  fees: {
    h2: 'What classes cost from Montreal',
    intro: 'Three lines, each printed with its currency code.',
    first: 'A full live lesson without charge, after which we recommend a level, a course and a time.',
    group: 'The monthly fee for a place in a group of fifteen to twenty learners at one stage.',
    private: 'The monthly fee for one learner and one teacher, scheduled around the learner.',
    closer: 'Montreal learners pay the same monthly fee as learners anywhere in Canada. Billing begins only after the free lesson, once a course and time are agreed; the pricing page covers holidays and missed sessions.'
  },

  reviewsH2: 'Google reviews from families and students',

  book: {
    h2: 'Tell us about your Montreal learner',
    intro: 'The first task depends on the level: a moving-sprite game for a young child, a quiz program in Python for a Secondary I student, or the bike counter file for a CEGEP student who wants real data.',
    success: 'Thank you. Our team will contact you soon about a class from Montreal.'
  },

  faq: {
    h2: 'Montreal coding and AI questions',
    intro: 'Questions Montreal families and learners ask before a first class.',
    items: [
      { q: 'Do you offer coding classes for kids in Montreal?', a: 'Yes, live online with a real teacher, from age 6. Children join from home in a group of fifteen to twenty or one to one; we have no classroom in Montreal.' },
      { q: 'Are your Montreal classes taught in French?', a: 'No. Every class, every handout and all written feedback is in English. Many bilingual Montreal learners are comfortable with that, but a family wanting French-language teaching should look elsewhere.' },
      { q: 'Does a Quebec secondary school teach coding?', a: 'The secondary program list on quebec.ca names no separate computer science or programming subject, so coding depends on the school. Our classes give a Secondary student regular, structured programming practice.' },
      { q: 'My child is 17 and at CEGEP. Which class fits?', a: 'An adult-paced one. A CEGEP student joins our Python Masterclass or an adult data course, alongside university students and working adults, rather than a teen group.' },
      { q: 'Can you help with Python classes for a Montreal teen?', a: 'Yes. Python for Teens runs from a first program to files, functions and data, and it is the base for our AI and machine learning course.' },
      { q: 'Do you teach robotics classes in Montreal?', a: 'We teach the software side only: Python, logic, reading sensor data and debugging. Building a physical robot needs a school team or a local club, and our classes sit well beside one.' },
      { q: 'Is there an AI class suitable for a Montreal teenager?', a: 'Yes, AI and Machine Learning for Teens, once Python is solid. Tools with an 18-plus age rating stay out of under-18 lessons, and ChatGPT for a teenager requires a parent\'s permission, which we confirm before any lesson uses it.' },
      { q: 'Can a CEGEP student enter a CEMC contest?', a: 'Yes. CEMC lists CEGEP students for the Euclid, on Tuesday 6 April 2027, and the CSMC. Entry goes through the student\'s school or college, not through us.' },
      { q: 'What are class times for Montreal learners?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are confirmed in Eastern time.' },
      { q: 'Will a 514 or 450 number work in the form?', a: 'Yes. Island numbers with 514, 438 or 263 and suburban numbers with 450, 579 or 354 are accepted. Type the ten digits after the +1.' },
      { q: 'How do Montreal families see the fees?', a: 'The fees section of this page lists the free lesson, the monthly group fee and the monthly private fee, each with its currency code. Nothing is charged before the free lesson.' }
    ]
  },

  next: {
    eyebrow: 'More for Canada',
    h2: 'Other pages for Montreal and Quebec learners',
    html: 'Quebec students can read about <a class="cg-inline-link" href="/quebec-secondary-4-math-cst-ts-science">choosing CST, TS or Science in Secondary 4</a>, <a class="cg-inline-link" href="/quebec-secondary-5-math-tutor">Secondary 5 math support</a> and <a class="cg-inline-link" href="/cegep-computer-science-preparation">getting ready for CEGEP computer science</a>. The country-wide view is on <a class="cg-inline-link" href="/coding-classes-in-canada">our Canada page</a>, and contest students can start with <a class="cg-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Montreal and Canada',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/cegep-computer-science-preparation', label: 'CEGEP computer science' },
    { href: '/quebec-secondary-4-math-cst-ts-science', label: 'Quebec Secondary 4 math' },
    { href: '/quebec-secondary-5-math-tutor', label: 'Quebec Secondary 5 math' },
    { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' }
  ],

  personalityCss: `
.cg-root.cg-amom .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.6vw, 2.4rem); }
.cg-root.cg-amom .cg-hero h1 { font-weight: 690; letter-spacing: -0.02em; line-height: 1.04; }
.cg-root.cg-amom .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-amom .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; font-size: 0.76rem; text-transform: uppercase; }
.cg-root.cg-amom .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.012em; }
.cg-root.cg-amom .cg-table caption { font-weight: 640; text-align: left; }
.cg-root.cg-amom .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-amom #bikes code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.79rem; line-height: 1.6; padding: 1rem 1.1rem; border-left: 4px solid var(--cg-accent); }
.cg-root.cg-amom .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-amom .cg-callout { border-left-width: 2px; }
`,

  dossier: {
    curriculumAuthority: 'Quebec, read 22 October 2026: quebec.ca QEP secondary page (Secondary I to Secondary V; list of secondary programs with no separate computer science subject); QEP Mathematics Secondary Cycle Two PDF (CST, TS and S options, all lead to pre-university); quebec.ca CEGEP overview (pre-university two years, technical three years, R score). Charter of the French language s.1 (Internet Archive copy of legisquebec). CEMC 2026-27: BCC English only and dates; CCC English and French, 17 February 2027; Euclid and CSMC eligibility naming CEGEP students; through-a-school rule. Montreal area codes and Eastern offsets from facts-geo.md (CNAC via the Internet Archive; IANA tzdb 2026e).',
    localProject: 'Ville de Montréal open data, Compteurs cyclistes permanents (CC BY 4.0), 2025 Eco-Compteur file downloaded 22 October 2026 and analysed with our script montreal_counters.py (python -I): 1,404,316 rows, 45 counters, 26 complete; 9 March 2025 has 92 rows at 25 complete counters; monthly passages at complete counters from 90,564 (February) to 1,459,622 (September); 482,308 zero rows; busiest complete counter REV St-Denis/Duluth dir nord 929,477; peak quarter-hour 434. Labelled as ours. Lesson family: grouping a time series by month, completeness checks and the daylight-saving gap.',
    requiredMentions: [
      '1,459,622',
      'REV St-Denis/Duluth dir nord',
      'nb_passages',
      'one keeps 96 rows with the vanished hour stored as blanks',
      '26 counters with a complete year',
      'Island numbers with 514, 438 or 263',
      'A passage is one bike detected passing one counter',
      'no separate computer science or programming subject',
      'arrives with French column names',
      'Compteurs cyclistes permanents'
    ],
    sources: [
      { claim: 'quebec.ca: Quebec Education Program, secondary (Secondary I to V, list of programs of study).', url: 'https://www.quebec.ca/en/education/preschool-elementary-and-secondary-schools/programs-training-evaluation/quebec-education-program/secondary' },
      { claim: 'Quebec Education Program, Mathematics, Secondary Cycle Two (CST, TS and S options; all lead to pre-university).', url: 'https://cdn-contenu.quebec.ca/cdn-contenu/education/pfeq/secondaire/programmes/PFEQ-mathematique-deuxieme-cycle-secondaire-AN.pdf' },
      { claim: 'quebec.ca: CEGEP studies overview (program lengths, R score).', url: 'https://www.quebec.ca/en/education/cegeps-private-colleges/studying/overview' },
      { claim: 'Charter of the French language, section 1.', url: 'https://www.legisquebec.gouv.qc.ca/en/document/cs/C-11' },
      { claim: 'CEMC: 2026-27 contest dates, eligibility and language notes, through-a-school rule, free past contests.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'Ville de Montréal open data: Compteurs cyclistes permanents dataset page and files.', url: 'https://donnees.montreal.ca/dataset/cyclistes' },
      { claim: 'Ville de Montréal open data API: package metadata with the CC BY 4.0 licence.', url: 'https://donnees.montreal.ca/api/3/action/package_show?id=cyclistes' },
      { claim: 'Creative Commons Attribution 4.0 International deed (commercial reuse allowed with attribution).', url: 'https://creativecommons.org/licenses/by/4.0/' },
      { claim: 'IANA tzdb northamerica: America/Toronto offsets used for Quebec and the 2026-27 changes.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Montreal or Quebec population figure: StatCan was not reachable live, so no population is printed.',
      'That we teach in French or have bilingual teachers: refused; teaching is in English.',
      'That our classes earn Quebec credits, a diploma or R score marks: refused.',
      'That Quebec schools never teach coding: not claimed; only that the program list names no separate computer science subject.',
      'The 54-credit secondary diploma and French-language instruction rules: unverified (education.gouv.qc.ca unreachable), not used.',
      'A count of cyclists: refused; the file counts passages at counters.',
      'A reason for the 434 quarter-hour peak or for September beating July: not stated in the file; presented as unknown or as a labelled guess.',
      'The Montreal outdoor rink history: used on ai-and-machine-learning-classes-in-canada, so not reused here.',
      'Named Montreal employers or AI institutes: not fetched raw for this page, so not used.',
      'That the CSMC 2026 is still open to order: CEMC\'s ordering deadline was 22 October 2026, so it is shown as passed.',
      'CEMC fees: left out on purpose (currency-neutral page).',
      'Any affiliation with the Ville de Montréal, the Ministère de l\'Éducation, any CEGEP, CEMC or the University of Waterloo.'
    ]
  }
};
