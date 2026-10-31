'use strict';
// 11 plus maths tuition in North Yorkshire (ag- maths door by area, UK cluster row UK058).
// Read raw with curl on 31 October 2026 (copies under keyword-research-2026-09/uk-us-gap/src/
// 11-plus-maths-tuition-north-yorkshire/):
//  - North Yorkshire Council, Selective schools (northyorks.gov.uk/education-and-learning/school-admissions/
//    selective-schools): "Within North Yorkshire there are three selective grammar schools: Ripon Grammar School
//    Ermysted's Grammar School Skipton Girls' High School" (the council names all three in its test page, so the
//    page names them); "We are only responsible for organising entrance tests for Ripon Grammar School.";
//    Ermysted's and Skipton Girls' "arrange and run their own selection tests"; "Registering for and sitting an
//    entrance test is not an application for a place at the school."; changes from September 2026: "a verbal
//    skills test and a non-verbal reasoning with mathematics test"; Verbal Skills = English (25 minutes, 26
//    questions, content to end of Year 5) + Verbal Reasoning (20 minutes, 32 questions); NVR with mathematics =
//    two NVR sections of 20 questions, 10 minutes each, then "the mathematics section has approximately 25
//    questions (25 minutes). There are no practice questions for this section. This will include content up to
//    the end of Year 5 of the national curriculum"; "All questions are multiple choice."; material "provided and
//    marked by GL Assessment"; old format (VR 50 minutes, 80 questions; NVR four sections of 20, ten minutes
//    each); 2026 dates (form opens 30 April 2026; deadline 30 June 2026; invitations week of 25 August 2026; test
//    Saturday 12 September 2026 at Ripon Grammar School; results "no later than 16 October"; late tests April,
//    June and August 2027, January date for movers); "It is essential that your child attempts to complete all
//    the questions within the time allowed"; "The time element is part of the test."; scores standardised for
//    age and added; cut-off set by "the highest scoring 28% or as close as possible of the year 6 cohort who live
//    in the Ripon area"; cut-off marks 2026 entry 203, 2025 entry 196, 2024 entry 195; passing does not
//    guarantee a place; "Coaching for the tests is not required. However, we cannot prevent this."; shop tests'
//    standardised marks "are not comparable"; PAN 117 including 14 boarding places; once per school year.
//  - Ermysted's Grammar School, Admission into Year 7 (September 2027): registration 12:00 Monday 13 April 2026 to
//    12:00 Monday 31 August 2026; test Saturday 26 September 2026; outcome week commencing 12 October 2026;
//    provider "Future Stories Community Enterprise Ltd (FSCE)"; "Two papers covering: English and mathematics
//    questions with multiple choice answer options English and mathematics questions where you respond with
//    short written answers"; standardised and age-weighted; PAN 128; required standard set by the Admissions
//    Committee from the cohort's performance; boys born 1 September 2015 to 31 August 2016; every applicant
//    registers, catchment included; one sitting only.
//  - Skipton Girls' High School, Admissions: "As an Academy, we are responsible for our own admissions."; girls
//    "sit a set of selection tests"; page links FSCE familiarisation guides for parents and for children; Atom
//    Learning access for pupil premium pupils. (The 2027 entry booklet PDF host returned 403: not retried.)
// No head teacher or staff member is named. Our own, labelled: the worked estimation examples, the practice set
// and the one-minute plan. Spine: from September 2026 the Ripon test has a maths section for the first time, about
// 25 questions in 25 minutes with no practice questions, while Skipton's two schools set a different test.
// Lesson family: rounding and estimation to check or eliminate multiple-choice options at about a minute a question.

