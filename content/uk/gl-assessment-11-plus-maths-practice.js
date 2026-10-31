'use strict';
// GL Assessment 11 plus maths practice (ag- maths door by provider, UK cluster, row UK048).
// www.gl-assessment.co.uk returns HTTP 403 to curl (home page and 11+ product page), so nothing is
// attributed to that host. Read raw with curl on 31 October 2026 (copies under
// keyword-research-2026-09/uk-us-gap/src/gl-assessment-11-plus-maths-practice/):
//  - GL Assessment's 11+ shop, 11plus.gl-assessment.co.uk (a separate host, linked by the Lincolnshire
//    consortium; it answered 200). Verbatim: "11+ tests vary from area to area so please be aware that the
//    exact timings, the combination of topics covered (for example, verbal reasoning, non-verbal reasoning,
//    Maths and English) and the number of questions in your local 11+ test may differ from those in our
//    familiarisation and practice materials."; "we provide 10 hours of free familiarisation materials";
//    free downloads listed: Verbal Reasoning, Non-verbal Reasoning, English, Maths, Non-verbal Reasoning and
//    Maths, Verbal Skills; maths practice papers cover "Knowledge of times tables", "Quick mental
//    arithmetic", "Understanding of shapes, space and measures", "Applying the four basic operations",
//    "Graph reading"; "private tutors or other organisations may not feature this page and/or these
//    materials (or any part of them) on their websites" (so we do not link to or reproduce them).
//  - Buckinghamshire Council, grammar schools and Secondary Transfer Testing: "The Secondary Transfer Test is
//    produced by GL Assessment"; two papers "each about 60 minutes long"; practice test 8 September 2026,
//    test 10 September 2026, results 9 October 2026; qualifying score "at least 121"; 13 grammar schools.
//  - The Buckinghamshire Grammar Schools (TBGS) FAQs: paper two holds "non-verbal reasoning, spatial
//    reasoning and maths questions"; each paper "takes about 45 minutes"; weightings "verbal – 50%;
//    mathematical – 25%; non-verbal – 25%" (restated without the dash); maths and English content "does
//    not go beyond what the national curriculum expects children to know and be able to do by the end of
//    Year 5"; "TBGS does not endorse tutoring for the test."; "Tutors do not see our test papers"; practice
//    test papers "each lasting 25-30 minutes"; "All the questions are multiple-choice."
//  - Medway Council, About the Medway Test: "These tests are written specifically for Medway Council.";
//    "Our test provider is GL Assessment."; Mathematics: 2 practice questions, 50 minutes, "No. The whole
//    test must be completed in the 50 minutes."; English 30 minutes; Reasoning 45 minutes; "There is no
//    resit and there is no remarking". How the test is marked: English x 2 + Mathematics x 2 + Reasoning x 1;
//    26% of Medway maintained-school children assessed as grammar; 2027 admissions minimum 478. Dates:
//    Medway primary pupils sit on Tuesday 15 and Wednesday 16 September 2026.
//  - West Midlands Grammar Schools, The Entrance Test: "The test is provided by GL Assessment"; two papers
//    "each approximately 50-60 minutes long"; weightings "50% for English/verbal reasoning, 25% for
//    non-verbal reasoning and 25% for mathematics"; audio CD timing; candidates "cannot revisit a previous
//    section"; "Rough/scrap paper cannot be used"; "only the separate answer sheets are marked";
//    calculators not allowed. Birmingham City Council: "There is one entry test for all of Birmingham's
//    grammar schools and for grammar schools outside Birmingham that are part of the West Midlands Grammar
//    Schools group."; eligible births 1 September 2015 to 31 August 2016.
//  - London Borough of Redbridge, 11 plus: "The 11 plus test is provided by GL Assessment"; two papers,
//    "English and Verbal Reasoning" and "Mathematics and Non-Verbal Reasoning"; free materials "might not
//    match the exact test your child will take"; test Friday 18 September 2026.
//  - Lincolnshire Consortium of Grammar Schools, Testing Arrangements: "currently uses GL Assessment to
//    provide 11+ Testing"; a Verbal Reasoning Test and a Non-Verbal Reasoning Test, no maths paper.
//  - Gloucestershire County Council, grammar schools: for the 2028 intake "the test provider they use will
//    be Future Stories Community Enterprise (FSCE)".
// Our own calculation, labelled as ours on the page: Medway's weights give maths 2 of 5 parts of the
// weighted total, two fifths. Worked examples and the practice set are written by us.
// Spine: one publisher, many tests. GL writes each area's paper to that area's order, and the maths share
// runs from none (Lincolnshire) to two fifths of the weighted total (Medway, our arithmetic).
// Lesson family: a provider page where the local shape matters more than the brand on the cover.

