'use strict';
// 13 plus scholarship maths preparation (ag- maths door, UK cluster Phase 2, row UK053).
// Read raw with curl on 31 October 2026 (copies under
// keyword-research-2026-09/uk-us-gap/src/13-plus-scholarship-maths-preparation/):
//  - ISEB, CASE at 13+ information for schools: "We offer a series of Common Academic Scholarship (CASE) assessments in
//    English, mathematics, science, history, geography, theology, philosophy and religion, French and Latin."; "The
//    questions are based on our Common Entrance (CE) at 13+ specifications."; "Pupils sitting CASE assessments are
//    entered by the senior schools they have applied to, who choose which papers pupils will sit and also mark the
//    papers."; "Pupils will usually sit the exam at the senior school."; "Some senior schools select their scholars from
//    candidates who sit CE in the autumn or spring term."; "There are two CASE sessions each year, in February and
//    May."; senior schools asked to tell prep schools results "as soon as possible, so that decisions can be made
//    about whether a candidate still needs to be entered for the CE examinations". (Fees on that page: not used.)
//  - ISEB, CE at 13+ information for schools: CE at 13+ "the transition assessment of choice for Britain's top
//    independent schools since 1903" (restated as "used since 1903", no superlative); "three compulsory papers:
//    English, mathematics and science"; "three CE at 13+ examination sessions each year, in November, January and
//    May/June"; pupils "usually entered for the examinations by their prep school".
//  - ISEB CE and CASE Mathematics specification (Syllabus-CE-CASE-Mathematics, V7.1), "For teaching from September
//    2021 onwards", "For examinations from November 2022 onwards": 13+ Core papers non-calculator and calculator,
//    "each of 60 minutes' duration", mental arithmetic test 40 marks, 10 minutes; Additional Paper 100 marks, 60
//    minutes, "Calculators may be used for this paper"; "Common Academic Scholarship Marks One paper 100 90 minutes";
//    "The Common Academic Scholarship Examination (90 minutes) will be based on the 13+ CE specification for the
//    Additional Paper."; Further topics for Additional level: Pythagoras' theorem, rearranging formulae, simultaneous
//    equations ("2 equations and 2 variables, may be in context"), equations with more than one denominator, quadratic
//    equations (simple), algebraic proof ("Candidates should use (a box) or Q.E.D. to conclude a proof"), plotting
//    curves, volume and surface area of prisms and cylinders, reverse percentages, nth term, multi-part journeys,
//    enlargement by fractional scale factor, HCF and LCM, significant figures, standard form "With positive indices";
//    What's IN: "Questions with less scaffolding", "An increased number of thought-provoking puzzles", "Expectation of
//    greater quality of thought and working, rather than quantity of questions"; calculators: "A simple scientific
//    calculator is recommended. Calculators with more advanced features, such as graph plotting and solving equations,
//    are not permitted."; Additional level out: "Solving inequalities".
//  - Cambridge Insight, entrance assessments: Cambridge Select Insight versions for "an 11+ or 13+ assessment".
// Our own arithmetic, labelled as ours: the CASE paper gives 90 minutes for 100 marks, about 54 seconds a mark, against
// 36 seconds a mark on a 60-minute, 100-mark CE paper.
// Worked examples and the practice set are written by us at Additional level; no ISEB paper is reproduced.
// Spine: a scholarship paper is the Additional specification asked with less help; 90 minutes for 100 marks buys
// time to think, and the spec asks for "quality of thought and working, rather than quantity".
// Lesson family: proof and justification, writing a full chain of reasoning ending in a box or Q.E.D.

