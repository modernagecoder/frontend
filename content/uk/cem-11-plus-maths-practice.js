'use strict';
// CEM 11 plus maths practice (ag- maths door by provider, UK cluster Phase 2, row UK049).
// Read raw with curl on 31 October 2026 (copies under
// keyword-research-2026-09/uk-us-gap/src/cem-11-plus-maths-practice/):
//  - www.cem.org/history (Cambridge Insight, About): "Cambridge Insight (formerly CEM)"; timeline "1983 First
//    monitoring system established in Newcastle"; "2019 CEM joins Cambridge"; "2025 Cambridge CEM becomes
//    Cambridge Insight"; "480,000 students assessed each year"; "Used by schools, groups, ministries and
//    associations in 127 countries".
//  - www.cem.org/entrance-assessments (Cambridge Select Insight): "Suitable for entry into Years 7, 8, 9 and 10";
//    "Avg Duration: 60 minutes"; "Assessment: Digital (download)"; "Sections: Numerical, Verbal and Non-verbal
//    ability"; "designed for selective independent schools, partially selective state schools, Grammar Schools and
//    schools with fair banding admissions"; "Suitable for 11+, 13+, late transfer and fair banding"; "Feedback is
//    available to download from the secure website within 72 hours"; "comes with 25% extra time versions";
//    "We introduce new assessment paradigms to reduce the predictability of assessment content"; "we do not
//    provide any commercially available practice materials (including practice or past papers) nor endorse any
//    other commercially available resources or tuition services"; "All candidates receive standardised
//    familiarisation materials"; versions Evaluate (age-standardised, year-on-year comparability) and Challenge
//    (several versions, raw scores to rank); "Cambridge Select Insight: Mid-Year Transfer ... suitable for entry
//    into years 8, 9 and 10".
//  - www.cem.org/parents: "Insight assessments can only be purchased by schools and Local Education Authorities";
//    "We strongly advise against practising before an Insight assessment"; introductory examples "are not timed,
//    and repeats are permitted"; "Please note Insight Entrance Assessments are not adaptive."
//  - www.cem.org/faqs: "Normally standardised scores are based on a mean score of 100 and a standard deviation of
//    15."; "We offer Cambridge Select Insight as a specialised computer-based entrance assessment".
//  - Warwickshire County Council news, 11 March 2022: applicants for 2023 entry "will now take an 11+ exam from GL
//    Assessment"; "the previous contract with CEM came to an end"; joint procurement with the King Edward VI
//    Foundation; "intensive coaching or tuition is not needed or encouraged".
//  - Gloucestershire County Council, grammar schools: 2028 intake test provider "will be Future Stories Community
//    Enterprise (FSCE)"; 2027 intake test was on Saturday 12 September 2026.
// cambridge.org returned HTTP 403 (insight pages and the cem.org/admissions redirect); stopped for that host.
// Our own arithmetic, labelled as ours: a standardised score of 115 sits one standard deviation above the mean of 100.
// Worked examples and the practice set are written by us.
// Spine: the CEM 11 plus families search for is a name in transition. The grammar-area paper tests have moved to
// other providers in the areas we read, and what CEM sells now is Cambridge Select Insight, a short computer test
// bought by schools, with no practice papers on sale by design.
// Lesson family: working backwards, unknown-quantity bars and reverse operations, the skills a no-syllabus numerical
// section rewards.

