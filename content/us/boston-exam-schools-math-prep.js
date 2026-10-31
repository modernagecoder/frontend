'use strict';
// Boston exam schools math prep (ag- guide door; UK and US exams cluster Phase 2, row US052). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. The three schools run admission through Boston Public
// Schools' own published process and are named as BPS names them (brief rule 7). Every fact read raw with curl on 31
// October 2026 from bostonpublicschools.org; copies in keyword-research-2026-09/uk-us-gap/src/boston-exam-schools-math-prep/:
//  - /academics/exam-schools: "Boston Public Schools has three exam schools: Boston Latin Academy, Boston Latin School,
//    and the John D. O'Bryant School of Mathematics and Science." "All three schools accept new students for grades 7
//    and 9. John D. O'Bryant School accepts a small number of new students in grade 10." "An admissions test is
//    required to apply."; policy revisions after "a five-year review" accepted by the School Committee in fall 2025,
//    effective "beginning with the invitations for the 2026-2027 admissions cycle"; eligibility "B or higher Grade Point
//    Average", "Have ranked at least one exam school", "a valid score on the MAP Growth Assessment"; "Students will
//    receive a composite score that is based 30% on MAP Growth and 70% GPA."; invitations "20%" citywide and "80%" by
//    "4 socioeconomic tiers"; "School-based points were eliminated"; "an additional 10 points" for students
//    experiencing homelessness, in BHA public housing or in DCF care; info session Tuesday, December 1, 2026, 6 p.m.;
//    contact exam@bostonpublicschools.org.
//  - /academics/exam-schools/how-to-apply: "Students who are entering grade 6, 8, 9 in September 2026 and are Boston
//    residents are eligible to apply to one of our exam schools for September 2027."; MAP Growth "two opportunities";
//    "BPS will use the higher achievement percentile score in each subject area (Reading & Math)"; "must complete both
//    sections"; MAP Growth demo by NWEA; BPS grades 6 and 8 at non-exam schools test in school "between January 11-15,
//    2027"; weekend MAP "January 9-10, 2027", "January 16-17 will be reserved in case of severe weather"; registration
//    "October 13 through midnight on December 4, 2026"; parent and student must reside in Boston; residency
//    verification October 13 to December 4, 2026 via apply.avela.org/boston; school choice "between January 5 and
//    February 5, 2027"; GPA "B or higher"; grade 7 GPA from grade 6 marks in ELA, Math, Science, Social Studies (Quarter
//    1 and 2 or Trimester 1/Semester 1) and grade 5 ELA and Math from the last marking period; grade 9 the same pattern
//    from grades 8 and 7; "students will receive an invitation to only one exam school"; decision letter "in late April
//    2027 through the Avela portal"; "exam school decisions are final, and we do not accept appeals."
//  - /academics/exam-schools/admissions-faqs: advanced coursework gets no extra points, "unweighted marks"; "an A+ is
//    treated like an A"; "BPS will utilize an 11-point scale (0-11)", scaled "by dividing the GPA by 11 and multiplying
//    by 100"; GPA calculated "until early March, after the close of the second quarter marking period on January 29,
//    2027"; "The test score (30%) and the GPA (70%) will be combined"; tiers by home address, roughly equal seats,
//    lowest-SES tier first in each round, updated every winter; waitlists for grades 7, 9 and 10 "capped at 100
//    students", ordered by composite score and random number within tier, "in effect until November 30"; no sibling
//    priority; families cannot decline the assigned exam school after invitations; Boston Latin Academy and Boston Latin
//    School do not accept grade 10 applications; modified curriculum, MCAS Alternate and SLIFE students not eligible;
//    independent external review of all application phases.
// Weekdays checked in Python (Oct 13 2026 Tue, Dec 1 Tue, Dec 4 Fri, Jan 5 2027 Tue, Jan 9 Sat, Jan 10 Sun, Jan 11 Mon,
// Jan 15 Fri, Jan 16 Sat, Jan 17 Sun, Jan 29 Fri, Feb 5 Fri).
// Our own material, labelled: the GPA scaling example (9.9 / 11 x 100 = 90), the illustrative composite (0.7 x 90 +
// 0.3 x 80 = 87, with the test component an assumed 80 on a 100 scale, since the percentile conversion sits in the BPS
// fact sheet we did not read), the 10-point illustration, three math worked examples, ten practice problems with answers
// checked in Python, the timeline plan. Lesson family: weighted averages, the composite score itself, used as math.
// Not used: MAP Growth item content or scoring tables (nwea.org not read), tier maps, data summaries, prior-year cutoffs.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'TEST PREP', blurb: 'Boston exam schools for September 2027: the 70 percent GPA and 30 percent MAP Growth composite, January 2027 test dates, tiers, and math practice for grades 6 and 8.' },
  slug: 'boston-exam-schools-math-prep',
  code: 'boe',
  accent: '#2B6E8F',
  accentRationale: 'Boston exam schools math prep: a harbor blue #2B6E8F from the US allocation table, about 5.6:1 on paper #FBF8F2, distinct from the NYC teal and olive doors',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  routeLabel: 'Boston exam schools math prep',
  title: 'Boston Exam Schools Math Prep: MAP Growth and GPA, 2027',
  description: 'Boston exam schools prep for September 2027: the 70 percent GPA and 30 percent MAP Growth composite, January 2027 test dates, tiers and math practice.',
  ogDescription: 'Boston Latin School, Boston Latin Academy and the O\'Bryant admit by a composite of GPA and MAP Growth. How it is calculated, every 2026 to 2027 date, and how to strengthen the math.',
  twitterDescription: 'Boston exam schools admissions for 2027, explained from BPS.',
  pageName: 'Boston Exam Schools Math Prep',
  webPageDescription: 'A guide for Boston families to exam school admission for September 2027, from Boston Public Schools\' own pages: eligibility, the GPA and MAP Growth composite, dates, socioeconomic tiers and invitations, with worked examples and math practice for grades 6 and 8.',
  courseDescription: 'Live online math classes for Boston students in grades 6 and 8, in a batch of 15 to 20 or one to one, covering the school math behind exam school GPA and the MAP Growth test.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Boston exam schools math prep',
  navLinks: [
    { href: '#criteria', label: 'Criteria' },
    { href: '#composite', label: 'Composite' },
    { href: '#dates', label: 'Dates' },
    { href: '#tiers', label: 'Tiers' },
    { href: '#math', label: 'The math' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Boston &middot; Grades 6 and 8 &middot; Entry in September 2027',
  h1: 'Boston exam schools math prep',
  lede: 'Entry to Boston&rsquo;s three exam schools does not hang on one test. Boston Public Schools combines a student&rsquo;s grade point average, weighted at 70 percent, with a MAP Growth test score, weighted at 30 percent, and then invites students within four socioeconomic tiers. That means the math that matters most is the math on report cards this fall and winter, with the January 2027 test as the smaller part. This guide explains the process from the BPS exam school pages as they stood on 31 October 2026, works the composite through with our own numbers, and closes with math practice for students in grades 6 and 8.',
  secondaryCta: { href: '#composite', label: 'How the composite works' },
  wa: 'Hello Modern Age Coders, we live in Boston and my child is applying to the exam schools for September 2027. Could we book a free first math class?',
  heroNote: 'Teaching math and coding live since 2020 &middot; 10,000+ students &middot; grades K to 12',
  spec: [
    ['Schools', 'BLA, BLS and the O&rsquo;Bryant'],
    ['Entry grades', '7 and 9; a few seats in 10 at the O&rsquo;Bryant'],
    ['GPA rule', 'B or higher'],
    ['Composite', '70% GPA, 30% MAP Growth'],
    ['Weekend MAP test', 'January 9 to 10, 2027'],
    ['In-school MAP test', 'January 11 to 15, 2027'],
    ['Decisions', 'Late April 2027'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Boston Public Schools has three exam schools: Boston Latin Academy, Boston Latin School and the John D. O&rsquo;Bryant School of Mathematics and Science. Boston residents need a B or higher GPA and a MAP Growth score; the composite is 70 percent GPA and 30 percent MAP Growth. Modern Age Coders teaches the math live online, in a batch or 1-on-1, through our Middle School Mathematics course.',

  picks: {
    eyebrow: 'Learn with a teacher',
    h2: 'Courses that lift both halves of the composite',
    lede: 'School math for the GPA first, then our entrance-test course for timed problem solving, then algebra for the grade 8 applicant.',
    items: [
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'BOE / 01', title: 'Middle school mathematics', note: 'Grades 6 to 8. The math marks that make up most of the GPA.' },
      { course: 'shsat-math-prep-course', code: 'BOE / 02', title: 'Entrance test math', note: 'Our SHSAT Math Prep course, used here for timed reasoning before the January test.' },
      { course: 'algebra-foundations-masterclass', code: 'BOE / 03', title: 'Algebra foundations', note: 'For grade 8 applicants heading for grade 9 entry.' }
    ]
  },

  sections: [
    {
      id: 'criteria', tint: 'tint', eyebrow: 'Eligibility',
      h2: 'Who can apply to the Boston exam schools for September 2027?',
      lede: 'Boston residents entering grade 6, 8 or 9 in September 2026 can apply for September 2027. To be considered, a student needs a GPA of B or higher, must rank at least one exam school, and must have a valid MAP Growth score.',
      body: [
        { kind: 'table', caption: 'Boston exam school admission criteria for 2027 to 2028 (Boston Public Schools exam schools pages, read 31 October 2026)', head: ['Requirement', 'What BPS publishes'], rows: [
          ['The schools', 'Boston Latin Academy, Boston Latin School, and the John D. O&rsquo;Bryant School of Mathematics and Science'],
          ['Entry grades', 'All three admit new students in grades 7 and 9; the O&rsquo;Bryant also takes a small number in grade 10'],
          ['Residency', 'Both the parent and the student must live in the City of Boston'],
          ['GPA', 'B or higher, from unweighted report card marks'],
          ['Test', 'MAP Growth, Reading and Math; both sections must be completed'],
          ['Choice', 'At least one exam school ranked on the school choice form'],
          ['Composite', '70 percent GPA and 30 percent MAP Growth, plus 10 points for some students'],
          ['Not eligible', 'Students on a modified curriculum, in MCAS Alternate Assessments, or enrolled in SLIFE']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What changed for this cycle',
          left: [
            'BPS says that after a five-year review of its exam school policy, the School Committee accepted revisions in fall 2025, effective from the 2026 to 2027 admissions cycle. School-based points were eliminated.',
            'The 10 extra points now go only to students experiencing homelessness, living in Boston Housing Authority public housing, or in the care of the Department of Children and Families, and they apply within the tier-based share of invitations.'
          ],
          rightH3: 'One invitation, no appeals',
          right: [
            'A student receives an invitation to only one exam school, set by the composite score, the tier, the ranked choices and the seats. Once invited, the student is assigned to that school; BPS says families cannot make a final decision afterwards.',
            'BPS states that "exam school decisions are final, and we do not accept appeals." Sibling priority does not apply.'
          ] },
        { kind: 'source', html: 'Sources: Boston Public Schools <a class="ag-inline-link" href="https://www.bostonpublicschools.org/academics/exam-schools" rel="noopener" target="_blank">Exam Schools</a>, <a class="ag-inline-link" href="https://www.bostonpublicschools.org/academics/exam-schools/how-to-apply" rel="noopener" target="_blank">How to Apply</a> and <a class="ag-inline-link" href="https://www.bostonpublicschools.org/academics/exam-schools/admissions-faqs" rel="noopener" target="_blank">Admissions FAQs</a>, read 31 October 2026. Modern Age Coders is not connected with Boston Public Schools or any exam school.' }
      ]
    },
    {
      id: 'composite', tint: 'deep', eyebrow: 'The composite score',
      h2: 'How is the Boston exam school composite score calculated?',
      lede: 'In BPS&rsquo;s words, "Students will receive a composite score that is based 30% on MAP Growth and 70% GPA." The GPA is worked out on an 11-point scale and then scaled to 100 by dividing by 11 and multiplying by 100.',
      body: [
        { kind: 'table', caption: 'Which marks make up the GPA for 2027 to 2028 entry (BPS How to Apply page, read 31 October 2026)', head: ['Applying for', 'Marks used'], rows: [
          ['Grade 7', 'Grade 6 ELA, Math, Science and Social Studies from Quarter 1 and 2, or Trimester 1 or Semester 1; grade 5 ELA and Math from the last marking period'],
          ['Grade 9', 'Grade 8 ELA, Math, Science and Social Studies from Quarter 1 and 2, or Trimester 1 or Semester 1; grade 7 ELA and Math from the last marking period'],
          ['Grade 10', 'Grade 9 ELA, Math, Science and Social Studies from Quarter 1 and 2, or Trimester 1 or Semester 1; grade 8 ELA and Math from the last marking period']
        ] },
        { kind: 'p', mt: true, html: '<b>Worked example (ours): scaling a GPA.</b> Suppose, after BPS converts a grade 6 student&rsquo;s letter marks, the average on the 11-point scale comes out at 9.9. BPS scales it to 100 by dividing by 11 and multiplying by 100: 9.9 / 11 = 0.9, and 0.9 x 100 = 90. The letter-to-point table itself is on the BPS composite score fact sheet, so check your own child&rsquo;s marks there; the 9.9 here is an invented figure.' },
        { kind: 'p', html: '<b>Worked example (ours): combining the two parts.</b> Keep the GPA at 90 and suppose the MAP Growth part works out at 80 on a 100-point scale. Then the composite is 0.7 x 90 + 0.3 x 80 = 63 + 24 = 87. Now see what each part is worth. Raising the GPA from 90 to 95 adds 0.7 x 5 = 3.5 points. Raising the test part from 80 to 85 adds only 0.3 x 5 = 1.5 points. How BPS turns a MAP Growth percentile into its 30 percent share is set out in its fact sheet, which we have not reproduced, so the 80 is an assumption for the arithmetic.' },
        { kind: 'two', mt: true,
          leftH3: 'Why the GPA deserves most of the effort',
          left: [
            'Because the GPA is weighted more than twice as heavily as the test, a steady report card in grade 6 or grade 8 does more for the composite than a strong January morning. And unlike the test, the marks build over months, so effort shows.',
            'BPS gives no extra points for advanced classes and uses unweighted marks. An A+ counts the same as an A, so the target is a consistent A or B+ across all four subjects, not a single star subject.'
          ],
          rightH3: 'Where the marks deadline falls',
          right: [
            'The FAQs say BPS cannot calculate GPA until early March, after the second quarter marking period closes on January 29, 2027. For a grade 6 or grade 8 student, that means the Quarter 1 and 2 marks being earned right now are the ones that count.',
            'The grade 5 or grade 7 marks used are only ELA and Math from the last marking period, already fixed. So this autumn&rsquo;s math class is where help can still change the picture.'
          ] },
        { kind: 'source', html: 'Source: Boston Public Schools <a class="ag-inline-link" href="https://www.bostonpublicschools.org/academics/exam-schools/admissions-faqs" rel="noopener" target="_blank">Admissions FAQs</a> (11-point scale, scaling, 70/30 split, unweighted marks) and How to Apply page, read 31 October 2026. Both worked examples use invented figures and are ours.' }
      ]
    },
    {
      id: 'dates', tint: 'tint', eyebrow: 'The calendar',
      h2: 'When is the MAP Growth test for Boston exam schools in 2027?',
      lede: 'BPS students in grades 6 and 8 at non-exam schools take MAP Growth in school between January 11 and 15, 2027. Everyone else who needs the weekend test sits it on January 9 to 10, 2027, after registering by December 4, 2026.',
      body: [
        { kind: 'table', caption: 'Boston exam schools timeline for 2027 to 2028 entry (BPS exam schools pages, read 31 October 2026; weekdays checked against the calendar)', head: ['Date', 'Step', 'Who'], rows: [
          ['Tuesday, October 13 to Friday, December 4, 2026', 'Weekend MAP registration; residency verification and ranked choices', 'Students not in BPS, and BPS grade 9 students for the test'],
          ['Tuesday, December 1, 2026, 6 p.m.', 'BPS online information session', 'Any family'],
          ['Saturday and Sunday, January 9 to 10, 2027', 'Weekend MAP Growth test', 'Non-BPS students, BPS grade 9 students, current exam school students changing school'],
          ['Saturday and Sunday, January 16 to 17, 2027', 'Reserved in case of severe weather', 'Weekend test takers'],
          ['Monday, January 11 to Friday, January 15, 2027', 'In-school MAP Growth test, no registration needed', 'BPS grade 6 and 8 students at non-exam schools'],
          ['Tuesday, January 5 to Friday, February 5, 2027', 'School choice form', 'BPS students in grades 6 and 8; grade 9 and exam school students via a Welcome Center'],
          ['Friday, January 29, 2027', 'Second quarter marking period closes; GPA calculated in early March', 'All applicants'],
          ['Late April 2027', 'Decision letters through the Avela portal', 'All applicants']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Two chances at the test',
          left: [
            'BPS says students have two opportunities to take MAP Growth, in the spring and winter, and that if a student tests twice, BPS uses the higher achievement percentile in each subject, Reading and Math, separately.',
            'For a grade 6 student, that means a spring MAP taken at school and the January administration can both count. Ask your school which administrations apply to your child.'
          ],
          rightH3: 'Families outside BPS',
          right: [
            'Private, parochial, Commonwealth charter, METCO and homeschooled students must verify City of Boston residency between October 13 and December 4, 2026, through apply.avela.org/boston, and submit ranked choices at the same time.',
            'BPS stresses this applies even if the family has other children in BPS, receives BPS special education services, or works for the city.'
          ] },
        { kind: 'source', html: 'Source: Boston Public Schools <a class="ag-inline-link" href="https://www.bostonpublicschools.org/academics/exam-schools/how-to-apply" rel="noopener" target="_blank">How to Apply</a> and Admissions FAQs, read 31 October 2026. BPS links a MAP Growth demo by NWEA for students to try the testing platform.' }
      ]
    },
    {
      id: 'tiers', tint: 'deep', eyebrow: 'Tiers and invitations',
      h2: 'How do the socioeconomic tiers and invitations work?',
      lede: 'Every Boston address falls in one of four socioeconomic tiers. BPS gives 20 percent of each school&rsquo;s invitations to the highest-ranking students citywide and 80 percent to the highest-ranking students within each tier.',
      body: [
        { kind: 'table', caption: 'Invitations, tiers and waitlists (BPS Exam Schools page and Admissions FAQs, read 31 October 2026)', head: ['Point', 'What BPS says'], rows: [
          ['Citywide share', '20 percent of invitations at each school, to the highest-ranking students citywide'],
          ['Tier share', '80 percent, to the highest-ranking students in each of the 4 socioeconomic tiers'],
          ['Tier assignment', 'By home address; students compete only with others in their tier for the tier share'],
          ['Seats per tier', 'Approximately the same number in each tier'],
          ['Order of rounds', 'Invitations go out in several cycles, with the lowest socioeconomic tier first in each round'],
          ['Tier updates', 'Every winter, pending data'],
          ['Waitlists', 'Grades 7, 9 and 10 only, one per school and grade, capped at 100 students, until November 30'],
          ['Waitlist order', 'Composite score and a random number within the tier']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Rank in true order',
          left: [
            'BPS encourages students to apply to all three exam schools for grades 7 and 9, and to rank them, along with any other BPS schools, in true order of preference. A student who is not invited keeps their current BPS seat where that grade is offered.',
            'Because an invitation is automatic and final, rank only schools you would really accept, in the order you would choose them.'
          ],
          rightH3: 'What tutoring can and cannot touch',
          right: [
            'A family cannot change its tier, the seat count or the ranking of other students. The only parts in a student&rsquo;s hands are the report card marks and the MAP Growth result.',
            'We teach the math behind both and tell families plainly what we see; we make no forecast of invitations.'
          ] },
        { kind: 'source', html: 'Source: Boston Public Schools <a class="ag-inline-link" href="https://www.bostonpublicschools.org/academics/exam-schools" rel="noopener" target="_blank">Exam Schools</a> page and Admissions FAQs, read 31 October 2026. BPS publishes a tier map and previous year data summaries on the same pages.' }
      ]
    },
    {
      id: 'math', tint: 'tint', eyebrow: 'The math',
      h2: 'What math should a grade 6 or grade 8 applicant focus on?',
      lede: 'Two things at once: the grade-level math that earns the Quarter 1 and 2 report card marks, and confident reasoning for the MAP Growth Math section in January. Our focus list below is our own reading of the two grade levels.',
      body: [
        { kind: 'table', caption: 'Where to put math effort, by applicant (our focus list)', head: ['Applicant', 'For the GPA this fall', 'For MAP Growth in January'], rows: [
          ['Grade 6, for grade 7 entry', 'Ratios and rates, dividing fractions, negative numbers, expressions, area and volume', 'Fluent fraction and percent work; multi-step word problems; reading graphs'],
          ['Grade 8, for grade 9 entry', 'Linear equations, functions and slope, systems, exponents, the Pythagorean theorem', 'Solving and checking equations; interpreting functions; geometry with right triangles'],
          ['Grade 9, for grade 10 at the O&rsquo;Bryant', 'Algebra 1 or the school&rsquo;s grade 9 course', 'Algebra reasoning, quadratics where taught']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Marks first, test second',
          left: [
            'For most students, the quickest gain is in class: homework handed in, quizzes corrected, a weak unit revisited before the quarter test. A one-letter rise in math moves the GPA, and the GPA carries 70 percent.',
            'We work on whatever unit the school is teaching that week, so our classes pull in the same direction as the report card.'
          ],
          rightH3: 'Getting used to MAP Growth',
          right: [
            'BPS points students to the free MAP Growth demo by NWEA so they can get used to the testing platform before January. Use it once or twice to remove surprises on the day.',
            'We do not reproduce MAP items. We build reasoning with our own problems and leave platform practice to the official demo.'
          ] }
      ]
    },
    {
      id: 'worked', tint: 'deep', eyebrow: 'Worked examples',
      h2: 'Three worked math examples for grades 6 and 8',
      lede: 'Problems we wrote ourselves, two at grade 6 and one at grade 8. They are not MAP Growth items and are not drawn from any BPS or NWEA material.',
      body: [
        { kind: 'p', html: '<b>Example 1 (grade 6): a weighted average.</b> A student&rsquo;s quarter math grade is 60 percent tests and 40 percent homework. Test average 82, homework average 95. What is the quarter grade? Reasoning: 0.6 x 82 = 49.2 and 0.4 x 95 = 38, so the grade is 87.2. The same idea runs the exam school composite, which is why we teach it early: a heavier weight moves the total more.' },
        { kind: 'p', html: '<b>Example 2 (grade 6): dividing fractions in context.</b> A recipe needs 3/4 cup of oats per batch. How many full batches can be made from 5 cups? 5 divided by 3/4 is 5 x 4/3 = 20/3, which is 6 and 2/3. So 6 full batches, with 2/3 of a batch of oats left, which is 2/3 x 3/4 = 1/2 cup. The trap is answering 6 and 2/3 when the question asks for full batches.' },
        { kind: 'p', html: '<b>Example 3 (grade 8): a line from two points.</b> A taxi charges a fixed amount plus a rate per mile. A 4-mile ride costs 14 dollars and a 10-mile ride costs 29 dollars. What does a 7-mile ride cost? The slope is (29 minus 14) / (10 minus 4) = 15 / 6 = 2.5 dollars per mile. The fixed part is 14 minus 4 x 2.5 = 4. A 7-mile ride costs 4 + 7 x 2.5 = 21.50 dollars. Check: the answer sits halfway between 14 and 29 because 7 sits halfway between 4 and 10.' },
        { kind: 'two', mt: true,
          leftH3: 'Why these three',
          left: [
            'Weighted averages, fraction division and linear rates are three ideas that appear constantly in grade 6 and grade 8 classwork, so they serve the GPA and the test together.',
            'Each has a check that needs no calculator: a total between the two parts, a leftover that makes sense, a midpoint that matches.'
          ],
          rightH3: 'How a lesson uses them',
          right: [
            'The student predicts the answer roughly before working it out. For example 1, "between 82 and 95, nearer 82": a prediction catches a swapped weight at once.',
            'We then ask the student to invent a similar problem for a classmate. Writing a problem is a stronger test of understanding than solving one.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice set',
      h2: 'Ten original practice problems for Boston applicants',
      lede: 'Problems 1 to 6 suit a grade 6 applicant; 7 to 10 suit grade 8. Written by our teachers; work them without a calculator, then check against the table.',
      body: [
        { kind: 'ol', items: [
          '<b>A car travels 135 miles in 2.5 hours at a steady speed. How far does it go in 4 hours?</b>',
          '<b>Compute 2 1/2 divided by 5/6.</b>',
          '<b>The temperature is negative 6 degrees and rises 14 degrees, then falls 9. What is it now?</b>',
          '<b>A box is 5 cm by 4 cm by 3 cm. How many 1 cm cubes fill it, and what is its surface area?</b>',
          '<b>Write an expression for 3 less than twice a number n, then evaluate it for n = 8.</b>',
          '<b>In a class of 25, 60 percent walk to school. How many do not?</b>',
          '<b>Solve 5x minus 7 = 2x + 11.</b>',
          '<b>Find the slope of the line through (2, 3) and (6, 11).</b>',
          '<b>A right triangle has legs 9 and 12. How long is the hypotenuse?</b>',
          '<b>Simplify 2 to the 5th times 2 to the 3rd, divided by 2 to the 6th.</b>'
        ] },
        { kind: 'table', mt: true, caption: 'Answer key with the one-line method (ours; verified in Python)', head: ['No.', 'Answer', 'Method'], rows: [
          ['1', '216 miles', '135 / 2.5 = 54 miles an hour, times 4'],
          ['2', '3', '5/2 x 6/5 = 30/10'],
          ['3', 'Negative 1 degree', 'Negative 6 + 14 = 8; 8 minus 9'],
          ['4', '60 cubes; 94 square cm', '5 x 4 x 3; 2(20 + 15 + 12)'],
          ['5', '2n minus 3; 13', '2 x 8 minus 3'],
          ['6', '10', '40 percent of 25'],
          ['7', 'x = 6', '3x = 18'],
          ['8', '2', '(11 minus 3) / (6 minus 2) = 8 / 4'],
          ['9', '15', '81 + 144 = 225, and the square root of 225'],
          ['10', '4', '2 to the 8th over 2 to the 6th is 2 squared']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Common slips',
          left: [
            'Problem 4 asks for two things; students often give the volume and stop. Problem 6 asks who does not walk, so 15 is the answer to the wrong question.',
            'In problem 10, adding exponents to get 8 and then subtracting 6 is right; multiplying them is the usual error.'
          ],
          rightH3: 'Turning practice into marks',
          right: [
            'Take the problems from the unit your child is studying now and bring the ones they missed to class. Fixing a school unit is worth more than any extra test drill.',
            'Before January, add one MAP Growth demo session for the platform itself.'
          ] }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'From now to April',
      h2: 'A Boston exam schools plan from November 2026 to the test',
      lede: 'Our plan for a grade 6 or grade 8 applicant starting now, built around the published BPS dates.',
      body: [
        { kind: 'table', caption: 'November 2026 to January 2027 (our plan)', head: ['When', 'Math focus', 'Admin step'], rows: [
          ['November 2026', 'The current school math unit; homework and quiz corrections each week', 'Non-BPS families: register for the weekend MAP and verify residency by December 4'],
          ['December 2026', 'Revisit the weakest Quarter 1 unit; mixed word problems', 'Optional BPS info session on December 1'],
          ['Early January 2027', 'One MAP Growth demo session; light mixed review', 'Weekend test January 9 to 10, or school test January 11 to 15'],
          ['Mid to late January 2027', 'Finish Quarter 2 strongly; it closes January 29', 'BPS students submit school choices January 5 to February 5'],
          ['Late April 2027', 'Keep going in class, whatever happens', 'Decision letter via the Avela portal']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Report card', p: 'Seventy percent of the composite, earned week by week.' },
          { h3: 'MAP Growth', p: 'Thirty percent; the higher of two scores per subject.' },
          { h3: 'Paperwork', p: 'Residency, registration and choices on time.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Readiness',
    h2: 'Four stages from steady student to strong applicant',
    lede: 'Our own description of growth in grade 6 or grade 8 math. It is not a BPS measure.',
    table: { caption: 'Stages of readiness (ours)', head: ['Stage', 'How it shows'], rows: [
      ['1. Organized', 'Homework done and corrections made every week'],
      ['2. Secure', 'Each unit test at B+ or above'],
      ['3. Fluent', 'Mixed problems solved without being told the topic'],
      ['4. Calm', 'Comfortable on the testing platform and under time']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 1 is the cheapest win and the one most often missed. Ask to see quiz corrections, not just grades.',
      'Look at the BPS data summaries and tier map for context, but focus your energy on the marks your child can still earn.'
    ] },
    right: { h3: 'For students', ps: [
      'Every quiz you correct is a chance to raise the next one. Write down why each wrong answer was wrong.',
      'On test day, estimate before you calculate. It catches the silly mistakes.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Boston middle schoolers',
    lede: 'Taught live online by a teacher who stays with the student, in a group or privately.',
    bands: [
      { num: 'I', h3: 'Application years', sub: 'Grades 6 and 8', courses: [
        { code: 'BOE / APP / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Pre-algebra and geometry, deeply.' },
        { code: 'BOE / APP / 02', slug: 'shsat-math-prep-course', title: 'Entrance test math', blurb: 'Timed reasoning, no shortcuts.' },
        { code: 'BOE / APP / 03', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'For grade 8 applicants.' }
      ] },
      { num: 'II', h3: 'Extra stretch', sub: 'Beyond the report card', courses: [
        { code: 'BOE / EXT / 01', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'MATHCOUNTS and AMC 8.' },
        { code: 'BOE / EXT / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data and chance.' },
        { code: 'BOE / EXT / 03', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Speed calculation', blurb: 'Mental arithmetic that sticks.' }
      ] },
      { num: 'III', h3: 'Exam school years', sub: 'Grade 7 and beyond', courses: [
        { code: 'BOE / NXT / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Algebra to calculus.' },
        { code: 'BOE / NXT / 02', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Numbers meet Python.' },
        { code: 'BOE / NXT / 03', slug: 'sat-math-prep-course', title: 'SAT math', blurb: 'For the high school years.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live math classes for Boston families',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After the school day in Boston.' },
      { time: 'Weekends', l: 'Longer sessions for mixed review.' },
      { time: '1-on-1', l: 'Following one child&rsquo;s school units.' }
    ],
    cells: [
      { h3: 'School-unit aligned', p: 'We teach what class is teaching now.' },
      { h3: 'Quiz corrections', p: 'Every wrong answer understood.' },
      { h3: 'Mixed sets', p: 'Problems without a topic label.' },
      { h3: 'Parent updates', p: 'A plain note after each month.' },
      { h3: 'Across Boston', p: 'Online from any neighborhood.' },
      { h3: 'Class size', p: 'Groups of 15 to 20, or one student.' }
    ]
  },

  projectsH2: 'Projects from our students',
  projectsLede: 'Our students also put math to work in code; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has examples.',
  reviewsLede: 'Google reviews from parents, shown as written.',

  fees: {
    h2: 'Fees',
    lede: 'BPS runs exam school admissions and the MAP Growth test; our fee is only for math classes. Monthly billing means you can stop once the decision letter arrives.',
    free: ['A free first class', 'A look at the current school unit', 'No card required'],
    group: ['A batch of 15 to 20', 'A regular weekly teacher', 'Choose your batch', 'Monthly fee'],
    one: ['A personal math teacher', 'Lessons matched to school units', 'Flexible times']
  },

  faq: {
    eyebrow: 'Questions from Boston parents',
    h2: 'Boston exam schools: what families ask',
    items: [
      { q: 'What are the three Boston exam schools?', a: 'Boston Public Schools lists Boston Latin Academy, Boston Latin School, and the John D. O\'Bryant School of Mathematics and Science. All three admit new students in grades 7 and 9, and the O\'Bryant takes a small number in grade 10.' },
      { q: 'Is there an entrance exam for Boston Latin School?', a: 'Yes, in the sense that BPS requires the MAP Growth test for all exam school applicants. It counts for 30 percent of the composite score, and the GPA counts for 70 percent.' },
      { q: 'How is the exam school composite score calculated?', a: 'BPS combines the GPA, weighted 70 percent, with the MAP Growth score, weighted 30 percent. The GPA is worked out on an 11-point scale and scaled to 100 by dividing by 11 and multiplying by 100.' },
      { q: 'When is the MAP test for Boston exam schools in 2027?', a: 'BPS grade 6 and 8 students at non-exam schools test in school between January 11 and 15, 2027. The weekend test is January 9 to 10, 2027, with January 16 to 17 held in case of severe weather.' },
      { q: 'What GPA do you need for a Boston exam school?', a: 'BPS requires a GPA of B or higher. For grade 7 entry it uses grade 6 marks in ELA, Math, Science and Social Studies from the first two quarters, plus grade 5 ELA and Math from the last marking period.' },
      { q: 'Do advanced classes or an A+ give extra points?', a: 'No. BPS uses unweighted marks and gives no extra points for advanced coursework. Its FAQs say an A+ is treated like an A.' },
      { q: 'Can my child take the MAP Growth test twice?', a: 'BPS says students have two opportunities, in the spring and winter, and it uses the higher achievement percentile in each subject. Both Reading and Math sections must be completed to get a score.' },
      { q: 'Can we appeal an exam school decision?', a: 'No. BPS states that exam school decisions are final and that it does not accept appeals. Students not invited to their top choice may be placed on waitlists, which last until November 30.' },
      { q: 'Do you teach MAP Growth questions?', a: 'No. We teach grade-level math and reasoning with our own problems, and point students to the free MAP Growth demo by NWEA that BPS links for platform practice.' },
      { q: 'What days and times are classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with Boston Public Schools?', a: 'No. Modern Age Coders is an independent online school, not connected with Boston Public Schools, any exam school or NWEA. Families apply through BPS and Avela themselves.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for Boston and Massachusetts students',
    lede: 'Grade-level math help, other selective entry tests and our Boston coding pages.',
    items: [
      { href: '/online-math-tutor-6th-grade', label: '6th grade math tutor', p: 'The year whose marks count for grade 7 entry.' },
      { href: '/online-math-tutor-8th-grade', label: '8th grade math tutor', p: 'The year whose marks count for grade 9 entry.' },
      { href: '/isee-ssat-math-prep', label: 'ISEE and SSAT math', p: 'For Boston-area independent schools.' },
      { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring', p: 'Equations and functions, one to one.' },
      { href: '/best-coding-and-ai-classes-in-boston', label: 'Coding and AI classes in Boston', p: 'Building alongside math.' },
      { href: '/coding-and-ai-classes-in-massachusetts', label: 'Coding across Massachusetts', p: 'Classes for the wider state.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us your child&rsquo;s grade and which math unit they are on. In the first lesson the teacher works on that unit with them and tells you where the next quarter grade can most easily rise.',
    readFirst: 'For a picture of a lesson, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or scan <a class="ag-inline-link" href="/courses">the course list</a>.',
    note: 'Our teachers teach live from India, scheduled around Boston school hours and weekends. A WhatsApp message usually gets the fastest reply.',
    formNote: 'The first lesson is free, with no card details.'
  },

  footer: {
    cols: [
      { h4: 'Selective entry', links: [
        { href: '/isee-ssat-math-prep', label: 'ISEE and SSAT math' },
        { href: '/shsat-math-prep', label: 'SHSAT math prep' },
        { href: '/math-competitions-for-middle-school-students', label: 'Middle school competitions' },
        { href: '/mathcounts-preparation', label: 'MATHCOUNTS preparation' }
      ] },
      { h4: 'By grade', links: [
        { href: '/online-math-tutor-5th-grade', label: '5th grade math tutor' },
        { href: '/online-math-tutor-6th-grade', label: '6th grade math tutor' },
        { href: '/online-math-tutor-8th-grade', label: '8th grade math tutor' },
        { href: '/coding-classes-in-united-states', label: 'All US pages' }
      ] }
    ],
    bottomRight: 'Seventy percent report card, thirty percent test'
  },

  personalityCss: `
.ag-root.ag-boe .ag-hero h1 { letter-spacing: -0.008em; }
.ag-root.ag-boe .ag-capsule { border-left-width: 5px; border-radius: 6px; }
.ag-root.ag-boe .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-boe .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-boe .ag-steps li { line-height: 1.6; }
.ag-root.ag-boe .ag-grid-3 { gap: 1.1rem; }
`,

  dossier: {
    curriculumAuthority: 'Boston Public Schools, read raw on 31 October 2026: Exam Schools page (three schools, entry grades, admissions test required, fall 2025 policy revision, B GPA, ranked choice, MAP Growth, 30% MAP and 70% GPA, 20/80 invitations, four tiers, 10 additional points, information sessions), How to Apply page (eligibility for September 2027, two MAP opportunities, higher percentile per subject, in-school test January 11 to 15, 2027, weekend test January 9 to 10, 2027 with January 16 to 17 reserve, registration and residency October 13 to December 4, 2026, school choice January 5 to February 5, 2027, GPA marks by entry grade, one invitation, late April 2027 letters, no appeals), Admissions FAQs (unweighted marks, A+ as A, 11-point scale scaled to 100, January 29, 2027 quarter close, tiers, waitlists capped at 100 until November 30, no sibling priority, ineligible groups, external review).',
    localProject: 'Our GPA scaling example (9.9 / 11 x 100 = 90), our illustrative composite (0.7 x 90 + 0.3 x 80 = 87, with marginal values 3.5 and 1.5), three original worked examples (87.2 quarter grade, 6 full batches with 1/2 cup left, 21.50 dollar ride), ten original practice problems with answers checked in Python, a November to April plan. Lesson family: weighted averages, using the composite score itself as the math.',
    requiredMentions: ['Students will receive a composite score that is based 30% on MAP Growth and 70% GPA.', 'exam school decisions are final, and we do not accept appeals.', 'School-based points were eliminated', 'dividing by 11 and multiplying by 100', 'January 16 to 17 held in case of severe weather', 'capped at 100 students', 'second quarter marking period closes on January 29, 2027', '0.7 x 90 + 0.3 x 80 = 63 + 24 = 87', 'John D. O&rsquo;Bryant School of Mathematics and Science', '135 / 2.5 = 54 miles an hour, times 4'],
    sources: [
      { claim: 'Boston exam schools: the three schools, entry grades, criteria, 70/30 composite, invitations by tier, additional points, policy revision.', url: 'https://www.bostonpublicschools.org/academics/exam-schools' },
      { claim: 'How to apply for 2027 to 2028: MAP Growth dates and rules, residency verification, school choice, GPA marks, invitations and decision letters.', url: 'https://www.bostonpublicschools.org/academics/exam-schools/how-to-apply' },
      { claim: 'Admissions FAQs: GPA scale and scaling, unweighted marks, quarter close date, tiers, waitlists, sibling priority, eligibility exclusions.', url: 'https://www.bostonpublicschools.org/academics/exam-schools/admissions-faqs' }
    ],
    rejectedClaims: [
      'The letter-to-point GPA table and the MAP percentile conversion: on the BPS composite score fact sheet (Google Drive PDF), not read; the page uses invented, labelled figures and sends families to the fact sheet.',
      'MAP Growth item types, length or scoring scale: nwea.org not read; only BPS wording used.',
      'Previous year cutoffs, data summaries and tier statistics: not printed; no invitation forecast.',
      'Any claim about how many seats each school has: not published on the pages read.',
      'Any affiliation with Boston Public Schools, the exam schools or NWEA: none, stated on the page.'
    ]
  }
};