const TIMING = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: '13+ SCHOLARSHIP', label: '13 plus scholarship maths', blurb: 'ISEB\'s CASE maths paper: 90 minutes, 100 marks, built on the Additional specification, with less scaffolding and more puzzles.' },
  slug: '13-plus-scholarship-maths-preparation',
  code: 'psp',
  accent: '#186683',
  accentRationale: '13 plus scholarship maths: a deep petrol blue (#186683), 6.06:1 on #FBF8F2 and 5.22:1 on the deepest paper tint, cooler than the green 11 plus provider pages so the older entry point reads apart',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: '13 plus scholarship maths preparation',
  title: '13 Plus Scholarship Maths Preparation | CASE and Additional',
  description: '13 plus scholarship maths preparation: what ISEB\'s CASE maths paper is, how it builds on the Additional specification, the topics, and original practice.',
  ogDescription: 'The ISEB scholarship maths paper is 90 minutes for 100 marks, based on the Additional specification, with less scaffolding and more thought-provoking puzzles.',
  twitterDescription: '13+ scholarship maths explained from ISEB\'s own specification: CASE sessions, the Additional topics, proof with Q.E.D., and how to prepare for depth.',
  pageName: '13 Plus Scholarship Maths Preparation',
  webPageDescription: 'Live online maths teaching for Year 7 and Year 8 pupils aiming at 13 plus academic scholarships, built from ISEB\'s CE and CASE mathematics specification.',
  courseDescription: 'Live online maths lessons for pupils in Years 7 and 8 preparing for 13 plus scholarship papers, teaching the ISEB Additional topics, proof and unscaffolded problem solving.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: '13 plus scholarship maths',
  navLinks: [
    { href: '#case', label: 'What CASE is' },
    { href: '#papers', label: 'The papers' },
    { href: '#topics', label: 'Topics' },
    { href: '#worked', label: 'Worked examples' },
    { href: '#plan', label: 'A plan' }
  ],
  eyebrow: 'England &middot; 13 plus scholarship maths &middot; Years 7 and 8',
  h1: '13 plus scholarship maths preparation',
  lede: 'Many independent senior schools award academic scholarships at 13 plus, and the maths paper behind many of them is ISEB\'s Common Academic Scholarship (CASE) paper: 90 minutes, 100 marks, built on the Common Entrance Additional specification. Other schools set their own scholarship papers or choose scholars from Common Entrance. Modern Age Coders teaches the maths these papers expect, live online, in a group or one to one, through our competition maths course and lower secondary maths.',
  secondaryCta: { href: '#papers', label: 'Compare the papers' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for a 13 plus scholarship.',
  heroNote: 'From ISEB\'s CE and CASE mathematics specification and schools pages, read 31 October 2026 &middot; Not connected with ISEB or any school',
  spec: [
    ['Paper', 'ISEB Common Academic Scholarship (CASE), maths'],
    ['Length', 'One paper, 90 minutes'],
    ['Marks', '100'],
    ['Content', 'CE 13+ Additional specification'],
    ['Sessions', 'February and May each year'],
    ['Entered by', 'The senior school, which also marks it'],
    ['We teach', 'Additional topics, proof, unscaffolded problems'],
    ['We never', 'Reproduce ISEB papers or promise an award']
  ],
  capsuleQ: 'What is the 13 plus scholarship maths paper?',
  capsule: 'For many independent senior schools it is the maths paper of ISEB\'s Common Academic Scholarship, CASE. ISEB\'s mathematics specification describes it as one paper of 90 minutes and 100 marks, "based on the 13+ CE specification for the Additional Paper", the harder optional level of Common Entrance. ISEB says senior schools enter pupils for CASE, choose the papers and mark them, usually at the senior school, in sessions in February and May. Some schools instead pick scholars from Common Entrance results or set papers of their own. The Additional topics include Pythagoras\' theorem, simultaneous and simple quadratic equations, algebraic proof, reverse percentages and standard form. Modern Age Coders teaches this maths live online with original practice.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Three courses for 13 plus scholarship maths',
    lede: 'Scholarship maths sits on top of a secure Key Stage 3. Pick by what your child needs first. Each card opens the syllabus.',
    items: [
      { course: 'olympiad-competition-mathematics-mastery', code: 'SCH / 01', title: 'Competition maths', note: 'The closest match to scholarship style: unfamiliar problems, proof and puzzles that reward thinking over recall.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'SCH / 02', title: 'Lower secondary maths', note: 'The Core and Additional ground of Years 7 and 8: number, algebra, geometry and data, made secure.' },
      { course: 'algebra-foundations-masterclass', code: 'SCH / 03', title: 'Algebra foundations', note: 'Rearranging, simultaneous equations and expanding brackets, the algebra the Additional level leans on.' }
    ]
  },

  sections: [
    {
      id: 'case', tint: 'tint', eyebrow: 'What CASE is',
      h2: 'What is the ISEB Common Academic Scholarship exam?',
      lede: 'A set of scholarship papers from ISEB in nine subjects, maths among them, which senior schools choose, enter pupils for and mark themselves. The questions rest on the Common Entrance 13+ specifications.',
      body: [
        { kind: 'p', html: 'ISEB\'s page for schools puts it simply: "We offer a series of Common Academic Scholarship (CASE) assessments in English, mathematics, science, history, geography, theology, philosophy and religion, French and Latin." It goes on: "Pupils sitting CASE assessments are entered by the senior schools they have applied to, who choose which papers pupils will sit and also mark the papers. Pupils will usually sit the exam at the senior school." That division of roles matters. ISEB writes the paper, but there is no national scholarship pass mark: each senior school reads its own candidates\' scripts and decides on its own awards.' },
        { kind: 'two', mt: true,
          leftH3: 'Not every school uses CASE',
          left: [
            'ISEB itself notes that "Some senior schools select their scholars from candidates who sit CE in the autumn or spring term." In those schools the Common Entrance papers, often including the optional Additional maths paper, do double duty.',
            'Other schools write their own scholarship papers, or buy a computer test such as Cambridge Select Insight, which Cambridge offers in versions for 11+ and 13+ entry. The school\'s own admissions page is the only reliable guide.'
          ],
          rightH3: 'How CASE fits the year',
          right: [
            'ISEB runs "two CASE sessions each year, in February and May". Common Entrance at 13+ has three sessions, in November, January and May or June.',
            'ISEB asks senior schools to tell prep schools CASE results "as soon as possible, so that decisions can be made about whether a candidate still needs to be entered for the CE examinations". For some pupils a scholarship result settles the place before Common Entrance is sat.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.iseb.co.uk/assessments/common-entrance/case-information-for-schools/" rel="noopener" target="_blank">ISEB, CASE at 13+ information for schools</a>; <a class="ag-inline-link" href="https://www.iseb.co.uk/assessments/common-entrance/at-13-for-schools/" rel="noopener" target="_blank">ISEB, CE at 13+ information for schools</a>; <a class="ag-inline-link" href="https://www.cem.org/entrance-assessments" rel="noopener" target="_blank">Cambridge Insight, entrance assessments</a>; all read 31 October 2026. Modern Age Coders is not connected with ISEB, Cambridge or any school.' }
      ]
    },
    {
      id: 'papers', tint: 'deep', eyebrow: 'The papers',
      h2: 'How does the scholarship paper compare with Common Entrance maths?',
      lede: 'It is longer per mark, harder in content and lighter on help. The table sets ISEB\'s 13+ maths papers side by side, as its specification lists them.',
      body: [
        { kind: 'table', caption: 'ISEB 13+ mathematics papers (CE and CASE Mathematics specification, for examinations from November 2022 onwards)', head: ['Paper', 'Marks', 'Time', 'Who sits it'], rows: [
          ['Foundation non-calculator and calculator', '100 each', '60 minutes each', 'For support in individual circumstances, by agreement with senior schools'],
          ['Core non-calculator and calculator', '100 each', '60 minutes each', 'Suggested for all candidates'],
          ['Mental arithmetic test', '40', '10 minutes', 'Foundation and Core candidates, the same test'],
          ['Additional Paper', '100', '60 minutes, calculators allowed', 'Optional, "to offer challenge to the more able"'],
          ['Common Academic Scholarship', '100', '90 minutes', 'Scholarship candidates entered by a senior school']
        ] },
        { kind: 'p', mt: true, html: 'Two lines of the specification define the scholarship paper. First, its content: "The Common Academic Scholarship Examination (90 minutes) will be based on the 13+ CE specification for the Additional Paper." Second, its time. By our own arithmetic, 90 minutes for 100 marks gives about 54 seconds a mark, against 36 seconds a mark on a 60-minute, 100-mark Common Entrance paper. That extra half again of time per mark is not a gift. It is room for longer chains of reasoning, and the specification says so in its list of changes: "Expectation of greater quality of thought and working, rather than quantity of questions".' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Less scaffolding', p: 'The specification promises "Questions with less scaffolding": candidates "will less often be led through problems, step by step". A scholarship question may ask for the final result and leave the route entirely to the pupil.' },
          { h3: 'More puzzles', p: 'It also lists "An increased number of thought-provoking puzzles", with "More unfamiliar problems" placed "towards the end of papers to encourage candidates to explore and experiment".' },
          { h3: 'Units and working', p: 'Under the same heading, ISEB adds "Writing units in answers" and "Increased testing of core skills (with fewer words)". Marks follow the working, so a bare answer is a risk.' }
        ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.iseb.co.uk/wp-content/uploads/Syllabus-CE-CASE-Mathematics-Helvetica-_V7.1-2.pdf" rel="noopener" target="_blank">ISEB CE and CASE Mathematics specification</a> (for teaching from September 2021, examinations from November 2022), read 31 October 2026. ISEB sells past papers through its own shop; we do not reproduce any.' }
      ]
    },
    {
      id: 'topics', tint: '', eyebrow: 'Topics',
      h2: 'What maths topics are on the 13 plus scholarship paper?',
      lede: 'Everything at Core level plus a list of further topics ISEB reserves for the Additional level. A scholarship candidate should know both lists well enough to use them without prompting.',
      body: [
        { kind: 'table', caption: 'Further topics for Additional level, which the scholarship paper is based on (ISEB specification, with ISEB\'s own guidance)', head: ['Area', 'Additional topic', 'ISEB guidance'], rows: [
          ['Geometry', 'Pythagoras\' theorem', 'Listed as a further topic'],
          ['Algebra', 'Simultaneous equations', '"2 equations and 2 variables, may be in context", "solved algebraically or graphically"'],
          ['Algebra', 'Quadratic equations', '"Simple examples or solved graphically"'],
          ['Algebra', 'Algebraic proof', '"Candidates should use (a box) or Q.E.D. to conclude a proof"'],
          ['Algebra', 'Rearranging formulae; equations with more than one denominator; factorising by a variable', 'Listed as further topics'],
          ['Graphs', 'Plotting curves', '"May be parabolic or reciprocal"'],
          ['Measure', 'Volume and surface area of prisms and cylinders', 'Listed as a further topic'],
          ['Number', 'Reverse percentages', '"Finding the original value"'],
          ['Number', 'Standard form; HCF and LCM; significant figures', 'Standard form "With positive indices"'],
          ['Sequences and rates', 'nth term; multi-part journeys', '"Find average speed over multi-part journeys"'],
          ['Transformations', 'Enlargement by fractional scale factor', 'Listed as a further topic']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What is out',
          left: [
            'The specification\'s "What\'s OUT" list removes some things at Core and Foundation, among them bearings with map scale drawing, accurate constructions and drawing pie charts.',
            'At Additional level it removes all of those except significant figures, and adds one more removal: "Solving inequalities". A scholarship candidate should not spend hours on inequalities for this paper.'
          ],
          rightH3: 'Calculators',
          right: [
            'The specification says: "A simple scientific calculator is recommended. Calculators with more advanced features, such as graph plotting and solving equations, are not permitted." The Additional Paper allows calculators.',
            'For the scholarship paper itself, check the instructions each senior school gives with the entry; we do not assume a rule ISEB\'s specification does not state.'
          ] }
      ]
    },
    {
      id: 'worked', tint: 'deep', eyebrow: 'Worked examples, written by us',
      h2: 'What does a strong scholarship answer look like?',
      lede: 'Three original problems at Additional level, each answered the way a marker hopes to read it: every step written, units given, proofs closed with Q.E.D. None comes from an ISEB paper.',
      body: [
        { kind: 'three', cells: [
          { h3: '1. A short algebraic proof', p: 'Prove that the sum of any three consecutive whole numbers is a multiple of 3. Let the numbers be n, n + 1 and n + 2. Their sum is 3n + 3, which equals 3(n + 1). Since n + 1 is a whole number, the sum is 3 times a whole number, so it is a multiple of 3. Q.E.D. The marks are in the second-to-last sentence: saying why 3(n + 1) is a multiple of 3, not just writing it.' },
          { h3: '2. Simultaneous equations in context', p: 'Four apples and three pears weigh 1 kg; two apples and five pears weigh 920 g. Find each weight. Let a and p be grams: 4a + 3p = 1000 and 2a + 5p = 920. Double the second: 4a + 10p = 1840. Subtract the first: 7p = 840, so a pear is 120 g. Then 2a = 920 minus 600, so an apple is 160 g. Check in the first equation: 640 plus 360 is 1000. Working in grams keeps every number whole.' },
          { h3: '3. Average speed is not the average of speeds', p: 'A cyclist rides 12 km at 24 km/h, then 12 km at 12 km/h. What is the average speed? Times first: 0.5 hours and 1 hour, so 24 km takes 1.5 hours. Average speed is 24 divided by 1.5, which is 16 km/h, not 18. Multi-part journeys are on the Additional list precisely because the tempting answer is wrong.' }
        ] },
        { kind: 'table', mt: true, caption: 'A practice set written by Modern Age Coders at Additional level, with the reasoning we look for', head: ['Question (ours)', 'Answer', 'The reasoning'], rows: [
          ['After a 15 per cent rise, a club has 391 members. How many did it have before?', '340', '391 is 115 per cent of the original, so divide by 1.15. The trap is taking 15 per cent of 391 off.'],
          ['A right-angled triangle has legs 9 cm and 12 cm. How long is the hypotenuse?', '15 cm', '81 plus 144 is 225, and the square root is 15. Recognising 9, 12, 15 as 3, 4, 5 scaled by 3 saves the calculation.'],
          ['Find the nth term of 7, 11, 15, 19, ...', '4n + 3', 'The difference is 4, so start with 4n; 4 times 1 is 4, and the first term is 7, so add 3. Test it on the fourth term: 19.'],
          ['Express 34,000,000 in standard form.', '3.4 times 10 to the power 7', 'Move the decimal point seven places. The specification limits standard form to positive indices, so this is the expected kind.'],
          ['Solve x squared equals 49.', 'x equals 7 or minus 7', 'Both signs. Leaving out minus 7 is the most common lost mark on simple quadratics.'],
          ['A cylinder has radius 3 cm and height 10 cm. Give its volume in terms of pi.', '90 pi cubic centimetres', 'Area of the circle, 9 pi, times the height. Leaving pi in keeps the answer exact.']
        ] },
        { kind: 'p', mt: true, html: 'We set these as full written solutions, never as answer-only drills. A scholarship marker is reading for the chain of reasoning ISEB\'s specification asks for, so in lessons a correct answer with a missing step is treated as unfinished, and a proof without its closing sentence is sent back.' }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'A plan',
      h2: 'How should a pupil prepare for 13 plus scholarship maths?',
      lede: 'Secure Core first, then Additional, then practise writing full solutions to unfamiliar problems. Our plan below runs across Years 7 and 8; adjust it to the senior school\'s dates.',
      body: [
        { kind: 'ol', items: [
          'Find out how the senior school chooses scholars: CASE, Common Entrance with the Additional paper, its own paper, or a computer test. Note the session, February or May for CASE.',
          'Check Core level is secure with ISEB\'s specification as a checklist, because scholarship questions assume it without warning.',
          'Teach each Additional topic from the ISEB list, starting with algebra (rearranging, simultaneous equations, brackets), since it feeds proof and graphs.',
          'Add proof early. Short "show that" and "prove that" questions, closed with a box or Q.E.D. as the specification asks, build the habit of justifying.',
          'Work unscaffolded problems weekly: a question with the final demand only, no parts (a), (b), (c) to guide the route.',
          'In the final term, sit full 90-minute papers under time, then review the working line by line rather than just the score.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where competition maths helps',
          left: [
            'Problems from junior maths challenges ask for the same willingness to explore and experiment that ISEB describes. They train pupils to try a small case, spot a pattern and then prove it.',
            'Our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">UK competitions calendar</a> lists the challenges open to Years 7 and 8.'
          ],
          rightH3: 'What we will not do',
          right: [
            'Reproduce ISEB papers or a school\'s scholarship paper, or present our questions as theirs. ISEB sells its past papers; families can buy them from ISEB.',
            'Promise an award. Scholarships are decided by each senior school on its own marking, and often on interview and other papers too.'
          ] },
        { kind: 'p', mt: true, html: 'For pupils sitting Common Entrance rather than a scholarship paper, our <a class="ag-inline-link" href="/common-entrance-maths-tuition">Common Entrance maths page</a> covers the Core papers and mental arithmetic test. For pupils who will meet GCSE maths soon after, our <a class="ag-inline-link" href="/gcse-maths-tuition-online">GCSE maths page</a> shows where the Additional topics lead.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Timeline',
    h2: 'From Year 7 to a scholarship session',
    lede: 'CASE runs in February and May, often in Year 8. Our stages work back from the session the senior school names.',
    table: { caption: 'Four stages before a 13 plus scholarship paper (our plan)', head: ['When', 'Stage', 'Secure when'], rows: [
      ['Year 7', '1. Core level', 'Fractions, percentages, ratio, linear equations and angle facts used without prompting'],
      ['Year 7 to early Year 8', '2. Additional topics', 'Every item on ISEB\'s Additional list taught and practised'],
      ['Year 8, autumn', '3. Proof and unscaffolded work', 'Full written solutions to problems with no guiding parts'],
      ['Weeks before the session', '4. Ninety minutes', 'Timed papers finished with working a marker can follow']
    ] },
    left: { h3: 'Short on time', ps: [
      'With one term to go, stage 3 matters more than covering the last Additional topic. Method shown well scores on unfamiliar questions.',
      'After a first lesson we say plainly what is realistic.'
    ] },
    right: { h3: 'After the scholarship', ps: [
      'The same algebra and proof carry straight into GCSE and beyond. Some pupils try <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a> next.',
      'Pupils who enjoyed the puzzles often keep going with competition maths.'
    ] }
  },

  catalogue: {
    eyebrow: 'All related courses',
    h2: 'Courses for 13 plus scholarship maths',
    lede: 'From secure foundations to stretch. Each card opens a syllabus.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'Years 6 and 7', courses: [
        { code: 'UK / PSP / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Lower secondary maths', blurb: 'Key Stage 3 number, algebra, geometry and data.' },
        { code: 'UK / PSP / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Expressions, equations and graphs from first principles.' }
      ] },
      { num: 'II', h3: 'Stretch', sub: 'Years 7 and 8', courses: [
        { code: 'UK / PSP / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Proof, puzzles and problems without a set route.' },
        { code: 'UK / PSP / 05', slug: 'middle-school-math-competitions-course', title: 'Middle school competitions', blurb: 'Contest problems at the right age.' }
      ] },
      { num: 'III', h3: 'Next steps', sub: 'Year 9 onwards', courses: [
        { code: 'UK / PSP / 06', slug: 'gcse-mathematics-mastery', title: 'GCSE maths', blurb: 'Foundation and Higher for AQA, Edexcel and OCR.' },
        { code: 'UK / PSP / 07', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'Core, Extended and Additional Mathematics.' },
        { code: 'UK / PSP / 08', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Python for exploring patterns and testing proofs.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons built around written reasoning',
    lede: TIMING + ' Our teachers are based in India, which has no daylight saving, so they sit four and a half hours ahead of the UK in summer and five and a half in winter. We give you every time in UK time.',
    slots: [
      { time: 'After school', l: 'The usual slot for Years 7 and 8.' },
      { time: 'Weekend morning', l: 'Long enough for a full 90-minute paper.' },
      { time: 'Holidays', l: 'Extra sessions before February or May.' }
    ],
    cells: [
      { h3: 'Whole solutions', p: 'Every answer written as a chain a marker can follow.' },
      { h3: 'Proof habits', p: 'Show-that questions closed properly, with Q.E.D.' },
      { h3: 'Unscaffolded problems', p: 'Final demand only, the route left to the pupil.' },
      { h3: 'Our own questions', p: 'No ISEB or school paper copied.' },
      { h3: 'Group or one to one', p: 'A class of 15 to 20 at one level, or a private teacher.' },
      { h3: 'No award promises', p: 'Senior schools decide scholarships, not tutors.' }
    ]
  },

  projectsH2: 'Projects from students at our school',
  projectsLede: 'Work our older students built, several of them strong mathematicians too. More on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parent reviews from our Google profile, unchanged.',

  fees: {
    h2: 'Fees for 13 plus scholarship maths lessons',
    lede: 'A monthly fee, shown in the currency used for UK families. The first lesson is free and there is no fee to join.',
    free: ['A full Additional-level lesson', 'A clear note of what to work on', 'Only a phone number to book'],
    group: ['A class of 15 to 20 at a similar level', 'The same teacher each month', 'Proof and problem-solving practice', 'Quieter weeks in exam season'],
    one: ['A teacher for one pupil', 'Built around one school\'s session', 'Good for closing a specific gap']
  },

  faq: {
    eyebrow: 'Scholarship questions',
    h2: 'What parents ask about 13 plus scholarship maths',
    items: [
      { q: 'What is the CASE exam?', a: 'CASE is ISEB\'s Common Academic Scholarship, a set of scholarship papers in nine subjects including mathematics. Senior schools enter pupils, choose which papers they sit and mark them.' },
      { q: 'How long is the 13 plus scholarship maths paper?', a: 'ISEB\'s specification lists the Common Academic Scholarship maths paper as one paper of 90 minutes worth 100 marks. Schools that set their own scholarship papers may use different lengths.' },
      { q: 'What is on the scholarship maths paper?', a: 'ISEB says it is based on the 13+ Common Entrance specification for the Additional Paper. That adds topics such as Pythagoras\' theorem, simultaneous equations, simple quadratics, algebraic proof, reverse percentages and standard form to Core level.' },
      { q: 'When are CASE exams sat?', a: 'ISEB runs two CASE sessions each year, in February and May. Pupils usually sit them at the senior school that entered them.' },
      { q: 'Is scholarship maths harder than Common Entrance?', a: 'Yes. It uses the harder Additional content, and ISEB\'s specification promises less scaffolding and more thought-provoking puzzles. By our arithmetic it also gives about half as much time again per mark as a Core paper.' },
      { q: 'Do all schools use CASE for scholarships?', a: 'No. ISEB notes that some senior schools select scholars from pupils who sit Common Entrance, and others set their own papers or use a computer test. Check each school\'s admissions page.' },
      { q: 'Can I use a calculator?', a: 'ISEB recommends a simple scientific calculator and bans graph-plotting and equation-solving models. The Additional Paper allows calculators; for the scholarship paper, follow the senior school\'s instructions.' },
      { q: 'Where can I find past scholarship papers?', a: 'ISEB sells past Common Entrance and CASE papers through its own shop. We do not copy them; our lessons use problems we write at the same level.' },
      { q: 'When are lessons held?', a: TIMING + ' We confirm each time in UK time.' },
      { q: 'Can you guarantee a scholarship?', a: 'No one honestly can. Senior schools mark their own candidates and decide awards, often with interviews and other subjects too. We teach the maths and the written reasoning.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More on independent school entry',
    lede: 'Other papers and next steps.',
    items: [
      { href: '/common-entrance-maths-tuition', label: 'Common Entrance maths', p: 'Core papers and the mental arithmetic test at 11+ and 13+.' },
      { href: '/11-plus-maths-tuition', label: '11 plus maths tuition', p: 'Entry at 11, before scholarship age.' },
      { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition', p: 'Where the Additional topics lead.' },
      { href: '/igcse-maths-tuition-online', label: 'IGCSE maths tuition', p: 'The course many independent schools teach next.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar', p: 'Challenges that build scholarship-style thinking.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Every UK page we publish.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson',
    lede: 'Tell us your child\'s year and the senior schools in view. We will check how each one picks scholars, teach a real Additional-level lesson and tell you what we noticed.',
    readFirst: 'Prefer reading first? The <a class="ag-inline-link" href="/courses/olympiad-competition-mathematics-mastery">competition maths course</a> lists its topics, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains the approach.',
    note: 'Send a WhatsApp for the quickest reply; it is free from UK phones. Our team writes back from India, on a +91 number.',
    formNote: 'We do not take payment details here. One reply, with a proposed time.'
  },

  footer: {
    cols: [
      { h4: 'Independent entry', links: [
        { href: '/common-entrance-maths-tuition', label: 'Common Entrance' },
        { href: '/11-plus-maths-tuition', label: '11 plus maths' },
        { href: '/gcse-maths-tuition-online', label: 'GCSE maths' },
        { href: '/igcse-maths-tuition-online', label: 'IGCSE maths' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/courses/olympiad-competition-mathematics-mastery', label: 'Competition maths course' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Ninety minutes, a hundred marks, and every step shown'
  },

  personalityCss: `
.ag-root.ag-psp .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-psp .ag-capsule { border-left-width: 5px; border-radius: 1px; }
.ag-root.ag-psp .ag-section-head h2 { max-width: 25ch; }
.ag-root.ag-psp .ag-table caption { text-align: left; font-weight: 640; }
.ag-root.ag-psp .ag-table th:first-child { width: 24%; }
`,

  dossier: {
    curriculumAuthority: 'ISEB, read 31 October 2026. CASE at 13+ for schools: nine subjects including mathematics; questions based on CE at 13+ specifications; senior schools enter pupils, choose papers and mark them; usually sat at the senior school; some senior schools choose scholars from CE; two sessions a year, February and May; results to prep schools quickly so CE entry can be decided. CE at 13+ for schools: since 1903; English, mathematics and science compulsory; sessions in November, January and May/June. CE and CASE Mathematics specification (teaching from September 2021, examinations from November 2022): Foundation, Core, mental arithmetic and Additional papers with marks and times; CASE one paper, 100 marks, 90 minutes, based on the Additional Paper specification; Additional further topics (Pythagoras, simultaneous equations, quadratics, algebraic proof with box or Q.E.D., plotting curves, prisms and cylinders, reverse percentages, nth term, multi-part journeys, fractional enlargement, HCF and LCM, significant figures, standard form); What\'s IN and OUT lists; calculator rules. Cambridge Insight: Cambridge Select Insight for 11+ or 13+.',
    localProject: 'A 13 plus scholarship maths page built from ISEB\'s own specification. It explains what CASE is and who enters, marks and sits it, compares every ISEB 13+ maths paper in one table, works out (as our arithmetic) the time per mark on the 90-minute scholarship paper, lists the Additional topics with ISEB\'s guidance, sets out what the specification removes and its calculator rule, teaches three original worked examples (a Q.E.D. proof, simultaneous equations in context, average speed over a two-part journey) and a six-question practice set, and gives a six-step preparation plan. Lesson family: proof and written justification.',
    requiredMentions: ['Common Academic Scholarship (CASE) assessments', 'who choose which papers pupils will sit and also mark the papers', 'Some senior schools select their scholars from candidates who sit CE', 'two CASE sessions each year, in February and May', 'based on the 13+ CE specification for the Additional Paper', 'Candidates should use (a box) or Q.E.D. to conclude a proof', 'Expectation of greater quality of thought and working, rather than quantity of questions', 'about 54 seconds a mark'],
    sources: [
      { claim: 'ISEB CASE at 13+: subjects, entry and marking by senior schools, venue, selection from CE, sessions, results.', url: 'https://www.iseb.co.uk/assessments/common-entrance/case-information-for-schools/' },
      { claim: 'ISEB CE at 13+: since 1903, compulsory papers, three sessions, entry by prep schools.', url: 'https://www.iseb.co.uk/assessments/common-entrance/at-13-for-schools/' },
      { claim: 'ISEB CE and CASE Mathematics specification: papers, marks, times, CASE based on Additional, Additional topics, changes, calculator rules.', url: 'https://www.iseb.co.uk/wp-content/uploads/Syllabus-CE-CASE-Mathematics-Helvetica-_V7.1-2.pdf' },
      { claim: 'Cambridge Select Insight versions for 11+ or 13+ independent school entry.', url: 'https://www.cem.org/entrance-assessments' }
    ],
    rejectedClaims: [
      'ISEB fees for CE and CASE entries: published on ISEB pages but deliberately not printed (no typed currency).',
      'ISEB\'s "top independent schools" wording: restated without the superlative.',
      'Any calculator rule for the CASE paper itself: the specification states rules for the Additional Paper and calculators in general, not explicitly for CASE, so the page tells families to follow the school\'s instructions.',
      'Names of schools that use CASE, or award values and numbers: not published by ISEB and not stated.',
      'Questions from ISEB specimen or past papers: not reproduced; the specification\'s own examples are not copied either.',
      'Any score target or award promise.'
    ]
  }
};
