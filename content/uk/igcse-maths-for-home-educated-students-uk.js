'use strict';
// IGCSE maths for home-educated students in the UK: sitting GCSE or IGCSE maths as a private candidate (ag- exam guide,
// UK and US exams cluster, row UK030).
// Sources, read raw with curl on 31 October 2026 (copies in
// keyword-research-2026-09/uk-us-gap/src/igcse-maths-for-home-educated-students-uk/):
//  - Department for Education, Elective home education: departmental guidance for parents (April 2019), PDF on gov.uk.
//    Verbatim: 3.6 "you as parents must be prepared to assume full financial responsibility for the child's education,
//    including bearing the cost of any public examinations (which would have to be entered via an external examinations
//    centre, which may be some distance from your home). Some local authorities may provide financial or other assistance
//    to home-educating families for public examinations, but this is discretionary."; 2.11 no legal requirement to "aim for
//    the child to acquire any specific qualifications"; 3.1 "including whether you expect your child to sit public
//    examinations such as GCSEs or not"; 1.2 tutors "or online tuition" ... settings "may well not be regulated in any way
//    so there is no external assurance that they comply with basic standards, such as proper vetting of staff and
//    safeguarding children."; 6.4 "children aged 14-16 who are educated at home for most of the time to attend state-funded
//    FE colleges or sixth form colleges on a part-time basis" (no obligation on the college).
//  - Department for Education, Elective home education: departmental guidance for local authorities (updated 19 August
//    2024 on gov.uk): "Examination costs are also the responsibility of parents if a child does not attend school
//    full-time"; "there is no requirement to enter children for public examinations"; local authority support can include
//    "providing assistance with identifying exam centres willing to accept external candidates".
//  - Ofqual, Ofqual student guide to exams and assessments in 2026, "What you need to know before your exams" (gov.uk):
//    "you will need to register, as soon as possible, at a school or college or other exam centre to sit your exams";
//    "Not all schools and colleges accept entries for private candidates."; JCQ list "updated at the end of each calendar
//    year"; access arrangements "as early as possible"; "GCSE, AS and A level exams will be held between 7 May and 23 June
//    2026. You must be available for the whole of the exam period."; "If you are a private candidate, please discuss which
//    tier you wish to be entered for with the school or college that you have registered with."; tiers: foundation 5 to
//    1, higher 9 to 4 with grade 3 for those who just miss 4; formulae and equation sheets for GCSE mathematics "in 2026
//    and 2027"; private candidates may be assessed by the centre during the year "in line with the published resilience
//    guidance".
//  - Cambridge International, Private candidates page: "Find a centre or approved Cambridge exam provider in your country
//    that accepts private candidates."; "Make any payments to the centre or exam provider."; "Check your statement of entry
//    is correct."; "Take ID to confirm your identity to each exam."; "Collect your results from the centre or exam
//    provider."; centres "Make exam entries for private candidates" and "Pay fees to Cambridge".
//  - Cambridge IGCSE Mathematics 0580 syllabus for 2025 to 2027: "Private candidates can enter for this syllabus."; four
//    written papers, externally set and marked by Cambridge; June and November series.
//  - Pearson Edexcel International GCSE Mathematics A 4MA1 specification, Issue 2: two written papers "set and marked by
//    Pearson"; "Availability: January and June"; "Both examinations must be taken in the same series".
//  - AQA A-level Mathematics 7357 specification, 5.8: "A private candidate may be self-taught, home schooled or have
//    private tuition"; "They must be based in the UK." (quoted as AQA's rule for that specification only).
// Not reachable: www.jcq.org.uk returned HTTP 403 to curl on 31 October 2026; not retried. JCQ's private-candidate list is
// described from Ofqual's page and linked, not quoted. Pearson's private-candidate support page returned "Page not found".
// Our own material, labelled on the page: the step list, the centre checklist, the twelve-month study plan, and the
// six-question tier check (answers checked in Python). No fee of any kind is printed: centres set their own.
// Spine: find the centre before you choose the syllabus. The exam centre, not the family, makes the entry, so the
// series, the board and even the tier follow from which centre will take a private candidate. Lesson family: a full
// course taught at home to an external deadline.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'PRIVATE CANDIDATES', blurb: 'For home-educated teenagers sitting GCSE or IGCSE maths: find a centre first, because the centre makes the entry and sets its own fees and rules.' },
  slug: 'igcse-maths-for-home-educated-students-uk',
  code: 'ihe',
  accent: '#86393F',
  accentRationale: 'Home-educated private candidates: a muted claret #86393F from the cluster allocation, 7.42:1 on #FBF8F2 and 6.38:1 on the deepest paper tint, softer than the oxblood of the 0606 page',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'IGCSE maths for home-educated students',
  title: 'IGCSE Maths for Home-Educated Students: Private Candidates',
  description: 'Sitting IGCSE or GCSE maths as a private candidate in the UK: how home-educated students find an exam centre, choose a syllabus and prepare, from official guidance.',
  ogDescription: 'A practical guide for home-educating families: registering as a private candidate, finding a centre that accepts one, choosing between IGCSE and GCSE maths, and preparing at home.',
  twitterDescription: 'Home-educated and sitting maths as a private candidate? Find the centre first, then the syllabus. What the official guidance says.',
  pageName: 'IGCSE Maths for Home-Educated Students in the UK',
  webPageDescription: 'A guide for UK home-educating families entering GCSE or IGCSE maths as private candidates, built from Department for Education, Ofqual and exam board guidance, with live online maths teaching.',
  courseDescription: 'Live online maths teaching for home-educated teenagers preparing as private candidates for Cambridge IGCSE 0580, Edexcel International GCSE 4MA1 or GCSE maths.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'IGCSE maths for home-educated students',
  navLinks: [
    { href: '#rules', label: 'The rules' },
    { href: '#register', label: 'Registering' },
    { href: '#syllabus', label: 'Which syllabus' },
    { href: '#plan', label: 'A study plan' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Home education &middot; Private candidates &middot; Ages 14 to 18 and adults',
  h1: 'IGCSE maths for home-educated students in the UK',
  lede: 'A home-educated teenager can sit GCSE or IGCSE maths, but not at home and not through the family. The entry is made by an exam centre that agrees to take a private candidate, and that centre sets its own fees, deadlines and rules. That single fact shapes everything else: the series you can sit, the board you can use and, for GCSE, the tier. This page sets out what the Department for Education, Ofqual and the exam boards say, the steps to register, how the main maths options compare for a private candidate, and how we teach the course itself live online.',
  secondaryCta: { href: '#register', label: 'How to register' },
  wa: 'Hello Modern Age Coders, my child is home-educated and I would like a free first maths class for IGCSE or GCSE as a private candidate.',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students &middot; We teach the course; exam centres make the entries',
  spec: [
    ['Who this is for', 'Home-educated teenagers and adult private candidates'],
    ['Entry made by', 'An exam centre that accepts private candidates'],
    ['Exam costs', 'Paid by the family to the centre'],
    ['Options covered', 'Cambridge IGCSE 0580, Edexcel 4MA1, GCSE maths'],
    ['Assessment', 'Written exams only for 0580 and 4MA1'],
    ['Our part', 'Teaching the full course, live online'],
    ['Formats', 'Group of 15 to 20, or 1-on-1'],
    ['Start', 'First class free']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Yes, home-educated students in the UK can sit IGCSE or GCSE maths as private candidates. The family registers with a school, college or exam centre that accepts private candidates, and the centre makes the entry and charges its own fee; Ofqual advises registering as soon as possible because not all centres accept private entries. Cambridge IGCSE 0580 and Edexcel International GCSE 4MA1 are assessed by written exams only. Modern Age Coders teaches the maths course live online, in a group of 15 to 20 or 1-on-1, and the first class is free.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for a home-educated maths candidate',
    lede: 'Pick by the qualification the centre will enter. Each card opens the full syllabus.',
    items: [
      { course: 'igcse-mathematics-mastery', code: 'HE / 01', title: 'IGCSE Mathematics', note: 'Cambridge 0580 or Edexcel 4MA1, taught from the start of the course to the exam series.' },
      { course: 'gcse-mathematics-mastery', code: 'HE / 02', title: 'GCSE Mathematics', note: 'For families whose centre enters GCSE maths in the summer series.' },
      { course: 'gcse-maths-resit-course', code: 'HE / 03', title: 'GCSE Maths Resit', note: 'For older students and adults sitting maths again as private candidates.' }
    ]
  },

  sections: [
    {
      id: 'rules', tint: 'tint', eyebrow: 'The rules',
      h2: 'Can a home-educated child sit IGCSE or GCSE maths?',
      lede: 'Yes. Nothing requires it, nothing prevents it, and the family carries the cost and the organising.',
      body: [
        { kind: 'p', html: 'In England, the Department for Education\'s guidance for parents lists among the things parents are not legally required to do: "aim for the child to acquire any specific qualifications". Its guidance for local authorities adds that "there is no requirement to enter children for public examinations." So sitting maths is a choice. The same guidance for parents asks families to think early about "whether you expect your child to sit public examinations such as GCSEs or not", because the decision affects what is taught from Year 9 onwards.' },
        { kind: 'table', mt: true, caption: 'What the Department for Education says about exams for home-educated children (England)', head: ['Point', 'The guidance, quoted or closely restated'], rows: [
          ['Who pays', 'Parents must be prepared to bear "the cost of any public examinations"'],
          ['How the entry is made', 'Through an outside examinations centre, which the guidance notes could be a long way from home'],
          ['Local authority help with costs', 'Some councils may offer money or other help towards exams, at their own discretion, so ask yours directly'],
          ['Local authority help finding a centre', 'Support can include "providing assistance with identifying exam centres willing to accept external candidates"'],
          ['Part-time college', 'Children aged 14 to 16 educated mainly at home may attend state-funded FE or sixth form colleges part-time for specific subjects, if a college agrees'],
          ['Tutors and online tuition', 'Optional; the guidance reminds parents these settings are often unregulated']
        ] },
        { kind: 'source', html: 'Sources: Department for Education, <a class="ag-inline-link" href="https://www.gov.uk/government/publications/elective-home-education" rel="noopener" target="_blank">Elective home education</a> guidance for parents (April 2019) and for local authorities (updated August 2024). This guidance covers England; families in Scotland, Wales and Northern Ireland should check their own government\'s guidance.' },
        { kind: 'p', mt: true, html: 'That last row deserves a plain answer from us. Because online tutors sit outside school inspection, it is reasonable to ask any provider, ourselves included, how teachers are checked and how lessons are supervised. Our classes are live online lessons with a named teacher, and we are glad to answer those questions before you book.' }
      ]
    },
    {
      id: 'register', tint: 'deep', eyebrow: 'Registering',
      h2: 'How do you register as a private candidate for maths?',
      lede: 'Through a centre, as early as you can. Ofqual\'s 2026 guide says to register "as soon as possible".',
      body: [
        { kind: 'p', html: 'Ofqual\'s student guide for 2026 explains the route: "If you are a private candidate (so you do not go to school or college), you will need to register, as soon as possible, at a school or college or other exam centre to sit your exams." It adds a warning every home-educating family meets: "Not all schools and colleges accept entries for private candidates." For GCSE, AS and A level, Ofqual points to a list of centres that accept private candidates published by the Joint Council for Qualifications, which "is updated at the end of each calendar year."' },
        { kind: 'ol', mt: true, items: [
          'Decide the target year and the qualification you would like, but hold the choice loosely until a centre confirms what it can enter.',
          'Find centres near you that accept private candidates: the <a class="ag-inline-link" href="https://www.jcq.org.uk/private-candidates/" rel="noopener" target="_blank">JCQ list</a> for GCSE, Cambridge\'s private candidate pages for Cambridge IGCSE, and your local authority, which may help identify centres.',
          'Contact several centres early, well before the entry deadline for your series. Ask what they enter, for which series, and what they charge. Every centre sets its own fees and rules, and they vary.',
          'If your child needs access arrangements, such as extra time, raise it at this first contact. Ofqual advises discussing them with the centre "as early as possible", for example at the point of asking for the entry.',
          'Agree the exact entry: board, syllabus code and, for GCSE, the tier. Ofqual says private candidates should discuss the tier "with the school or college that you have registered with."',
          'Pay the centre, then check the statement of entry when it arrives. Cambridge lists "Check your statement of entry is correct" among a private candidate\'s responsibilities.',
          'On each exam day bring photo identification. Cambridge\'s list includes "Take ID to confirm your identity to each exam." Results and certificates are collected from the centre.'
        ] },
        { kind: 'source', html: 'Sources: Ofqual, <a class="ag-inline-link" href="https://www.gov.uk/government/publications/ofqual-student-guide-to-exams-and-assessments-in-2026/what-you-need-to-know-before-your-exams" rel="noopener" target="_blank">What you need to know before your exams</a> (2026); Cambridge International, <a class="ag-inline-link" href="https://www.cambridgeinternational.org/why-choose-us/find-a-cambridge-school/private-candidates/" rel="noopener" target="_blank">Private candidates</a>. The numbered steps are our summary of that guidance. We could not read the JCQ site directly when writing this page, so the list is described from Ofqual\'s page.' },
        { kind: 'table', mt: true, caption: 'Who does what, from Cambridge\'s private candidate responsibilities', head: ['The private candidate', 'The centre'], rows: [
          ['Finds a centre that accepts private candidates', 'Checks the syllabus is available to private candidates'],
          ['Registers and makes any payments to the centre', 'Makes the exam entry and pays fees to the board'],
          ['Checks the statement of entry', 'Issues the statement of entry and the timetable'],
          ['Raises access arrangement needs', 'Requests access arrangements from the board'],
          ['Takes ID to every exam', 'Checks identity before each exam'],
          ['Collects results and certificates', 'Issues results and certificates']
        ] }
      ]
    },
    {
      id: 'syllabus', tint: '', eyebrow: 'Which syllabus',
      h2: 'Is IGCSE or GCSE maths better for a private candidate?',
      lede: 'Neither is better in general. The deciding questions are which one a nearby centre will enter, and in which series.',
      body: [
        { kind: 'p', html: 'Families often hear that IGCSE suits home education because it has no coursework. For maths that is true of Cambridge IGCSE 0580, whose four papers are written exams set and marked by Cambridge, and of Edexcel International GCSE 4MA1, whose two papers are "set and marked by Pearson". The bigger practical differences are the series on offer and the calculator.' },
        { kind: 'table', mt: true, caption: 'Three maths options compared for a private candidate, from each board\'s documents and Ofqual', head: ['', 'Cambridge IGCSE 0580', 'Edexcel International GCSE 4MA1', 'GCSE maths (England)'], rows: [
          ['Exam series', 'June and November', 'January and June', 'Summer; 2026 exams ran from 7 May to 23 June'],
          ['Papers', 'Two per candidate, all written', 'Two per candidate, both written, same series', 'Set by the board the centre uses'],
          ['Tiers and grades', 'Core C to G, Extended A* to E', 'Foundation 5 to 1, Higher 9 to 4 with 3 allowed', 'Foundation 5 to 1, Higher 9 to 4 with 3 possible'],
          ['Calculator', 'Banned on one of the two papers', 'Allowed on both papers', 'Depends on the paper'],
          ['Private candidates', '"Private candidates can enter for this syllabus."', 'Entered through a Pearson centre', 'Entered through a centre on the JCQ list or similar'],
          ['UK regulation', 'Compared with GCSE by UK ENIC, per Cambridge', 'Not regulated by any UK regulatory body, per Pearson', 'Regulated by Ofqual']
        ] },
        { kind: 'source', html: 'Sources: Cambridge IGCSE Mathematics 0580 syllabus for 2025 to 2027; Pearson Edexcel International GCSE Mathematics A specification, Issue 2; Ofqual student guide for 2026. Pearson\'s own private-candidate page could not be found when we checked, so ask the centre about Pearson entries directly.' },
        { kind: 'two', mt: true,
          leftH3: 'When IGCSE tends to fit',
          left: [
            'A November or January series gives a second chance in the same school year, or an earlier sitting for a pupil who is ready. That flexibility matters when the family, not a school, sets the pace.',
            'Which boards a given centre enters is for that centre to say, so confirm the code before any teaching starts.'
          ],
          rightH3: 'When GCSE tends to fit',
          right: [
            'If a sixth form or college the student hopes to join asks for a regulated GCSE, or if the nearest centre only enters GCSE, the decision is made for you.',
            'Ofqual confirms that GCSE maths students sitting in 2026 and 2027 receive formulae and equation sheets, which helps a student working without a teacher every day.'
          ] },
        { kind: 'p', mt: true, html: 'One rule to avoid wasting an entry: Pearson warns that colleges, universities and employers are very likely to count two qualifications in the same subject as one. Sitting both GCSE and IGCSE maths rarely adds anything. If a strong student wants a second maths qualification, a different subject such as Cambridge Additional Mathematics 0606 or Pearson\'s Further Pure Mathematics is the usual choice.' }
      ]
    },
    {
      id: 'centre', tint: 'tint', eyebrow: 'Talking to a centre',
      h2: 'What should you ask an exam centre before booking?',
      lede: 'Our checklist, built from the questions families most often wish they had asked first.',
      body: [
        { kind: 'table', caption: 'Questions to put to an exam centre (our checklist)', head: ['Ask', 'Why it matters'], rows: [
          ['Which maths qualifications and codes do you enter for private candidates?', 'Decides which syllabus we teach and which past papers to use'],
          ['Which series: June, November, January?', 'Sets the deadline the study plan works back from'],
          ['When is your entry deadline, and is there a late-entry charge?', 'Centre deadlines fall well before the exams themselves'],
          ['What is your fee, and what does it cover?', 'Fees vary between centres; we do not print any'],
          ['Can you support access arrangements, and what evidence do you need?', 'Arrangements must be agreed before the exam'],
          ['For GCSE, how is the tier agreed?', 'The tier changes which grades are possible'],
          ['Where and when are the exams sat, and what ID is needed?', 'The nearest willing centre may be a long journey away'],
          ['If exams were disrupted, would you assess private candidates?', 'Ofqual says a centre may agree to assess them during the year']
        ] },
        { kind: 'p', mt: true, html: 'The last question comes from Ofqual\'s 2026 guide, which says a private candidate who has registered "might want that school or college to assess you during the academic year, alongside their students, in line with the published resilience guidance." The centre may agree, and would need to make sure any assessment only covers content the candidate has studied. Ofqual also says that if national exams could not take place, the Department for Education would explore ways to encourage schools and colleges to work with private candidates.' },
        { kind: 'p', mt: true, html: 'Families looking at A level maths later should know that board rules differ. AQA\'s A level Mathematics 7357 specification, for example, accepts private candidates who are self-taught, home schooled or privately tutored, but only if they live in the UK. Check the rule for the exact specification before relying on it.' }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'A study plan',
      h2: 'How long does IGCSE maths take to study at home?',
      lede: 'Cambridge designs IGCSE syllabuses around 130 guided learning hours. Here is how we spread that over a year for a home-educated student.',
      body: [
        { kind: 'p', html: 'The 0580 syllabus says Cambridge designs IGCSE syllabuses "to require about 130 guided learning hours for each subject", and adds that this "is for guidance only". A home-educated student starting from secure Key Stage 3 maths can cover the course in about a year with steady weekly teaching and independent practice. One starting with gaps needs longer, and we say so at the first class.' },
        { kind: 'table', mt: true, caption: 'A twelve-month plan for a June IGCSE sitting (our plan, adjusted per student)', head: ['Months', 'Focus', 'Evidence before moving on'], rows: [
          ['1 to 2', 'Number by hand, fractions, percentages, ratio, standard form', 'Our tier check below answered accurately without a calculator'],
          ['3 to 5', 'Algebra: equations, inequalities, sequences, graphs, rearranging', 'Unprompted solving of mixed equations'],
          ['6 to 8', 'Geometry, mensuration, trigonometry, vectors and transformations', 'Topic papers at the likely tier'],
          ['9 to 10', 'Probability and statistics, then the tier decision with the centre', 'Timed mixed papers at both tiers'],
          ['11 to 12', 'Full papers under exam timing, with and without a calculator', 'Two full papers a fortnight, reviewed line by line']
        ] },
        { kind: 'table', mt: true, caption: 'A six-question tier check, written by us (answers checked in Python)', head: ['#', 'Our question', 'Answer', 'What it tells us'], rows: [
          ['1', 'Work out 3/5 of 45 without a calculator.', '27', 'Basic fraction fluency'],
          ['2', 'Solve 4(x &minus; 3) = 2x + 6.', 'x = 9', 'Equation solving with brackets'],
          ['3', 'Expand and simplify (x + 5)(x &minus; 2).', 'x<sup>2</sup> + 3x &minus; 10', 'Algebraic manipulation'],
          ['4', 'Factorise x<sup>2</sup> &minus; 7x + 12.', '(x &minus; 3)(x &minus; 4)', 'Readiness for the higher tier'],
          ['5', 'Make t the subject of v = u + at.', 't = (v &minus; u)/a', 'Rearranging formulae'],
          ['6', 'Simplify (2x<sup>3</sup>)<sup>2</sup>.', '4x<sup>6</sup>', 'Index laws']
        ] },
        { kind: 'p', mt: true, html: 'A student who gets all six right quickly is usually ready to aim at Extended 0580 or Higher 4MA1. A student who stumbles on questions 4 to 6 can still reach a good result, but may need either more time or a Core or Foundation entry. These are our questions, not board questions; past papers come from the board through the centre or the board\'s own public pages.' }
      ]
    },
    {
      id: 'teach', tint: '', eyebrow: 'Our part',
      h2: 'What do we do for a home-educated maths candidate?',
      lede: 'We teach the course. The centre runs the exam, and the family stays in charge of the plan.',
      body: [
        { kind: 'two', leftH3: 'What we provide',
          left: [
            'Live online teaching of the whole syllabus the centre will enter: Cambridge 0580, Edexcel 4MA1 or GCSE maths, at the right tier, with homework set each week and gone through in class.',
            'A frank view of tier, timing and readiness that families can take to a centre when the entry is agreed.'
          ],
          rightH3: 'What we do not do',
          right: [
            'We are not an exam centre. We cannot enter candidates, book exams or invigilate, and we have no link with any board or centre.',
            'We do not quote centre fees, which centres set themselves, and we do not promise grades.'
          ] },
        { kind: 'p', mt: true, html: 'For computing alongside maths, our <a class="ag-inline-link" href="/coding-for-home-educated-children-uk">coding for home-educated children</a> page covers the same families. For the syllabus detail, see <a class="ag-inline-link" href="/igcse-maths-tuition-online">IGCSE maths tuition online</a>; for GCSE structure, <a class="ag-inline-link" href="/gcse-maths-foundation-vs-higher">Foundation against Higher</a>; and for older candidates, <a class="ag-inline-link" href="/gcse-maths-resit-explained">GCSE maths resits explained</a> and <a class="ag-inline-link" href="/functional-skills-maths-vs-gcse-maths">Functional Skills against GCSE maths</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs from a decision to an exam desk',
    lede: 'Two rungs are about paperwork with a centre and two are about maths. Both halves run at the same time.',
    table: { caption: 'What should be true at each stage for a private maths candidate', head: ['Rung', 'Typical timing', 'What should be true'], rows: [
      ['1. A centre agreed', 'At least a year before the series, where possible', 'A centre has confirmed it will enter the student, for which qualification and series'],
      ['2. Foundations secure', 'First months of study', 'Number and algebra done accurately by hand'],
      ['3. Entry confirmed', 'Before the centre\'s deadline', 'Board, code and tier agreed, fee paid, statement of entry checked'],
      ['4. Exam ready', 'Final term', 'Full papers at the right tier completed under timing']
    ] },
    left: { h3: 'Rung one comes first', ps: [
      'Without a centre there is no entry, whatever the maths. That is why we put it before the teaching.',
      'Families who want computing too can look at the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Rung three has a deadline', ps: [
      'Centre deadlines arrive months before exam day. We remind families when the tier decision is due.',
      'Classes carry on through the series, at a lighter pace.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses home-educating families use',
    lede: 'Grouped by stage. A free first class shows the right starting point.',
    bands: [
      { num: 'I', h3: 'Exam courses', sub: 'IGCSE and GCSE', courses: [
        { code: 'UK / HE1 / 01', slug: 'igcse-mathematics-mastery', title: 'IGCSE mathematics', blurb: 'Cambridge 0580 or Edexcel 4MA1, taught from the beginning.' },
        { code: 'UK / HE1 / 02', slug: 'gcse-mathematics-mastery', title: 'GCSE mathematics', blurb: 'Foundation and Higher for a summer GCSE entry.' },
        { code: 'UK / HE1 / 03', slug: 'gcse-maths-resit-course', title: 'GCSE maths resit', blurb: 'For older students and adults sitting maths again.' }
      ] },
      { num: 'II', h3: 'Before the exam course', sub: 'Building the base', courses: [
        { code: 'UK / HE2 / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Lower secondary maths', blurb: 'Key Stage 3 maths for students aged 11 to 14.' },
        { code: 'UK / HE2 / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'The algebra that decides the tier.' },
        { code: 'UK / HE2 / 03', slug: 'functional-skills-maths-course', title: 'Functional Skills maths', blurb: 'A practical alternative for some older learners.' }
      ] },
      { num: 'III', h3: 'After the exam', sub: 'For confident students', courses: [
        { code: 'UK / HE3 / 01', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'The next qualification, also open to private candidates.' },
        { code: 'UK / HE3 / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Useful for science and social science subjects.' },
        { code: 'UK / HE3 / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Maths and programming learned together at home.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Built around a home timetable',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Home-educated students often take daytime weekday classes, and our teachers in India can run them because India is ahead of the UK all year; every time is given in UK time.',
    slots: [
      { time: 'Weekday morning', l: 'Popular with home-educated students.' },
      { time: 'Weekday afternoon', l: 'Fits round other home subjects.' },
      { time: 'Weekend morning', l: 'For families who teach on weekdays.' }
    ],
    cells: [
      { h3: 'Syllabus by centre', p: 'We teach the exact code the centre will enter, from the start.' },
      { h3: 'Weekly homework', p: 'Set each week and reviewed in class, so parents are not the only check.' },
      { h3: 'Tier evidence', p: 'Regular checks that give families evidence for the tier conversation.' },
      { h3: 'Deadline reminders', p: 'Prompts as the centre\'s entry deadline approaches.' },
      { h3: 'Exam habits', p: 'Working shown, timing practised and instructions read as instructions.' },
      { h3: 'Group or 1-on-1', p: 'A group of 15 to 20, or one teacher for one student.' }
    ]
  },

  projectsH2: 'Student work from our classes',
  projectsLede: 'Made in ordinary lessons, not assessed for any qualification. There is more in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' reviews from Google, left as written.',

  fees: {
    h2: 'Fees for our maths classes',
    lede: 'These are our teaching fees only: one monthly fee in US dollars for families outside India. Exam entry fees are separate and are set and charged by your exam centre. The first class is free.',
    free: ['A first class with our tier check', 'A plain view of timing and tier', 'Only a phone number to book'],
    group: ['A group of 15 to 20 students', 'The same teacher through the course', 'Weekly homework, reviewed in class', 'Daytime weekday slots available'],
    one: ['One teacher for one student', 'Paced to the centre\'s series', 'Suits a student starting late or switching board']
  },

  faq: {
    eyebrow: 'Questions from home-educating families',
    h2: 'What families ask about private candidate maths',
    items: [
      { q: 'Can home-educated children sit GCSE or IGCSE maths?', a: 'Yes. They sit as private candidates through a school, college or exam centre that accepts them. There is no legal requirement in England to sit exams, so it is the family\'s choice.' },
      { q: 'How do I find a private candidate GCSE centre near me?', a: 'Ofqual points families to a JCQ list of schools and colleges that accept private candidates, updated at the end of each calendar year. For Cambridge IGCSE, use Cambridge\'s private candidate pages, and ask your local authority, which may help identify centres.' },
      { q: 'How much does it cost to sit GCSE maths as a private candidate?', a: 'Each exam centre sets its own fee, and fees vary, so ask several centres. The Department for Education says parents bear the cost of exams, though some local authorities may help at their discretion.' },
      { q: 'When should I register as a private candidate?', a: 'As early as possible. Ofqual says private candidates should register as soon as possible, and centres set entry deadlines well before the exams. In our experience, contacting centres a year ahead leaves the most choice.' },
      { q: 'Is IGCSE maths easier for home-educated students?', a: 'Not easier, but often more practical. Cambridge 0580 and Edexcel 4MA1 are assessed by written exams only, and they offer November or January series as well as June, which gives more flexibility on timing.' },
      { q: 'Who decides the tier for a private candidate?', a: 'The family and the centre together. Ofqual advises private candidates to discuss the tier with the school or college they have registered with, and to know the tier before preparing.' },
      { q: 'Can a private candidate get extra time?', a: 'Access arrangements are possible, but they must be raised with the centre as early as possible, ideally when asking for the entry. The centre requests them from the board.' },
      { q: 'Should my child sit both GCSE and IGCSE maths?', a: 'Usually not. Pearson warns that colleges, universities and employers are very likely to count two qualifications in the same subject as one. A different second subject, such as Additional or Further Pure maths, adds more.' },
      { q: 'When are your classes for home-educated students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Daytime weekday classes are available, all shown in UK time.' },
      { q: 'Are you an exam centre?', a: 'No. We teach the course live online and have no connection with any exam board or centre. The family registers with a centre, which makes the entry and runs the exams.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for home-educating families',
    lede: 'Computing at home, the syllabus detail, and routes for older candidates.',
    items: [
      { href: '/coding-for-home-educated-children-uk', label: 'Coding for home-educated children', p: 'Computing and coding for the same families, from primary age up.' },
      { href: '/igcse-maths-tuition-online', label: 'IGCSE maths tuition online', p: 'Cambridge and Edexcel IGCSE maths, tier by tier.' },
      { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition online', p: 'For families whose centre enters GCSE.' },
      { href: '/gcse-maths-resit-explained', label: 'GCSE maths resits explained', p: 'For older students and adults sitting maths again.' },
      { href: '/functional-skills-maths-vs-gcse-maths', label: 'Functional Skills or GCSE maths', p: 'A comparison for learners weighing a practical route.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Every UK page on this site, in one list.' }
    ]
  },

  start: {
    h2: 'Book a free first maths class',
    lede: 'Leave a number and we will call at a UK time that suits your home timetable. The class includes our tier check, and we talk through the centre and series you are considering.',
    readFirst: 'Prefer to read first? Each <a class="ag-inline-link" href="/courses">course page</a> lists its syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains a class, and <a class="ag-inline-link" href="/student-labs">student labs</a> shows students\' work.',
    note: 'WhatsApp is the quickest way to reach us, and messaging from a UK phone is free. We reply from India, from a +91 number.',
    formNote: 'No payment and no obligation; we reply with one suggested time.'
  },

  footer: {
    cols: [
      { h4: 'Home education', links: [
        { href: '/coding-for-home-educated-children-uk', label: 'Coding at home' },
        { href: '/igcse-maths-tuition-online', label: 'IGCSE maths tuition' },
        { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' }
      ] },
      { h4: 'Older candidates', links: [
        { href: '/gcse-maths-resit-explained', label: 'GCSE resits' },
        { href: '/functional-skills-maths-vs-gcse-maths', label: 'Functional Skills or GCSE' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Maths for private candidates, taught live in UK hours'
  },

  personalityCss: `
.ag-root.ag-ihe .ag-hero h1 { letter-spacing: -0.016em; font-weight: 680; }
.ag-root.ag-ihe .ag-capsule { border-left-width: 5px; border-radius: 6px; }
.ag-root.ag-ihe .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-ihe .ag-table caption { text-align: left; font-weight: 620; }
.ag-root.ag-ihe .ag-table th:first-child { width: 30%; }
.ag-root.ag-ihe .ag-steps li { padding-bottom: 9px; }
`,

  dossier: {
    curriculumAuthority: 'Department for Education, Elective home education guidance for parents (April 2019) and for local authorities (updated August 2024): parents bear exam costs, entries via an external examinations centre, local authority help discretionary and may include identifying centres, no requirement to sit exams. Ofqual student guide to exams and assessments in 2026: register as soon as possible, not all centres accept private candidates, JCQ list updated each calendar year, tier agreed with the centre, access arrangements early, 2026 summer dates, formulae sheets in 2026 and 2027, resilience assessment. Cambridge International private candidate responsibilities; Cambridge 0580 and Pearson 4MA1 assessment and series; AQA 7357 private candidate rule.',
    localProject: 'Find the centre before choosing the syllabus. The page sets out what the Department for Education and Ofqual say about home-educated candidates, gives seven registration steps and a who-does-what table from Cambridge\'s responsibilities list, compares Cambridge 0580, Edexcel 4MA1 and GCSE maths for a private candidate (series, papers, tiers, calculator, regulation), gives our checklist of questions for an exam centre, a twelve-month study plan built on Cambridge\'s 130 guided learning hours, and a six-question tier check written by us. No exam fee is printed.',
    requiredMentions: ['at their own discretion, so ask yours directly', 'could be a long way from home', 'identifying exam centres willing to accept external candidates', 'Not all schools and colleges accept entries for private candidates.', 'updated at the end of each calendar year', 'Check your statement of entry is correct', 'Take ID to confirm your identity to each exam.', 'but only if they live in the UK', 'Every centre sets its own fees and rules', 'these settings are often unregulated'],
    sources: [
      { claim: 'Department for Education, Elective home education guidance for parents and for local authorities: exam costs, external centres, discretionary help, no requirement to sit exams, part-time college, unregulated tuition settings.', url: 'https://www.gov.uk/government/publications/elective-home-education' },
      { claim: 'Ofqual student guide to exams and assessments in 2026: private candidate registration, JCQ list, tiers, access arrangements, 2026 dates, formulae sheets and resilience assessment.', url: 'https://www.gov.uk/government/publications/ofqual-student-guide-to-exams-and-assessments-in-2026/what-you-need-to-know-before-your-exams' },
      { claim: 'Cambridge International private candidates page: responsibilities of private candidates and of centres.', url: 'https://www.cambridgeinternational.org/why-choose-us/find-a-cambridge-school/private-candidates/' },
      { claim: 'Cambridge IGCSE Mathematics 0580 syllabus for 2025 to 2027: private candidates can enter, written papers, June and November series, 130 guided learning hours.', url: 'https://www.cambridgeinternational.org/Images/662466-2025-2027-syllabus.pdf' },
      { claim: 'Pearson Edexcel International GCSE Mathematics A specification: papers set and marked by Pearson, January and June, same-series rule, regulation status, same-subject warning.', url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Mathematics%20A/2016/Specification%20and%20sample%20assessments/international-gcse-in-mathematics-spec-a.pdf' },
      { claim: 'AQA A-level Mathematics 7357 specification, section 5.8: private candidates must be based in the UK.', url: 'https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357' }
    ],
    rejectedClaims: [
      'Any exam centre fee or typical cost: centres set their own fees, so none is printed anywhere on the page.',
      'Quotations from JCQ: www.jcq.org.uk returned HTTP 403 to curl on 31 October 2026; not retried or worked around. The JCQ list is described from Ofqual\'s page and linked.',
      'Pearson\'s private-candidate guidance: the support page returned "Page not found" on 31 October 2026; the page tells families to ask centres about Pearson entries.',
      'Rules for Scotland, Wales and Northern Ireland: not read; the page says the Department for Education guidance covers England.',
      'Entry deadlines for any centre or series: set by centres, not printed.',
      'That GCSE maths has no coursework: not read at a primary source for this build, so the no-coursework point is made only for 0580 and 4MA1.',
      'Any claim that we are an exam centre, can make entries, or can guarantee grades: all declined on the page.'
    ]
  }
};
