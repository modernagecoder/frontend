'use strict';
// Quest Assessments 11 plus maths practice (ag- maths door by provider, UK cluster Phase 2, row UK050).
// Read raw with curl on 31 October 2026 (copies under
// keyword-research-2026-09/uk-us-gap/src/quest-assessments-11-plus-maths-practice/):
//  - questassessments.com/parent-guidance: "Grammar schools use Quest Admissions assessments"; "Every school will
//    use different papers and follow different structures for their assessments."; "Quest Admissions is an exam
//    provider used by UK independent schools."; "Your child's assessment is unique to the school they're applying
//    to"; "Quest Assessments is part of the education company Atom Learning"; free Atom Home account for every child
//    eligible for pupil premium; free familiarisation booklets for English, maths, verbal and non-verbal reasoning.
//  - questassessments.com/admissions: "Bespoke and branded to your school"; "Paper and online"; "Main entry and
//    in-year"; "For ages 7+ to 16+"; "Trusted by 130+ schools"; five-step process; "We're led by accessible design
//    and follow Ofqual guidance."
//  - Quest 11+ Guidance for Parents (grammar schools) PDF: "The Quest 11+ is designed to assess what children have
//    covered in school up to the end of Year 5"; maths may include "problem-solving, arithmetic, reasoning"; OMR:
//    "draw a line through a box", "Do not shade in the whole rectangle", "Do not tick the box", "Do not put a cross
//    through the box"; "They might be asked to select more than one answer"; "The best preparation is steady,
//    meaningful learning over time".
//  - Quest maths familiarisation booklet PDF: "These questions will not appear in your real assessment."; five
//    options A to E on the OMR examples; the answer key lists 20 sample questions, one of which has four correct
//    options (structure only; no question reproduced).
//  - London Borough of Bexley, about the test: "Quest Assessments is the Bexley Selection Test provider"; two
//    booklets, "each paper lasts approximately 50 minutes, plus additional time for instructions"; "Quest Assessments
//    cannot provide information directly to parents"; results by email from 4pm on Friday 2 October 2026.
//  - Quest and the Wirral Consortium page: two papers, "Each paper lasts approximately 50 minutes"; Paper two
//    "Mathematics and Non-verbal reasoning"; results mid-October 2027.
//  - Quest and the Dorset Consortium page: "Three papers ... Each paper lasts 40 minutes"; Paper one Mathematics;
//    registration opens April 2027; exam September 2027.
//  - Quest and an Enfield grammar school's 2027 assessment page: "two non-adaptive written assessments"; Paper one
//    Mathematics; "The English and Mathematics sections use multiple-choice questions"; test September 2027.
//  - FSCE Ltd home page: tests "written by Grammar Schools, for Grammar Schools"; "We support tutor-free summers".
//  - Gloucestershire County Council: 2028 intake provider "will be Future Stories Community Enterprise (FSCE)".
// Our own arithmetic, labelled as ours: Dorset's three 40-minute papers make 120 minutes of questions in one session.
// Worked examples and the practice set are written by us.
// Spine: Quest builds a different test for each customer, so "Quest style" means a way of working (OMR sheet,
// five options, sometimes several right answers) rather than one paper; FSCE is a separate provider, often confused.
// Lesson family: select-all-that-apply questions, where every option must be checked, not just the first that fits.

