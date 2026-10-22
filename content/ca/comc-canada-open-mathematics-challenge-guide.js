'use strict';
// COMC guide (ag- contest door; Canada cluster Plan 2, row 51). This page is the CANADIAN OPEN MATHEMATICS CHALLENGE
// (Canadian Mathematical Society, October) only. Searches: comc / canada open mathematics challenge / comc 2026 changes.
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, read raw on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/comc-canada-open-mathematics-
// challenge-guide/ and ca/src/cms/):
//  - cms.math.ca/competitions/comc/comc2026/ (comc.txt): COMC described as Canada's "premier national mathematics
//    competition, open to any student with an interest in and grasp of high school math" (source uses a curly
//    apostrophe; paraphrased); "it is 2.5 hours long"; date "Thursday, October 29th" in Canada and the Americas and
//    Friday, October 30th elsewhere; "Last day for registration is Thursday, October 22nd" (all new orders as PDF);
//    "Approximately 100 – 120 top-ranking students from the COMC are invited to write the Canadian Mathematical
//    Olympiad (CMO) or the Junior CMO (CJMO) in March" (en dash in source; written as "about 100 to 120"); the CMO "is a
//    qualifier for Team Canada at the International Mathematical Olympiad"; the Repêchage (CMOQR) "has been
//    discontinued as of 2026"; independent students "Only for students whose school is not participating"; Open Writing
//    Centres "In Person"; "All students – with rare, authorized exception – will write the COMC on paper" (en dash in
//    source; paraphrased). The EGMO and APMO qualifier lines and all fee cells are deliberately not used.
//  - .../comc2026/changes/ (changes.txt): Competitive Division and Global Division replace the Canadian and
//    International divisions; Competitive requires official status, Canadian citizen or permanent resident or writing at
//    a Canadian school or designated university, and "the student begins writing between 1:00 p.m. and 3:30 p.m. EDT
//    (UTC-4) and finishes no more than 2.5 hours after beginning"; "Only students in the Competitive Division will be
//    eligible for prize money and potential invitations to the CMO."; "Competition questions will no longer appear in
//    the student response booklets."; question PDF to proctors in the Americas "at 12:00 noon EDT on Thursday", "one
//    hour before the earliest permitted Competitive Division start time"; overseas access at 3:30 p.m. EDT Thursday;
//    an overseas student may write in the Thursday Competitive window by registering as an independent student.
//  - .../comc2026/eligibility/ (eligibility.txt): "The COMC is open to students in all locations, at all grade levels.";
//    official status: "under 19 years of age as of June 30th of this year" and full-time school since September 15th;
//    "No mobile phones, calculators or other electronic devices are permitted."; the writing period must begin and end
//    on the scheduled date; Qualified Proctors hold a teaching certificate and "May not be family-related"; tutoring and
//    enrichment centres may be unofficial unless a vetted proctor supervises.
//  - .../comc2026/faq/students/ and /faq/teachers/: "The competition lasts 150 minutes and consists of 12 questions.";
//    "Four introductory questions, worth 4 points each; Four intermediate questions, worth 6 points each; and Four
//    advanced questions, worth 10 points each."; "Maximum score: 80 points."; first two sections full marks without
//    work, partial marks for correct work, "if you fail to do so and make a small error in your answer, you will not be
//    awarded any points"; "Advanced questions require fully developed solutions"; English and French; marked by
//    university marker teams; "Top scores are reviewed by a senior mathematician"; preliminary scores "generally in
//    mid-December"; appeal deadline "January 8th (tentative)"; final results "typically" "mid-January"; compasses and
//    protractors permitted. The student FAQ still names the old divisions; the Changes page supersedes it.
//  - .../comc2026/getting-ready/: the twelve "Potential topics" list and the free Exam Archive.
//  - .../comc2026/problem-of-the-week/: weekly problems from the first week of September; the three-part description
//    of the COMC (Part A no work required, Part B more knowledge and pencil work, Part C work shown with arguments).
//  - .../comc2026/prizes-and-awards/: quartile certificates (Performance with Distinction, Performance with Honours,
//    Certificate of Participation); "The top six unique scores in any category earn awards"; "the top 100 (all figures
//    are approximate) qualifying students are invited to the Canadian Mathematical Olympiad (CMO)"; about 24 Canadian
//    students in Grade 10 or earlier invited to the Canada Math Camp; results shared with partner universities.
//  - cms.math.ca/competitions/ (competitions.txt in src-pilots/canadian-math-olympiad-cmo-path): "Registration
//    typically opens at the start of September."; COMC eligible "Grade 12 or under", recommended "Grades 8 and up".
//  - cms.math.ca/competitions/repechage/: "Starting in 2027, we will instead be increasing the number of people invited
//    directly from the COMC to the Canadian Mathematical Olympiads (CMO/CJMO)."
//  - facts-geo.md section 3: offsets on Thursday, October 29, 2026 (summer offsets still in force; clocks change
//    1 November 2026).
// Our own material, labelled on the page: the province-by-province conversion of the Competitive window, the six
// practice problems and solutions (answers checked in Python on 22 October 2026), the model Part C solution, the
// "same slip, two sheets" comparison, the 150-minute plan, and the one-week and 2027 plans. The points arithmetic
// 4 x 4 + 4 x 6 + 4 x 10 = 80 is ours and matches CMS's stated maximum of 80.
// Lesson family: working shown as insurance, exact arithmetic without a calculator.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const PARTC = `Part C style question (ours). Determine all pairs of positive
integers (m, n) with m^2 - n^2 = 60.

Solution.
Factor: m^2 - n^2 = (m - n)(m + n) = 60.
Since m and n are positive, m + n > 0, so m - n > 0 as well,
and m - n < m + n.

The factors m - n and m + n differ by 2n, which is even,
so they are both even or both odd. Their product 60 is even,
so they cannot both be odd. Hence both are even.

Factor pairs of 60 into two even numbers, smaller first:
    2 x 30   and   6 x 10.
(10 x 6 and 30 x 2 repeat these; 4 x 15 and 12 x 5 have an odd
factor.)

m - n = 2,  m + n = 30  gives  m = 16, n = 14.
m - n = 6,  m + n = 10  gives  m = 8,  n = 2.

Check: 256 - 196 = 60 and 64 - 4 = 60.