const TIMING = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'elevenplus', tag: 'GL ASSESSMENT', label: 'GL Assessment 11 plus maths', blurb: 'One publisher, many tests. In GL areas maths is worth anything from nothing to two fifths of the score.' },
  slug: 'gl-assessment-11-plus-maths-practice',
  code: 'gap',
  accent: '#56512C',
  accentRationale: 'GL 11 plus maths: a dark olive (#56512C), 7.59:1 on #FBF8F2 and 6.53:1 on the deepest paper tint, quieter than the teal Kent page and the brick CCEA page it links beside',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'GL Assessment 11 plus maths practice',
  title: 'GL Assessment 11 Plus Maths Practice | Area by Area',
  description: 'GL Assessment 11 plus maths practice: what the GL test is, why each area\'s paper differs, how much maths counts where, and original practice with reasoning.',
  ogDescription: 'GL Assessment writes many different 11 plus tests. In one area maths is a separate 50-minute paper; in another there is no maths paper at all.',
  twitterDescription: 'The GL 11 plus, area by area: papers, maths weightings, answer sheets, and how to practise for the version your child will actually sit.',
  pageName: 'GL Assessment 11 Plus Maths Practice',
  webPageDescription: 'Live online maths teaching for children preparing for an 11 plus test written by GL Assessment, built from what councils and grammar school consortia publish about their own GL papers.',
  courseDescription: 'Live online maths lessons for children in Years 4 and 5 preparing for a GL Assessment 11 plus, teaching Year 5 arithmetic, problem solving and multiple-choice technique.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'GL 11 plus maths',
  navLinks: [
    { href: '#what', label: 'What GL is' },
    { href: '#areas', label: 'Area by area' },
    { href: '#format', label: 'The format' },
    { href: '#worked', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; GL Assessment 11 plus &middot; Years 4 and 5',
  h1: 'GL Assessment 11 plus maths practice',
  lede: 'GL Assessment is a test publisher that writes the 11 plus for many English grammar school areas, but it does not write one test. Each council or consortium orders its own paper, so the GL test in Medway, Buckinghamshire, Birmingham and Lincolnshire differs in timing, mix and weighting. Modern Age Coders teaches the maths for these tests live online, in a group or one to one, through our 11 plus maths preparation course. Before any practice paper, find out which version your child will sit: in one GL area maths is a separate fifty-minute paper, and in another there is no maths paper at all.',
  secondaryCta: { href: '#areas', label: 'Compare the areas' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for a GL Assessment 11 plus.',
  heroNote: 'Taken from council and consortium pages, read 31 October 2026 &middot; Not connected with GL Assessment or any school',
  spec: [
    ['Publisher', 'GL Assessment'],
    ['Written for', 'Each area, to its own order'],
    ['Format', 'Multiple choice, separate answer sheet'],
    ['Maths content', 'National curriculum to the end of Year 5'],
    ['Maths weight', 'From none to two fifths, by area'],
    ['Calculator', 'Not allowed'],
    ['We teach', 'Arithmetic, reasoning, answer-sheet habits'],
    ['We never', 'Copy GL papers or promise a score']
  ],
  capsuleQ: 'What is the GL 11 plus?',
  capsule: 'It is the name families use for an 11 plus test written by GL Assessment, a UK test publisher. There is no single GL 11 plus. GL\'s own 11 plus site warns that tests "vary from area to area" in timings, topics and number of questions. Buckinghamshire\'s Secondary Transfer Test puts maths inside a second paper with non-verbal and spatial reasoning and weights it at 25 per cent. The West Midlands Grammar Schools test also weights maths at 25 per cent. Medway sets a separate 50-minute maths paper and doubles its score. The Lincolnshire consortium, which also uses GL, sets verbal and non-verbal reasoning only. Every GL test we have read is multiple choice, answered on a separate sheet, and sat without a calculator early in Year 6. Modern Age Coders teaches the Year 5 maths these papers draw on, live online, with our own practice questions.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Three courses for a GL maths paper',
    lede: 'Pick by how secure the arithmetic is today. Every card opens the full syllabus.',
    items: [
      { course: '11-plus-maths-preparation-course-uk', code: 'GL / 01', title: '11 plus maths preparation', note: 'The main course: Year 5 number, fractions, measures and multi-step problems, taught for unfamiliar wording.' },
      { course: 'mental-maths-mastery-kids', code: 'GL / 02', title: 'Mental maths, number sense first', note: 'GL timings are tight and calculators are banned, so recall that happens in the head saves minutes.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'GL / 03', title: 'Primary maths, Years 1 to 5', note: 'For a child in Year 4 whose place value, tables or fractions still slip under pressure.' }
    ]
  },

  sections: [
    {
      id: 'what', tint: 'tint', eyebrow: 'What GL is',
      h2: 'Is there one GL Assessment 11 plus test?',
      lede: 'No. GL Assessment supplies tests to many areas, and each area decides what its own test contains. GL\'s main website returns HTTP 403 to automated readers, so everything below comes from GL\'s separate 11 plus shop and from the councils and consortia that use GL papers.',
      body: [
        { kind: 'p', html: 'Parents searching for "GL 11 plus practice papers" are usually told the test is a brand, like a GCSE board. It is closer to a printer that takes orders. Medway Council says of its own paper: "These tests are written specifically for Medway Council." The Buckinghamshire grammar schools say the same of theirs: "Our test is produced specifically for Buckinghamshire." GL\'s own 11 plus site is plainer still, warning that "the exact timings, the combination of topics covered (for example, verbal reasoning, non-verbal reasoning, Maths and English) and the number of questions in your local 11+ test may differ from those in our familiarisation and practice materials."' },
        { kind: 'two', mt: true,
          leftH3: 'What stays the same across GL areas',
          left: [
            'In every GL area we read, questions are multiple choice and children mark answers on a separate sheet that a machine reads. Calculators are not allowed. The maths draws on the primary curriculum: the Buckinghamshire grammar schools say their maths "does not go beyond what the national curriculum expects children to know and be able to do by the end of Year 5".',
            'Tests are sat in September of Year 6, after registration in Year 5, and scores are age-standardised so that a child born in August is not compared like-for-like with one born the previous September.'
          ],
          rightH3: 'What changes from area to area',
          right: [
            'The number of papers, the length of each, which subjects share a paper, whether maths is scored at all, and how much each section counts. In Buckinghamshire maths shares a paper with non-verbal and spatial reasoning. In Medway it has its own paper. In Lincolnshire the consortium sets two reasoning tests and nothing labelled maths.',
            'Providers can change as well. Gloucestershire County Council says the county\'s grammar schools will use Future Stories Community Enterprise (FSCE) as their test provider for the September 2028 intake, so a family there should not assume a GL format for that year.'
          ] },
        { kind: 'source', html: 'Sources: GL Assessment\'s 11 plus site (11plus.gl-assessment.co.uk), <a class="ag-inline-link" href="https://www.medway.gov.uk/info/200137/schools_and_learning/1049/medway_test_11" rel="noopener" target="_blank">Medway Council</a>, <a class="ag-inline-link" href="https://www.thebucksgrammarschools.org/faqs" rel="noopener" target="_blank">The Buckinghamshire Grammar Schools FAQs</a>, <a class="ag-inline-link" href="https://www.gloucestershire.gov.uk/schooladmissions/grammar-schools/" rel="noopener" target="_blank">Gloucestershire County Council</a>, all read 31 October 2026. Modern Age Coders is not connected with GL Assessment, any council or any grammar school.' }
      ]
    },
    {
      id: 'areas', tint: 'deep', eyebrow: 'Area by area',
      h2: 'How much does maths count in each GL area?',
      lede: 'Anything from nothing to two fifths of the total, depending on where a child lives. This is the table we wish every family saw before buying a practice pack.',
      body: [
        { kind: 'table', caption: 'Maths in GL Assessment 11 plus tests, as each area publishes it (September 2026 sitting)', head: ['Area and who runs the test', 'Papers', 'Where the maths sits', 'How much maths counts'], rows: [
          ['Buckinghamshire: The Buckinghamshire Grammar Schools (TBGS)', 'Two papers, each about 45 minutes of questions, about an hour with instructions', 'Paper two, with non-verbal and spatial reasoning', '25 per cent of the Secondary Transfer Test Score'],
          ['West Midlands Grammar Schools group, including every Birmingham grammar school', 'Two papers, each about 50 to 60 minutes including instructions', 'Individually timed sections spread through both papers', '25 per cent'],
          ['Medway Council', 'Three papers: English 30 minutes, mathematics 50 minutes, reasoning 45 minutes', 'Its own paper, the longest of the three', 'Standardised score doubled; two of five weighted parts (our arithmetic)'],
          ['London Borough of Redbridge', 'Two papers', 'Mathematics and Non-Verbal Reasoning paper', 'Not published on the council page we read'],
          ['Lincolnshire Consortium of Grammar Schools', 'Verbal reasoning test and non-verbal reasoning test', 'No maths paper', 'None as a separate section']
        ] },
        { kind: 'p', mt: true, html: 'The Medway figure is our own calculation from the council\'s published formula: the English standardised score times two, plus the mathematics standardised score times two, plus the reasoning score times one. Maths therefore supplies two of the five parts, or two fifths, before any rounding the council applies. Compare that with the Buckinghamshire and West Midlands weightings of 25 per cent, and with Lincolnshire, where the consortium\'s two papers are verbal reasoning and non-verbal reasoning. A child who is strong at maths and weak at reading is in a very different position in each of those places, even though the same publisher wrote all four tests.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Qualifying lines differ too', p: 'Buckinghamshire treats a Secondary Transfer Test Score of at least 121 as qualified. Lincolnshire\'s consortium uses a total of 220 across both papers. Medway sets its line each year to take the top 26 per cent of its own maintained-school pupils; for 2027 admissions that was 478.' },
          { h3: 'Dates differ', p: 'Buckinghamshire\'s test was on 10 September 2026, with results on 9 October. Medway primary pupils sat on 15 and 16 September 2026. Redbridge tested on Friday 18 September 2026. Clashes are real, and Medway says there is no alternative date.' },
          { h3: 'Rules differ', p: 'Medway says plainly that "There is no resit and there is no remarking". The West Midlands group says children cannot go back to an earlier section once its time is up. Each rule changes how a child should practise.' }
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.buckinghamshire.gov.uk/schools-libraries-and-parks/school-admissions-and-appeals/grammar-schools-and-transfer-testing-11/" rel="noopener" target="_blank">Buckinghamshire Council</a> and TBGS FAQs; <a class="ag-inline-link" href="https://westmidlandsgrammarschools.co.uk/the-entrance-test" rel="noopener" target="_blank">West Midlands Grammar Schools, The Entrance Test</a> and <a class="ag-inline-link" href="https://www.birmingham.gov.uk/info/20119/school_admissions/584/grammar_schools_in_birmingham" rel="noopener" target="_blank">Birmingham City Council</a>; Medway Council, About the Medway Test and How the test is marked; <a class="ag-inline-link" href="https://www.redbridge.gov.uk/schools/school-admissions/redbridge-11-plus" rel="noopener" target="_blank">Redbridge Council, 11 plus</a>; <a class="ag-inline-link" href="https://grammarschools.lincs.sch.uk/the-11-plus/testing-arrangements/" rel="noopener" target="_blank">Lincolnshire Consortium of Grammar Schools, Testing Arrangements</a>. Kent also uses a GL-written test; Kent County Council\'s site returns HTTP 403 to us, so see <a class="ag-inline-link" href="/11-plus-maths-tuition-kent">our Kent page</a> for what we could read.' }
      ]
    },
    {
      id: 'format', tint: '', eyebrow: 'The format',
      h2: 'What is a GL maths question like to sit?',
      lede: 'Short, multiple choice, timed by recorded instructions, and answered on a sheet a scanner reads. The content is ordinary primary maths; the conditions are not.',
      body: [
        { kind: 'p', html: 'GL\'s own description of its maths practice papers lists five things: "Knowledge of times tables", "Quick mental arithmetic", "Understanding of shapes, space and measures", applying the four operations, and "Graph reading". That is a fair summary of what a Year 5 child needs. What the list leaves out is how the paper is run, and the councils fill that gap.' },
        { kind: 'table', mt: true, caption: 'Test-room conditions published for GL areas', head: ['Condition', 'What the area says', 'What it means for practice'], rows: [
          ['Recorded instructions', 'West Midlands papers are timed by audio CD; Buckinghamshire uses a supplied audio file', 'Practise with a voice announcing start and stop, not a parent with a stopwatch'],
          ['Sections locked by time', 'West Midlands candidates "cannot revisit a previous section"', 'Unfinished questions in a section are lost; pace has to be learned section by section'],
          ['No scrap paper', 'West Midlands: "Rough/scrap paper cannot be used"; working goes in the question booklet', 'Practise doing working in the margin of the question page'],
          ['Only the answer sheet counts', 'West Midlands: "Question booklets are not marked"', 'A right answer worked out but not marked on the sheet scores nothing'],
          ['No calculator', 'Calculators are not allowed in or around West Midlands test rooms', 'Written methods and mental methods must both be quick'],
          ['One sitting', 'Medway: no resit and no remark; Lincolnshire: tests taken once in the academic year', 'There is no second go, which is an argument for calm familiarity, not for cramming']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The answer sheet is a skill',
          left: [
            'Every GL area we read uses a separate, machine-read sheet. The commonest disaster is not a hard question; it is a skipped question in the booklet that is not skipped on the sheet, so every later answer sits one row out.',
            'We practise this deliberately. Children mark the question number beside each answer, leave a pencil dot on any row they skip, and check the row number every five questions.'
          ],
          rightH3: 'Mixed papers need switching',
          right: [
            'Where maths shares a paper with non-verbal and spatial reasoning, as in Buckinghamshire and Redbridge, a child moves between very different kinds of thinking inside one hour. Practice that only ever uses a whole maths paper misses that.',
            'In the free lesson we ask which area a child will sit in, and set practice in that area\'s shape.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice material',
      h2: 'Which GL practice papers should my child use?',
      lede: 'Start with your own area\'s familiarisation booklet, then GL\'s free materials, and only then anything you buy. The order matters more than the quantity.',
      body: [
        { kind: 'ol', items: [
          'Find your area\'s own description of the test on the council or consortium site, and note the papers, timings and subjects. Buckinghamshire, for example, sends parents a familiarisation booklet specific to its test in the summer term of Year 5.',
          'Use that local booklet first. The Buckinghamshire grammar schools say parents "should use those with their children" rather than relying on generic material.',
          'Add GL\'s free familiarisation materials, which GL describes as 10 hours of downloads, including a maths set and a combined non-verbal reasoning and maths set. Download them from GL\'s own 11 plus site; GL asks that tutors do not reproduce them, and we do not.',
          'If you buy practice packs, buy the right format. The Lincolnshire consortium tells parents to buy "the Multiple Choice Format, NOT the Standard Format" for its test, a warning worth applying in any multiple-choice area.',
          'Keep full timed papers for the last few weeks. Before then, short sets on one skill at a time teach more than a whole paper marked once.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the free material is for',
          left: [
            'GL says its free materials are "particularly useful for verbal reasoning and non-verbal reasoning tests as children may not have encountered these types of questions before." Maths is different: a child meets maths every school day, so the gap is usually speed and the layout, not the topics.',
            'Redbridge Council adds the caution that free materials "might not match the exact test your child will take", in the number, type or difficulty of questions.'
          ],
          rightH3: 'What we will not do',
          right: [
            'Reproduce GL papers, familiarisation booklets or council materials, or present our questions as real test items. Our practice is written by us, at the same level, and labelled as ours.',
            'Tell you a score your child needs, or promise a place. Qualifying scores and admissions belong to each consortium and council.'
          ] }
      ]
    },
    {
      id: 'worked', tint: 'deep', eyebrow: 'Worked examples, written by us',
      h2: 'How should a child think through a GL-style maths question?',
      lede: 'Three original questions at Year 5 level, in a five-option multiple-choice style. None is from a GL paper. The point is the route, not the answer.',
      body: [
        { kind: 'three', cells: [
          { h3: '1. Scaling a recipe', p: 'Six biscuits need 250 g of flour. How much flour for 15 biscuits? A 525 g, B 600 g, C 625 g, D 650 g, E 750 g. Estimate first: 15 is two and a half lots of 6, so the answer is two and a half lots of 250, which is 625 g. Check another way: 3 biscuits need 125 g, and 15 is five lots of 3, so 5 times 125 is 625. Answer C. Option E is the trap for children who treat 15 as 18.' },
          { h3: '2. Ordering mixed numbers', p: 'Which is largest: 0.6, five eighths, three fifths, 0.58, 61 per cent? Turn everything into thousandths. 0.6 is 600, three fifths is also 600, 0.58 is 580, 61 per cent is 610, and five eighths is 625, since one eighth is 125. Answer: five eighths. Knowing the eighths by heart turns a slow question into a ten-second one.' },
          { h3: '3. A perimeter without algebra', p: 'A rectangle has a perimeter of 36 cm and its length is twice its width. What is its area? Half the perimeter, 18 cm, is one length plus one width, which is three equal parts of the width. So the width is 6 cm, the length 12 cm, and the area 72 square centimetres. No Year 6 algebra is needed: a bar drawn in three equal pieces does the work.' }
        ] },
        { kind: 'table', mt: true, caption: 'A practice set written by Modern Age Coders, with the reasoning we expect', head: ['Question (ours)', 'Answer', 'The thinking'], rows: [
          ['4.7 multiplied by 30', '141', 'Multiply by 3 to get 14.1, then by 10. Splitting a hard product into two easy ones is the habit to build.'],
          ['A train leaves at 10:47 and arrives at 13:12. How long is the journey?', '2 hours 25 minutes', 'Count up to 11:00 (13 minutes), then to 13:00 (2 hours), then 12 more minutes. Never subtract times as if they were decimals.'],
          ['What is three quarters of 56?', '42', 'One quarter is 14; three quarters is 42. Find the unit fraction first, every time.'],
          ['The temperature is minus 4 degrees and rises by 11 degrees. What is it now?', '7 degrees', 'Four degrees gets back to zero, leaving 7 more. A number line sketch in the booklet margin prevents sign slips.'],
          ['A 45-minute session is cut by 20 per cent. How long is it now?', '36 minutes', 'Ten per cent of 45 is 4.5, so twenty per cent is 9, and 45 minus 9 is 36.'],
          ['Next in the sequence 3, 7, 15, 31, ...', '63', 'Each term is double the last plus one. Check the rule on two steps before trusting it.']
        ] },
        { kind: 'p', mt: true, html: 'Each of these takes well under a minute once the method is automatic, and each hides one trap: the wrong unit, the clock treated as a decimal, the sign, or a pattern checked on only one step. In lessons we spend more time on the trap than on the answer, because the same trap reappears in a different costume on the day.' }
      ]
    },
    {
      id: 'tutoring', tint: '', eyebrow: 'What the schools say',
      h2: 'Do GL areas say a child needs tutoring?',
      lede: 'Two of the consortia we read say so directly: no. We think families should hear that from the schools before they hear anything from a tutor, including us.',
      body: [
        { kind: 'two',
          leftH3: 'In their own words',
          left: [
            'The Buckinghamshire grammar schools: "TBGS does not endorse tutoring for the test." They add that "Tutors do not see our test papers or associated materials" and so cannot advise on the specific test.',
            'The Lincolnshire consortium: "The Lincolnshire Consortium of Grammar School does not endorse tutoring", and "Too much preparation puts children under pressure and may be counter-productive."'
          ],
          rightH3: 'Where maths teaching still helps',
          right: [
            'Both statements are about coaching for the test. Neither says arithmetic does not matter. A child who is unsure of times tables, fractions or written methods by the end of Year 5 is short of things the national curriculum expects anyway, and that is worth fixing for secondary school whatever happens in September.',
            'So our offer is narrow and honest: secure Year 5 maths, teach the habits of a multiple-choice, answer-sheet paper, and stop there. We do not teach to a leaked or imagined test.'
          ] },
        { kind: 'p', mt: true, html: 'For the area pages that go deeper into one local test, see <a class="ag-inline-link" href="/11-plus-maths-tuition-buckinghamshire">Buckinghamshire</a>, <a class="ag-inline-link" href="/11-plus-maths-tuition-medway">Medway</a>, <a class="ag-inline-link" href="/11-plus-maths-tuition-birmingham">Birmingham</a>, <a class="ag-inline-link" href="/11-plus-maths-tuition-redbridge">Redbridge</a> and <a class="ag-inline-link" href="/11-plus-maths-tuition-gloucestershire">Gloucestershire</a>. The <a class="ag-inline-link" href="/11-plus-maths-tuition">national 11 plus maths page</a> covers the subject without a provider in mind.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Timeline',
    h2: 'From Year 4 to the September test',
    lede: 'Registration in GL areas falls in the spring or early summer of Year 5, and the test lands in September of Year 6. Plan backwards from registration.',
    table: { caption: 'Four stages before a GL 11 plus', head: ['When', 'Stage', 'Secure when'], rows: [
      ['Year 4', '1. Number facts', 'Tables to 12 and fraction, decimal and percentage pairs recalled without counting'],
      ['Autumn and spring of Year 5', '2. Methods and problems', 'Written multiplication and division come out right with awkward numbers; word problems are read for the operation first'],
      ['Summer of Year 5', '3. Local format', 'The area\'s own familiarisation booklet worked through, answer sheet included'],
      ['Holidays before Year 6', '4. Timed sections', 'Short timed sections finished calmly, with skipped rows handled correctly']
    ] },
    left: { h3: 'Starting late', ps: [
      'A child who starts in the summer of Year 5 can still gain, but the order holds: fluency, then problems, then the clock.',
      'If the arithmetic is shaky, we will say so in the first lesson rather than sell a timetable.'
    ] },
    right: { h3: 'After September', ps: [
      'The maths does not expire with the test. Many children carry on into <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a> or Year 7 maths.',
      'For puzzle lovers, our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">UK competitions calendar</a> lists challenges from primary age upwards.'
    ] }
  },

  catalogue: {
    eyebrow: 'All related courses',
    h2: 'Maths and thinking courses around a GL test',
    lede: 'Grouped by when they help. Each card opens its syllabus.',
    bands: [
      { num: 'I', h3: 'Before the test', sub: 'Years 3 to 5', courses: [
        { code: 'UK / GAP / 01', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths preparation', blurb: 'Year 5 content taught for unfamiliar questions and tight timings.' },
        { code: 'UK / GAP / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Recall and estimation, the two things a calculator ban rewards.' },
        { code: 'UK / GAP / 03', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths, Years 1 to 5', blurb: 'Place value, tables and fractions rebuilt from the ground.' },
        { code: 'UK / GAP / 04', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'A visual route to fast calculation for younger children.' }
      ] },
      { num: 'II', h3: 'Alongside', sub: 'Number and pattern', courses: [
        { code: 'UK / GAP / 05', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Calculation shortcuts for children who enjoy number patterns.' },
        { code: 'UK / GAP / 06', slug: 'ks2-sats-maths-course', title: 'KS2 SATs maths', blurb: 'Arithmetic and reasoning papers for the end of Year 6.' }
      ] },
      { num: 'III', h3: 'After the test', sub: 'Year 6 and secondary', courses: [
        { code: 'UK / GAP / 07', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Lower secondary maths', blurb: 'The pre-algebra and geometry Year 7 assumes.' },
        { code: 'UK / GAP / 08', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Python as a way to see why a method works.' },
        { code: 'UK / GAP / 09', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Harder problems for the child who finishes early.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons, set in your area\'s shape',
    lede: TIMING + ' Our teachers are in India, which keeps one clock all year, so India time runs four and a half hours ahead of UK time in summer and five and a half in winter; every lesson is fixed in UK time.',
    slots: [
      { time: 'After school', l: 'The usual slot for Years 4 and 5.' },
      { time: 'Weekend morning', l: 'For a longer timed section with a break.' },
      { time: 'Summer holiday', l: 'Shorter, more frequent lessons before September.' }
    ],
    cells: [
      { h3: 'Your area\'s format', p: 'Practice laid out like the local test, maths alone or mixed with reasoning.' },
      { h3: 'Answer-sheet drills', p: 'Rows checked, skips handled, nothing left in the booklet.' },
      { h3: 'Original questions', p: 'Written by us at Year 5 level; no GL or council material copied.' },
      { h3: 'Trap-first marking', p: 'Every wrong answer traced to the trap that caught it.' },
      { h3: 'Group or 1-on-1', p: 'A batch of 15 to 20 at one level, or a teacher for one child.' },
      { h3: 'No promises', p: 'Scores and places belong to councils and consortia, not to us.' }
    ]
  },

  projectsH2: 'Things our students built later',
  projectsLede: 'Work by students at our school, most of them past the 11 plus stage now. More on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'From parents on our Google profile, unedited.',

  fees: {
    h2: 'Fees for GL 11 plus maths lessons',
    lede: 'A single monthly fee, shown in the currency used for families in the UK. The first lesson costs nothing and there is no joining fee.',
    free: ['A real maths lesson at Year 5 level', 'Our view of where the arithmetic stands', 'A phone number is all we need'],
    group: ['A batch of 15 to 20 at the same stage', 'One teacher across the months', 'Practice in your area\'s layout', 'Lighter weeks around school events'],
    one: ['One child, one teacher', 'Built around one area\'s test', 'Useful when a single gap is the problem']
  },

  faq: {
    eyebrow: 'GL 11 plus questions',
    h2: 'What parents ask about the GL 11 plus',
    items: [
      { q: 'What is the GL 11 plus?', a: 'It is an 11 plus test written by GL Assessment for a particular council or group of grammar schools. GL\'s own site says tests vary from area to area in timing, subjects and number of questions, so there is no single GL test.' },
      { q: 'Is the GL 11 plus maths paper the same everywhere?', a: 'No. Medway sets a separate 50-minute maths paper, Buckinghamshire puts maths in a second paper with non-verbal and spatial reasoning, and the Lincolnshire consortium sets no maths paper at all. Check your own council or consortium page first.' },
      { q: 'How much does maths count in a GL test?', a: 'It depends on the area. Buckinghamshire and the West Midlands Grammar Schools both weight maths at 25 per cent. By our arithmetic on Medway\'s published formula, maths supplies two fifths of the weighted total there.' },
      { q: 'What maths is in a GL 11 plus?', a: 'Primary maths up to Year 5. The Buckinghamshire grammar schools say their content does not go beyond what the national curriculum expects by the end of Year 5, and GL lists times tables, mental arithmetic, shape, space and measures, the four operations and graph reading.' },
      { q: 'Are GL 11 plus questions multiple choice?', a: 'In every GL area we read, yes. Children mark answers on a separate sheet that is machine read, and in the West Midlands test only that sheet is marked, not the question booklet.' },
      { q: 'Can my child use a calculator?', a: 'No. Calculators are not allowed in the test rooms the West Midlands group describes, and a GL maths paper is built for mental and written methods. Practise without one from the start.' },
      { q: 'Where can I get free GL practice papers?', a: 'From your area\'s own familiarisation booklet first, then from GL Assessment\'s own 11 plus site, which offers free familiarisation downloads including maths. GL asks tutors not to reproduce those materials, so we point you to GL rather than copying them.' },
      { q: 'Do grammar schools recommend tutoring for the GL test?', a: 'The Buckinghamshire grammar schools and the Lincolnshire consortium both say they do not endorse tutoring. Our lessons teach Year 5 maths and the habits of a multiple-choice paper; we do not claim to know a test we have never seen.' },
      { q: 'When are lessons?', a: TIMING + ' Lessons are fixed in UK time.' },
      { q: 'Can you tell me what score my child needs?', a: 'Each area publishes its own line: Buckinghamshire uses 121, the Lincolnshire consortium 220 across two papers, and Medway sets its minimum each year. We do not predict scores or places.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More on the 11 plus',
    lede: 'Local tests in more depth, and the wider picture.',
    items: [
      { href: '/11-plus-maths-tuition', label: '11 plus maths tuition', p: 'The subject itself, without a provider in mind.' },
      { href: '/11-plus-maths-tuition-medway', label: '11 plus maths in Medway', p: 'The area with a separate, double-weighted maths paper.' },
      { href: '/11-plus-maths-tuition-buckinghamshire', label: '11 plus maths in Buckinghamshire', p: 'Maths inside a mixed second paper.' },
      { href: '/11-plus-maths-tuition-birmingham', label: '11 plus maths in Birmingham', p: 'One test for the whole West Midlands group.' },
      { href: '/common-entrance-maths-tuition', label: 'Common Entrance maths', p: 'For independent school entry rather than grammar schools.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Our hub for every UK page.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson',
    lede: 'Tell us your child\'s year and which area\'s test they will sit. We teach a real lesson in that format and then say plainly what we noticed.',
    readFirst: 'Prefer to read first? The <a class="ag-inline-link" href="/courses/11-plus-maths-preparation-course-uk">11 plus maths course page</a> lists every topic, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our method.',
    note: 'WhatsApp is quickest and free from a UK phone. Our team answers from India, on a number that starts +91.',
    formNote: 'No payment details. One message back with a time.'
  },

  footer: {
    cols: [
      { h4: '11 plus', links: [
        { href: '/11-plus-maths-tuition', label: '11 plus maths' },
        { href: '/11-plus-maths-tuition-medway', label: 'Medway' },
        { href: '/11-plus-maths-tuition-buckinghamshire', label: 'Buckinghamshire' },
        { href: '/11-plus-maths-tuition-kent', label: 'Kent' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/courses/11-plus-maths-preparation-course-uk', label: '11 plus maths course' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'GL writes the paper; your area decides its shape'
  },

  personalityCss: `
.ag-root.ag-gap .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-gap .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-gap .ag-section-head h2 { max-width: 25ch; }
.ag-root.ag-gap .ag-table caption { text-align: left; font-weight: 640; }
.ag-root.ag-gap .ag-table th:first-child { width: 28%; }
`,

  dossier: {
    curriculumAuthority: 'GL Assessment 11 plus, as published by the areas that use it, read 31 October 2026. GL 11+ site: tests "vary from area to area"; 10 hours of free familiarisation materials; maths practice paper skills listed; tutors may not reproduce the materials. Buckinghamshire Council: "The Secondary Transfer Test is produced by GL Assessment"; qualifying score at least 121; test 10 September 2026, results 9 October 2026. TBGS FAQs: maths in paper two with non-verbal and spatial reasoning; weightings verbal 50, mathematical 25, non-verbal 25 per cent; content to the end of Year 5; "TBGS does not endorse tutoring for the test." Medway Council: "These tests are written specifically for Medway Council."; mathematics 50 minutes; weighted total English x2, Mathematics x2, Reasoning x1; top 26 per cent; 2027 admissions minimum 478; no resit or remark. West Midlands Grammar Schools: GL; two papers of about 50 to 60 minutes; maths 25 per cent; cannot revisit a section; no scrap paper. Redbridge: GL; Mathematics and Non-Verbal Reasoning paper. Lincolnshire consortium: GL; verbal and non-verbal reasoning only. Gloucestershire: FSCE for the 2028 intake.',
    localProject: 'One publisher, many tests. The page explains that GL Assessment writes each area\'s 11 plus to order, then compares five GL areas in one table: where maths sits and how much it counts, from 25 per cent in Buckinghamshire and the West Midlands to two fifths of Medway\'s weighted total (our arithmetic on the council\'s formula) and nothing in Lincolnshire. It sets out published test-room conditions (recorded timing, locked sections, no scrap paper, answer sheet only), an ordered plan for practice material starting with the local booklet, three original worked examples and a six-question practice set with reasoning, and the consortia\'s own statements that they do not endorse tutoring. Lesson family: a provider page where the local shape matters more than the brand on the cover.',
    requiredMentions: ['These tests are written specifically for Medway Council', 'does not endorse tutoring for the test', 'cannot revisit a previous section', 'Future Stories Community Enterprise', 'two of five weighted parts', 'Quick mental arithmetic', 'Multiple Choice Format, NOT the Standard Format', '50-minute maths paper'],
    sources: [
      { claim: 'Medway Council: GL provider, papers written for Medway, 50-minute maths paper, weighting formula, 26 per cent, minimum scores, no resit or remark.', url: 'https://www.medway.gov.uk/info/200137/schools_and_learning/1049/medway_test_11' },
      { claim: 'Buckinghamshire Council and TBGS FAQs: GL provider, two papers, maths in paper two, 25 per cent, Year 5 content, 121, dates, tutoring statement.', url: 'https://www.thebucksgrammarschools.org/faqs' },
      { claim: 'West Midlands Grammar Schools: GL provider, two papers, weightings, audio timing, locked sections, no scrap paper, answer sheet only.', url: 'https://westmidlandsgrammarschools.co.uk/the-entrance-test' },
      { claim: 'Redbridge Council: GL provider, two papers including Mathematics and Non-Verbal Reasoning, free materials caution, test date.', url: 'https://www.redbridge.gov.uk/schools/school-admissions/redbridge-11-plus' },
      { claim: 'Lincolnshire Consortium of Grammar Schools: GL provider, verbal and non-verbal reasoning tests only, Multiple Choice Format advice.', url: 'https://grammarschools.lincs.sch.uk/the-11-plus/testing-arrangements/' },
      { claim: 'Gloucestershire County Council: FSCE as test provider for the 2028 intake.', url: 'https://www.gloucestershire.gov.uk/schooladmissions/grammar-schools/' }
    ],
    rejectedClaims: [
      'Anything from www.gl-assessment.co.uk: the home page and 11+ product page return HTTP 403 to curl; we stopped for that host and did not work around it. GL quotes come only from the separate 11plus.gl-assessment.co.uk shop host, which answered normally.',
      'GL\'s marketing claims (share of grammar schools served, years of experience, review ratings): not repeated.',
      'Kent Test details: kent.gov.uk returns 403; the page links to our Kent page instead.',
      'Redbridge\'s maths weighting and any area\'s question counts: not published on the pages read.',
      'South West Herts consortium: its page did not name its provider in what we read, so it is left out of the GL table.',
      'Links to GL\'s free familiarisation downloads: GL asks tutors and other organisations not to feature that page, so we name the site without linking or reproducing anything.',
      'Any score target, pass prediction or place promise.'
    ]
  }
};
