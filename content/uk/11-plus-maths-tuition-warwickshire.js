'use strict';
// 11 plus maths tuition in Warwickshire (ag- maths door by area, UK cluster Phase 6).
// Read on 26 September 2026 by curl, quotes grepped from the raw text:
//  - Warwickshire County Council, grammar schools in Warwickshire: "There are six selective grammar schools in
//    Warwickshire, all of whom allocate their places based on the results achieved in the 11+ test"; free to attend and
//    no cost to sit the test; King Edward VI School, Stratford-upon-Avon (boys only); Stratford Girls' Grammar School
//    (girls only); Alcester Grammar School (boys and girls); Lawrence Sheriff School, Rugby (boys only); Rugby High School,
//    Rugby (girls only), "Do not confuse with Rugby School, which is a fee-paying school"; Ashlawn School, Rugby (boys and
//    girls), "a bi-lateral school which operates one selective class".
//  - Council, the 11+ test: "shared test between the Warwickshire, Birmingham, Walsall, Wolverhampton and Shropshire
//    Grammar Schools"; results can be shared across authorities if registered by the deadline; "Although it closely
//    relates to the curriculum that children are taught in schools, the level of difficulty may go beyond the levels that
//    children are expected to be achieving by the end of Key Stage 2"; "four sections: English, Verbal Reasoning,
//    Non-Verbal Reasoning and Mathematics"; "multiple-choice format"; "Each of the two tests will take around 60 minutes to
//    complete (including spoken instructions at the start and explanations of the practice items)"; raw data standardised
//    and weighted to a total score.
//  - Council, register for the 11+: "Registration for the 11+ opens on 7 May each year for those children currently in
//    Year 5. Candidates must register by the deadline of 30 June."; testing in September of Year 6; Parent Portal.
//  - Council, 2027 entry schedule: 7 May 2026 opening; 30 June 2026 deadline (and access arrangements deadline); invite
//    letters week commencing 10 August 2026; tests 12 and 13 September 2026; results on the Parent Portal 16 October 2026.
//    (A council news item calls 30 June 2026 a Monday; it is a Tuesday. The date is printed, not the weekday.)
//  - Council, applying: places for scores meeting "the minimum academic standard for that entry year" (admissions; not
//    discussed further).
//  - GL familiarisation guide (2022 edition, hosted by the council): "The Mathematics section will draw upon what you have
//    been taught in class; however, there may be some questions that are more challenging than what you are used to."
//  - National curriculum in England, mathematics, Year 5: "solve problems involving multiplication and division, including
//    scaling by simple fractions and problems involving simple rates"; "solve addition and subtraction multi-step problems
//    in contexts, deciding which operations and methods to use and why".
// Spine: the council itself says the difficulty may go beyond end-of-KS2 expectations while staying close to the
// curriculum: depth, not new content. Lesson family: multi-step problems with rates and scaling (money, recipes).

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'elevenplus', tag: 'WARWICKSHIRE 11+', label: '11 plus maths in Warwickshire', blurb: 'Warwickshire says its test stays close to the curriculum but may be harder than end-of-Key-Stage-2 expectations. Depth, not new topics.' },
  slug: '11-plus-maths-tuition-warwickshire',
  code: 'wkm',
  accent: '#466B69',
  accentRationale: 'Warwickshire 11 plus maths: a grey-green of Avon willows, chosen by colour distance from every accent on the site (4.74:1 on the darkest paper tint)',
  pageType: 'governorate',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: '11 plus maths tuition in Warwickshire',
  title: '11 Plus Maths Tuition Warwickshire | Stratford, Rugby, Alcester',
  description: 'Live online 11 plus maths for Warwickshire grammar schools: a test the council says may go beyond Key Stage 2 difficulty, and multi-step Year 5 maths taught well.',
  ogDescription: 'Warwickshire County Council says its 11+ stays close to the curriculum but may be harder than end-of-Key-Stage-2 levels. What depth means in Year 5 maths.',
  twitterDescription: 'Warwickshire 11 plus maths, taught live online: depth over breadth, multi-step Year 5 problems.',
  pageName: '11 Plus Maths Tuition in Warwickshire',
  webPageDescription: 'Live online mathematics teaching for children preparing for the 11+ used by Warwickshire\'s six grammar schools, based on what Warwickshire County Council publishes.',
  courseDescription: 'Live online maths classes for Warwickshire children in Years 4 and 5, teaching Year 5 maths in depth, with multi-step problems, rates and scaling, for a multiple-choice test.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: '11 plus maths in Warwickshire',
  navLinks: [
    { href: '#county', label: 'The test' },
    { href: '#difficulty', label: 'Harder, not newer' },
    { href: '#multistep', label: 'Multi-step' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Warwickshire &middot; West Midlands Grammar Schools test maths &middot; Live online, small groups or one to one',
  h1: '11 plus maths tuition in Warwickshire',
  lede: 'Warwickshire County Council describes its 11 plus in a sentence worth reading slowly: "Although it closely relates to the curriculum that children are taught in schools, the level of difficulty may go beyond the levels that children are expected to be achieving by the end of Key Stage 2." Two claims sit in that sentence, and they point in the same direction. The content is familiar. The difficulty is not. So the answer is not to race ahead into secondary topics but to go deeper into primary ones, especially the kind of question that needs several steps, each easy on its own, in the right order. This page sets out what the council publishes about the test shared by Warwickshire\'s six grammar schools, then teaches that kind of question: multi-step problems with rates and scaling, straight from the Year 5 curriculum.',
  secondaryCta: { href: '#difficulty', label: 'See what harder means' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for my child for the Warwickshire 11 plus.',
  heroNote: 'Maths only &middot; We do not teach English, verbal or non-verbal reasoning &middot; No link with the council or schools',
  spec: [
    ['Schools', 'Six Warwickshire grammar schools'],
    ['Test', 'Shared across the West Midlands'],
    ['Sections', 'English, verbal, non-verbal, maths'],
    ['Format', 'Multiple choice'],
    ['Length', 'Two tests of about 60 minutes'],
    ['Difficulty', 'May go beyond end-of-KS2 levels'],
    ['Registration', '7 May to 30 June, each year'],
    ['We teach', 'Year 5 maths in depth']
  ],
  capsuleQ: 'In short',
  capsule: 'Warwickshire County Council says the county has six selective grammar schools, in Stratford-upon-Avon, Alcester and Rugby, all allocating places by the 11+, which is free to sit. The test is shared with the grammar schools of Birmingham, Walsall, Wolverhampton and Shropshire: two multiple-choice tests of about 60 minutes each, covering English, verbal reasoning, non-verbal reasoning and mathematics. The council says it "closely relates to the curriculum" but that its difficulty "may go beyond the levels" expected by the end of Key Stage 2. Registration opens on 7 May each year for children in Year 5 and closes on 30 June; for 2027 entry the test was on 12 and 13 September 2026, with results on the Parent Portal on 16 October. We teach the maths deeply, live online. The first lesson is free; afterwards lessons cost USD 100 a month in a small group or USD 150 a month individually.',

  picks: {
    eyebrow: 'Starting points in Warwickshire',
    h2: 'Three courses for a harder paper',
    lede: 'The test is harder, not broader. Choose by how your child handles a problem with three steps.',
    items: [
      { course: '11-plus-maths-preparation-course-uk', code: 'WARKS / 1', title: '11 plus maths, in depth', note: 'Year 5 content taken to the difficulty the council describes, through multi-step problems.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'WARKS / 2', title: 'Stretch and challenge', note: 'For confident children who need problems with no obvious first step.' },
      { course: 'mental-maths-mastery-kids', code: 'WARKS / 3', title: 'Number facts at speed', note: 'Every step goes faster when the arithmetic inside it is automatic.' }
    ]
  },

  sections: [
    {
      id: 'county', tint: 'tint', eyebrow: 'The Warwickshire test',
      h2: 'What Warwickshire County Council publishes',
      lede: 'The council coordinates the 11+ for its six grammar schools and publishes the schedule, format and schools. Read on 26 September 2026.',
      body: [
        { kind: 'table', caption: 'Warwickshire\'s 11+ schedule for September 2027 entry, from the county council', head: ['Date', 'Step', 'Detail'], rows: [
          ['7 May 2026', 'Registration opens', 'Through the council\'s Parent Portal, for children in Year 5.'],
          ['30 June 2026', 'Registration closes', 'Also the deadline for access arrangements and evidence.'],
          ['Week of 10 August 2026', 'Invitations', 'Letters to the test sent out.'],
          ['12 and 13 September 2026', 'Tests', 'Early in Year 6.'],
          ['16 October 2026', 'Results', 'Available on the Parent Portal.']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The council says the test "is currently operated as a shared test between the Warwickshire, Birmingham, Walsall, Wolverhampton and Shropshire Grammar Schools", with the same papers used across all of them. Results can be shared across authorities if the relevant box is ticked on time.',
            'It describes "four sections: English, Verbal Reasoning, Non-Verbal Reasoning and Mathematics", in "multiple-choice format". "Each of the two tests will take around 60 minutes to complete (including spoken instructions at the start and explanations of the practice items)." Raw marks are standardised and weighted into a total score.'
          ],
          right: [
            'Registration follows a standing rule: it "opens on 7 May each year for those children currently in Year 5. Candidates must register by the deadline of 30 June." For today\'s Year 5, that points to 7 May to 30 June 2027; the council will confirm the dates.',
            'Places depend on each school\'s admission arrangements and on whether a score meets the minimum standard set for that year. That is for the council and schools to explain, and we do not.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.warwickshire.gov.uk/grammar-schools-11-test/11-test" rel="noopener" target="_blank">Warwickshire County Council, the 11+ test</a>, with its pages on <a class="ag-inline-link" href="https://www.warwickshire.gov.uk/grammar-schools-11-test/grammar-schools-warwickshire" rel="noopener" target="_blank">grammar schools in Warwickshire</a>, <a class="ag-inline-link" href="https://www.warwickshire.gov.uk/grammar-schools-11-test/register-11-test" rel="noopener" target="_blank">registering for the test</a> and applying; the GL familiarisation guide hosted by the council. Modern Age Coders has no connection with the council, GL Assessment or any school.' }
      ]
    },
    {
      id: 'difficulty', tint: 'plain', eyebrow: 'Harder, not newer',
      h2: 'What "may go beyond Key Stage 2" does and does not mean',
      lede: 'The council\'s sentence is easy to misread as "includes secondary maths". Read with the familiarisation guide, it says something more useful.',
      body: [
        { kind: 'two',
          leftH3: 'What it does not mean',
          left: [
            'The council says the test "closely relates to the curriculum that children are taught in schools". The familiarisation guide it hosts says "The Mathematics section will draw upon what you have been taught in class". Neither suggests algebra, ratio or other topics that arrive later.',
            'So a family that responds by teaching Year 7 maths to a nine-year-old is solving the wrong problem. The content is primary. What changes is how the content is asked.'
          ],
          rightH3: 'What it does mean',
          right: [
            'The same guide adds that "there may be some questions that are more challenging than what you are used to". In practice, harder questions on familiar content usually mean more steps, less signposting and numbers that do not come out neatly.',
            'That is exactly what the Year 5 curriculum calls "multi-step problems in contexts, deciding which operations and methods to use and why". Deciding is the hard part. Each individual calculation is ordinary.'
          ] },
        { kind: 'p', html: 'There is a practical reason depth matters for this test in particular. With four kinds of question in each paper and a spoken timetable guiding the sections, there is little time to puzzle over what a maths question wants. A child who has met many multi-step problems recognises the shape quickly and spends the time on the steps.' }
      ]
    },
    {
      id: 'multistep', tint: 'deep', eyebrow: 'The lesson',
      h2: 'Multi-step problems with rates and scaling',
      lede: 'The Year 5 curriculum asks children to solve problems "including scaling by simple fractions and problems involving simple rates". Here is how a single idea becomes a harder question.',
      body: [
        { kind: 'table', caption: 'One topic at rising levels of difficulty (our own questions)', head: ['Level', 'Question', 'Steps and answer'], rows: [
          ['One step', 'A box holds 35 crayons. How many crayons are in 6 boxes?', '6 × 35 = 210'],
          ['Two steps', 'A class has 500 crayons and gives away 6 boxes of 35. How many are left?', '210 given away, then 500 - 210 = 290'],
          ['Three steps', 'A pack of 8 batteries gives 240 hours of use in total. Another brand gives 35 hours per battery. How many more hours per battery does the other brand give?', '240 ÷ 8 = 30 hours; 35 - 30 = 5 more hours per battery'],
          ['Scaling', 'A recipe for 12 biscuits uses 150 g of butter. How much for 30 biscuits?', '150 ÷ 12 = 12.5 g each; × 30 = 375 g. Or 150 × 2.5 = 375 g'],
          ['Rate', 'A tap fills a 24-litre tank in 8 minutes. How long for a 60-litre tank?', '3 litres a minute; 60 ÷ 3 = 20 minutes']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Every step in that table is a calculation a Year 5 child can do. The difficulty the council describes lives in the choosing: which operation first, what to do with the answer, when to stop. The battery question in the third row is the same topic as the first, made harder only by needing a per-battery figure, a comparison and a subtraction.',
            'On a multiple-choice paper, the wrong options for a question like that are usually the answers you get by stopping one step early: 30, or 240, or 35. A child who knows what the question asks for at the end does not fall for them.'
          ],
          right: [
            'We teach one habit for multi-step problems: write down what the question wants before calculating anything. "Extra hours per battery." Then work backwards: to find a difference per battery I need two per-battery figures; I have one; the other needs a division. The plan is three short lines, and the arithmetic follows.',
            'Scaling problems reward flexibility. The biscuit recipe can be solved per biscuit or by noticing that 30 is two and a half times 12. Children who can see both routes check one against the other, which is a quiet advantage on a harder paper.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study/national-curriculum-in-england-mathematics-programmes-of-study" rel="noopener" target="_blank">national curriculum in England, mathematics</a>, Year 5 addition and subtraction, and multiplication and division (statutory requirements). The questions are written by Modern Age Coders.' }
      ]
    },
    {
      id: 'shared', tint: 'tint', eyebrow: 'A shared test',
      h2: 'The same papers across the West Midlands',
      lede: 'Because Warwickshire shares its test with Birmingham, Walsall, Wolverhampton and Shropshire, what is published about the test elsewhere applies here too.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Same papers', p: 'The council says the same test papers are used across all the authorities, so a child in Rugby sits what a child in Sutton Coldfield sits.' },
          { h3: 'Same rules', p: 'The familiarisation guide lists the same equipment rules for everyone. Our Birmingham page looks at what having no ruler or protractor means for geometry.' },
          { h3: 'Same maths', p: 'Mathematics is one of four sections in each paper. We teach that section only, and in depth, since the council says it may be harder than usual.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'For more on the test from the Birmingham side, including the audio-timed sections and the equipment rules, see our <a class="ag-inline-link" href="/11-plus-maths-tuition-birmingham">Birmingham 11 plus page</a>.',
            'We write our own questions and do not reproduce GL familiarisation material or any test content.'
          ],
          right: [
            'English, verbal reasoning and non-verbal reasoning make up the rest of each paper. We do not teach them for the test, and say so plainly before anyone books.',
            'The council also points some families to a free online Key Stage 2 learning and familiarisation programme run with a partner. Check the council\'s registration page to see whether your child qualifies before paying anyone, us included.'
          ] }
      ]
    },
    {
      id: 'schools', tint: 'plain', eyebrow: 'Warwickshire\'s six',
      h2: 'Stratford, Alcester and Rugby, taught online',
      lede: 'The council names the six grammar schools. We reproduce the list only to show which test this page covers.',
      body: [
        { kind: 'table', caption: 'Warwickshire\'s grammar schools, as the county council lists them', head: ['School', 'Town', 'As described'], rows: [
          ['King Edward VI School', 'Stratford-upon-Avon', 'Boys only'],
          ['Stratford Girls\' Grammar School', 'Stratford-upon-Avon', 'Girls only'],
          ['Alcester Grammar School', 'Alcester', 'Boys and girls'],
          ['Lawrence Sheriff School', 'Rugby', 'Boys only'],
          ['Rugby High School', 'Rugby', 'Girls only; not to be confused with fee-paying Rugby School'],
          ['Ashlawn School', 'Rugby', 'A bi-lateral school with one selective class']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Lessons are live on video, in groups of five to ten matched by level, so a child in Warwick, Leamington Spa, Nuneaton or Kenilworth learns the same way as one in Stratford or Rugby.',
            'For coding in the county, see our <a class="ag-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>, which lists every area we cover.'
          ],
          right: [
            'The council notes that the schools are free to attend and that there is no cost to sit the test.',
            'We have no connection with the council, GL Assessment or any of these schools, and we do not advise on applications or places.'
          ] },
        { kind: 'source', html: 'Source: Warwickshire County Council, grammar schools in Warwickshire, read 26 September 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Towards September 2027',
    h2: 'Four stages, getting deeper each term',
    lede: 'For today\'s Year 5, registration should open in May 2027 and the test fall early in Year 6.',
    table: { caption: 'From single steps to several', head: ['When', 'Stage', 'Signs of progress'], rows: [
      ['Autumn, Year 5', '1. Secure facts', 'Tables, money and place value handled without hesitation'],
      ['Winter, Year 5', '2. Two-step problems', 'Chooses the right two operations and checks the answer makes sense'],
      ['Spring, Year 5', '3. Three steps and more', 'Plans a solution in writing before calculating'],
      ['Summer holiday', '4. Timed sections', 'Multi-step questions answered within a section\'s time']
    ] },
    left: { h3: 'Starting later', ps: [
      'Even a spring start helps if facts come first. Multi-step work collapses when the single steps are slow.',
      'We will tell you honestly at the first lesson how far the time can go.'
    ] },
    right: { h3: 'After October', ps: [
      'Multi-step reasoning is the core of secondary maths and science. Some pupils carry on with <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a>, where every program is a multi-step problem.',
      'Others enjoy the problem-solving challenges on our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'Courses',
    h2: 'Maths and coding for Warwickshire families',
    lede: 'By stage, each linked to a full syllabus.',
    bands: [
      { num: 'I', h3: 'For the Warwickshire 11+', sub: 'Years 3 to 5', courses: [
        { code: 'WKM / i', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths, Warwickshire', blurb: 'Year 5 maths, taken deeper.' },
        { code: 'WKM / ii', slug: 'olympiad-competition-mathematics-mastery', title: 'Challenge maths for keen pupils', blurb: 'Multi-step, non-routine problems.' },
        { code: 'WKM / iii', slug: 'mental-maths-mastery-kids', title: 'Mental arithmetic course', blurb: 'Fast steps inside long problems.' },
        { code: 'WKM / iv', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths foundations', blurb: 'Years 1 to 5, made secure.' }
      ] },
      { num: 'II', h3: 'Secondary', sub: 'Year 6 on', courses: [
        { code: 'WKM / v', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Key Stage 3 mathematics', blurb: 'Ratio, algebra and problem solving.' },
        { code: 'WKM / vi', slug: 'gcse-mathematics-mastery', title: 'GCSE maths preparation', blurb: 'Every board, both tiers.' },
        { code: 'WKM / vii', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus for younger siblings', blurb: 'A visual start to number.' }
      ] },
      { num: 'III', h3: 'Coding', sub: 'Steps in code', courses: [
        { code: 'WKM / viii', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Break a problem into steps a computer follows.' },
        { code: 'WKM / ix', slug: 'scratch-programming-complete-course', title: 'Scratch coding, beginners', blurb: 'Sequencing and logic in blocks.' },
        { code: 'WKM / x', slug: 'python-ai-kids-masterclass', title: 'Python for young coders', blurb: 'The step to typed programs.' }
      ] },
      { num: 'IV', h3: 'Later', sub: 'Teenagers', courses: [
        { code: 'WKM / xi', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic calculation methods', blurb: 'Speed, once understanding is firm.' },
        { code: 'WKM / xii', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning, teens', blurb: 'Multi-step thinking, automated.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'When lessons run',
    h2: 'Scheduled for a Warwickshire school week',
    lede: 'Teaching is live from India. Primary pupils have lessons after school or on weekend mornings, set in UK time; the twice-yearly clock change is handled at our end.',
    slots: [
      { time: 'After school, weekdays', l: 'Early, before tiredness.' },
      { time: 'Weekend mornings', l: 'For busy weekday diaries.' },
      { time: 'Holidays', l: 'Short extra sessions.' }
    ],
    cells: [
      { h3: 'Same teacher', p: 'Continuity, so habits are noticed.' },
      { h3: 'Honest notes', p: 'Short updates after lessons.' },
      { h3: 'Five to ten children', p: 'Grouped by level.' },
      { h3: 'Our own questions', p: 'No GL or council material copied.' },
      { h3: 'One to one', p: 'For targeted help.' },
      { h3: 'Maths only', p: 'No reasoning or English coaching; no admissions advice.' }
    ]
  },

  projectsH2: 'Where multi-step thinking leads',
  projectsLede: 'Four projects published by students at our school, each built step by step from primary maths. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parents\' words from Google, unchanged.',

  fees: {
    h2: 'Fees',
    lede: 'Monthly, in US dollars, at one rate for all families outside India. No registration fee; leave any month.',
    free: ['A real lesson', 'A frank assessment', 'No card needed'],
    group: ['Five to ten children at one level', 'A regular teacher', 'Work discussed in class', 'A certificate at the end'],
    one: ['One child, one teacher', 'Focused on multi-step problems', 'Flexible scheduling']
  },

  faq: {
    eyebrow: 'Warwickshire questions',
    h2: 'What Warwickshire families ask us',
    items: [
      { q: 'What is in the Warwickshire 11+?', a: 'The council says the West Midlands Grammar Schools tests contain four sections, English, verbal reasoning, non-verbal reasoning and mathematics, in multiple-choice format, over two tests of about 60 minutes each.' },
      { q: 'Is the Warwickshire test the same as Birmingham\'s?', a: 'Yes. The council says it is a shared test with the Birmingham, Walsall, Wolverhampton and Shropshire grammar schools, using the same papers.' },
      { q: 'Is the maths harder than Key Stage 2?', a: 'The council says the test closely relates to the curriculum, but that its level of difficulty may go beyond what children are expected to reach by the end of Key Stage 2. That means harder questions on familiar content, not new topics.' },
      { q: 'When do we register?', a: 'The council says registration opens on 7 May each year for children in Year 5 and closes on 30 June. For 2027 entry, the test was on 12 and 13 September 2026.' },
      { q: 'Which schools use the test in Warwickshire?', a: 'King Edward VI School and Stratford Girls\' Grammar School in Stratford-upon-Avon, Alcester Grammar School, and Lawrence Sheriff School, Rugby High School and Ashlawn School in Rugby.' },
      { q: 'Is Rugby High School the same as Rugby School?', a: 'No. The council notes that Rugby High School is a girls\' grammar school and should not be confused with Rugby School, which is fee-paying.' },
      { q: 'Does it cost anything to sit the test?', a: 'No. The council says there is no cost for a child to sit the 11+ test.' },
      { q: 'Do you teach the reasoning sections?', a: 'No. We teach mathematics only, and we do not advise on applications or places.' },
      { q: 'Should my child learn secondary maths?', a: 'No. The council and the familiarisation guide both point to the curriculum children are taught; the extra difficulty is in how questions are asked. Depth in Year 5 maths is the preparation.' },
      { q: 'What do lessons cost?', a: 'The first lesson costs nothing. Continuing is USD 100 a month in a group or USD 150 a month one to one.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related',
    h2: 'More for Warwickshire and the West Midlands',
    lede: 'The same test seen from Birmingham, our national page, and other nearby pages.',
    items: [
      { href: '/11-plus-maths-tuition-birmingham', label: '11 plus maths in Birmingham', p: 'The same test, with its equipment rules explained.' },
      { href: '/11-plus-maths-tuition', label: '11 plus maths tuition', p: 'The national overview.' },
      { href: '/coding-classes-in-birmingham', label: 'Coding classes in Birmingham', p: 'Programming for West Midlands children.' },
      { href: '/11-plus-maths-tuition-gloucestershire', label: '11 plus maths in Gloucestershire', p: 'A neighbouring county with a new July test.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar', p: 'Maths challenges by date.' },
      { href: '/coding-classes-in-united-kingdom', label: 'All our UK pages', p: 'Every UK area.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us your child\'s year and how they cope with longer problems. We teach a real lesson and then tell you plainly what we saw.',
    readFirst: 'Want to read first? See our <a class="ag-inline-link" href="/courses">courses</a>, <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a>.',
    note: 'WhatsApp gets the quickest reply. We are in India, with an Indian number and no UK office.',
    formNote: 'No card details. One reply to arrange a time.'
  },

  footer: {
    cols: [
      { h4: 'Maths', links: [
        { href: '/11-plus-maths-tuition', label: '11 plus maths tuition' },
        { href: '/courses/11-plus-maths-preparation-course-uk', label: '11 plus maths course' },
        { href: '/courses/olympiad-competition-mathematics-mastery', label: 'Challenge maths' },
        { href: '/courses/maths-through-coding', label: 'Maths through coding' }
      ] },
      { h4: 'West Midlands and national', links: [
        { href: '/11-plus-maths-tuition-birmingham', label: '11 plus maths in Birmingham' },
        { href: '/coding-classes-in-birmingham', label: 'Coding in Birmingham' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] }
    ],
    bottomRight: 'The schools share the test; we teach the maths'
  },

  personalityCss: `
.ag-root.ag-wkm .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-wkm .ag-capsule { border-left-width: 7px; border-radius: 0 8px 8px 0; }
.ag-root.ag-wkm .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-wkm .ag-table caption { text-align: left; font-weight: 650; letter-spacing: 0.01em; }
.ag-root.ag-wkm .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-wkm .ag-spec dt { letter-spacing: 0.12em; }
.ag-root.ag-wkm .ag-three h3 { letter-spacing: -0.009em; }
.ag-root.ag-wkm .ag-slots { gap: 1.06rem; }
`,

  mustMention: ['Lawrence Sheriff School', 'Stratford Girls\' Grammar School', 'Alcester Grammar School', 'Rugby High School', 'Ashlawn School', 'may go beyond the levels', 'simple rates', 'bi-lateral']
};
