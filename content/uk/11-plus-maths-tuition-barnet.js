'use strict';
// 11 plus maths tuition in Barnet (ag- maths door by area, UK cluster Phase 6).
// Read on 26 September 2026 by curl, quotes grepped from the raw text. The London Borough of Barnet's admissions
// pages served an automated-traffic interruption page; not retried. Everything below is from the three schools.
//  - Queen Elizabeth's School, admissions: "a selective, non-denominational and non-fee-paying School"; September 2027
//    entry: entrance test request form available 1 May 2026; deadline for test requests 8 July 2026 (noon); entrance
//    test 16 and 17 September 2026, "Boys come to the School on one of these days to sit multiple-choice tests in Maths
//    and English"; 1 October 2026 provisional date for results.
//  - QE, Secondary Transfer Entrance Test FAQs: "We only have one round of testing in a single session"; "two
//    multiple-choice format papers in English and Mathematics sat in a single session"; no past papers, sample papers
//    on the website; scores standardised for age by the test supplier and combined; "a combined score of 225 or higher
//    will be deemed to have met the standard required by the Governors to be eligible to be considered for admission".
//  - QE sample test papers page: links to GL Assessment English and Maths materials.
//  - The Henrietta Barnett School, admissions: "Admission ... for Year 7 is by academic selection, with a First Round
//    Entrance Test in Verbal, Non-Verbal reasoning and English, followed by a Second Round English and Mathematics
//    test"; Round One 2, 3 and 4 September 2026; outcome by 28 September; "The top 300 candidates will be invited to sit
//    Round Two of the Entrance Test on Tuesday 6th October"; "Round Two will consist of a 60 minute English paper and a
//    50 minute Maths paper"; no further detail, no past papers or resources for Round Two; GL familiarisation booklets
//    for Round One. (HBS policy and FAQ PDFs are image-only; nothing quoted from them.)
//  - St Michael's Catholic Grammar School, admissions 2027-28: applications opened 9am Tuesday 14 April 2026, deadline
//    4pm Tuesday 7 July 2026; "Entrance tests for September 2027 entry (by invitation only) will be held on Friday 11
//    September 2026"; familiarisation papers for "the multiple choice entrance tests" (VR, NVR and Maths, designed by
//    the test provider); "The English test is a written paper, not multiple choice"; no further information on style and
//    timings; baptised Catholic girls criteria (admissions, not used beyond "by invitation").
//  - National curriculum in England, mathematics, Year 5: "identify multiples and factors, including finding all
//    factor pairs of a number, and common factors of 2 numbers"; "know and use the vocabulary of prime numbers, prime
//    factors and composite (non-prime) numbers"; "establish whether a number up to 100 is prime and recall prime numbers
//    up to 19"; "recognise and use square numbers and cube numbers".
// Spine: three schools, three structures; maths arrives at a different point in each. Lesson family: factors, factor
// pairs and primes up to 100 (only 2, 3, 5 and 7 need testing).

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'elevenplus', tag: 'BARNET: QE, HBS, ST MICHAEL\'S', label: '11 plus maths in Barnet', blurb: 'Three Barnet grammar schools, three tests, and maths turns up at a different moment in each.' },
  slug: '11-plus-maths-tuition-barnet',
  code: 'btm',
  accent: '#3F4C1B',
  accentRationale: 'Barnet 11 plus maths: a dark olive, chosen by colour distance from every accent on the site (7.48:1 on the darkest paper tint)',
  pageType: 'governorate',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: '11 plus maths tuition in Barnet',
  title: '11 Plus Maths Tuition Barnet | QE, HBS and St Michael\'s Tests',
  description: 'Live online 11 plus maths for Barnet\'s three grammar school tests: QE\'s single session, Henrietta Barnett\'s Round Two maths paper, and St Michael\'s.',
  ogDescription: 'Barnet has three grammar schools with three different tests. At one the maths comes in the only sitting; at another it waits for a second round. How we prepare for all three.',
  twitterDescription: 'Barnet 11 plus maths, taught live online: QE, Henrietta Barnett and St Michael\'s, Year 5 maths throughout.',
  pageName: '11 Plus Maths Tuition in Barnet',
  webPageDescription: 'Live online mathematics teaching for children preparing for the entrance tests of Queen Elizabeth\'s School, The Henrietta Barnett School and St Michael\'s Catholic Grammar School, based on what the schools publish.',
  courseDescription: 'Live online maths classes for children in Years 4 and 5 preparing for Barnet\'s grammar school tests, teaching the Year 5 curriculum in depth for multiple-choice and school-set papers.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: '11 plus maths in Barnet',
  navLinks: [
    { href: '#three', label: 'Three tests' },
    { href: '#timing', label: 'When maths counts' },
    { href: '#factors', label: 'Factors' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Barnet &middot; Grammar school entrance test maths &middot; Live online, small groups or one to one',
  h1: '11 plus maths tuition in Barnet',
  lede: 'Barnet has no single 11 plus. Its three grammar schools, Queen Elizabeth\'s School, The Henrietta Barnett School and St Michael\'s Catholic Grammar School, each run their own entrance test, and maths appears in each at a different moment. At QE it is one of two multiple-choice papers in a single sitting. At Henrietta Barnett there is no maths in the first round at all; it arrives as a 50-minute paper in Round Two, for the top 300 from Round One, about a month later. At St Michael\'s it sits among multiple-choice papers taken by invitation. The one thing all three share is the content, which is primary school maths, and it pays to know it deeply rather than in outline. This page sets out what each school publishes, and uses one Year 5 topic, factors and primes, to show what deep means.',
  secondaryCta: { href: '#factors', label: 'See the factors lesson' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for my child for the Barnet grammar school tests.',
  heroNote: 'Maths only &middot; No verbal, non-verbal or English coaching &middot; No link with any Barnet school',
  spec: [
    ['Schools', 'QE, Henrietta Barnett, St Michael\'s'],
    ['Tests', 'Three, one per school'],
    ['QE', 'Maths and English, one sitting'],
    ['Henrietta Barnett', 'Maths only in Round Two'],
    ['St Michael\'s', 'Multiple-choice papers, by invitation'],
    ['Maths paper at HBS', '50 minutes'],
    ['Past papers', 'None published by any of the three'],
    ['We teach', 'Primary maths in depth']
  ],
  capsuleQ: 'In short',
  capsule: 'Barnet\'s three selective state schools set their own tests. Queen Elizabeth\'s School holds one sitting of two multiple-choice papers, maths and English; for September 2027 entry it ran on 16 and 17 September 2026, and QE publishes a combined score of 225 or higher as the standard its Governors require. The Henrietta Barnett School tests verbal reasoning, non-verbal reasoning and English in Round One, then invites its top 300 to a Round Two of a 60-minute English paper and a 50-minute maths paper, on 6 October 2026 for this cycle. St Michael\'s Catholic Grammar School holds entrance tests by invitation, with multiple-choice papers including maths and a written English paper, on 11 September 2026 this cycle. None of the three publishes past papers. We teach the maths, live online, deep enough for any of them. Try a lesson without paying; staying on costs USD 100 monthly in a group or USD 150 monthly for one to one.',

  picks: {
    eyebrow: 'Starting points in Barnet',
    h2: 'Three courses, whichever school',
    lede: 'Depth matters more than format here: none of the three schools shows its papers.',
    items: [
      { course: '11-plus-maths-preparation-course-uk', code: 'BARNET / i', title: 'Primary maths for three tests', note: 'Year 5 content taught deeply enough for a QE sitting, a St Michael\'s paper or a Round Two at HBS.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'BARNET / ii', title: 'Problems without a recipe', note: 'For confident children aiming at a school-set paper with no published resources.' },
      { course: 'mental-maths-mastery-kids', code: 'BARNET / iii', title: 'Number facts at speed', note: 'Tables, squares and primes known by heart, so harder questions get the time.' }
    ]
  },

  sections: [
    {
      id: 'three', tint: 'tint', eyebrow: 'Three schools, three tests',
      h2: 'What each Barnet grammar school publishes',
      lede: 'The London Borough of Barnet\'s admissions pages would not load for our reader, so this page relies on the three schools\' own admissions pages, read on 26 September 2026.',
      body: [
        { kind: 'table', caption: 'Barnet\'s three grammar school tests for September 2027 entry, as each school publishes them', head: ['School', 'Where the maths is', 'Dates this cycle'], rows: [
          ['Queen Elizabeth\'s School', 'Two multiple-choice papers, maths and English, "sat in a single session"', 'Requests 1 May to noon, 8 July 2026; test 16 and 17 September 2026; results provisionally 1 October'],
          ['The Henrietta Barnett School', 'Round One has no maths; Round Two has "a 50 minute Maths paper"', 'Round One 2 to 4 September 2026; Round Two Tuesday 6 October 2026 for the top 300'],
          ['St Michael\'s Catholic Grammar School', 'Multiple-choice entrance tests including maths; English is a written paper', 'Applications 14 April to 4pm, 7 July 2026; tests Friday 11 September 2026, by invitation']
        ] },
        { kind: 'two', mt: true,
          left: [
            'QE describes its test briefly and clearly: "We only have one round of testing in a single session." Its two papers are multiple choice, the scores are standardised for age by the company that supplies the tests and then combined, and "a combined score of 225 or higher" meets the standard its Governors require for a boy to be considered. QE links GL Assessment\'s maths familiarisation materials from its sample papers page.',
            'Henrietta Barnett\'s first round is "in Verbal, Non-Verbal reasoning and English", with GL familiarisation booklets available. Its second round, for the 300 highest-ranked candidates, adds "a 50 minute Maths paper". The school says it gives no further detail of content and releases no past papers or resources for Round Two.'
          ],
          right: [
            'St Michael\'s holds its entrance tests by invitation. Its familiarisation page offers papers designed by the test provider for verbal reasoning, non-verbal reasoning and maths, and notes that these "are not reproductions of past papers". The English test "is a written paper, not multiple choice", and the school says it cannot give further information on style or timings.',
            'How each school uses its results for places, including priority rules, is published in each admissions policy and is not something we advise on. We teach the maths.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.qebarnet.co.uk/admissions-information/secondary-transfer-entrance-test-faqs/" rel="noopener" target="_blank">Queen Elizabeth\'s School, entrance test FAQs</a>, admissions and sample papers pages; <a class="ag-inline-link" href="https://www.hbschool.org.uk/admissions/" rel="noopener" target="_blank">The Henrietta Barnett School, admissions</a>; <a class="ag-inline-link" href="https://www.st-michaels.barnet.sch.uk/home/admissions/admissions-2027-28/" rel="noopener" target="_blank">St Michael\'s Catholic Grammar School, admissions 2027-28</a> and familiarisation page. Barnet council\'s admissions pages were not readable to us. Modern Age Coders has no connection with any of these schools or the council.' }
      ]
    },
    {
      id: 'timing', tint: 'plain', eyebrow: 'When the maths counts',
      h2: 'Same subject, three different moments',
      lede: 'For a family applying to more than one of these schools, the calendar of maths matters as much as the content.',
      body: [
        { kind: 'three', cells: [
          { h3: 'QE: all at once', p: 'Maths and English in one sitting in mid-September. There is no second chance at a later round, so the maths has to be ready by then, alongside the English.' },
          { h3: 'HBS: later, and alone', p: 'Round One in early September has no maths. The 50-minute maths paper comes in October, only for those invited, and the school publishes nothing about its content.' },
          { h3: 'St Michael\'s: among others', p: 'Maths is one of several multiple-choice papers on a single day in September, taken with verbal and non-verbal reasoning and a written English paper.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'Henrietta Barnett\'s pattern is the unusual one. A child can be strong in maths and never reach the maths paper, because Round One ranks on verbal, non-verbal and English. And a child who does reach Round Two has about a month between the rounds, during which maths is suddenly the whole story.',
            'That month is not the time to begin maths preparation. It is the time to keep it warm. We plan for a child applying to HBS to finish the Year 5 content well before September, then to hold it with short, regular practice through the first round.'
          ],
          right: [
            'For QE, maths shares one sitting with English. Its FAQ explains that the two scores are combined, so strength in one paper can support the other. We do not speculate about balance; we make sure the maths is not the weaker paper.',
            'St Michael\'s publishes provider-designed maths familiarisation booklets and a parents\' guide. Families should use those to see the format. We do not copy them, and the school asks that others do not reproduce them.'
          ] }
      ]
    },
    {
      id: 'factors', tint: 'deep', eyebrow: 'What deep looks like',
      h2: 'Factors and primes, all the way down',
      lede: 'With no past papers from any of the three schools, depth in the curriculum is the only safe preparation. Factors and primes show what depth means in Year 5.',
      body: [
        { kind: 'table', caption: 'One Year 5 topic, from recall to reasoning (our own questions)', head: ['Level', 'Question', 'What it takes'], rows: [
          ['Recall', 'List the prime numbers up to 19.', '2, 3, 5, 7, 11, 13, 17, 19: known, not worked out'],
          ['Method', 'Find all the factor pairs of 36.', '1 × 36, 2 × 18, 3 × 12, 4 × 9, 6 × 6: nine factors in all'],
          ['Connection', 'Why does 36 have an odd number of factors when 24 has an even number?', '36 is a square number: 6 pairs with itself'],
          ['Test', 'Is 91 prime?', 'No: 91 = 7 × 13, the classic trap'],
          ['Reasoning', 'Which numbers must you try to show that 97 is prime?', 'Only 2, 3, 5 and 7, because 11 × 11 = 121 is already past 100']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The national curriculum for Year 5 asks children to "identify multiples and factors, including finding all factor pairs of a number, and common factors of 2 numbers", to use the words prime, prime factor and composite, and to "establish whether a number up to 100 is prime and recall prime numbers up to 19". Those are the first two rows.',
            'The last three rows are the same topic, pushed. They are still Year 5; nothing in them needs algebra or Year 6. But a child who can answer them has understood factors, not just memorised a list, and that difference shows the moment a question is written in a way they have not met.'
          ],
          right: [
            'The last row is the one we enjoy most. To decide whether a number up to 100 is prime, you only need to try dividing by 2, 3, 5 and 7. Any factor larger than 10 would have to pair with one smaller than 10, and those smaller ones have already been tried. It is a proof a Year 5 child can follow, and it turns a slow search into four quick checks.',
            'Common factors follow the same way. The common factors of 24 and 36 are 1, 2, 3, 4, 6 and 12, and a child who lists factor pairs neatly finds them without guessing. Squares, primes, factor pairs: one idea seen from several sides.'
          ] },
        { kind: 'source', html: 'Curriculum wording from the Department for Education\'s <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study/national-curriculum-in-england-mathematics-programmes-of-study" rel="noopener" target="_blank">mathematics programmes of study</a>, the Year 5 statements on factors, multiples and primes. Every question in the table is ours; none comes from a school\'s test.' }
      ]
    },
    {
      id: 'depth', tint: 'tint', eyebrow: 'Our approach',
      h2: 'Teaching for papers nobody has seen',
      lede: 'QE shares sample materials, St Michael\'s shares familiarisation booklets, Henrietta Barnett shares nothing for Round Two. Our answer is the same for all three.',
      body: [
        { kind: 'two',
          left: [
            'We teach every Year 5 topic at three depths, as in the factors table: recall, method, then reasoning. Recall makes the easy questions quick. Method makes the standard questions reliable. Reasoning handles the question nobody expected, which is the question a school-set paper is most likely to include.',
            'We mix formats deliberately. Multiple choice prepares for QE and St Michael\'s; written answers prepare for a paper like Round Two, whose format is not published. A child who can do both is ready for either.'
          ],
          right: [
            'We never claim knowledge of any of the three schools\' papers. Our questions are our own, written to the curriculum and to the formats the schools describe. We do not reproduce QE\'s sample papers or St Michael\'s provider booklets.',
            'We also do not teach verbal reasoning, non-verbal reasoning or English. For Henrietta Barnett in particular, that means we help with the second round, not the first, and families should plan for that.'
          ] },
        { kind: 'p', html: 'None of the three schools\' calendars leaves room to learn maths in the autumn of Year 6. The work belongs in Year 5, steadily, with the summer used to practise timed papers in both formats.' }
      ]
    },
    {
      id: 'borough', tint: 'plain', eyebrow: 'Barnet and around it',
      h2: 'Three schools across the borough, one lesson at home',
      lede: 'QE is in Barnet, Henrietta Barnett in Hampstead Garden Suburb and St Michael\'s in North Finchley. Our lessons need no journey to any of them.',
      body: [
        { kind: 'two',
          left: [
            'A family considering more than one of these schools is preparing for more than one test, with more than one date. The maths underneath is the same primary content, and the same teaching serves all three.',
            'For coding and computing in the borough, see our <a class="ag-inline-link" href="/coding-classes-in-barnet-london">Barnet coding page</a>.'
          ],
          right: [
            'Classes are put together by ability. A pupil aiming at QE, Henrietta Barnett or St Michael\'s may share a screen with children from Leicester or Bristol working at the same level, never more than ten of them.',
            'We have no connection with any of the three schools or with the London Borough of Barnet, and we offer no advice on applications, faith criteria or places.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The year ahead',
    h2: 'Four stages, finished before September',
    lede: 'For a child in Year 5 now, the next tests should fall in September and October of Year 6, on dates each school will publish.',
    table: { caption: 'From recall to reasoning, in time for any of the three tests', head: ['When', 'Stage', 'Signs of readiness'], rows: [
      ['Year 4', '1. Recall', 'Tables, squares to 12 × 12 and primes to 19 known instantly'],
      ['Autumn and spring, Year 5', '2. Method', 'All Year 5 topics done accurately with written methods'],
      ['Summer term, Year 5', '3. Reasoning', 'Explains why, not just how, as in the prime test by 2, 3, 5 and 7'],
      ['Summer holiday', '4. Both formats', 'Timed multiple-choice papers and written papers, alternating']
    ] },
    left: { h3: 'Short on time', ps: [
      'A late start still helps if the order holds. Recall and method first; reasoning grows out of them.',
      'At the free lesson we will say candidly what a few months can achieve.'
    ] },
    right: { h3: 'After the results', ps: [
      'Factors and primes lead straight into secondary number theory. Some children continue with <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a> and write their own prime finders.',
      'Puzzle-lovers find the national maths challenges, month by month, on our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'Course list',
    h2: 'Maths and coding for Barnet families',
    lede: 'By stage, each with its full syllabus a click away.',
    bands: [
      { num: 'I', h3: 'For the three tests', sub: 'Years 3 to 5', courses: [
        { code: 'BTM / a', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths preparation', blurb: 'The Year 5 curriculum, at three depths.' },
        { code: 'BTM / b', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Primes, squares and tables at speed.' },
        { code: 'BTM / c', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths, Years 1 to 5', blurb: 'Tables and place value, made solid before any test practice.' },
        { code: 'BTM / d', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'Number sense built by hand, then in the head.' }
      ] },
      { num: 'II', h3: 'Secondary', sub: 'From Year 6', courses: [
        { code: 'BTM / e', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school maths mastery', blurb: 'Prime factorisation, algebra and more.' },
        { code: 'BTM / f', slug: 'gcse-mathematics-mastery', title: 'GCSE maths, foundation and higher', blurb: 'All three exam boards, taught to the specification.' },
        { code: 'BTM / g', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad and competition maths', blurb: 'Number theory and problems that stretch.' }
      ] },
      { num: 'III', h3: 'Code and number', sub: 'Programs that count', courses: [
        { code: 'BTM / h', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Write a prime checker; test a conjecture.' },
        { code: 'BTM / i', slug: 'scratch-programming-complete-course', title: 'Scratch coding for kids', blurb: 'A visual first language with real logic.' },
        { code: 'BTM / j', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Typed programming for capable primary pupils.' }
      ] },
      { num: 'IV', h3: 'Onwards', sub: 'Teenage options', courses: [
        { code: 'BTM / k', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths and speed calculation', blurb: 'Shortcuts for pupils who already understand the standard methods.' },
        { code: 'BTM / l', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Where factor-style thinking meets data and code.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Hours',
    h2: 'Early evenings and weekend mornings, UK time',
    lede: 'Our teachers are in India. We keep primary lessons within sensible UK hours, after school or on a weekend morning, and handle the twice-yearly clock change on our side.',
    slots: [
      { time: 'After school, weekdays', l: 'An hour before the evening winds down.' },
      { time: 'Saturday or Sunday morning', l: 'For children who tire after school.' },
      { time: 'Holidays', l: 'Brief extra sessions in the breaks.' }
    ],
    cells: [
      { h3: 'One familiar teacher', p: 'Every week, so progress and slips are both noticed.' },
      { h3: 'Frank notes home', p: 'Short and honest, including what has not clicked yet.' },
      { h3: 'Five to ten in a class', p: 'Grouped by level, so the teaching fits.' },
      { h3: 'Questions we wrote', p: 'Nothing from any Barnet school\'s materials is reproduced.' },
      { h3: 'Individual lessons', p: 'One to one for a specific gap or a child who prefers it.' },
      { h3: 'Maths, and only maths', p: 'No reasoning or English coaching, no admissions advice.' }
    ]
  },

  projectsH2: 'Where our students take their maths',
  projectsLede: 'Four projects published by students at our school, each resting on primary number work like this. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Unedited words from families who reviewed us on Google.',

  fees: {
    h2: 'Fees',
    lede: 'A monthly fee in US dollars, identical for all families outside India. Stop at any time; there is no contract.',
    free: ['A real lesson with a teacher', 'An honest read on the maths', 'No card needed'],
    group: ['Five to ten children at one level', 'A teacher who knows your child', 'Work checked and explained', 'A certificate at the end'],
    one: ['A teacher for one child', 'Aimed at the gaps', 'Handy in the weeks before Round Two']
  },

  faq: {
    eyebrow: 'Barnet questions',
    h2: 'What Barnet families ask us',
    items: [
      { q: 'Is there one 11 plus test for Barnet?', a: 'No. Queen Elizabeth\'s School, The Henrietta Barnett School and St Michael\'s Catholic Grammar School each run their own entrance test, with their own dates and formats.' },
      { q: 'What maths is in the QE entrance test?', a: 'QE says its test is two multiple-choice papers, English and Mathematics, sat in a single session, with one round only. Scores are age-standardised and combined, and QE publishes a combined score of 225 or higher as the standard its Governors require.' },
      { q: 'Is there maths in the Henrietta Barnett first round?', a: 'No. The school says Round One covers verbal reasoning, non-verbal reasoning and English. The top 300 are invited to Round Two, which includes a 50-minute maths paper.' },
      { q: 'What is in the Henrietta Barnett Round Two maths paper?', a: 'The school says it gives no further detail about the content and releases no past papers or resources for Round Two. We prepare children with the full primary curriculum in depth.' },
      { q: 'What maths does St Michael\'s test?', a: 'St Michael\'s holds multiple-choice entrance tests by invitation, including maths, and publishes provider-designed maths familiarisation booklets. Its English test is a written paper.' },
      { q: 'When are the Barnet tests for September 2028 entry?', a: 'None had been published when we checked on 26 September 2026. For 2027 entry, St Michael\'s tested on 11 September, QE on 16 and 17 September, and Henrietta Barnett held Round One on 2 to 4 September and Round Two on 6 October 2026.' },
      { q: 'Are there past papers?', a: 'None of the three schools publishes past papers. QE links sample materials, and St Michael\'s publishes familiarisation booklets. We write our own questions.' },
      { q: 'Can you help with Henrietta Barnett Round One?', a: 'No. Round One is verbal reasoning, non-verbal reasoning and English, none of which we teach for the test. We teach the maths for Round Two.' },
      { q: 'Do you advise on which school to apply to?', a: 'No. Applications, priority criteria and places are for the schools and your local authority. We teach maths.' },
      { q: 'What do lessons cost?', a: 'Nothing for the first lesson. From then on, a seat in a small group is USD 100 per month and private tuition USD 150 per month; you can stop whenever you choose.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related',
    h2: 'More for north London families',
    lede: 'Coding in Barnet, the national 11 plus page, and other selective areas nearby.',
    items: [
      { href: '/coding-classes-in-barnet-london', label: 'Coding classes in Barnet', p: 'Programming lessons for Barnet children and teens.' },
      { href: '/11-plus-maths-tuition', label: '11 plus maths tuition', p: 'How we approach 11 plus maths across England.' },
      { href: '/11-plus-maths-tuition-kingston', label: '11 plus maths in Kingston', p: 'Two schools with two-stage tests, south-west London.' },
      { href: '/coding-classes-in-harrow-london', label: 'Coding classes in Harrow', p: 'For families in the neighbouring borough.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar', p: 'From the Primary Maths Challenge to the UKMT, dated.' },
      { href: '/coding-classes-in-united-kingdom', label: 'All our UK pages', p: 'Every area we write about.' }
    ]
  },

  start: {
    h2: 'Book a free taster lesson',
    lede: 'Tell us the school year and which school you are thinking about. We teach a real lesson and tell you honestly what we saw.',
    readFirst: 'Prefer to read? All <a class="ag-inline-link" href="/courses">course syllabuses</a> are online, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our lessons, and the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a> shows the path onwards.',
    note: 'A WhatsApp message usually gets the speediest reply. Our team and phone number are in India, and there is no Barnet or London office.',
    formNote: 'We do not ask for card details. We reply once to arrange the lesson.'
  },

  footer: {
    cols: [
      { h4: 'Maths', links: [
        { href: '/11-plus-maths-tuition', label: '11 plus maths tuition' },
        { href: '/courses/11-plus-maths-preparation-course-uk', label: '11 plus maths course' },
        { href: '/courses/olympiad-competition-mathematics-mastery', label: 'Competition maths' },
        { href: '/courses/maths-through-coding', label: 'Maths through coding' }
      ] },
      { h4: 'Local and national', links: [
        { href: '/coding-classes-in-barnet-london', label: 'Coding in Barnet' },
        { href: '/11-plus-maths-tuition-kingston', label: '11 plus maths in Kingston' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] }
    ],
    bottomRight: 'Each school sets its test; we teach the maths'
  },

  personalityCss: `
.ag-root.ag-btm .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-btm .ag-capsule { border-left-width: 6px; border-radius: 0 3px 3px 0; }
.ag-root.ag-btm .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-btm .ag-table caption { text-align: left; font-weight: 700; letter-spacing: 0.01em; }
.ag-root.ag-btm .ag-table td:first-child { font-weight: 650; }
.ag-root.ag-btm .ag-spec dt { letter-spacing: 0.1em; }
.ag-root.ag-btm .ag-three h3 { letter-spacing: -0.011em; }
.ag-root.ag-btm .ag-slots { gap: 1.15rem; }
`,

  mustMention: ['Queen Elizabeth\'s School', 'Henrietta Barnett', 'St Michael\'s Catholic Grammar School', 'top 300', 'combined score of 225', 'factor pairs', 'single session', '50 minute Maths paper']
};