const TIMING = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'elevenplus', tag: 'QUEST ASSESSMENTS', label: 'Quest 11 plus maths', blurb: 'Quest writes a bespoke test for each area. How the maths paper changes from Bexley to Dorset, and why FSCE is a different provider.' },
  slug: 'quest-assessments-11-plus-maths-practice',
  code: 'qap',
  accent: '#37634E',
  accentRationale: 'Quest 11 plus maths: a bottle green (#37634E), 6.48:1 on #FBF8F2 and 5.57:1 on the deepest paper tint, cooler than the mulberry CEM page and the olive GL page beside it',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Quest Assessments 11 plus maths practice',
  title: 'Quest 11 Plus Maths Practice | Quest Assessments by Area',
  description: 'Quest 11 plus maths practice: who Quest Assessments is, how its maths paper differs in Bexley, Wirral and Dorset, the OMR sheet, and how it differs from FSCE.',
  ogDescription: 'Quest Assessments writes a bespoke 11 plus for each area that hires it. Maths can be a paper on its own or share one with non-verbal reasoning.',
  twitterDescription: 'Quest 11 plus, area by area: papers, timings, the OMR answer line, select-more-than-one questions, and why Quest and FSCE are not the same thing.',
  pageName: 'Quest Assessments 11 Plus Maths Practice',
  webPageDescription: 'Live online maths teaching for children sitting an 11 plus written by Quest Assessments, based on what Quest, councils and consortia publish about each local test.',
  courseDescription: 'Live online maths lessons for children in Years 4 and 5 preparing for a Quest Assessments 11 plus, teaching Year 5 maths, OMR answer habits and multi-answer questions.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Quest 11 plus maths',
  navLinks: [
    { href: '#who', label: 'Who Quest is' },
    { href: '#areas', label: 'By area' },
    { href: '#sheet', label: 'Answer sheet' },
    { href: '#fsce', label: 'Quest or FSCE' },
    { href: '#worked', label: 'Worked examples' }
  ],
  eyebrow: 'England &middot; Quest Assessments 11 plus &middot; Years 4 and 5',
  h1: 'Quest 11 plus maths practice',
  lede: 'Quest Assessments is a UK test provider, part of the education company Atom Learning, that builds a separate 11 plus for each grammar school area or independent school that hires it. At Modern Age Coders, a live teacher covers that Quest maths with your child over video, either in a class of 15 to 20 or on their own, using our 11 plus maths preparation course. The first job is to read your own area\'s Quest page, because the maths might be a paper of its own or half of a paper shared with non-verbal reasoning.',
  secondaryCta: { href: '#areas', label: 'See the areas' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for a Quest Assessments 11 plus.',
  heroNote: 'From Quest, council and consortium pages, read 31 October 2026 &middot; Not connected with Quest Assessments or any school',
  spec: [
    ['Provider', 'Quest Assessments, part of Atom Learning'],
    ['Built for', 'Each school or area, to its own design'],
    ['Ages served', '7+ to 16+ entry'],
    ['Maths level', 'School maths to the end of Year 5'],
    ['Answers', 'OMR sheet, a pencil line through a box'],
    ['Options', 'Usually five, sometimes more than one right'],
    ['We teach', 'Year 5 maths, sheet habits, multi-answer care'],
    ['We never', 'Copy Quest booklets or promise a place']
  ],
  capsuleQ: 'What is the Quest 11 plus?',
  capsule: 'It is an 11 plus test written by Quest Assessments, a UK provider that is part of Atom Learning, for whichever grammar schools or independent schools commission it. Quest says plainly that "Every school will use different papers and follow different structures for their assessments." Its parents\' guide says the test assesses what children have covered "up to the end of Year 5", that most papers use an OMR answer sheet marked with a pencil line, and that some questions ask for more than one answer. Bexley and Wirral set two papers of about 50 minutes; Dorset\'s consortium sets three 40-minute papers with maths first. Modern Age Coders teaches the Year 5 maths and the answer-sheet habits these tests need, live online, using practice questions we write ourselves.',

  picks: {
    eyebrow: 'Choose a starting point',
    h2: 'Three courses for a Quest maths paper',
    lede: 'Start where your child is weakest, not where the test begins. Tap a card to read what it covers.',
    items: [
      { course: '11-plus-maths-preparation-course-uk', code: 'QST / 01', title: '11 plus maths preparation', note: 'The core course: Year 5 number, fractions, measures and problem solving, taught for questions worded in unfamiliar ways.' },
      { course: 'mental-maths-mastery-kids', code: 'QST / 02', title: 'Mental maths, number sense first', note: 'Forty or fifty minutes go quickly when every sum is written out; secure recall gives time back for checking options.' },
      { course: 'reasoning-and-readiness-course-for-young-thinkers', code: 'QST / 03', title: 'Reasoning and readiness', note: 'For younger children, ages 6 to 9, who would gain from pattern and spatial puzzles long before any Quest paper.' }
    ]
  },

  sections: [
    {
      id: 'who', tint: 'tint', eyebrow: 'Who Quest is',
      h2: 'Who are Quest Assessments?',
      lede: 'A test company that designs entrance assessments to order for grammar schools and independent schools, and also sells classroom progress tests. It is part of Atom Learning, which runs a home-learning platform.',
      body: [
        { kind: 'p', html: 'Quest\'s parent guidance page describes two sides to its admissions work. "Grammar schools use Quest Admissions assessments to identify pupils who are naturally suited to a grammar school environment", and "Quest Admissions is an exam provider used by UK independent schools." For both, the warning is the same: "Every school will use different papers and follow different structures for their assessments." The admissions page aimed at schools lists what Quest offers its customers, including tests that are "Bespoke and branded to your school", delivered on "Paper and online", for "Main entry and in-year" admissions and "For ages 7+ to 16+". It says Quest is "Trusted by 130+ schools".' },
        { kind: 'two', mt: true,
          leftH3: 'How a Quest test is made',
          left: [
            'Quest publishes its own five steps: it meets the school to discuss entry requirements, designs an assessment suite for the school to review, works with the school on the candidate experience, runs the test and processes results, and returns full reports on each candidate.',
            'So when a family asks "what is on the Quest paper", the honest answer is "whatever your area agreed with Quest". The local page is the only reliable guide.'
          ],
          rightH3: 'Who to ask about a Quest test',
          right: [
            'Not Quest. Bexley Council states that "Quest Assessments cannot provide information directly to parents or respond to individual concerns"; questions go to the council\'s School Admissions Team.',
            'The same pattern holds elsewhere: the school or consortium runs registration and results, and Quest supplies the papers.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.questassessments.com/parent-guidance" rel="noopener" target="_blank">Quest Assessments, parent guidance</a> and <a class="ag-inline-link" href="https://www.questassessments.com/admissions" rel="noopener" target="_blank">Quest Admissions</a>; <a class="ag-inline-link" href="https://www.bexley.gov.uk/services/schools-and-education/selection-tests/about-test" rel="noopener" target="_blank">London Borough of Bexley, about the test</a>; all read 31 October 2026. Modern Age Coders is not connected with Quest Assessments, Atom Learning or any school.' }
      ]
    },
    {
      id: 'areas', tint: 'deep', eyebrow: 'Area by area',
      h2: 'How is the Quest maths paper set out in each area?',
      lede: 'Four published Quest designs, four different places for the maths. Read across the table before you buy anything labelled "Quest style".',
      body: [
        { kind: 'table', caption: 'Maths in Quest-written 11 plus tests, from the pages Quest hosts with each area or school (next published sitting)', head: ['Area or school', 'Papers', 'Where the maths sits', 'Next sitting published'], rows: [
          ['Bexley Selection Test (London Borough of Bexley)', 'Two non-adaptive paper assessments, around 50 minutes each', 'Paper two, "Numerical Reasoning and Non-verbal Reasoning"', 'Results early October 2027'],
          ['Wirral Consortium', 'Two papers in one session, about 50 minutes each', 'Paper two, "Mathematics and Non-verbal reasoning"', 'Results mid-October 2027'],
          ['Dorset Consortium', 'Three papers, 40 minutes each', 'Paper one, Mathematics, on its own', 'Exam September 2027; registration opens April 2027'],
          ['One Enfield grammar school', 'Two non-adaptive written assessments', 'Paper one, Mathematics, multiple choice', 'Test September 2027']
        ] },
        { kind: 'p', mt: true, html: 'The Dorset design is the longest. By our own arithmetic its three 40-minute papers add up to 120 minutes of questions in one session, with a short supervised break, and maths comes first, when children are freshest. In Bexley and Wirral the maths shares its paper with non-verbal reasoning, so a child switches from fractions to shape patterns inside one booklet. In the Enfield school\'s design maths is again a paper of its own, while the second paper holds English and a written task. Bexley names its maths "numerical reasoning" and the council defines it as content "not exceeding what children are expected to learn by the end of Year 5". That ceiling matches Quest\'s own parents\' guide, which says the test covers school work "up to the end of Year 5, so there\'s no need for them to learn Year 6 topics".' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Dates move with contracts', p: 'Dorset\'s consortium page with Quest gives registration from April 2027 and an exam in September 2027. Our <a class="ag-inline-link" href="/11-plus-maths-tuition-bournemouth-christchurch-and-poole">Bournemouth, Christchurch and Poole page</a> records the provider in use before that.' },
          { h3: 'Results come from the area', p: 'Bexley emails results from 4pm on Friday 2 October 2026 for this year\'s cohort. Wirral\'s page with Quest gives results in mid-October 2027 for the next one.' },
          { h3: 'Independent schools too', p: 'The London 11+ Consortium of independent schools designed its online test with Quest. It is a very different shape: one 100-minute online sitting with adaptive maths, described on the consortium\'s own site.' }
        ] },
        { kind: 'source', html: 'Sources: Quest Assessments with <a class="ag-inline-link" href="https://www.questassessments.com/parent-guidance-consortium/bexley-selection-test" rel="noopener" target="_blank">the London Borough of Bexley</a>, <a class="ag-inline-link" href="https://www.questassessments.com/parent-guidance-consortium/wirral-consortium-11-assessment" rel="noopener" target="_blank">the Wirral Consortium</a>, <a class="ag-inline-link" href="https://www.questassessments.com/parent-guidance-consortium/dorset-consortium-11-assessment" rel="noopener" target="_blank">the Dorset Consortium</a> and <a class="ag-inline-link" href="https://www.questassessments.com/parent-guidance-consortium/the-latymer-school-assessment" rel="noopener" target="_blank">an Enfield grammar school</a>, read 31 October 2026. Local detail: <a class="ag-inline-link" href="/11-plus-maths-tuition-bexley">Bexley</a>, <a class="ag-inline-link" href="/11-plus-maths-tuition-wirral">Wirral</a>, <a class="ag-inline-link" href="/11-plus-maths-tuition-enfield">Enfield</a>, <a class="ag-inline-link" href="/11-plus-maths-tuition-slough">Slough</a>, <a class="ag-inline-link" href="/11-plus-maths-tuition-plymouth">Plymouth</a>, <a class="ag-inline-link" href="/11-plus-maths-tuition-kingston">Kingston</a>.' }
      ]
    },
    {
      id: 'sheet', tint: '', eyebrow: 'The answer sheet',
      h2: 'How do you fill in a Quest OMR answer sheet?',
      lede: 'With one horizontal pencil line through the box beside the chosen answer, nothing else. Quest spells the rules out because a correct answer marked the wrong way may not be read.',
      body: [
        { kind: 'p', html: 'Quest\'s guidance for parents explains that "Most 11+ papers use OMR (Optical Mark Recognition) answer sheets", so a child "won\'t write out answers" but will "draw a line through a box beside the answer they\'ve chosen". It then lists what not to do: "Do not shade in the whole rectangle", "Do not tick the box" and "Do not put a cross through the box". Mistakes are rubbed out, and "Each question number must match the number on the answer sheet." The maths familiarisation booklet shows rows labelled A to E, the five-option layout children should expect.' },
        { kind: 'table', mt: true, caption: 'OMR habits we practise, from Quest\'s published rules (rules: Quest; drills: ours)', head: ['Quest\'s rule', 'The usual mistake', 'Our drill'], rows: [
          ['A single horizontal line through the box', 'Shading the box fully, as on some school worksheets', 'Ten rows marked against a timer, checked for line shape, before any maths'],
          ['Rub out and re-mark if you change your mind', 'Two lines on one row, so neither counts', 'Practise erasing cleanly with a soft eraser, not crossing out'],
          ['Question number must match the sheet', 'Skipping a hard question in the booklet but not on the sheet', 'Leave a small dot on the row you skip; check numbers every five questions'],
          ['Some questions ask for more than one answer', 'Marking the first correct option and moving on', 'Read the stem twice; count how many answers it asks for before marking']
        ] },
        { kind: 'two', mt: true,
          leftH3: '"Select more than one" questions',
          left: [
            'Quest\'s parents\' guide warns that children "might be asked to select more than one answer - remind your child to always double check what the question asks them to do". It is the single biggest difference between a Quest paper and the older one-answer formats.',
            'In Quest\'s own maths familiarisation booklet, one of the 20 sample questions has four correct options in the answer key. We do not reproduce it; the booklet is free from Quest.'
          ],
          rightH3: 'Use the free booklets first',
          right: [
            'Quest publishes free familiarisation booklets for English, maths, verbal reasoning and non-verbal reasoning, each with a sample OMR sheet. The maths booklet says of its questions: "These questions will not appear in your real assessment."',
            'Children from families who qualify for the government\'s extra school funding for disadvantaged pupils can also ask for a free Atom Home account through Quest\'s parent guidance page, once their primary school confirms eligibility.'
          ] }
      ]
    },
    {
      id: 'fsce', tint: 'tint', eyebrow: 'Quest or FSCE',
      h2: 'Is Quest the same as FSCE?',
      lede: 'No. They are two separate providers that both arrived in English grammar school testing in recent years, and families often mix them up. Check which one your area names.',
      body: [
        { kind: 'table', caption: 'Two newer 11 plus providers, as each describes itself (read 31 October 2026)', head: ['', 'Quest Assessments', 'FSCE (Future Stories Community Enterprise Ltd)'], rows: [
          ['Who they are', '"part of the education company Atom Learning"', 'A company whose tests are "written by Grammar Schools, for Grammar Schools"'],
          ['Who uses them', 'Grammar schools and "UK independent schools"; Bexley, Wirral, Dorset and others', 'Grammar schools; Gloucestershire\'s grammar schools for the 2028 intake'],
          ['Ages', '"For ages 7+ to 16+"', '11+ and in-year tests'],
          ['Stated aims', 'Fair, accessible, bespoke tests following Ofqual guidance', '"We support tutor-free summers" and new test content every year'],
          ['Free material', 'Familiarisation booklets for four subjects, OMR sheet', 'Each school publishes its own guidance; see our area pages']
        ] },
        { kind: 'p', mt: true, html: 'Gloucestershire County Council says that for the 2028 intake "the test provider they use will be Future Stories Community Enterprise (FSCE)", and that the grammar schools plan the test for Saturday 3 July 2027, so a Gloucestershire family should not prepare in a Quest format. Our pages for <a class="ag-inline-link" href="/11-plus-maths-tuition-gloucestershire">Gloucestershire</a>, <a class="ag-inline-link" href="/11-plus-maths-tuition-reading">Reading</a>, <a class="ag-inline-link" href="/11-plus-maths-tuition-essex">Essex</a> and <a class="ag-inline-link" href="/11-plus-maths-tuition-calderdale">Calderdale</a> cover FSCE areas in detail. The underlying maths, school work to the end of Year 5, is much the same for both providers; the layouts are not.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.fsce.co.uk/" rel="noopener" target="_blank">FSCE Ltd</a>; <a class="ag-inline-link" href="https://www.gloucestershire.gov.uk/schooladmissions/grammar-schools/" rel="noopener" target="_blank">Gloucestershire County Council, grammar schools</a>; Quest Assessments parent guidance and admissions pages. All read 31 October 2026.' }
      ]
    },
    {
      id: 'worked', tint: 'deep', eyebrow: 'Worked examples, written by us',
      h2: 'How should a child tackle a Quest-style maths question?',
      lede: 'Three original Year 5 problems, two of them in a select-every-correct-option style. None comes from a Quest booklet or paper. Watch the checking, not just the answer.',
      body: [
        { kind: 'three', cells: [
          { h3: '1. Every option, every time', p: 'Which of these are multiples of both 3 and 4: 12, 18, 24, 30, 36? A number divisible by both 3 and 4 is divisible by 12, so test each against 12. 12 yes, 18 no, 24 yes, 30 no, 36 yes. Three answers: 12, 24 and 36. A child who marks 12 and moves on loses the question, because the stem never said "which one".' },
          { h3: '2. Equivalent, or only close?', p: 'Which of these equal 0.75: three quarters, six eighths, nine twelfths, seven ninths, 75 hundredths? Simplify each. Six eighths and nine twelfths both reduce to three quarters; 75 hundredths is 0.75 by place value. Seven ninths is 0.777..., close but not equal. Four answers. Simplifying first is quicker than turning every fraction into a decimal.' },
          { h3: '3. Same units first', p: 'A ribbon 3.6 m long is cut into pieces of 45 cm. How many pieces? Convert first: 3.6 m is 360 cm. Then 360 divided by 45: 45 times 8 is 360, so 8 pieces. Dividing 3.6 by 45 gives nonsense, and that wrong number often appears among the options. Units before arithmetic is the rule.' }
        ] },
        { kind: 'table', mt: true, caption: 'A practice set written by Modern Age Coders, at Year 5 level', head: ['Question (ours)', 'Answer', 'The reasoning'], rows: [
          ['Which of these are prime: 9, 11, 15, 17, 21, 23?', '11, 17 and 23', 'Check each for a factor other than 1 and itself: 9 is 3 times 3, 15 is 3 times 5, 21 is 3 times 7. Three primes, so three marks on the sheet.'],
          ['Write MCMXC as a number.', '1990', 'M is 1000, CM is 900, XC is 90. Roman numerals to 1000 are on the Year 5 curriculum and easy marks if practised.'],
          ['Round 46,350 to the nearest thousand.', '46,000', 'Look only at the hundreds digit, 3, which is under 5, so round down. The tens and ones do not matter.'],
          ['An L-shape is a 10 cm by 6 cm rectangle with a 4 cm by 3 cm corner removed. What is its area?', '48 square centimetres', 'Whole rectangle 60, minus the missing 12. Subtracting a missing piece is faster than splitting the L into two rectangles.'],
          ['Which of these are square numbers: 16, 24, 36, 50, 64?', '16, 36 and 64', '4 squared, 6 squared and 8 squared. 24 and 50 sit between squares. Another multi-answer row.'],
          ['A bag of flour holds 1.5 kg. How many 125 g scoops does it hold?', '12', '1.5 kg is 1500 g, and 125 goes into 1000 eight times and into 500 four times.']
        ] },
        { kind: 'p', mt: true, html: 'Half of this practice set has more than one correct option. That is deliberate: in our experience the costly error on a multi-answer paper is not a wrong sum but a stopped search. Children learn to count how many answers a stem allows, check every option against the condition, and only then draw their lines on the sheet.' }
      ]
    },
    {
      id: 'prep', tint: '', eyebrow: 'What Quest advises',
      h2: 'Does Quest say a child needs tutoring?',
      lede: 'Quest\'s own guidance puts school learning first and warns against "excessive tutoring". We agree, and keep our offer to the maths and the format.',
      body: [
        { kind: 'two',
          leftH3: 'In Quest\'s words',
          left: [
            'The parents\' guide says: "The best preparation is steady, meaningful learning over time" and "not last-minute cramming or excessive tutoring." It suggests practising maths "in fun, everyday ways", such as cooking and shopping, with "small, regular sessions rather than long hours".',
            'Area pages written with Quest repeat the theme: a strong grounding in school learning, wide reading, and the ability to apply knowledge to new contexts.'
          ],
          rightH3: 'Where teaching still earns its place',
          right: [
            'A child who reaches the summer of Year 5 unsure of fractions, measures or multi-step problems is missing things school expects, test or no test. Fixing that is useful for Year 7 as much as for September.',
            'So we teach Year 5 maths properly, add the OMR and multi-answer habits, and stop. We do not claim knowledge of any Quest paper, and we do not sell "Quest papers".'
          ] },
        { kind: 'ol', mt: true, items: [
          'Find your area\'s or school\'s Quest page and note the papers, timings and which paper holds the maths.',
          'Download Quest\'s free maths familiarisation booklet and the OMR sample, and work through them slowly, once.',
          'Secure the Year 5 curriculum: place value to a million, Roman numerals to 1000, fractions and decimals, area and perimeter, unit conversion.',
          'Practise multi-answer questions and line-marking on short sets of ten, not full papers.',
          'Only in the final weeks, sit timed sections in your area\'s exact layout.'
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Timeline',
    h2: 'From Year 4 to a Quest test',
    lede: 'Quest grammar areas in the table register children during Year 5 and test them early in Year 6. Our four stages work back from that; your area supplies the exact dates.',
    table: { caption: 'Four stages before a Quest 11 plus (our plan)', head: ['When', 'Stage', 'Secure when'], rows: [
      ['Year 4', '1. Number facts', 'Tables, number bonds and place value come back without hesitation'],
      ['Year 5, autumn to spring', '2. Year 5 content', 'Fractions, measures and multi-step problems come out right at the first attempt'],
      ['Year 5, summer', '3. Quest format', 'Free booklets done; line-marking and multi-answer rows done without slips'],
      ['Summer holidays', '4. Your area\'s layout', 'Timed sections in the local paper order finished with time to check']
    ] },
    left: { h3: 'If you are starting late', ps: [
      'Stage 2 still comes before stage 4. The format takes days to learn; the maths takes months.',
      'After the first lesson we will tell you honestly which stage your child has reached.'
    ] },
    right: { h3: 'Once the test is over', ps: [
      'Year 5 maths done well carries straight into Year 7. Some children go on to <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a>.',
      'For children who enjoyed the puzzles, our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">UK competitions calendar</a> has the next challenge.'
    ] }
  },

  catalogue: {
    eyebrow: 'All related courses',
    h2: 'Maths courses around a Quest test',
    lede: 'Arranged by when they help most. Open any card for the syllabus.',
    bands: [
      { num: 'I', h3: 'Building up', sub: 'Years 3 to 5', courses: [
        { code: 'UK / QAP / 01', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths preparation', blurb: 'The Year 5 curriculum, taught for entrance-test wording.' },
        { code: 'UK / QAP / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Quick recall so minutes are left for checking.' },
        { code: 'UK / QAP / 03', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths, Years 1 to 5', blurb: 'Firm foundations for children who need them first.' },
        { code: 'UK / QAP / 04', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'A hands-on route into fast calculation.' }
      ] },
      { num: 'II', h3: 'Alongside', sub: 'Pattern and reasoning', courses: [
        { code: 'UK / QAP / 05', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Number tricks with reasons behind them, for pattern lovers.' },
        { code: 'UK / QAP / 06', slug: 'ks2-sats-maths-course', title: 'KS2 SATs maths', blurb: 'The Year 6 papers that follow the 11 plus.' }
      ] },
      { num: 'III', h3: 'Afterwards', sub: 'Year 6 onwards', courses: [
        { code: 'UK / QAP / 07', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Lower secondary maths', blurb: 'Key Stage 3 ground, started early.' },
        { code: 'UK / QAP / 08', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Small Python programs that test a maths idea.' },
        { code: 'UK / QAP / 09', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Stretch problems for children who finish early.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons in your area\'s Quest layout',
    lede: TIMING + ' The teaching team sits in India, where clocks never change, so lessons run four and a half hours behind India time in the British summer and five and a half in winter; we always confirm the slot in UK time.',
    slots: [
      { time: 'After school', l: 'Most Year 4 and 5 children learn here.' },
      { time: 'Weekend morning', l: 'Space for a full timed section.' },
      { time: 'School holidays', l: 'Short, frequent lessons before September.' }
    ],
    cells: [
      { h3: 'Local layout', p: 'Maths alone, or paired with non-verbal reasoning, as your area sets it.' },
      { h3: 'Line-marking drills', p: 'Clean OMR lines, matched row numbers, safe skips.' },
      { h3: 'Multi-answer care', p: 'Every option checked when a stem allows more than one.' },
      { h3: 'Our own questions', p: 'Nothing copied from Quest or any school.' },
      { h3: 'Two formats', p: 'Join a class of 15 to 20 children working at one level, or book lessons alone with a teacher.' },
      { h3: 'No promises', p: 'Places and pass marks belong to schools and councils.' }
    ]
  },

  projectsH2: 'What our students built afterwards',
  projectsLede: 'Projects by our students, most of them well past the 11 plus now. See more on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'What parents wrote on our Google profile, as written.',

  fees: {
    h2: 'Fees for Quest 11 plus maths lessons',
    lede: 'A monthly fee in the currency we show families in the UK. Your first lesson is free and there is nothing to pay to join.',
    free: ['A proper Year 5 maths lesson', 'Our candid view of the gaps', 'Only a phone number needed'],
    group: ['A batch of 15 to 20 at one stage', 'One teacher throughout', 'Practice in your area\'s paper order', 'Lighter weeks when school is busy'],
    one: ['One teacher, one child', 'Shaped around one Quest design', 'Suits a child with one specific gap']
  },

  faq: {
    eyebrow: 'Quest 11 plus questions',
    h2: 'What parents ask about the Quest 11 plus',
    items: [
      { q: 'What is the Quest 11 plus exam?', a: 'It is an entrance test written by Quest Assessments for a particular grammar school area or independent school. Quest says every school uses different papers and structures, so the Quest test in Bexley is not the same as the one in Dorset.' },
      { q: 'Who owns Quest Assessments?', a: 'Quest says it is part of the education company Atom Learning. It provides entrance tests for grammar and independent schools and separate progress tests for classrooms.' },
      { q: 'What maths is in a Quest 11 plus?', a: 'Quest\'s parents\' guide says the test covers what children have learned in school up to the end of Year 5, with maths that may include problem solving, arithmetic and reasoning. There is no need to learn Year 6 topics.' },
      { q: 'How long is the Quest maths paper?', a: 'It depends on the area. Dorset\'s consortium sets three 40-minute papers with maths first; Bexley and Wirral set two papers of about 50 minutes, with maths sharing paper two with non-verbal reasoning.' },
      { q: 'How do you fill in a Quest answer sheet?', a: 'Draw one horizontal pencil line through the box beside your answer. Quest says not to shade the whole rectangle, tick it or cross it, and to rub out cleanly if you change your mind.' },
      { q: 'Can a Quest question have more than one right answer?', a: 'Yes. Quest\'s guidance says children might be asked to select more than one answer, so they should check what each question asks before marking the sheet.' },
      { q: 'Where can I find Quest practice papers?', a: 'Quest publishes free familiarisation booklets for maths, English, verbal and non-verbal reasoning on its parent guidance page, with a sample OMR sheet. It says those questions will not appear in the real test.' },
      { q: 'Is Quest the same as FSCE?', a: 'No. FSCE, Future Stories Community Enterprise, is a separate provider whose tests are written by grammar schools for grammar schools. Gloucestershire\'s grammar schools will use FSCE for the 2028 intake.' },
      { q: 'When can my child have lessons?', a: TIMING + ' Every time is confirmed in UK time.' },
      { q: 'Do you have real Quest papers?', a: 'No, and nobody outside the schools should. We teach Year 5 maths and the Quest answer format using questions we write ourselves, and we never promise a score or a place.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'Quest areas and other providers',
    lede: 'Local pages go deeper into each test.',
    items: [
      { href: '/11-plus-maths-tuition-bexley', label: '11 plus maths in Bexley', p: 'Numerical reasoning in the Bexley Selection Test.' },
      { href: '/11-plus-maths-tuition-wirral', label: '11 plus maths in Wirral', p: 'Maths in paper two with non-verbal reasoning.' },
      { href: '/11-plus-maths-tuition-bournemouth-christchurch-and-poole', label: '11 plus maths in Bournemouth, Christchurch and Poole', p: 'The Dorset consortium and its change of provider.' },
      { href: '/11-plus-maths-tuition-gloucestershire', label: '11 plus maths in Gloucestershire', p: 'An FSCE county from the 2028 intake.' },
      { href: '/11-plus-maths-tuition', label: '11 plus maths tuition', p: 'The subject, whoever writes the test.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'All of our UK pages.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson',
    lede: 'Let us know the year group and the area or school your child is applying to. We teach one real lesson in that Quest layout and then tell you what we found.',
    readFirst: 'Rather read first? See the <a class="ag-inline-link" href="/courses/11-plus-maths-preparation-course-uk">11 plus maths preparation course</a> for the topic list, or <a class="ag-inline-link" href="/how-we-teach">how we teach</a> for the method behind it.',
    note: 'Messaging us on WhatsApp is quickest and free from any UK mobile. Our team replies from India, on a number beginning +91.',
    formNote: 'We never ask for payment details here. Expect one reply with a time.'
  },

  footer: {
    cols: [
      { h4: 'Quest areas', links: [
        { href: '/11-plus-maths-tuition-bexley', label: 'Bexley' },
        { href: '/11-plus-maths-tuition-wirral', label: 'Wirral' },
        { href: '/11-plus-maths-tuition-enfield', label: 'Enfield' },
        { href: '/11-plus-maths-tuition-slough', label: 'Slough' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/courses/11-plus-maths-preparation-course-uk', label: '11 plus maths course' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'One provider, a different Quest paper in every area'
  },

  personalityCss: `
.ag-root.ag-qap .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-qap .ag-capsule { border-left-width: 4px; border-radius: 0; }
.ag-root.ag-qap .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-qap .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-qap .ag-table th:first-child { width: 26%; }
`,

  dossier: {
    curriculumAuthority: 'Quest Assessments, part of Atom Learning, as published by Quest and the areas that use it, read 31 October 2026. Parent guidance: every school uses different papers and structures; Quest Admissions used by UK independent schools; free familiarisation booklets; free Atom Home for eligible disadvantaged pupils. Admissions page: bespoke and branded; paper and online; main entry and in-year; ages 7+ to 16+; 130+ schools. Parents guide PDF: content up to the end of Year 5; maths may include problem-solving, arithmetic, reasoning; OMR line rules; may be asked to select more than one answer. Maths familiarisation booklet: questions will not appear in the real assessment; 20 sample questions. Bexley: Quest is the provider; two papers about 50 minutes; Quest cannot provide information directly to parents; results 2 October 2026. Wirral: two 50-minute papers, maths with non-verbal reasoning. Dorset: three 40-minute papers, maths first, September 2027. Enfield school: two non-adaptive written assessments, maths paper one. FSCE: written by grammar schools for grammar schools; Gloucestershire 2028 intake.',
    localProject: 'One provider, a bespoke test in every area. The page explains who Quest Assessments is and how it builds a test to each school\'s order, compares four published Quest designs in one table (Bexley, Wirral, Dorset, one Enfield school) with the maths paper\'s position and timing, sets out Quest\'s OMR rules with matching drills, separates Quest from FSCE in a second table, and teaches three original worked examples and a six-question practice set, half of it select-every-correct-option. Lesson family: multi-answer questions, where every option must be checked.',
    requiredMentions: ['part of the education company Atom Learning', 'Every school will use different papers and follow different structures', 'Do not shade in the whole rectangle', 'Quest Assessments cannot provide information directly to parents', 'For ages 7+ to 16+', 'written by Grammar Schools, for Grammar Schools', 'These questions will not appear in your real assessment', 'three 40-minute papers'],
    sources: [
      { claim: 'Quest parent guidance: different papers per school, independent and grammar use, Atom Learning, free booklets, free Atom Home for eligible pupils.', url: 'https://www.questassessments.com/parent-guidance' },
      { claim: 'Quest Admissions: bespoke and branded, paper and online, main entry and in-year, ages 7+ to 16+, 130+ schools, five steps.', url: 'https://www.questassessments.com/admissions' },
      { claim: 'London Borough of Bexley: Quest is the provider, two papers of about 50 minutes, numerical reasoning to Year 5, Quest cannot answer parents, results 2 October 2026.', url: 'https://www.bexley.gov.uk/services/schools-and-education/selection-tests/about-test' },
      { claim: 'Quest with the Wirral Consortium and with the Dorset Consortium: papers, timings, maths position, 2027 dates.', url: 'https://www.questassessments.com/parent-guidance-consortium/dorset-consortium-11-assessment' },
      { claim: 'FSCE Ltd: tests written by grammar schools for grammar schools; tutor-free summers.', url: 'https://www.fsce.co.uk/' },
      { claim: 'Gloucestershire County Council: FSCE for the 2028 intake; test planned for 3 July 2027.', url: 'https://www.gloucestershire.gov.uk/schooladmissions/grammar-schools/' }
    ],
    rejectedClaims: [
      'Any question from Quest\'s familiarisation booklets: not reproduced; the page links to Quest instead and uses only the count of sample questions and the shape of the answer key.',
      'Names of individual schools in the Wirral, Dorset and Bexley consortia: left out on purpose; the Enfield school is described, not named, in visible copy.',
      'Quest weightings and qualifying scores for each area: not published on the Quest pages read, so not stated.',
      'Tutor-blog claims about which other areas will move to Quest: not primary, not used.',
      'Atom Learning\'s product claims about progress and prices: not repeated.',
      'Any pass mark, score target or place promise.'
    ]
  }
};
