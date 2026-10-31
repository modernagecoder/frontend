'use strict';
// IB Extended Essay in maths or computer science (ag- exam door, DP core; UK cluster row UK066).
// ibo.org returns HTTP 403 to curl (earlier writers; uk-map.tsv): not retried. Read raw on 31 October 2026 (copy
// under keyword-research-2026-09/uk-us-gap/src/ib-extended-essay-maths-computer-science-mentoring/ee-2027.pdf):
//  - International Baccalaureate, "Extended essay guide, First assessment 2027", "Published February 2025, Updated
//    May 2025, August 2025, November 2025", "(c) International Baccalaureate Organization 2025": an unaltered
//    127-page IB PDF hosted by an IB school (chmsib.com). Verbatim: "a 4,000-word academic essay"; "A
//    subject-focused pathway sees students explore an area of research related to one of their six DP subjects,
//    while an interdisciplinary pathway combines two DP subjects."; "no more than 4,000 words accompanied by a
//    reflective statement of no more than 500 words"; "approximately 40 hours of work by the student";
//    supervision "recommended to be three to five hours long, which includes three mandatory reflection
//    sessions; the third and final reflection session is the viva voce"; with TOK "contributes up to three
//    points"; "A student must achieve a D grade or higher for the extended essay to be awarded the diploma.";
//    criteria A Framework for the essay (1 to 6), B Knowledge and understanding (1 to 6), C Analysis and line of
//    argument (1 to 6), D Discussion and evaluation (1 to 8), E Reflection (1 to 4), each with 0 below the
//    descriptors; "Criterion E is applied only to the reflective statement"; supervisor may "read and comment
//    on one draft only of the essay (no direct editing is permitted)"; "your supervisor is only permitted to
//    comment in writing on the full draft"; "students are not allowed to receive assistance with any aspect of
//    the research, writing or proofreading of the essay beyond that which is permitted through their
//    supervisor"; external mentors only "with the agreement of the school", with a signed form, and "Only a
//    supervisor within the school is permitted to complete the reflection process"; AI: "Using artificial
//    intelligence (AI) to write an essay that is then presented as your own is dishonest"; AI material may be
//    a resource "always acknowledged and cited appropriately"; IB prohibits commercial use of its publications
//    by "tutoring organizations" without a licence (so only short facts are quoted).
//    Mathematics: theoretical and practical approaches; "it is mandatory to include secondary research, i.e. a
//    review of the literature."; "mathematics uses a lot of algebra, so the actual final word count for your
//    extended essay is likely to fall short of 4,000 words."; "Be careful with research questions that compare
//    two different approaches to a topic."; "Showing your knowledge and clear understanding of the mathematics
//    you use is arguably the most important criterion in a mathematics essay."; "an extended essay is not a
//    research paper revealing that you have discovered something profound and new"; use an equation editor,
//    not "* for multiplication and ^ for powers"; "Do make sure you use raw data."
//    Computer science sits in the sciences guidance: "An extended essay in any of the science subjects ...
//    computer science ... offers the opportunity to investigate and collect primary or secondary data, based on
//    a focused research question." Interdisciplinary examples include "mathematics and computer science".
//    Interdisciplinary languages restricted to English, French and Spanish.
// The guide's example topics and research questions are not reproduced. Our own, labelled: the practice
// mini-investigations (tilings, search timing) and the Python timing script, which are deliberately not EE topics.
// Spine: the guide forbids help with any aspect of the essay beyond the school supervisor, so we teach the
// mathematics, the programming and the research method on practice problems of our own, and never touch the
// student's topic, question, sources, data, code or drafts; we do not act as external mentors.
// Lesson family: assessed coursework where the help boundary is the subject of the page (as the IA page), told
// here through practice investigations unrelated to any student's essay.