const TIMING = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'elevenplus', tag: 'CEM / CAMBRIDGE', label: 'CEM 11 plus maths', blurb: 'CEM is now Cambridge Insight, and its entrance test is Cambridge Select Insight. What changed, who still uses it, and how to prepare honestly.' },
  slug: 'cem-11-plus-maths-practice',
  code: 'cpp',
  accent: '#834959',
  accentRationale: 'CEM 11 plus maths: a mulberry (#834959), 6.47:1 on #FBF8F2 and 5.57:1 on the deepest paper tint, warmer than the olive GL page and the rose-brown Bexley page so the provider doors read as a set but not as copies',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'CEM 11 plus maths practice',
  title: 'CEM 11 Plus Maths Practice | Now Cambridge Select Insight',
  description: 'CEM 11 plus maths practice explained: CEM is now Cambridge Insight, its entrance test is Cambridge Select Insight, and why there are no official past papers.',
  ogDescription: 'The CEM 11 plus has changed name and changed market. What Cambridge Select Insight is, which schools buy it, and how to prepare without fake past papers.',
  twitterDescription: 'CEM became Cambridge Insight in 2025. Its entrance test is a 60-minute computer assessment with no practice papers on sale. Here is what that means for maths.',
  pageName: 'CEM 11 Plus Maths Practice',
  webPageDescription: 'Live online maths teaching for children facing a CEM or Cambridge Select Insight entrance test, built from what Cambridge Insight and councils publish about the test.',
  courseDescription: 'Live online maths lessons for children in Years 5 and 6 preparing for a CEM-style or Cambridge Select Insight numerical section, teaching reasoning from secure arithmetic.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'CEM 11 plus maths',
  navLinks: [
    { href: '#now', label: 'CEM today' },
    { href: '#select', label: 'Select Insight' },
    { href: '#areas', label: 'Grammar areas' },
    { href: '#worked', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; CEM and Cambridge Select Insight &middot; Years 5 to 9',
  h1: 'CEM 11 plus maths practice',
  lede: 'CEM, the Centre for Evaluation and Monitoring, now trades as Cambridge Insight inside Cambridge University Press &amp; Assessment, and its entrance test is called Cambridge Select Insight. Our live online teachers at Modern Age Coders cover the maths behind a CEM-style numerical section, in classes of 15 to 20 or one to one, through the 11 plus maths preparation course. First, check that your child is sitting a CEM test at all: in several grammar areas the old CEM paper has been replaced by another provider.',
  secondaryCta: { href: '#select', label: 'What Select Insight is' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for a CEM or Cambridge Select Insight test.',
  heroNote: 'From Cambridge Insight and council pages, read 31 October 2026 &middot; Not connected with Cambridge or any school',
  spec: [
    ['Old name', 'CEM, Centre for Evaluation and Monitoring'],
    ['Name now', 'Cambridge Insight (since 2025)'],
    ['Entrance test', 'Cambridge Select Insight'],
    ['Entry years', 'Years 7, 8, 9 and 10'],
    ['Length', 'About 60 minutes, on a computer'],
    ['Sections', 'Numerical, verbal, non-verbal'],
    ['Practice papers', 'None sold by Cambridge'],
    ['We teach', 'Reasoning built on secure arithmetic']
  ],
  capsuleQ: 'What is the CEM 11 plus now?',
  capsule: 'CEM was a university assessment centre founded in 1983 that joined Cambridge in 2019 and was renamed Cambridge Insight in 2025, according to its own history page. Its entrance test today is Cambridge Select Insight, a computer assessment of about 60 minutes with numerical, verbal and non-verbal sections, sold to selective independent schools, grammar schools, partially selective schools and schools that use fair banding, for entry into Years 7 to 10. Cambridge sells no practice papers for it and says it endorses no tuition. Several grammar areas that once used a CEM paper have changed provider; Warwickshire moved to GL Assessment for 2023 entry. Modern Age Coders teaches the number skills a numerical section draws on, live online, with practice questions we write ourselves.',

  picks: {
    eyebrow: 'Choose a starting point',
    h2: 'Three courses for a CEM-style numerical section',
    lede: 'The right first course depends on whether the gap is speed, method or reasoning. Each card opens a full syllabus.',
    items: [
      { course: '11-plus-maths-preparation-course-uk', code: 'CEM / 01', title: '11 plus maths preparation', note: 'Our main entrance course: number, fractions and multi-step problems, taught so unfamiliar wording does not throw a child.' },
      { course: 'mental-maths-mastery-kids', code: 'CEM / 02', title: 'Mental maths, number sense first', note: 'A short computer test leaves no time for long written sums, so quick recall and estimation carry real weight.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'CEM / 03', title: 'Lower secondary maths', note: 'For 13+, late transfer and Year 8 to 10 entry, where the same test family meets older children.' }
    ]
  },

  sections: [
    {
      id: 'now', tint: 'tint', eyebrow: 'CEM today',
      h2: 'Is CEM still an 11 plus exam board?',
      lede: 'Not in the way most practice books suggest. CEM is now a brand of Cambridge University Press &amp; Assessment called Cambridge Insight, and it sells mainly classroom assessments, with one entrance product for selective schools.',
      body: [
        { kind: 'p', html: 'Parents still type "CEM 11 plus past papers" because, for a decade, CEM papers were the grammar school test in several English counties. The organisation behind them has a long history. Its own timeline records the "First monitoring system established in Newcastle" in 1983, a move to Durham in 1996, then "CEM joins Cambridge" in 2019 and, in 2025, "Cambridge CEM becomes Cambridge Insight". The website at cem.org now describes itself as "Cambridge Insight (formerly CEM)" and lists baseline tests for ages 3 to 19, a wellbeing check and a single entrance product.' },
        { kind: 'two', mt: true,
          leftH3: 'What Cambridge Insight mostly does',
          left: [
            'Baseline assessments such as MidYIS, Yellis and Alis, which schools use to understand pupils after they arrive, not to choose them. Cambridge says it assesses 480,000 students each year in 127 countries across its products.',
            'Its parents page is blunt about these tests: they "are designed to be taken without any need for preparation or study in advance", and there are no practice versions for sale.'
          ],
          rightH3: 'What it sells for admissions',
          right: [
            'Cambridge Select Insight, the product that used to be called CEM Select. It is a computer-based entrance assessment that a school buys, downloads to its own network and runs in its own rooms.',
            'This is the only Cambridge Insight product built to decide who gets a place, and it is the one a family is most likely to meet if a school mentions "the CEM test" today.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.cem.org/history" rel="noopener" target="_blank">Cambridge Insight, history</a>, <a class="ag-inline-link" href="https://www.cem.org/parents" rel="noopener" target="_blank">information for parents</a> and <a class="ag-inline-link" href="https://www.cem.org/faqs" rel="noopener" target="_blank">FAQs</a>, read 31 October 2026. Pages on cambridge.org returned HTTP 403 to us and are not quoted. Modern Age Coders is not connected with Cambridge University Press &amp; Assessment, Cambridge Insight or any school.' }
      ]
    },
    {
      id: 'select', tint: 'deep', eyebrow: 'Cambridge Select Insight',
      h2: 'What is Cambridge Select Insight, and how is it built?',
      lede: 'A one-hour computer test in three parts that schools buy and run themselves, with results in three days. The table sets out everything Cambridge publishes about it.',
      body: [
        { kind: 'table', caption: 'Cambridge Select Insight as Cambridge Insight describes it (entrance assessments page, read 31 October 2026)', head: ['Feature', 'What Cambridge publishes', 'What it means for a child'], rows: [
          ['Entry points', '"Suitable for entry into Years 7, 8, 9 and 10"; "Suitable for 11+, 13+, late transfer and fair banding"', 'The same family of test can meet a ten-year-old or a fourteen-year-old'],
          ['Length', '"Avg Duration: 60 minutes"', 'A short sitting, so pace matters more than stamina'],
          ['Sections', '"Numerical, Verbal and Non-verbal ability"', 'Maths is one of three parts, not a whole paper'],
          ['Delivery', '"Digital (download)", completed "at a computer and guided by on-screen instructions"', 'Questions are read on a screen, not in a booklet'],
          ['Adaptive or not', 'Parents page: "Insight Entrance Assessments are not adaptive"', 'Every candidate in a sitting sees the same level of questions'],
          ['Results', '"Feedback is available to download from the secure website within 72 hours"', 'Results go to the school, which decides what to share'],
          ['Access', '"25% extra time versions for candidates with special educational needs"', 'Ask the school about extra time well before the date'],
          ['Practice', '"we do not provide any commercially available practice materials (including practice or past papers)"', 'Any "official CEM past paper" for sale is not from Cambridge']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Two versions for independent schools', p: 'Cambridge Select Insight: Evaluate gives age-standardised results and "year-on-year comparability". Cambridge Select Insight: Challenge offers several versions and reports raw scores, including section totals, so a school can rank its own candidates.' },
          { h3: 'A version for late transfer', p: 'Cambridge Select Insight: Mid-Year Transfer is described as "designed explicitly as a late-transfer test for Grammar schools" for entry into Years 8, 9 and 10, benchmarked against the school\'s existing pupils.' },
          { h3: 'Built against coaching', p: 'Cambridge says it introduces "new assessment paradigms to reduce the predictability of assessment content" and writes the content separately from its other tests, so familiarity with one Cambridge product gives no head start on another.' }
        ] },
        { kind: 'p', mt: true, html: 'One more detail matters for reading results. Cambridge\'s FAQ explains that standardised scores "are based on a mean score of 100 and a standard deviation of 15". By our own arithmetic, that puts a score of 115 one standard deviation above the average for the age group, and a score of 130 two above. Schools that use the Evaluate version see age-standardised scores of this kind; schools that use Challenge see raw marks and rank them. Either way, the school sets its own threshold and Cambridge publishes none.' },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.cem.org/entrance-assessments" rel="noopener" target="_blank">Cambridge Select Insight, entrance assessments</a>, read 31 October 2026. Cambridge also quotes heads of schools that use the test; we do not repeat those testimonials.' }
      ]
    },
    {
      id: 'areas', tint: '', eyebrow: 'Grammar areas',
      h2: 'Which 11 plus areas still use a CEM test?',
      lede: 'None of the grammar areas we have read for this site names CEM or Cambridge as its current 11 plus provider. The clearest public record of the change is Warwickshire\'s.',
      body: [
        { kind: 'p', html: 'On 11 March 2022 Warwickshire County Council announced that children then in Year 5 "will now take an 11+ exam from GL Assessment", and explained why: "the previous contract with CEM came to an end". The new provider was chosen in a joint procurement with the King Edward VI Foundation in Birmingham, because Warwickshire and the Birmingham grammar schools share one test. The council added that the GL papers "will test the same four competencies of Maths, English, Verbal and Non-Verbal Reasoning as the CEM papers have in previous years", and that "intensive coaching or tuition is not needed or encouraged."' },
        { kind: 'table', mt: true, caption: 'Who writes the 11 plus in four areas this site covers (council and consortium pages, read 31 October 2026 unless dated)', head: ['Area', 'Provider named for the latest published test', 'Our area page'], rows: [
          ['Birmingham and the West Midlands Grammar Schools group', 'GL Assessment: "The test is provided by GL Assessment", two papers of about 50 to 60 minutes', 'Birmingham page'],
          ['Warwickshire', 'GL Assessment from 2023 entry, after the CEM contract ended (council news, March 2022)', 'Warwickshire page'],
          ['Gloucestershire', 'Future Stories Community Enterprise (FSCE) for the 2028 intake, test planned for Saturday 3 July 2027', 'Gloucestershire page'],
          ['Bexley', '"Quest Assessments is the Bexley Selection Test provider"', 'Bexley page']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the CEM label survives',
          left: [
            'Bookshops still sell "CEM style" practice, tutors still advertise it, and some independent schools still buy Cambridge Select Insight for 11+ and 13+ entry. So the word lingers even where the test has gone.',
            'If a school or council page names Cambridge Select Insight, this page applies. If it names GL, Quest or FSCE, the provider page or area page for that test is the better guide.'
          ],
          rightH3: 'How to check your own case',
          right: [
            'Read the admissions page of the school or council, not a tutor\'s summary, and look for the provider\'s name and the year of entry it applies to. Providers change at contract ends, so a page about 2027 entry can differ from one about 2028.',
            'Gloucestershire\'s council page, for example, gives the 2027 intake test date as Saturday 12 September 2026 and then names a different provider for the 2028 intake.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.warwickshire.gov.uk/news/article/2808/warwickshire-grammar-school-applicants-for-2023-entry-will-take-the-11-test-from-a-new-exam-provider" rel="noopener" target="_blank">Warwickshire County Council news, 11 March 2022</a>; <a class="ag-inline-link" href="https://westmidlandsgrammarschools.co.uk/the-entrance-test" rel="noopener" target="_blank">West Midlands Grammar Schools, The Entrance Test</a>; <a class="ag-inline-link" href="https://www.gloucestershire.gov.uk/schooladmissions/grammar-schools/" rel="noopener" target="_blank">Gloucestershire County Council, grammar schools</a>; <a class="ag-inline-link" href="https://www.bexley.gov.uk/services/schools-and-education/selection-tests/about-test" rel="noopener" target="_blank">London Borough of Bexley, about the test</a>; all read 31 October 2026. Area details: <a class="ag-inline-link" href="/11-plus-maths-tuition-warwickshire">Warwickshire</a>, <a class="ag-inline-link" href="/11-plus-maths-tuition-birmingham">Birmingham</a>, <a class="ag-inline-link" href="/11-plus-maths-tuition-gloucestershire">Gloucestershire</a>, <a class="ag-inline-link" href="/11-plus-maths-tuition-bexley">Bexley</a>. FSCE also writes tests for some schools in <a class="ag-inline-link" href="/11-plus-maths-tuition-reading">Reading</a> and <a class="ag-inline-link" href="/11-plus-maths-tuition-calderdale">Calderdale</a>, as those pages record.' }
      ]
    },
    {
      id: 'prepare', tint: 'tint', eyebrow: 'Preparing honestly',
      h2: 'Can you prepare for Cambridge Select Insight?',
      lede: 'Cambridge says a child should not practise for it, and sells nothing to practise with. What a family can do is make sure the maths underneath is secure and the screen format is not a shock.',
      body: [
        { kind: 'p', html: 'Cambridge\'s parents page answers the question directly: "We strongly advise against practising before an Insight assessment, and we do not provide nor recommend any practice materials." It also explains what happens instead. "Each section of the assessment will include introductory information with examples that allow students to familiarise with the style and format of questions. The introductory examples are not timed, and repeats are permitted." The entrance page adds that "All candidates receive standardised familiarisation materials designed to prevent undue anxiety".' },
        { kind: 'ol', mt: true, items: [
          'Confirm the test. Ask the school which provider and which version it uses, and whether the numerical section is age-standardised or ranked by raw score.',
          'Use only the familiarisation material the school sends. Cambridge gives every candidate the same material, so nobody gains by buying more.',
          'Secure Year 5 and Year 6 number work at school level: place value, the four operations with whole numbers and decimals, fractions of amounts, simple ratio and reading tables and charts.',
          'Practise reading a maths question on a screen. Many children are fluent on paper and slower when the question and the options sit side by side on a monitor.',
          'Practise reasoning, not recall. The entrance page says the test supports abilities that "rely on genuine understanding rather than learning through repetition", so unfamiliar problems teach more than repeated drills.',
          'Ask about access arrangements early if your child has extra time at school, since a 25 per cent extra-time version exists.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where we can help',
          left: [
            'Arithmetic and reasoning are ordinary school maths, and a child who is shaky on fractions or multi-step word problems in Year 5 is short of things the national curriculum expects anyway. That is worth teaching whatever test lies ahead.',
            'We also teach the habits a short numerical section rewards: estimating before calculating, checking an answer against the question, and moving on from a question that is taking too long.'
          ],
          rightH3: 'Where we will not pretend',
          right: [
            'We have never seen a Cambridge Select Insight question, and neither has any tutor outside the schools that buy it. We will not sell "CEM papers" or present our questions as the real thing.',
            'We do not promise a score or a place. Each school sets its own threshold and its own interview, and Cambridge publishes no pass mark.'
          ] }
      ]
    },
    {
      id: 'worked', tint: 'deep', eyebrow: 'Worked examples, written by us',
      h2: 'How should a child think through a CEM-style numerical question?',
      lede: 'Three original problems at the top of the primary curriculum, of the kind a numerical reasoning section draws on. None is from a Cambridge test, and none imitates one. The point is the route.',
      body: [
        { kind: 'three', cells: [
          { h3: '1. Two ages, one bar', p: 'Mia is three times as old as her brother. In four years she will be twice as old as him. How old is her brother now? Draw his age as one bar and hers as three. Four years later each bar gains the same 4. For hers to be exactly two of his, three bars plus 4 must equal two bars plus 8, so one bar is 4. He is 4 and she is 12. Check: in four years they are 8 and 16, and 16 is twice 8.' },
          { h3: '2. Run the machine backwards', p: 'A number is multiplied by 4, then 7 is taken away, and the result is 45. What was the number? Undo the last step first: add 7 to get 52. Then undo the first step: divide by 4 to get 13. Check forwards: 13 times 4 is 52, minus 7 is 45. Children who try numbers at random waste a minute here; children who reverse the steps take fifteen seconds.' },
          { h3: '3. The missing score', p: 'Five test scores have a mean of 14. Four of them are 12, 15, 9 and 18. What is the fifth? The mean tells you the total: five scores averaging 14 add up to 70. The four known scores make 54, so the fifth is 16. The habit to build is turning every mean into a total straight away, because totals can be added and subtracted and means cannot.' }
        ] },
        { kind: 'table', mt: true, caption: 'A practice set written by Modern Age Coders, with the reasoning we look for', head: ['Question (ours)', 'Answer', 'How to think'], rows: [
          ['What is 7 times 8 minus 6 times 9?', '2', 'Multiplication before subtraction: 56 minus 54. The trap is working left to right as a calculator chain.'],
          ['What is the smallest whole number that 4, 6 and 9 all divide into?', '36', 'Try multiples of the largest number, 9: 18 fails for 4, 27 fails for 2, 36 passes all three.'],
          ['A square has a perimeter of 28 cm. What is its area?', '49 square centimetres', 'One side is 28 divided by 4, which is 7, and 7 times 7 is 49. Perimeter and area are different questions about the same square.'],
          ['A game has 48 levels and Ravi has finished three eighths of them. How many are left?', '30', 'One eighth is 6, three eighths is 18, and 48 minus 18 is 30. Or find five eighths directly: 5 times 6.'],
          ['Next term: 1, 3, 7, 13, 21, ...', '31', 'The gaps are 2, 4, 6, 8, so the next gap is 10. Look at the differences when the terms themselves show no pattern.'],
          ['Three corners of a rectangle are at (1, 2), (7, 2) and (7, 6). Where is the fourth, and what is the area?', '(1, 6); 24 square units', 'Opposite sides match, so the fourth corner shares x with (1, 2) and y with (7, 6). The sides are 6 and 4 units long.']
        ] },
        { kind: 'p', mt: true, html: 'Every item above can be done without a calculator in under a minute once the method is settled, and each has one place where children usually slip: the order of operations, a common multiple tested on only two of three numbers, area confused with perimeter, the fraction left rather than the fraction done, a pattern read from terms instead of gaps, and a coordinate pair written the wrong way round. In lessons we spend the time on the slip, because that is what transfers to a question nobody has seen before.' }
      ]
    },
    {
      id: 'thirteen', tint: '', eyebrow: 'Beyond 11 plus',
      h2: 'Does the CEM test appear at 13 plus or for late entry?',
      lede: 'Yes. Cambridge sells the same entrance family for 13+ entry to independent schools and for transfer into Years 8, 9 and 10 at grammar schools, so the maths moves up with the child.',
      body: [
        { kind: 'two',
          leftH3: '13 plus entry',
          left: [
            'Cambridge lists 13+ alongside 11+ for both independent-school versions, Evaluate and Challenge. A candidate at 13 has met Key Stage 3 number and algebra, so a numerical section can reasonably expect negative numbers, simple equations, percentages of amounts and ratio problems with three parts.',
            'Our <a class="ag-inline-link" href="/courses/comprehensive-middle-school-mathematics-mastery">lower secondary maths course</a> covers that ground. For 13+ entry that uses Common Entrance or scholarship papers rather than a Cambridge test, see our <a class="ag-inline-link" href="/common-entrance-maths-tuition">Common Entrance maths page</a>.'
          ],
          rightH3: 'Late transfer into a grammar school',
          right: [
            'The Mid-Year Transfer version is for grammar schools admitting into Years 8, 9 and 10, and Cambridge says the results are "age-standardised and benchmarked against your existing pupils". A child joining in Year 9 is therefore compared with children already in that school\'s Year 9.',
            'For families moving into a grammar area mid-way through secondary school, the useful preparation is the school\'s own maths scheme for the years already taught, which the school can usually tell you.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Timeline',
    h2: 'From Year 4 to a CEM-style test',
    lede: 'A Cambridge Select Insight sitting is set by each school, often in the autumn or winter before entry. The stages below are ours, built from the primary curriculum, and they hold whatever the date.',
    table: { caption: 'Four stages before a numerical reasoning section (our plan)', head: ['When', 'Stage', 'Secure when'], rows: [
      ['Year 4', '1. Facts', 'Times tables to 12 and number bonds come back instantly, without finger counting'],
      ['Year 5', '2. Methods', 'Fractions of amounts, decimals and written methods come out right with awkward numbers'],
      ['Late Year 5', '3. Reasoning', 'Unfamiliar word problems are drawn as bars or tables before any sum is written'],
      ['Weeks before the test', '4. Screen and pace', 'Short timed sets read from a screen are finished calmly, with stuck questions left and returned to']
    ] },
    left: { h3: 'If the test is close', ps: [
      'With a month to go, stage 2 is still worth more than stage 4. A child who can do the maths will cope with the screen.',
      'We will tell you plainly in the first lesson which stage your child is really at.'
    ] },
    right: { h3: 'After the test', ps: [
      'The reasoning keeps paying off in Year 7. Some children carry it into <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a>.',
      'Puzzle-minded children can try the challenges in our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">UK competitions calendar</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'All related courses',
    h2: 'Courses around a CEM or Cambridge test',
    lede: 'Grouped by age and purpose. Every card opens its syllabus.',
    bands: [
      { num: 'I', h3: 'Primary entry', sub: 'Years 3 to 6', courses: [
        { code: 'UK / CPP / 01', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths preparation', blurb: 'Year 5 and 6 number and problem solving for entrance tests of every kind.' },
        { code: 'UK / CPP / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Fast, reliable calculation in the head, which short sections reward.' },
        { code: 'UK / CPP / 03', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths, Years 1 to 5', blurb: 'For gaps in place value, tables or fractions that need rebuilding first.' },
        { code: 'UK / CPP / 04', slug: 'ks2-sats-maths-course', title: 'KS2 SATs maths', blurb: 'Arithmetic and reasoning papers at the end of Year 6.' }
      ] },
      { num: 'II', h3: 'Reasoning and stretch', sub: 'For curious minds', courses: [
        { code: 'UK / CPP / 05', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Calculation patterns for children who like to find shortcuts.' },
        { code: 'UK / CPP / 06', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Harder, unfamiliar problems for the child who wants more.' }
      ] },
      { num: 'III', h3: '13 plus and late entry', sub: 'Years 7 to 9', courses: [
        { code: 'UK / CPP / 07', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Lower secondary maths', blurb: 'Key Stage 3 number, algebra and geometry for older entry points.' },
        { code: 'UK / CPP / 08', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Equations and expressions, built step by step.' },
        { code: 'UK / CPP / 09', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Python used to test ideas and see why a method works.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons for an on-screen numerical test',
    lede: TIMING + ' Our teachers work from India, which does not change its clocks, so the gap to UK time is four and a half hours in British summer time and five and a half in winter. Every lesson time we give you is in UK time.',
    slots: [
      { time: 'After school', l: 'The usual slot for Years 5 and 6.' },
      { time: 'Weekend morning', l: 'Room for a longer reasoning session.' },
      { time: 'Holidays', l: 'Shorter, more frequent lessons before a sitting.' }
    ],
    cells: [
      { h3: 'Screen-first practice', p: 'Questions shown on screen, the way a computer test presents them.' },
      { h3: 'Reasoning before speed', p: 'Bars, tables and working backwards come before any timer.' },
      { h3: 'Questions we wrote', p: 'Nothing copied from Cambridge or any school.' },
      { h3: 'Slip-by-slip feedback', p: 'Every wrong answer traced to the step that went wrong.' },
      { h3: 'Batch or 1-on-1', p: 'A group of 15 to 20 at one level, or one teacher for one child.' },
      { h3: 'No predictions', p: 'Thresholds and places belong to schools, not to us.' }
    ]
  },

  projectsH2: 'What our students made later',
  projectsLede: 'Projects by students at our school, many of whom started with maths. More on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents on our Google profile, in their own words.',

  fees: {
    h2: 'Fees for CEM-style maths lessons',
    lede: 'One monthly fee, shown in the currency we use for families in the UK. The first lesson is free and nothing is charged to join.',
    free: ['A full maths lesson at your child\'s level', 'An honest note on what to work on', 'Just a phone number to book'],
    group: ['A batch of 15 to 20 at a similar stage', 'The same teacher month to month', 'Reasoning practice on screen', 'Quieter weeks around school events'],
    one: ['One child, one teacher', 'Paced to one school\'s test date', 'Good for a single stubborn gap']
  },

  faq: {
    eyebrow: 'CEM questions',
    h2: 'What parents ask about the CEM 11 plus',
    items: [
      { q: 'Is CEM still used for the 11 plus?', a: 'CEM is now called Cambridge Insight, and its entrance test is Cambridge Select Insight, which some selective independent and state schools buy. In the grammar areas we have read, the county-wide 11 plus now comes from GL Assessment, Quest Assessments or FSCE instead.' },
      { q: 'What is Cambridge Select Insight?', a: 'It is a computer-based entrance test from Cambridge University Press and Assessment, previously sold as CEM Select. Cambridge describes it as about 60 minutes long with numerical, verbal and non-verbal sections, for entry into Years 7 to 10.' },
      { q: 'Can I buy CEM or Cambridge Select Insight past papers?', a: 'Not from Cambridge. Its entrance page says it does not provide any commercially available practice materials, including practice or past papers, and its parents page says the tests can only be bought by schools and local authorities.' },
      { q: 'Is the Cambridge Select Insight test adaptive?', a: 'No. Cambridge\'s parents page says Insight entrance assessments are not adaptive, unlike its classroom baseline tests, which do adapt to each answer.' },
      { q: 'What maths is in a CEM-style numerical section?', a: 'Cambridge does not publish a syllabus. It says the test measures mathematical skills that rely on genuine understanding rather than repetition, so we teach upper primary number, fractions, ratio and data, and how to reason through unfamiliar problems.' },
      { q: 'How do I help my child prepare?', a: 'Cambridge advises against practising and gives every candidate familiarisation material. The honest help is secure school maths, reading questions on a screen, and calm handling of questions that look new.' },
      { q: 'When are results available?', a: 'Cambridge says feedback is available to the school within 72 hours. The school decides what to share with families and sets its own threshold.' },
      { q: 'Is there extra time for children who need it?', a: 'Cambridge offers 25 per cent extra-time versions for candidates with special educational needs. Ask the school early, since it runs the sitting and needs evidence.' },
      { q: 'When are your lessons?', a: TIMING + ' Times are confirmed in UK time.' },
      { q: 'Are you connected with Cambridge or CEM?', a: 'No. Modern Age Coders is an independent online school. We have never seen a Cambridge Select Insight question and we write all of our own practice material.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'Other 11 plus providers and areas',
    lede: 'If your test is not a Cambridge one, start here instead.',
    items: [
      { href: '/11-plus-maths-tuition', label: '11 plus maths tuition', p: 'The subject itself, whatever the provider.' },
      { href: '/11-plus-maths-tuition-warwickshire', label: '11 plus maths in Warwickshire', p: 'A former CEM area that moved to GL.' },
      { href: '/11-plus-maths-tuition-gloucestershire', label: '11 plus maths in Gloucestershire', p: 'A county changing provider for the 2028 intake.' },
      { href: '/11-plus-maths-tuition-bexley', label: '11 plus maths in Bexley', p: 'A Quest Assessments area in south east London.' },
      { href: '/common-entrance-maths-tuition', label: 'Common Entrance maths', p: 'Written papers for 11+ and 13+ independent entry.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Every UK page we publish, in one place.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson',
    lede: 'Tell us your child\'s year group and which school or area they are applying to. We will check which test applies, teach a real lesson, and tell you what we saw.',
    readFirst: 'Want the detail first? Our <a class="ag-inline-link" href="/courses/11-plus-maths-preparation-course-uk">11 plus maths course</a> page lists every topic, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> sets out the method.',
    note: 'WhatsApp is the fastest way to reach us and costs nothing from a UK phone. Replies come from our team in India on a +91 number.',
    formNote: 'No card details asked for. We reply once with a suggested time.'
  },

  footer: {
    cols: [
      { h4: '11 plus providers', links: [
        { href: '/11-plus-maths-tuition', label: '11 plus maths' },
        { href: '/11-plus-maths-tuition-warwickshire', label: 'Warwickshire' },
        { href: '/11-plus-maths-tuition-gloucestershire', label: 'Gloucestershire' },
        { href: '/11-plus-maths-tuition-bexley', label: 'Bexley' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/courses/11-plus-maths-preparation-course-uk', label: '11 plus maths course' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'CEM became Cambridge; the maths stayed the same'
  },

  personalityCss: `
.ag-root.ag-cpp .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-cpp .ag-capsule { border-left-width: 6px; }
.ag-root.ag-cpp .ag-section-head h2 { max-width: 24ch; }
.ag-root.ag-cpp .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-cpp .ag-table th:first-child { width: 22%; }
`,

  dossier: {
    curriculumAuthority: 'Cambridge Insight (formerly CEM), Cambridge University Press and Assessment, read 31 October 2026. History: first monitoring system in Newcastle 1983; CEM joins Cambridge 2019; Cambridge CEM becomes Cambridge Insight 2025. Cambridge Select Insight entrance page: entry into Years 7, 8, 9 and 10; average 60 minutes; digital download; numerical, verbal and non-verbal sections; for selective independent, partially selective, grammar and fair-banding schools; 11+, 13+, late transfer; feedback within 72 hours; 25 per cent extra time versions; no commercially available practice or past papers; standardised familiarisation materials; Evaluate and Challenge versions; Mid-Year Transfer for Years 8 to 10. Parents page: tests bought only by schools and local authorities; strongly advise against practising; entrance assessments not adaptive. FAQs: standardised scores mean 100, standard deviation 15. Warwickshire County Council, 11 March 2022: GL for 2023 entry after the CEM contract ended. Gloucestershire County Council: FSCE for the 2028 intake.',
    localProject: 'A provider page for a name in transition. It explains that CEM became Cambridge Insight in 2025 and that its entrance product is Cambridge Select Insight, sets out in one table everything Cambridge publishes about that test (entry years, 60 minutes, three sections, not adaptive, 72-hour feedback, extra time, no practice papers), records Warwickshire\'s 2022 switch from CEM to GL, lists current providers in areas this site covers, gives an ordered honest-preparation plan from Cambridge\'s own advice, and teaches three original worked examples (bar model ages, reverse operations, mean to total) and a six-question practice set with reasoning. Lesson family: working backwards and unknown-quantity bars.',
    requiredMentions: ['Cambridge CEM becomes Cambridge Insight', 'Insight Entrance Assessments are not adaptive', 'Suitable for entry into Years 7, 8, 9 and 10', 'the previous contract with CEM came to an end', 'Cambridge Select Insight: Mid-Year Transfer', 'new assessment paradigms to reduce the predictability', 'within 72 hours', 'mean score of 100 and a standard deviation of 15'],
    sources: [
      { claim: 'Cambridge Select Insight: entry years, duration, sections, delivery, school types, 72-hour feedback, extra time, no practice papers, versions, Mid-Year Transfer.', url: 'https://www.cem.org/entrance-assessments' },
      { claim: 'Cambridge Insight history: 1983 Newcastle, CEM joins Cambridge 2019, renamed Cambridge Insight 2025, 480,000 students, 127 countries.', url: 'https://www.cem.org/history' },
      { claim: 'Parents page: bought only by schools and local authorities, advice against practising, untimed introductory examples, entrance assessments not adaptive.', url: 'https://www.cem.org/parents' },
      { claim: 'FAQs: standardised score mean 100 and standard deviation 15; Select Insight is a computer-based entrance assessment.', url: 'https://www.cem.org/faqs' },
      { claim: 'Warwickshire County Council: GL from 2023 entry after the CEM contract ended; joint procurement; coaching not needed or encouraged.', url: 'https://www.warwickshire.gov.uk/news/article/2808/warwickshire-grammar-school-applicants-for-2023-entry-will-take-the-11-test-from-a-new-exam-provider' },
      { claim: 'West Midlands Grammar Schools: the test is provided by GL Assessment; London Borough of Bexley: Quest Assessments is the provider.', url: 'https://westmidlandsgrammarschools.co.uk/the-entrance-test' },
      { claim: 'Gloucestershire County Council: FSCE for the 2028 intake; 2027 intake test 12 September 2026; 2028 test planned 3 July 2027.', url: 'https://www.gloucestershire.gov.uk/schooladmissions/grammar-schools/' }
    ],
    rejectedClaims: [
      'Anything on cambridge.org: the Insight pages and the cem.org/admissions redirect return HTTP 403 to curl; we stopped for that host and did not work around it.',
      'Tutor and publisher blog claims about when CEM stopped grammar-school paper tests, or which named independent schools buy Cambridge Select Insight: not primary sources, not used.',
      'A list of grammar areas still using CEM: no council page we read names CEM or Cambridge as its current 11 plus provider, so the page says so rather than guessing.',
      'Cambridge\'s quoted headteacher testimonials and its prices: not repeated.',
      'Any question type, item count or timing per section inside Cambridge Select Insight: not published, so not stated.',
      'Any pass mark, score target or place promise.'
    ]
  }
};