Therefore the pairs are (m, n) = (16, 14) and (8, 2).`;

const PROB = `Part C style question (ours). Three different numbers are chosen
at random from 1, 2, 3, ..., 10. Determine the probability that
their sum is divisible by 3.

Sort the ten numbers by remainder on division by 3:
  remainder 0: 3, 6, 9          (3 numbers)
  remainder 1: 1, 4, 7, 10      (4 numbers)
  remainder 2: 2, 5, 8          (3 numbers)

A sum of three remainders is divisible by 3 exactly when the
three remainders are all equal, or are 0, 1 and 2 once each.
  all remainder 0:   C(3,3) = 1
  all remainder 1:   C(4,3) = 4
  all remainder 2:   C(3,3) = 1
  one of each:       3 x 4 x 3 = 36
Favourable choices: 1 + 4 + 1 + 36 = 42.
All choices: C(10,3) = 120.

Therefore the probability is 42/120 = 7/20.`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'CONTEST', blurb: 'The Canadian Mathematical Society\'s open contest on 29 October 2026: twelve questions, no calculators, the new Competitive and Global divisions, the end of the Repêchage and how the COMC leads to the CMO.' },
  slug: 'comc-canada-open-mathematics-challenge-guide',
  code: 'ccom',
  accent: '#424D9E',
  accentRationale: 'COMC guide, Canada: a muted ink blue #424D9E, allocated for row 51; measured 8.8 RGB units (Euclidean) from the nearest site accent (#45459C) and 18.7 from the nearest allocated Canada accent (#483C99); contrast 7.11 on the paper #FBF8F2, 6.68 and 6.12 on the darker tints',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'COMC guide',
  title: 'COMC 2026: Canadian Open Mathematics Challenge Guide',
  description: 'The COMC on 29 October 2026: 12 questions in 2.5 hours out of 80, no calculators, the new Competitive and Global divisions, the route to the CMO and practice.',
  ogDescription: 'The Canadian Mathematical Society lists the 2026 COMC for Thursday, October 29 in Canada and the Americas. The 2026 changes, the Competitive Division writing window by province, how the 80 points work and six original problems.',
  twitterDescription: 'COMC 2026: the changes, the Competitive window by province and how the three sections are marked.',
  pageName: 'COMC Guide: Canadian Open Mathematics Challenge',
  webPageDescription: 'A guide for students in Canada and their parents to the Canadian Open Mathematics Challenge, built from the Canadian Mathematical Society\'s 2026 COMC pages, its Changes, Eligibility, FAQ, Getting Ready and Prizes pages, with the Competitive window converted by province and six original practice problems.',
  courseDescription: 'Live online olympiad and competition math for students in Canada preparing for the COMC and the Canadian Mathematical Olympiad path, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }, { name: 'Olympiad classes', href: '/maths-olympiad-classes-online' }],
  crumbLabel: 'COMC',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#facts', label: 'COMC 2026' },
    { href: '#changes', label: '2026 changes' },
    { href: '#window', label: 'Writing window' },
    { href: '#points', label: 'The 80 points' },
    { href: '#practice', label: 'Practice' }
  ],
  eyebrow: 'Canada &middot; Canadian Mathematical Society &middot; COMC',
  h1: 'COMC guide: the Canadian Open Mathematics Challenge, 2026',
  lede: 'The Canadian Open Mathematics Challenge is the Canadian Mathematical Society\'s national open contest: one paper of twelve questions, two and a half hours, no calculators, written in the fall by students of any grade. It is also the first gate on the road the CMS describes from the COMC to the Canadian Mathematical Olympiad and, for a very few, to Math Team Canada. In 2026 the CMS changed how the COMC is run: two new divisions, a fixed writing window for the one that leads to the olympiad, questions delivered separately from the answer booklets, and no more Repêchage. This guide is built from the CMS\'s own 2026 COMC pages. It sets out the dates, every change, the Competitive window converted for each province, how the 80 points are marked, six practice problems of ours and what to do now that 2026 registration has closed.',
  secondaryCta: { href: '#changes', label: 'Read the 2026 changes' },
  wa: 'Hello Modern Age Coders, my child is interested in the COMC and the path to the Canadian Mathematical Olympiad. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students &middot; every practice problem here written by our teachers',
  spec: [
    ['Organiser', 'Canadian Mathematical Society (CMS)'],
    ['2026 date', 'Thursday, October 29, 2026 (Canada and the Americas)'],
    ['Who', 'Any grade; CMS recommends Grades 8 and up'],
    ['Paper', '12 questions, 150 minutes, out of 80'],
    ['Tools', 'Pencil and paper; no calculators'],
    ['Leads to', 'Invitations to the CMO and CJMO'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['First step', 'A free first class']
  ],
  capsuleQ: 'The essentials',
  capsule: 'The COMC (Canadian Open Mathematics Challenge) is the Canadian Mathematical Society\'s open national math contest: 12 questions in 150 minutes, scored out of 80, on paper and without calculators, written on Thursday, October 29, 2026 in Canada. Top Competitive Division writers can be invited to the Canadian Mathematical Olympiad. Modern Age Coders prepares students live online, in a batch or one to one, in its competition mathematics course.',

  picks: {
    eyebrow: 'Where COMC preparation lives',
    h2: 'Three courses behind our COMC classes',
    lede: 'The competition course carries the olympiad-style problem solving the COMC rewards. The Waterloo contests course builds the written-solution habit on CEMC papers. The high school course secures the curriculum the CMS says most questions are built on.',
    items: [
      { course: 'olympiad-competition-mathematics-mastery', code: 'CCOM / 01', title: 'Competition mathematics, AMC to olympiad', note: 'Number theory, counting, algebra and geometry at COMC Part C level, with proofs written and marked every week.' },
      { course: 'waterloo-math-contests-gauss-to-euclid-course', code: 'CCOM / 02', title: 'Waterloo Math Contests: Gauss to Euclid', note: 'The CEMC papers many COMC writers also sit, with weekly full solutions.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'CCOM / 03', title: 'High school math, Grades 9 to 12', note: 'Trigonometry, logarithms, polynomials and sequences without a calculator in sight.' }
    ]
  },

  sections: [
    {
      id: 'facts', tint: 'tint', eyebrow: 'COMC 2026',
      h2: 'The 2026 COMC at a glance, from the CMS',
      lede: 'Every row below comes from the Canadian Mathematical Society\'s 2026 COMC pages, read on 22 October 2026, which was also the last day the CMS took registrations for this year.',
      body: [
        { kind: 'table', caption: 'The Canadian Open Mathematics Challenge, 2026, as published by the CMS (read 22 October 2026)', head: ['Question', 'What the CMS says'], rows: [
          ['When', 'Thursday, October 29, 2026 in Canada and the Americas; Friday, October 30, 2026 elsewhere.'],
          ['Registration', 'The CMS set Thursday, October 22, 2026 as the last day to register, with all new orders delivered as PDF files. 2026 registration has now closed.'],
          ['Who may write', '"The COMC is open to students in all locations, at all grade levels." Its competitions table lists it for Grade 12 or under and recommends it for Grades 8 and up.'],
          ['Official participants', 'Under 19 as of June 30 of the year, attending school full-time since September 15, and supervised in conditions the CMS approves.'],
          ['Length', '"The competition lasts 150 minutes and consists of 12 questions."'],
          ['Format', 'On paper, in the presence of a qualified proctor, normally a teacher at the student\'s school.'],
          ['Tools', '"No mobile phones, calculators or other electronic devices are permitted." Compasses and protractors are allowed.'],
          ['Languages', 'English and French.'],
          ['Marking', 'By teams of trained markers at partner universities; top scores are reviewed by a senior mathematician.'],
          ['Results', 'Preliminary scores generally in mid-December; final results typically in mid-January.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'If the school is not taking part',
          left: [
            'Registration is normally done by teachers through the CMS portal. For students whose school is not participating, the CMS runs a limited number of places at Open Writing Centres at partner universities, mostly in person.',
            'The CMS also suggests contacting other schools in the area to ask whether they will accept a student from elsewhere for the day.'
          ],
          rightH3: 'Why a tutoring company cannot proctor',
          right: [
            'The CMS requires a Qualified Proctor for official results: someone with a current provincial or government teaching certificate who is not related to any of the students.',
            'Its eligibility page says tutoring and enrichment centres may be run as unofficial unless they arrange such a proctor. We are a teaching company, so our students write at their schools or at an Open Writing Centre, never with us.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://cms.math.ca/competitions/comc/comc2026/" rel="noopener" target="_blank">CMS, COMC 2026</a>, its <a class="ag-inline-link" href="https://cms.math.ca/competitions/comc/comc2026/eligibility/" rel="noopener" target="_blank">Eligibility</a> page and its FAQs, read 22 October 2026. Modern Age Coders has no connection with the Canadian Mathematical Society.' }
      ]
    },
    {
      id: 'changes', tint: 'deep', eyebrow: 'What changed in 2026',
      h2: 'The COMC 2026 changes, one by one',
      lede: 'The CMS published a Changes page addressed to teachers, parents and students. These are the changes it lists, in its own terms, with what each means for a student in Canada.',
      body: [
        { kind: 'table', caption: 'Changes to the COMC from 2026, from the CMS Changes page and COMC home page (read 22 October 2026)', head: ['Change', 'What the CMS says', 'What it means for a student in Canada'], rows: [
          ['New division names', 'The Canadian and International divisions are replaced by a Competitive Division and a Global Division', 'The word "Canadian" no longer decides the division; the conditions below do'],
          ['Who is Competitive', 'An official contestant who is a Canadian citizen or permanent resident, or writes at a Canadian school or designated university, and who starts within the fixed window', 'Most students at Canadian schools qualify, provided the school starts the paper in the window'],
          ['The window', '"the student begins writing between 1:00 p.m. and 3:30 p.m. EDT (UTC-4) and finishes no more than 2.5 hours after beginning"', 'A morning sitting in Ontario would fall outside it; the table below converts the window by province'],
          ['What only Competitive writers get', '"Only students in the Competitive Division will be eligible for prize money and potential invitations to the CMO."', 'A student who hopes to reach the CMO must be in the Competitive Division'],
          ['Question booklets', '"Competition questions will no longer appear in the student response booklets."', 'Students receive a separate question sheet and write in a response booklet with QR codes and answer spaces'],
          ['Question release', 'In the Americas, proctors get the question PDF at 12:00 noon EDT on the Thursday, one hour before the earliest Competitive start', 'Schools print the questions on the day; nothing can be seen in advance'],
          ['Repêchage', 'The Repêchage (CMOQR) "has been discontinued as of 2026"', 'There is no second chance at a CMO invitation after the COMC; the COMC itself is the route']
        ] },
        { kind: 'p', mt: true, html: 'The CMS gives its reasons on a separate Repêchage page: from 2027 it will send more olympiad invitations straight from COMC results instead, and this lets it move the olympiads earlier, away from March spring breaks. In plain terms, the COMC paper in October now carries the whole weight that used to be shared with a take-home second round.' },
        { kind: 'p', mt: true, html: 'One inconsistency worth knowing about: the CMS student FAQ, read on the same day, still refers to the old "Canadian" and "International" divisions. The Changes page and the Prizes and Awards page use the new Competitive and Global names, and we follow those.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://cms.math.ca/competitions/comc/comc2026/changes/" rel="noopener" target="_blank">CMS, Changes, COMC 2026</a> and <a class="ag-inline-link" href="https://cms.math.ca/competitions/repechage/" rel="noopener" target="_blank">CMS, Repêchage</a>, read 22 October 2026.' }
      ]
    },
    {
      id: 'window', tint: 'tint', eyebrow: 'The Competitive window',
      h2: 'The 1:00 to 3:30 p.m. EDT start window, province by province',
      lede: 'The CMS states the window in Eastern Daylight Time, UTC-4. On Thursday, October 29, 2026 the clocks have not yet changed (they move back on 1 November 2026), so Ontario and Quebec are on exactly that offset. The conversion below is ours, using the 2026 tz database offsets.',
      body: [
        { kind: 'table', caption: 'Competitive Division start window on Thursday, October 29, 2026, in local time (our conversion of the CMS window)', head: ['Province or zone', 'Offset that day', 'Earliest start', 'Latest start', 'Latest finish'], rows: [
          ['Newfoundland', 'UTC-2:30', '2:30 p.m.', '5:00 p.m.', '7:30 p.m.'],
          ['Nova Scotia, New Brunswick, Prince Edward Island', 'UTC-3', '2:00 p.m.', '4:30 p.m.', '7:00 p.m.'],
          ['Ontario and Quebec', 'UTC-4', '1:00 p.m.', '3:30 p.m.', '6:00 p.m.'],
          ['Manitoba', 'UTC-5', '12:00 noon', '2:30 p.m.', '5:00 p.m.'],
          ['Saskatchewan and Alberta', 'UTC-6', '11:00 a.m.', '1:30 p.m.', '4:00 p.m.'],
          ['British Columbia (most) and Yukon', 'UTC-7', '10:00 a.m.', '12:30 p.m.', '3:00 p.m.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What this means on the day',
          left: [
            'In the east the paper is an afternoon sitting that may run past the end of the school day; in British Columbia it can begin mid-morning. Either way, the start time is the school\'s decision, and families should ask what it will be.',
            'A 150-minute paper started at the last permitted moment in Ontario ends at 6:00 p.m. Students should eat beforehand and plan the trip home.'
          ],
          rightH3: 'Writers outside the window',
          right: [
            'A student who starts outside the window is placed in the Global Division, which has its own awards but, the CMS says, no prize money and no CMO invitation.',
            'The CMS adds that an overseas student who qualifies may write in the Thursday window by registering as an independent student directly with the CMS.'
          ] }
      ]
    },
    {
      id: 'points', tint: 'deep', eyebrow: 'The 80 points',
      h2: 'Three sections, three ways of earning points',
      lede: 'The CMS FAQ sets out the structure in a few lines. The COMC Problem of the Week page describes the same three parts in words. Together they say exactly how a student should write each section.',
      body: [
        { kind: 'table', caption: 'COMC structure and marking, from the CMS FAQ and Problem of the Week page (read 22 October 2026)', head: ['Section', 'Questions and points', 'How it is marked', 'The CMS description'], rows: [
          ['Introductory (Part A)', '"Four introductory questions, worth 4 points each"', 'Full marks for a correct answer, with or without work', 'Solutions "do not require work be shown and may be possible to do in your head"'],
          ['Intermediate (Part B)', '"Four intermediate questions, worth 6 points each"', 'As Part A; partial marks possible for correct work when the answer is wrong', 'Problems that "draw on more knowledge" and "need a pencil and paper"'],
          ['Advanced (Part C)', '"Four advanced questions, worth 10 points each"', '"Advanced questions require fully developed solutions"', 'Problems that "require that work be shown and involve arguments to support the answer"'],
          ['Total', '"Maximum score: 80 points."', 'Same 12 questions for every grade', 'Same paper from Grade 8 to CÉGEP']
        ] },
        { kind: 'p', mt: true, html: 'One line in the FAQ deserves to be read twice: "You are not obliged to show your work, but if you fail to do so and make a small error in your answer, you will not be awarded any points." Our arithmetic is that Part A and Part B together are worth 16 + 24 = 40 points, half the paper, and every one of those points is exposed to that rule. With no calculator allowed, small arithmetic slips are common. Working is not decoration on the COMC; it is insurance, and it costs a few seconds per question.' },
        { kind: 'table', mt: true, caption: 'Same slip, two answer sheets: an intermediate question of ours worth 6 points (illustration ours; how many partial points are given is the markers\' decision)', head: ['', 'Sheet 1: answer only', 'Sheet 2: answer with working'], rows: [
          ['Question (ours)', 'In triangle ABC, AB = 7, AC = 8 and angle A is 60 degrees. Find BC.', 'Same question'],
          ['What is written', '"BC = &radic;43"', 'BC<sup>2</sup> = 49 + 64 - 2(7)(8)cos 60 = 113 - 70 = 43, so BC = &radic;43'],
          ['The slip', '2(7)(8)(1/2) is 56, not 70', 'The same slip, visible on the page'],
          ['Correct answer', '&radic;57', '&radic;57'],
          ['Possible result', 'No points: a wrong answer with no work', 'Eligible for partial marks: the cosine law is set up correctly']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://cms.math.ca/competitions/comc/comc2026/faq/students/" rel="noopener" target="_blank">CMS, FAQs for Students</a> and <a class="ag-inline-link" href="https://cms.math.ca/competitions/comc/comc2026/problem-of-the-week/" rel="noopener" target="_blank">CMS, Problem of the Week</a>, read 22 October 2026.' }
      ]
    },
    {
      id: 'topics', tint: 'tint', eyebrow: 'What to study',
      h2: 'The twelve topics the CMS lists for the COMC',
      lede: 'The CMS Getting Ready page says most COMC problems are based on the math taught in secondary schools and CÉGEPs, and that some need understanding beyond the curriculum. It names twelve potential topics. The names are the CMS\'s; the notes are ours.',
      body: [
        { kind: 'table', caption: 'Potential COMC topics, as listed by the CMS (read 22 October 2026), with our notes for calculator-free work', head: ['CMS topic', 'Our note'], rows: [
          ['Probability', 'Count favourable and total outcomes as exact fractions'],
          ['Euclidean and analytic geometry', 'Similar triangles, circle facts, distances and slopes'],
          ['Trigonometry, including functions, graphs and identities', 'Exact values at 30, 45 and 60 degrees, learned cold'],
          ['Exponential and logarithmic functions', 'Log laws and rewriting with a common base'],
          ['Functional notation', 'Substituting cleverly chosen values'],
          ['Systems of equations', 'Adding or subtracting whole equations before solving'],
          ['Polynomials, including relationships involving the roots of quadratic and cubic equations', 'Sums and products of roots without finding the roots'],
          ['The remainder theorem', 'Evaluating instead of dividing'],
          ['Sequences and series', 'Arithmetic and geometric sums in closed form'],
          ['Simple counting problems', 'Choosing, arranging and the complement'],
          ['The binomial theorem', 'Coefficients from combinations, as in our problem 2 below'],
          ['Elementary number theory, including tests for divisibility, number of divisors, and simple Diophantine equations', 'Factoring an equation into a product of integers']
        ] },
        { kind: 'p', mt: true, html: 'Every topic on that list has to be done by hand on the day. In our classes, COMC practice is always calculator-free from the first week, and students keep a short sheet of the exact values and identities they must know without looking. A student who can only find a cosine on a calculator has not yet learned it for the COMC.' }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Six practice problems',
      h2: 'COMC-style problems of ours, from Part A to Part C',
      lede: 'These six are our practice problems, not CMS problems. We wrote them for our students; none is taken from a past COMC. Two are at introductory level, two intermediate and two advanced, and every answer was checked in Python. Do them without a calculator.',
      body: [
        { kind: 'p', html: '<b>Problem 1.</b> <i>Our practice problem, not a CMS problem. Introductory level.</i> What is the value of 1 - 2 + 3 - 4 + 5 - 6 + ... + 99 - 100?' },
        { kind: 'p', html: '<b>Solution.</b> Group the terms in pairs: (1 - 2) + (3 - 4) + ... + (99 - 100). There are 50 pairs, each equal to -1, so the sum is -50.' },
        { kind: 'p', mt: true, html: '<b>Problem 2.</b> <i>Our practice problem, not a CMS problem. Introductory level.</i> What is the coefficient of x<sup>3</sup> when (2x + 1)<sup>5</sup> is expanded?' },
        { kind: 'p', html: '<b>Solution.</b> By the binomial theorem the x<sup>3</sup> term is C(5, 3)(2x)<sup>3</sup>(1)<sup>2</sup> = 10 x 8x<sup>3</sup> = 80x<sup>3</sup>. The coefficient is 80. Forgetting to cube the 2 gives 10, the most common wrong answer.' },
        { kind: 'p', mt: true, html: '<b>Problem 3.</b> <i>Our practice problem, not a CMS problem. Intermediate level.</i> How many positive integers less than 100 have exactly three positive divisors?' },
        { kind: 'p', html: '<b>Solution.</b> If n = p<sub>1</sub><sup>a</sup> p<sub>2</sub><sup>b</sup>..., the number of divisors is (a + 1)(b + 1)... For this to equal 3, which is prime, n must be a single prime squared, n = p<sup>2</sup>. The primes with p<sup>2</sup> less than 100 are 2, 3, 5 and 7, giving 4, 9, 25 and 49. The answer is 4.' },
        { kind: 'p', mt: true, html: '<b>Problem 4.</b> <i>Our practice problem, not a CMS problem. Intermediate level.</i> In triangle ABC, AB = 7, AC = 8 and angle BAC = 60 degrees. Determine the exact length of BC.' },
        { kind: 'p', html: '<b>Solution.</b> By the cosine law, BC<sup>2</sup> = 7<sup>2</sup> + 8<sup>2</sup> - 2(7)(8)cos 60 = 49 + 64 - 56 = 57, so BC = &radic;57. This is the question from the two answer sheets above: the line 2(7)(8)(1/2) = 56 is the one to check.' },
        { kind: 'p', mt: true, html: '<b>Problem 5.</b> <i>Our practice problem, not a CMS problem. Advanced level, full solution.</i> Determine all pairs of positive integers (m, n) with m<sup>2</sup> - n<sup>2</sup> = 60.' },
        { kind: 'code', label: 'Problem 5 &middot; our fully developed solution', lang: 'text', code: PARTC, note: 'The parity step is what makes this a solution rather than a search. Without it, a student must test 4 x 15 and 12 x 5 and show they fail; with it, those pairs are ruled out in one sentence. This is the "simple Diophantine equations" topic from the CMS list.' },
        { kind: 'p', mt: true, html: '<b>Problem 6.</b> <i>Our practice problem, not a CMS problem. Advanced level, full solution.</i> Three different numbers are chosen at random from 1, 2, 3, ..., 10. Determine the probability that their sum is divisible by 3.' },
        { kind: 'code', label: 'Problem 6 &middot; our fully developed solution', lang: 'text', code: PROB, note: 'Sorting by remainder turns 120 cases into four small counts. The sentence explaining when three remainders add to a multiple of 3 is the argument the markers need to see; the counts alone are not a fully developed solution.' },
        { kind: 'two', mt: true,
          leftH3: 'Timing the set',
          left: [
            'Problems 1 and 2: three minutes each. Problems 3 and 4: six minutes each. Problems 5 and 6: fifteen minutes each, written in full. That is roughly the pace a full COMC paper asks for.',
            'Mark problems 3 and 4 as if no working had been shown, then again with your working. The difference is the insurance.'
          ],
          rightH3: 'What the six share',
          right: [
            'Each one becomes short once the right structure is chosen: pairs, a binomial term, a divisor formula, the cosine law, a factorization, remainders.',
            'Choosing the structure is the skill the COMC tests. Our classes spend more time on that choice than on any formula.'
          ] }
      ]
    },
    {
      id: 'clock', tint: 'tint', eyebrow: '150 minutes',
      h2: 'Spending two and a half hours on twelve questions',
      lede: 'There is no official advice on pacing. This budget is ours, refined by timing our own students on past COMC papers from the CMS archive.',
      body: [
        { kind: 'table', caption: 'Our 150-minute budget for the COMC (ours, not the CMS\'s)', head: ['Minutes', 'Section', 'Aim'], rows: [
          ['0 to 20', 'Part A, four questions', 'All four, each with a line of working beside the answer'],
          ['20 to 60', 'Part B, four questions', 'At least three, with working that a marker can follow'],
          ['60 to 135', 'Part C, four questions', 'Read all four first; write two in full and start a third'],
          ['135 to 150', 'Everything', 'Recheck every Part A and B answer for a slip; finish each Part C solution with a sentence']
        ] },
        { kind: 'p', mt: true, html: 'The Part C budget is deliberately large. Part C is worth 40 of the 80 points, and a fully developed solution takes time to write well. A student who reaches Part C with ninety minutes left can afford to think before writing, which is how the strongest Part C answers are produced.' }
      ]
    },
    {
      id: 'after', tint: 'deep', eyebrow: 'After the paper',
      h2: 'What the COMC leads to, in the CMS\'s own words',
      lede: 'Families ask about this more than anything else. The rows below are only what the CMS publishes, attributed page by page, because its pages give slightly different figures.',
      body: [
        { kind: 'table', caption: 'What follows the COMC, as stated on the CMS pages named (read 22 October 2026)', head: ['Outcome', 'What the CMS says', 'Where'], rows: [
          ['CMO and CJMO invitations', 'About 100 to 120 top-ranking students from the COMC are invited to write the CMO or the Junior CMO', 'COMC 2026 home page'],
          ['CMO invitations', '"the top 100 (all figures are approximate) qualifying students are invited to the Canadian Mathematical Olympiad (CMO)"', 'Prizes and Awards page'],
          ['From 2027', 'A larger number of olympiad invitations made straight from COMC results', 'Repêchage page'],
          ['Awards', '"The top six unique scores in any category earn awards"', 'Prizes and Awards page'],
          ['Certificates', 'Quartile certificates: Performance with Distinction, Performance with Honours, Certificate of Participation', 'Prizes and Awards page'],
          ['Summer camp', 'About 24 Canadian students in Grade 10 or earlier with strong COMC results invited to the Canada Math Camp', 'Prizes and Awards page'],
          ['Universities', 'Results shared with partner universities to help them consider academic scholarships', 'Prizes and Awards page']
        ] },
        { kind: 'p', mt: true, html: 'Our reading, and no more than that: the figures differ slightly between pages, and the CMS itself calls them approximate, so no family should plan around an exact cutoff. What is consistent across every page is that invitations go to Competitive Division writers and are the CMS\'s alone to make. We prepare students for the paper. We cannot influence an invitation, and we never suggest that preparation guarantees one. The full road beyond the COMC, from the CMO to the International Mathematical Olympiad, is set out on the CMS\'s CMO and IMO pages.' }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'Now, and next year',
      h2: 'One week to 29 October 2026, and a plan for the 2027 COMC',
      lede: 'Registration for 2026 closed on 22 October 2026, so there are two kinds of reader: students already registered by their school, and everyone aiming at next year. Our plans for each:',
      body: [
        { kind: 'ol', items: [
          '<b>Registered for 2026: days 1 and 2.</b> One past COMC paper from the CMS archive, timed at 150 minutes, calculator-free, marked strictly, with the no-work rule applied to Parts A and B.',
          '<b>Registered for 2026: days 3 to 5.</b> Rewrite every Part A and B answer from that paper with a line of working. Write one Part C solution in full and compare it with the official solution.',
          '<b>Registered for 2026: days 6 and 7.</b> Ask the school its start time and check it against the window table above. Rest the evening before.',
          '<b>Aiming at 2027: from now to June 2027.</b> Calculator-free algebra, geometry, number theory and counting, one fully developed solution a week. CEMC\'s CIMC or CSMC on 18 November 2026 and its April 2027 contests make good written practice along the way.',
          '<b>Aiming at 2027: September 2027.</b> The CMS says registration typically opens at the start of September, and its COMC Problem of the Week usually starts in the first week of September. Ask the school to register early, then move to timed past COMC papers.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Grade 8 or 9', p: 'A first COMC is a rehearsal. Aim at Part A and Part B, and one Part C attempt.' },
          { h3: 'Grade 10 or 11', p: 'Aim at three Part C questions; the CJMO is for Grade 10 or below.' },
          { h3: 'Grade 12 or CÉGEP', p: 'Often the final COMC year; official writers must be under 19 as of June 30.' }
        ] }
      ]
    },
    {
      id: 'resources', tint: 'deep', eyebrow: 'Free CMS material',
      h2: 'Free COMC preparation from the CMS, and how we use it',
      lede: 'The CMS publishes a surprising amount for free. We send students to it rather than reproducing it, and build our own problems beside it.',
      body: [
        { kind: 'table', caption: 'Free CMS resources for the COMC (read 22 October 2026)', head: ['Resource', 'What the CMS offers', 'How we use it'], rows: [
          ['COMC exam archive', 'Past COMC papers, free to download', 'Timed, calculator-free rehearsals; official solutions read after a full attempt'],
          ['<a class="ag-inline-link" href="https://cms.math.ca/competitions/comc/comc2026/problem-of-the-week/" rel="noopener" target="_blank">Problem of the Week</a>', 'A weekly problem from early September, with its solution a week later', 'A Monday warm-up for the whole batch'],
          ['Crux Mathematicorum', 'The CMS problem-solving journal; the CMS says all volumes are free to the public on the Getting Ready page', 'Stretch problems for students aiming at the CMO'],
          ['A Taste of Mathematics (ATOM)', 'Enrichment booklets, most of them free PDFs', 'Topic reading for strong students between contests']
        ] },
        { kind: 'p', mt: true, html: 'Students who also write CEMC contests can find our guides to the <a class="ag-inline-link" href="/euclid-contest-preparation">Euclid</a>, <a class="ag-inline-link" href="/fermat-contest-preparation">Fermat</a> and the whole <a class="ag-inline-link" href="/cemc-waterloo-contests-preparation">CEMC year</a>. The COMC and CEMC papers reward the same written-solution habit, and many of our students sit both.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Placement',
    h2: 'Four stages of a COMC writer',
    lede: 'Our stages, used to place a new student in the first class.',
    table: { caption: 'From answers to arguments, without a calculator (ours)', head: ['Stage', 'What we see'], rows: [
      ['1. Calculator reliant', 'Knows the methods but slips on arithmetic done by hand'],
      ['2. Accurate', 'Clears Part A and most of Part B, with working shown'],
      ['3. Arguing', 'Writes one or two Part C questions as fully developed solutions'],
      ['4. Olympiad-ready', 'Attempts all of Part C and argues partial results clearly']
    ] },
    left: { h3: 'For parents', ps: [
      'Many strong students begin at stage 1 simply because school lets them use a calculator. The move to stage 2 takes a few weeks of daily hand arithmetic, and it pays off on every contest.',
      'Stages 3 and 4 are about proof. They take months, and they are what the CMO, if it ever comes, will ask for.'
    ] },
    right: { h3: 'For students', ps: [
      'Show a line of working on every Part A and Part B answer. It costs seconds and can save points.',
      'Read all four Part C questions before writing any of them.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine courses for a student on the olympiad path',
    lede: 'Every course is taught live online by a teacher who knows the student, in a batch or one to one, from any province.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'Before the first COMC', courses: [
        { code: 'CCOM / BASE / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'For Grade 7 and 8 students starting early.' },
        { code: 'CCOM / BASE / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Hand algebra made fast and accurate.' },
        { code: 'CCOM / BASE / 03', slug: 'jee-foundation-maths-course-class-8-10', title: 'Proof foundations', blurb: 'First written proofs, Grades 8 to 10.' }
      ] },
      { num: 'II', h3: 'Senior school math', sub: 'The curriculum underneath', courses: [
        { code: 'CCOM / SEN / 01', slug: 'ontario-grade-12-university-math-mhf4u-mcv4u-course', title: 'Ontario Grade 12 university math', blurb: 'Advanced Functions and Calculus and Vectors, beside school.' },
        { code: 'CCOM / SEN / 02', slug: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course', title: 'Pre-calculus 12 and Math 30-1', blurb: 'Grade 12 math for the western provinces.' },
        { code: 'CCOM / SEN / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Counting and probability in depth.' }
      ] },
      { num: 'III', h3: 'Beyond school', sub: 'University math and code', courses: [
        { code: 'CCOM / NEXT / 01', slug: 'college-mathematics-complete-masterclass', title: 'University mathematics', blurb: 'Calculus, linear algebra and analysis.' },
        { code: 'CCOM / NEXT / 02', slug: 'ccc-junior-and-senior-preparation-course', title: 'CCC Junior and Senior', blurb: 'Contest programming for the same problem solvers.' },
        { code: 'CCOM / NEXT / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Testing number theory conjectures in Python.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Class times and format',
    h2: 'Live COMC and olympiad classes across Canada',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Evening groups planned in Eastern time and shown in your own zone.' },
      { time: 'Weekends', l: 'Longer morning sessions for full 150-minute papers.' },
      { time: '1-on-1', l: 'A private plan built around school and contest dates.' }
    ],
    cells: [
      { h3: 'No calculators', p: 'Every COMC session is pencil and paper only.' },
      { h3: 'Our own problems', p: 'New COMC-style sets each week, beside the CMS archive.' },
      { h3: 'Working as insurance', p: 'Part A and B answers always shown with a line of working.' },
      { h3: 'Part C marked', p: 'A fully developed solution returned with comments weekly.' },
      { h3: 'Coast to coast', p: 'One class shared by students from Halifax to Victoria.' },
      { h3: 'Your choice of size', p: 'A class of fifteen to twenty, or private lessons.' }
    ]
  },

  projectsH2: 'Code our olympiad students write',
  projectsLede: 'Some of our COMC students also learn to program, often to test a conjecture before proving it. A few projects are below, with more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What parents and students wrote on Google, unchanged.',

  fees: {
    h2: 'Fees',
    lede: 'The CMS charges its registration through the school or the Open Writing Centre. Our monthly fee covers live teaching and nothing else, and it can stop at the end of any month.',
    free: ['A free first class', 'One Part C question written together', 'No card details'],
    group: ['A batch of fifteen to twenty', 'Olympiad-path students together', 'Choose your batch', 'Pay month by month'],
    one: ['Your own teacher', 'Planned to the COMC and beyond', 'Built on your past papers']
  },

  faq: {
    eyebrow: 'Parents and students ask',
    h2: 'COMC: answers to common questions',
    items: [
      { q: 'What is the COMC?', a: 'The Canadian Open Mathematics Challenge is the Canadian Mathematical Society national open math contest. It has 12 questions in 150 minutes, scored out of 80, written on paper without calculators, and it is the main route to an invitation to the Canadian Mathematical Olympiad.' },
      { q: 'When is the COMC in 2026?', a: 'The CMS lists Thursday, October 29, 2026 in Canada and the Americas and Friday, October 30, 2026 elsewhere. The last day to register was Thursday, October 22, 2026.' },
      { q: 'What changed in the COMC in 2026?', a: 'The divisions are now called Competitive and Global. Only Competitive Division writers are eligible for prize money and possible CMO invitations, and they must start between 1:00 p.m. and 3:30 p.m. EDT. Questions now come separately from the response booklets, and the Repechage has been discontinued.' },
      { q: 'Who can write the COMC?', a: 'The CMS says it is open to students in all locations and at all grade levels, and recommends it for Grades 8 and up. Official participants must be under 19 as of June 30 and attending school full-time.' },
      { q: 'Are calculators allowed on the COMC?', a: 'No. The CMS says no mobile phones, calculators or other electronic devices are permitted. Compasses and protractors are allowed, so all arithmetic is done by hand.' },
      { q: 'How is the COMC marked?', a: 'Four introductory questions are worth 4 points, four intermediate questions 6 points and four advanced questions 10 points. The first two sections give full marks for a correct answer, but a small error with no work shown earns nothing. Advanced questions need fully developed solutions.' },
      { q: 'Can my child register without the school?', a: 'Only if the school is not participating. The CMS then offers a limited number of places at Open Writing Centres at partner universities, mostly in person, and suggests asking other local schools too. For 2026, registration has closed.' },
      { q: 'Does the COMC lead to the Canadian Math Olympiad?', a: 'Yes, for top Competitive Division writers. The CMS COMC page says about 100 to 120 top-ranking COMC students are invited to the CMO or the Junior CMO, and its Prizes page gives about 100 for the CMO. Invitations are decided by the CMS only.' },
      { q: 'Can you guarantee a CMO invitation?', a: 'No. We teach the mathematics and the written solutions, and we make no promise of a score, an award or an invitation.' },
      { q: 'When are your COMC classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We plan in Eastern time and confirm each class in your own time zone.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related reading',
    h2: 'Related pages',
    lede: 'Other pages for students in Canada following the contest and olympiad path.',
    items: [
      { href: '/maths-olympiad-classes-online', label: 'Olympiad classes', p: 'How the major math olympiads compare.' },
      { href: '/cemc-waterloo-contests-preparation', label: 'CEMC Waterloo contests', p: 'The University of Waterloo contest year.' },
      { href: '/euclid-contest-preparation', label: 'Euclid Contest', p: 'CEMC\'s final-year written contest, April 2027.' },
      { href: '/fermat-contest-preparation', label: 'Fermat Contest', p: 'CEMC\'s Grade 11 paper in February.' },
      { href: '/math-olympiad-amc-tutoring', label: 'AMC and AIME', p: 'The American contests some Canadian students also write.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada', p: 'Help with school math in any province.' },
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'The start of our Canada pages.' },
      { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation', p: 'The programming contest for the same students.' },
      { href: '/we-teach-you-how-to-think', label: 'How we teach thinking', p: 'Why we teach the argument, not the trick.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'In the first class your child solves two calculator-free questions of ours and writes one Part C solution with a teacher, who marks it on screen against what the CMS asks for. You learn which of the four stages your child is at and what a year toward the 2027 COMC could look like.',
    readFirst: 'Rather read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> shows a real lesson, and the <a class="ag-inline-link" href="/courses">course catalogue</a> has every syllabus.',
    note: 'Our teachers work from India and teach every class live on video, so students join from home anywhere in Canada. The quickest reply comes on WhatsApp.',
    formNote: 'Free first class, with no card and no contract.'
  },

  footer: {
    cols: [
      { h4: 'Contests', links: [
        { href: '/maths-olympiad-classes-online', label: 'Olympiad classes' },
        { href: '/cemc-waterloo-contests-preparation', label: 'CEMC contests' },
        { href: '/euclid-contest-preparation', label: 'Euclid Contest' },
        { href: '/math-olympiad-amc-tutoring', label: 'AMC and AIME' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada' },
        { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Working is insurance'
  },

  personalityCss: `
