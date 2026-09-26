'use strict';
// 11 plus maths tuition in Buckinghamshire (ag- maths door by area, UK cluster Phase 6, row 189).
// Read on 26 September 2026, all by curl, quotes grepped from the raw text:
//  - Buckinghamshire Council, "Grammar schools and transfer testing (11+)": "In Buckinghamshire there are 13 grammar
//    schools"; they "work together as The Buckinghamshire Grammar Schools (TBGS) to manage transfer testing"; a score of
//    at least 121 counts as qualified; 2027 entry: registration 1 May to 2 June (3pm) 2026, children at a state-funded
//    Bucks primary are entered automatically, "Milton Keynes is not in Buckinghamshire" (MK pupils must register);
//    practice test 8 September 2026, test 10 September 2026.
//  - Council, "The Secondary Transfer Test": measures verbal, non-verbal and mathematical skills; two papers "each about
//    60 minutes long, with a break between"; a shorter practice test usually two days before; produced by GL Assessment.
//  - Council, timeline for 2028 entry: children born 1 September 2016 to 31 August 2017; registration May to June 2027;
//    test early September 2027; results mid-October 2027.
//  - TBGS (thebucksgrammarschools.org) FAQs: paper one = comprehension, technical English, verbal reasoning; paper two =
//    non-verbal, spatial reasoning and maths; "All the questions are multiple-choice"; each paper "takes about 45
//    minutes" and about an hour with introduction and practice examples; children "must work through questions in the
//    order they appear ... following the instructions given in the audio file"; skipped questions revisited "if they
//    have time at the end of the section"; "every correct answer will gain one raw mark"; weightings verbal 50%,
//    mathematical 25%, non-verbal 25%, which "indicate the proportion of the test devoted to that skill"; STTS =
//    age-standardised section scores added with those weights; qualifying score 121; maths and English "does not go
//    beyond what the national curriculum expects ... by the end of Year 5"; two practice papers of 25-30 minutes, not
//    marked; familiarisation materials in the summer term of Year 5; "TBGS does not endorse tutoring for the test",
//    "Tutors do not see our test papers". TBGS school list: 13 schools with boys/girls/co-educational labels.
//  - National curriculum in England, mathematics, Year 5 programme of study (gov.uk): per cent as "number of parts per
//    100"; primes to 19; long multiplication for two-digit numbers; timetables.
// Spine: maths is a quarter of the Transfer Test by design, asked in order to an audio file. Lesson family: weighted
// sums read as Year 5 percentages. Not used (admissions): catchment, Pupil Premium places, allocation, school choice.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'elevenplus', tag: 'BUCKS TRANSFER TEST', label: '11 plus maths in Buckinghamshire', blurb: 'Maths is a quarter of the Buckinghamshire Secondary Transfer Test, asked in order and paced by an audio file.' },
  slug: '11-plus-maths-tuition-buckinghamshire',
  code: 'bkm',
  accent: '#5C4F3C',
  accentRationale: 'Buckinghamshire 11 plus maths: a beech-bark brown for the Chiltern woods, chosen by colour distance from every accent on the site (6.27:1 on the darkest paper tint)',
  pageType: 'governorate',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: '11 plus maths tuition in Buckinghamshire',
  title: '11 Plus Maths Tuition Buckinghamshire | Transfer Test Maths',
  description: 'Live online 11 plus maths for the Buckinghamshire Secondary Transfer Test: what TBGS publishes about the maths, its 25% weighting, and how we teach it.',
  ogDescription: 'Maths is a quarter of the Buckinghamshire Secondary Transfer Test and is asked in order, paced by an audio file. What that means for Year 5 preparation.',
  twitterDescription: 'Buckinghamshire Transfer Test maths, taught live online: Year 5 content, worked in order, no promises.',
  pageName: '11 Plus Maths Tuition in Buckinghamshire',
  webPageDescription: 'Live online mathematics teaching for Buckinghamshire children working towards the Secondary Transfer Test, built on what The Buckinghamshire Grammar Schools and Buckinghamshire Council publish about the test.',
  courseDescription: 'Live online maths classes for Buckinghamshire children in Years 4 and 5, teaching the Year 5 national curriculum for speed and accuracy, and the habit of working a timed section in order.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: '11 plus maths in Buckinghamshire',
  navLinks: [
    { href: '#test', label: 'The test' },
    { href: '#quarter', label: 'A quarter' },
    { href: '#order', label: 'In order' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Buckinghamshire &middot; Secondary Transfer Test maths &middot; Live online, small groups or one to one',
  h1: '11 plus maths tuition in Buckinghamshire',
  lede: 'The Buckinghamshire Secondary Transfer Test tells families something unusually precise about its maths: it is a quarter of the score. The Buckinghamshire Grammar Schools, the company the county\'s thirteen grammar schools set up to run the test, publish the weightings in plain figures, say that every correct answer earns one raw mark, and say that the weightings reflect how much of the test each skill takes up. The maths also arrives in a particular way: inside the second paper, alongside non-verbal and spatial questions, worked strictly in order while an audio file keeps time. That is a narrower and more teachable target than "the 11 plus", and this page is about exactly that target.',
  secondaryCta: { href: '#quarter', label: 'See how the weighting works' },
  wa: 'Hello Modern Age Coders, I would like a free maths class for my child about the Buckinghamshire Transfer Test.',
  heroNote: 'Maths only &middot; We do not teach verbal or non-verbal reasoning &middot; No connection with TBGS or any school',
  spec: [
    ['Test', 'Buckinghamshire Secondary Transfer Test'],
    ['Produced by', 'GL Assessment, for TBGS'],
    ['Papers', 'Two, same day, a break between'],
    ['Maths sits in', 'Paper two, with non-verbal and spatial'],
    ['Maths weighting', '25% of the STTS'],
    ['Questions', 'All multiple choice, worked in order'],
    ['Content ceiling', 'The end of Year 5'],
    ['We teach', 'Year 5 maths, fast and in sequence']
  ],
  capsuleQ: 'In short',
  capsule: 'In Buckinghamshire every child at a state-funded primary is entered for the Secondary Transfer Test automatically; others register. The test is two multiple-choice papers of about 45 minutes each, and The Buckinghamshire Grammar Schools (TBGS) say the second one holds "non-verbal, spatial reasoning and maths skills questions". The Secondary Transfer Test Score (STTS) adds three age-standardised section scores with fixed weights, verbal 50%, mathematical 25% and non-verbal 25%, and a child qualifies at 121 or above. TBGS also say the maths "does not go beyond what the national curriculum expects children to know and be able to do by the end of Year 5". For children now in Year 5, the council\'s timeline puts registration in May to June 2027 and the test in early September 2027. We teach that Year 5 maths, live online. A first lesson is free; groups are USD 100 a month and one to one USD 150.',

  picks: {
    eyebrow: 'Where a Bucks child begins',
    h2: 'Three courses for the maths quarter',
    lede: 'Pick by what happens when your child meets a sum they cannot do in their head, not by the calendar.',
    items: [
      { course: '11-plus-maths-preparation-course-uk', code: 'BUCKS / A', title: '11 plus maths preparation', note: 'Year 5 number, fractions, percentages and measures, practised until they are quick and dependable.' },
      { course: 'mental-maths-mastery-kids', code: 'BUCKS / B', title: 'Mental maths, number sense first', note: 'When a section runs to an audio clock, arithmetic done in the head is the time a child keeps for thinking.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'BUCKS / C', title: 'Primary maths, Years 1 to 5', note: 'For the Year 4 child whose place value or tables are not yet solid enough to build speed on.' }
    ]
  },

  sections: [
    {
      id: 'test', tint: 'tint', eyebrow: 'The test, as published',
      h2: 'What TBGS and the council say about the Transfer Test',
      lede: 'Two organisations publish the facts. TBGS commissions the test on behalf of the thirteen schools; Buckinghamshire Council administers it under contract. Both were read on 26 September 2026.',
      body: [
        { kind: 'table', caption: 'The Secondary Transfer Test for September 2027 entry (sat in September 2026), from Buckinghamshire Council and TBGS', head: ['Step', 'Date', 'As published'], rows: [
          ['Registration', '1 May to 2 June 2026, 3pm', 'Only for children not at a state-funded Buckinghamshire primary or partner school; everyone else is entered automatically.'],
          ['Practice test', 'Tuesday 8 September 2026', 'Two short papers, not marked, giving children the test conditions and the audio instructions in advance.'],
          ['Transfer Test', 'Thursday 10 September 2026', 'Both papers on the same day, with a short gap between them.'],
          ['Results', 'Friday 9 October 2026', 'The date TBGS lists for results.']
        ] },
        { kind: 'table', caption: 'The council\'s timeline for September 2028 entry, the cohort now in Year 5', head: ['Step', 'When', 'Who it covers'], rows: [
          ['Registration', 'May to June 2027', 'Children born 1 September 2016 to 31 August 2017 who are not entered automatically.'],
          ['Transfer Test', 'Early September 2027', 'The first days of Year 6. The council has not yet published the exact date.'],
          ['Results', 'Mid-October 2027', 'Exact date to follow from the council and TBGS.']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The shape of the test does not change from year to year. According to the TBGS FAQs, one paper covers comprehension, technical English and verbal reasoning; the other covers non-verbal reasoning, spatial reasoning and maths. "This is the same each year, although the questions will be different." Every question is multiple choice, and answers go on a separate answer sheet.',
            'Timing is published two ways, and they agree once you read them together. TBGS say each paper "takes about 45 minutes", and that with the introduction and practice examples each one is administered in about an hour. The council\'s page rounds that to "each about 60 minutes long, with a break between".'
          ],
          right: [
            'Families near the county line should read one council sentence carefully: "Milton Keynes is not in Buckinghamshire". A child at school in Milton Keynes who is to sit the Buckinghamshire test must be registered, and the same applies to children at independent schools and schools outside the county.',
            'Admissions are a separate matter and not ours. Which schools to name, and how each school\'s own admissions policy works, belong to the schools and the council. This page deals with one part of one paper: the maths.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.buckinghamshire.gov.uk/schools-libraries-and-parks/school-admissions-and-appeals/grammar-schools-and-transfer-testing-11/" rel="noopener" target="_blank">Buckinghamshire Council, grammar schools and transfer testing</a>, including its Secondary Transfer Test page and its timeline for 2028 entry; <a class="ag-inline-link" href="https://www.thebucksgrammarschools.org/faqs" rel="noopener" target="_blank">The Buckinghamshire Grammar Schools, FAQs</a> and The Secondary Transfer Test page. Modern Age Coders has no connection with TBGS, GL Assessment, Buckinghamshire Council or any Buckinghamshire school.' }
      ]
    },
    {
      id: 'quarter', tint: 'deep', eyebrow: 'The weighting, as Year 5 maths',
      h2: 'Twenty-five per cent, read the way a Year 5 child would read it',
      lede: 'TBGS publish the arithmetic of the score. It happens to be the percentages topic on the Year 5 curriculum, so it doubles as a lesson.',
      body: [
        { kind: 'three', cells: [
          { h3: 'One raw mark each', p: 'TBGS: "every correct answer will gain one raw mark". A hard maths question and an easy one are worth the same. That matters for pacing, as the next section shows.' },
          { h3: 'Weights as fractions', p: '50% is 50 parts per 100, a half. 25% is a quarter. The three weights, a half and two quarters, make one whole, which is why the STTS lands on the same kind of scale as the section scores.' },
          { h3: 'Weights as share of the test', p: 'TBGS say the weightings "indicate the proportion of the test devoted to that skill". So maths is roughly a quarter of what a child answers, not a quarter squeezed into a small corner.' }
        ] },
        { kind: 'table', caption: 'How a weighted total adds up: invented section scores, to show the arithmetic only', head: ['Section', 'Weight', 'Illustrative section score', 'Contribution'], rows: [
          ['Verbal', '50%, a half', '116', 'Half of 116 = 58'],
          ['Mathematical', '25%, a quarter', '130', 'A quarter of 130 = 32.5'],
          ['Non-verbal', '25%, a quarter', '122', 'A quarter of 122 = 30.5'],
          ['Total', 'One whole', '', '58 + 32.5 + 30.5 = 121']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The numbers in that table are ours and are there only to show how a weighted total behaves. TBGS publish the weights and the qualifying score of 121; they do not publish how raw marks become section scores, and nobody outside the test can predict a child\'s section scores. Read the table as a worked example, never as a target.',
            'What the arithmetic does show is honest and useful. Each extra point on the maths section score is worth a quarter of a point on the total; each point on the verbal section is worth half. A family whose child is a natural reader and an uncertain calculator should not conclude that maths "only counts for a quarter" and can be left alone. A quarter of the test is still roughly one question in four.'
          ],
          right: [
            'We use this very calculation in lessons, with different numbers each time, because it is a clean piece of Year 5 content. The national curriculum asks Year 5 pupils to "recognise the per cent symbol (%) and understand that per cent relates to \'number of parts per 100\'", and to write percentages as fractions with denominator 100 and as decimals. Half of a number, a quarter of a number, and adding the results is exactly that.',
            'Children tend to enjoy it more than a page of percentage exercises, because the numbers are about something they have heard adults talking about. The one rule we hold to: the example is about arithmetic, and the conversation never turns into guessing a score.'
          ] },
        { kind: 'source', html: 'Sources: TBGS FAQs on the weightings, raw marks and the STTS; the <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study/national-curriculum-in-england-mathematics-programmes-of-study" rel="noopener" target="_blank">national curriculum in England, mathematics programmes of study</a>, Year 5 fractions (including decimals and percentages). The illustrative section scores are invented.' }
      ]
    },
    {
      id: 'order', tint: 'plain', eyebrow: 'The part families rarely hear',
      h2: 'Worked in order, with an audio file keeping time',
      lede: 'The Buckinghamshire paper is not a booklet a child can roam around. TBGS spell out how it runs, and it changes what practice should feel like.',
      body: [
        { kind: 'two',
          leftH3: 'What TBGS say',
          left: [
            'Asked whether children can answer in any order, TBGS answer: "No, children must work through questions in the order they appear in the test booklet following the instructions given in the audio file and in the question booklet." A child who cannot do a question is told to carry on and to go back to it "if they have time at the end of the section".',
            'Put that together with the paper\'s contents and the maths looks like this: a timed section of maths questions within a paper that also asks for non-verbal and spatial reasoning, started and stopped by recorded instructions. The unmarked practice test, two papers of 25 to 30 minutes, exists partly so that children have heard the audio before the day that counts.'
          ],
          rightH3: 'What that means for teaching',
          right: [
            'With one raw mark per question, a question a child is stuck on costs the same as one they could have answered in twenty seconds. The habit worth building is to notice being stuck early, move on inside the section, and come back only if the section clock allows. That is a skill, and it can be practised on ordinary Year 5 maths.',
            'The second habit is switching. A child who has just spent several minutes on non-verbal patterns has to become a calculator again the moment the maths section starts. We run short mixed practice in which the maths begins cold, so that the first question of a section is not the one where a child wakes up.'
          ] },
        { kind: 'p', html: 'Neither habit needs a Buckinghamshire paper, which is fortunate, because we do not have any. The skills are ordinary ones practised under a clock: read the question once, decide whether this is a now question or a later question, answer or mark it and go on. We say more about papers below.' }
      ]
    },
    {
      id: 'ceiling', tint: 'tint', eyebrow: 'The content ceiling',
      h2: 'Year 5 maths, and nothing beyond it',
      lede: 'TBGS: the maths and English content "does not go beyond what the national curriculum expects children to know and be able to do by the end of Year 5". That sentence is a syllabus.',
      body: [
        { kind: 'table', caption: 'Year 5 national curriculum content we teach for the Transfer Test, with the kind of question we write for it', head: ['Year 5 strand', 'What the curriculum asks', 'A question in our own style'], rows: [
          ['Place value', 'Round any number up to 1,000,000 to the nearest 10, 100, 1,000, 10,000 and 100,000', 'Which of five numbers rounds to 250,000 to the nearest 10,000?'],
          ['Primes and factors', 'Establish whether a number up to 100 is prime and recall prime numbers up to 19', 'How many numbers between 40 and 60 are prime?'],
          ['Multiplication', 'Long multiplication for two-digit numbers', 'A hall has 38 rows of 46 chairs. How many chairs?'],
          ['Percentages', 'Per cent as parts per 100; percentages as fractions and decimals', 'Which is larger: 35% of 80 or two fifths of 75?'],
          ['Measures', 'Convert between metric units; area of rectangles in cm² and m²', 'A 3.2 m by 150 cm rug: what area in square metres?'],
          ['Statistics', 'Complete, read and interpret information in tables, including timetables', 'A bus leaves at 07:48 and takes 37 minutes. When does it arrive?']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Everything in the left-hand column is Year 5 in the national curriculum for England, which is what the TBGS sentence refers to. A child who has these firmly, and quickly, has the content the maths section can draw on.',
            'The right-hand column is ours. None of it is taken from a Transfer Test paper or from the familiarisation materials, and we would not reproduce them. They are the kind of question we set: short, with one step that needs thinking about.'
          ],
          right: [
            'A Year 5 ceiling also tells families what not to buy. Year 6 algebra, formal long division and ratio as a named topic lie beyond it. Time spent on them before September of Year 6 is time not spent making Year 5 content quick.',
            'Speed matters here because the paper is multiple choice and every mark is one mark. A child who has to work out 7 × 8 each time will reach fewer questions than a child who simply knows it, whatever else they know.'
          ] },
        { kind: 'source', html: 'Sources: TBGS FAQs; national curriculum in England, mathematics, Year 5 programme of study (statutory requirements). Example questions are written by Modern Age Coders.' }
      ]
    },
    {
      id: 'tutoring', tint: 'deep', eyebrow: 'Said plainly',
      h2: 'TBGS do not endorse tutoring. Here is where we stand.',
      lede: 'A tuition page that left this out would be hiding the most relevant sentence the test\'s own organisers have published.',
      body: [
        { kind: 'two',
          left: [
            'On their FAQ page, asked whether tutoring and coaching are required, TBGS answer no: the test "is designed to enable all children to demonstrate their academic potential without the need for coaching or excessive preparation". They add: "TBGS does not endorse tutoring for the test," and "Tutors do not see our test papers or associated materials."',
            'We agree with the part about papers. We have never seen a Buckinghamshire paper and do not claim any knowledge of its contents beyond what TBGS and the council publish. Anyone who says otherwise deserves a sceptical question.'
          ],
          right: [
            'What we offer is narrower and, we think, defensible: a teacher who makes sure a child has the Year 5 maths the test says it is built on, is quick at it, and is calm working in order against a clock. That is ordinary good maths teaching with a deadline attached.',
            'TBGS also suggest things families can do at home, including working through the familiarisation materials released in the summer term of Year 5, which show what the booklets and answer sheets look like. Use those. They come from the people who make the test.'
          ] }
      ]
    },
    {
      id: 'schools', tint: 'plain', eyebrow: 'The county',
      h2: 'Thirteen schools, one test, taught from anywhere',
      lede: 'TBGS list the thirteen member schools with a label for each. We reproduce the list only so families know which test this page is about.',
      body: [
        { kind: 'table', caption: 'The Buckinghamshire Grammar Schools\' member list', head: ['School', 'As TBGS describe it'], rows: [
          ['Aylesbury Grammar School', 'Boys'],
          ['Aylesbury High School', 'Girls'],
          ['Beaconsfield High School', 'Girls'],
          ['Burnham Grammar School', 'Co-educational'],
          ['Chesham Grammar School', 'Co-educational'],
          ['Dr Challoner\'s Grammar School', 'Boys'],
          ['Dr Challoner\'s High School', 'Girls'],
          ['John Hampden Grammar School', 'Boys'],
          ['Royal Grammar School', 'Boys'],
          ['Royal Latin School', 'Co-educational'],
          ['Sir Henry Floyd Grammar School', 'Co-educational'],
          ['Sir William Borlase Grammar School', 'Co-educational'],
          ['Wycombe High School', 'Girls']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Every school on that list uses the same Transfer Test, so a child in Aylesbury, High Wycombe, Amersham, Marlow or Buckingham is preparing for the same maths. What differs between the schools is admissions, which each school publishes for itself.',
            'Our lessons are live on video, so the length of the A413 does not come into it. A Tuesday evening lesson is the same lesson in Burnham as in Buckingham.'
          ],
          right: [
            'Groups are formed by level. A Buckinghamshire child learns alongside children elsewhere in the <a class="ag-inline-link" href="/coding-classes-in-united-kingdom">United Kingdom</a> who are at the same stage in Year 5 maths, which is what keeps the groups small and well matched.',
            'We have no connection with any of the thirteen schools, with TBGS or with the council, and we say so here so nobody reads the list as an endorsement.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.thebucksgrammarschools.org/tbgs-schools" rel="noopener" target="_blank">The Buckinghamshire Grammar Schools, TBGS Schools</a>, read 26 September 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'A year of preparation',
    h2: 'Four stages between now and early September 2027',
    lede: 'For a child in Year 5 this school year, the test falls in the first days of Year 6. Build from the bottom.',
    table: { caption: 'From dependable facts to a timed section worked in order', head: ['When', 'Stage', 'How you know it is done'], rows: [
      ['Autumn of Year 5', '1. Facts', 'Multiplication facts to 12 × 12 and the common fraction, decimal and percentage pairs come instantly'],
      ['Spring of Year 5', '2. Year 5 methods', 'Long multiplication, rounding and conversions are right first time, even with awkward numbers'],
      ['Summer term of Year 5', '3. One mark each', 'Moves on from a stuck question without fuss, and comes back if time allows'],
      ['Summer holiday', '4. Cold starts', 'Answers the first maths question of a section as accurately as the tenth']
    ] },
    left: { h3: 'Arriving late', ps: [
      'Starting in the summer term still helps, provided the order holds. Timed sections on shaky facts produce confident wrong answers, and those are hard to undo in a few weeks.',
      'If the foundations are genuinely weak, the free lesson is where we will say so.'
    ] },
    right: { h3: 'After October', ps: [
      'The maths keeps its value whatever the result. Many children move on to <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a>, where the percentages they practised turn into programs.',
      'Children who liked the puzzles more than the test often try the Primary Maths Challenge and the UKMT challenges, listed on our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'All the courses',
    h2: 'Maths and coding for Buckinghamshire families',
    lede: 'Grouped by where a child is, each card leading to the full syllabus.',
    bands: [
      { num: 'I', h3: 'Towards the Transfer Test', sub: 'Years 3 to 5', courses: [
        { code: 'BK / 1.1', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths preparation', blurb: 'The Year 5 curriculum, practised for speed and accuracy.' },
        { code: 'BK / 1.2', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Facts and strategies that save seconds on every question.' },
        { code: 'BK / 1.3', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths, Years 1 to 5', blurb: 'Place value, tables and fractions made solid first.' },
        { code: 'BK / 1.4', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'A visual route into fast calculation for younger children.' }
      ] },
      { num: 'II', h3: 'Into secondary', sub: 'Year 6 onwards', courses: [
        { code: 'BK / 2.1', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school maths mastery', blurb: 'Algebra and geometry for the start of Key Stage 3.' },
        { code: 'BK / 2.2', slug: 'gcse-mathematics-mastery', title: 'GCSE maths, foundation and higher', blurb: 'Taught to AQA, Edexcel and OCR specifications.' },
        { code: 'BK / 2.3', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad and competition maths', blurb: 'Problems with no routine method, for keen mathematicians.' }
      ] },
      { num: 'III', h3: 'Maths meets code', sub: 'Numbers you can program', courses: [
        { code: 'BK / 3.1', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Percentages, primes and patterns, written as Python.' },
        { code: 'BK / 3.2', slug: 'scratch-programming-complete-course', title: 'Scratch coding for kids', blurb: 'Block coding that trains careful, step-by-step thinking.' },
        { code: 'BK / 3.3', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'A first typed language for confident primary pupils.' }
      ] },
      { num: 'IV', h3: 'Further on', sub: 'Beyond the test year', courses: [
        { code: 'BK / 4.1', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths and speed calculation', blurb: 'Shortcuts that make sense once the basics are secure.' },
        { code: 'BK / 4.2', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Weighted sums reappear here as the heart of a neural network.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'The lessons',
    h2: 'Short, live and early in the evening',
    lede: 'Our teachers are in India, which is five and a half hours ahead of the UK in winter and four and a half in summer. For children of nine and ten we schedule early evenings and weekend mornings in UK time, never late at night.',
    slots: [
      { time: 'After school, early evening', l: 'Before tiredness sets in, and before tea.' },
      { time: 'Saturday or Sunday morning', l: 'For families with busy weekday evenings.' },
      { time: 'Half term and holidays', l: 'Extra short sessions while school is out.' }
    ],
    cells: [
      { h3: 'The same teacher', p: 'Week after week, so the particular slips a child makes are noticed and fixed.' },
      { h3: 'A note home', p: 'What went well, what did not, and what to practise, in two or three honest sentences.' },
      { h3: 'Groups of five to ten', p: 'Matched by level, so every child is stretched and nobody is lost.' },
      { h3: 'Questions we write', p: 'All practice is our own. No Transfer Test or familiarisation material is copied.' },
      { h3: 'One to one if needed', p: 'For a stubborn gap, or a child who works better alone.' },
      { h3: 'Maths only', p: 'We do not teach verbal or non-verbal reasoning, and admissions questions go to the schools and the council.' }
    ]
  },

  projectsH2: 'What our students build later on',
  projectsLede: 'Four published projects from students at our school, all of whom were once doing Year 5 maths. There are more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'From parents on our Google profile, copied word for word.',

  fees: {
    h2: 'Fees',
    lede: 'Monthly, in US dollars, as for every family outside India. No joining fee and no term contract.',
    free: ['A real lesson, not a sales call', 'An honest view of the maths so far', 'No card needed'],
    group: ['Five to ten children, one level', 'One regular teacher', 'Work checked and discussed', 'Certificate on completion'],
    one: ['One child and one teacher', 'Planned around the child\'s gaps', 'Useful in the summer of Year 5']
  },

  faq: {
    eyebrow: 'Buckinghamshire questions',
    h2: 'What Buckinghamshire parents ask us',
    items: [
      { q: 'Is there a separate maths paper in the Buckinghamshire test?', a: 'No. TBGS say there are two papers: one for comprehension, technical English and verbal reasoning, and one for non-verbal reasoning, spatial reasoning and maths. The maths is a section of the second paper, and all questions are multiple choice.' },
      { q: 'How much of the Secondary Transfer Test Score is maths?', a: 'A quarter. TBGS publish the weightings as verbal 50%, mathematical 25% and non-verbal 25%, and say they indicate the proportion of the test devoted to each skill. Every correct answer earns one raw mark.' },
      { q: 'What maths is on the Transfer Test?', a: 'TBGS say the maths content does not go beyond what the national curriculum expects by the end of Year 5. That means Year 5 number and place value, the four operations including long multiplication, fractions, decimals and percentages, measures, geometry and reading tables.' },
      { q: 'Can my child skip hard questions and come back?', a: 'Only within a section. TBGS say children must work through the questions in order, following the audio file, and may go back to a question they could not do if there is time at the end of the section.' },
      { q: 'When is the test for September 2028 entry?', a: 'Buckinghamshire Council\'s timeline for children born between 1 September 2016 and 31 August 2017 gives registration in May to June 2027, the test in early September 2027 and results in mid-October 2027. Exact dates are published by the council and TBGS.' },
      { q: 'Does my child need to be registered?', a: 'Children at a state-funded Buckinghamshire primary school are entered automatically, according to the council. Children at other schools, including schools in Milton Keynes, which the council notes is not in Buckinghamshire, must be registered in the window.' },
      { q: 'Does TBGS recommend tutoring?', a: 'No. TBGS say the test is designed so children can show their potential without coaching, that they do not endorse tutoring, and that tutors do not see their papers. We teach Year 5 maths and make no claim to know anything about the papers themselves.' },
      { q: 'Do you teach verbal or non-verbal reasoning?', a: 'No, only the maths. For the other sections, TBGS\'s own familiarisation materials, released in the summer term of Year 5, show the format.' },
      { q: 'What score does my child need?', a: 'TBGS publish the qualifying score as an STTS of 121 or above. We will not predict whether a child will reach it, and we do not advise on school applications.' },
      { q: 'What do lessons cost?', a: 'The first lesson is free. After that it is USD 100 a month in a group or USD 150 a month one to one, with no joining fee and no fixed term.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Also useful',
    h2: 'More pages for Buckinghamshire families',
    lede: 'The national 11 plus page, other selective areas, and what a keen mathematician can do next.',
    items: [
      { href: '/11-plus-maths-tuition', label: '11 plus maths tuition', p: 'Our national page on 11 plus maths, wherever the test is set.' },
      { href: '/11-plus-maths-tuition-kent', label: '11 plus maths in Kent', p: 'A neighbouring county with a very different test.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar', p: 'Maths challenges from primary school upwards, month by month.' },
      { href: '/online-coding-classes-for-kids-uk', label: 'Coding for UK children', p: 'The order a primary child learns programming in.' },
      { href: '/coding-classes-in-united-kingdom', label: 'All our UK pages', p: 'Every nation, city and borough we have written about.' },
      { href: '/best-online-coding-classes-uk', label: 'Choosing an online class', p: 'Questions to put to any provider, including us.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson',
    lede: 'Tell us your child\'s school year and how maths is going. We teach a proper lesson, then tell you plainly what we saw and what we would do next.',
    readFirst: 'Prefer to read first? Every course has its full syllabus on its <a class="ag-inline-link" href="/courses">course page</a>, our method is on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a> shows what leads to what.',
    note: 'WhatsApp is the quickest way to reach us. Our number is Indian and we have no office in the UK, which is why we mention it.',
    formNote: 'No payment details. We reply once to arrange a time.'
  },

  footer: {
    cols: [
      { h4: 'Maths', links: [
        { href: '/11-plus-maths-tuition', label: '11 plus maths tuition' },
        { href: '/courses/11-plus-maths-preparation-course-uk', label: '11 plus maths course' },
        { href: '/courses/mental-maths-mastery-kids', label: 'Mental maths' },
        { href: '/courses/gcse-mathematics-mastery', label: 'GCSE maths' }
      ] },
      { h4: 'In the UK', links: [
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/11-plus-maths-tuition-kent', label: '11 plus maths in Kent' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/online-coding-classes-for-kids-uk', label: 'Classes for UK children' }
      ] }
    ],
    bottomRight: 'The maths is ours to teach; the test belongs to TBGS'
  },

  personalityCss: `
.ag-root.ag-bkm .ag-hero h1 { letter-spacing: -0.021em; }
.ag-root.ag-bkm .ag-capsule { border-left-width: 6px; }
.ag-root.ag-bkm .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-bkm .ag-table caption { text-align: left; font-weight: 650; letter-spacing: 0.01em; }
.ag-root.ag-bkm .ag-table td:nth-child(3) { font-variant-numeric: tabular-nums; }
.ag-root.ag-bkm .ag-spec dt { letter-spacing: 0.09em; }
.ag-root.ag-bkm .ag-three h3 { letter-spacing: -0.01em; }
.ag-root.ag-bkm .ag-slots { gap: 1.2rem; }
`,

  mustMention: ['Secondary Transfer Test Score', 'The Buckinghamshire Grammar Schools', 'one raw mark', 'audio file', 'Milton Keynes is not in Buckinghamshire', 'Sir William Borlase', 'parts per 100', 'does not endorse tutoring']
};