const TIMING = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'IB EXTENDED ESSAY', label: 'IB Extended Essay in maths or computer science', blurb: 'The 2027 guide allows help only through the school supervisor. What that leaves: maths, code and research method, practised on other problems.' },
  slug: 'ib-extended-essay-maths-computer-science-mentoring',
  code: 'iee',
  accent: '#5E588E',
  accentRationale: 'IB Extended Essay: a muted indigo (#5E588E), 6.19:1 on #FBF8F2 and 5.33:1 on the deepest paper tint, the only violet-blue among the IB pages so the core-component page reads apart from the subject pages',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'IB Extended Essay in maths or computer science',
  title: 'IB Extended Essay in Maths or Computer Science | Allowed Help',
  description: 'IB Extended Essay in maths or computer science: the 2027 guide on 4,000 words, criteria A to E, the supervisor\'s role, what outside help is banned, what we teach.',
  ogDescription: 'The IB\'s 2027 extended essay guide says students may get help only through their school supervisor. What a maths or computing student can still learn, and where.',
  twitterDescription: 'IB EE in maths or CS: 4,000 words, 40 hours, three reflection sessions, criteria A to E, the one-draft rule. We teach skills, never the essay.',
  pageName: 'IB Extended Essay in Maths or Computer Science',
  webPageDescription: 'An honest guide for IB Diploma students considering an extended essay in mathematics or computer science, built from the IB\'s Extended essay guide for first assessment 2027, with live lessons in mathematics, programming and research method that never touch the student\'s essay.',
  courseDescription: 'Live online teaching of the mathematics and programming that IB Diploma students may want to understand more deeply, with research and mathematical writing habits practised on problems of our own, never on a student\'s extended essay.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'IB Extended Essay',
  navLinks: [
    { href: '#what', label: 'The essay' },
    { href: '#criteria', label: 'Criteria' },
    { href: '#help', label: 'Allowed help' },
    { href: '#practise', label: 'Practice' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'IB Diploma core &middot; Extended essay &middot; First assessment 2027',
  h1: 'IB Extended Essay in maths or computer science: what help is allowed',
  lede: 'The extended essay is the IB Diploma\'s independent research task: a 4,000-word academic essay on a topic the student chooses, written with a school supervisor and assessed by the IB. Students can write it in mathematics, in computer science, or across two subjects. The IB\'s guide for first assessment in 2027 is unusually firm about outside help: students may not receive assistance with "any aspect of the research, writing or proofreading of the essay beyond that which is permitted through their supervisor." So Modern Age Coders does not mentor extended essays. What we do teach, live online, is the mathematics and programming a student may want to understand, and the research habits the guide describes, practised on problems of our own. This page sets out the rules from the guide and where that line falls.',
  secondaryCta: { href: '#help', label: 'What help the guide allows' },
  wa: 'Hello Modern Age Coders, I would like a free lesson in maths or programming for an IB Diploma student.',
  heroNote: 'From the IB\'s Extended essay guide, first assessment 2027 (published February 2025, updated November 2025), read 31 October 2026 &middot; Not connected with the IB',
  spec: [
    ['Length', 'No more than 4,000 words'],
    ['Reflection', 'Up to 500 words, on the RPF'],
    ['Student time', 'About 40 hours'],
    ['Supervision', '3 to 5 hours, with three reflection sessions'],
    ['Pathways', 'Subject-focused or interdisciplinary'],
    ['Criteria', 'A to E'],
    ['Draft feedback', 'One draft, from the supervisor only'],
    ['What we offer', 'Maths and coding lessons, never the essay']
  ],
  capsuleQ: 'Can a tutor help with an IB Extended Essay in maths or computer science?',
  capsule: 'Not with the essay itself. The IB\'s Extended essay guide for first assessment 2027 says that, because the essay is an independent task and a formal assessment component, "students are not allowed to receive assistance with any aspect of the research, writing or proofreading of the essay beyond that which is permitted through their supervisor." The essay is up to 4,000 words, takes about 40 hours, and is supported by a school supervisor through three reflection sessions; the supervisor may comment on one draft only. Modern Age Coders therefore teaches IB students mathematics, programming and research method live online, in a group or 1-on-1, on practice problems of our own, and never works on a student\'s essay.',

  picks: {
    eyebrow: 'What we can teach',
    h2: 'Three courses for an IB student who wants more maths or code',
    lede: 'None of these is extended essay support. They teach mathematics and programming in their own right, which a student can then use independently. Each card opens a syllabus.',
    items: [
      { course: 'ib-mathematics-aa-ai-masterclass', code: 'IBEE / 01', title: 'IB Maths AA and AI', note: 'The Diploma maths courses at SL and HL, for a student who wants their syllabus maths fully secure.' },
      { course: 'ib-diploma-computer-science-course', code: 'IBEE / 02', title: 'IB DP Computer Science', note: 'The new Diploma computer science course, first assessed in 2027, taught live.' },
      { course: 'statistics-probability-maths-course', code: 'IBEE / 03', title: 'Statistics and probability', note: 'Distributions, correlation and testing, for a student who wants to analyse data with confidence.' }
    ]
  },

  sections: [
    {
      id: 'what', tint: 'tint', eyebrow: 'The essay',
      h2: 'What is the IB Extended Essay?',
      lede: 'The guide calls it "a piece of independent research and writing on a topic chosen by the student in consultation with a designated supervisor in the school." It is compulsory for Diploma students and optional for course students.',
      body: [
        { kind: 'table', caption: 'Key features of the extended essay, from the IB Extended essay guide, first assessment 2027', head: ['Feature', 'What the guide says'], rows: [
          ['Length', 'A formal academic essay of no more than 4,000 words'],
          ['Reflective statement', 'No more than 500 words, included on the reflection and progress form (RPF)'],
          ['Student time', 'Approximately 40 hours of work'],
          ['Supervision', 'Recommended at three to five hours, including three mandatory reflection sessions'],
          ['Final session', 'The viva voce, a short concluding interview with the supervisor'],
          ['Pathways', 'Subject-focused (one DP subject) or interdisciplinary (two DP subjects)'],
          ['Assessment', 'External; with theory of knowledge it contributes up to three points to the diploma'],
          ['Minimum', 'A D grade or higher is needed for the diploma to be awarded']
        ] },
        { kind: 'source', html: 'Source: International Baccalaureate, <a class="ag-inline-link" href="https://www.chmsib.com/uploads/9/1/3/5/91354538/ee_guide_2027_onward.pdf" rel="noopener" target="_blank">Extended essay guide, first assessment 2027</a> (an unaltered copy hosted by an IB school; ibo.org refused our requests). The guide is for students submitting from May 2027 onwards; your school\'s coordinator will confirm which guide applies to you. Modern Age Coders is independent of the IB.' },
        { kind: 'two', mt: true,
          leftH3: 'In mathematics',
          left: [
            'The guide describes mainly theoretical essays, exploring an area of mathematics outside the syllabus, and mainly practical ones, using mathematics to investigate an issue or a data set. Many essays mix both. Either way, "it is mandatory to include secondary research, i.e. a review of the literature."',
            'It also warns that "mathematics uses a lot of algebra, so the actual final word count for your extended essay is likely to fall short of 4,000 words." Fewer words is normal, not a weakness.'
          ],
          rightH3: 'In computer science',
          right: [
            'Computer science sits with the sciences in the guide. A science essay "offers the opportunity to investigate and collect primary or secondary data, based on a focused research question", using an accepted, subject-specific method and leading to a valid, evidence-based conclusion.',
            'The guide also lists mathematics and computer science as a possible pairing for the interdisciplinary pathway, for a topic that genuinely needs both lenses.'
          ] }
      ]
    },
    {
      id: 'criteria', tint: 'deep', eyebrow: 'How it is marked',
      h2: 'What are the IB Extended Essay criteria A to E?',
      lede: 'Five criteria. A to D apply to the essay as a whole; the guide says "Criterion E is applied only to the reflective statement on the student\'s RPF."',
      body: [
        { kind: 'table', caption: 'Extended essay assessment criteria, first assessment 2027, from the IB guide', head: ['Criterion', 'Guiding question in the guide', 'Mark levels'], rows: [
          ['A: Framework for the essay', 'Do the research question, research methods and structural conventions provide an effective framework?', '0, then 1 to 2, 3 to 4, 5 to 6'],
          ['B: Knowledge and understanding', 'Does the student demonstrate knowledge and understanding of the subject matter used?', '0, then 1 to 2, 3 to 4, 5 to 6'],
          ['C: Analysis and line of argument', 'Does the student analyse the information and produce a coherent line of argument?', '0, then 1 to 2, 3 to 4, 5 to 6'],
          ['D: Discussion and evaluation', 'Does the student discuss the findings and evaluate the essay?', '0, then 1 to 2, 3 to 4, 5 to 6, 7 to 8'],
          ['E: Reflection', 'Does the student evaluate the effect of the learning experience on them as a learner?', '0, then 1, 2, 3 or 4']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the maths guidance stresses',
          left: [
            'On Criterion B the guide is direct: "Showing your knowledge and clear understanding of the mathematics you use is arguably the most important criterion in a mathematics essay." It also cautions that "an extended essay is not a research paper revealing that you have discovered something profound and new".',
            'On Criterion A it asks for an equation editor and warns against "using inappropriate symbols like * for multiplication and ^ for powers". On research questions it says: "Be careful with research questions that compare two different approaches to a topic."'
          ],
          rightH3: 'What this means for learning, not for the essay',
          right: [
            'If understanding the mathematics is what matters most, the most useful thing a student can do before or alongside the essay is to learn mathematics well. That is ordinary teaching, and it is what we do.',
            'The same goes for writing mathematics properly: line-by-line algebra, correct notation, a typeset equation. These are skills we practise in lessons on our own problems, which a student can then use independently.'
          ] }
      ]
    },
    {
      id: 'help', tint: '', eyebrow: 'The line',
      h2: 'What outside help does the IB allow on the Extended Essay?',
      lede: 'Very little, and only through the school. The guide sets the supervisor as the channel for permitted support, limits feedback to one draft, and treats help beyond that as a possible case of academic misconduct.',
      body: [
        { kind: 'table', caption: 'Help and the extended essay, as the 2027 guide sets it out', head: ['Question', 'What the guide says'], rows: [
          ['Who supports the student?', 'A supervisor allocated by the school, who runs the three reflection sessions and signs the RPF'],
          ['How much draft feedback?', 'The supervisor may "read and comment on one draft only of the essay (no direct editing is permitted)"'],
          ['Proofreading?', '"You must do your own proofreading", including spelling, grammar, formatting and the word count'],
          ['Other help?', 'Students may not receive assistance with any aspect of the research, writing or proofreading beyond what the supervisor permits'],
          ['External mentors?', 'Only "with the agreement of the school", with a signed external mentor form, and a school supervisor still allocated'],
          ['Writing or editing services?', 'Presenting their output as your own "is dishonest and demonstrates a lack of integrity"'],
          ['AI tools?', '"Using artificial intelligence (AI) to write an essay that is then presented as your own is dishonest"; AI material may be a cited resource'],
          ['If a supervisor suspects help?', 'They must tell the coordinator, who must inform the IB; it may be investigated as academic misconduct']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What we do not do',
          left: [
            'We do not suggest, refine or approve a topic or research question. We do not recommend sources, collect or analyse data, write or debug code for an essay, read drafts, comment on structure, proofread, or prepare a student for the viva voce.',
            'We do not act as an external mentor, even where a school might agree to one. That role belongs to institutions the school selects for research access, under the IB\'s form.'
          ],
          rightH3: 'What we do',
          right: [
            'We teach mathematics, statistics and programming as subjects, at and beyond the Diploma syllabus, in ordinary lessons. We teach how mathematical writing works and how to read a research article, using material that has nothing to do with the student\'s essay.',
            'If a student tells us their essay topic, we will not teach to it. We ask students to keep the essay out of our lessons, so that their supervisor and the IB can be confident the work is theirs.'
          ] },
        { kind: 'p', mt: true, html: 'For the same line drawn around the Diploma maths internal assessment, see <a class="ag-inline-link" href="/ib-maths-tuition-online">IB maths tuition</a>, and for the computing course itself, <a class="ag-inline-link" href="/ib-computer-science-online-tuition">IB computer science</a>.' }
      ]
    },
    {
      id: 'practise', tint: 'tint', eyebrow: 'Our lesson family',
      h2: 'How can a student practise research skills without touching the essay?',
      lede: 'By running small investigations of their own on problems that are not, and will not become, their extended essay. The two below are ours, deliberately short and far from typical essay territory; they exist only to practise method.',
      body: [
        { kind: 'ol', items: [
          '<b>Ask a narrow question.</b> Our practice question: in how many ways can a 2 by n strip be tiled with 1 by 2 dominoes? Narrow is good; the guide warns against taking on too much.',
          '<b>Gather cases honestly.</b> Draw the tilings for n = 1, 2, 3, 4: there are 1, 2, 3 and 5 ways. Count each twice.',
          '<b>Read before you claim.</b> Look the pattern up in a textbook or a reputable reference and note where you found it. Practising a short literature note is practising the review of literature the maths guidance makes mandatory.',
          '<b>Explain, do not just state.</b> The last domino column is either one vertical domino, leaving a 2 by (n minus 1) strip, or two horizontal ones, leaving a 2 by (n minus 2) strip. So the count for n is the sum of the counts for n minus 1 and n minus 2: the Fibonacci rule.',
          '<b>Write it properly.</b> Typeset the rule with an equation editor, one step per line, with no * or ^ symbols, and a sentence saying what each symbol means.',
          '<b>Evaluate.</b> Say what the argument covers and what it does not: it counts tilings of a 2-wide strip only. What changes for a 3-wide strip?'
        ] },
        { kind: 'code', label: 'Our practice script: timing two search methods (not an essay)', lang: 'Python', code: 'import random, time\n\ndef linear_search(items, target):\n    for i, x in enumerate(items):\n        if x == target:\n            return i\n    return -1\n\ndef binary_search(items, target):\n    lo, hi = 0, len(items) - 1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if items[mid] == target:\n            return mid\n        if items[mid] < target:\n            lo = mid + 1\n        else:\n            hi = mid - 1\n    return -1\n\nfor n in [1_000, 10_000, 100_000, 1_000_000]:\n    data = list(range(n))\n    targets = [random.randrange(n) for _ in range(200)]\n    for name, fn in [("linear", linear_search), ("binary", binary_search)]:\n        start = time.perf_counter()\n        for t in targets:\n            fn(data, t)\n        per_call = (time.perf_counter() - start) / len(targets)\n        print(n, name, f"{per_call * 1e6:.1f} microseconds")', note: 'Our script, for practising a fair experiment: same data, many trials, one change at a time. The results depend on the machine, which is itself a point to discuss.' },
        { kind: 'two', mt: true,
          leftH3: 'What the computing practice teaches',
          left: [
            'Controlled comparison: the same lists and targets for both methods, many repetitions, and only the input size changed. That mirrors what the guide asks of science essays, controlled variables and a standardised method, on a problem too small to be an essay.',
            'Interpretation: linear search time grows roughly in proportion to n, binary search far more slowly. The student should explain why from the code, not only report the numbers.'
          ],
          rightH3: 'Why practise on someone else\'s problem',
          right: [
            'Because the guide is clear that help with the essay\'s research must come through the supervisor. Practising method on unrelated problems builds the skill without importing anyone else\'s thinking into the student\'s essay.',
            'It also keeps the student honest with themselves: if they can run a small investigation alone, they can run their own essay alone.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Over the Diploma',
    h2: 'Where maths and coding lessons fit in the two years',
    lede: 'Schools set their own extended essay calendars. Our lessons run alongside, on syllabus maths and computing, and never on the essay.',
    table: { caption: 'Our view of useful learning at each stage (ours, not an IB or school timetable)', head: ['Stage', 'What a student might learn with us (ours)', 'What stays with the school'], rows: [
      ['Early in year 1', 'Syllabus maths and programming made secure', 'Choosing a subject and supervisor'],
      ['Later in year 1', 'Mathematical writing and reading research, on our practice problems', 'Topic, research question, first reflection session'],
      ['Through the research', 'Ordinary syllabus lessons only', 'All research, the interim reflection, the one draft'],
      ['Final stages', 'Exam preparation for the subject papers', 'Final version, viva voce, reflective statement'],
      ['Year 2 exams', 'Revision of the syllabus', 'Submission through the school']
    ] },
    left: { h3: 'If you are unsure what is allowed', ps: [
      'Ask your supervisor or the extended essay coordinator before getting any help. The guide puts that judgement with the school.',
      'If in doubt about a lesson with us, leave the essay out of it.'
    ] },
    right: { h3: 'Related reading', ps: [
      'For both IB maths subjects, see <a class="ag-inline-link" href="/ib-maths-tuition-online">IB maths tuition</a>.',
      'For the computing course, see <a class="ag-inline-link" href="/ib-computer-science-online-tuition">IB computer science</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'All related courses',
    h2: 'Maths and programming courses for IB students',
    lede: 'Subject teaching only. Each card opens a syllabus.',
    bands: [
      { num: 'I', h3: 'IB subjects', sub: 'Diploma years', courses: [
        { code: 'UK / IEE / 01', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Maths AA and AI', blurb: 'Both Diploma maths courses, SL and HL.' },
        { code: 'UK / IEE / 02', slug: 'ib-diploma-computer-science-course', title: 'IB DP Computer Science', blurb: 'The new Diploma computing course.' },
        { code: 'UK / IEE / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data analysis done properly.' }
      ] },
      { num: 'II', h3: 'Beyond the syllabus', sub: 'Ages 16 and up', courses: [
        { code: 'UK / IEE / 04', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition mathematics', blurb: 'Number theory, combinatorics and proof.' },
        { code: 'UK / IEE / 05', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and algorithms', blurb: 'Data structures and algorithms for teens.' }
      ] },
      { num: 'III', h3: 'Programming', sub: 'Ages 13 and up', courses: [
        { code: 'UK / IEE / 06', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'From first scripts to real programs.' },
        { code: 'UK / IEE / 07', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Working with data sets in Python.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live online subject lessons, essay left at the door',
    lede: TIMING + ' We teach from India, which has no clock change, so for students in the UK India time is four and a half hours ahead from late March to late October and five and a half the rest of the year; students in other countries book in their own local time.',
    slots: [
      { time: 'After school', l: 'Evening sessions around the DP timetable.' },
      { time: 'Weekend morning', l: 'For students with CAS commitments in the week.' },
      { time: 'Holidays', l: 'Short courses in a topic beyond the syllabus.' }
    ],
    cells: [
      { h3: 'Subjects, not essays', p: 'Maths and computing taught for their own sake.' },
      { h3: 'Practice problems', p: 'Method practised on investigations we wrote, unrelated to any essay.' },
      { h3: 'Class or private', p: 'A class of 15 to 20 at one level, or lessons with your own teacher.' },
      { h3: 'No drafts, no code review', p: 'We never read, edit or debug any part of an extended essay.' },
      { h3: 'Not a mentor', p: 'We do not take the external mentor role under the IB form.' },
      { h3: 'No grade talk', p: 'Essay grades are the IB\'s; we do not predict them.' }
    ]
  },

  projectsH2: 'What our students go on to make',
  projectsLede: 'Projects from our coding and maths classes, made outside any assessed work. More on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'From parents, posted on our Google profile.',

  fees: {
    h2: 'Fees for maths and programming lessons',
    lede: 'A monthly fee in the billing currency for your region, paid each month with nothing locked in. Your first lesson costs nothing.',
    free: ['A first lesson in maths or programming', 'A view of what to learn next', 'Booked with a phone number only'],
    group: ['A class of 15 to 20 at one level', 'One teacher for the course', 'Practice work marked and discussed', 'A certificate at the end'],
    one: ['One student, one teacher', 'A subject or topic of the student\'s choosing', 'Never the student\'s essay']
  },

  faq: {
    eyebrow: 'Extended essay questions',
    h2: 'What students ask about a maths or computer science EE',
    items: [
      { q: 'Can a tutor help with my IB Extended Essay?', a: 'The IB\'s 2027 guide says students may not receive assistance with any aspect of the research, writing or proofreading beyond what their supervisor permits. We therefore teach subjects and method on our own problems and never work on an essay.' },
      { q: 'How long is the IB Extended Essay?', a: 'No more than 4,000 words, with a reflective statement of no more than 500 words on the reflection and progress form. The guide estimates about 40 hours of student work.' },
      { q: 'What are the extended essay criteria?', a: 'A, framework for the essay; B, knowledge and understanding; C, analysis and line of argument; D, discussion and evaluation; and E, reflection, which applies only to the reflective statement.' },
      { q: 'Is a maths extended essay shorter than 4,000 words?', a: 'Often. The guide says mathematics uses a lot of algebra, so the final word count is likely to fall short of 4,000 words.' },
      { q: 'Does a maths extended essay need a literature review?', a: 'Yes. The guide says it is mandatory to include secondary research, meaning a review of the literature, whether the essay is mainly theoretical or mainly practical.' },
      { q: 'Can I write an interdisciplinary extended essay in maths and computer science?', a: 'The guide lists mathematics and computer science among its example pairings for the interdisciplinary pathway. Check with your school, and note that interdisciplinary essays must currently be in English, French or Spanish.' },
      { q: 'How many times can my supervisor read my draft?', a: 'Once. The guide says the supervisor may read and comment on one draft only, with no direct editing, after the interim reflection session and before the final one.' },
      { q: 'Is AI allowed in the IB extended essay?', a: 'The guide says using AI to write an essay presented as your own is dishonest. AI-generated material can be used as a resource if it is checked and properly cited.' },
      { q: 'What grade do I need on the extended essay?', a: 'The guide says a student must achieve a D grade or higher on the extended essay to be awarded the diploma. With theory of knowledge it contributes up to three points.' },
      { q: 'When are your lessons?', a: TIMING + ' UK students see UK times when booking.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for IB Diploma students',
    lede: 'Subject pages and our UK hub.',
    items: [
      { href: '/ib-maths-tuition-online', label: 'IB maths tuition', p: 'AA and AI at SL and HL.' },
      { href: '/ib-computer-science-online-tuition', label: 'IB computer science', p: 'The Diploma computing subject.' },
      { href: '/ib-maths-tutor-uae', label: 'IB maths in the UAE', p: 'For Diploma students in the Gulf.' },
      { href: '/a-level-maths-tuition-online', label: 'A level maths tuition', p: 'The sixth-form alternative.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar', p: 'Maths and coding challenges by month.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The UK hub.' }
    ]
  },

  start: {
    h2: 'Book a free maths or programming lesson',
    lede: 'Tell us which IB subjects you take and what you want to learn. Please do not send us your essay topic or draft; we will not use them.',
    readFirst: 'Reading first? Each <a class="ag-inline-link" href="/courses">course page</a> sets out a syllabus, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a lesson.',
    note: 'WhatsApp is the quickest way to reach us, and free from UK phones. Replies come from India, from a +91 number.',
    formNote: 'No card, no contract. One reply with a lesson time.'
  },

  footer: {
    cols: [
      { h4: 'IB pages', links: [
        { href: '/ib-maths-tuition-online', label: 'IB maths tuition' },
        { href: '/ib-computer-science-online-tuition', label: 'IB computer science' },
        { href: '/ib-maths-tutor-uae', label: 'IB maths, UAE' },
        { href: '/a-level-maths-tuition-online', label: 'A level maths' }
      ] },
      { h4: 'More', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'We teach the subject; the essay stays yours'
  },

  personalityCss: `
.ag-root.ag-iee .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-iee .ag-capsule { border-left-width: 6px; border-radius: 4px; }
.ag-root.ag-iee .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-iee .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-iee .ag-table th:first-child { width: 28%; }
`,

  dossier: {
    curriculumAuthority: 'IB, Extended essay guide, first assessment 2027 (published February 2025, updated May, August and November 2025), (c) IBO 2025, unaltered copy hosted by an IB school (ibo.org returned 403): 4,000-word essay; reflective statement up to 500 words on the RPF; about 40 hours; 3 to 5 hours supervision with three mandatory reflection sessions ending in the viva voce; subject-focused and interdisciplinary pathways; criteria A to E with mark levels (A, B, C to 6; D to 8; E to 4); E only on the reflective statement; up to three points with TOK; D grade minimum; supervisor reads and comments on one draft, no direct editing; no assistance with any aspect of research, writing or proofreading beyond the supervisor; external mentors only with school agreement and a signed form; AI writing dishonest, AI material citable; maths guidance (literature review mandatory, word count often short, Criterion B most important, equation editor, raw data, caution on comparison questions); computer science within sciences; maths and CS as an interdisciplinary pairing; interdisciplinary languages English, French, Spanish.',
    localProject: 'The help boundary is the page. Built from the IB\'s 2027 Extended essay guide, the page explains the essay\'s features, the five criteria and their mark levels, the maths-specific and computer science guidance, and then sets out, row by row, what help the guide permits: one supervisor draft, no outside assistance with research, writing or proofreading, external mentors only through the school, and the AI rule. It states that Modern Age Coders does not mentor extended essays or act as an external mentor, and teaches research method only through practice investigations of our own (domino tilings, a Python search-timing experiment) unrelated to any essay. Lesson family: assessed coursework where the help boundary is the subject of the page.',
    requiredMentions: ['beyond that which is permitted through their supervisor', 'read and comment on one draft only of the essay (no direct editing is permitted)', 'it is mandatory to include secondary research, i.e. a review of the literature.', 'likely to fall short of 4,000 words', 'arguably the most important criterion in a mathematics essay', 'Criterion E is applied only to the reflective statement on the student\'s RPF.', 'Using artificial intelligence (AI) to write an essay that is then presented as your own is dishonest', 'You must do your own proofreading'],
    sources: [
      { claim: 'IB Extended essay guide, first assessment 2027: features, pathways, criteria, supervision, academic integrity, AI, external mentors, mathematics and science guidance.', url: 'https://www.chmsib.com/uploads/9/1/3/5/91354538/ee_guide_2027_onward.pdf' },
      { claim: 'IB DP core: extended essay page (403 to curl; listed for readers, not used as a source).', url: 'https://www.ibo.org/programmes/diploma-programme/curriculum/dp-core/extended-essay/' },
      { claim: 'IB academic integrity page (403 to curl; listed for readers; the page quotes the EE guide\'s own integrity rules instead).', url: 'https://www.ibo.org/programmes/diploma-programme/assessment-and-exams/academic-integrity/' }
    ],
    rejectedClaims: [
      'The guide\'s example topics and research questions for mathematics and computer science: IB copyright and essay-adjacent; not reproduced.',
      'Any offer to suggest topics, read drafts, review code or act as an external mentor: contrary to the guide; not offered.',
      'A total mark for the essay computed by adding criterion maxima: the guide states marks per criterion; no total is printed here.',
      'Grade boundaries and the TOK and EE points matrix values: not reproduced; only the guide\'s "up to three points" and D-grade rule.',
      'Commercial EE guides and tutoring blogs describing the 2027 changes: not used.',
      'Any grade, topic success or diploma promise.'
    ]
  }
};