const TIMING = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'elevenplus', tag: 'NORTH YORKSHIRE: RIPON AND SKIPTON', label: '11 plus maths in North Yorkshire', blurb: 'From September 2026 the Ripon test adds a maths section: about 25 questions in 25 minutes. Skipton\'s two schools set a different test.' },
  slug: '11-plus-maths-tuition-north-yorkshire',
  code: 'ptn',
  accent: '#385E2B',
  accentRationale: 'North Yorkshire 11 plus: a dales moss green (#385E2B), 7.03:1 on #FBF8F2 and 6.06:1 on the deepest paper tint, darker and greener than the olive Bromley and GL pages so the Yorkshire page reads as its own',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: '11 plus maths tuition in North Yorkshire',
  title: '11 Plus Maths Tuition North Yorkshire | Ripon and Skipton Tests',
  description: '11 plus maths tuition in North Yorkshire: the new Ripon maths section (about 25 questions in 25 minutes), the Skipton FSCE test, dates and the 28% cut-off.',
  ogDescription: 'Ripon\'s 11 plus gained a maths section in September 2026, with no practice questions. Skipton\'s grammar schools set their own English and maths test.',
  twitterDescription: 'North Yorkshire 11 plus maths: what changed at Ripon in 2026, how Skipton tests differ, and how a minute-a-question estimate helps.',
  pageName: '11 Plus Maths Tuition in North Yorkshire',
  webPageDescription: 'A guide for North Yorkshire families on the maths in the Ripon and Skipton grammar school tests, built from North Yorkshire Council and the schools\' own admissions pages, with live online maths lessons for Years 5 and 6.',
  courseDescription: 'Live online maths lessons for North Yorkshire children in Years 5 and 6, covering the Year 5 national curriculum that the Ripon and Skipton tests draw on, with estimation and checking habits taught throughout.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: '11 plus in North Yorkshire',
  navLinks: [
    { href: '#schools', label: 'Three schools' },
    { href: '#ripon', label: 'Ripon maths' },
    { href: '#skipton', label: 'Skipton test' },
    { href: '#estimate', label: 'Estimation' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'North Yorkshire &middot; Ripon and Skipton &middot; Years 5 and 6',
  h1: '11 plus maths tuition in North Yorkshire',
  lede: 'North Yorkshire has three grammar schools and two different entrance tests. The council runs the Ripon test, written and marked by GL Assessment, and from September 2026 it contains a maths section for the first time: roughly 25 questions in 25 minutes, with no practice questions first. The two Skipton schools set their own test instead, in English and maths. Modern Age Coders teaches the Year 5 maths behind both, live online, in a class or one to one, and this page sets out what each test asks, the dates for 2027 entry, and how a habit of estimating quickly earns its keep at about a minute a question.',
  secondaryCta: { href: '#ripon', label: 'The new Ripon maths section' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for my child in North Yorkshire.',
  heroNote: 'From North Yorkshire Council and the schools\' admissions pages, read 31 October 2026 &middot; Not connected with any school or the council',
  spec: [
    ['Grammar schools', 'Three: one in Ripon, two in Skipton'],
    ['Ripon test run by', 'North Yorkshire Council'],
    ['Ripon papers from', 'GL Assessment'],
    ['Ripon maths', 'About 25 questions, 25 minutes'],
    ['Skipton boys\' test', 'FSCE, English and maths'],
    ['Ripon test 2026', 'Saturday 12 September'],
    ['Ripon cut-off', 'Top 28% of the Ripon area'],
    ['We teach', 'Year 5 and 6 maths, live online']
  ],
  capsuleQ: 'Is there maths in the North Yorkshire 11 plus?',
  capsule: 'Yes, at all three grammar schools, though not in the same test. North Yorkshire Council says that from September 2026 the Ripon Grammar School test is a verbal skills paper and a non-verbal reasoning with mathematics paper, supplied and marked by GL Assessment, and that "the mathematics section has approximately 25 questions (25 minutes)" with content up to the end of Year 5. The 2026 sitting for September 2027 entry was on Saturday 12 September. Ermysted\'s Grammar School in Skipton uses an FSCE test of two English and maths papers, sat on Saturday 26 September 2026, and Skipton Girls\' High School runs its own selection tests. Modern Age Coders teaches the Year 5 and 6 maths behind these tests live online, in a group or 1-on-1, through our 11 plus maths preparation course.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for a North Yorkshire Year 5 or 6',
    lede: 'The first is the direct one. The other two help a child who needs number confidence first, or who is already secure and ready for Year 7 work. Each card opens a syllabus.',
    items: [
      { course: '11-plus-maths-preparation-course-uk', code: 'NYORKS / 01', title: '11 plus maths preparation', note: 'The Year 5 curriculum the Ripon and Skipton papers draw on, taught with estimation and checking built in.' },
      { course: 'mental-maths-mastery-kids', code: 'NYORKS / 02', title: 'Mental maths, number sense first', note: 'For a child who needs rounding, place value and quick recall to feel easy before a timed section.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'NYORKS / 03', title: 'Lower secondary maths', note: 'Pre-algebra and geometry for a secure child heading into Year 7 at any school.' }
    ]
  },

  sections: [
    {
      id: 'schools', tint: 'tint', eyebrow: 'Three schools, two tests',
      h2: 'Which grammar schools are there in North Yorkshire?',
      lede: 'Three, and the council names them on its own selective schools page: Ripon Grammar School, Ermysted\'s Grammar School and Skipton Girls\' High School. Only the Ripon test is the council\'s to run.',
      body: [
        { kind: 'table', caption: 'Who sets which test, from North Yorkshire Council and the schools, read 31 October 2026', head: ['School', 'Test run by', 'Paper supplier', 'Maths in the test?'], rows: [
          ['Ripon Grammar School (mixed, day and boarding)', 'North Yorkshire Council', 'GL Assessment', 'Yes: a maths section of about 25 questions inside the non-verbal reasoning with mathematics paper, from September 2026'],
          ['Ermysted\'s Grammar School, Skipton (boys)', 'The school', 'Future Stories Community Enterprise Ltd (FSCE)', 'Yes: English and maths questions run through both papers'],
          ['Skipton Girls\' High School (girls)', 'The school, as an academy', 'The school links FSCE familiarisation guides', 'The school says girls sit "a set of selection tests"; check its admissions booklet']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the council does and does not do',
          left: [
            'The council\'s page is direct about its role: "We are only responsible for organising entrance tests for Ripon Grammar School." For the two Skipton schools it says they "arrange and run their own selection tests", with their own application processes, timescales and deadlines.',
            'Whatever the school, the council makes one point that catches families out every year: "Registering for and sitting an entrance test is not an application for a place at the school." The common application to the council is a separate step, due by 31 October of Year 6.'
          ],
          rightH3: 'Why the split matters for maths',
          right: [
            'A child sitting only the Ripon test meets maths as one timed multiple-choice section after two blocks of non-verbal reasoning. A boy sitting at Ermysted\'s meets maths mixed with English across two papers, half of it answered by writing short answers rather than choosing.',
            'Some families near the middle of the county consider both towns. If so, the two tests need slightly different practice habits, which we come to below, and two separate registrations with two separate deadlines.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.northyorks.gov.uk/education-and-learning/school-admissions/selective-schools" rel="noopener" target="_blank">North Yorkshire Council, Selective schools</a>; <a class="ag-inline-link" href="https://ermysteds.uk/admissions/admission-into-year-7/" rel="noopener" target="_blank">Ermysted\'s, Admission into Year 7</a>; <a class="ag-inline-link" href="https://www.sghs.org.uk/our-school/admissions" rel="noopener" target="_blank">Skipton Girls\' High School, Admissions</a>. We are independent: Modern Age Coders is not linked to the council, GL Assessment, FSCE or any of the three schools.' }
      ]
    },
    {
      id: 'ripon', tint: 'deep', eyebrow: 'What changed in 2026',
      h2: 'What is in the new Ripon Grammar School 11 plus maths section?',
      lede: 'A block of about 25 multiple-choice maths questions in 25 minutes, drawn from the national curriculum up to the end of Year 5. The council adds that "There are no practice questions for this section."',
      body: [
        { kind: 'table', caption: 'The Ripon test from September 2026, as North Yorkshire Council describes it', head: ['Paper', 'Section', 'Questions', 'Time'], rows: [
          ['Verbal Skills', 'English: a passage, then spelling and grammar, to the end of Year 5', '26', '25 minutes'],
          ['Verbal Skills', 'Verbal reasoning', '32', '20 minutes'],
          ['Non-Verbal Reasoning with mathematics', 'Non-verbal reasoning, first section, with practice questions before it', '20', '10 minutes'],
          ['Non-Verbal Reasoning with mathematics', 'Non-verbal reasoning, second section', '20', '10 minutes'],
          ['Non-Verbal Reasoning with mathematics', 'Mathematics, to the end of Year 5, no practice questions', 'About 25', '25 minutes']
        ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.northyorks.gov.uk/education-and-learning/school-admissions/selective-schools" rel="noopener" target="_blank">North Yorkshire Council, "Changes to the Ripon Grammar School entrance test from September 2026"</a>, read 31 October 2026. Every question on both papers is multiple choice.' },
        { kind: 'two', mt: true,
          leftH3: 'Before and after',
          left: [
            'Until the September 2026 sitting, the council says, there was no maths at all: a 50-minute verbal reasoning paper of 80 questions and a non-verbal paper of four ten-minute sections of 20 questions each. A Ripon family who prepared an older sibling for that format is now preparing for a different test.',
            'The council gives its reason for the change. The reasoning elements keep testing potential "irrespective of schooling and background", while "By adding a new Key Stage 2 element, the tests will also respond to the teaching and learning which is conducted in your child\'s school."'
          ],
          rightH3: 'What "no practice questions" means in practice',
          right: [
            'In the non-verbal sections the instructions come with worked practice items before the clock starts. The maths section has none, so a child must already know how a multiple-choice maths question looks and how to mark the answer sheet before the day.',
            'GL Assessment\'s free familiarisation booklets, which the council links, are the right place to see the format. The council notes they "are not definitive", and that including a question type does not guarantee it will appear.'
          ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'The clock is part of it', p: 'The council puts it bluntly: "It is essential that your child attempts to complete all the questions within the time allowed". It adds, "The time element is part of the test."' },
          { h3: 'Year 5 content only', p: 'Both the English and the maths sections stop at the end of the Year 5 national curriculum, because the test falls in the second week of Year 6.' },
          { h3: 'Marked by GL', p: 'The council says the papers are "produced, marked and standardised by GL Assessment", and trained invigilators run the day at Ripon Grammar School.' }
        ] }
      ]
    },
    {
      id: 'dates', tint: '', eyebrow: 'The Ripon calendar',
      h2: 'When is the Ripon Grammar School 11 plus for 2027 entry?',
      lede: 'For children starting Year 7 in September 2027 the test was on Saturday 12 September 2026, at Ripon Grammar School. Registration closed on 30 June 2026.',
      body: [
        { kind: 'table', caption: 'North Yorkshire Council, Ripon Grammar School key dates for September 2027 entry', head: ['Date', 'What happens'], rows: [
          ['30 April 2026', 'Online entrance test registration form opens'],
          ['30 June 2026', 'Registration deadline, and the closing date for special arrangement requests'],
          ['Week of 25 August 2026', 'Invitations confirming test day arrangements are sent'],
          ['Saturday 12 September 2026', 'Test day for Year 6 children, at Ripon Grammar School'],
          ['By 16 October 2026', 'Results issued in writing; the council will not give results by phone or email'],
          ['31 October 2026', 'Common application to the council closes'],
          ['April, June and August 2027', 'Late tests on set dates, with a January date for families moving into the Ripon area']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'If registration was missed',
          left: [
            'The council says a late application means the child cannot sit the test before National Offer Day, and late testing then happens in April before the September start. The exceptions are a serious illness backed by medical evidence and a family moving into the Ripon catchment area.',
            'A child can sit the Ripon test only once in a school year. A Year 7 pupil who has already sat it waits for the Year 8 entry test.'
          ],
          rightH3: 'Illness on the day',
          right: [
            'Families who think a child is unwell must tell the admissions team before the day, or ring the emergency number on the letter on the day and confirm in writing by 5pm on the following Monday. A child absent without notice is withdrawn from testing.',
            'The council also says that bringing a child to the test confirms they are fit and well, so a family in doubt should ask rather than sit and hope.'
          ] }
      ]
    },
    {
      id: 'score', tint: 'tint', eyebrow: 'The cut-off',
      h2: 'What is the Ripon Grammar School 11 plus pass mark?',
      lede: 'There is no fixed pass mark. The council finds the highest scoring 28 per cent, or as close as possible, of Year 6 children living in the Ripon area, and that number sets the cut-off for the year.',
      body: [
        { kind: 'table', caption: 'Ripon Grammar School cut-off marks published by North Yorkshire Council', head: ['Year of entry', 'Cut-off mark'], rows: [
          ['2026', '203'],
          ['2025', '196'],
          ['2024', '195']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How the total is built',
          left: [
            'The council says the marks are first standardised to allow for each child\'s age, and then "your child\'s verbal skills and non-verbal reasoning and mathematics scores are added together to give a total score which is used to determine whether they have reached the cut-off mark."',
            'So from 2026 the maths section sits inside one of the two scores that are added. It is not a separate hurdle with its own pass line.'
          ],
          rightH3: 'Reading the three numbers honestly',
          right: [
            'All three published cut-offs come from the older test, which had no maths section. The September 2026 sitting is the first on the new papers, so nobody can say yet where its line will fall, and we would not guess.',
            'Reaching the cut-off makes a child suitable for entry; it does not secure a place. The council says plainly that if the school is oversubscribed "the normal oversubscription criteria will apply". Ripon\'s published admission number is 117, which includes 14 boarding places.'
          ] },
        { kind: 'source', html: 'Source: North Yorkshire Council, Selective schools, frequently asked questions, read 31 October 2026. We print no prediction for any child.' }
      ]
    },
    {
      id: 'skipton', tint: 'deep', eyebrow: 'The Skipton test',
      h2: 'How is the Ermysted\'s and Skipton 11 plus different?',
      lede: 'Ermysted\'s Grammar School sets an FSCE test of two papers, each mixing English and maths questions. One paper is multiple choice; the other asks for short written answers.',
      body: [
        { kind: 'table', caption: 'Ermysted\'s Grammar School, entry to Year 7 in September 2027', head: ['Item', 'What the school publishes'], rows: [
          ['Registration', 'Opened 12:00 noon Monday 13 April 2026, closed 12:00 noon Monday 31 August 2026'],
          ['Who registers', 'Everyone, including families in the catchment area; nobody is entered automatically'],
          ['Eligible', 'Boys born between 1 September 2015 and 31 August 2016'],
          ['Test day', 'Saturday 26 September 2026'],
          ['Provider', 'Future Stories Community Enterprise Ltd (FSCE)'],
          ['Format', 'Two papers of English and maths: one with multiple choice options, one with short written answers'],
          ['Scoring', 'Standardised and age-weighted; the required standard is set by the Admissions Committee from the cohort\'s results'],
          ['Outcome', 'Week commencing 12 October 2026, before the 31 October council deadline'],
          ['Places', 'Published admission number of 128']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the written half changes',
          left: [
            'With options on the page, a careful estimate can rule out wrong answers. With a blank box, there is nothing to rule out: the child must reach the number. Our lessons for a Skipton boy therefore pair the estimation habit below with a written calculation that the estimate then checks.',
            'Because English and maths share the same papers, a question may also hinge on reading the wording closely. The school asks for no special subject outside the primary curriculum.'
          ],
          rightH3: 'Skipton Girls\' High School',
          right: [
            'The school says that, as an academy, it is responsible for its own admissions, and that girls who wish to join in Year 7 "sit a set of selection tests". Its admissions page links FSCE familiarisation guides for parents and for children, and a free online preparation offer for disadvantage-funded pupils through Atom Learning.',
            'We could not open the school\'s 2027 entry booklet (its file host refused our request), so this page gives no format or dates for the girls\' test. Read the booklet on the school\'s site.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://ermysteds.uk/admissions/admission-into-year-7/" rel="noopener" target="_blank">Ermysted\'s Grammar School, Admission into Year 7 (September 2027)</a> and <a class="ag-inline-link" href="https://www.sghs.org.uk/our-school/admissions" rel="noopener" target="_blank">Skipton Girls\' High School, Admissions</a>, read 31 October 2026.' }
      ]
    },
    {
      id: 'estimate', tint: '', eyebrow: 'Our lesson family',
      h2: 'How can a child answer a maths question in about a minute?',
      lede: 'Twenty-five questions in 25 minutes is roughly a minute each, with no warm-up. The single most useful habit at that pace is a quick estimate made before any working. The examples and practice set below are ours, written for this page; they are not GL or FSCE questions.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Round first, then look', p: 'Before reading the options, round each number to one or two significant figures and get a rough answer in your head. The rough answer tells you which options are even possible.' },
          { h3: 'Cross out the impossible', p: 'With five options, an estimate often removes two or three at once. What is left needs only a last digit, or a check of whether the answer is a little above or below the estimate.' },
          { h3: 'Know which way you rounded', p: 'If both numbers were rounded up, the true product is smaller than the estimate. Saying that aloud is what turns rounding from a guess into reasoning.' }
        ] },
        { kind: 'table', mt: true, caption: 'Worked examples (ours), at Year 5 level', head: ['Question (ours)', 'Estimate first', 'Then finish'], rows: [
          ['4,987 + 3,106 = ? Options: 7,093; 8,093; 8,193; 9,093; 81,093', '5,000 + 3,100 is about 8,100, so 7,093, 9,093 and 81,093 go at once', 'The last digits 7 + 6 end in 3, and 4,987 is 13 short of 5,000: 8,100 minus 7 is 8,093'],
          ['38 x 21 = ? Options: 598; 698; 798; 898; 7,980', '40 x 20 = 800, and one number went up while the other went down, so the answer is near 800', '38 x 20 = 760, plus 38 is 798'],
          ['A school trip of 196 children fills coaches of 49. How many coaches?', '200 divided by 50 is 4', '49 x 4 = 196 exactly, so 4 coaches and no seats left over'],
          ['Which is closest to 3.9 x 6.2?', '4 x 6 = 24', 'Both numbers are near whole numbers, so 24 is the closest option; the exact value, 24.18, confirms it'],
          ['712 minus 289', '700 minus 300 is 400, and both numbers were rounded down a little, so the answer is a bit above 400', '712 minus 300 is 412, add back 11 to get 423']
        ] },
        { kind: 'p', mt: true, html: 'Our practice set, for the kitchen table. Estimate each answer in under ten seconds, write the estimate down, then work it out properly and compare. (1) 6,050 minus 2,980. (2) 51 x 19. (3) 1,203 divided by 4, to the nearest whole number. (4) 7.8 + 12.4 + 0.9. (5) A bag holds 48 sweets; how many bags for 1,000 sweets? (6) 299 x 3. Answers, ours: (1) about 3,000, exactly 3,070; (2) about 1,000, exactly 969; (3) about 300, exactly 300.75, so 301 to the nearest whole number; (4) about 21, exactly 21.1; (5) about 20, and 20 bags hold 960, so 21 bags; (6) about 900, exactly 897.' },
        { kind: 'two', mt: true,
          leftH3: 'Why estimation, of all topics',
          left: [
            'Year 5 of the national curriculum asks pupils to round any number up to a million to the nearest 10, 100, 1,000, 10,000 and 100,000, and to use rounding to check answers. It is on the syllabus that both North Yorkshire tests cap at, and it speeds up nearly every other topic on it.',
            'It also protects a child from the most common timed-test error: a slip that produces an answer ten times too big, which a ten-second estimate would have caught.'
          ],
          rightH3: 'What we do not do',
          right: [
            'We do not reproduce GL or FSCE questions, and we do not sell the idea that a shop-bought test predicts a score. The council warns that the standardised marks for "off the shelf" tests are not comparable with the marks achieved in the tests designed for North Yorkshire.',
            'On coaching, the council writes: "Coaching for the tests is not required. However, we cannot prevent this." We teach Year 5 and 6 maths that stands on its own, test or no test.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Year by year',
    h2: 'A steady route from Year 4 to the test in Year 6',
    lede: 'Both North Yorkshire tests are sat in September of Year 6 and stop at Year 5 content, so the work that counts happens in Year 5.',
    table: { caption: 'Our plan for a North Yorkshire child, built around the Ripon and Skipton calendars', head: ['When', 'Maths focus (ours)', 'Secure when'], rows: [
      ['Summer of Year 4', 'Times tables to 12 and place value to 10,000', 'Recall is instant and numbers can be partitioned at sight'],
      ['Autumn of Year 5', 'Rounding to the nearest 10, 100, 1,000 and beyond', 'An estimate is made before every calculation, without being asked'],
      ['Spring of Year 5', 'Fractions, decimals, written methods; register for Ermysted\'s from mid-April', 'Long multiplication is set out correctly every time'],
      ['Summer of Year 5', 'Mixed timed sets at about a minute a question; Ripon registration closes 30 June', 'A full timed set ends with the clock, not with a stall'],
      ['September of Year 6', 'Rest, light revision, and the GL or FSCE familiarisation material', 'The child knows the answer sheet and the day\'s routine']
    ] },
    left: { h3: 'If the result is not the one hoped for', ps: [
      'The Ripon line is set to admit around the top 28 per cent of the area\'s Year 6, so most children will not reach it. That is how the test is built.',
      'The maths learned on the way serves Year 7 at any school.'
    ] },
    right: { h3: 'After the 11 plus', ps: [
      'Our <a class="ag-inline-link" href="/gcse-maths-tuition-online">GCSE maths page</a> covers the next exam that every child sits.',
      'Puzzle lovers can look at the <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">UK competitions calendar</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'All related courses',
    h2: 'Maths and coding courses for North Yorkshire children',
    lede: 'Grouped by age. Each card opens its full syllabus.',
    bands: [
      { num: 'I', h3: 'Primary maths', sub: 'Years 3 to 6', courses: [
        { code: 'UK / PTN / 01', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths preparation', blurb: 'Year 5 maths for the Ripon and Skipton tests.' },
        { code: 'UK / PTN / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Rounding and recall until they are automatic.' },
        { code: 'UK / PTN / 03', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths, Years 1 to 5', blurb: 'The foundations, for a younger brother or sister.' },
        { code: 'UK / PTN / 04', slug: 'ks2-sats-maths-course', title: 'KS2 SATs maths', blurb: 'The national tests in May of Year 6.' }
      ] },
      { num: 'II', h3: 'Into secondary', sub: 'Years 6 to 8', courses: [
        { code: 'UK / PTN / 05', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Lower secondary maths', blurb: 'Pre-algebra and geometry for Year 7.' },
        { code: 'UK / PTN / 06', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Harder problems for children who want them.' }
      ] },
      { num: 'III', h3: 'Maths in code', sub: 'Ages 8 and up', courses: [
        { code: 'UK / PTN / 07', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Rounding, patterns and number explored in Python.' },
        { code: 'UK / PTN / 08', slug: 'scratch-programming-complete-course', title: 'Scratch coding for kids', blurb: 'Logic and sequencing, built visually.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live online, from the Dales to the coast',
    lede: TIMING + ' Our teachers work from India, where the clocks never change, so India time runs four and a half hours ahead of UK time in summer and five and a half in winter. Every booking is made in UK time.',
    slots: [
      { time: 'After school', l: 'An early-evening hour for Year 5 and 6.' },
      { time: 'Weekend morning', l: 'For farming families and busy weeknights.' },
      { time: 'Summer of Year 5', l: 'Timed sets in the weeks before the test.' }
    ],
    cells: [
      { h3: 'Curriculum first', p: 'Year 5 maths taught properly, with estimation in every lesson.' },
      { h3: 'No long drives', p: 'The same class in Settle, Thirsk or Whitby, with no trip to town.' },
      { h3: 'Group or 1-on-1', p: 'A class of 15 to 20 at one level, or one teacher for one child.' },
      { h3: 'Questions we wrote', p: 'Practice sets are drafted by our teachers and never copied from a paper.' },
      { h3: 'Short reports', p: 'A line or two after each block: what has stuck, what still wobbles.' },
      { h3: 'No promises', p: 'Cut-offs and places are decided by the council and the schools.' }
    ]
  },

  projectsH2: 'What our students go on to make',
  projectsLede: 'Projects from children who learned with us, many of them now older. See more on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'What parents wrote on our Google profile.',

  fees: {
    h2: 'Fees for 11 plus maths lessons',
    lede: 'A single monthly fee in the currency we bill UK families in, paid one month at a time with no upfront block. Your first class costs nothing.',
    free: ['A full lesson pitched at your child\'s level', 'An honest read on where their maths stands', 'Just a phone number to book'],
    group: ['A class of 15 to 20 at one level', 'One teacher for the whole year', 'Homework marked and discussed', 'A certificate on completion'],
    one: ['One teacher, one child', 'Planned around a single test or gap', 'Suits a child who freezes under a timer']
  },

  faq: {
    eyebrow: 'North Yorkshire 11 plus questions',
    h2: 'What North Yorkshire parents ask',
    items: [
      { q: 'Is there maths in the Ripon Grammar School 11 plus?', a: 'From the September 2026 sitting, yes. North Yorkshire Council says the non-verbal reasoning with mathematics paper ends with a maths section of approximately 25 questions in 25 minutes, with content up to the end of Year 5 and no practice questions.' },
      { q: 'When was the Ripon 11 plus for September 2027 entry?', a: 'On Saturday 12 September 2026, at Ripon Grammar School. Registration ran from 30 April to 30 June 2026, and the council says results are issued no later than 16 October.' },
      { q: 'What is the Ripon Grammar School pass mark?', a: 'There is no fixed mark. The council sets the cut-off at the score that picks out the highest scoring 28 per cent, or as close as possible, of Year 6 children living in the Ripon area. Published cut-offs were 203 for 2026 entry, 196 for 2025 and 195 for 2024, all on the older format.' },
      { q: 'Who writes the North Yorkshire 11 plus papers?', a: 'For Ripon, GL Assessment produces, marks and standardises the papers, and the council organises the test. Ermysted\'s Grammar School uses Future Stories Community Enterprise Ltd (FSCE), and Skipton Girls\' High School runs its own selection tests.' },
      { q: 'What is in the Ermysted\'s Grammar School entrance test?', a: 'Two papers of English and maths questions from FSCE. One uses multiple choice answer options and the other asks for short written answers. The scores are standardised and age-weighted.' },
      { q: 'Does passing the test guarantee a grammar school place?', a: 'No. The council says reaching the cut-off does not guarantee a place, and the oversubscription criteria apply if the school has more qualified applicants than places. You must still apply to the council by 31 October.' },
      { q: 'Can my child sit the Ripon test twice?', a: 'Not in the same school year. The council says a child can sit the Ripon test only once per school year, and a Year 7 pupil who has sat it would next try for Year 8 entry.' },
      { q: 'Should I pay for 11 plus coaching in North Yorkshire?', a: 'The council says coaching for the tests is not required, though it cannot prevent it, and that shop-bought practice test scores are not comparable with its own. We teach Year 5 and 6 maths, never test items, and make no promise about any score.' },
      { q: 'Are the Ripon practice papers official?', a: 'The council links GL Assessment\'s free familiarisation booklets and online material. It says they show the range of skills and how answers are marked, but are not definitive.' },
      { q: 'When are your maths lessons?', a: TIMING + ' We book every lesson in UK time.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for North Yorkshire families',
    lede: 'Other areas\' tests, coding near you, and our UK hub.',
    items: [
      { href: '/11-plus-maths-tuition', label: '11 plus maths tuition', p: 'Our national page on 11 plus maths.' },
      { href: '/11-plus-maths-tuition-reading', label: '11 plus maths in Reading', p: 'Another area where an FSCE test sets maths.' },
      { href: '/coding-classes-in-north-yorkshire', label: 'Coding classes in North Yorkshire', p: 'Live coding lessons across the county.' },
      { href: '/best-coding-class-in-ripon', label: 'Coding classes in Ripon', p: 'For families in and around the city.' },
      { href: '/ks2-sats-maths-papers-explained', label: 'KS2 SATs maths papers', p: 'The tests every Year 6 child sits in May.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The hub for all our UK pages.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson',
    lede: 'Let us know the year group and whether Ripon or Skipton is in mind. We will pitch the first lesson at the Year 5 maths that school\'s test draws on.',
    readFirst: 'Prefer to read first? Each <a class="ag-inline-link" href="/courses">course page</a> lists its full syllabus, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a typical lesson.',
    note: 'WhatsApp is the fastest route and costs nothing from a UK phone. Replies come from India, from a +91 number; we have no office in North Yorkshire.',
    formNote: 'No card details, no contract. We reply once, with a time.'
  },

  footer: {
    cols: [
      { h4: 'North Yorkshire', links: [
        { href: '/coding-classes-in-north-yorkshire', label: 'Coding in North Yorkshire' },
        { href: '/best-coding-class-in-ripon', label: 'Coding in Ripon' },
        { href: '/best-coding-class-in-york', label: 'Coding in York' },
        { href: '/11-plus-maths-tuition', label: '11 plus maths' }
      ] },
      { h4: 'More', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Estimate first, then calculate, at a minute a question'
  },

  personalityCss: `
.ag-root.ag-ptn .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-ptn .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-ptn .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-ptn .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-ptn .ag-table td:first-child { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'North Yorkshire Council, Selective schools, read 31 October 2026: three selective grammar schools named (Ripon Grammar School, Ermysted\'s Grammar School, Skipton Girls\' High School); the council organises only the Ripon test; Ripon test from September 2026 is Verbal Skills (English 25 minutes, 26 questions; verbal reasoning 20 minutes, 32 questions) plus Non-Verbal Reasoning with mathematics (two 10-minute NVR sections of 20 questions; maths section of approximately 25 questions in 25 minutes, no practice questions, content to end of Year 5); GL Assessment produces, marks and standardises; dates 30 April, 30 June, week of 25 August, Saturday 12 September and by 16 October 2026; cut-off from the top 28 per cent of the Ripon area; cut-offs 203, 196, 195; coaching not required; shop test marks not comparable; PAN 117 with 14 boarding places. Ermysted\'s: FSCE, two English and maths papers, multiple choice and short written answers, test Saturday 26 September 2026, outcome week commencing 12 October 2026, PAN 128. Skipton Girls\' High School: own admissions as an academy, a set of selection tests.',
    localProject: 'A maths section arrives at Ripon. The page tells North Yorkshire families that the council-run Ripon Grammar School test gained a maths section from September 2026, sets out the new paper structure, the 2026 calendar for 2027 entry and the 28 per cent cut-off rule with the three published cut-offs, and contrasts it with the FSCE English and maths papers at Ermysted\'s and the separately run Skipton Girls\' High School tests. It then teaches, with our own worked examples and practice set, rounding and estimation as the habit that makes a minute-a-question multiple-choice section manageable, and pairs it with written methods for the FSCE short-answer paper. Lesson family: rounding and estimation to check or eliminate options.',
    requiredMentions: ['the mathematics section has approximately 25 questions (25 minutes)', 'There are no practice questions for this section.', 'We are only responsible for organising entrance tests for Ripon Grammar School.', 'highest scoring 28 per cent', 'Future Stories Community Enterprise Ltd (FSCE)', 'Saturday 12 September 2026', 'Coaching for the tests is not required. However, we cannot prevent this.', 'The time element is part of the test.'],
    sources: [
      { claim: 'North Yorkshire Council, Selective schools: three grammar schools, the council\'s role, the September 2026 test format, dates, cut-off rule and history, coaching statement, PAN.', url: 'https://www.northyorks.gov.uk/education-and-learning/school-admissions/selective-schools' },
      { claim: 'Ermysted\'s Grammar School, Admission into Year 7 (September 2027): FSCE provider, two English and maths papers, dates, eligibility, PAN 128.', url: 'https://ermysteds.uk/admissions/admission-into-year-7/' },
      { claim: 'Skipton Girls\' High School, Admissions: own admissions as an academy, selection tests, FSCE familiarisation guides, Atom Learning for disadvantaged pupils.', url: 'https://www.sghs.org.uk/our-school/admissions' },
      { claim: 'GL Assessment free familiarisation materials linked by the council.', url: 'https://11plus.gl-assessment.co.uk/pages/free-materials' }
    ],
    rejectedClaims: [
      'Skipton Girls\' High School test format and dates: its 2027 entry booklet host returned HTTP 403; not retried, not stated.',
      'Any prediction of the first cut-off on the new Ripon papers: the published cut-offs are all from the old format.',
      'The weighting of the maths section within the Ripon total: the council describes two scores added, not section weights; not stated.',
      'Names of head teachers or staff in the council or school pages: not used.',
      'Content of GL or FSCE sample questions: not reproduced; every example on the page is ours.',
      'Any score, cut-off or place promise.'
    ]
  }
};
