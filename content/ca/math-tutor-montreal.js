'use strict';
// Math tutor, Montreal (cg- city page, Canada cluster Wave 2, row 174; English-language page). Spec
// docs/superpowers/specs/2026-10-22-ca-cluster-design.md, brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Spine: Quebec secondary math as a Montreal student meets it, taught in English (the three Cycle Two options, the Secondary IV
// ministerial exam worth 50% of the competency mark, CEGEP entry), routed to the live Quebec spokes without repeating them; a
// Secondary IV two-variable statistics lesson (correlation coefficient, regression line, residuals, interpolation against
// extrapolation, correlation against cause) on the Ville de Montreal library statistics file; a worked regression problem of
// ours; CEMC contests open to CEGEP students; price. No Quebec province page is live, so the only parent is the Canada hub.
// Sources, read raw (curl -sL -A "Mozilla/5.0"); copies in keyword-research-2026-09/ca/src-pilots/math-tutor-montreal/ (Quebec
// documents copied from ca/src/quebec/ and ca/src-pilots/quebec-secondary-4-math-cst-ts-science/, fetched raw 22 October 2026;
// quotes re-grepped by this writer):
//  - QEP Mathematics, Secondary Cycle Two, English PDF (qep-math-cycle2.txt): "They are the Cultural, Social and Technical option,
//    the Technical and Scientific option and the Science option."; "All of these options allow students to enroll in a
//    preuniversity program."; "In the case of two-variable distributions, they interpret the correlation and are able to
//    interpolate or extrapolate using a regression line."; "they exercise critical judgment when they come to a qualitative or
//    quantitative conclusion about whether or not there is a dependent or causal relationship between variables."
//  - Quebec.ca ministerial examinations (qc-exam-schedule.txt, qc-exam-about.txt): "Mathematics, Sec. 4" on January 21, 9:00 a.m.
//    to 12:00 p.m. (2027 session); June 11, 9:00 to 12:00, Technical and Scientific (564-420) and Science (565-420); June 18,
//    9:00 to 12:00, Cultural, Social and Technical (563-420); August 3, 9:00 to 12:00, all three; "(Math. Reasoning)"; "The
//    ministerial examinations in Secondary IV and V count for 50% of the final mark for the competency or competencies evaluated."
//  - Quebec.ca CEGEP overview (cegep-overview.txt): pre-university "Program that prepares students for university and that
//    requires two years of full-time study."; "Universities use the R score to analyze applications".
//  - Charter of the French language s.1 (facts-geo.md; IA copy): "French is the official language of Québec."
//  - CEMC (facts-schools-contests.md): Euclid "Students in their final year of secondary school or CÉGEP students.", 6 April 2027;
//    CSMC "Students in Grades 11 and 12 and CÉGEP students" (18 November 2026; ordering deadline 22 October 2026); Pascal, Cayley,
//    Fermat 23 and 24 February 2027; Gauss 10 to 21 May 2027; through a school.
//  - facts-geo.md: Montreal island area codes 514, 438, 263; suburbs 450, 579, 354; Eastern time UTC-4 to 1 November 2026, UTC-5 to
//    14 March 2027; India 9 h 30 / 10 h 30 ahead. No populations used.
//  - Ville de Montreal open data (donnees.montreal.ca), "Bibliotheques de Montreal - statistiques sur le pret, les collections et
//    la frequentation" (CKAN package_show saved as pkg_biblio.json): licence "Creative Commons Attribution 4.0 International";
//    organisation Ville de Montreal; description (French) "Tableaux de donnees qui presentent les statistiques de pret, de
//    collections et de frequentation des 45 bibliotheques de Montreal." (accents dropped here; English rendering on the page is
//    ours). Resource "Statistiques consolidees, 2012-2020", bm_stats-consol.xlsx, 1,120,934 bytes, downloaded 23 October 2026 at
//    09:47 UTC. CC BY 4.0 deed (cc-by-4.0-deed.html): "for any purpose, even commercially."
// Our own calculations (libraries.py and worked.py, python -I; outputs *.out.txt): sheet 2018, 49 numbered rows, 45 libraries with
// visits, loans and floor area (4 skipped: two mobile services and two sites with missing values) across 19 boroughs; loans
// (non-digital, with renewals) against visits: slope 1.1486, intercept 45,658.2, r = 0.825, r2 0.681; visits against floor area
// r = 0.661; median visits 175,292, median loans 226,952; largest residuals Ahuntsic +272,282 (670,189 loans, 306,670 visits),
// Marc-Favreau +250,033, Benny -167,753 (611,789 visits, the most); lowest visits Pierrefonds 20,469 in 2018 against 365,408 in the
// 2019 sheet; line at 150,000 visits 217,952 loans. Worked problem (invented): x 50, 100, 150, 200, 250; y 90, 160, 190, 260, 300;
// Sxy 26,000, Sxx 25,000, slope 1.04, intercept 44, r 0.9934; 120 gives 168.8; 600 gives 668.
// Lesson family: two-variable statistics (correlation, regression line, residuals, interpolation and extrapolation).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const LIBRARIES = [
  'import openpyxl, statistics',
  '',
  'book = openpyxl.load_workbook("bm_stats-consol.xlsx", data_only=True)',
  'branches = []',
  'for row in book["2018"].iter_rows(values_only=True):',
  '    if isinstance(row[0], int):  # numbered library rows only',
  '        loans, visits, area = row[8], row[19], row[33]',
  '        if all(isinstance(v, (int, float)) for v in (loans, visits, area)):',
  '            branches.append((row[4], visits, loans))',
  '',
  'visits = [b[1] for b in branches]',
  'loans = [b[2] for b in branches]',
  'line = statistics.linear_regression(visits, loans)',
  'print("libraries:", len(branches))',
  'print("r:", round(statistics.correlation(visits, loans), 3))',
  'print("loans = ", round(line.slope, 4), "x visits +", round(line.intercept))'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'MONTREAL MATH', label: 'Math tutor in Montreal', blurb: 'Math help in English for Montreal students, from elementary school to Secondary V and CEGEP, with a correlation lesson on the city\'s library statistics.' },
  market: CA,
  slug: 'math-tutor-montreal',
  code: 'maae',
  accent: '#6B5F10',
  accentRationale: 'Montreal math: a dark old-stone olive, #6B5F10, allocated for this row and kept at least 14 RGB units from every other Canada accent; contrast 6.3 on the paper #FBF8F2 and above 4.5 on both paper tints (checked by the build gate)',
  pageType: 'city',
  place: {
    name: 'Montreal',
    eyebrow: 'Math tutor, Montreal, Quebec',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Quebec' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Math in Canada', href: '/online-math-tutor-canada' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Math tutor in Montreal',
  title: 'Math Tutor Montreal | Live Online in English, Sec I to Sec V',
  description: 'Live online math tutoring in English for Montreal students: CST, TS and Science options, the Secondary IV exam dates, a library data statistics lesson, and contests.',
  ogDescription: 'Montreal libraries with more visits lend more books, with r = 0.825. A math tutor page that teaches Secondary IV correlation with the city\'s own figures.',
  twitterDescription: 'Math tutoring in English for Montreal students, live online, from elementary school to Secondary V and CEGEP preparation.',
  ogImageCourse: 'complete-high-school-mathematics-mastery',
  verifiedOn: '23 October 2026',
  courseSchema: {
    name: 'Live Online Math Tutoring in English for Montreal Students',
    description: 'Live online math taught in English for Montreal students from elementary school to Secondary V: number sense, Secondary I to III foundations, the Cultural, Social and Technical, Technical and Scientific, and Science options in Secondary IV and V, and CEMC contest problem solving, in a group of fifteen to twenty or one to one.'
  },

  h1: 'Math tutor in Montreal, taught in English',
  capsuleQ: 'Can a Montreal student get live math tutoring in English?',
  capsule: 'Yes. Modern Age Coders teaches math in English, live online, to Montreal students from elementary school through Secondary V, with a private teacher or alongside fifteen to twenty classmates working at the same stage. Secondary students mostly join High School Mathematics: Algebra to Calculus, taught to their CST, TS or Science option; contest students add Waterloo Math Contests. The first lesson is free.',
  lead: 'Montreal students meet a fork in Secondary IV that shapes the rest of their math. The Québec Education Program offers three options in Cycle Two: Cultural, Social and Technical, Technical and Scientific, and Science. The province says all three allow entry to a pre-university CEGEP program, but they differ in how much algebra they ask for. Secondary IV also brings a ministerial exam that counts for half the final mark in the competency it assesses. This page sets out those facts from Québec&rsquo;s own English documents, then teaches a Secondary IV statistics lesson on the Ville de Montréal&rsquo;s library figures, works a regression problem by hand, and covers contests and prices. Our lessons are in English; French is the official language of Québec, and we help students read math vocabulary in both.',
  wa: 'Hello Modern Age Coders, I would like a free math lesson in English for a student in Montreal.',

  picks: {
    eyebrow: 'Math course picks for Montreal',
    h2: 'Courses Montreal families start with',
    intro: 'Each matches a stage of Quebec math. A free first lesson in English confirms the fit after the teacher hears the student reason.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', band: 'Elementary school', note: 'Number sense, operations, fractions and measurement, taught in English with the French terms beside them where a child needs both.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', band: 'Secondary I and II', note: 'Integers, ratio and proportion, first algebra and geometry, so Secondary III starts on firm ground.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Secondary III to V', note: 'Functions, statistics, systems and trigonometry for the CST, TS or Science option, taught beside the school course. Credits come only from the school.' },
      { course: 'waterloo-math-contests-gauss-to-euclid-course', band: 'Contest-minded students', note: 'Original contest-style problems, plus the free CEMC archive, up to the Euclid level that CEGEP students may also write.' }
    ]
  },

  sections: [
    {
      id: 'quebec', tint: '', eyebrow: 'Quebec math in Montreal',
      h2: 'Quebec secondary math for a Montreal student: options, exam and CEGEP',
      intro: 'Montreal schools teach the Québec Education Program. The facts below come from the English version of the program and from Québec.ca, read on 22 and 23 October 2026; quoted wording is the province&rsquo;s.',
      body: [
        { kind: 'table', caption: 'The Secondary IV mathematics ministerial examination sittings for 2026 to 2027, as Québec.ca lists them for the English sector (Mathematics, Sec. 4, Math. Reasoning)', head: ['Sitting', 'Option and code', 'Time'], rows: [
          ['21 January 2027', 'All options', '9:00 a.m. to 12:00 p.m.'],
          ['11 June 2027', 'Technical and Scientific (564-420) and Science (565-420)', '9:00 a.m. to 12:00 p.m.'],
          ['18 June 2027', 'Cultural, Social and Technical (563-420)', '9:00 a.m. to 12:00 p.m.'],
          ['3 August 2027', 'All three options', '9:00 a.m. to 12:00 p.m.']
        ] },
        { kind: 'p', text: 'Québec.ca says the ministerial examinations in Secondary IV and V count for 50% of the final mark for the competency or competencies evaluated. The schedule labels each mathematics paper &ldquo;Math. Reasoning&rdquo;, matching the program&rsquo;s second competency, Uses mathematical reasoning. A Montreal Secondary IV student therefore has two very different June dates depending on option, and a January sitting for students on a semester timetable.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Three options, one door', p: 'The program names them: the Cultural, Social and Technical option, the Technical and Scientific option and the Science option. It adds that all of these options allow students to enroll in a pre-university program. Our <a class="cg-inline-link" href="/quebec-secondary-4-math-cst-ts-science">CST, TS or Science page</a> compares them in depth.' },
          { h3: 'Secondary V next', p: 'Secondary V continues the chosen option with new concepts and a longer project. Our <a class="cg-inline-link" href="/quebec-secondary-5-math-tutor">Secondary V math page</a> covers it, including the option changes the program allows.' },
          { h3: 'Then CEGEP', p: 'Québec.ca describes a pre-university CEGEP program as one that prepares students for university and requires two years of full-time study, and notes that universities use the R score to analyze applications. Our <a class="cg-inline-link" href="/cegep-computer-science-preparation">CEGEP preparation page</a> covers the computer science route.' }
        ] },
        { kind: 'p', text: 'Statistics runs through all three options, and the program is specific about what students should do with it. Describing the competency Uses mathematical reasoning, it says that in the case of two-variable distributions students interpret the correlation and are able to interpolate or extrapolate using a regression line, and they exercise critical judgment about whether there is a dependent or causal relationship between variables. That is the exact lesson below, on Montreal&rsquo;s own data.' },
        { kind: 'callout', h3: 'Our role, in plain terms', p: 'We teach alongside a Montreal student&rsquo;s school math course, in English. We do not grant Quebec credits, and marks, ministerial exam results and diplomas come through the school and the Ministère. We are not connected with the Ministère de l&rsquo;Éducation, the Ville de Montréal or any Montreal school service centre or board.' }
      ]
    },
    {
      id: 'libraries', tint: 'deep', eyebrow: 'Montreal data lesson',
      h2: 'Do busier Montreal libraries lend more books? Correlation on city data',
      intro: 'The Ville de Montréal publishes yearly statistics for its public libraries as open data. Secondary IV students plot visits against loans, measure the correlation, fit a regression line and argue about what it proves. We computed every coefficient and residual shown here ourselves.',
      body: [
        { kind: 'p', text: 'The dataset is the Bibliothèques de Montréal statistics on loans, collections and attendance; the City describes it, in French, as tables presenting those statistics for Montreal&rsquo;s 45 libraries (the English rendering is ours). We used the consolidated workbook covering 2012 to 2020, downloaded on 23 October 2026, and its 2018 sheet. Of 49 numbered rows, 45 libraries across 19 boroughs report visits, loans and floor area; the four we left out are two mobile services and two sites with missing figures.' },
        { kind: 'table', caption: 'Visits and loans at selected Montreal libraries in 2018, from the Ville de Montréal workbook, with our residuals from the regression line (loans are non-digital loans including renewals)', head: ['Library', 'Visits', 'Loans', 'Residual from our line'], rows: [
          ['Benny', '611,789', '580,620', '&minus;167,753'],
          ['Ahuntsic', '306,670', '670,189', '+272,282'],
          ['Marc-Favreau', '297,265', '637,137', '+250,033'],
          ['Pierrefonds', '20,469', '105,095', 'see note below'],
          ['Median of the 45', '175,292', '226,952', '']
        ] },
        { kind: 'p', text: 'Across the 45 libraries our correlation between visits and loans is r = 0.825, a strong positive linear relationship, and r squared is 0.681, so about two thirds of the variation in loans lines up with variation in visits. The regression line is loans = 1.1486 &times; visits + 45,658. At 150,000 visits, an interpolation well inside the data, it predicts about 217,952 loans. The Python reads the 2018 sheet and does the rest:<code class="cg-mt-2">' + LIBRARIES + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Residuals tell stories', p: 'Benny had the most visits in 2018, 611,789, yet lent about 167,753 fewer items than the line predicts. Ahuntsic lent about 272,282 more. Libraries are used for study, events and computers as well as borrowing, and the residual shows how differently branches are used.' },
          { h3: 'One number to question', p: 'Pierrefonds recorded only 20,469 visits in the 2018 sheet but 365,408 in the 2019 sheet. The file does not say why. A careful student flags that point before fitting anything, and checks how much the line moves without it.' },
          { h3: 'A third variable', p: 'Visits also correlate with floor area, r = 0.661 in our calculation. Bigger buildings draw more people and hold more books, so size may drive both visits and loans. That is the program&rsquo;s point about dependent or causal relationships.' }
        ] },
        { kind: 'callout', h3: 'Correlation is not a cause', p: 'A strong r does not mean that visiting causes borrowing, or the reverse. It says the two rise together across these 45 libraries in 2018. Extending the line to a library with three million visits would be extrapolation far outside the data, and the program asks students to say exactly that when they extrapolate.' },
        { kind: 'p', text: 'Source: Ville de Montréal, Bibliothèques de Montréal statistics, used under the Creative Commons Attribution 4.0 International licence, which the licence deed says allows use for any purpose, even commercially (<a class="cg-inline-link" href="https://creativecommons.org/licenses/by/4.0/">licence</a>, <a class="cg-inline-link" href="https://donnees.montreal.ca/dataset/bibliotheques-montreal-statistiques">dataset page</a>). We changed the data by selecting one sheet and computing our own statistics. The Ville de Montréal does not endorse this page or our classes.' }
      ]
    },
    {
      id: 'worked', tint: '', eyebrow: 'A worked problem, ours',
      h2: 'Worked problem: a regression line by hand, then a warning',
      intro: 'Five invented branches, written by us so that every step can be done without software. The numbers are in thousands.',
      body: [
        { kind: 'p', text: '<strong>Question.</strong> Five branches report visits x and loans y, in thousands: (50, 90), (100, 160), (150, 190), (200, 260), (250, 300). (a) Find the regression line. (b) Estimate loans at 120 thousand visits. (c) Should the line be used for a library with 600 thousand visits?' },
        { kind: 'p', text: '<strong>Step 1, find the means.</strong> The mean of x is 150 and the mean of y is 200. The regression line always passes through the point (150, 200), which is a quick check on any answer.' },
        { kind: 'p', text: '<strong>Step 2, compute the slope.</strong> Multiply each x deviation by its y deviation and add: (&minus;100)(&minus;110) + (&minus;50)(&minus;40) + 0(&minus;10) + 50(60) + 100(100) = 26,000. The squared x deviations add to 25,000. The slope is 26,000 divided by 25,000, or 1.04 thousand loans per thousand visits.' },
        { kind: 'p', text: '<strong>Step 3, find the intercept and the line.</strong> 200 = 1.04(150) + b gives b = 44, so y = 1.04x + 44. The correlation coefficient for these points is about 0.993, a very strong linear relationship, stronger than the real Montreal libraries, as invented data usually is.' },
        { kind: 'p', text: '<strong>Step 4, interpolate and extrapolate.</strong> At 120 thousand visits, inside the data, y = 1.04(120) + 44 = 168.8 thousand loans, a reasonable estimate. At 600 thousand visits the line gives 668 thousand, but 600 is more than twice the largest x in the data. That is extrapolation, and the honest answer to part (c) is that the line may not hold there.' },
        { kind: 'p', text: '<strong>Try it yourself.</strong> (1) Remove the point (100, 160) and recompute the slope. (2) Describe the residual of the point (150, 190). (3) In one sentence, explain why the Benny library sits below the Montreal line without anything being wrong with its figures. Your teacher will go over them with you during the free lesson.' }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'Contests for Montreal students',
      h2: 'Math contests a Montreal student can write, including at CEGEP',
      intro: 'The Centre for Education in Mathematics and Computing (CEMC) at the University of Waterloo runs the contests most Canadian schools use. Unusually for a Quebec student, some are open to CEGEP students as well. Dates read on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'CEMC contests open to Montreal students in 2026 to 2027, with eligibility in CEMC&rsquo;s words where it mentions CEGEP', head: ['Contest', 'Who may write', 'CEMC date'], rows: [
          ['Gauss', 'Grades 7 and 8', '10 to 21 May 2027'],
          ['Pascal, Cayley, Fermat', 'Grades 9, 10 and 11', '23 and 24 February 2027'],
          ['CSMC', 'Grades 11 and 12 and CÉGEP students', '18 November 2026 (school orders closed 22 October 2026)'],
          ['Euclid', 'Final year of secondary school or CÉGEP students', '6 April 2027']
        ] },
        { kind: 'p', text: 'CEMC organises its contests by grade, as most of Canada does, so a Montreal family should ask the school which contest it offers to a given Secondary level. The CEGEP rows are the distinctive ones: CEMC lists CÉGEP students as eligible for both the Euclid and the CSMC. A student in the first year of a pre-university program can therefore keep writing contests after leaving secondary school. Our <a class="cg-inline-link" href="/euclid-contest-preparation">Euclid preparation page</a> covers that contest in detail.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Through a school', p: 'Individuals cannot sign up; CEMC contests are written through a school. A Montreal student whose school or CEGEP stays out can, on CEMC&rsquo;s advice, ask another school nearby to take them.' },
          { h3: 'Free practice', p: 'Ten years of CEMC past contests are free online without registration. Statistics, counting and algebra questions in them suit Secondary IV and V students well.' },
          { h3: 'Original problems', p: 'Practice in our lessons uses problems our teachers write, marked as ours. CEMC papers and solutions are not copied, and CEMC has no link with us.' }
        ] }
      ]
    },
    {
      id: 'price', tint: '', eyebrow: 'Math tutor price in Montreal',
      h2: 'Math tutor prices in Montreal: what to compare in English and French offers alike',
      intro: 'Our fees are in the fees section below, in your local currency, so this text has no figures. Here is how to compare any tutoring offer a Montreal family receives.',
      body: [
        { kind: 'table', caption: 'Five checks for any Montreal tutoring offer, with our own answers; other tutors&rsquo; prices are not listed here', head: ['Question', 'Our answer', 'Why it matters'], rows: [
          ['How many lessons a month?', 'Eight live classes', 'Gives the real cost per lesson'],
          ['In which language?', 'English, with French math terms when useful', 'A student studying in French may need both vocabularies'],
          ['Which option is taught?', 'CST, TS or Science, as the student takes it', 'The three options test different depths of algebra'],
          ['Is there travel?', 'No; lessons at home', 'Crossing the island takes time'],
          ['Is there a trial?', 'Yes, a free live lesson', 'Teaching quality is visible before any payment']
        ] },
        { kind: 'p', text: 'For most Montreal students a group class of fifteen to twenty at one level keeps progress steady through the year. One to one is worth it for particular stretches: the run-up to a ministerial exam sitting, a change of option between Secondary IV and V, or a student switching between French and English vocabulary who needs time to connect the two.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From elementary school to Secondary V and CEGEP',
    intro: 'The stages are guides only. The free lesson places each student by what they can already explain, in English or in French.',
    cols: [
      { band: 'Elementary, early', h3: 'Number sense', p: 'Counting, place value and operations, with the child explaining each step out loud.', courses: ['early-math-foundations', 'mental-maths-mastery-kids'] },
      { band: 'Elementary, later', h3: 'Fractions and measurement', p: 'Fractions, decimals, measurement and early geometry, the base for Secondary I.', courses: ['elementary-mathematics-complete-masterclass', 'mental-maths-mastery-kids'] },
      { band: 'Secondary I to III', h3: 'Algebra and proportion', p: 'Integers, ratio, first equations, functions and geometry before the Cycle Two options.', courses: ['comprehensive-middle-school-mathematics-mastery', 'maths-through-coding'] },
      { band: 'Secondary IV and V', h3: 'CST, TS or Science', p: 'The chosen option, with statistics, functions, systems and trigonometry, plus contest problems for keen students.', courses: ['complete-high-school-mathematics-mastery', 'waterloo-math-contests-gauss-to-euclid-course'] }
    ]
  },

  ai: {
    eyebrow: 'Math and AI',
    h2: 'Why a Montreal student should judge the correlation, not the AI',
    intro: 'An AI tool can compute r instantly. It cannot decide what r means for these libraries.',
    p1: 'Give an AI tool the library workbook and ask whether more visits cause more loans, and it may answer yes, citing r = 0.825. It will rarely mention floor area, the Pierrefonds figure or the difference between interpolation and extrapolation. Those are exactly the judgments the Québec program asks of a Secondary IV student.',
    p2: 'In our lessons a student guesses whether r will be positive or negative before calculating it, and afterwards writes what the value means. AI tools appear only for students old enough under our policy, as a check on work already done. Anything submitted to a school is written by the student alone.',
    closer: 'The program asks students to exercise critical judgment about cause and dependency; no tool can exercise it for them.',
    blogAnchor: 'why judgment matters more than ever with AI'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How live online math works for Montreal students',
    intro: 'From Verdun to Ahuntsic, and across the bridges to Laval and Longueuil, students join from home.',
    cells: [
      { h3: 'Times', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Eastern time, twice changing', p: 'Montreal is on UTC-4 until clocks go back on 1 November 2026, then UTC-5 until 14 March 2027. Our teachers keep India time, which does not change, and each invitation states the Montreal time.' },
      { h3: 'English, with French terms', p: 'Lessons are in English. For students who study in French, teachers write the French term beside the English one, so droite de régression and regression line become the same idea.' },
      { h3: 'Taught to the option', p: 'Secondary IV and V lessons follow the student&rsquo;s option, because CST, TS and Science ask for different algebra.' },
      { h3: 'Montreal numbers', p: 'Mobiles on 514, 438 or 263, and on 450, 579 or 354 off the island, work in the form. Enter ten digits; the +1 is set.' },
      { h3: 'Start without paying', p: 'The opening lesson is a real lesson at no charge. Afterwards we recommend a course, a level and a lesson time, and we never ask for a card.' }
    ],
    spec: { title: 'No Montreal centre', p: 'Modern Age Coders has no tutoring centre in Montreal and does not claim one. Lessons are live online in English, taught from India; a student needs a computer, a microphone and a steady connection.' }
  },

  fees: {
    h2: 'Math tutoring fees for Montreal families',
    intro: 'Free to start; after that, a group month or a private month, priced in your currency.',
    first: 'One full live lesson in English at no cost, ending with a course and level suggestion.',
    group: 'The monthly fee for eight live classes with fifteen to twenty students at one level.',
    private: 'The monthly fee for eight one-to-one lessons with your own teacher.',
    closer: 'Fees in Montreal match fees everywhere else in Canada. We charge nothing until after the free lesson and an agreed plan; the pricing page explains holidays and missed classes.'
  },

  reviewsH2: 'Families and students reviewing us on Google',

  book: {
    h2: 'Book a free math lesson in English in Montreal',
    intro: 'Tell us the level and, from Secondary IV, the option. A young child might begin with a counting game; a Secondary IV student might begin with the library workbook and a scatter plot.',
    success: 'Thank you. The team will be in touch soon about a math lesson for Montreal.'
  },

  faq: {
    h2: 'Montreal math tutoring questions',
    intro: 'Answers to questions from Montreal parents and teenagers.',
    items: [
      { q: 'Is there an English-speaking math tutor for Montreal students?', a: 'Yes. Every lesson is live, online and in English. We have no office in Montreal; the teacher works with a single student or with a level-matched group of fifteen to twenty.' },
      { q: 'How much is math tutoring in Montreal with you?', a: 'Prices are listed lower on this page in your currency: the first lesson is free, then there is one monthly price for group classes and another for private lessons. No bill arrives before the free lesson.' },
      { q: 'My child studies math in French. Can lessons in English help?', a: 'Often, yes. Teachers write the French terms beside the English ones, so the ideas connect. If a child would do better with a French-speaking tutor, we say so honestly.' },
      { q: 'Which option should my teen choose: CST, TS or Science?', a: 'The program says all three allow entry to a pre-university CEGEP program, but they differ in how much algebra they require. Our CST, TS or Science page compares them; the school counsellor knows the local rules.' },
      { q: 'When is the Secondary IV math ministerial exam?', a: 'Québec.ca lists Mathematics, Sec. 4 on 21 January 2027, on 11 June 2027 for TS and Science, on 18 June 2027 for CST, and on 3 August 2027 for all three.' },
      { q: 'How much does the ministerial exam count?', a: 'Québec.ca says the Secondary IV and V ministerial exams count for 50% of the final mark for the competency evaluated; the math papers are labelled Math. Reasoning.' },
      { q: 'Do your lessons give Quebec credits?', a: 'No. We do not grant Quebec credits. Marks, credits and exam results come through the school and the Ministère.' },
      { q: 'What time are lessons for Montreal students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are given in Eastern time, including after the 1 November 2026 change.' },
      { q: 'Can a CEGEP student write a math contest?', a: 'Yes. CEMC lists CÉGEP students as eligible for the Euclid on 6 April 2027 and for the CSMC. Entry is through a school or CEGEP.' },
      { q: 'Do you teach students in Laval and Longueuil?', a: 'Yes. Whether a student lives on the island or across the river, the lessons are identical and run on Eastern time.' }
    ]
  },

  next: {
    eyebrow: 'More for Montreal and Canada',
    h2: 'Other pages for Montreal math students',
    html: 'For the country as a whole, see <a class="cg-inline-link" href="/online-math-tutor-canada">our online math tutor page for Canada</a>. Quebec students can go deeper with <a class="cg-inline-link" href="/quebec-secondary-4-math-cst-ts-science">Secondary IV options</a> and <a class="cg-inline-link" href="/quebec-secondary-5-math-tutor">Secondary V math</a>, and anyone moving between provinces can check <a class="cg-inline-link" href="/canada-high-school-math-courses-compared">how Quebec math lines up with other provinces</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Montreal math and Canada',
  footerPlaces: [
    { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' },
    { href: '/quebec-secondary-4-math-cst-ts-science', label: 'Secondary IV options' },
    { href: '/quebec-secondary-5-math-tutor', label: 'Secondary V math' },
    { href: '/cegep-computer-science-preparation', label: 'CEGEP preparation' },
    { href: '/coding-classes-in-canada', label: 'Canada hub' }
  ],

  personalityCss: `
.cg-root.cg-maae .cg-hero h1 { font-weight: 690; letter-spacing: -0.015em; line-height: 1.07; }
.cg-root.cg-maae .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-maae .cg-section-head h2 { max-width: 34ch; }
.cg-root.cg-maae .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-maae .cg-table caption { text-align: left; font-weight: 620; }
.cg-root.cg-maae #libraries code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.55; padding: 0.9rem 1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-maae #worked strong { color: var(--cg-accent); }
.cg-root.cg-maae .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.8rem; }
`,

  dossier: {
    curriculumAuthority: 'Quebec, read 22 and 23 October 2026 from saved raw documents: QEP Mathematics Secondary Cycle Two, English PDF (three options; all allow pre-university entry; two-variable distributions, correlation and regression line; causal judgment); Québec.ca ministerial exam schedule 2026-2027 (Mathematics, Sec. 4 on 21 January, 11 June TS and Science, 18 June CST, 3 August 2027) and the 50% rule; Québec.ca CEGEP overview (two-year pre-university program; R score); Charter of the French language s.1; Eastern time 2026-27 offsets and Montreal area codes (facts-geo.md); CEMC eligibility of CÉGEP students for the Euclid and CSMC and 2026-27 dates.',
    localProject: 'Ville de Montreal open data, Bibliotheques de Montreal statistics (Creative Commons Attribution 4.0), consolidated workbook downloaded 23 October 2026 and analysed with our scripts libraries.py and worked.py (python -I): 2018 sheet, 45 libraries in 19 boroughs (4 rows skipped); loans against visits r = 0.825, r2 0.681, line loans = 1.1486 x visits + 45,658, 217,952 loans at 150,000 visits; visits against floor area r = 0.661; residuals Ahuntsic +272,282, Marc-Favreau +250,033, Benny -167,753; Pierrefonds 20,469 visits (2018) against 365,408 (2019). Labelled as ours. Lesson family: correlation, regression lines, residuals, interpolation and extrapolation.',
    requiredMentions: [
      'r = 0.825',
      'loans = 1.1486 &times; visits + 45,658',
      'about 217,952 loans',
      'Benny had the most visits in 2018, 611,789',
      'Ahuntsic lent about 272,282 more',
      'Pierrefonds recorded only 20,469 visits',
      'r = 0.661 in our calculation',
      'The squared x deviations add to 25,000',
      'two mobile services and two sites with missing figures',
      'droite de régression'
    ],
    sources: [
      { claim: 'Ville de Montreal open data: Bibliotheques de Montreal statistics on loans, collections and attendance (CC BY 4.0).', url: 'https://donnees.montreal.ca/dataset/bibliotheques-montreal-statistiques' },
      { claim: 'Creative Commons Attribution 4.0 International deed.', url: 'https://creativecommons.org/licenses/by/4.0/' },
      { claim: 'Québec Education Program, Mathematics, Secondary Cycle Two (English).', url: 'https://cdn-contenu.quebec.ca/cdn-contenu/education/pfeq/secondaire/programmes/PFEQ-mathematique-deuxieme-cycle-secondaire-AN.pdf' },
      { claim: 'Québec.ca: schedule of ministerial examinations 2026-2027.', url: 'https://www.quebec.ca/en/education/study-quebec/ministerial-examinations' },
      { claim: 'Québec.ca: CEGEP overview (pre-university programs, R score).', url: 'https://www.quebec.ca/en/education/cegeps-private-colleges/studying/overview' },
      { claim: 'CEMC: Euclid and CSMC eligibility and 2026/27 dates.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'IANA tzdb northamerica: America/Toronto (Montreal) offsets and the 2026-27 changes.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Montreal population figure: StatCan was not reachable live.',
      'Rules on who may attend English-language schools: not read in a saved source, so not printed.',
      'Why Pierrefonds reports so few visits in 2018: no source explains it.',
      'That more visits cause more loans: refused; the page says correlation is not cause.',
      'Any mapping of Secondary levels to CEMC grade contests: not sourced; families are sent to the school.',
      'That our lessons earn Quebec credits or affect ministerial exam results: refused.',
      'Names of Montreal schools, school service centres\' results or private people: not used.',
      'Any affiliation with the Ville de Montreal, the Ministère de l\'Éducation or CEMC.'
    ]
  }
};
