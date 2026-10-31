'use strict';
// NYC Gifted and Talented guide (ag- guide door; UK and US exams cluster Phase 2, row US048). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md (writer brief, rule 9: reasoning and readiness, never
// test-item drilling; the NYC G&T process has no admissions test). Every fact read raw with curl on 31 October 2026
// from NYC Public Schools; copies in keyword-research-2026-09/uk-us-gap/src/nyc-gifted-and-talented-guide/:
//  - schools.nyc.gov/enrollment/enroll-grade-by-grade/gifted-and-talented (gt.html, gt.txt): "Gifted & Talented programs
//    offer accelerated instruction to eligible elementary school students in New York City." Kindergarten for fall 2027:
//    "Wednesday, December 9, 2026" application opens, "Friday, January 22, 2027" closes, "Tuesday, March 30, 2027" offer
//    release. Grades 1 to 4: "Monday, April 19, 2027" opens, "Friday, May 7, 2027" closes, "Thursday, June 10, 2027"
//    offer release (weekdays checked in Python). Kindergarten: "eligibility will be determined after you apply";
//    "behaviors that may indicate readiness for accelerated learning"; DOE/district/Pre-K Center/CBO/charter pre-K
//    students "will be evaluated by their current pre-K teachers"; private, parochial or not in school: Division of
//    Early Childhood Education "contacts applicants to set up interviews"; "early childhood education experts nominate
//    eligible applicants"; the Teacher/Program Nomination Form "contains three sections" (Section 1 Curiosity; Section 2
//    Approaches to Learning; Section 3 Social Perception and Self-Direction) and their listed behaviors; "High levels of
//    curiosity and self-initiated exploration can indicate readiness for accelerated learning". Offers: "families'
//    application choices, seat availability, and admissions priorities"; sibling priority; some district priority;
//    "not all eligible applicants will be made offers"; waitlists. Grades 1 to 4: course grades "of a 3 or 4, or the
//    equivalent" in Math, Reading and Writing; "Cannot have had a 1 in any marking period in Math, Reading, Writing,
//    Social Studies and Science in the current school year"; "there is no ranking within eligible students based on
//    differences in course grades"; charter/private/parochial families email report card grades, decision "within 2
//    business days"; the conversion table (1 to 64 = 1, 65 to 79 = 2, 80-89 = 3, 90-100 = 4; letter grades A = 4,
//    B = 3, C = 2, D = 2, F = 1; "*Updated 4/26/2024"); homeschool route with the "2nd or 3rd quarterly report";
//    "Eligibility to apply to G&T programs does not guarantee a G&T seat."; "G&T programs do not give priority to
//    zoned families"; Diversity In Admissions; district G&T students can only apply to Citywide programs; citywide
//    students "DO NOT have to reapply"; appeals to DECEGT@ (kindergarten) and ESEnrollment@ (grades 1 to 4), result
//    "within three weeks", further appeal under "New York Education Law Section 310"; phone 718-935-2009. The page's
//    appeal paragraph still carries 2026 deadlines ("April 21st, 2026"); the page says so rather than guessing 2027.
//    The page describes no admissions test anywhere (grep for "test" finds only the footer menu item "Testing").
//  - schools.nyc.gov/enrollment/enroll-grade-by-grade/kindergarten (k.html): "children enter kindergarten in September
//    of the calendar year they turn five"; "Children born in 2021 will be eligible for kindergarten in September 2026";
//    "ELLs participate in the same Gifted & Talented admissions process".
// Our own material, labelled: born in 2022 for fall 2027 kindergarten (our arithmetic from the published rule), two
// report-card worked examples (eligible; not eligible because of a 62), the readiness map from the three nomination
// sections to home play, eight warm-up puzzles with answers checked in Python (20 legs, 5 squares, 14, 9 grapes,
// 3 ways, 15 blocks), the year-by-year route table. Lesson family: report-card conversion and play that grows curiosity.
// Not used: G&T program lists, district seat counts, any demographic data, any test-prep claims.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'GIFTED', blurb: 'The NYC Gifted and Talented route for fall 2027, step by step: kindergarten nominations, the grades 1 to 4 report-card rule, offers, appeals and calm readiness at home.' },
  slug: 'nyc-gifted-and-talented-guide',
  code: 'ngt',
  accent: '#437349',
  accentRationale: 'NYC Gifted and Talented guide: a garden green #437349 from the US allocation table, about 5.6:1 on paper #FBF8F2, calmer than the test-prep olives so the page reads as a guide',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  routeLabel: 'NYC Gifted and Talented guide',
  title: 'NYC Gifted and Talented Guide 2027: No Test, Real Readiness',
  description: 'NYC Gifted and Talented for fall 2027: kindergarten nominations, the grades 1 to 4 report card rule, every 2026 to 2027 date, offers, appeals and calm readiness.',
  ogDescription: 'NYC G&T has no admissions test for fall 2027. How kindergarten nominations and the grades 1 to 4 report card rule work, every date, and what genuinely helps at home.',
  twitterDescription: 'The NYC G&T process for fall 2027, explained from NYC Public Schools.',
  pageName: 'NYC Gifted and Talented Guide',
  webPageDescription: 'A parent guide to the New York City Gifted and Talented admissions process for fall 2027, from NYC Public Schools\' own pages: dates, kindergarten nominations, report card eligibility for grades 1 to 4, offers, appeals and readiness at home.',
  courseDescription: 'Live online reasoning and readiness classes for children aged 6 to 9 in New York City, in a batch of 15 to 20 or one to one: patterns, number sense and spatial play, never test drilling.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'NYC Gifted and Talented guide',
  navLinks: [
    { href: '#dates', label: 'Dates' },
    { href: '#kindergarten', label: 'Kindergarten' },
    { href: '#grades', label: 'Grades 1 to 4' },
    { href: '#offers', label: 'Offers' },
    { href: '#readiness', label: 'Readiness' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'New York City &middot; Kindergarten to grade 4 &middot; Fall 2027 entry',
  h1: 'NYC Gifted and Talented guide for 2027',
  lede: 'Many parents still search for an NYC gifted and talented test, but the fall 2027 process that NYC Public Schools describes has none. Kindergarten eligibility rests on what pre-K teachers or early childhood experts observe, and entry to grades 1 to 4 rests on the report card. This guide walks through both routes from the city&rsquo;s own pages, read on 31 October 2026, lists every date, works two report cards through the official conversion table, and then turns to the part a family can actually shape: a child&rsquo;s curiosity, persistence and reasoning.',
  secondaryCta: { href: '#grades', label: 'Check a report card' },
  wa: 'Hello Modern Age Coders, we live in New York City and are reading about Gifted and Talented for fall 2027. Could we book a free first class for our child?',
  heroNote: 'Teaching math and coding live since 2020 &middot; 10,000+ students &middot; ages 6 to 67',
  spec: [
    ['Programs', 'Accelerated instruction, elementary grades'],
    ['Admissions test', 'None in the fall 2027 process'],
    ['Kindergarten route', 'Teacher evaluation or interview, then nomination'],
    ['Grades 1 to 4 route', 'Report card grades of 3 or 4'],
    ['Kindergarten applications', 'December 9, 2026 to January 22, 2027'],
    ['Grades 1 to 4 applications', 'April 19 to May 7, 2027'],
    ['Our classes', 'Ages 6 to 9, reasoning and readiness'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'NYC Gifted and Talented programs, run by NYC Public Schools, give accelerated instruction to eligible elementary students. For fall 2027 there is no admissions test: kindergarten eligibility comes from pre-K teacher evaluations or interviews, and grades 1 to 4 from report card grades. Modern Age Coders teaches reasoning and readiness live online for ages 6 to 9, in a batch or 1-on-1, through our Reasoning and Readiness course.',

  picks: {
    eyebrow: 'Learn with a teacher',
    h2: 'Courses that build readiness, not test scores',
    lede: 'One course written for this age and purpose, then two that widen it into problem solving and school math.',
    items: [
      { course: 'reasoning-and-readiness-course-for-young-thinkers', code: 'NGT / 01', title: 'Reasoning and Readiness', note: 'Ages 6 to 9. Patterns, spatial play and number sense, taught as thinking.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'NGT / 02', title: 'Problem solving for kids', note: 'Puzzles, logic and step-by-step thinking for curious children.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'NGT / 03', title: 'Elementary math', note: 'Grades 1 to 5. The school math behind a strong report card.' }
    ]
  },

  sections: [
    {
      id: 'dates', tint: 'tint', eyebrow: 'The calendar',
      h2: 'When are the NYC Gifted and Talented applications for fall 2027?',
      lede: 'There are two separate windows. Kindergarten applications run from December 2026 into January 2027, and applications for grades 1, 2, 3 and 4 run in spring 2027, with offers in March and June.',
      body: [
        { kind: 'table', caption: 'NYC Gifted and Talented key dates for fall 2027 entry (NYC Public Schools Gifted and Talented page, read 31 October 2026; weekdays checked against the calendar)', head: ['Step', 'Kindergarten G&amp;T', 'Grades 1 to 4 G&amp;T'], rows: [
          ['Application opens', 'Wednesday, December 9, 2026', 'Monday, April 19, 2027'],
          ['Application closes', 'Friday, January 22, 2027', 'Friday, May 7, 2027'],
          ['Offers released', 'Tuesday, March 30, 2027', 'Thursday, June 10, 2027'],
          ['How eligibility is set', 'After applying: pre-K teacher evaluation, or an interview for children outside public pre-K', 'Before or during applying: the most recent report card'],
          ['Where you apply', 'The kindergarten application in MySchools, listing G&amp;T programs', 'The G&amp;T upper grade application, once found eligible']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Two windows, two different questions',
          left: [
            'The kindergarten window asks one thing of a family: list G&amp;T programs on the ordinary kindergarten application. The city then decides eligibility afterwards. Nothing has to be prepared or submitted about the child in advance.',
            'The spring window for grades 1 to 4 works the other way round. Eligibility is settled from grades already on a report card, so by April 2027 the deciding evidence already exists. That changes what is worth doing in the months before.'
          ],
          rightH3: 'Which year is my child applying for?',
          right: [
            'NYC Public Schools says children "enter kindergarten in September of the calendar year they turn five", and that children born in 2021 start in September 2026. By that rule, a child born in 2022 is the kindergarten applicant for fall 2027; that step is our arithmetic, so confirm it in MySchools.',
            'A child in kindergarten, grade 1, grade 2 or grade 3 during 2026 to 2027 applies in spring 2027 for a place in grade 1, 2, 3 or 4 the following September.'
          ] },
        { kind: 'source', html: 'Sources: NYC Public Schools <a class="ag-inline-link" href="https://www.schools.nyc.gov/enrollment/enroll-grade-by-grade/gifted-and-talented" rel="noopener" target="_blank">Gifted &amp; Talented</a> and <a class="ag-inline-link" href="https://www.schools.nyc.gov/enrollment/enroll-grade-by-grade/kindergarten" rel="noopener" target="_blank">Kindergarten</a> enrollment pages, read 31 October 2026. Modern Age Coders is not connected with NYC Public Schools.' }
      ]
    },
    {
      id: 'notest', tint: 'deep', eyebrow: 'No test',
      h2: 'Is there an NYC gifted and talented test for 2027?',
      lede: 'No. Nowhere does the fall 2027 process on the NYC Public Schools page mention an admissions test. Kindergarten eligibility is a judgment about observed behaviors, and grades 1 to 4 eligibility is a rule applied to report card grades.',
      body: [
        { kind: 'p', html: 'This matters because search results still fill with test-prep packs and countdown bundles labelled for New York City. Whatever a product says, the city&rsquo;s own description of the fall 2027 process has no sitting, no score and no percentile. For kindergarten, teachers are asked to look for "behaviors that may indicate readiness for accelerated learning", and for the upper grades the city reads the report card the school has already issued.' },
        { kind: 'table', mt: true, caption: 'What decides eligibility in each route (NYC Public Schools Gifted and Talented page, read 31 October 2026)', head: ['Route', 'Evidence the city uses', 'Who supplies it'], rows: [
          ['Kindergarten, child in a DOE, district, Pre-K Center, CBO or charter pre-K', 'An evaluation of the child&rsquo;s learning behaviors', 'The child&rsquo;s current pre-K teachers'],
          ['Kindergarten, child in private or parochial pre-K, or not yet in school', 'An interview arranged after the application closes', 'The Division of Early Childhood Education, then early childhood experts who nominate'],
          ['Grades 1 to 4, NYC public school student', 'Course grades on the most recent report card', 'The child&rsquo;s school'],
          ['Grades 1 to 4, charter, private or parochial student', 'Report card grades emailed and converted to a 4-point scale', 'The family, by email to ESEnrollment'],
          ['Grades 1 to 4, homeschooled child', 'The 2nd or 3rd quarterly report, then a conversation about academics', 'The family, then the enrollment team']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What this means for preparation',
          left: [
            'With no test, there is nothing to cram. A child cannot be drilled into a teacher&rsquo;s observation of curiosity, and report card grades reflect months of ordinary schoolwork rather than a single morning.',
            'The honest preparation is therefore the slow kind: a child who reads, asks questions, enjoys puzzles and keeps going when something is hard. Those habits also make school itself go well, which is the point of the report card rule.'
          ],
          rightH3: 'What we say plainly',
          right: [
            'We do not coach children for kindergarten interviews, and we cannot change a grade already on a report card. We teach reasoning and number sense to children aged 6 to 9 because those skills are worth having, whatever the outcome of an application.',
            'If anyone offers to raise a child&rsquo;s chances of a G&amp;T seat with practice tests for this process, ask which test they mean. For fall 2027 the city lists none.'
          ] },
        { kind: 'source', html: 'Source: NYC Public Schools <a class="ag-inline-link" href="https://www.schools.nyc.gov/enrollment/enroll-grade-by-grade/gifted-and-talented" rel="noopener" target="_blank">Gifted &amp; Talented</a> page, read 31 October 2026. Earlier NYC cycles used other methods; this page describes only the fall 2027 process as published.' }
      ]
    },
    {
      id: 'kindergarten', tint: 'tint', eyebrow: 'Kindergarten route',
      h2: 'How do NYC kindergarten G&T nominations work?',
      lede: 'Families list G&amp;T programs on the kindergarten application, and eligibility is decided afterwards. Children in public pre-K are evaluated by their own teachers; other children are invited to an interview, and early childhood experts nominate eligible applicants.',
      body: [
        { kind: 'ol', items: [
          '<b>Apply between December 9, 2026 and January 22, 2027.</b> On the ordinary kindergarten application, add the G&amp;T programs you want, in your order of preference. The city says that if you list them, "eligibility will be determined after you apply."',
          '<b>If your child is in a public pre-K setting,</b> meaning a DOE or district school, a Pre-K Center, a CBO or a charter school, their current pre-K teachers complete the evaluation. You do not book anything.',
          '<b>If your child is in a private or parochial pre-K, or not yet in school,</b> the Division of Early Childhood Education contacts applicants after the application closes to set up interviews.',
          '<b>Nomination.</b> Based on those interviews, early childhood education experts nominate eligible applicants. For public pre-K children, the teacher evaluation plays this role.',
          '<b>Offers on March 30, 2027.</b> Every kindergarten applicant who applied by the deadline receives a results letter, which may offer a G&amp;T seat or another kindergarten program.'
        ] },
        { kind: 'table', mt: true, caption: 'The three sections of the Teacher/Program Nomination Form (NYC Public Schools, read 31 October 2026)', head: ['Section', 'What teachers are asked to notice'], rows: [
          ['1. Curiosity', 'Questioning, observing, exploring, creating, problem-solving, and gestures, facial expressions and body language'],
          ['2. Approaches to Learning', 'Curiosity and initiative; persistence and engagement; creativity and imagination; self-reflection and regulation'],
          ['3. Social Perception and Self-Direction', 'Collaboration with peers; independence and self-initiated problem-solving; verbal and non-verbal expression, including symbolic play']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How teachers are told to look',
          left: [
            'The guidance asks teachers to consider "each individual child holistically" and "from a strengths-based perspective", to count behaviors that recur over time rather than a fixed number, and to measure against the New York State PreKindergarten Learning standards.',
            'The city adds that "High levels of curiosity and self-initiated exploration can indicate readiness for accelerated learning", and that both verbal and non-verbal behaviors count. A quiet child who builds, sorts and tests ideas with their hands is in scope.'
          ],
          rightH3: 'Where we fit, and where we do not',
          right: [
            'Kindergarten applicants are four or five years old, below the age of 6 at which our classes begin. We do not teach pre-K children and we do not prepare anyone for an interview.',
            'What a parent of a four-year-old can do costs nothing: read together, let the child ask questions, follow their interests, and leave room for the long, absorbed play the form describes. That is exactly the evidence the teachers are looking for.'
          ] },
        { kind: 'source', html: 'Source: NYC Public Schools <a class="ag-inline-link" href="https://www.schools.nyc.gov/enrollment/enroll-grade-by-grade/gifted-and-talented" rel="noopener" target="_blank">Gifted &amp; Talented</a> page, kindergarten section, read 31 October 2026. Students learning English take part in the same G&amp;T admissions process, according to the city&rsquo;s kindergarten page.' }
      ]
    },
    {
      id: 'grades', tint: 'deep', eyebrow: 'Grades 1 to 4 route',
      h2: 'What report card grades do you need for NYC G&T in grades 1 to 4?',
      lede: 'A current public school student is eligible with grades of 3 or 4, or the equivalent, in Math, Reading and Writing on the most recent report card, and no 1 in any marking period this year in Math, Reading, Writing, Social Studies or Science.',
      body: [
        { kind: 'p', html: 'Two details in the city&rsquo;s wording shape everything else. First, "there is no ranking within eligible students based on differences in course grades": a child with straight 4s is not ahead of a child with 3s once both are eligible. Second, the bar against a 1 covers every marking period in the current school year and five subjects, not just the latest report card. A single low mark in Science in the first marking period can rule a child out.' },
        { kind: 'table', mt: true, caption: 'Converting other grading systems to the G&amp;T 1 to 4 scale, a selection (NYC Public Schools conversion table, marked updated 4/26/2024, read 31 October 2026)', head: ['Original grade', 'G&amp;T scale'], rows: [
          ['90 to 100, or A-, A, A+', '4'],
          ['80 to 89, or B-, B, B+', '3'],
          ['65 to 79, or C-, C, C+, or D-, D, D+', '2'],
          ['1 to 64, or F', '1'],
          ['E-, E, E+ and MA, ME', '4'],
          ['G-, G, G+, S+ and MT', '3'],
          ['N, N+, S-, S and MP', '2'],
          ['N-, U, NS and MB', '1']
        ] },
        { kind: 'p', mt: true, html: '<b>Worked example 1 (ours): a private school report card that qualifies.</b> A grade 1 child at a private school has these marks this year. Math: 92, then 94. Reading: B+, then A-. Writing: 86, then 88. Science: 78, then 83. Social Studies: B, then B. Convert the latest marks: Math 94 is a 4, Reading A- is a 4, Writing 88 is a 3. All three core subjects are 3 or above. Now scan every marking period in all five subjects for a 1: the lowest mark, Science 78, converts to a 2, which is allowed. The child meets both conditions, so the family would email the grades to ESEnrollment and expect a decision within 2 business days.' },
        { kind: 'p', html: '<b>Worked example 2 (ours): one early mark that rules a child out.</b> A grade 2 child has a latest report card of Math 91, Reading 85 and Writing 90, which convert to 4, 3 and 4. But in the first marking period Social Studies was 62. Anything from 1 to 64 converts to a 1, and the rule says a child "Cannot have had a 1 in any marking period" in the five subjects this school year. The strong latest grades do not override it. The family could still apply the following year, when a new school year starts the count again.' },
        { kind: 'two', mt: true,
          leftH3: 'Charter, private and parochial schools',
          left: [
            'Families email the child&rsquo;s report card grades to ESEnrollment@schools.nyc.gov with the child&rsquo;s first and last name, date of birth, student ID if there is one, a short note, and the subject line "Grades 1-4 G&amp;T Eligibility". The city converts the grades and replies with an eligibility decision within 2 business days.',
            'If the school uses its own codes, the table above is the city&rsquo;s key. Check the full table on the city page before emailing; we show a selection.'
          ],
          rightH3: 'Homeschooled children',
          right: [
            'The city asks homeschooling families to email ESEnrollment in the spring with the child&rsquo;s name, date of birth, current grade and phone number, and to attach the 2nd or 3rd quarterly report for the current year.',
            'The enrollment team then contacts the family to discuss the child&rsquo;s academics in Math, Reading, Writing, Social Studies and Science before deciding eligibility.'
          ] },
        { kind: 'source', html: 'Source: NYC Public Schools <a class="ag-inline-link" href="https://www.schools.nyc.gov/enrollment/enroll-grade-by-grade/gifted-and-talented" rel="noopener" target="_blank">Gifted &amp; Talented</a> page, grades 1 to 4 section and conversion table, read 31 October 2026. Both worked examples are invented by us to show the rule; check your own child&rsquo;s case with the city.' }
      ]
    },
    {
      id: 'offers', tint: 'tint', eyebrow: 'Offers and appeals',
      h2: 'How are NYC G&T offers made, and can you appeal?',
      lede: 'Being eligible is not the same as getting a seat. Offers depend on the programs a family lists, the seats each program has and its admissions priorities, so some eligible children receive no G&amp;T offer.',
      body: [
        { kind: 'table', caption: 'How offers and appeals work (NYC Public Schools Gifted and Talented page, read 31 October 2026)', head: ['Point', 'What the city says'], rows: [
          ['Basis for offers', 'Families&rsquo; application choices, seat availability and admissions priorities'],
          ['Sibling priority', 'Every G&amp;T program gives priority to siblings of current students'],
          ['District priority', 'Some programs give priority to children living in a specific district'],
          ['Zoned families', 'G&amp;T programs do not give priority to zoned families'],
          ['Diversity In Admissions', 'Some programs take part; each program&rsquo;s priorities are listed in the MySchools directory'],
          ['Waitlists', 'Eligible applicants may be placed on, or add themselves to, program waitlists'],
          ['Accepting an offer', 'Families can accept or decline any offer they receive'],
          ['Current G&amp;T students', 'District G&amp;T students may apply only to Citywide programs; Citywide students do not reapply to stay'],
          ['Appeals', 'By email or letter, with a reply aimed for within three weeks; a further appeal can go to the New York State Commissioner of Education']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Listing programs well',
          left: [
            'Because offers follow the order a family lists, rank programs in true order of preference and include ones within realistic travel. A child is only considered for the programs on the list.',
            'Read each program&rsquo;s priorities in the MySchools directory first. A program with a district priority may be out of reach from another district, however strong the child.'
          ],
          rightH3: 'If you disagree with an eligibility decision',
          right: [
            'The city asks families to appeal by email, to DECEGT@schools.nyc.gov for rising kindergarteners or ESEnrollment@schools.nyc.gov for grades 1 to 4, or by letter to Gifted &amp; Talented Admissions, Room 414, 52 Chambers Street. Include the child&rsquo;s name, date of birth, what happened and how to reach you.',
            'When we read the page on 31 October 2026, its appeal deadlines were still the 2026 ones. Ask the city for the 2027 deadline rather than assuming one; the enrollment line is 718-935-2009.'
          ] },
        { kind: 'source', html: 'Source: NYC Public Schools <a class="ag-inline-link" href="https://www.schools.nyc.gov/enrollment/enroll-grade-by-grade/gifted-and-talented" rel="noopener" target="_blank">Gifted &amp; Talented</a> page, offers and appeals sections, read 31 October 2026. The further appeal is under New York Education Law Section 310, as the page states.' }
      ]
    },
    {
      id: 'readiness', tint: 'deep', eyebrow: 'Readiness at home',
      h2: 'How can I help my child get ready for NYC G&T without test prep?',
      lede: 'Grow the habits the city describes: curiosity, persistence, flexible thinking and steady schoolwork. The table below maps each part of the nomination guidance to everyday activity. The mapping is our suggestion, not the city&rsquo;s.',
      body: [
        { kind: 'table', caption: 'From the city&rsquo;s descriptions to everyday activity (our readiness map)', head: ['What the city names', 'What it can look like at home', 'What to avoid'], rows: [
          ['Curiosity: questioning, observing, exploring', 'A "wonder list" on the fridge; answer a question with "how could we find out?"', 'Answering every question instantly'],
          ['Persistence and engagement', 'One puzzle a day that takes more than a minute', 'Rescuing a child the moment they hesitate'],
          ['Creativity and imagination', 'Build a thing, then tell the story of how it works', 'Only worksheets with one right answer'],
          ['Self-reflection and regulation', 'Ask "what did you try first?" after a hard puzzle', 'Praising speed over method'],
          ['Collaboration', 'Board games and building with a sibling or friend', 'Turning play into a contest every time'],
          ['Grades 1 to 4: Math, Reading and Writing', 'Daily reading and short, regular math practice that keeps school on track', 'A sudden push in the spring of the application year']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why reasoning beats drilling',
          left: [
            'A child who has rehearsed a type of question learns the type; a child who has played with patterns, shapes and numbers learns to think. Only the second survives a new kind of problem, and only the second shows up as the curiosity and persistence teachers note.',
            'For the upper grades, the report card rewards exactly that steady thinking, week after week, in ordinary schoolwork.'
          ],
          rightH3: 'How our classes run for this age',
          right: [
            'Our Reasoning and Readiness classes for ages 6 to 9 use short, playful puzzles about patterns, space and number. The child explains their idea before the teacher says anything, and wrong first tries are welcome because they show the thinking.',
            'Classes are live online in a batch of 15 to 20 or one to one. We tell parents what we see their child doing well and what to play with next, not a predicted outcome.'
          ] }
      ]
    },
    {
      id: 'puzzles', tint: 'tint', eyebrow: 'Warm-up puzzles',
      h2: 'Eight reasoning puzzles to try with a 6 to 9 year old',
      lede: 'These are our own playful puzzles, written for this page. They are not G&amp;T items of any kind, since the fall 2027 process has no test, and they are not taken from any publisher. Let the child talk through each one.',
      body: [
        { kind: 'ol', items: [
          '<b>Legs on the farm.</b> A farmer has 3 hens and 2 cows, and her dog is with her. How many legs are there in the yard, counting the farmer?',
          '<b>Squares in a window.</b> A window is a 2 by 2 grid of small square panes. How many squares of any size can you find?',
          '<b>Next in the row.</b> 2, 5, 8, 11, ... What comes next, and what is the rule?',
          '<b>Fair shares.</b> Three friends share 12 grapes equally, then each eats 1. How many grapes are left altogether?',
          '<b>The odd one out.</b> Circle, triangle, square, apple. Which one does not belong, and can you find a reason for a different answer?',
          '<b>Coin paths.</b> Using only nickels and dimes, how many different ways can you make 20 cents?',
          '<b>Folded paper.</b> Fold a sheet of paper in half, then in half again, and cut one corner off. Before unfolding, guess how many holes or notches you will see. Then check.',
          '<b>Stair steps.</b> A staircase of blocks has 1 block in the first step, 2 in the second, 3 in the third. How many blocks does a 5-step staircase need?'
        ] },
        { kind: 'table', mt: true, caption: 'Answers and the idea behind each (ours; the counting answers checked in Python)', head: ['Puzzle', 'Answer', 'The thinking'], rows: [
          ['1', '20 legs', 'Hens 3 x 2 = 6, cows 2 x 4 = 8, dog 4, farmer 2'],
          ['2', '5 squares', 'Four small panes plus the one big square around them'],
          ['3', '14', 'Add 3 each time'],
          ['4', '9 grapes', '12 / 3 = 4 each; after eating, 3 each; 3 x 3 = 9'],
          ['5', 'Usually the apple', 'It is a food, not a flat shape; a child who argues "the circle has no corners" has also reasoned well'],
          ['6', '3 ways', 'Two dimes; one dime and two nickels; four nickels'],
          ['7', 'It depends on the corner', 'The point is the prediction: guess, unfold, then explain the difference'],
          ['8', '15 blocks', '1 + 2 + 3 + 4 + 5']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How to use them',
          left: [
            'One puzzle a day is plenty. Ask "how did you know?" after every answer, right or wrong, and let a second answer to puzzle 5 count if the child can defend it.',
            'Puzzle 7 has no single answer on purpose. Predicting, testing and explaining is the habit; the hole count is a bonus.'
          ],
          rightH3: 'Signs of real progress',
          right: [
            'The child starts drawing a picture without being asked, notices a rule before you mention it, or says "wait, I think I counted one twice." Those moments are the readiness, not the right answers themselves.',
            'If a puzzle causes tears, it was too hard for today. Put it away and come back to an easier one tomorrow.'
          ] }
      ]
    },
    {
      id: 'route', tint: 'deep', eyebrow: 'Year by year',
      h2: 'What should a family do in each year before applying?',
      lede: 'Our planning table, built on the published fall 2027 process. Each row is the year a child is in now and the step that fits it.',
      body: [
        { kind: 'table', caption: 'A planning table by the child&rsquo;s current grade in 2026 to 2027 (our suggestions on the city&rsquo;s published process)', head: ['Child is now in', 'Applies for', 'What helps most'], rows: [
          ['Pre-K (born in 2022, by our arithmetic)', 'Kindergarten G&amp;T, December 2026 to January 2027', 'Reading, play and questions at home; list programs on the application'],
          ['Kindergarten', 'Grade 1 G&amp;T, April to May 2027', 'Steady reading and early math so the report card reflects real progress'],
          ['Grade 1', 'Grade 2 G&amp;T, April to May 2027', 'Watch every marking period in all five subjects, not just the core three'],
          ['Grade 2', 'Grade 3 G&amp;T, April to May 2027', 'Reasoning puzzles and number sense alongside school math'],
          ['Grade 3', 'Grade 4 G&amp;T, April to May 2027', 'The last upper grade entry listed; keep the year even']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Before applying', p: 'Read each program&rsquo;s priorities in MySchools and rank them honestly.' },
          { h3: 'While waiting', p: 'Keep reading and playing; nothing extra is needed after the window closes.' },
          { h3: 'After offers', p: 'Accept or decline, join waitlists if you wish, and keep the curiosity going.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Readiness',
    h2: 'Four stages of readiness for accelerated learning',
    lede: 'Our own way of describing what growth looks like in a curious child of 6 to 9. It is not a G&amp;T rubric.',
    table: { caption: 'From curious to independent (our readiness stages)', head: ['Stage', 'What a parent notices'], rows: [
      ['1. Curious', 'Asks why and how without being prompted'],
      ['2. Persistent', 'Keeps at a puzzle for several minutes'],
      ['3. Flexible', 'Tries a second method when the first fails'],
      ['4. Independent', 'Sets themselves a harder version for fun']
    ] },
    left: { h3: 'For parents', ps: [
      'Stages 2 and 3 grow fastest with problems slightly too hard, met with patience. A child who is always given easy work rarely needs to persist.',
      'Write down one moment each week when your child explained their thinking. The list becomes the best record of growth you have.'
    ] },
    right: { h3: 'For children', ps: [
      'If a puzzle feels stuck, draw it. Most of our puzzles get easier as a picture.',
      'Getting it wrong first is part of the fun. Say what you tried, then try something different.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for curious young learners',
    lede: 'Live online classes with the same teacher every week, in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'Ages 6 to 9', sub: 'Reasoning and early math', courses: [
        { code: 'NGT / YNG / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning and Readiness', blurb: 'Patterns, space and number as play.' },
        { code: 'NGT / YNG / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Logic puzzles in small steps.' },
        { code: 'NGT / YNG / 03', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'Grades 1 to 5, deeply.' }
      ] },
      { num: 'II', h3: 'Stretch', sub: 'For a child who wants more', courses: [
        { code: 'NGT / STR / 01', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Mental math', blurb: 'Calculation tricks that make sense.' },
        { code: 'NGT / STR / 02', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Python for ages 10 to 15.' },
        { code: 'NGT / STR / 03', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'Contest problems for later years.' }
      ] },
      { num: 'III', h3: 'Later on', sub: 'Middle school and beyond', courses: [
        { code: 'NGT / LTR / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Grades 6 to 8.' },
        { code: 'NGT / LTR / 02', slug: 'shsat-math-prep-course', title: 'SHSAT Math Prep', blurb: 'For the specialized high schools.' },
        { code: 'NGT / LTR / 03', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Equations before Algebra 1.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live reasoning classes for young New Yorkers',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Short sessions after school, Eastern Time.' },
      { time: 'Weekends', l: 'Unhurried mornings for longer puzzles.' },
      { time: '1-on-1', l: 'Paced to one child&rsquo;s interests.' }
    ],
    cells: [
      { h3: 'Talk first', p: 'The child explains, then the teacher responds.' },
      { h3: 'Hands on', p: 'Paper folding, blocks and drawings on camera.' },
      { h3: 'Short sessions', p: 'Kept to what a young child can enjoy.' },
      { h3: 'Parent notes', p: 'What went well and what to play next.' },
      { h3: 'All boroughs', p: 'Live online; no travel across the city.' },
      { h3: 'Group size', p: 'A batch of 15 to 20, or one child.' }
    ]
  },

  projectsH2: 'Projects from our students',
  projectsLede: 'Older learners turn the same curiosity into code. See more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What parents wrote on Google, unedited.',

  fees: {
    h2: 'Fees',
    lede: 'Applying to NYC Gifted and Talented programs is handled by NYC Public Schools; our fee is only for classes. Billing is monthly, so you can pause whenever you like.',
    free: ['A free first class', 'A short, playful puzzle session', 'No card needed'],
    group: ['A batch of 15 to 20', 'One teacher each week', 'Choose your batch', 'Billed monthly'],
    one: ['A private teacher', 'Puzzles chosen for one child', 'Times that suit your family']
  },

  faq: {
    eyebrow: 'Questions from NYC parents',
    h2: 'NYC Gifted and Talented: what families ask',
    items: [
      { q: 'Is there a test for NYC gifted and talented in 2027?', a: 'No. The fall 2027 process on the NYC Public Schools page uses no admissions test. Kindergarten eligibility comes from pre-K teacher evaluations or interviews, and grades 1 to 4 eligibility comes from report card grades.' },
      { q: 'When does the NYC kindergarten G&T application open?', a: 'NYC Public Schools lists Wednesday, December 9, 2026 for the kindergarten application to open and Friday, January 22, 2027 for it to close. Kindergarten offers are released on Tuesday, March 30, 2027.' },
      { q: 'When can my child apply for G&T in grades 1 to 4?', a: 'The upper grade application for fall 2027 opens Monday, April 19, 2027 and closes Friday, May 7, 2027, according to NYC Public Schools. Offers are released on Thursday, June 10, 2027.' },
      { q: 'What grades does my child need for G&T in grades 1 to 4?', a: 'A public school student needs grades of 3 or 4, or the equivalent, in Math, Reading and Writing on the latest report card. They also cannot have had a 1 in any marking period this school year in Math, Reading, Writing, Social Studies or Science.' },
      { q: 'How are kindergarten G&T nominations decided?', a: 'Children in public pre-K settings are evaluated by their current pre-K teachers. Children in private or parochial pre-K, or not in school, are interviewed after applying, and early childhood education experts then nominate eligible applicants.' },
      { q: 'My child goes to a private school. How do we apply for grades 1 to 4?', a: 'Email the report card grades to ESEnrollment@schools.nyc.gov with your child\'s name, date of birth, student ID if any, and the subject line Grades 1-4 G&T Eligibility. The city converts the grades to its 4-point scale and replies within 2 business days.' },
      { q: 'Does eligibility guarantee a G&T seat?', a: 'No. NYC Public Schools says eligibility does not guarantee a seat; offers depend on the programs a family lists, seats and priorities such as siblings. Some eligible children receive no G&T offer and can join waitlists.' },
      { q: 'Should I buy NYC G&T test prep books?', a: 'For the fall 2027 process there is no test for them to prepare for. Reading together, puzzles, building and steady schoolwork help far more, and they are the habits the city\'s nomination guidance describes.' },
      { q: 'Do you teach children for the kindergarten G&T interview?', a: 'No. Kindergarten applicants are four or five, below our starting age of 6, and we do not coach interviews. Our Reasoning and Readiness classes are for children aged 6 to 9.' },
      { q: 'What days and times are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with NYC Public Schools?', a: 'No. Modern Age Coders is an independent online school with no link to NYC Public Schools or any G&T program. Families apply through MySchools and contact the city directly about eligibility.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for young learners and NYC families',
    lede: 'Guides to gifted identification elsewhere, grade-level math help and later NYC tests.',
    items: [
      { href: '/gifted-and-talented-test-prep', label: 'Gifted and talented across the US', p: 'How other districts identify gifted children.' },
      { href: '/cogat-test-prep', label: 'CogAT reasoning and readiness', p: 'For families outside New York City.' },
      { href: '/online-math-tutor-1st-grade', label: '1st grade math tutor', p: 'School math that keeps a report card steady.' },
      { href: '/online-math-tutor-3rd-grade', label: '3rd grade math tutor', p: 'The year before grade 4 entry.' },
      { href: '/shsat-math-prep', label: 'SHSAT math prep', p: 'The NYC test that comes much later.' },
      { href: '/best-coding-classes-for-kids-in-new-york-city', label: 'Coding classes in NYC', p: 'Building and logic for curious children.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us your child&rsquo;s age and what they enjoy. The teacher plays a few puzzles with them, then tells you honestly what they noticed and what to try at home.',
    readFirst: 'Curious how a class feels? Read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or look through <a class="ag-inline-link" href="/courses">every course</a> first.',
    note: 'Our teachers join live from India at times that suit New York afternoons and weekend mornings. WhatsApp is usually the quickest way to reach us.',
    formNote: 'The first class costs nothing and needs no card.'
  },

  footer: {
    cols: [
      { h4: 'Gifted and reasoning', links: [
        { href: '/gifted-and-talented-test-prep', label: 'Gifted identification in the US' },
        { href: '/cogat-test-prep', label: 'CogAT readiness' },
        { href: '/nnat-test-prep', label: 'NNAT readiness' },
        { href: '/olsat-test-prep', label: 'OLSAT readiness' }
      ] },
      { h4: 'By grade', links: [
        { href: '/online-math-tutor-1st-grade', label: '1st grade math tutor' },
        { href: '/online-math-tutor-2nd-grade', label: '2nd grade math tutor' },
        { href: '/online-math-tutor-3rd-grade', label: '3rd grade math tutor' },
        { href: '/coding-classes-in-united-states', label: 'All US pages' }
      ] }
    ],
    bottomRight: 'No test, just curiosity'
  },

  personalityCss: `
.ag-root.ag-ngt .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-ngt .ag-capsule { border-left-width: 6px; border-radius: 4px; }
.ag-root.ag-ngt .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-ngt .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-ngt .ag-steps li { line-height: 1.65; }
.ag-root.ag-ngt .ag-grid-3 { gap: 1.2rem; }
`,

  dossier: {
    curriculumAuthority: 'NYC Public Schools, read raw on 31 October 2026: the Gifted and Talented enrollment page (fall 2027 kindergarten and grades 1 to 4 dates, kindergarten evaluation and interview routes, the three-section Teacher/Program Nomination Form, offers and priorities, report card eligibility rule, conversion table, charter/private/parochial and homeschool routes, appeals, Education Law Section 310); the Kindergarten enrollment page (entry in the calendar year a child turns five; ELLs in the same G&T process).',
    localProject: 'Our arithmetic that a child born in 2022 is the fall 2027 kindergarten applicant, two invented report-card worked examples (one eligible, one ruled out by a 62 in Social Studies), the readiness map from the nomination sections to home activity, eight original warm-up puzzles with answers (20 legs, 5 squares, 14, 9 grapes, 3 ways, 15 blocks), the year-by-year planning table. Lesson family: report-card conversion and play that grows curiosity.',
    requiredMentions: ['Thursday, June 10, 2027', 'Monday, April 19, 2027', 'there is no ranking within eligible students based on differences in course grades', 'Cannot have had a 1 in any marking period', 'G&amp;T programs do not give priority to zoned families', 'High levels of curiosity and self-initiated exploration can indicate readiness for accelerated learning', 'Social Perception and Self-Direction', 'Room 414, 52 Chambers Street', 'Social Studies was 62', 'Hens 3 x 2 = 6, cows 2 x 4 = 8, dog 4, farmer 2'],
    sources: [
      { claim: 'NYC Gifted and Talented fall 2027 dates, kindergarten nomination process, grades 1 to 4 report card eligibility, conversion table, offers, priorities and appeals.', url: 'https://www.schools.nyc.gov/enrollment/enroll-grade-by-grade/gifted-and-talented' },
      { claim: 'Kindergarten entry in the calendar year a child turns five; children born in 2021 start in September 2026; ELLs in the same G&T process.', url: 'https://www.schools.nyc.gov/enrollment/enroll-grade-by-grade/kindergarten' },
      { claim: 'Application through MySchools; program priorities listed in the MySchools directory.', url: 'https://www.myschools.nyc/' }
    ],
    rejectedClaims: [
      'Any NYC G&T test, score or percentile for fall 2027: the city page describes none; the page says so.',
      'Appeal deadlines for 2027: the city page still showed 2026 deadlines on 31 October 2026; the page tells families to ask rather than printing a guessed date.',
      'Kindergarten birth year for fall 2027 (2022): our arithmetic from the published rule, labelled ours.',
      'Program lists, seat counts, offer rates and any demographic data: not used.',
      'Any claim that classes improve G&T chances: not made; readiness framed as worth having whatever the outcome.',
      'Interview coaching for four and five year olds: not offered; our classes start at age 6.',
      'Any affiliation with NYC Public Schools: none, stated on the page.'
    ]
  }
};
