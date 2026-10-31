'use strict';
// 11 plus maths tuition in Lancashire (ag- maths door by area, UK cluster row UK059).
// Read raw with curl on 31 October 2026 (copies under keyword-research-2026-09/uk-us-gap/src/
// 11-plus-maths-tuition-lancashire/):
//  - Lancashire County Council, secondary school booklets 2027/28 (Lancaster, Morecambe, Wyre and Fylde North;
//    Hyndburn, Ribble Valley, Burnley, Pendle, Rossendale East): entries for Lancaster Royal Grammar School
//    (boys, "Admission Number: 164 (+12 boarders)", categories tied to "the minimum level or above in the entrance
//    test or who score up to and including 5% below the minimum level" for pupil premium), Lancaster Girls'
//    Grammar School ("Admission Number: 145"; registration "closing date for 2027 registration is noon on
//    Wednesday 9 September 2026"; "The Test will be held on Saturday 26th September 2026"), Clitheroe Royal
//    Grammar School (planned admission number 180; candidates "ranked according to ability as demonstrated in
//    the testing process"), Bacup and Rawtenstall Grammar School ("As a designated Grammar School, the school is
//    allowed to select its entire intake on the basis of high academic ability"); "This is an Academy. Please
//    contact the academy for full admission details." Council pages: parents "are advised to list three
//    schools"; equal preference; children born 1 Sep 2015 to 31 Aug 2016 apply Sep 2026 to Oct 2026.
//  - Lancaster Royal Grammar School, Admissions: day application deadline Monday 7 September 2026; "11+ entrance
//    tests take place at LRGS on Saturday 26 September 2026 for 2027 entry. There are three tests: Verbal
//    Reasoning, Mathematics and English. We do not use Non-Verbal Reasoning."; results "sent to arrive with
//    parents by Tuesday 6 October 2026"; links GL Assessment familiarisation; "We advise not to use other practice
//    papers from anywhere other than GL Assessment."
//  - Lancaster Girls' Grammar School, Year 7 admissions: "adopted the Future Stories Community Enterprise Ltd
//    (FSCE) Entrance Test"; "The Test evaluates application of knowledge in English and Maths."; "The Test
//    consists of both multiple-choice and written response questions."; "The FSCE Test does not require
//    specialist tutoring, and no specific preparation is necessary."; "A child may only take the test once.";
//    "LGGS will test only Maths and English on Saturday 26th September 2026."
//  - Clitheroe Royal Grammar School, Admissions: Saturday 26 September 2026 at the Chatburn Road site; "two
//    papers, both of which are age weighted"; FSCE papers; English and Mathematics "up to and including the Year 5
//    programme of study"; "Paper 1 contains English and Mathematics questions with multiple choice answer
//    options. Paper 2 contains English and Mathematics questions where candidates respond with short written
//    answers."; applications closed 12:00 noon Friday 4 September 2026.
//  - FSCE Familiarisation Guide, Information for Parents (LCSE), copy hosted by CRGS: "There are NO past papers
//    and NO practice papers that have been authorised by FSCE."; content "will change from year to year";
//    "More focused on application than recall."; maths "through written and mental methods of calculation (no
//    calculators)"; tips list includes "Working Backward: Start from the desired answer and trace the steps back."
// No head teacher is named (the booklets print heads' names; not used). Our own, labelled: the worked
// working-backwards examples, practice set and plan. Spine: one Saturday, two kinds of test. On 26 September 2026
// the Lancaster boys' school set maths as a paper of its own beside verbal reasoning and English, while the
// Lancaster girls' and Clitheroe schools used FSCE papers where maths is woven through English in both papers.
// Lesson family: working backwards with inverse operations in multi-step word problems.

