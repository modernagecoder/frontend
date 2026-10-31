'use strict';
// US gifted and selective school tests guide (ag- index/pillar page for the hub "US gifted and selective school tests"
// in content/exam-cluster-groups.json; UK and US exams cluster, index pages 2026-11-01). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md, writer brief rule 9 in full (reasoning and readiness, never
// test-item drilling; districts that discourage commercial prep quoted in their own words; the NYC G&T process has no
// admissions test). Every figure below was re-grepped on 1 November 2026 in the raw copies saved by the member pages
// under keyword-research-2026-09/uk-us-gap/src/<member-slug>/ (read raw with curl on 31 October 2026), plus two new
// fetches saved under src/us-gifted-and-selective-school-tests-guide/:
//  - cogat-test-prep/https___riversideinsights_com_k12_assessments_cogat.html: "measures verbal, quantitative, and
//    nonverbal reasoning"; cogat-overview-brochure.txt: "Verbal, Quantitative, and Figural" reasoning, Screening Form
//    "approximately 30 minutes"; srvusd-gate-testing.html: "Our district does not recommend any materials for CogAT
//    preparation.", "minimal test preparation".
//  - nnat-test-prep/pearson-nnat3.html: "a nonverbal measure of general ability for students in kindergarten through
//    grade 12", "30 minutes", "Group-Administered"; pearson-nnat3-campaign.html: "requires no spoken" or written
//    language; edmonds-universal-screening.html: "excessive preparation for the NNAT isn't recommended", "Should My
//    Student Study Before Taking this test? No", "48 questions per test"; fwisd-nnat3.html: "universal screener for all
//    first graders".
//  - olsat-test-prep/pearson-olsat8.txt: "verbal, nonverbal, and quantitative cognitive abilities", "how well a student
//    learns, not what has been learned", "Grades 2-12 online" (written "grades 2 to 12"), "maximum 75 minutes", "Single
//    form with seven levels"; darien-identification.html: "grades 3 and 5", "No one score on any one measure determines
//    placement."
//  - iowa-assessments-math-prep/iowa-overview-brochure.txt: "what students have learned", grades K to 12 (en dash in
//    source), first developed in 1935 at the University of Iowa (broken spacing, paraphrased), Forms E, F and G
//    equivalent (double space in source, paraphrased).
//  - gifted-and-talented-test-prep/tea-gt.html: "remarkably high level of accomplishment"; cms-gifted-identification.html:
//    "Multiple criteria are used".
//  - nyc-gifted-and-talented-guide/gt.txt: "offer accelerated instruction", kindergarten application December 9, 2026 to
//    January 22, 2027, grades 1 to 4 April 19 to May 7, 2027, "3 or 4, or the equivalent", "early childhood education
//    experts nominate eligible applicants", "does not guarantee a G&T seat"; the page describes no admissions test.
//  - shsat-math-prep/guide.txt: "the sole factor", "50 questions per section", "180 minutes", "Beginning in fall 2026, the
//    SHSAT will move to a computer-adaptive test."; shs.txt: "eight testing Specialized High Schools", eligibility
//    eighth grade or "first-time (not repeating the grade) ninth grade", "not used to determine admissions to
//    LaGuardia"; guide-2027.txt: calculators not permitted.
//  - hunter-college-high-school-math-prep/entrance-exam-2027.txt: "does not endorse any test preparation service or
//    agency", "30 multiple-choice questions" in math, Reading Comprehension, "three hours", "Calculators are not
//    permitted."; hs-admissions-overview.txt: "January 27, 2027", "The only entry year for HCHS is 7th grade.";
//    eligibility-for-fall-2027-entry.txt: "currently enrolled in 6th grade", "90th national percentile".
//  - boston-exam-schools-math-prep/academics_exam-schools.txt: "An admissions test is required to apply.", "30% on MAP
//    Growth and 70% GPA", grades 7 and 9 entry; academics_exam-schools_how-to-apply.txt: "entering grade 6, 8, 9 in
//    September 2026", MAP Growth by NWEA.
//  - hspt-math-prep/hsp.txt: "Since 1955"; par_main.txt: "comprehensive placement test for eighth graders"; interp.txt:
//    Verbal Skills 60, Quantitative Skills 52, Reading 62, Mathematics 64 items (Language 60; parts printed, never
//    summed); par_prep.txt: "avoid expensive preparation materials", "well-rounded education" (the full sentence uses
//    "best" twice, so only these fragments are quoted), no calculator, "no penalty for answering incorrectly".
//  - tachs-math-prep/HandBook.txt: "The TACHS measures academic achievement in reading, written expression, and
//    mathematics, along with general reasoning skills."; api-FaqAccordion.txt: Riverside Insights with the three
//    dioceses "does not encourage or endorse coaching or tutoring programs", "2 hours and 10 minutes", built-in
//    "4-function calculator", November 6 and 7, 2026, "Official TACHS practice tests are not published or provided";
//    ParentGuide.txt: "There are 6 timed subtests"; api-RegistrationAccordion.txt: eighth grade in 2026 to 2027.
//  - NEW, src/us-gifted-and-selective-school-tests-guide/https___www_erblearn_org_families_isee-by-erb_.html
//    (erblearn.org 301 to admission.org/assessments/isee/about): ISEE "for students applying to grades 2-12" (written
//    "grades 2 to 12"); "online, paper-based, and at-home administrations"; Lower Level sections Verbal Reasoning,
//    Quantitative Reasoning, Reading Comprehension, Mathematics Achievement and an unscored essay; Middle and Upper
//    Level "2 hours 40 minutes + two breaks"; "Admission.org is brought to you by E3n, a non-profit organization".
//  - NEW, https___www_ssat_org_about-ssat.html (ssat.org 301 to admission.org/assessments/ssat/about-the-ssat): SSAT "for
//    students currently in grades 3-11"; "virtually unspeeded"; "verbal, math, and reading skills"; "A non-scored
//    writing sample"; formats paper, SSAT at Home and Prometric; Elementary grades 3 to 4. Prices on the page not used.
//  - duke-tip-alternatives/provost-sawyer.txt: TIP "permanently closed later that year" (2020), Duke Pre-College
//    continues; ctd.txt "Since 1982"; ctd-elig.txt "No test scores or portfolio materials needed to enroll.";
//    belin-bests.txt: Belin-Blank "is not currently providing above-level testing".
//  - stanford-online-high-school-math-prep/admissions_acceptance-criteria.txt: "Admission to Stanford OHS is
//    competitive"; admissions.txt: grades 7 to 12; admissions_apply.txt: January 7, 2027; academics_mathematics.txt:
//    "Focus on Proofs".
//  - accelerated-math-program-online/tea-middle-school-advanced-mathematics-program.txt: top "40 percent" on Grade 5 Math
//    STAAR, automatic enrollment of sixth graders; sps-hc-summer-math.html: "identification is not a requirement";
//    mcps-math.html: "Algebra readiness can occur at different points".
// Our own material, labelled on the page: the grade-by-grade route table (assembled from the rows above), the
// six-step chooser, the worked example of one family with a grade 1 child and a grade 7 child, two calendar reasoning
// warm-ups (the 3rd a Tuesday makes the 24th a Tuesday; 100 days after a Wednesday is a Friday, 100 = 14 x 7 + 2).
// Lesson family: reading the organiser's own page before choosing a test.
// No test item from any publisher reproduced or imitated.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'GIFTED', blurb: 'Every US gifted screening test and selective school entrance test on one page, from CogAT and NNAT3 to the SHSAT, HSPT, TACHS, ISEE and SSAT.' },
  slug: 'us-gifted-and-selective-school-tests-guide',
  code: 'usgs',
  accent: '#3B4F8C',
  accentRationale: 'US gifted and selective school tests guide: a slate indigo, #3B4F8C, steady and neutral for a reference page that covers many organisers at once and favours none; 7.38:1 on the #FBF8F2 paper',
  pageType: 'market',
  market: US,
  priceSubject: 'maths',
  routeLabel: 'US gifted and selective school tests guide',
  title: 'Gifted and Talented Tests Explained: CogAT, NNAT, OLSAT, SHSAT',
  description: 'Gifted and talented tests explained: CogAT, NNAT3, OLSAT 8, Iowa, NYC G&T, SHSAT, Hunter, Boston, HSPT, TACHS, ISEE and SSAT, from each organiser.',
  ogDescription: 'Which test does a gifted program or a selective school use? One table covers thirteen US tests and processes, in the organisers\' own words, with a calm route through them.',
  twitterDescription: 'US gifted screening and selective school entrance tests on one page, from the publishers and districts themselves.',
  pageName: 'Gifted and Talented Tests Explained',
  webPageDescription: 'A pillar guide to US gifted and selective school tests: the CogAT, NNAT3, OLSAT 8 and Iowa Assessments used in gifted screening, the NYC Gifted and Talented process (which has no test), and the SHSAT, Hunter College High School exam, Boston exam schools, HSPT, TACHS, ISEE and SSAT, with programs for advanced students and a step-by-step way to choose.',
  courseDescription: 'Live online reasoning, number sense and middle school math lessons for US students from age 6, built around how children think rather than around test items, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Gifted and selective school tests',
  navLinks: [
    { href: '#map', label: 'All tests' },
    { href: '#screening', label: 'Gifted screening' },
    { href: '#prep', label: 'Prep or not' },
    { href: '#entrance', label: 'Exam schools' },
    { href: '#advanced', label: 'Advanced programs' },
    { href: '#choose', label: 'How to choose' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Kindergarten to grade 9 &middot; Pillar guide',
  h1: 'Gifted and talented tests explained, from CogAT to SHSAT',
  lede: 'American families meet two quite different kinds of test. One kind arrives uninvited: a school letter saying that every second grader will sit a reasoning screener next month. The other kind is chosen: a twelve-year-old deciding whether to register for a specialized high school exam or a Catholic high school test. This page sets both side by side in the organisers&rsquo; own words, then points to our page on the one you face.',
  secondaryCta: { href: '#map', label: 'Open the comparison table' },
  wa: 'Hello Modern Age Coders, I am trying to work out which gifted or selective school test applies to my child in the US. Could we talk, and book a free first class?',
  heroNote: 'Teaching math and coding live since 2020 &middot; 10,000+ students &middot; ages 6 to 67',
  spec: [
    ['Covers', 'Thirteen tests and processes'],
    ['Screening', 'CogAT, NNAT3, OLSAT 8, Iowa'],
    ['Entrance', 'SHSAT, Hunter, HSPT, TACHS, ISEE, SSAT'],
    ['No test', 'NYC Gifted and Talented'],
    ['Our lessons', 'Live, online, from age 6'],
    ['Formats', 'Batch or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'The short answer',
  capsule: 'US gifted programs usually screen with an ability test: the CogAT (Riverside Insights), NNAT3 or OLSAT 8 (Pearson), sometimes alongside the Iowa Assessments; NYC Gifted and Talented uses no test at all. Selective high schools use entrance tests: the SHSAT, Hunter\'s own exam, MAP Growth in Boston, the HSPT, TACHS, ISEE or SSAT. Modern Age Coders teaches the reasoning and math underneath them live online, in a batch or 1-on-1.',

  picks: {
    eyebrow: 'Where we can help',
    h2: 'Three courses for the thinking these tests sample',
    lede: 'One for young children facing a screener, one for middle schoolers aiming at an entrance test, and one that grows problem solving at any age in between.',
    items: [
      { course: 'reasoning-and-readiness-course-for-young-thinkers', code: 'USGS / 01', title: 'Reasoning and readiness, ages 6 to 9', note: 'Patterns, shapes and amounts through play and talk; no imitation test items.' },
      { course: 'shsat-math-prep-course', code: 'USGS / 02', title: 'SHSAT math prep, grades 7 to 9', note: 'Middle school math without a calculator, also useful for Hunter and Boston applicants.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'USGS / 03', title: 'Problem solving for kids', note: 'Breaking a puzzle into steps, testing a rule and explaining it.' }
    ]
  },

  sections: [
    {
      id: 'map', tint: 'tint', eyebrow: 'All tests',
      h2: 'What are the main gifted and selective school tests in the US?',
      lede: 'Thirteen tests and processes cover most of what a US family meets between kindergarten and grade 9: four screening tests, two district processes, and seven routes into selective or private high schools.',
      body: [
        { kind: 'table', caption: 'US gifted screening and selective school tests compared (organisers\' own pages and documents, re-read 1 November 2026; quoted words in quotation marks, the rest summarised)', head: ['Test or process', 'Publisher or run by', 'Who takes it', 'What it measures, in the organiser\'s words', 'Format as published'], rows: [
          ['CogAT (Cognitive Abilities Test)', 'Riverside Insights', 'Kindergarten to grade 12; many districts screen in grade 2', '"measures verbal, quantitative, and nonverbal reasoning"', 'Three batteries; the Screening Form takes "approximately 30 minutes"'],
          ['NNAT3 (Naglieri Nonverbal Ability Test)', 'Pearson', 'Kindergarten to grade 12', '"a nonverbal measure of general ability"', '30 minutes, online or paper, group-administered; pictorial directions'],
          ['OLSAT 8 (Otis-Lennon School Ability Test)', 'Pearson', 'Grades K to 12 on paper, grades 2 to 12 online', '"verbal, nonverbal, and quantitative cognitive abilities"', 'Single form with seven levels; untimed, maximum 75 minutes'],
          ['Iowa Assessments', 'Riverside Insights', 'Grades K to 12', 'Achievement: "what students have learned"', 'Equivalent Forms E, F and G; complete, core or survey batteries'],
          ['NYC Gifted and Talented', 'NYC Public Schools', 'Entry to kindergarten to grade 4', 'No admissions test: pre-K teacher evaluation or interview, or report card grades', 'Online application; kindergarten window December 9, 2026 to January 22, 2027'],
          ['District G&amp;T identification', 'Each school district', 'Often every child in one grade, commonly grade 2', '"Multiple criteria are used" (Charlotte-Mecklenburg)', 'An ability test plus teacher, parent and classroom evidence'],
          ['SHSAT', 'NYC Public Schools', 'NYC residents in grade 8, or first-time grade 9', '"the sole factor" for the eight testing specialized high schools', '50 questions per section, 180 minutes standard time, computer-adaptive from fall 2026'],
          ['Hunter College High School entrance exam', 'Hunter College Campus Schools', 'Students currently in grade 6, for grade 7 entry', 'Reading comprehension, mathematics and a writing assignment', 'Three hours; 30 multiple-choice math questions; no calculator; January 27, 2027'],
          ['Boston exam schools', 'Boston Public Schools', 'Boston residents entering grade 6, 8 or 9 in September 2026', 'A composite "30% on MAP Growth and 70% GPA"', 'MAP Growth (NWEA) in reading and math, January 2027'],
          ['HSPT (High School Placement Test)', 'Scholastic Testing Service', 'Grade 8, for grade 9 placement', 'Verbal, quantitative, reading, mathematics and language skills', 'Five subtests (math 64 items, quantitative 52); no calculator'],
          ['TACHS', 'Riverside Insights with three New York dioceses', 'Grade 8 in 2026 to 2027', '"academic achievement in reading, written expression, and mathematics, along with general reasoning skills"', 'Online at home, about 2 hours and 10 minutes, 6 timed subtests, built-in four-function calculator'],
          ['ISEE', 'E3n, through admission.org', 'Students applying to grades 2 to 12', 'Verbal and quantitative reasoning, reading comprehension, mathematics achievement, unscored essay', 'Online, paper or at home; Middle and Upper Level 2 hours 40 minutes plus two breaks'],
          ['SSAT', 'E3n, through admission.org', 'Students currently in grades 3 to 11', '"verbal, math, and reading skills" plus a non-scored writing sample', '"virtually unspeeded"; paper, SSAT at Home or a Prometric center']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://riversideinsights.com/k12-assessments/cogat" rel="noopener" target="_blank">Riverside Insights CogAT</a> and Iowa Assessments brochures; Pearson&rsquo;s NNAT3 and OLSAT 8 product pages; <a class="ag-inline-link" href="https://www.schools.nyc.gov/enrollment/enroll-grade-by-grade/gifted-and-talented" rel="noopener" target="_blank">NYC Public Schools Gifted and Talented</a> and SHSAT pages; Hunter College Campus Schools admissions; Boston Public Schools exam schools; Scholastic Testing Service HSPT pages and Interpretive Manual; the TACHS Student Handbook, Parent Guide and FAQ; <a class="ag-inline-link" href="https://www.admission.org/assessments/isee/about" rel="noopener" target="_blank">ISEE</a> and <a class="ag-inline-link" href="https://www.admission.org/assessments/ssat/about-the-ssat" rel="noopener" target="_blank">SSAT</a> pages at admission.org. Read raw between 31 October and 1 November 2026. Modern Age Coders is not connected with any publisher, school system, diocese or school named here.' }
      ]
    },
    {
      id: 'screening', tint: 'deep', eyebrow: 'Gifted screening',
      h2: 'Which test does a gifted and talented program use for screening?',
      lede: 'Most public districts pick one ability test, give it to every child in one grade, and treat the score as one piece of a larger picture. The four names below cover nearly every district letter, and two pages explain the processes around them.',
      body: [
        { kind: 'two',
          leftH3: 'The four screening tests',
          left: [
            'If the letter names the Cognitive Abilities Test, our <a class="ag-inline-link" href="/cogat-test-prep">CogAT reasoning and readiness page</a> walks through its verbal, quantitative and figural batteries and the way four districts read the results, with paper-folding and sorting games for ages 6 to 9.',
            'A child who is still learning English often meets the Naglieri test instead. The <a class="ag-inline-link" href="/nnat-test-prep">NNAT3 guide</a> explains why a picture-only test with pictorial directions suits mixed-language classrooms, and teaches children to track what moves and what stays fixed in a design.',
            'Connecticut and California districts are among those that still give the Otis-Lennon. Our <a class="ag-inline-link" href="/olsat-test-prep">OLSAT 8 page</a> focuses on the listening and sequencing habits a young child needs when directions are read aloud once.',
            'The <a class="ag-inline-link" href="/iowa-assessments-math-prep">Iowa Assessments math page</a> is the odd one out: it covers an achievement test, so it teaches real grade 1 to 5 math, from reading a bar graph to subtracting across zeros, rather than reasoning play.'
          ],
          rightH3: 'The processes around the tests',
          right: [
            'For families whose district letter names no test at all, or names several, the <a class="ag-inline-link" href="/gifted-and-talented-test-prep">gifted and talented test prep guide</a> lays out the usual sequence from universal screening to a placement team, and why a single score rarely decides anything.',
            'New York City is the exception that confuses everyone. Its <a class="ag-inline-link" href="/nyc-gifted-and-talented-guide">NYC Gifted and Talented guide</a> covers the 2027 application windows, how a report card grade converts to the 1 to 4 scale, and what kindergarten teachers look for, because the city no longer tests at all.'
          ] },
        { kind: 'table', mt: true, caption: 'When a screening test usually arrives, by grade (our summary of the district pages quoted on this site, read 31 October 2026)', head: ['Grade', 'What some districts do', 'Example from a published district page'], rows: [
          ['Kindergarten', 'NYC families apply for G&amp;T entry; no test', 'NYC Public Schools: kindergarten window December 9, 2026 to January 22, 2027'],
          ['Grade 1', 'A nonverbal screener for every child', 'Fort Worth ISD: "universal screener for all first graders" (NNAT3)'],
          ['Grade 2', 'The most common universal screening year', 'San Ramon Valley (CogAT), Edmonds (NNAT3), Charlotte-Mecklenburg (CogAT with i-Ready)'],
          ['Grade 3', 'A second chance, or the first screen in some towns', 'Darien Public Schools: the OLSAT in "grades 3 and 5"'],
          ['Grades 1 to 4', 'NYC G&amp;T entry by report card', 'Grades 1 to 4 window April 19 to May 7, 2027'],
          ['Grade 6', 'A later screen for middle school services', 'Edmonds School District screens grade 6 with the NNAT3']
        ] },
        { kind: 'p', mt: true, html: '<b>New York City has no G&amp;T test.</b> The city&rsquo;s Gifted and Talented page says the programs "offer accelerated instruction" to eligible elementary students, and describes eligibility by pre-K teacher evaluation, by interview after which "early childhood education experts nominate eligible applicants", or, for grades 1 to 4, by report card grades "of a 3 or 4, or the equivalent". It mentions no admissions test anywhere. A family in New York who is offered a paid G&amp;T test course should know that no such test exists in the current process.' }
      ]
    },
    {
      id: 'prep', tint: 'tint', eyebrow: 'Prep or not',
      h2: 'Should you prepare a child for a gifted test?',
      lede: 'Not by drilling. Several districts and publishers say in writing that they discourage commercial preparation, and their reasons are worth reading before anyone spends money. What does help is a calm child who has seen the format once and who reasons, counts and builds for fun.',
      body: [
        { kind: 'table', caption: 'What districts and test organisers say about preparation, in their own words (pages read 31 October 2026)', head: ['Organiser', 'Test', 'What they say'], rows: [
          ['San Ramon Valley Unified School District, California', 'CogAT', '"Our district does not recommend any materials for CogAT preparation." Students are encouraged toward "minimal test preparation".'],
          ['Edmonds School District, Washington', 'NNAT3', '"excessive preparation for the NNAT isn\'t recommended"; asked whether a child should study first, the district answers "No".'],
          ['Darien Public Schools, Connecticut', 'OLSAT', '"No one score on any one measure determines placement."'],
          ['Hunter College High School, New York', 'Entrance exam', 'The school "does not endorse any test preparation service or agency".'],
          ['Riverside Insights and three dioceses', 'TACHS', 'Riverside Insights, with the dioceses, "does not encourage or endorse coaching or tutoring programs", and "Official TACHS practice tests are not published or provided".'],
          ['Scholastic Testing Service', 'HSPT', 'Advises families to "avoid expensive preparation materials" and to trust a "well-rounded education".']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the organisers say this',
          left: [
            'A reasoning screener is meant to show how a child thinks on an ordinary morning. Rehearsing look-alike puzzles can lift the score without changing the thinking, and a child may then land in a class paced beyond them.',
            'Outside scores are often refused too. Charlotte-Mecklenburg says private testing is not accepted for gifted identification, and St. Louis Public Schools says assessments from other districts or independent examiners are not accepted. Paying for a private sitting rarely buys a second route in.'
          ],
          rightH3: 'What honest readiness looks like',
          right: [
            'Familiarity with the format, once: the district&rsquo;s own sample sheet, or the publisher&rsquo;s free family guide, so that the screen, the pictures or the read-aloud directions are not a surprise.',
            'Broad reasoning, number sense and spatial play, for months rather than days: sorting objects and saying why, building and folding, noticing patterns on a calendar, splitting numbers into parts. These habits help in class whether or not a program place follows, which is why our young-learner lessons are built on them and never on copied items.'
          ] }
      ]
    },
    {
      id: 'entrance', tint: 'deep', eyebrow: 'Exam schools',
      h2: 'Which entrance test do selective and private high schools use?',
      lede: 'It depends on the city and the kind of school. Public exam schools in New York and Boston run their own processes; Catholic high schools usually use the HSPT, or the TACHS in the New York dioceses; independent schools ask for the ISEE or SSAT. Six pages here cover them.',
      body: [
        { kind: 'two',
          leftH3: 'Public exam schools',
          left: [
            'Eighth graders in the five boroughs who want Stuyvesant, Bronx Science, Brooklyn Tech or the other testing schools should start with <a class="ag-inline-link" href="/shsat-math-prep">SHSAT math prep and tutoring</a>, which covers the move to a computer-adaptive format in fall 2026 and what that means for pacing and skipping.',
            'Hunter College High School takes students only at grade 7, through an exam it writes itself. Our <a class="ag-inline-link" href="/hunter-college-high-school-math-prep">Hunter entrance exam math page</a> is for sixth graders, and works on five-choice elimination and calculator-free pattern spotting before the January 27, 2027 sitting.',
            'Boston is different again: no Boston-written exam, but a composite of a MAP Growth score and grades. The <a class="ag-inline-link" href="/boston-exam-schools-math-prep">Boston exam schools math guide</a> explains that formula and uses weighted averages as real math practice.'
          ],
          rightH3: 'Catholic and independent schools',
          right: [
            'Many Catholic high schools outside New York use the Scholastic Testing Service battery. <a class="ag-inline-link" href="/hspt-math-prep">HSPT math prep</a> concentrates on its two number subtests, quantitative skills and mathematics, with number series and quantity comparisons.',
            'Families applying to Catholic high schools in Manhattan, the Bronx, Staten Island, Brooklyn, Queens or Long Island meet the TACHS instead. Our <a class="ag-inline-link" href="/tachs-math-prep">TACHS math page</a> covers the at-home online sitting and when the new built-in calculator is worth using.',
            'Independent day and boarding schools ask for one of two tests from the same nonprofit. The <a class="ag-inline-link" href="/isee-ssat-math-prep">ISEE and SSAT math prep page</a> takes each level in turn, with number sense and comparison strategy for both.'
          ] },
        { kind: 'table', mt: true, caption: 'Selective and private high school tests: entry point, calculator and key 2026 to 2027 date (organisers\' pages, read 31 October to 1 November 2026)', head: ['Test', 'Entry grade', 'Calculator', 'Key date published'], rows: [
          ['SHSAT', 'Grade 9 (or grade 10 from a first-time grade 9 sitting)', 'Not permitted', 'Register by October 30, 2026 in MySchools'],
          ['Hunter College High School', 'Grade 7 only', 'Not permitted', 'Exam on January 27, 2027'],
          ['Boston exam schools', 'Grades 7 and 9 (O\'Bryant also takes a few in grade 10)', 'See NWEA\'s MAP Growth guidance', 'MAP Growth in school January 11 to 15, 2027'],
          ['HSPT', 'Grade 9', 'Not permitted', 'Set by each high school; STS runs no national test day'],
          ['TACHS', 'Grade 9', 'A basic four-function calculator inside the platform, new in 2026', 'November 6, 2026 (Archdiocese of New York) and November 7, 2026'],
          ['ISEE and SSAT', 'Grades 2 to 12 (ISEE), grades 3 to 11 sit the SSAT', 'See the organiser\'s page', 'Fall, winter and spring testing seasons for the ISEE; see admission.org']
        ] },
        { kind: 'p', mt: true, html: 'One surprise for parents: NYC Public Schools says the SHSAT "is not used to determine admissions to LaGuardia High School". Another: the Hunter, SHSAT and HSPT math sections allow no calculator, so accurate mental arithmetic matters more than any trick.' }
      ]
    },
    {
      id: 'advanced', tint: 'tint', eyebrow: 'Advanced programs',
      h2: 'What programs are there for advanced students beyond school gifted classes?',
      lede: 'Talent searches, online schools and acceleration policies serve students who need more than their grade offers.',
      body: [
        { kind: 'three', cells: [
          { h3: 'After Duke TIP', p: 'Duke&rsquo;s provost notes that TIP and its Academic Talent Search were "permanently closed" in 2020. Our <a class="ag-inline-link" href="/duke-tip-alternatives">Duke TIP alternatives page</a> compares the university programs families now use, such as Northwestern&rsquo;s Center for Talent Development, which says "No test scores or portfolio materials needed to enroll." at its open tier.' },
          { h3: 'An online high school', p: 'Stanford Online High School serves students in grades 7 to 12 and states that "Admission to Stanford OHS is competitive". Our <a class="ag-inline-link" href="/stanford-online-high-school-math-prep">Stanford OHS math page</a> looks at its proof-centred courses and the January 7, 2027 deadline.' },
          { h3: 'Acceleration at school', p: 'Texas now enrolls sixth graders in the top 40 percent on the Grade 5 Math STAAR in an advanced track automatically. The <a class="ag-inline-link" href="/accelerated-math-program-online">accelerated math program page</a> maps what compacted math squeezes together, grade 7 idea by grade 8 idea.' }
        ] },
      ]
    },
    {
      id: 'choose', tint: 'deep', eyebrow: 'How to choose',
      h2: 'How do you find out which test your child needs?',
      lede: 'Start from the decision, not the test. Work out who decides the place your child wants, read that body&rsquo;s own page, and only then pick a member page here. Six steps, then one worked example of ours.',
      body: [
        { kind: 'ol', items: [
          '<b>Name the decision.</b> Is this a gifted service inside your child&rsquo;s current school, a separate public school with an entrance process, or a private or Catholic school? Each has a different decider.',
          '<b>Find the decider&rsquo;s own page.</b> For gifted services that is your district&rsquo;s advanced learning or GATE page; for exam schools, the city school system; for Catholic schools, the diocese or the school; for independent schools, the admissions office.',
          '<b>Read the test name and the grade.</b> Write down exactly what the page names (CogAT Screening Form, NNAT3, MAP Growth, HSPT) and which grade sits it. Our table above shows what each name means.',
          '<b>Check whether there is a test at all.</b> NYC Gifted and Talented has none, and Boston weighs grades more than the test. A family can lose months preparing for the wrong thing.',
          '<b>Read what the decider says about preparation.</b> If the district says no materials are recommended, take it at its word; if the school publishes free samples, use those and nothing imitation.',
          '<b>Open the matching page here.</b> Each quotes the organiser and teaches the thinking underneath with problems we wrote.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Worked example (ours): one family, two tests',
          left: [
            'Picture a family in Queens with a first grader and a seventh grader. For the younger child, steps 1 and 2 lead to the NYC Gifted and Talented page. Step 4 settles it: no test. The grades 1 to 4 window opens on April 19, 2027 and eligibility rests on report card grades, so the job is good classroom work and a calm application, not a prep course.',
            'For the older child, step 1 gives two kinds of school. A specialized high school means the SHSAT in grade 8, in fall 2027, under NYC Public Schools. A Catholic high school in the Diocese of Brooklyn/Queens means the TACHS, also in grade 8. Both tests include calculator-light math, so a year of strong middle school math serves both, and the family can decide on registrations a year from now.'
          ],
          rightH3: 'What this example shows',
          right: [
            'The same household met three processes and only two of them were tests. The family read the organisers&rsquo; pages first, so nobody spent a winter drilling a six-year-old for an exam that does not exist.'
          ] }
      ]
    },
    {
      id: 'warmups', tint: 'tint', eyebrow: 'Thinking, not items',
      h2: 'What kind of reasoning practice is honest at home?',
      lede: 'Puzzles that grow a real habit, and look nothing like a test page. Here are two calendar warm-ups we wrote, one for ages 7 to 9 and one for middle schoolers, with the reasoning written out.',
      body: [
        { kind: 'two',
          leftH3: 'Warm-up 1 (ours, ages 7 to 9)',
          left: [
            '<b>Question.</b> The 3rd of a month is a Tuesday. What day of the week is the 24th?',
            '<b>Talking it through.</b> A week is 7 days, so every 7 days you land on Tuesday again: the 10th, the 17th and the 24th. Three jumps of 7 is 21, and 3 + 21 = 24. The 24th is a Tuesday. Saying "it repeats every seven" is the rule; check it on a real calendar.'
          ],
          rightH3: 'Warm-up 2 (ours, grades 6 to 8)',
          right: [
            '<b>Question.</b> Today is a Wednesday. What day of the week will it be in 100 days?',
            '<b>Talking it through.</b> Whole weeks change nothing, so only the remainder after dividing by 7 matters. 100 = 14 x 7 + 2, so after 98 days it is Wednesday again, and 2 more days gives Friday. Same idea as warm-up 1, now as division with remainders.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Grade by grade',
    h2: 'A route through the tests, kindergarten to grade 8',
    lede: 'Our map, built from the grades each organiser publishes. Your district may differ.',
    table: { caption: 'When each test or process can appear (ours)', head: ['Grade', 'What may come up'], rows: [
      ['Kindergarten', 'NYC G&amp;T application, decided without a test'],
      ['Grades 1 to 3', 'CogAT, NNAT3 or OLSAT 8 screening; Iowa in some states; ISEE Primary for grade 2 entry'],
      ['Grades 4 to 6', 'Later screens; Hunter eligibility from grade 5 state tests; Boston applications'],
      ['Grade 7', 'Hunter entry; SSAT and ISEE; Boston grade 7 entry'],
      ['Grade 8', 'SHSAT, HSPT and TACHS for grade 9 places']
    ] },
    left: { h3: 'For parents', ps: [
      'Most children meet one or two of these, not thirteen. Find yours and set the rest aside.'
    ] },
    right: { h3: 'For students', ps: [
      'Ask which test, who runs it and when. Then read that organiser&rsquo;s page with a parent.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Courses from first puzzles to middle school math',
    lede: 'Live courses arranged by age, so a family can carry on after a screening or an entrance test with the same teachers.',
    bands: [
      { num: 'I', h3: 'Young thinkers', sub: 'Ages 4 to 9', courses: [
        { code: 'USGS / Y / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning and readiness', blurb: 'Patterns, shapes, amounts.' },
        { code: 'USGS / Y / 02', slug: 'early-math-foundations', title: 'Early math foundations', blurb: 'Concrete, playful number.' },
        { code: 'USGS / Y / 03', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Number sense, not tricks.' }
      ] },
      { num: 'II', h3: 'Middle school', sub: 'Grades 6 to 9', courses: [
        { code: 'USGS / M / 01', slug: 'shsat-math-prep-course', title: 'SHSAT math prep', blurb: 'Calculator-free middle school math.' },
        { code: 'USGS / M / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Grades 6 to 8 in depth.' },
        { code: 'USGS / M / 03', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'Contest problems, explained.' }
      ] },
      { num: 'III', h3: 'Thinking in steps', sub: 'Ages 7 and up', courses: [
        { code: 'USGS / T / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Rules, steps, checks.' },
        { code: 'USGS / T / 02', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Logic you can watch run.' },
        { code: 'USGS / T / 03', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Ready for Algebra I.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons that grow the thinking, not the test score',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After-school sessions sized to the child&rsquo;s age.' },
      { time: 'Weekends', l: 'Longer problem sessions for middle schoolers.' },
      { time: '1-on-1', l: 'One teacher, one plan, one child.' }
    ],
    cells: [
      { h3: 'Organiser first', p: 'We read your test&rsquo;s own page with you.' },
      { h3: 'Our problems', p: 'Written by us, never lifted from a publisher.' },
      { h3: 'Reason aloud', p: 'Students say why before they answer.' },
      { h3: 'Right test, right age', p: 'Play for six-year-olds, math for eighth graders.' },
      { h3: 'Honest limits', p: 'No score, place or program promises.' },
      { h3: 'Batch or private', p: 'Groups of fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'What our students build',
  projectsLede: 'Puzzles, games and first programs from children in our classes. See more on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents in their own words, copied from Google.',

  fees: {
    h2: 'Fees',
    lede: 'Whichever test sits ahead, lessons are paid month by month with no long commitment, so a family can start well before a deadline and stop when it has passed.',
    free: ['A free first class', 'Talk through which test applies', 'No card details'],
    group: ['Fifteen to twenty students', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A teacher for your child only', 'Plan built around your test date', 'Flexible times']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Gifted and selective school tests: common questions',
    items: [
      { q: 'What test is used for gifted and talented programs?', a: 'Most US districts use one ability test for screening, usually the CogAT from Riverside Insights or the NNAT3 or OLSAT 8 from Pearson, sometimes with the Iowa Assessments. The score is then weighed with teacher, parent and classroom evidence. Your district\'s own page names its test.' },
      { q: 'What is the difference between the CogAT, NNAT and OLSAT?', a: 'All three sample reasoning rather than school learning. The CogAT has verbal, quantitative and nonverbal batteries; the NNAT3 is entirely nonverbal, with pictorial directions; the OLSAT 8 covers verbal, nonverbal and quantitative abilities and is untimed up to 75 minutes.' },
      { q: 'Does NYC have a gifted and talented test?', a: 'No. NYC Public Schools decides kindergarten eligibility through pre-K teacher evaluations or interviews, and grades 1 to 4 eligibility through report card grades of 3 or 4 or the equivalent. Its Gifted and Talented page describes no admissions test.' },
      { q: 'Can you prepare a child for a gifted test?', a: 'You can make a child comfortable with the format and grow reasoning through play, but drilling look-alike items is not real preparation. San Ramon Valley Unified recommends no CogAT materials, and Edmonds says excessive NNAT preparation is not recommended.' },
      { q: 'What grade do children take gifted tests?', a: 'Grade 2 is the most common universal screening year, used by San Ramon Valley, Edmonds and Charlotte-Mecklenburg among others. Fort Worth screens grade 1, and Darien screens grades 3 and 5.' },
      { q: 'Which test do I need for a NYC specialized high school?', a: 'The SHSAT, taken in grade 8 or as a first-time ninth grader. NYC Public Schools calls it the sole factor for the eight testing specialized high schools, and it becomes computer-adaptive from fall 2026. LaGuardia High School does not use it.' },
      { q: 'What is the difference between the HSPT, TACHS, ISEE and SSAT?', a: 'The HSPT and TACHS are used by Catholic high schools, with the TACHS in the New York dioceses. The ISEE and SSAT are used by independent day and boarding schools and are now both offered through admission.org. Each covers reading, math and reasoning in its own format.' },
      { q: 'Is a calculator allowed on these tests?', a: 'Not on the SHSAT, the Hunter exam or the HSPT math subtests. The TACHS gives a basic four-function calculator inside its platform from 2026, and personal calculators are not allowed. For the ISEE and SSAT, check the organiser\'s current rules.' },
      { q: 'What happened to Duke TIP?', a: 'Duke\'s provost office says TIP and its Academic Talent Search closed permanently in 2020, and Duke\'s summer work continues through Duke Pre-College. Families now look at programs such as Northwestern\'s Center for Talent Development.' },
      { q: 'When are your classes held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with any test publisher or school?', a: 'No. Modern Age Coders is an independent online school, not linked with Riverside Insights, Pearson, NYC Public Schools, Hunter, Boston Public Schools, STS, the dioceses or E3n. We quote and link their pages, and we cannot promise any score, gifted placement or school place.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related doors',
    lede: 'Other pages for US families weighing tests and stretch work.',
    items: [
      { href: '/map-growth-math-test-prep', label: 'MAP Growth math', p: 'The NWEA test inside the Boston formula.' },
      { href: '/middle-school-math-placement-test-prep', label: 'Middle school math placement', p: 'When a school decides who skips ahead.' },
      { href: '/psat-8-9-math-prep', label: 'PSAT 8/9 math', p: 'An above-grade test some programs accept.' },
      { href: '/math-competitions-for-middle-school-students', label: 'Middle school math contests', p: 'Stretch for strong problem solvers.' },
      { href: '/math-kangaroo-usa-preparation', label: 'Math Kangaroo', p: 'A gentle first contest for young children.' },
      { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math', p: 'Building a sequence outside school.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us your child&rsquo;s grade and the test or school named in your letter. We will check the organiser&rsquo;s page with you and suggest a sensible plan, or say plainly that none is needed.',
    readFirst: 'See <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or browse <a class="ag-inline-link" href="/courses">all courses</a> first.',
    note: 'Classes run live by video from India at times that suit US after-school hours and weekend mornings. WhatsApp is the quickest way to reach us.',
    formNote: 'There is no charge for the first class and no card to enter.'
  },

  footer: {
    cols: [
      { h4: 'Tests explained', links: [
        { href: '/cogat-test-prep', label: 'CogAT' },
        { href: '/shsat-math-prep', label: 'SHSAT math' },
        { href: '/hspt-math-prep', label: 'HSPT math' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/online-math-tutor-2nd-grade', label: 'Second grade math' },
        { href: '/online-math-tutor-7th-grade', label: 'Seventh grade math' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Thirteen tests, one table'
  },

  personalityCss: `
.ag-root.ag-usgs .ag-hero h1 { letter-spacing: -0.014em; max-width: 22ch; }
.ag-root.ag-usgs .ag-capsule { border-left-width: 6px; }
.ag-root.ag-usgs .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-usgs .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-usgs .ag-steps li { margin-bottom: 12px; }
`,

  dossier: {
    curriculumAuthority: 'Each test organiser\'s own page or document, re-grepped 1 November 2026 in the member pages\' raw copies: Riverside Insights (CogAT, Iowa Assessments, TACHS with the Archdiocese of New York, Diocese of Brooklyn/Queens and Diocese of Rockville Centre), Pearson (NNAT3, OLSAT 8), NYC Public Schools (Gifted and Talented, SHSAT), Hunter College Campus Schools, Boston Public Schools, Scholastic Testing Service (HSPT), E3n at admission.org (ISEE, SSAT, fetched 1 November 2026), and district pages from San Ramon Valley, Edmonds, Darien, Fort Worth, Charlotte-Mecklenburg and St. Louis.',
    localProject: 'Our grade-by-grade route table, the six-step chooser, the worked example of a Queens family with a first grader (NYC G&T by report card, April 19, 2027 window) and a seventh grader (SHSAT or TACHS in grade 8), two calendar warm-ups (3rd Tuesday so 24th Tuesday; 100 days after Wednesday is Friday since 100 = 14 x 7 + 2). Lesson family: reading the organiser\'s own page before choosing a test.',
    requiredMentions: ['Thirteen tests, one table', 'Students currently in grades 3 to 11', 'E3n, through admission.org', 'Riverside Insights with three New York dioceses', 'Online, paper or at home; Middle and Upper Level 2 hours 40 minutes plus two breaks', '100 = 14 x 7 + 2', 'Picture a family in Queens with a first grader and a seventh grader.', 'Start from the decision, not the test.', 'A family in New York who is offered a paid G&amp;T test course should know that no such test exists in the current process.', 'Set by each high school; STS runs no national test day'],
    sources: [
      { claim: 'Riverside Insights CogAT page: measures verbal, quantitative and nonverbal reasoning.', url: 'https://riversideinsights.com/k12-assessments/cogat' },
      { claim: 'Pearson NNAT3: nonverbal measure of general ability, K to 12, 30 minutes.', url: 'https://www.pearsonassessments.com/store/usassessments/en/Store/Professional-Assessments/Cognition-%26-Neuro/Naglieri-Nonverbal-Ability-Test-%7C-Third-Edition/p/100001830.html' },
      { claim: 'NYC Public Schools Gifted and Talented: eligibility without a test, 2026 to 2027 windows.', url: 'https://www.schools.nyc.gov/enrollment/enroll-grade-by-grade/gifted-and-talented' },
      { claim: 'NYC Public Schools SHSAT guide: sole factor, 50 questions per section, 180 minutes, computer-adaptive from fall 2026.', url: 'https://www.schools.nyc.gov/learning/testing/specialized-high-school-admissions-test' },
      { claim: 'Hunter College High School entrance exam 2027: no endorsement of test prep, 30 math questions, no calculator.', url: 'https://www.hunterschools.org/high-school/admissions/entrance-exam-2027' },
      { claim: 'Boston Public Schools exam schools: 30% MAP Growth and 70% GPA.', url: 'https://www.bostonpublicschools.org/academics/exam-schools' },
      { claim: 'Scholastic Testing Service HSPT parent pages and Interpretive Manual.', url: 'https://www.ststesting.com/hsp/' },
      { claim: 'TACHS official site and Student Handbook: what it measures, no coaching endorsement, 2026 dates, calculator.', url: 'https://www.tachsinfo.com/' },
      { claim: 'ISEE at admission.org: grades 2 to 12, sections and timing.', url: 'https://www.admission.org/assessments/isee/about' },
      { claim: 'SSAT at admission.org: grades 3 to 11, virtually unspeeded, verbal, math and reading.', url: 'https://www.admission.org/assessments/ssat/about-the-ssat' },
      { claim: 'San Ramon Valley Unified GATE testing: no CogAT prep materials recommended.', url: 'https://www.srvusd.net/Departments/Educational-Services/GATE/GATE-Testing/' }
    ],
    rejectedClaims: [
      'Any test item, sample question or practice test from any publisher or school: not reproduced or imitated (rule 9 and copyright); families are pointed to the organisers\' own free material.',
      'A national gifted cut-off score: none exists; districts set their own.',
      'An HSPT total item count: the Interpretive Manual gives subtest counts only, and parts are never summed into a total.',
      'The Scholastic Testing Service sentence on preparation in full: it uses the word "best" twice, so only the fragments "avoid expensive preparation materials" and "well-rounded education" are quoted.',
      'ISEE and SSAT prices and the SSAT "gold standard" line on admission.org: not used (no prices; marketing claim).',
      'The ISEE and SSAT calculator rules: not found on the two pages read, so the table says to check the organiser\'s page.',
      'Hosts blocked earlier in this cluster (cty.jhu.edu, nysenate.gov, archdiocesan HSPT pages): not retried.',
      'Any promise that lessons raise a score or win a gifted place or school seat: refused.',
      'Any affiliation with the publishers, school systems, dioceses, schools or E3n: none.'
    ]
  }
};
