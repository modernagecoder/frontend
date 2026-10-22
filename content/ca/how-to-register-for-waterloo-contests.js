'use strict';
// How to register for Waterloo (CEMC) contests (ag- contest door; Canada cluster Plan 2, row 54).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, read raw on 22 October 2026 (copies in keyword-research-2026-09/ca/src/cemc/ and
// src-pilots/how-to-register-for-waterloo-contests/):
//  - cemc.uwaterloo.ca/contests/how-contests-work (how-contests-work.txt): "the first step is to talk to a math or
//    computer science educator at your school"; "It is not possible for students to individually register for a
//    contest" and "all students must participate through their school." (the em dash between them is not
//    reproduced); "If your own school is not participating, students can look for another local school that will
//    allow them to join as a participant."; "Students cannot register for contests on their own. They must be
//    registered by their school."; "only educators are permitted to request a CEMC School Account and order
//    contests"; "Account creation is not automatic and can take up to three weeks to be manually reviewed."; "the
//    Principal or Head of Math must submit a new school application"; "a nine-digit CEMC School Number and a
//    confidential password"; "School accounts are not individual educator accounts."; "The CEMC reserves the right to
//    decline any school application."; working ahead "may choose to write the contest for the more advanced grade but
//    cannot write a contest that is below their official grade level"; one contest per grouping (the five groupings);
//    "Contests may not be taken remotely or without supervision."; "Participants may only write the contest at the
//    school which ordered the contest."; "Participants must be supervised in-person during the entirety of the contest
//    writing."; honour-roll consent "unless they choose to opt out"; integrity: disqualified, no invitational
//    workshops, "any current or future offers of admission to the University of Waterloo may be revoked".
//  - cemc2.math.uwaterloo.ca New School Application (new-school-application.txt): "can take approximately three weeks
//    to be manually reviewed"; "We cannot guarantee that an application will be approved by the ordering deadline.";
//    "This form is for use only by educators at schools that have not previously participated in the CEMC's contests.
//    Parents, students, schools that have participated previously, home schools, and all others should contact the
//    CEMC for assistance."; "I confirm that I am not a student."
//  - cemc.uwaterloo.ca/online-ordering-terms-and-conditions (online-ordering-terms-and-conditions.txt): "Under no
//    circumstances should this information be shared with students, parents, guardians, or any other unauthorized
//    individuals."; "The CEMC does not permit schools to charge participants a contest fee higher than the fees
//    published on the CEMC website."; "Under no circumstances shall anyone be permitted to charge fees for accessing
//    past contests and other CEMC resources for practice and/or preparation."; "approximately three weeks".
//  - cemc.uwaterloo.ca/contests/ccc (ccc.txt): supervisor gives participants "your CEMC school number (but not the
//    confidential password)" to create a CCC Online Grader account, then approves "Unverified Users"; "Late (and even
//    last minute) registrants can be accommodated at any time before the start of the contest"; "Any full-time student
//    may participate". cemc.uwaterloo.ca/contests (contests.txt): 2026/27 ordering deadlines used in the timeline.
//  - cms.math.ca COMC 2026 (src/cms/comc.txt): independent students "Only for students whose school is not
//    participating."; Open Writing Centres are "In Person"; registration last day "Thursday, October 22nd".
//  - cemc.uwaterloo.ca/contact-us (contact-us.txt): CEMC takes questions through a contact form.
// Our own material, labelled on the page: the decision path, the sample message to a host school, the
// working-backwards timeline for a first-time school before the CCC (21 January 2027 is three weeks before the
// 11 February 2027 deadline; 14 December 2026 is our suggested target, about eight weeks before), and the checklist.
// Lesson family: following a procedure exactly, in the right order.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const LETTER = `Subject: Request to write a CEMC contest at your school

Dear Head of Math,

My son is in Grade 10 at a school that does not order CEMC contests.
CEMC's How contests work page says a student whose school is not
participating can look for another local school that will allow
them to join as a participant.

Would your school be willing to let him write the Cayley Contest
with your students on Tuesday 23 or Wednesday 24 February 2027?
We will pay the contest fee in whatever way your school prefers,
and he will follow your supervisor's instructions exactly.

If it helps, I can send his full name and grade now, well before
CEMC's ordering deadline for schools in Canada, Tuesday 9 February 2027.