const TIMING = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'elevenplus', tag: 'LANCASHIRE: LANCASTER AND CLITHEROE', label: '11 plus maths in Lancashire', blurb: 'One Saturday, two kinds of test: a stand-alone maths paper at the Lancaster boys\' school, maths woven into English at the FSCE schools.' },
  slug: '11-plus-maths-tuition-lancashire',
  code: 'gal',
  accent: '#854234',
  accentRationale: 'Lancashire 11 plus: a red rose brick (#854234), 7.30:1 on #FBF8F2 and 6.29:1 on the deepest paper tint, warmer than the plum Lincolnshire page and clearly apart from the greens of the Yorkshire and Bromley pages',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: '11 plus maths tuition in Lancashire',
  title: '11 Plus Maths Tuition Lancashire | Lancaster and Clitheroe Tests',
  description: '11 plus maths tuition in Lancashire: a separate maths paper at Lancaster Royal Grammar, FSCE English and maths papers at the girls\' and Clitheroe schools, and dates.',
  ogDescription: 'Lancashire\'s grammar schools all tested on Saturday 26 September 2026, but not with the same papers. What the maths looks like in each.',
  twitterDescription: 'Lancashire 11 plus maths: GL-style maths, verbal reasoning and English at LRGS; FSCE mixed papers at LGGS and Clitheroe. Working backwards, taught.',
  pageName: '11 Plus Maths Tuition in Lancashire',
  webPageDescription: 'A guide for Lancashire families on the maths in the county\'s grammar school entrance tests, built from Lancashire County Council\'s 2027/28 booklets and the schools\' own admissions pages, with live online maths lessons for Years 5 and 6.',
  courseDescription: 'Live online maths lessons for Lancashire children in Years 5 and 6, built on the Year 5 national curriculum, with multi-step word problems and working backwards taught for both the stand-alone maths paper and the FSCE mixed papers.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: '11 plus in Lancashire',
  navLinks: [
    { href: '#schools', label: 'The schools' },
    { href: '#lrgs', label: 'Lancaster boys' },
    { href: '#fsce', label: 'FSCE papers' },
    { href: '#backwards', label: 'Working backwards' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Lancashire &middot; Lancaster, Clitheroe, Rossendale &middot; Years 5 and 6',
  h1: '11 plus maths tuition in Lancashire',
  lede: 'Lancashire has no county-wide 11 plus. Its grammar schools are academies that set their own tests, and the council\'s 2027/28 booklets simply send families to each school. For September 2027 entry three of them tested on the same Saturday, 26 September 2026, in two quite different ways. Lancaster Royal Grammar School set maths as a paper of its own, beside verbal reasoning and English. Lancaster Girls\' Grammar School and Clitheroe Royal Grammar School used FSCE papers in which English and maths questions sit side by side, and half the answers are written rather than chosen. We teach the shared Year 5 maths underneath, live online, to a whole class or to one child; this page explains each test and teaches one habit that serves them all: working backwards.',
  secondaryCta: { href: '#fsce', label: 'How the FSCE papers mix maths and English' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for my child in Lancashire.',
  heroNote: 'From Lancashire County Council\'s 2027/28 booklets and the schools\' admissions pages, read 31 October 2026 &middot; Not connected with any school or the council',
  spec: [
    ['Test day 2026', 'Saturday 26 September, all three schools'],
    ['Lancaster boys', 'Verbal reasoning, maths, English'],
    ['Non-verbal reasoning', 'Not used at the boys\' school'],
    ['Lancaster girls', 'FSCE, English and maths'],
    ['Clitheroe', 'FSCE, two age-weighted papers'],
    ['FSCE content', 'Up to the end of Year 5'],
    ['Calculators', 'None, says FSCE'],
    ['We teach', 'Year 5 and 6 maths, live online']
  ],
  capsuleQ: 'Is there maths in the Lancashire 11 plus?',
  capsule: 'Yes, at every grammar school, but each school sets its own test. Lancaster Royal Grammar School says its 11 plus for 2027 entry, held on Saturday 26 September 2026, was "three tests: Verbal Reasoning, Mathematics and English", with no non-verbal reasoning. Lancaster Girls\' Grammar School and Clitheroe Royal Grammar School both use the Future Stories Community Enterprise (FSCE) test, which Clitheroe describes as two age-weighted papers of English and maths up to the end of the Year 5 programme of study: Paper 1 multiple choice, Paper 2 short written answers. Both also sat on 26 September 2026. Modern Age Coders, an online school, covers the upper primary maths behind all of them in live lessons, as a class or one to one, in its 11 plus maths preparation course.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Courses that fit a Lancashire 11 plus year',
    lede: 'Pick by where your child is now: the main preparation course, a number-confidence course if arithmetic wobbles, or secondary-style maths for a child who is already well ahead.',
    items: [
      { course: '11-plus-maths-preparation-course-uk', code: 'LANCS / 01', title: 'Preparing for 11 plus maths', note: 'Upper primary number, fractions, measures and story problems, for either a maths paper or an FSCE mixed paper.' },
      { course: 'mental-maths-mastery-kids', code: 'LANCS / 02', title: 'Quick, confident arithmetic', note: 'Inverse facts and quick arithmetic until they need no thought, since no calculator is allowed.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'LANCS / 03', title: 'Lower secondary maths', note: 'Early algebra, angles and area, for a child who has outgrown primary work.' }
    ]
  },

  sections: [
    {
      id: 'schools', tint: 'tint', eyebrow: 'Who tests whom',
      h2: 'Which grammar schools are there in Lancashire?',
      lede: 'The council\'s 2027/28 secondary booklets list four: Lancaster Royal Grammar School and Lancaster Girls\' Grammar School in the north, Clitheroe Royal Grammar School in Ribble Valley, and Bacup and Rawtenstall Grammar School in Rossendale. Each is an academy and runs its own admissions.',
      body: [
        { kind: 'table', caption: 'Lancashire\'s grammar schools and their tests for September 2027 entry, from the council booklets and school pages, read 31 October 2026', head: ['School', 'Test for 2027 entry', 'Places'], rows: [
          ['Lancaster Royal Grammar School (boys)', 'Verbal reasoning, mathematics and English; no non-verbal reasoning; Saturday 26 September 2026', 'Admission number 164, plus 12 boarders'],
          ['Lancaster Girls\' Grammar School (girls)', 'FSCE test of English and maths, multiple choice and written response; Saturday 26 September 2026', 'Admission number 145'],
          ['Clitheroe Royal Grammar School (mixed)', 'FSCE, two age-weighted English and maths papers; Saturday 26 September 2026', 'Planned admission number 180'],
          ['Bacup and Rawtenstall Grammar School (mixed)', 'An entrance examination; the council says places are ranked by overall mark', 'Admission number 180']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the council says',
          left: [
            'For each grammar school the council\'s booklet carries the same line: "This is an Academy. Please contact the academy for full admission details." The council does not set or mark any 11 plus. It runs the common application, and its guidance advises families to list three schools.',
            'Lancashire uses equal preference: every school on the form is considered against its own rules first. But if a child qualifies for more than one school, the offer goes to the highest one named, so the order still matters.'
          ],
          rightH3: 'Two registrations, not one',
          right: [
            'Every grammar school needs its own test registration, separate from the council form. For 2027 entry the deadlines ran close together: Clitheroe closed at noon on Friday 4 September 2026, Lancaster Royal Grammar School\'s day application on Monday 7 September 2026, and Lancaster Girls\' at noon on Wednesday 9 September 2026.',
            'The council form itself opened in September and closed on 31 October 2026, for children with birthdays from 1 September 2015 to 31 August 2016.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.lancashire.gov.uk/schools-and-education/school-admissions/starting-secondary-school/advice-and-support/" rel="noopener" target="_blank">Lancashire County Council, secondary school booklets 2027/28</a> and <a class="ag-inline-link" href="https://www.lancashire.gov.uk/schools-and-education/school-admissions/how-we-allocate-school-places/" rel="noopener" target="_blank">How we allocate school places</a>. We are an independent online school with no tie to the council or to any Lancashire grammar school.' }
      ]
    },
    {
      id: 'lrgs', tint: 'deep', eyebrow: 'Lancaster boys\' school',
      h2: 'What is in the Lancaster Royal Grammar School 11 plus?',
      lede: 'Three tests, one of them mathematics, on a Saturday at the school. The school says: "We do not use Non-Verbal Reasoning."',
      body: [
        { kind: 'table', caption: 'Lancaster Royal Grammar School, 11 plus for 2027 entry, from the school\'s admissions page', head: ['Item', 'What the school publishes'], rows: [
          ['Tests', 'Verbal Reasoning, Mathematics and English'],
          ['Not tested', 'Non-verbal reasoning'],
          ['Date and place', 'Saturday 26 September 2026, at the school'],
          ['Day application deadline', 'Monday 7 September 2026'],
          ['Results', 'Sent to arrive with parents by Tuesday 6 October 2026'],
          ['Practice the school recommends', 'the free familiarisation booklets and online practice papers from GL Assessment'],
          ['Boarders', 'May also be tested in January if they apply late']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A maths paper of its own',
          left: [
            'Of the four schools, this is the only one whose published test lists mathematics as a separate test. A boy works on maths alone for the length of that paper, without switching to reading or grammar in between, which makes pacing easier to rehearse.',
            'The school points families to GL Assessment\'s free materials, and adds: "We advise not to use other practice papers from anywhere other than GL Assessment." It warns that some organisations charge large sums for practice papers and are not associated with the school.'
          ],
          rightH3: 'How places are ranked',
          right: [
            'The council booklet sets out the school\'s categories. Boys who reach the minimum level in the entrance test are ranked by where they live, priority catchment first, with ties settled by random allocation.',
            'Boys eligible for disadvantage funding through free school meals, and looked after children, are treated as qualifying if they reach the minimum level "or who score up to and including 5% below the minimum level." That widening applies to them alone.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.lrgs.org.uk/join-the-school/admissions" rel="noopener" target="_blank">Lancaster Royal Grammar School, Admissions</a> and Lancashire County Council\'s Lancaster, Morecambe, Wyre and Fylde North booklet 2027/28, read 31 October 2026.' }
      ]
    },
    {
      id: 'fsce', tint: '', eyebrow: 'The FSCE schools',
      h2: 'What is the FSCE 11 plus at Lancaster Girls\' and Clitheroe like?',
      lede: 'Two papers, both mixing English and maths. Clitheroe puts it most plainly: "Paper 1 contains English and Mathematics questions with multiple choice answer options. Paper 2 contains English and Mathematics questions where candidates respond with short written answers."',
      body: [
        { kind: 'table', caption: 'The FSCE test at the two schools, from their admissions pages and the FSCE parents\' guide', head: ['Question', 'Lancaster Girls\' Grammar School', 'Clitheroe Royal Grammar School'], rows: [
          ['Subjects', '"only Maths and English"', 'English and mathematics'],
          ['Answer types', 'Multiple choice and written response', 'Paper 1 multiple choice; Paper 2 short written answers'],
          ['Curriculum', 'Knowledge appropriate to Key Stage 2', 'Up to and including the Year 5 programme of study'],
          ['Scoring', 'Pass mark, with priority for disadvantaged pupils up to 5% below it', 'Both papers age weighted; ranking by ability within categories'],
          ['2026 test day', 'Saturday 26 September 2026', 'Saturday 26 September 2026, Chatburn Road site'],
          ['Registration closed', 'Noon, Wednesday 9 September 2026', 'Noon, Friday 4 September 2026']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'No authorised practice papers', p: 'FSCE\'s guide for parents says: "There are NO past papers and NO practice papers that have been authorised by FSCE." Its familiarisation guide is the only genuine resource, and it is free.' },
          { h3: 'It changes each year', p: 'FSCE says the type of questions, subjects, content and format "will change from year to year", so that nobody can claim to know what the next paper holds.' },
          { h3: 'No calculators', p: 'The maths section of the guide expects written and mental methods of calculation, "(no calculators)", with long multiplication and short division listed by name.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Application, not recall',
          left: [
            'FSCE describes its test as "More focused on application than recall." Where a question needs something a child may not have met, the guide says the necessary information is given in the paper and the child applies it to a new situation.',
            'For maths, that means a child who can only reproduce a method on familiar numbers is less well served than one who can read an unfamiliar set-up and decide what to do. That is the gap our lessons aim at.'
          ],
          rightH3: 'What the girls\' school says about preparation',
          right: [
            '"The FSCE Test does not require specialist tutoring, and no specific preparation is necessary." The school encourages wide reading, maths fluency through everyday examples, dinner-table discussion and calm.',
            'We agree with the spirit of that. Our lessons teach the Year 5 curriculum and how to approach an unfamiliar problem; they are not a substitute for a child\'s primary school, and they do not imitate FSCE questions.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.lggs.org.uk/admissions/year-7-admissions" rel="noopener" target="_blank">Lancaster Girls\' Grammar School, Year 7 admissions</a>; <a class="ag-inline-link" href="https://crgs.org.uk/main-school-11-16/admissions/" rel="noopener" target="_blank">Clitheroe Royal Grammar School, Admissions</a>; <a class="ag-inline-link" href="https://crgs.org.uk/wp-content/uploads/2026/02/FSCE-Familiarisation-Guide-Information-for-Parents-LCSE.pdf" rel="noopener" target="_blank">FSCE Familiarisation Guide, Information for Parents</a>, read 31 October 2026.' }
      ]
    },
    {
      id: 'compare', tint: 'tint', eyebrow: 'Same Saturday, different papers',
      h2: 'Does a Lancaster family with a son and a daughter prepare twice?',
      lede: 'In part. The maths underneath is the same Year 5 curriculum. What differs is the shape of the paper and the way answers are given, and those are worth a few weeks of attention each.',
      body: [
        { kind: 'table', caption: 'Our comparison, built from the schools\' published formats', head: ['Feature', 'Stand-alone maths paper (boys\' school)', 'FSCE mixed papers (girls\' and Clitheroe)'], rows: [
          ['Where maths appears', 'In one test given only to maths', 'Spread across both papers, between English questions'],
          ['How answers are given', 'Follow the familiarisation material the school recommends', 'One paper of choices, one of short written answers'],
          ['Other tests on the day', 'Verbal reasoning and English', 'English only'],
          ['Practice the school points to', 'GL Assessment free familiarisation', 'FSCE\'s free familiarisation guide; no authorised practice papers'],
          ['What to rehearse (ours)', 'Steady pacing through a block of maths', 'Switching between reading and calculating, and writing an exact answer']
        ] },
        { kind: 'p', mt: true, html: 'Both formats reward the same thing in the end: a child who can read a multi-step problem, decide what is being asked, and check an answer by running it the other way. The next section teaches exactly that, with examples we wrote ourselves.' }
      ]
    },
    {
      id: 'backwards', tint: 'deep', eyebrow: 'Our lesson family',
      h2: 'How does working backwards help with 11 plus word problems?',
      lede: 'FSCE\'s own list of tips for maths includes "Working Backward: Start from the desired answer and trace the steps back." It is also how primary pupils are taught to check a calculation from Year 3 onwards: undo it with the inverse operation. The examples below are ours, not FSCE or GL questions.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Write the steps forwards', p: 'List what happened, in order: started with a number, added, halved, took away. A story told in order is easy to reverse.' },
          { h3: 'Undo from the end', p: 'Start from the final amount. Each step is undone by its opposite: add becomes subtract, halve becomes double, multiply becomes divide.' },
          { h3: 'Check forwards again', p: 'Put the answer back into the original story. If the story ends where the question says, the answer is right. If not, find the step that went wrong.' }
        ] },
        { kind: 'table', mt: true, caption: 'Four story problems we wrote, solved backwards', head: ['Problem (ours)', 'Undo from the end', 'Check forwards'], rows: [
          ['Priya thinks of a number, multiplies it by 4, then subtracts 7. She gets 29. What was her number?', '29 + 7 = 36, then 36 divided by 4 = 9', '9 x 4 = 36, and 36 minus 7 = 29'],
          ['A baker sells half his loaves in the morning and 18 more in the afternoon. He has 22 left. How many did he bake?', '22 + 18 = 40 left after the morning, so double: 80', 'Half of 80 is 40; 40 minus 18 = 22'],
          ['Tom gives a quarter of his marbles to his sister and then 3 more to a friend. He has 12 left. How many did he start with?', '12 + 3 = 15 is three quarters of his marbles, so one quarter is 5 and the whole is 20', 'A quarter of 20 is 5; 20 minus 5 minus 3 = 12'],
          ['A train leaves the coast, takes 1 hour 35 minutes to reach Lancaster and arrives at 11:10. When did it leave?', '11:10 back 1 hour is 10:10; back 35 more minutes is 9:35', '9:35 plus 1 hour 35 minutes is 11:10']
        ] },
        { kind: 'p', mt: true, html: 'Our practice set. Work each one backwards, then check forwards. (1) I double a number and add 15 to get 61. (2) A rope is cut in half, then 1.4 m is cut off one half, leaving 2.1 m. How long was the rope? (3) After giving away 125 stickers and then a third of what was left, Ana has 50. How many did she start with? (4) A film ends at 19:05 and lasts 2 hours 20 minutes. When did it start? (5) A number is divided by 6, then 8 is added, giving 15. Answers, ours: (1) 23; (2) 7 m, because one half was 3.5 m; (3) 200, because 50 is two thirds of 75, and 75 + 125 = 200; (4) 16:45; (5) 42.' },
        { kind: 'two', mt: true,
          leftH3: 'Why this lesson family',
          left: [
            'The national curriculum asks pupils in Years 3 and 4 to estimate and use inverse operations to check answers, before Year 5 adds rounding as a check. Working backwards is the same skill turned into a problem-solving strategy, so it builds on what school already teaches.',
            'It also suits both Lancashire formats. With options, a child can test each one forwards. With a blank answer box, the backwards route reaches the exact number, and the forwards check catches a slip before it costs the mark.'
          ],
          rightH3: 'Where it goes wrong',
          right: [
            'The common error is undoing steps in the original order rather than in reverse. In the Priya example, dividing 29 by 4 first gives nonsense. We have children say the steps aloud, last one first, until reversing them is automatic.',
            'Fractions are the second trap: undoing "gave away a quarter" means finding what three quarters is, not adding a quarter back. The Tom example is there for exactly that reason.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Year by year',
    h2: 'A Lancashire route from Year 4 to the September test',
    lede: 'Lancashire\'s grammar schools tested in the fourth week of September 2026, a little later than many areas, but still on Year 5 content. Registrations closed in early September.',
    table: { caption: 'Our plan for a Lancashire child, built around the schools\' 2026 calendar', head: ['When', 'Maths focus (ours)', 'Secure when'], rows: [
      ['Year 4, final term', 'Multiplication facts to 12 x 12 and the matching division facts', 'Each multiplication fact can be turned into its two division facts at once'],
      ['Autumn of Year 5', 'Inverse operations and checking, with numbers to a million', 'Every answer is checked by undoing it, unprompted'],
      ['Spring of Year 5', 'Fractions of amounts, measures and time, without a calculator', 'Long multiplication and short division are set out correctly'],
      ['Summer of Year 5', 'Multi-step word problems, forwards and backwards; school open evenings', 'A four-step story problem is solved and checked in a few minutes'],
      ['Early September of Year 6', 'Register with each school before its deadline; read the familiarisation guide', 'The child has seen the answer formats for the school\'s papers']
    ] },
    left: { h3: 'If the outcome disappoints', ps: [
      'The council booklets show each Lancaster and Clitheroe grammar school receiving more parental preferences than it has places.',
      'A child who can reverse a problem has a skill every Year 7 class uses.'
    ] },
    right: { h3: 'Beyond Year 6', ps: [
      'The <a class="ag-inline-link" href="/gcse-maths-tuition-online">GCSE maths page</a> covers the exam every pupil sits at 16.',
      'Children who enjoy hard problems can browse the <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">UK competitions calendar</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'All related courses',
    h2: 'Maths and coding courses for Lancashire children',
    lede: 'By age and aim. Every card links to its syllabus.',
    bands: [
      { num: 'I', h3: 'Primary maths', sub: 'Years 3 to 6', courses: [
        { code: 'UK / GAL / 01', slug: '11-plus-maths-preparation-course-uk', title: 'Preparing for 11 plus maths', blurb: 'Year 5 maths for both Lancashire test styles.' },
        { code: 'UK / GAL / 02', slug: 'mental-maths-mastery-kids', title: 'Mental arithmetic', blurb: 'Inverse facts and calm arithmetic, no calculator.' },
        { code: 'UK / GAL / 03', slug: 'elementary-mathematics-complete-masterclass', title: 'Early primary maths', blurb: 'Sound foundations for younger children.' },
        { code: 'UK / GAL / 04', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning and readiness', blurb: 'Patterns and problem solving for ages 6 to 9.' }
      ] },
      { num: 'II', h3: 'Into secondary', sub: 'Years 6 to 8', courses: [
        { code: 'UK / GAL / 05', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Lower secondary maths', blurb: 'The algebra and shape work of the first secondary years.' },
        { code: 'UK / GAL / 06', slug: 'ks2-sats-maths-course', title: 'KS2 SATs maths', blurb: 'For the arithmetic and reasoning papers every Year 6 sits.' }
      ] },
      { num: 'III', h3: 'Maths in code', sub: 'Ages 8 and up', courses: [
        { code: 'UK / GAL / 07', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Undo a program step by step, in Python.' },
        { code: 'UK / GAL / 08', slug: 'scratch-programming-complete-course', title: 'Scratch for beginners', blurb: 'Sequences and logic, built visually.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live online, from Morecambe Bay to the Pennines',
    lede: TIMING + ' Our teachers are based in India, which has no daylight saving: the gap to UK time is four hours thirty in British summer and five hours thirty in winter. Your booking shows UK time.',
    slots: [
      { time: 'After school', l: 'An early-evening slot for Years 5 and 6.' },
      { time: 'Weekend morning', l: 'For families who keep weekday evenings free.' },
      { time: 'Late summer', l: 'Calm practice before the September test.' }
    ],
    cells: [
      { h3: 'Curriculum, not tricks', p: 'Year 5 maths taught in depth, with checking built into every topic.' },
      { h3: 'Rural or town', p: 'The same lesson in Garstang, Clitheroe or Rawtenstall, no driving.' },
      { h3: 'Class or solo', p: 'Join 15 to 20 children working at the same stage, or book a teacher of your own.' },
      { h3: 'Problems we wrote', p: 'Story problems drafted by our team, never borrowed from a paper.' },
      { h3: 'Brief updates', p: 'A short note on progress and the next topic after each block.' },
      { h3: 'No guarantees', p: 'Results and places sit with the schools and the council.' }
    ]
  },

  projectsH2: 'What our students go on to make',
  projectsLede: 'Work by children from our classes, many now in secondary school. More on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' own words, from our Google profile.',

  fees: {
    h2: 'What the lessons cost',
    lede: 'A monthly fee in the currency we charge UK families, settled each month with no block booking. The first lesson is free of charge.',
    free: ['A proper lesson at your child\'s level', 'A clear picture of strengths and gaps', 'Booked with only a phone number'],
    group: ['15 to 20 children at one level', 'One teacher through the year', 'Work marked and gone through together', 'A certificate when the course ends'],
    one: ['A single teacher for a single child', 'Shaped around one school\'s test format', 'Good for a child who needs a slower pace']
  },

  faq: {
    eyebrow: 'Lancashire 11 plus questions',
    h2: 'What Lancashire parents ask',
    items: [
      { q: 'Is there a maths paper in the Lancaster Royal Grammar School 11 plus?', a: 'Yes. The school says its 11 plus for 2027 entry was three tests: verbal reasoning, mathematics and English. It does not use non-verbal reasoning.' },
      { q: 'When was the Lancaster Girls\' Grammar School 11 plus in 2026?', a: 'On Saturday 26 September 2026, testing only maths and English through the FSCE test. Registration for 2027 entry closed at noon on Wednesday 9 September 2026.' },
      { q: 'What is in the Clitheroe Royal Grammar School entrance exam?', a: 'Two age-weighted FSCE papers of English and maths up to the end of the Year 5 programme of study. Paper 1 is multiple choice and Paper 2 asks for short written answers.' },
      { q: 'Is there a Lancashire 11 plus run by the council?', a: 'No. Each grammar school is an academy and sets its own test. Lancashire County Council runs the common application for secondary places, which closed on 31 October 2026 for September 2027 entry.' },
      { q: 'Are there FSCE past papers?', a: 'No. FSCE says there are no past papers and no practice papers that it has authorised, and that its format changes from year to year. Its free familiarisation guide is the genuine resource.' },
      { q: 'Can calculators be used in the FSCE maths questions?', a: 'No. FSCE\'s guide for parents says the maths uses written and mental methods of calculation, with no calculators.' },
      { q: 'Does a disadvantaged child need the same score?', a: 'The council booklets show Lancaster Royal Grammar School and Lancaster Girls\' Grammar School giving priority to eligible disadvantage-funded children who score up to 5 per cent below the minimum level or pass mark. Check each school\'s policy for the exact rule.' },
      { q: 'Does my child need a tutor for the Lancashire 11 plus?', a: 'Lancaster Girls\' Grammar School says the FSCE test does not require specialist tutoring and that no specific preparation is necessary. Our lessons cover school maths in depth, and we make no promise about any result.' },
      { q: 'How many schools can I list on the Lancashire application?', a: 'The council advises listing three schools. All are considered equally, but if a child qualifies for more than one, the offer is for the highest one named.' },
      { q: 'When are your maths lessons?', a: TIMING + ' Times are always shown in UK time.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for Lancashire families',
    lede: 'Nearby coding, other areas\' tests, and the UK hub.',
    items: [
      { href: '/11-plus-maths-tuition', label: '11 plus maths tuition', p: 'The wider picture across England.' },
      { href: '/11-plus-maths-tuition-gloucestershire', label: '11 plus maths in Gloucestershire', p: 'Another county with written maths answers.' },
      { href: '/coding-classes-in-lancashire', label: 'Coding classes in Lancashire', p: 'Python and Scratch for Lancashire children.' },
      { href: '/best-coding-class-in-lancaster', label: 'Coding classes in Lancaster', p: 'Close to both Lancaster grammar schools.' },
      { href: '/best-coding-class-in-preston', label: 'Coding classes in Preston', p: 'For central Lancashire.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Every UK page in one place.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson',
    lede: 'Say which Lancashire school your child is aiming for and what year they are in. The first lesson will use the answer format that school\'s test uses.',
    readFirst: 'Want to look first? Every <a class="ag-inline-link" href="/courses">course page</a> carries a full syllabus, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> walks through a lesson.',
    note: 'WhatsApp is quickest and free from any UK phone. We answer from India on a +91 number and have no Lancashire office.',
    formNote: 'Nothing to pay, nothing to sign. One message back with a time.'
  },

  footer: {
    cols: [
      { h4: 'Lancashire', links: [
        { href: '/coding-classes-in-lancashire', label: 'Coding in Lancashire' },
        { href: '/best-coding-class-in-lancaster', label: 'Coding in Lancaster' },
        { href: '/online-coding-and-python-classes-in-blackpool', label: 'Coding in Blackpool' },
        { href: '/11-plus-maths-tuition', label: '11 plus maths' }
      ] },
      { h4: 'More', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Undo the last step first, then check forwards'
  },

  personalityCss: `
.ag-root.ag-gal .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-gal .ag-capsule { border-left-width: 7px; border-radius: 3px; }
.ag-root.ag-gal .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-gal .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-gal .ag-table th:first-child { width: 30%; }
`,

  dossier: {
    curriculumAuthority: 'Lancashire County Council 2027/28 secondary booklets: four grammar schools (Lancaster Royal Grammar School, Lancaster Girls\' Grammar School, Clitheroe Royal Grammar School, Bacup and Rawtenstall Grammar School), each "an Academy"; admission numbers 164 (+12 boarders), 145, 180, 180; disadvantaged pupils within 5% of the minimum level at the two Lancaster schools; LGGS registration noon 9 September 2026 and test 26 September 2026; equal preference, three schools advised. LRGS: verbal reasoning, mathematics and English, no non-verbal reasoning, 26 September 2026, results by 6 October 2026, GL familiarisation recommended. LGGS: FSCE, English and maths, multiple choice and written response, no specific preparation necessary. CRGS: FSCE, two age-weighted papers to Year 5, Paper 1 multiple choice, Paper 2 short written answers, applications closed 4 September 2026. FSCE guide: no authorised past or practice papers, format changes yearly, application over recall, no calculators, working backward tip.',
    localProject: 'One Saturday, two kinds of test. The page shows Lancashire families that there is no council 11 plus, lists the four academy grammar schools from the council booklets, and contrasts Lancaster Royal Grammar School\'s stand-alone maths test (with verbal reasoning and English, no non-verbal reasoning) against the FSCE mixed English and maths papers at Lancaster Girls\' and Clitheroe, all sat on Saturday 26 September 2026, with each school\'s deadlines, results dates and disadvantaged-pupil rules. It then teaches working backwards with inverse operations in multi-step word problems, a strategy FSCE itself lists, through our own worked examples and practice set. Lesson family: working backwards and checking forwards.',
    requiredMentions: ['We do not use Non-Verbal Reasoning.', 'There are NO past papers and NO practice papers that have been authorised by FSCE.', 'More focused on application than recall.', 'Working Backward: Start from the desired answer and trace the steps back.', 'This is an Academy. Please contact the academy for full admission details.', 'Paper 2 contains English and Mathematics questions where candidates respond with short written answers.', 'no specific preparation is necessary', 'or who score up to and including 5% below the minimum level.'],
    sources: [
      { claim: 'Lancashire County Council booklets 2027/28 (Lancaster and East): grammar school entries, admission numbers, academy status, LGGS registration and test date, disadvantaged-pupil rule.', url: 'https://www.lancashire.gov.uk/schools-and-education/school-admissions/starting-secondary-school/advice-and-support/' },
      { claim: 'Lancaster Royal Grammar School, Admissions: three tests, no NVR, dates, GL familiarisation advice.', url: 'https://www.lrgs.org.uk/join-the-school/admissions' },
      { claim: 'Lancaster Girls\' Grammar School, Year 7 admissions: FSCE, maths and English, answer types, preparation statement, once only.', url: 'https://www.lggs.org.uk/admissions/year-7-admissions' },
      { claim: 'Clitheroe Royal Grammar School, Admissions: FSCE papers, Year 5 content, paper formats, dates.', url: 'https://crgs.org.uk/main-school-11-16/admissions/' },
      { claim: 'FSCE Familiarisation Guide for Parents (LCSE): no authorised papers, yearly change, no calculators, tips.', url: 'https://crgs.org.uk/wp-content/uploads/2026/02/FSCE-Familiarisation-Guide-Information-for-Parents-LCSE.pdf' },
      { claim: 'Lancashire County Council, How we allocate school places: three schools advised, equal preference.', url: 'https://www.lancashire.gov.uk/schools-and-education/school-admissions/how-we-allocate-school-places/' }
    ],
    rejectedClaims: [
      'The provider of the Lancaster Royal Grammar School papers: the school recommends GL Assessment familiarisation material but does not name its provider on the page read; not stated as fact.',
      'Bacup and Rawtenstall Grammar School test format and dates: the school\'s Year 7 page was not reached; only the council booklet\'s ranking rule is used.',
      'Head teachers\' names printed in the council booklets: not used.',
      'Preference counts from the booklets summed into totals or turned into odds: not done; published totals only referenced generally.',
      'FSCE sample questions from the familiarisation guide: not reproduced; every example on the page is ours.',
      'Any result, pass mark or place promise.'
    ]
  }
};