.ag-root.ag-ccom .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-ccom .ag-capsule { border-left-width: 5px; border-radius: 3px; }
.ag-root.ag-ccom .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-ccom .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-ccom .ag-band-head h3 { letter-spacing: -0.014em; }
.ag-root.ag-ccom .ag-slots { gap: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Canadian Mathematical Society COMC 2026 home, Changes, Eligibility, FAQs for Students and for Teachers, Getting Ready, Problem of the Week and Prizes and Awards pages, plus the CMS Competitions and Repechage pages, read raw on 22 October 2026: 2026 date Thursday, October 29 (Canada and the Americas) and Friday, October 30; last registration day Thursday, October 22, 2026; open to all grades, recommended Grades 8 and up; official participants under 19 as of June 30; 150 minutes, 12 questions; 4, 6 and 10 points by section, maximum 80; the no-work small-error rule; fully developed solutions for advanced questions; no calculators; Competitive and Global divisions; the 1:00 to 3:30 p.m. EDT window; prize money and CMO invitations for the Competitive Division only; questions separate from response booklets; Repechage discontinued and more direct invitations from 2027; about 100 to 120 (COMC page) and about 100 (Prizes page) invitations; quartile certificates; Canada Math Camp; twelve potential topics; Qualified Proctor rule. UTC offsets for 29 October 2026 from facts-geo.md section 3.',
    localProject: 'A province-by-province conversion of the CMS Competitive Division start window for 29 October 2026 (Newfoundland 2:30 to 5:00 p.m. through British Columbia 10:00 a.m. to 12:30 p.m.); a same-slip two-sheet comparison on a cosine-law question of ours; six original COMC-style problems checked in Python (alternating sum -50, coefficient 80, four numbers with three divisors, BC = root 57, m squared minus n squared = 60 giving (16, 14) and (8, 2), probability 7/20); a 150-minute budget; a one-week plan to 29 October 2026 and a plan to the 2027 COMC. Lesson family: working shown as insurance, exact arithmetic without a calculator.',
    requiredMentions: ['There is no second chance at a CMO invitation after the COMC', 'Competition questions will no longer appear in the student response booklets', 'The CMS set Thursday, October 22, 2026 as the last day to register', 'The 1:00 to 3:30 p.m. EDT start window, province by province', 'Four introductory questions, worth 4 points each', 'Maximum score: 80 points', 'Working is not decoration on the COMC', 'Same slip, two answer sheets', 'registration typically opens at the start of September', 'Working is insurance'],
    sources: [
      { claim: 'COMC description, length, 2026 date, last registration day, independent students and Open Writing Centres, CMO and CJMO invitation figure, Repechage discontinued.', url: 'https://cms.math.ca/competitions/comc/comc2026/' },
      { claim: 'Competitive and Global divisions, the writing window, prize money and CMO invitations for the Competitive Division only, separate question release.', url: 'https://cms.math.ca/competitions/comc/comc2026/changes/' },
      { claim: 'Open to all locations and grades, official-participant age and schooling rules, no calculators or devices, Qualified Proctor rule.', url: 'https://cms.math.ca/competitions/comc/comc2026/eligibility/' },
      { claim: '150 minutes, 12 questions, section points, maximum 80, marking rules, languages, marking teams, results and appeals timing.', url: 'https://cms.math.ca/competitions/comc/comc2026/faq/students/' },
      { claim: 'Compasses and protractors permitted; results and certificates timing.', url: 'https://cms.math.ca/competitions/comc/comc2026/faq/teachers/' },
      { claim: 'Twelve potential topics and the free exam archive.', url: 'https://cms.math.ca/competitions/comc/comc2026/getting-ready/' },
      { claim: 'Problem of the Week timing and the three-part description of the COMC.', url: 'https://cms.math.ca/competitions/comc/comc2026/problem-of-the-week/' },
      { claim: 'Awards, quartile certificates, approximately 100 CMO invitations, Canada Math Camp, results shared with universities.', url: 'https://cms.math.ca/competitions/comc/comc2026/prizes-and-awards/' },
      { claim: 'Registration typically opens at the start of September; COMC eligible Grade 12 or under, recommended Grades 8 and up.', url: 'https://cms.math.ca/competitions/' },
      { claim: 'More direct invitations from the COMC to the CMO and CJMO from 2027.', url: 'https://cms.math.ca/competitions/repechage/' }
    ],
    rejectedClaims: [
      'Any past COMC problem or solution: never reproduced; the page links to the CMS archive and uses problems we wrote.',
      'COMC fees: omitted, as the CMS prints them in named currencies.',
      'The EGMO qualifier and any gender-scoped figures: left out under the cluster rules.',
      'APMO invitation counts: the COMC page and the APMO page give different ranges, so neither is printed here.',
      'A reconciled or summed CMO invitation figure: each CMS figure is attributed to its own page instead.',
      'Names of past champions, team members or authors on CMS pages: not reproduced.',
      'Award category names that contain the word best: not used.',
      'A 2027 COMC date: not published on 22 October 2026, so not stated.',
      'That our classes raise scores or secure awards, camp places or CMO invitations: refused.',
      'Any affiliation with the Canadian Mathematical Society: none, and the page says so.'
    ]
  }
};
