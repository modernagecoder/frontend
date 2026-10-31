'use strict';
// Oxford MAT preparation (ag- exam guide, UK and US exams cluster, row UK069).
// Sources, read raw with curl on 31 October 2026 (copies in
// keyword-research-2026-09/uk-us-gap/src/oxford-mat-preparation/):
//  - Mathematical Institute, Maths Admissions Test page (maths.ox.ac.uk/study-here/undergraduate-study/maths-admissions-test,
//    last updated 13 Apr 2026). Verbatim: "From 2026, Oxford will use the TMUA . The MAT will not take place, and all
//    applicants for Mathematics or Computer Science (including joint honours courses) will take the TMUA instead.";
//    "a test used from 2007 to 2025"; "the depth of mathematical understanding of a student in the fourth term of their
//    A-levels (or equivalent) rather than a breadth of knowledge"; 2025 format: online with Pearson VUE, "2½ hours",
//    "27 questions", "25 questions are multiple-choice", "worth 2 or 3 or 4 marks", "two longer questions", "Each of the
//    long questions was worth 15 marks", "marked out of 100"; 2025 dates 22 and 23 October 2025; averages mu1, mu2, mu3
//    (all applicants, shortlisted, offers) for 2025 (49.6, 66.7, 74.0), 2024 (54.4, 71.7, 77.4), 2023 (51.2, 68.1,
//    75.1), 2022 (48.3, 65.2, 71.5), 2021 (51.1, 69.5, 73.5); syllabus "updated for the 2018 test".
//  - Mathematical Institute, TMUA page (last updated 9 Jul 2026). Verbatim: "we shortlist around three applicants per
//    place to interview"; "There is no "pass" mark for the TMUA"; "the mathematical topics covered on the TMUA are very
//    similar to those covered on the MAT, and the spirit of problem-solving is common to both tests"; key dates 01 June
//    2026 registration, 20 July 2026 booking, 28 September 2026 (6pm UK time) booking deadline, 12 to 16 October 2026
//    test dates (en dash in original), 15 October 2026 UCAS, November 2026 shortlisting, December 2026 interviews,
//    January 2027 decisions; "The test lasts 2½ hours in total"; "Candidates have 75 minutes for each paper"; "Each
//    paper contains 20 multiple-choice questions"; "No calculators are permitted for the test"; MAT Livestream "with a
//    particular focus on the TMUA"; TMUA flashcards; Warwick resources and STEP support foundation modules recommended.
//  - Mathematical Institute, undergraduate study page (last updated 22 May 2026): course codes G100, GV15, GG14; "There
//    are 29 Oxford colleges that accept undergraduates for Mathematics"; open application "no admissions advantage or
//    disadvantage".
//  - Mathematical Institute, interviews page (last updated 12 Aug 2026): interviews "online via video call for all
//    candidates"; "Each interview lasts for about 25 minutes"; "We very much don't want applicants to feel they need
//    special training for our admissions."; "do lots of problems, on and near your syllabus".
//  - Mathematical Institute, our offer page: A*A*A with A* in Mathematics and A* in Further Mathematics; "In recent years
//    we have admitted fewer than three such students per year" (applicants without Further Maths).
//  - Department of Computer Science, how to apply (cs.ox.ac.uk): CS applicants "Register for the TMUA" via UAT-UK; "Our
//    Computer Science students take the same test as those applying for Mathematics"; CS interviews "around 30 minutes,
//    usually with two interviewers"; decisions in January.
// Not reachable: www.ox.ac.uk returned HTTP 403 to curl on 31 October 2026; not retried or worked around. uat-uk.org did
// not resolve. No MAT question is reproduced; Oxford publishes its own papers and solutions, linked.
// Our own material, labelled on the page: the gaps between the published averages (2025: 17.1 and 7.3 points), the
// minutes-per-mark arithmetic (150 minutes over 100 marks), the cubic x^3 - 3x + c worked in long form (three distinct
// roots exactly when -2 < c < 2) and then as a multiple-choice item (three integer values), checked numerically, and a
// six-problem practice set with answers checked in Python. Lesson family: turning a written argument into a decision
// you can make in four minutes, without losing the argument.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'OXFORD MAT', blurb: 'The Oxford MAT ran from 2007 to 2025 and is now replaced by the TMUA. What changed, what the MAT archive is still good for, and the 2026 dates.' },
  slug: 'oxford-mat-preparation',
  code: 'omp',
  accent: '#006471',
  accentRationale: 'Oxford MAT preparation: a deep teal #006471 from the cluster allocation, about 6.9:1 on #FBF8F2 and above 4.5:1 on every paper tint, cooler than the olympiad slate and the Higher aubergine',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Oxford MAT preparation',
  title: 'Oxford MAT Preparation: MAT Replaced by the TMUA in 2026',
  description: 'Oxford MAT preparation for 2026: the MAT has ended and Oxford maths and computer science applicants now sit the TMUA. Dates, format and how to use MAT papers.',
  ogDescription: 'Oxford ran the MAT from 2007 to 2025. From 2026 every Oxford maths and computer science applicant sits the TMUA instead. What changed, and what the old papers are still for.',
  twitterDescription: 'Oxford MAT preparation in 2026: the MAT is gone, the TMUA replaces it, and the archive still teaches.',
  pageName: 'Oxford MAT Preparation',
  webPageDescription: 'A guide for Oxford Mathematics and Computer Science applicants to the end of the Mathematics Admissions Test and its replacement by the TMUA from 2026, built from the Mathematical Institute and Department of Computer Science pages.',
  courseDescription: 'Live online teaching for sixth formers applying to Oxford for Mathematics, Computer Science or joint honours: TMUA readiness, problem solving from the MAT tradition, and thinking aloud for interview.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Oxford MAT preparation',
  navLinks: [
    { href: '#change', label: 'What changed' },
    { href: '#dates', label: '2026 dates' },
    { href: '#archive', label: 'MAT papers' },
    { href: '#example', label: 'Worked example' },
    { href: '#interview', label: 'After the test' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; Year 13 &middot; Oxford Mathematics and Computer Science, 2026 round',
  h1: 'Oxford MAT preparation in 2026: the MAT is now the TMUA',
  lede: 'Anyone searching for Oxford MAT preparation this year needs one fact before anything else: the Mathematics Admissions Test has finished. Oxford ran it from 2007 to 2025, and the Mathematical Institute now states that from 2026 the MAT will not take place and every applicant for Mathematics, Computer Science or a joint honours course sits the TMUA instead. The old papers have not become useless. Oxford itself says the topics are very similar and the spirit of problem solving is shared. But the paper on the day is different in shape: forty multiple-choice questions over two papers, with no long written answers. This page sets out what changed, the 2026 dates Oxford publishes, how to use nineteen years of MAT papers sensibly, and what follows the test.',
  secondaryCta: { href: '#example', label: 'See one problem worked both ways' },
  wa: 'Hello Modern Age Coders, I am applying to Oxford for maths or computer science and would like a free class for the TMUA.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Every Oxford fact quoted from the Mathematical Institute or Computer Science pages',
  spec: [
    ['The MAT', 'Ran 2007 to 2025; not set in 2026'],
    ['Replaced by', 'The TMUA, for every Oxford maths and CS applicant'],
    ['TMUA sitting', '12 to 16 October 2026'],
    ['Book a slot by', '28 September 2026, 6pm UK time'],
    ['Format', 'Two papers, 75 minutes, 20 questions each'],
    ['Calculator', 'Not permitted'],
    ['Interviews', 'December 2026, by video'],
    ['Start', 'One free class']
  ],
  capsuleQ: 'In short',
  capsule: 'The Oxford MAT (Mathematics Admissions Test) no longer exists: the Mathematical Institute used it from 2007 to 2025 and says that from 2026 all applicants for Mathematics, Computer Science and joint honours courses take the TMUA, administered by UAT-UK, in the 12 to 16 October 2026 sitting. The TMUA is two 75-minute papers of 20 multiple-choice questions each, with no calculator. Oxford says MAT topics are very similar, so MAT papers remain useful practice. Modern Age Coders teaches Year 13 Oxford applicants live online, in a batch of 15 to 20 or 1-on-1, through our TMUA, MAT and STEP preparation course.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for an Oxford maths or computer science applicant',
    lede: 'The first is built for the admissions tests themselves. The other two are the mathematics those tests quietly assume.',
    items: [
      { course: 'tmua-mat-step-preparation-course', code: 'OMP / 01', title: 'TMUA, MAT and STEP preparation', note: 'Ages 16 to 18. The TMUA content specification and logic, with the MAT archive used as a problem bank.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'OMP / 02', title: 'Olympiad and competition maths', note: 'For the applicant who wants harder problems than any admissions test will set.' },
      { course: 'a-level-further-maths-course', code: 'OMP / 03', title: 'A Level Further Maths', note: 'Oxford asks for A* in Further Maths where a school offers it. This is that course.' }
    ]
  },

  sections: [
    {
      id: 'change', tint: 'tint', eyebrow: 'What changed',
      h2: 'Is the Oxford MAT still running in 2026?',
      lede: 'No. The Mathematical Institute says the MAT will not take place in 2026, and Oxford applicants for Mathematics, Computer Science and the joint honours courses sit the TMUA instead. The notice sits at the top of the MAT page itself.',
      body: [
        { kind: 'p', html: 'The wording is direct: "From 2026, Oxford will use the TMUA. The MAT will not take place, and all applicants for Mathematics or Computer Science (including joint honours courses) will take the TMUA instead." The Department of Computer Science says the same on its own how-to-apply page, and adds that its students "take the same test as those applying for Mathematics". So there is no separate Oxford route that keeps the MAT alive for one course.' },
        { kind: 'table', caption: 'The last MAT against the first Oxford TMUA sitting, from the Mathematical Institute pages (read 31 October 2026)', head: ['', 'MAT, as sat in October 2025', 'TMUA, October 2026 sitting'], rows: [
          ['Who set it', 'The Mathematical Institute, Oxford', 'Administered by UAT-UK, used by many universities'],
          ['Length', '2&frac12; hours', '2&frac12; hours in total, as two papers of 75 minutes'],
          ['Questions', '27: 25 multiple-choice and two longer questions', '40: 20 multiple-choice questions in each paper'],
          ['Marks', 'Multiple-choice worth 2, 3 or 4 marks; each long question 15; out of 100', 'A scaled score; Oxford says there is no pass mark'],
          ['Written working', 'Typed responses to the two long questions, partial credit given', 'None: every question is multiple choice'],
          ['Where', 'Online at Pearson VUE test centres', 'Online at Pearson VUE test centres'],
          ['Calculator', 'Not mentioned on the MAT page', 'Not permitted'],
          ['Dates', '22 and 23 October 2025', '12 to 16 October 2026; Oxford applicants must sit this October window']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What has not changed',
          left: [
            'The purpose. Oxford describes the TMUA in almost exactly the words it once used for the MAT: a test of "the depth of mathematical understanding of a student in the fourth term of their A-levels (or equivalent) rather than a breadth of knowledge", set to be approachable without Further Maths and from other school systems.',
            'The use. Oxford still cannot interview everyone. It shortlists "around three applicants per place", and the test score is read together with the UCAS application and information about school background. There is no pass mark under either test.'
          ],
          rightH3: 'What has changed',
          right: [
            'The written answer has gone. The MAT closed with two long questions worth 15 marks each, typed out, marked by a team in Oxford with partial credit. Thirty of a hundred marks rewarded explaining yourself. The TMUA rewards only the choice you click.',
            'The timing per question has changed with it. Our arithmetic: the MAT gave 150 minutes for 100 marks, roughly a minute and a half a mark. The TMUA gives 75 minutes for 20 questions, which is three minutes and forty-five seconds a question, every question counting the same.'
          ] },
        { kind: 'source', html: 'Sources: the Mathematical Institute <a class="ag-inline-link" href="https://www.maths.ox.ac.uk/study-here/undergraduate-study/maths-admissions-test" rel="noopener" target="_blank">Maths Admissions Test page</a> and <a class="ag-inline-link" href="https://www.maths.ox.ac.uk/study-here/undergraduate-study/tmua" rel="noopener" target="_blank">TMUA page</a>, and the Department of Computer Science <a class="ag-inline-link" href="https://www.cs.ox.ac.uk/admissions/undergraduate/how_to_apply/" rel="noopener" target="_blank">how to apply page</a>, all read on 31 October 2026. The minutes per mark and per question are our own division. Modern Age Coders is not connected with the University of Oxford, UAT-UK or Pearson VUE.' }
      ]
    },
    {
      id: 'dates', tint: 'deep', eyebrow: 'The 2026 round',
      h2: 'When are the Oxford maths and computer science deadlines for 2026?',
      lede: 'Booking closes on 28 September 2026 at 6pm UK time, the test runs from 12 to 16 October 2026, and UCAS closes on 15 October 2026. The Mathematical Institute publishes the whole calendar on its TMUA page.',
      body: [
        { kind: 'table', caption: 'Oxford Mathematics and joint honours timeline for 2027 entry, as the Mathematical Institute lists it', head: ['Date', 'What happens'], rows: [
          ['01 June 2026', 'Candidates can register for the TMUA on the UAT-UK website'],
          ['20 July 2026', 'Candidates can book a test slot'],
          ['28 September 2026, 6pm UK time', 'Deadline to book a TMUA test slot'],
          ['12 to 16 October 2026', 'TMUA test dates; Oxford applicants must use this October sitting'],
          ['15 October 2026, 6pm UK time', 'UCAS deadline, reference included; late applications are not accepted'],
          ['November 2026', 'Oxford makes shortlisting decisions'],
          ['December 2026', 'Oxford interviews'],
          ['January 2027', 'Decisions are sent to candidates']
        ] },
        { kind: 'p', mt: true, html: 'For a student reading this in late October 2026, the October sitting has already happened, and the remaining work is interview preparation and A Level grades. For a student in Year 12 now, the same pattern can be expected for 2027 entry a year later, but the dates above are Oxford\'s 2026 dates and the 2027 calendar has not been published.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Choose the course and the college, or make an open application.</strong> Oxford offers Mathematics or Mathematics and Statistics (G100), Mathematics and Philosophy (GV15) and Mathematics and Computer Science (GG14); 29 colleges accept Mathematics undergraduates, and Oxford says an open application carries no advantage or disadvantage.',
          '<strong>Register with UAT-UK.</strong> The Department of Computer Science says registration "includes account creation, access arrangements and bursary requests", so a student who needs extra time or a bursary should register early rather than at the deadline.',
          '<strong>Book the October slot.</strong> Booking ran from 20 July to 28 September 2026. Oxford will not accept the January window for its applicants.',
          '<strong>Submit UCAS by 15 October.</strong> Schools often set an earlier internal deadline so that the reference is ready in time.',
          '<strong>Sit the TMUA.</strong> Two 75-minute papers of 20 multiple-choice questions, no calculator, at a Pearson VUE centre.',
          '<strong>Prepare for a December interview.</strong> If shortlisted in November, the interviews are online. Decisions follow in January 2027.'
        ] },
        { kind: 'source', html: 'Dates and course codes from the Mathematical Institute <a class="ag-inline-link" href="https://www.maths.ox.ac.uk/study-here/undergraduate-study" rel="noopener" target="_blank">undergraduate study page</a> and TMUA page, read 31 October 2026. The university-wide admissions pages at ox.ac.uk refused our automated request that day, so nothing on this page is taken from them.' }
      ]
    },
    {
      id: 'archive', tint: 'tint', eyebrow: 'Nineteen years of papers',
      h2: 'Are MAT past papers still worth doing for the TMUA?',
      lede: 'Yes, used the right way. Oxford says applicants who have looked at MAT papers "will find that the mathematical topics covered on the TMUA are very similar", and it still hosts every paper with solutions from 2007 onwards. What needs care is the long questions and the marking.',
      body: [
        { kind: 'p', html: 'The archive also carries something no other admissions test publishes in one place: three averages for every year. Oxford labels them &mu;1, the mean MAT score of all applicants for Mathematics, Mathematics and Statistics and Mathematics and Philosophy; &mu;2, the mean of those shortlisted for interview; and &mu;3, the mean of those who were made offers. The last five years read as follows.' },
        { kind: 'table', caption: 'Oxford\'s published MAT averages (out of 100), Mathematics applicants, from the Maths Admissions Test page', head: ['MAT year', 'All applicants (&mu;1)', 'Shortlisted (&mu;2)', 'Offers (&mu;3)', 'Our arithmetic: &mu;2 minus &mu;1', 'Our arithmetic: &mu;3 minus &mu;2'], numCols: [1, 2, 3, 4, 5], rows: [
          ['2025', '49.6', '66.7', '74.0', '17.1', '7.3'],
          ['2024', '54.4', '71.7', '77.4', '17.3', '5.7'],
          ['2023', '51.2', '68.1', '75.1', '16.9', '7.0'],
          ['2022', '48.3', '65.2', '71.5', '16.9', '6.3'],
          ['2021', '51.1', '69.5', '73.5', '18.4', '4.0']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the averages say',
          left: [
            'Across these five years, the shortlisted group averaged around seventeen marks more than the whole field, while the offer group averaged only four to seven marks more than the shortlisted group. The differences are ours, computed from Oxford\'s figures; Oxford draws no conclusion from them on the page.',
            'Read cautiously, the pattern fits what Oxford says about the process: the test does most of its work at the shortlisting stage, and after that the interview and the rest of the application carry the decision. None of these are pass marks, and they belong to the MAT, not the TMUA, which reports on a different scale.'
          ],
          rightH3: 'How to use the archive now',
          right: [
            'Treat the multiple-choice sections of MAT papers as close practice. They test the same A Level content with the same expectation of thought rather than routine, and Oxford updated the MAT syllabus for the 2018 test, so papers from 2018 onwards match current school content more closely.',
            'Treat the long questions as interview practice rather than test practice. They are exactly the kind of extended problem a tutor might set in a December interview, and Oxford\'s own interview page suggests working a past MAT question aloud in front of a teacher.'
          ] },
        { kind: 'table', mt: true, caption: 'What transfers from MAT practice to the TMUA, in our reading', head: ['MAT habit', 'Still useful for the TMUA?', 'Adjustment'], rows: [
          ['Sketching a graph before computing anything', 'Yes, heavily', 'None; it is often the fastest route to an answer option'],
          ['Checking each option against a special case', 'Yes', 'Make it routine: x = 0, x = 1 and a negative value'],
          ['Writing a full justification', 'Not on the day', 'Keep it for interview practice; on the test, decide and move on'],
          ['Chasing partial credit on a long question', 'No', 'There is none; a question is right or wrong'],
          ['Leaving a question you cannot finish', 'Change this', 'Cambridge and Imperial say a wrong answer loses nothing, so never leave a blank']
        ] },
        { kind: 'source', html: 'Averages, syllabus note and the archive itself are on the <a class="ag-inline-link" href="https://www.maths.ox.ac.uk/study-here/undergraduate-study/maths-admissions-test" rel="noopener" target="_blank">Maths Admissions Test page</a>, read 31 October 2026; Oxford publishes the equivalent figures for Computer Science applicants on the Computer Science departmental website. We link to Oxford\'s papers and do not reproduce any question. The differences and the transfer table are ours.' }
      ]
    },
    {
      id: 'example', tint: 'plain', eyebrow: 'Worked example, ours',
      h2: 'One problem worked as a MAT long question, then as a TMUA item',
      lede: 'The difference between the two tests is easiest to see on a single idea. This problem is our own, written for this page in the style of A Level calculus with a twist, and is not taken from any Oxford or UAT-UK paper.',
      body: [
        { kind: 'p', html: '<strong>Our problem.</strong> Let f(x) = x<sup>3</sup> &minus; 3x + c, where c is a real constant. For which values of c does the equation f(x) = 0 have three distinct real roots?' },
        { kind: 'three', cells: [
          { h3: 'Step 1: where it turns', p: 'f&prime;(x) = 3x<sup>2</sup> &minus; 3, which is zero at x = &minus;1 and x = 1. So the cubic has a local maximum at x = &minus;1 and a local minimum at x = 1, and nowhere else changes direction.' },
          { h3: 'Step 2: the two heights', p: 'f(&minus;1) = &minus;1 + 3 + c = c + 2, and f(1) = 1 &minus; 3 + c = c &minus; 2. Three crossings need the maximum above the axis and the minimum below it: c + 2 &gt; 0 and c &minus; 2 &lt; 0.' },
          { h3: 'Step 3: the answer', p: 'Together, &minus;2 &lt; c &lt; 2. At c = 2 or c = &minus;2 a turning point touches the axis and two roots merge, so there are only two distinct roots. Outside the interval there is one.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'As a long question',
          left: [
            'On the old MAT, the marks would have lived in the reasoning: why the two turning points decide everything, why touching the axis counts as a repeated root rather than two roots, and why a cubic with a maximum below the axis can cross only once. A student who reached the interval with no explanation would have lost marks; one who explained clearly and slipped on an endpoint would have kept most of them.',
            'That is also the shape of a good interview answer. Say what you are looking for (the turning points), say why it matters (a continuous cubic must cross between a positive maximum and a negative minimum), and only then compute.'
          ],
          rightH3: 'As a multiple-choice item',
          right: [
            'Now ask it the TMUA way: <em>how many integer values of c give f(x) = 0 three distinct real roots? (A) 1 (B) 2 (C) 3 (D) 4 (E) 5.</em> The integers strictly between &minus;2 and 2 are &minus;1, 0 and 1, so the answer is (C). We checked all nine integers from &minus;4 to 4 numerically: exactly those three give three roots.',
            'The trap is (E), which counts the endpoints. The same reasoning is needed, compressed into one sketch and one decision about strict inequalities. That compression is the skill to practise.'
          ] },
        { kind: 'table', mt: true, caption: 'Six more problems in the same spirit, written by us (answers checked in Python)', head: ['#', 'Our problem', 'Answer'], rows: [
          ['1', 'How many real solutions does 9<sup>x</sup> &minus; 10 &middot; 3<sup>x</sup> + 9 = 0 have?', 'Two: x = 0 and x = 2'],
          ['2', 'For which k does x<sup>2</sup> + kx + 9 = 0 have two distinct positive roots?', 'k &lt; &minus;6'],
          ['3', 'What is the remainder when 2<sup>100</sup> is divided by 7?', '2'],
          ['4', 'The line y = mx touches the curve y = x<sup>2</sup> + 4. Find every possible m.', 'm = 4 or m = &minus;4'],
          ['5', 'How many integers n with 1 &le; n &le; 100 make n<sup>2</sup> + n + 1 divisible by 3?', '34: every n that leaves remainder 1'],
          ['6', 'True or false: if a<sup>2</sup> &gt; b<sup>2</sup> then a &gt; b. Give a reason.', 'False: a = &minus;3, b = 1']
        ] },
        { kind: 'source', html: 'The cubic, the multiple-choice version and the six problems are ours, written on 31 October 2026. They are practice in the style of A Level problem solving, not copies of MAT or TMUA questions; Oxford and UAT-UK publish their own papers.' }
      ]
    },
    {
      id: 'interview', tint: 'deep', eyebrow: 'After the test',
      h2: 'What happens after the TMUA for Oxford applicants?',
      lede: 'Shortlisting in November, interviews online in December, decisions in January. Oxford\'s pages are unusually candid about what the interview is for and what it is not.',
      body: [
        { kind: 'table', caption: 'Oxford interviews and offers, from the Mathematical Institute and Computer Science pages', head: ['', 'Mathematics and joint honours', 'Computer Science'], rows: [
          ['Format', 'Online by video call for all candidates', 'Via video call in December'],
          ['How many', 'Interviews at the first-choice college plus at least one other', 'Generally two at the first-choice college and at least one at another'],
          ['Length', 'About 25 minutes each', 'Around 30 minutes, usually with two interviewers'],
          ['Content', 'Largely mathematical: technique, curve sketching, a problem talked through, a new definition explored', 'Mostly solving a computer science problem aloud, like a short tutorial'],
          ['Standard offer', 'A*A*A with A* in Mathematics and A* in Further Mathematics, where Further Maths is available', 'Set out on the Computer Science departmental website']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Oxford on special training',
          left: [
            'The Mathematical Institute\'s interview page says something every family should read before paying anyone, us included: "We very much don\'t want applicants to feel they need special training for our admissions." It continues: the main thing is to do mathematics, lots of it, and to find it interesting, working "lots of problems, on and near your syllabus".',
            'We agree, and it shapes what we teach. We do not drill a test. We teach the mathematics on and near the syllabus properly, set problems that make a student stop and think, and give them a teacher who listens while they think aloud. If a school already offers that, a student may need nothing more.'
          ],
          rightH3: 'Further Maths and the offer',
          right: [
            'Oxford asks for A Level Further Mathematics where a school offers it, and says that candidates without it may be made an offer only in exceptional circumstances: "In recent years we have admitted fewer than three such students per year." For a student at a school without Further Maths, that sentence matters more than any test score.',
            'The offer is conditional and made in January on predicted grades. A student who has been offered a place still has the summer exams to meet, so interview preparation and A Level work have to run side by side through Year 13.'
          ] },
        { kind: 'source', html: 'Sources: the Mathematical Institute <a class="ag-inline-link" href="https://www.maths.ox.ac.uk/study-here/undergraduate-study/interviews" rel="noopener" target="_blank">interviews page</a> and <a class="ag-inline-link" href="https://www.maths.ox.ac.uk/study-here/undergraduate-study/our-offer" rel="noopener" target="_blank">our offer page</a>, and the Department of Computer Science how to apply page, read 31 October 2026. We make no promise of a shortlist, an interview or an offer.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'A Year 12 to Year 13 plan',
    h2: 'Four stages from A Level to an Oxford interview',
    lede: 'Our suggested order for a student starting in the spring of Year 12. The dates in the first column are the 2026 pattern; check the 2027 calendar when Oxford publishes it.',
    table: { caption: 'Our plan, built around the 2026 Oxford timeline', head: ['When', 'Stage', 'The sign it is done'], rows: [
      ['Year 12, spring', '1. A Level pure secure', 'Quadratics, inequalities, logs, sequences and basic calculus never slow a problem down'],
      ['Year 12, summer', '2. The TMUA specification read line by line', 'Every topic in both sections of the content specification has been met, including logic and proof'],
      ['Year 13, September', '3. Timed papers', 'Twenty questions in 75 minutes without running out of time, no blanks left'],
      ['Year 13, October to December', '4. Thinking aloud', 'Can talk through an unseen problem for 25 minutes, including the wrong turns']
    ] },
    left: { h3: 'If the test is weeks away', ps: [
      'Sit the free practice papers under strict timing, then spend twice as long reviewing as sitting. Look for the questions you got right slowly, not only those you got wrong.',
      'Practise the decision to move on. Three minutes forty-five seconds a question means a stuck question has to be abandoned, guessed and returned to, never stared at.'
    ] },
    right: { h3: 'If the test is a year away', ps: [
      'Do not start with test papers. Start with the A Level content done deeply, and with problems that have no obvious method, from MAT archives, STEP support material or olympiad sets.',
      'Students who enjoy that kind of problem often enjoy the <a class="ag-inline-link" href="/british-mathematical-olympiad-bmo-preparation">British Mathematical Olympiad</a>, which uses the same muscles over three and a half hours.'
    ] }
  },

  catalogue: {
    eyebrow: 'The full list',
    h2: 'What we teach an Oxford applicant',
    lede: 'Grouped by what usually stands between a strong student and a confident test and interview.',
    bands: [
      { num: 'I', h3: 'The test', sub: 'TMUA readiness', courses: [
        { code: 'OMP / T / 01', slug: 'tmua-mat-step-preparation-course', title: 'TMUA, MAT and STEP preparation', blurb: 'Both TMUA papers, logic and proof, and timed practice.' },
        { code: 'OMP / T / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad and competition maths', blurb: 'Problems with no obvious method.' },
        { code: 'OMP / T / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Counting and probability arguments made careful.' }
      ] },
      { num: 'II', h3: 'The school course', sub: 'Years 12 and 13', courses: [
        { code: 'OMP / S / 01', slug: 'a-level-further-maths-course', title: 'A Level Further Maths', blurb: 'Core pure and applied options.' },
        { code: 'OMP / S / 02', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A Level Maths', blurb: 'Pure, mechanics and statistics for the grades in the offer.' },
        { code: 'OMP / S / 03', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Mathematics', blurb: 'For applicants on the IB Diploma.' }
      ] },
      { num: 'III', h3: 'Computer science applicants', sub: 'Mathematics and Computer Science, Computer Science', courses: [
        { code: 'OMP / C / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and algorithms', blurb: 'The kind of reasoning a CS interview asks for.' },
        { code: 'OMP / C / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Proof and running time in the same problem.' },
        { code: 'OMP / C / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Enough code to test a conjecture.' }
      ] },
      { num: 'IV', h3: 'Exploring further', sub: 'Mathematics with a use', courses: [
        { code: 'OMP / E / 01', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Simulate a pattern, then prove it.' },
        { code: 'OMP / E / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Linear algebra and probability at work.' },
        { code: 'OMP / E / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science with Python', blurb: 'Statistics on real data.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live classes from the summer of Year 12 to the December interview',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekday evenings', l: 'After sixth-form lessons, in UK time.' },
      { time: 'Weekend mornings', l: 'Long enough for a full timed paper.' },
      { time: '1-on-1', l: 'Mock interviews, one student and one teacher.' }
    ],
    cells: [
      { h3: 'Content first', p: 'The TMUA specification taught as mathematics, not as a list of question types.' },
      { h3: 'Two tempos', p: 'Slow problems for understanding, then the same ideas at three minutes forty-five a question.' },
      { h3: 'Aloud, on camera', p: 'Students explain their reasoning on video every week, which is what an Oxford interview will ask.' },
      { h3: 'A batch of 15 to 20', p: 'Enough people for several approaches to the same problem to surface in one lesson.' },
      { h3: 'Our own problems', p: 'Written by our teachers; official papers are linked for students to sit themselves.' },
      { h3: 'Honest about outcomes', p: 'We promise no score, no shortlist and no offer, and nobody can.' }
    ]
  },

  projectsH2: 'What our students build',
  projectsLede: 'Published work by students at our school, across mathematics, code and AI. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has the full collection.',
  reviewsLede: 'Reviews from our Google profile, reproduced word for word.',

  fees: {
    h2: 'Fees',
    lede: 'UAT-UK charges the test fee and offers bursaries to UK candidates in financial need; our monthly fee is for the classes alone, with no joining fee, and a student can stop after the interview.',
    free: ['A free first class', 'One unseen problem talked through', 'No card details'],
    group: ['A batch of 15 to 20 sixth formers', 'One teacher all year', 'Timed papers marked and reviewed', 'Monthly, stop any time'],
    one: ['One student, one teacher', 'Mock interviews on video', 'Built around one weak topic']
  },

  faq: {
    eyebrow: 'Oxford MAT questions',
    h2: 'What Oxford applicants and parents ask',
    items: [
      { q: 'Is the Oxford MAT still running?', a: 'No. The Mathematical Institute used the MAT from 2007 to 2025 and says that from 2026 the MAT will not take place. All applicants for Mathematics, Computer Science and joint honours courses take the TMUA instead.' },
      { q: 'What test do I take for Oxford maths in 2026?', a: 'The TMUA, the Test of Mathematics for University Admission, administered by UAT-UK. Oxford applicants must sit the October window, which in 2026 ran from 12 to 16 October.' },
      { q: 'Does Oxford Computer Science still use the MAT?', a: 'No. The Department of Computer Science says applicants register for the TMUA through UAT-UK, and that its students take the same test as Mathematics applicants. The MAT is not set for any Oxford course in 2026.' },
      { q: 'Are MAT past papers still useful?', a: 'Yes. Oxford says the TMUA covers mathematical topics very similar to the MAT and shares its spirit of problem solving, and it still publishes MAT papers with solutions. The long MAT questions are now better used as interview practice, because the TMUA has no written answers.' },
      { q: 'How is the TMUA different from the MAT?', a: 'The 2025 MAT had 27 questions, 25 multiple-choice and two long questions worth 15 marks each, marked out of 100. The TMUA has two 75-minute papers of 20 multiple-choice questions each, with no calculator and no written working.' },
      { q: 'What MAT score did you need for an Oxford interview?', a: 'There was never a pass mark. Oxford published averages instead: in 2025, all Mathematics applicants averaged 49.6, those shortlisted 66.7 and those offered places 74.0. These figures describe the MAT and do not carry over to the TMUA scale.' },
      { q: 'Do I need Further Maths to apply to Oxford for maths?', a: 'Oxford says Further Maths is highly recommended and expected where a school offers it. Applicants without it may be made an offer only in exceptional circumstances, and Oxford says it has admitted fewer than three such students per year recently.' },
      { q: 'What is an Oxford maths interview like?', a: 'Online by video, about 25 minutes each, with interviews at the first-choice college and at least one other. Tutors may ask about mathematics you have studied, a point of technique, a problem to talk through or a new definition to explore.' },
      { q: 'Do I need a course to prepare for Oxford?', a: 'Oxford says it does not want applicants to feel they need special training, and that the main thing is to do lots of mathematics and enjoy it. A class helps a student who lacks problems, a teacher to think aloud with, or Further Maths at school.' },
      { q: 'When can classes take place?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with the University of Oxford?', a: 'No. Modern Age Coders is an independent online school with no connection to the University of Oxford, UAT-UK or Pearson VUE. Applicants register and book the TMUA themselves through UAT-UK.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for sixth-form mathematicians',
    lede: 'The school courses underneath, a harder competition beside it, and Oxford itself.',
    items: [
      { href: '/further-maths-tuition-online', label: 'Further Maths tuition online', p: 'The A Level that Oxford expects where it is taught.' },
      { href: '/is-a-level-further-maths-worth-it', label: 'Is A Level Further Maths worth it?', p: 'The case for and against, for a Year 11 student choosing.' },
      { href: '/a-level-maths-tuition-online', label: 'A Level Maths tuition online', p: 'Pure, mechanics and statistics, the base of the TMUA.' },
      { href: '/british-mathematical-olympiad-bmo-preparation', label: 'British Mathematical Olympiad', p: 'Six problems in three and a half hours, sat in school.' },
      { href: '/oxford-university-computing-challenge-preparation', label: 'Oxford University Computing Challenge', p: 'A computing competition for applicants drawn to Computer Science.' },
      { href: '/maths-tuition-in-oxford', label: 'Maths tuition in Oxford', p: 'For families who live in the city itself.' }
    ]
  },

  start: {
    h2: 'Book a free class for the Oxford round',
    lede: 'Tell us the course you are applying for and where you are in Year 12 or 13. The free class works one unseen problem with you, out loud, and ends with an honest view of what to do next.',
    readFirst: 'Prefer to read first? Every syllabus is on the <a class="ag-inline-link" href="/courses">course pages</a>, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains a lesson from start to finish.',
    note: 'Our teachers are in India and teach live over video; the time is agreed in UK time. WhatsApp from a UK mobile reaches us fastest.',
    formNote: 'Free, no card, one reply to fix a time.'
  },

  footer: {
    cols: [
      { h4: 'Sixth-form maths', links: [
        { href: '/further-maths-tuition-online', label: 'Further Maths tuition' },
        { href: '/a-level-maths-tuition-online', label: 'A Level Maths tuition' },
        { href: '/is-a-level-further-maths-worth-it', label: 'Is Further Maths worth it?' },
        { href: '/british-mathematical-olympiad-bmo-preparation', label: 'British Mathematical Olympiad' }
      ] },
      { h4: 'Courses', links: [
        { href: '/courses/a-level-further-maths-course', label: 'A Level Further Maths' },
        { href: '/courses/olympiad-competition-mathematics-mastery', label: 'Olympiad maths' },
        { href: '/courses/a-level-maths-course-pure-mechanics-statistics', label: 'A Level Maths' },
        { href: '/coding-classes-in-united-kingdom', label: 'All UK pages' }
      ] }
    ],
    bottomRight: 'The MAT is archived; its problems are not'
  },

  personalityCss: `
.ag-root.ag-omp .ag-hero h1 { letter-spacing: -0.018em; max-width: 24ch; }
.ag-root.ag-omp .ag-capsule { border-left-width: 3px; padding-left: 1.3rem; }
.ag-root.ag-omp .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-omp .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-omp .ag-table th:first-child { width: 22%; }
.ag-root.ag-omp .ag-steps li { line-height: 1.62; }
.ag-root.ag-omp .ag-slots { gap: 1.3rem; }
`,

  dossier: {
    curriculumAuthority: 'University of Oxford Mathematical Institute and Department of Computer Science pages, read raw on 31 October 2026: the MAT page notice that from 2026 the MAT will not take place and all Mathematics, Computer Science and joint honours applicants take the TMUA; MAT 2007 to 2025; 2025 format (Pearson VUE, 2.5 hours, 27 questions, 25 multiple-choice worth 2, 3 or 4 marks, two long questions of 15 marks, out of 100); averages mu1, mu2, mu3 for 2021 to 2025; the TMUA page (around three applicants per place, no pass mark, key dates 01 June, 20 July, 28 September, 12 to 16 October, 15 October, November, December 2026, January 2027; two papers of 75 minutes, 20 multiple-choice questions each, no calculators); course codes G100, GV15, GG14 and 29 colleges; interviews about 25 minutes by video; "We very much don\'t want applicants to feel they need special training for our admissions."; standard offer A*A*A and fewer than three students per year without Further Maths; Computer Science interviews around 30 minutes with two interviewers.',
    localProject: 'One idea worked twice. Our cubic f(x) = x^3 - 3x + c has three distinct real roots exactly when -2 < c < 2, shown as a MAT-style long answer (turning points at x = -1 and 1, heights c + 2 and c - 2) and then compressed into a TMUA-style multiple-choice item (three integer values, with the endpoint trap), checked numerically for c from -4 to 4. Plus the gaps between Oxford\'s published averages (2025: 17.1 and 7.3 points), our minutes-per-question arithmetic and six original practice problems. Lesson family: turning a written argument into a four-minute decision without losing the argument.',
    requiredMentions: ['From 2026, Oxford will use the TMUA.', 'around three applicants per place', 'special training for our admissions', 'fewer than three such students per year', 'those shortlisted 66.7', '25 multiple-choice and two longer questions', 'Mathematics and Computer Science (GG14)', 'three minutes and forty-five seconds a question', 'f(x) = x<sup>3</sup> &minus; 3x + c', 'About 25 minutes each'],
    sources: [
      { claim: 'The end of the MAT, its 2025 format and dates, and the published averages by year.', url: 'https://www.maths.ox.ac.uk/study-here/undergraduate-study/maths-admissions-test' },
      { claim: 'Oxford TMUA use: shortlisting ratio, no pass mark, 2026 key dates, test format and preparation advice.', url: 'https://www.maths.ox.ac.uk/study-here/undergraduate-study/tmua' },
      { claim: 'Oxford Mathematics course codes, number of colleges and open applications.', url: 'https://www.maths.ox.ac.uk/study-here/undergraduate-study' },
      { claim: 'Interview format and length, and the statement about special training.', url: 'https://www.maths.ox.ac.uk/study-here/undergraduate-study/interviews' },
      { claim: 'Standard conditional offer and Further Maths expectation.', url: 'https://www.maths.ox.ac.uk/study-here/undergraduate-study/our-offer' },
      { claim: 'Computer Science applicants take the TMUA; CS interview format.', url: 'https://www.cs.ox.ac.uk/admissions/undergraduate/how_to_apply/' }
    ],
    rejectedClaims: [
      'Anything from www.ox.ac.uk admissions pages: HTTP 403 to curl on 31 October 2026, not retried or worked around.',
      'UAT-UK dates, fees and score scale from uat-uk.org: the host did not resolve on 31 October 2026; TMUA facts come from Oxford\'s own pages.',
      'A 2027 Oxford timeline: not published; the page gives the 2026 dates only and says so.',
      'Any MAT or TMUA question: not reproduced; Oxford\'s archive and UAT-UK practice papers are linked, and our problems are labelled ours.',
      'Interpreting the published averages as thresholds: described as averages only, with the differences labelled as our arithmetic.',
      'Test fees: published by UAT-UK, not repeated.',
      'Any promise of a shortlist, interview or offer: declined on the page.',
      'Any affiliation with the University of Oxford, UAT-UK or Pearson VUE: none, stated on the page.'
    ]
  }
};