Thank you for considering it,
[Parent's name]
[Phone number]`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'ENTRY', blurb: 'How students enter CEMC\'s Waterloo contests and the CCC: CEMC\'s own words on school-only entry, the another-school route, home schools, and new school accounts.' },
  slug: 'how-to-register-for-waterloo-contests',
  code: 'hrwc',
  accent: '#9E3918',
  accentRationale: 'How to register for Waterloo contests, Canada: a burnt sienna #9E3918, allocated for this row and at least 6 RGB units from every site accent and 14 from every other Canada accent, contrast 6.49 on the paper #FBF8F2 and above 5.5 on all three paper tints',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'How to register for Waterloo contests',
  title: 'How to Register for Waterloo Contests and the CCC in Canada',
  description: 'How a student enters CEMC\'s Waterloo math contests and the CCC: CEMC\'s own rules on school-only entry, the another-school route, home schools and timing.',
  ogDescription: 'There is no student sign-up for CEMC contests. Here is exactly what CEMC says about entering through a school, joining another local school, home schools and new school accounts.',
  twitterDescription: 'Entering CEMC\'s Waterloo contests and the CCC: CEMC\'s rules, quoted, and the three routes.',
  pageName: 'How to Register for Waterloo Contests',
  webPageDescription: 'A step-by-step guide for Canadian families and teachers to entering the University of Waterloo CEMC contests, including the Canadian Computing Competition, built from CEMC\'s own pages and forms.',
  courseDescription: 'Live online preparation for CEMC\'s Waterloo math contests and the Canadian Computing Competition, for students across Canada, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'Registering for Waterloo contests',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#rules', label: 'CEMC\'s rules' },
    { href: '#routes', label: 'Three routes' },
    { href: '#host', label: 'Another school' },
    { href: '#home', label: 'Home schools' },
    { href: '#timeline', label: 'Timeline' }
  ],
  eyebrow: 'Canada &middot; CEMC contest entry &middot; Grades 5 to 12',
  h1: 'How to register for Waterloo contests and the CCC',
  lede: 'Parents who search for a sign-up page for the Waterloo contests do not find one, because there is none for students. CEMC, the University of Waterloo\'s Centre for Education in Mathematics and Computing, deals only with schools, and every one of its math and computing contests, the Canadian Computing Competition included, is entered through a school that orders it. This guide quotes what CEMC itself says on its how-contests-work page, its school application form and its ordering terms, then sets out the three routes that follow from those rules, with a timeline worked backwards from the 2027 deadlines.',
  secondaryCta: { href: '#routes', label: 'See the three routes' },
  wa: 'Hello Modern Age Coders, we are trying to enter my child for a Waterloo contest in Canada. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; every rule on this page quoted from CEMC',
  spec: [
    ['Applies to', 'All CEMC math and computing contests'],
    ['Student sign-up', 'None: entry is by school'],
    ['Fallback', 'Another local school'],
    ['Home schools', 'Contact CEMC'],
    ['New school account', 'About three weeks'],
    ['Written', 'In person, supervised'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Students cannot register themselves for CEMC\'s Waterloo contests or the CCC. CEMC says all students take part through their school, or through another local school that lets them join; its school form tells home schools to contact CEMC. Modern Age Coders teaches the preparation live online, in a batch or one to one, in its Waterloo Math Contests: Gauss to Euclid course.',

  picks: {
    eyebrow: 'Prepare with a teacher',
    h2: 'Three courses for students entering CEMC contests',
    lede: 'Entry is the school\'s job. Preparation is where we come in, for the math contests and for the computing one.',
    items: [
      { course: 'waterloo-math-contests-gauss-to-euclid-course', code: 'REG / 01', title: 'Waterloo Math Contests: Gauss to Euclid', note: 'Grades 7 to 12, in grade tracks. Gauss, Pascal, Cayley, Fermat, the full-solution contests and the Euclid.' },
      { course: 'ccc-junior-and-senior-preparation-course', code: 'REG / 02', title: 'CCC Junior and Senior Preparation', note: 'Teenagers who already program. The February 2027 computing contest, Junior or Senior, in Python or C++.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'REG / 03', title: 'High school math', note: 'Grades 9 to 12. The algebra, geometry and functions every Waterloo math paper leans on.' }
    ]
  },

  sections: [
    {
      id: 'rules', tint: 'tint', eyebrow: 'CEMC\'s own words',
      h2: 'What CEMC says about who can register',
      lede: 'Every line in this table is quoted from a CEMC page or form, read on 22 October 2026. Where two CEMC pages word a point differently, both are shown.',
      body: [
        { kind: 'table', caption: 'CEMC\'s registration rules, quoted (read 22 October 2026)', head: ['Point', 'CEMC\'s words', 'Where CEMC says it'], rows: [
          ['No individual entry', '"It is not possible for students to individually register for a contest" and "all students must participate through their school."', 'How contests work'],
          ['Said a second way', '"Students cannot register for contests on their own. They must be registered by their school."', 'How contests work'],
          ['The fallback', '"If your own school is not participating, students can look for another local school that will allow them to join as a participant."', 'How contests work'],
          ['Who may open an account', '"only educators are permitted to request a CEMC School Account and order contests"', 'How contests work'],
          ['Who applies', '"the Principal or Head of Math must submit a new school application"', 'How contests work'],
          ['How long it takes', '"can take up to three weeks to be manually reviewed" (How contests work); "can take approximately three weeks to be manually reviewed" (the application form)', 'Both'],
          ['No promise on timing', '"We cannot guarantee that an application will be approved by the ordering deadline."', 'New School Application form'],
          ['Home schools', '"Parents, students, schools that have participated previously, home schools, and all others should contact the CEMC for assistance."', 'New School Application form'],
          ['The school password', '"Under no circumstances should this information be shared with students, parents, guardians, or any other unauthorized individuals."', 'Ordering terms and conditions'],
          ['Where the contest is written', '"Participants may only write the contest at the school which ordered the contest."', 'How contests work'],
          ['No remote writing', '"Contests may not be taken remotely or without supervision."', 'How contests work']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/how-contests-work" rel="noopener" target="_blank">CEMC, How contests work</a>; the <a class="ag-inline-link" href="https://cemc2.math.uwaterloo.ca/contest/Sigma/school/newSchool.php?pageLang=E" rel="noopener" target="_blank">CEMC New School Application form</a>; <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/online-ordering-terms-and-conditions" rel="noopener" target="_blank">CEMC online ordering terms and conditions</a>. All read 22 October 2026. We have no link with CEMC or the University of Waterloo, and no way to enter a student for any CEMC contest.' },
        { kind: 'two', mt: true,
          leftH3: 'What these rules add up to',
          left: [
            'Read together, the rules leave no gap for a direct sign-up. A family cannot open an account, because accounts are for educators. A student cannot use the school\'s account, because the password must not be shared with students or parents. And a student cannot write from home, because every contest is supervised in person at the school that ordered it.',
            'What is left is simple, if not always easy: a school has to order the contest, and the student writes it there.'
          ],
          rightH3: 'Why CEMC works this way',
          right: [
            'CEMC does not explain the policy in one sentence, but its rules point to supervision. Its standards require participants to be "supervised in-person during the entirety of the contest writing", and the school that orders a contest is answerable for that.',
            'The same standards carry real weight. CEMC says that a participant who breaks contest rules can be disqualified and lose invitations, and that "any current or future offers of admission to the University of Waterloo may be revoked."'
          ] }
      ]
    },
    {
      id: 'routes', tint: 'deep', eyebrow: 'Three routes',
      h2: 'The three ways a student ends up writing a CEMC contest',
      lede: 'Every successful entry follows one of three paths. Work out which one applies before the ordering deadline, not after it. The path labels and order of checks are ours; every rule inside them is CEMC\'s.',
      body: [
        { kind: 'table', caption: 'Routes into a CEMC contest (our summary of CEMC\'s rules)', head: ['Situation', 'Route', 'Who acts', 'Main risk'], rows: [
          ['The school already orders CEMC contests', '1. Write at your own school', 'The contest teacher adds the student to the order', 'Asking after the school\'s order has gone in'],
          ['The school has never ordered, but a teacher is willing', '2. The school opens a CEMC account', 'Principal or head of math sends the form', 'Approval takes about three weeks, with no guarantee before the deadline'],
          ['The school will not take part', '3. Write at another local school', 'The family asks a nearby school to host', 'The host school may decline'],
          ['Home school', 'Contact CEMC, as its form directs', 'The parent, through CEMC\'s contact form', 'CEMC\'s pages give no further detail; see below']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Ask the school first, in writing.</b> Email the math or computer science department and name the contest and date, for example the Canadian Computing Competition on Wednesday 17 February 2027 or the Pascal Contest on 23 or 24 February 2027.',
          '<b>If the answer is yes,</b> follow route 1. For a math contest the teacher counts the student into the school\'s order. For the CCC the student also creates a CCC Online Grader account.',
          '<b>If the school has no CEMC account,</b> ask whether the principal or head of math would apply. Route 2 is the one that helps the most students, because the school can then order every year.',
          '<b>If the school declines,</b> move straight to route 3. Find one or two nearby schools known to take part and contact their head of math. A sample message is in the next section.',
          '<b>If the student is home-schooled,</b> contact CEMC through its contact form, as its application form says. Do this early in the school year.',
          '<b>Whatever the route,</b> confirm the order is placed before CEMC\'s deadline, and ask which room, which day and what time the student should arrive.'
        ] }
      ]
    },
    {
      id: 'own', tint: 'tint', eyebrow: 'Route 1',
      h2: 'Writing at your own school: what happens for math contests and for the CCC',
      lede: 'When the school already takes part, entry is mostly the teacher\'s work. The steps differ a little between CEMC\'s math contests and the Canadian Computing Competition, because the CCC runs on its own online grader.',
      body: [
        { kind: 'two',
          leftH3: 'For a CEMC math contest',
          left: [
            'The contest teacher orders through CEMC\'s Contest Supervisor Portal using the school\'s nine-digit CEMC School Number, before that contest\'s deadline. The student does nothing online.',
            'CEMC lets a student write a contest meant for a higher grade, but not a lower one. Its how-contests-work page says students working ahead "may choose to write the contest for the more advanced grade but cannot write a contest that is below their official grade level."'
          ],
          rightH3: 'For the Canadian Computing Competition',
          right: [
            'CEMC\'s CCC page asks the supervisor to give each participant the school number, "but not the confidential password", so the student can create a CCC Online Grader account. The teacher then approves the student from a list of unverified users.',
            'The CCC is unusually forgiving about timing. CEMC will still add a writer right up until the contest begins, as long as their grader accounts are authenticated, and the school is invoiced afterwards.'
          ] },
        { kind: 'table', mt: true, caption: 'One contest per family per school year, from CEMC\'s How contests work (read 22 October 2026)', head: ['CEMC contest family', 'A student may write'], rows: [
          ['Pascal, Cayley and Fermat Contests', 'One of the three'],
          ['Fryer, Galois and Hypatia Contests', 'One of the three'],
          ['Canadian Intermediate and Canadian Senior Mathematics Contests', 'One of the two'],
          ['Beaver Computing Challenge, Grade 5/6, 7/8 and 9/10', 'One level'],
          ['Gauss Contests, Grade 7 and Grade 8', 'One of the two']
        ] },
        { kind: 'p', mt: true, html: 'CEMC adds that if a participant writes more than one contest in a family, "only the results of the appropriate grade contest will be recorded." Contests from different families, and the CCC, can be combined in the same year.' }
      ]
    },
    {
      id: 'account', tint: 'deep', eyebrow: 'Route 2',
      h2: 'When the school has never ordered: the CEMC school account',
      lede: 'A school that has never taken part needs a CEMC school account before it can order anything. Parents cannot apply on its behalf. The application form itself asks the person filling it in to confirm "I confirm that I am not a student."',
      body: [
        { kind: 'ol', items: [
          '<b>The right person applies.</b> CEMC says the principal or head of math submits the New School Application. School accounts belong to the school, not to a teacher: CEMC says "School accounts are not individual educator accounts."',
          '<b>CEMC reviews it by hand.</b> Approval is not automatic. CEMC gives about three weeks and warns that it "cannot guarantee that an application will be approved by the ordering deadline." It also "reserves the right to decline any school application."',
          '<b>The school receives its credentials.</b> On approval, CEMC sends a nine-digit CEMC School Number and a confidential password, used to order contests, see results and print certificates.',
          '<b>The teacher orders.</b> With the account open, the teacher orders each contest before its own deadline through the Contest Supervisor Portal.',
          '<b>The account lasts.</b> For schools already registered, CEMC emails the number and password to the head of math contact each September, so the school does not apply again next year.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How a parent can help without overstepping',
          left: [
            'Send the teacher the two links that matter, CEMC\'s How contests work page and the New School Application form, and the deadline for the contest your child wants. Most teachers who decline are worried about the paperwork, and three weeks of review is easier to accept when they see it months ahead.',
            'Offer practical help with what is the family\'s to give: covering the student\'s contest fee, and being on time on the day. The supervision itself must be done by the school.'
          ],
          rightH3: 'Fees, and what schools may charge',
          right: [
            'CEMC charges schools a per-participant fee for most contests and sets a cap on what reaches families. Its ordering terms say "The CEMC does not permit schools to charge participants a contest fee higher than the fees published on the CEMC website."',
            'CEMC is just as firm about its free materials: "Under no circumstances shall anyone be permitted to charge fees for accessing past contests and other CEMC resources for practice and/or preparation." Our fees pay for live teaching, never for access to CEMC\'s papers.'
          ] }
      ]
    },
    {
      id: 'host', tint: 'tint', eyebrow: 'Route 3',
      h2: 'Writing at another local school: how to ask',
      lede: 'CEMC names this route itself, on its how-contests-work page: a student whose school is not participating can look for another local school willing to let them join. CEMC does not set out how to ask, so the approach below is ours.',
      body: [
        { kind: 'ol', items: [
          '<b>Pick schools that already take part.</b> A school with a contest teacher and a CEMC account can add one more writer far more easily than one starting from nothing. Schools that run CEMC contests often mention them on their websites or in newsletters.',
          '<b>Write to the head of math, not the front office.</b> Name the contest, the date and the student\'s grade, and offer to cover the student\'s contest fee.',
          '<b>Ask early.</b> At least a month before CEMC\'s ordering deadline gives the host school time to add the student without rushing.',
          '<b>Accept the school\'s rules completely.</b> CEMC\'s standards say a student may write only at the school that ordered the contest, under that school\'s supervision, so the host school\'s arrangements apply in full.',
          '<b>Say thank you, then ask about next year.</b> A good first sitting makes the second request easy.'
        ] },
        { kind: 'code', mt: true, label: 'Our sample message to a host school (a template, adapt it freely)', lang: 'text', code: LETTER, note: 'The quoted CEMC wording in the third and fourth lines is from How contests work, read 22 October 2026. The contest, dates and deadline are from CEMC\'s 2026/27 table; change them for the contest your child wants.' },
        { kind: 'p', mt: true, html: 'A host school is doing a favour, and may decline for reasons of space, staff or timing. A polite no is not the end: there are usually several schools within reach in a Canadian town or city, and the request costs each of them only a few minutes to answer.' }
      ]
    },
    {
      id: 'home', tint: 'deep', eyebrow: 'Home-schooled students',
      h2: 'Home-schooled students and Waterloo contests: what CEMC says, and what it does not',
      lede: 'We looked for CEMC\'s guidance for home-schooled students on its how-contests-work page, the contest pages, its ordering terms and its school application form. The only mention we found is one sentence on the New School Application form.',
      body: [
        { kind: 'table', caption: 'Everything CEMC says about home schools, on the pages we read (22 October 2026)', head: ['Page', 'What it says about home schools'], rows: [
          ['New School Application form', '"This form is for use only by educators at schools that have not previously participated in the CEMC\'s contests. Parents, students, schools that have participated previously, home schools, and all others should contact the CEMC for assistance."'],
          ['How contests work', 'No mention of home schools. It gives the another-local-school route for any student whose school is not participating.'],
          ['Ordering terms and conditions', 'No mention of home schools.'],
          ['Contest pages read (CCC, BCC, Gauss, PCF, FGH, CSIMC, Euclid, CTMC)', 'No mention of home schools.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What a home-schooling family can do',
          left: [
            'Follow CEMC\'s own direction: contact CEMC for assistance, through the contact form on its website, and do it in September or October rather than a few weeks before a deadline.',
            'The another-local-school route on How contests work is worded for any student whose own school is not participating. Whether CEMC treats a home-schooled student that way is for CEMC to say, so ask it in the same message.'
          ],
          rightH3: 'What we will not tell you',
          right: [
            'We will not describe a home-school procedure that CEMC has not published, and we cannot arrange a sitting. An online class is not a school that has ordered the contest, and CEMC does not allow contests to be written remotely.',
            'Other organisers work differently. The Canadian Mathematical Society\'s COMC has had in-person Open Writing Centres, "Only for students whose school is not participating", though registration for the 2026 COMC closed on 22 October 2026.'
          ] },
        { kind: 'source', html: 'Sources: the <a class="ag-inline-link" href="https://cemc2.math.uwaterloo.ca/contest/Sigma/school/newSchool.php?pageLang=E" rel="noopener" target="_blank">CEMC New School Application form</a>, <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contact-us" rel="noopener" target="_blank">CEMC contact page</a>, and <a class="ag-inline-link" href="https://cms.math.ca/competitions/comc/" rel="noopener" target="_blank">CMS, COMC 2026</a>, read 22 October 2026.' }
      ]
    },
    {
      id: 'timeline', tint: 'tint', eyebrow: 'Worked backwards',
      h2: 'A timeline for a first-time school entering the 2027 CCC',
      lede: 'A worked example, ours, for the hardest case: a school that has never ordered a CEMC contest and wants one student to write the Canadian Computing Competition on Wednesday 17 February 2027. CEMC\'s ordering deadline is Thursday 11 February 2027.',
      body: [
        { kind: 'table', caption: 'Working backwards from the 2027 CCC (our plan; CEMC\'s dates and review time from its pages, read 22 October 2026)', head: ['By', 'Step', 'Why this date'], rows: [
          ['Friday 6 November 2026', 'Family asks the school in writing', 'Leaves time for a no, and for route 3'],
          ['Monday 14 December 2026', 'Principal or head of math submits the New School Application', 'About eight weeks before the deadline, well clear of the three-week review'],
          ['Thursday 21 January 2027', 'Latest date to apply with the full three weeks of review', 'Three weeks before 11 February 2027; CEMC does not guarantee approval by the deadline'],
          ['Late January 2027', 'Student creates a CCC Online Grader account with the school number', 'The teacher can then approve the account'],
          ['Before Thursday 11 February 2027', 'Teacher places the CCC order', 'CEMC\'s ordering deadline for the 2027 CCC'],
          ['Wednesday 17 February 2027', 'Student writes at the school, supervised', 'CEMC\'s 2027 CCC date for the Americas']
        ] },
        { kind: 'p', mt: true, html: 'Our arithmetic: 11 February 2027 minus 21 days is 21 January 2027. We suggest mid-December instead because CEMC\'s review is done by hand and comes with no promise of approval by a deadline; the extra weeks absorb the winter break. The same pattern works for every CEMC contest: find the deadline in CEMC\'s 2026/27 table, count back three weeks for the latest application, then add a margin.' },
        { kind: 'two', mt: true,
          leftH3: 'A checklist for the day',
          left: [
            'Know the room and the arrival time the school gives you. CEMC asks schools to run contests close to the start of the school day, in the school\'s own time zone.',
            'For the CCC, know the grader username and password, and have tried the Practice Contest. For paper contests, bring what the school says is allowed and nothing else.'
          ],
          rightH3: 'After the contest',
          right: [
            'Results go to the school, not to the family. Ask the contest teacher when they arrive, and whether the school prints certificates.',
            'CEMC asks participants to consent to their names appearing in public honour rolls if their score is high enough, unless they opt out. Ask the school how to opt out if you prefer that.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where a family is',
    h2: 'Four starting points, and the next step for each',
    lede: 'Our quick guide to what to do this week, depending on where you stand. The stages are ours.',
    table: { caption: 'Next steps by situation (ours)', head: ['Where you are', 'Next step this week'], rows: [
      ['1. The school runs CEMC contests', 'Ask the contest teacher to add your child, naming the contest'],
      ['2. The school has never run one', 'Send the teacher CEMC\'s application link and the deadline'],
      ['3. The school has said no', 'Write to the head of math at two nearby schools'],
      ['4. Home-schooled', 'Contact CEMC through its contact form, as its school form directs']
    ] },
    left: { h3: 'For parents', ps: [
      'The deadline that matters is the school\'s, not the contest date. Put CEMC\'s ordering deadline in your calendar with a reminder two weeks ahead.',
      'Keep every request polite and in writing. Teachers who run contests do it on top of a full timetable.'
    ] },
    right: { h3: 'For students', ps: [
      'You can ask a teacher yourself. CEMC\'s first step for students is exactly that conversation.',
      'Once you are entered, the work that counts is the practice. Entry is a form; preparation is months.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for CEMC contest writers',
    lede: 'Live online with one regular teacher, as a batch or one to one, from any province.',
    bands: [
      { num: 'I', h3: 'Before the first contest', sub: 'Grades 5 to 8', courses: [
        { code: 'REG / FIRST / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking for kids', blurb: 'Puzzles and logic for the Beaver.' },
        { code: 'REG / FIRST / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Fractions to pre-algebra, for the Gauss.' },
        { code: 'REG / FIRST / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Math ideas tested in Python.' }
      ] },
      { num: 'II', h3: 'High school contests', sub: 'Grades 9 to 12', courses: [
        { code: 'REG / HIGH / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition math', blurb: 'Full solutions for Fryer to Euclid.' },
        { code: 'REG / HIGH / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The language most first CCC writers use.' },
        { code: 'REG / HIGH / 03', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'For CCC Senior and beyond.' }
      ] },
      { num: 'III', h3: 'Going further', sub: 'Strong students', courses: [
        { code: 'REG / FAR / 01', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming for teens', blurb: 'Algorithms under contest conditions.' },
        { code: 'REG / FAR / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Data structures, built up slowly.' },
        { code: 'REG / FAR / 03', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'Java, for schools that offer AP.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live preparation while the school handles entry',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, with times converted to your province.' },
      { time: 'Weekends', l: 'Weekend mornings, away from the school timetable.' },
      { time: '1-on-1', l: 'Fitted around the student and the chosen contest.' }
    ],
    cells: [
      { h3: 'Entry advice', p: 'We help families find the right route, but never register anyone.' },
      { h3: 'Our own problems', p: 'Original practice, with CEMC\'s free archive for past papers.' },
      { h3: 'Exam conditions', p: 'Timed papers in the contest\'s own format.' },
      { h3: 'Math and coding', p: 'Waterloo math contests and the CCC, side by side.' },
      { h3: 'Across Canada', p: 'Students in every province and territory.' },
      { h3: 'Batch or one to one', p: 'Fifteen to twenty in a batch, or a teacher of your own.' }
    ]
  },

  projectsH2: 'Built by our students',
  projectsLede: 'Our learners build real projects between contests. A sample is below; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has more of them.',
  reviewsLede: 'Parents\' reviews on Google, as they wrote them.',

  fees: {
    h2: 'Fees',
    lede: 'Contest fees go from the school to CEMC and have nothing to do with us. Our monthly fee pays only for live teaching, with no season contract, and past CEMC papers stay free, as CEMC requires.',
    free: ['A free first class', 'A route check for your child\'s contest', 'No card needed'],
    group: ['Fifteen to twenty students in a batch', 'A regular teacher', 'Choose the batch time', 'Monthly billing'],
    one: ['A teacher for one student', 'Paced to the chosen contest', 'Built around the student\'s level']
  },

  faq: {
    eyebrow: 'Questions from Canadian families',
    h2: 'Registering for Waterloo contests: common questions',
    items: [
      { q: 'Can my child register for a Waterloo contest on their own?', a: 'No. CEMC rules out individual registration: every student takes part through a school. A teacher orders the contest, and the student writes it in that school.' },
      { q: 'How do I register for the CCC?', a: 'Through a school that orders it. The student opens a CCC Online Grader account using the school\'s CEMC number (never its password), and the teacher then approves it. CEMC\'s ordering deadline for the 2027 CCC is Thursday 11 February 2027.' },
      { q: 'What if my child\'s school does not take part?', a: 'CEMC points to one fallback: a nearby school that agrees to let the student join its writers. The sitting then happens there, under that school\'s supervision. The host school is free to decline.' },
      { q: 'Can a home-schooled student write a CEMC contest?', a: 'The only mention of home schools we found is on CEMC\'s New School Application form, which says parents, students, home schools and others should contact CEMC for assistance. We suggest doing that early in the school year, through CEMC\'s contact form.' },
      { q: 'Can a parent open a CEMC school account?', a: 'No. CEMC says only educators may request a school account, and that the principal or head of math submits the application. Parents are directed to contact CEMC instead.' },
      { q: 'How long does a new CEMC school account take?', a: 'A person at CEMC reviews each application, which can take as long as three weeks, and the form adds that approval by the ordering deadline cannot be guaranteed. A school should apply well before the deadline of the contest it wants.' },
      { q: 'Can my child write a CEMC contest online from home?', a: 'No. CEMC bans remote and unsupervised writing, and the sitting must happen at the ordering school. That holds for the online CCC as well as paper contests.' },
      { q: 'Can my child write a contest for a higher grade?', a: 'Yes. CEMC lets a student working ahead write the contest for a more advanced grade, but not one below their official grade. A student may write only one contest from each contest family in a school year.' },
      { q: 'Can Modern Age Coders register my child?', a: 'No. We are not connected with CEMC and cannot order contests or host sittings. We teach the preparation, and we will help you work out which entry route fits your situation.' },
      { q: 'When are your preparation classes for Canadian families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We agree a time in Eastern time, then give it to you in your own province\'s clock.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Once a student is entered, these pages help with the preparation.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Our full list of pages for Canada.' },
      { href: '/cemc-waterloo-contests-preparation', label: 'CEMC Waterloo contests', p: 'How we prepare students for the math contests.' },
      { href: '/ccc-junior-guide', label: 'CCC Junior guide', p: 'The February 2027 Junior paper explained.' },
      { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation', p: 'Junior and Senior coaching, worked back from February.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada', p: 'School math, the base for every contest.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What a live lesson with us looks like.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us the contest and your child\'s school situation. In the first class the teacher sets a short problem in that contest\'s format and, if you need it, walks you through the entry route that fits.',
    readFirst: 'Prefer to look around first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> shows a real lesson, and the <a class="ag-inline-link" href="/courses">course list</a> holds every syllabus.',
    note: 'Every class is live over video with teachers based in India, so there is nothing to travel to in Canada. A WhatsApp message gets the fastest answer.',
    formNote: 'No card is needed; the first class is free.'
  },

  footer: {
    cols: [
      { h4: 'Contests', links: [
        { href: '/cemc-waterloo-contests-preparation', label: 'CEMC math contests' },
        { href: '/ccc-junior-guide', label: 'CCC Junior guide' },
        { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' },
        { href: '/maths-olympiad-classes-online', label: 'Math olympiad classes' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Ask the school first'
  },

  personalityCss: `
.ag-root.ag-hrwc .ag-hero h1 { letter-spacing: -0.011em; }
.ag-root.ag-hrwc .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-hrwc .ag-section-head h2 { max-width: 38ch; }
.ag-root.ag-hrwc .ag-table caption { text-align: left; font-weight: 500; letter-spacing: 0.01em; }
.ag-root.ag-hrwc .ag-band-head h3 { letter-spacing: -0.008em; }
.ag-root.ag-hrwc .ag-slots { gap: 1.25rem; }
`,

  dossier: {
    curriculumAuthority: 'CEMC (University of Waterloo) How contests work, New School Application form, online ordering terms and conditions, CCC page, contests overview and contact page; CMS COMC 2026 page, all read raw on 22 October 2026: no individual student registration; participation through a school; another local school as the fallback; only educators may request accounts; principal or head of math applies; review up to or approximately three weeks with no guarantee before a deadline; nine-digit school number; password never shared with students or parents; home schools told to contact CEMC; write only at the ordering school, in person, never remotely; up a grade but not down; one contest per family; fee cap for schools; no fees for past contests; CCC grader account via school number; late CCC registrants accepted before the start.',
    localProject: 'A decision path of three routes plus the home-school case; a sample message to a host school, written by us; a working-backwards timeline for a first-time school entering the 2027 CCC (21 January 2027 latest, 14 December 2026 suggested); a day-of checklist. Lesson family: following a procedure exactly, in the right order.',
    requiredMentions: ['home schools, and all others should contact the CEMC for assistance', 'We cannot guarantee that an application will be approved by the ordering deadline', 'I confirm that I am not a student', 'Students cannot register for contests on their own. They must be registered by their school.', 'charge participants a contest fee higher than the fees published on the CEMC website', 'Under no circumstances shall anyone be permitted to charge fees for accessing past contests', 'Request to write a CEMC contest at your school', 'Monday 14 December 2026', 'School accounts are not individual educator accounts'],
    sources: [
      { claim: 'Student entry only through a school; another local school; educator-only accounts; principal or head of math applies; up to three weeks; nine-digit number; may decline; grade and grouping rules; standards on where and how contests are written; integrity consequences.', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' },
      { claim: 'New School Application: about three weeks, no guarantee by the deadline, form only for educators, home schools and parents to contact CEMC, not-a-student confirmation.', url: 'https://cemc2.math.uwaterloo.ca/contest/Sigma/school/newSchool.php?pageLang=E' },
      { claim: 'Password never shared with students or parents; fee cap for participants; no fees for past contests.', url: 'https://cemc.uwaterloo.ca/online-ordering-terms-and-conditions' },
      { claim: 'CCC grader accounts via the school number, teacher approval, late registrants, 2027 dates.', url: 'https://cemc.uwaterloo.ca/contests/ccc' },
      { claim: 'COMC independent students and in-person Open Writing Centres; 2026 registration closed 22 October.', url: 'https://cms.math.ca/competitions/comc/' }
    ],
    rejectedClaims: [
      'A CEMC procedure for home-schooled students beyond contacting CEMC: not published on the pages read, so not described.',
      'That a home-schooled student may use the another-local-school route: not stated by CEMC; the page tells families to ask CEMC.',
      'That a tutoring company or online class can host a sitting: refused; CEMC requires writing at the ordering school, in person.',
      'Typed fee figures: omitted.',
      'Names of schools that take part: not printed; families are pointed to schools\' own channels and CEMC results booklets.',
      'Any ability to register students on CEMC\'s behalf, or any affiliation with CEMC: none, and the page says so.'
    ]
  }
};
