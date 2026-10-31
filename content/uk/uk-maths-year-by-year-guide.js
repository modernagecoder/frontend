'use strict';
// UK maths year by year, Reception to Year 11 (ag- index page for the year-by-year hub in
// content/exam-cluster-groups.json; UK and US exams cluster, index pages, 1 November 2026).
// Sources, read raw on 1 November 2026 with curl -sL -A "Mozilla/5.0" (gov.uk content API and
// assets.publishing.service.gov.uk PDFs; PDF text through the scratchpad pdftext helper; raw copies in
// keyword-research-2026-09/uk-us-gap/src/uk-maths-year-by-year-guide/, many copied from the member folders):
//  - gov.uk, The national curriculum (content API, updated 3 February 2025). Verbatim: "The national curriculum is
//    organised into blocks of years called 'key stages' (KS)."; "Your child will be tested at the end of some key
//    stages."; year and age table: Reception "4 to 5", Year 1 "5 to 6", Year 2 "6 to 7", Year 3 "7 to 8", Year 4
//    "8 to 9", Year 5 "9 to 10", Year 6 "10 to 11", Year 7 "11 to 12", Year 8 "12 to 13", Year 9 "13 to 14", Year 10
//    "14 to 15", Year 11 "15 to 16"; assessments: Reception baseline "(first 6 weeks)" and "EYFS profile (between April
//    and June)"; Year 2 "Optional tests in maths, English reading and grammar, punctuation and spelling."; Year 4
//    "Times tables check"; Year 6 "National tests"; Year 10 "Some children take GCSEs"; Year 11 "Most children take
//    GCSEs or other national tests"; Year 4 "25 questions"; Year 6 "The tests last less than 4 hours."; "Other types of
//    school, like academies and private schools, do not have to follow the national curriculum."
//  - gov.uk, School admissions: school starting age: "Most children start reception full-time in September after their
//    fourth birthday."; "There are different rules if you live in Scotland or in Northern Ireland."
//  - DfE, EYFS statutory framework for group and school-based providers, from September 2026: ELG Number "Have a deep
//    understanding of numbers to 10, including the composition of each number."; "Subitise (recognise quantities
//    without counting) up to 5."; ELG Numerical Patterns "Verbally count beyond 20, recognising the pattern of the
//    counting system."; Profile "no later than 30 June".
//  - DfE, Mathematics programmes of study: key stages 1 and 2 (nc-maths.pdf). KS1 focus "confidence and mental fluency
//    with whole numbers, counting and place value"; lower KS2 focus "become increasingly fluent with whole numbers and
//    the four operations"; upper KS2 focus "develop the connections that pupils make between multiplication and division
//    with fractions, decimals, percentages and ratio". Year statements grepped: Y1 "count to and across 100",
//    "recognise, find and name a half", "recognise, find and name a quarter"; Y2 "recall and use addition and
//    subtraction facts to 20 fluently", "recall and use multiplication and division facts for the 2, 5 and 10
//    multiplication tables", "tell and write the time to five minutes", "recognise, find, name and write fractions";
//    Y3 "recall and use multiplication and division facts for the 3, 4 and 8 multiplication tables", "count up and down
//    in tenths", "formal written methods of columnar addition and subtraction", "Roman numerals from I to XII",
//    "measure the perimeter of simple 2-D shapes"; Y4 "recall multiplication and division facts for multiplication
//    tables up to 12 × 12", "count backwards through zero to include negative numbers", "recognise and write decimal
//    equivalents to", "read Roman numerals to 100 (I to C)", "find the area of rectilinear shapes by counting squares",
//    "first quadrant"; Y5 "read, write, order and compare numbers to at least 1 000 000", "recognise and use square
//    numbers and cube numbers", "recognise and use thousandths"; Y6 "read, write, order and compare numbers up to
//    10 000 000", "formal written method of long division", "use simple formulae", "express missing number problems
//    algebraically", "solve problems involving the relative sizes of two quantities", "calculate and interpret the mean
//    as an average", "illustrate and name parts of circles", "all four quadrants", "recall and use equivalences between
//    simple fractions, decimals and percentages".
//  - DfE, Mathematics programmes of study: key stage 3: "use algebra to generalise the structure of arithmetic";
//    "work with percentages greater than 100%"; "recognise arithmetic sequences and find the nth term"; "interpret and
//    compare numbers in standard form"; Pythagoras and trigonometric ratios in similar triangles; "Decisions about
//    progression should be based on the security of pupils' understanding".
//  - DfE, Mathematics programmes of study: key stage 4: quadratic equations, simultaneous equations, vectors; sine and
//    cosine rules and surds in braces (higher-attaining content); "change recurring decimals into their corresponding
//    fractions" (in braces).
//  - DfE, Primary assessments: future dates (updated 12 October 2026): "Assessment arrangements for the academic year
//    2026 to 2027 will remain unchanged."; "Schools must keep these periods free for administering the assessments.";
//    optional KS1 tests "during May 2027"; KS2 "Monday 10 May to Thursday 13 May 2027", maths Papers 1 and 2 on
//    Wednesday 12 May 2027 and Paper 3 on Thursday 13 May 2027; MTC "within the 2-week period from Monday 7 June 2027";
//    2028: KS2 "Monday 8 May to Thursday 11 May 2028", MTC from "Monday 5 June 2028".
//  - STA, Optional KS1 tests guidance 2026 to 2027: maths "Paper 1: arithmetic" about 20 minutes and "Paper 2:
//    reasoning" about 35 minutes; "Schools are not required to report results to parents or local authorities".
//  - STA, MTC information for parents: "25 times table questions"; "6 seconds to answer each question"; "On average,
//    the check should take no longer than 5 minutes to complete."
//  - STA, KS2 information for parents 2027: "Mathematics Paper 1: arithmetic", "Paper 2: reasoning", "Paper 3:
//    reasoning". STA 2027 KS2 ARA: results to schools on "Tuesday 6 July".
//  - AQA GCSE Mathematics 8300 specification and key dates page: "Foundation tier (grades 1 – 5)", "Higher tier
//    (grades 4 – 9)" (restated without dashes), three papers of "1 hour 30 minutes", "Paper 1: non-calculator";
//    June 2027 series 8300/1F and 1H 14 May, 2F and 2H 27 May, 3F and 3H 14 June.
//  - Government response to the Curriculum and Assessment Review (November 2025): "We will expect all schools to
//    assess pupil progress in writing and maths in Year 8"; "first teaching from September 2028"; "publish the final
//    revised national curriculum by spring 2027"; GCSEs updated "for first teaching from 2029 onwards"; "resequencing
//    content (particularly in the 'number' domain)".
//  - Scottish Government, Achievement of CfE Levels 2024-25 (9 December 2025), chapter 1 tables: "P1 - Early Level",
//    "P4 - First Level", "P7 - Second Level", "S3 - third level or better", "S3 - fourth level"; numeracy 85, 78, 79,
//    91 and 68 per cent; "based on teachers' professional judgements". National Standardised Assessments for Scotland
//    parents page: "All children and young people in P1, P4, P7 and S3."; "there is no pass or fail".
//    Education Scotland Benchmarks: "They should not be ticked off individually for assessment purposes."
// Our own: the per-year headline summaries (selected from the statutory statements), the split of the single KS3 and
// KS4 programmes across Years 7 to 11 (schools set that order; labelled as ours), the "three quarters" thread worked
// through five stages, the birthday-to-year arithmetic example and the choosing steps.
// Spine: one table answers "what is taught in which year", a second answers "which years carry a national check",
// then each hub section routes the reader to the year page. Lesson family: a hub index (pillar) page.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'YEAR BY YEAR', blurb: 'Every year from Reception to Year 11 on one table: age, key stage, the headline maths and the national checks, with Scotland alongside.' },
  slug: 'uk-maths-year-by-year-guide',
  code: 'ukyy',
  accent: '#2E5A5A',
  accentRationale: 'Year-by-year index: a deep slate teal (#2E5A5A, 7.27:1 on #FBF8F2 and 6.25:1 on the deepest paper tint #EDE7DA), cooler than the Year 11 teal and apart from the green and violet year pages it sits above',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'UK maths year by year guide',
  title: 'What Maths Is Taught in Each Year? England Reception to Year 11',
  description: 'UK maths year by year: what England teaches from Reception to Year 11, the age and key stage of each year, every national check from EYFS to GCSE, and Scotland.',
  ogDescription: 'One table for every school year in England, Reception to Year 11: age, key stage, the headline maths content and the national check, if any.',
  twitterDescription: 'Maths year by year in England: Reception to Year 11 on one table, the statutory checks with 2027 dates, and how Scotland differs.',
  pageName: 'UK Maths Year by Year Guide',
  webPageDescription: 'A year-by-year map of school maths in England from Reception to Year 11, built from the DfE programmes of study, the EYFS framework and the DfE and STA assessment calendars, with Scotland\'s CfE levels.',
  courseDescription: 'Live online maths for every school year from Reception to Year 11: early number, the primary programme of study, Key Stage 3 and GCSE Maths, in a group or 1-on-1.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Maths year by year',
  navLinks: [
    { href: '#map', label: 'The year map' },
    { href: '#checks', label: 'National checks' },
    { href: '#primary', label: 'Primary' },
    { href: '#secondary', label: 'Secondary' },
    { href: '#scotland', label: 'Scotland' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England and Scotland &middot; Reception to Year 11 &middot; ages 4 to 16',
  h1: 'UK maths year by year: what is taught in each year, Reception to Year 11',
  lede: 'Parents usually meet school maths one year at a time, through a homework sheet or a letter about a test. This page lays all twelve years out together, from the Department for Education\'s own programmes of study and assessment calendar, so you can see when the times tables are due, where algebra first appears and which years carry a national check. Each section then points to the page for one year or one check.',
  secondaryCta: { href: '#map', label: 'See the year map' },
  wa: 'Hello Modern Age Coders, I would like a free first maths class. My child is in Year ',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Built from DfE programmes of study and assessment calendars',
  spec: [
    ['Covers', 'Reception to Year 11 in England'],
    ['Ages', '4 to 16'],
    ['Key stages', 'EYFS, KS1, KS2, KS3, KS4'],
    ['National checks', 'Five, from Reception to GCSE'],
    ['Also', 'Scotland, P1 to S3'],
    ['Classes', 'Group of 15 to 20 or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['First class', 'Free']
  ],
  capsuleQ: 'In short',
  capsule: 'In England, school maths runs from Reception (age 4 to 5) to Year 11 (age 15 to 16) across five stages: the EYFS, Key Stages 1 and 2 with a list for every year, then Key Stages 3 and 4, which are each one programme. National checks fall in Reception, Year 2 (optional), Year 4, Year 6 and Year 11. Modern Age Coders teaches every one of these years live online, in a group or 1-on-1, with Elementary Maths, Middle School Maths and GCSE Maths courses. We are not connected with the DfE, STA or any exam board.',

  picks: {
    eyebrow: 'Courses by stage',
    h2: 'Three courses that cover the years on this page',
    lede: 'One for primary, one for the first secondary years, one for the GCSE years. The catalogue below adds early number for the youngest.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'YY / 01', title: 'Elementary Maths', note: 'Years 1 to 6: place value, the four operations, fractions to percentages, shape.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'YY / 02', title: 'Middle School Maths', note: 'Key Stage 3: algebra, proportion, negatives and geometry.' },
      { course: 'gcse-mathematics-mastery', code: 'YY / 03', title: 'GCSE Maths', note: 'Years 10 and 11, either tier, any English board.' }
    ]
  },

  sections: [
    {
      id: 'map', tint: 'tint', eyebrow: 'The year map',
      h2: 'What maths is taught in each year in England?',
      lede: 'One row per school year. Ages and checks come from gov.uk\'s year table; the content column is our short pick from that year\'s statutory statements.',
      body: [
        { kind: 'p', html: 'The government describes the shape simply: "The national curriculum is organised into blocks of years called \'key stages\' (KS)." Reception has early learning goals, not a programme of study. Years 1 to 6 each have their own statutory list. Years 7 to 9 share one Key Stage 3 programme and Years 10 and 11 one Key Stage 4 programme, so for those five rows the split by year is our illustration, not a legal one.' },
        { kind: 'table', mt: true, caption: 'Maths in England, year by year (ages and checks from gov.uk; content selected by us from the DfE programmes of study and the EYFS framework)', head: ['Year', 'Stage', 'Age', 'Headline maths that year', 'National check'], rows: [
          ['Reception', 'EYFS', '4 to 5', 'Numbers to 10 and how each is made; subitising up to 5; counting aloud past 20; comparing quantities up to 10', 'Reception baseline (first 6 weeks); EYFS profile (April to June)'],
          ['Year 1', 'KS1', '5 to 6', 'Counting to and across 100; one more and one less; halves and quarters; adding and subtracting in one step', 'None in maths'],
          ['Year 2', 'KS1', '6 to 7', 'Addition and subtraction facts to 20 recalled fluently; the 2, 5 and 10 tables; thirds and quarters; time to five minutes', 'Optional KS1 tests, May'],
          ['Year 3', 'Lower KS2', '7 to 8', 'The 3, 4 and 8 tables; column addition and subtraction; counting in tenths; perimeter; clock numerals I to XII', 'None'],
          ['Year 4', 'Lower KS2', '8 to 9', 'All tables to 12 × 12; counting back through zero; decimal forms of a quarter, a half and three quarters; Roman numerals to C; area by counting squares; first-quadrant coordinates', 'Multiplication tables check, June'],
          ['Year 5', 'Upper KS2', '9 to 10', 'Numbers to at least 1 000 000; square and cube numbers; primes; long multiplication; thousandths; percentages', 'None'],
          ['Year 6', 'Upper KS2', '10 to 11', 'Numbers to 10 000 000; long division; ratio; first algebra with simple formulae; the mean; parts of a circle; all four quadrants', 'KS2 national tests, May'],
          ['Year 7', 'KS3', '11 to 12', 'Algebra used to generalise arithmetic; the four operations with negatives, fractions and mixed numbers; prime factors (order set by the school)', 'None'],
          ['Year 8', 'KS3', '12 to 13', 'Linear equations; percentages above 100%; proportion; straight-line graphs; angle facts (order set by the school)', 'School check of maths progress expected (no start year yet)'],
          ['Year 9', 'KS3', '13 to 14', 'The nth term of arithmetic sequences; standard form; Pythagoras\' theorem and trigonometric ratios (order set by the school)', 'None'],
          ['Year 10', 'KS4', '14 to 15', 'Quadratic and simultaneous equations; vectors; for higher attainers, surds and the sine and cosine rules', 'Some take GCSEs'],
          ['Year 11', 'KS4', '15 to 16', 'The rest of the KS4 programme, then revision for three GCSE papers', 'GCSE Maths, May and June']
        ] },
        { kind: 'source', html: 'Sources: gov.uk, <a class="ag-inline-link" href="https://www.gov.uk/national-curriculum" rel="noopener" target="_blank">The national curriculum</a> (year, age and assessment table); DfE, <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study" rel="noopener" target="_blank">Mathematics programmes of study</a> for key stages 1 to 4; DfE, <a class="ag-inline-link" href="https://www.gov.uk/government/publications/early-years-foundation-stage-framework--2" rel="noopener" target="_blank">EYFS statutory framework</a> from September 2026. All read on 1 November 2026.' },
        { kind: 'p', mt: true, html: 'Each primary stage opens with a one-line aim. Key Stage 1 seeks "confidence and mental fluency with whole numbers, counting and place value"; lower Key Stage 2 wants pupils to "become increasingly fluent with whole numbers and the four operations"; upper Key Stage 2 is meant to "develop the connections that pupils make between multiplication and division with fractions, decimals, percentages and ratio". From Year 7 the order is the school\'s, since the KS3 text says "Decisions about progression should be based on the security of pupils\' understanding". And gov.uk adds that "Other types of school, like academies and private schools, do not have to follow the national curriculum."' }
      ]
    },
    {
      id: 'checks', tint: 'deep', eyebrow: 'National checks',
      h2: 'Which school years have a national maths test or check?',
      lede: 'Reception (two of them), Year 2 (optional), Year 4, Year 6 and Year 11. The dates below are those published for 2026 to 2027.',
      body: [
        { kind: 'p', html: 'gov.uk puts it in one line: "Your child will be tested at the end of some key stages." The DfE\'s assessment calendar adds that "Assessment arrangements for the academic year 2026 to 2027 will remain unchanged", and that "Schools must keep these periods free for administering the assessments." GCSE dates come from the exam boards; the Year 11 row uses AQA\'s.' },
        { kind: 'table', mt: true, caption: 'National assessments that include maths, school year 2026 to 2027 (dates from DfE Primary assessments: future dates and the AQA 8300 key dates page)', head: ['Year', 'Assessment', 'Maths content and format', 'When in 2026 to 2027'], rows: [
          ['Reception', 'Reception baseline assessment', 'A short task, designed to take around 20 minutes, on early maths and language; no expected standard and no pass or fail', 'First 6 weeks after a child enters Reception'],
          ['Reception', 'EYFS profile', 'Teacher judgement against the early learning goals, including Number and Numerical Patterns', 'April to June 2027, completed no later than 30 June'],
          ['Year 2', 'Optional KS1 tests', 'Maths Paper 1 arithmetic (about 20 minutes) and Paper 2 reasoning (about 35 minutes)', 'Recommended during May 2027'],
          ['Year 4', 'Multiplication tables check', '25 on-screen questions, 6 seconds each, tables 2 to 12', 'Two weeks from Monday 7 June 2027'],
          ['Year 6', 'KS2 national tests', 'Paper 1 arithmetic, Papers 2 and 3 reasoning', 'Maths on Wednesday 12 May and Thursday 13 May 2027'],
          ['Year 11', 'GCSE Mathematics (AQA 8300 as example)', 'Three papers of 1 hour 30 minutes, Paper 1 without a calculator; Foundation grades 1 to 5, Higher 4 to 9', '14 May, 27 May and 14 June 2027, mornings']
        ] },
        { kind: 'source', html: 'Sources: DfE, <a class="ag-inline-link" href="https://www.gov.uk/guidance/primary-assessments-future-dates" rel="noopener" target="_blank">Primary assessments: future dates</a>, updated 12 October 2026; STA optional KS1 and tables check guidance; AQA, <a class="ag-inline-link" href="https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/key-dates" rel="noopener" target="_blank">GCSE Mathematics 8300 key dates</a>. Edexcel and OCR sit on the same three mornings.' },
        { kind: 'p', mt: true, html: 'Only the KS2 tests and GCSE carry real weight for a family. KS2 results are scaled scores, which the STA says "are used to report national curriculum test outcomes", and they pass to the secondary school. The Year 2 papers are the school\'s choice, and the times tables check is brief: the STA leaflet says "On average, the check should take no longer than 5 minutes to complete." The DfE already lists the 2028 KS2 tests for Monday 8 May to Thursday 11 May 2028.' }
      ]
    },
    {
      id: 'primary', tint: '', eyebrow: 'Primary',
      h2: 'Primary, Reception to Year 6: which page covers which year?',
      lede: 'Thirteen pages: seven for single year groups, two for Key Stage 1, and four that follow one strand across years.',
      body: [
        { kind: 'two',
          leftH3: 'The early years and Key Stage 1',
          left: [
            'Start with <a class="ag-inline-link" href="/reception-maths-online-uk">Reception maths online</a> if your child is four or five. It reads the early learning goals line by line and makes the case for play with a grown-up over formal lessons.',
            '<a class="ag-inline-link" href="/year-1-maths-tutor-online">Year 1 maths</a> is about the step from counting objects to working with numbers to 100, including why a missing-number sum such as 7 + ? = 12 is hard at six. <a class="ag-inline-link" href="/year-2-maths-tutor-online">Year 2 maths</a> picks up where that leaves off, with subtraction checked by addition and the first three times tables.',
            'For both years together, <a class="ag-inline-link" href="/ks1-maths-tuition-online">KS1 maths tuition</a> sets out what a seven year old should know when Key Stage 1 ends, and <a class="ag-inline-link" href="/ks1-sats-maths-explained">KS1 SATs maths explained</a> takes apart the optional Year 2 papers, including what a scaled score means.'
          ],
          rightH3: 'Lower Key Stage 2',
          right: [
            '<a class="ag-inline-link" href="/year-3-maths-tutor-online">Year 3 maths</a> is the first year of written column methods. That page shows how column addition and subtraction are taught in school.',
            '<a class="ag-inline-link" href="/year-4-maths-tutor-online">Year 4 maths</a> covers the whole Year 4 list, of which the tables are one part. Two narrower pages sit beside it. <a class="ag-inline-link" href="/multiplication-tables-check-year-4-practice">Multiplication tables check practice</a> is only about the June check and the six-second design behind it, while <a class="ag-inline-link" href="/times-tables-tutor-online-uk">times tables tutoring</a> follows the tables from Year 2 to Year 4 and counts how few facts are truly hard.'
          ] },
        { kind: 'two', mt: true,
          leftH3: 'Upper Key Stage 2',
          left: [
            '<a class="ag-inline-link" href="/year-5-maths-tutor-online">Year 5 maths</a> is written for the year when numbers jump to a million and fractions start turning into decimals and percentages. In grammar school areas it is also the 11+ run-up.',
            '<a class="ag-inline-link" href="/year-6-maths-tutor-online">Year 6 maths</a> handles the last primary year as a calendar: ratio and algebra in the autumn, the SATs in May, and what the secondary school receives afterwards. The test itself, paper by paper, has its own page: <a class="ag-inline-link" href="/ks2-sats-maths-papers-explained">KS2 SATs maths papers explained</a>.'
          ],
          rightH3: 'Across the whole of primary',
          right: [
            'Many English primary schools plan maths with a published scheme, and the one parents ask about most is White Rose. <a class="ag-inline-link" href="/white-rose-maths-help-at-home">White Rose Maths help at home</a> explains how its years, blocks and small steps fit together and how to help at home. We are not affiliated with White Rose Education.'
          ] }
      ]
    },
    {
      id: 'secondary', tint: 'tint', eyebrow: 'Secondary',
      h2: 'Secondary, Year 7 to Year 11: how does maths build towards GCSE?',
      lede: 'One page per secondary year, each built around what that year is for, since no year owns its own list.',
      body: [
        { kind: 'ol', items: [
          '<strong>Year 7, the reset year.</strong> <a class="ag-inline-link" href="/year-7-maths-tutor-online">Year 7 maths</a> compares the Year 6 list with the start of Key Stage 3 and what a new school knows about a pupil in September.',
          '<strong>Year 8, the middle.</strong> <a class="ag-inline-link" href="/year-8-maths-tutor-online">Year 8 maths</a> is about equations, graphs and proportion, and about the government\'s new expectation that schools check maths progress in Year 8.',
          '<strong>Year 9, the audit.</strong> <a class="ag-inline-link" href="/year-9-maths-tutor-online">Year 9 maths</a> treats the end of Key Stage 3 as a checklist: which statements GCSE leans on hardest, and why maths is never one of the Year 9 options.',
          '<strong>Year 10, the first GCSE year.</strong> <a class="ag-inline-link" href="/year-10-maths-tutor-online">Year 10 maths</a> shows how the GCSE content is printed in three typefaces, how weighting shifts towards algebra at Higher tier, and how to read a mock as a diagnosis.',
          '<strong>Year 11, the exam year.</strong> <a class="ag-inline-link" href="/year-11-maths-tutor-online">Year 11 maths</a> lays out the June 2027 papers for all three English boards, the contingency day and results day, and what grade 4 means afterwards.'
        ] },
        { kind: 'p', mt: true, html: 'Key Stage 3 quietly turns arithmetic into algebra; the DfE\'s phrase is "use algebra to generalise the structure of arithmetic". A child who knows 7 + 5 = 5 + 7 is ready for a + b = b + a.' },
        { kind: 'p', mt: true, html: 'GCSE Maths has two tiers: AQA\'s 8300, for example, sets Foundation for grades 1 to 5 and Higher for grades 4 to 9. For all three KS3 years at once see <a class="ag-inline-link" href="/ks3-maths-tuition-online">KS3 maths tuition</a>; for the boards side by side, our <a class="ag-inline-link" href="/aqa-vs-edexcel-vs-ocr-gcse-maths">AQA, Edexcel and OCR comparison</a>.' }
      ]
    },
    {
      id: 'scotland', tint: '', eyebrow: 'Scotland',
      h2: 'How does maths work year by year in Scotland?',
      lede: 'Scotland does not use year groups or key stages. It uses stages (P1 to P7, then S1 upwards) and Curriculum for Excellence levels, and there is no national maths exam before the senior phase.',
      body: [
        { kind: 'p', html: 'In Scotland a child works through numeracy and mathematics at Early, First, Second, Third and Fourth level. Progress is reported at four stages, which also sit the online National Standardised Assessments.' },
        { kind: 'table', mt: true, caption: 'Scottish stages, expected CfE level and numeracy results, 2024-25 (Scottish Government, Achievement of CfE Levels 2024-25, published 9 December 2025)', head: ['Stage', 'Expected level', 'Numeracy: share achieving it, 2024-25', 'National Standardised Assessment'], rows: [
          ['P1', 'Early level', '85 per cent', 'Yes, numeracy and literacy'],
          ['P4', 'First level', '78 per cent', 'Yes'],
          ['P7', 'Second level', '79 per cent', 'Yes'],
          ['S3', 'Third level or better', '91 per cent', 'Yes'],
          ['S3', 'Fourth level', '68 per cent', 'Same assessment']
        ] },
        { kind: 'source', html: 'Sources: Scottish Government, <a class="ag-inline-link" href="https://www.gov.scot/publications/achievement-of-curriculum-for-excellence-cfe-levels-2024-25/" rel="noopener" target="_blank">Achievement of CfE Levels 2024-25</a>, chapter 1, tables 1 and 2; National Standardised Assessments for Scotland, parents and carers page and questions and answers page. All read on 1 November 2026.' },
        { kind: 'p', mt: true, html: 'Those percentages are "based on teachers\' professional judgements", not on a test score, and the standardised assessments have no pass mark. The question-and-answer page for those assessments is blunt about it: "There is no pass or fail." Nor are the Benchmarks a tick list: Education Scotland says "They should not be ticked off individually for assessment purposes."' },
        { kind: 'two', mt: true,
          leftH3: 'Primary in Scotland',
          left: [
            '<a class="ag-inline-link" href="/scottish-primary-maths-tutor-online">Scottish primary maths tutoring</a> covers P1 to P7, Early to Second level, and explains why there are no P7 maths past papers.'
          ],
          rightH3: 'S1 to S3',
          right: [
            '<a class="ag-inline-link" href="/s1-s3-maths-tutor-online-scotland">S1 to S3 maths tutoring</a> explains Third and Fourth level and why S3 shapes the S4 course. The exam itself is on our <a class="ag-inline-link" href="/national-5-maths-tuition-online">National 5 maths</a> page.'
          ] }
      ]
    },
    {
      id: 'thread', tint: 'tint', eyebrow: 'One idea, five stages',
      h2: 'How does one maths idea grow from Year 2 to GCSE?',
      lede: 'Most topics return each year, deeper. Here is one thread of ours, three quarters, through the programmes of study.',
      body: [
        { kind: 'ol', items: [
          '<strong>Year 2: a part of a whole.</strong> The Year 2 list includes finding thirds and quarters "of a length, shape, set of objects or quantity". <em>Our question:</em> three quarters of 8 sweets. <em>Thinking:</em> 4 equal groups of 2; 3 groups is 6.',
          '<strong>Year 4: a decimal.</strong> Year 4 asks children to "recognise and write decimal equivalents to" a quarter, a half and three quarters. <em>Thinking (ours):</em> a quarter of 100 hundredths is 25 hundredths, so three quarters is 0.75.',
          '<strong>Year 6: a percentage and a ratio.</strong> Year 6 expects pupils to "recall and use equivalences between simple fractions, decimals and percentages" and to solve "problems involving the relative sizes of two quantities". <em>Our question:</em> three quarters of a class walk to school; give the percentage and the ratio of walkers to the rest. <em>Thinking:</em> 75%, and 3 : 1.',
          '<strong>Key Stage 3: an operator above 100%.</strong> The KS3 programme asks pupils to "work with percentages greater than 100%" and to "interpret fractions and percentages as operators". <em>Our question:</em> a plant is 40 cm tall and grows to 175% of that height. How tall is it? <em>Thinking:</em> 175% is 1.75, so 40 × 1.75 = 70 cm.',
          '<strong>Key Stage 4: an exact value.</strong> At GCSE, higher-attaining students learn to "change recurring decimals into their corresponding fractions". <em>Our question:</em> show that 0.7575... (75 repeating) is 25/33. <em>Thinking:</em> let x = 0.7575...; then 100x = 75.7575...; subtracting gives 99x = 75, so x = 75/99 = 25/33.'
        ] },
        { kind: 'p', mt: true, html: 'A child who stalls at step four usually has a gap at step two. When Year 8 goes wrong, the fix is often a Year 4 idea, and the map shows where to look.' }
      ]
    },
    {
      id: 'choose', tint: '', eyebrow: 'How to choose',
      h2: 'How do you find the right year page for your child?',
      lede: 'Five steps, in order.',
      body: [
        { kind: 'ol', items: [
          '<strong>Confirm the school year, not just the age.</strong> gov.uk says "Most children start reception full-time in September after their fourth birthday." Our reading: a year group runs on birthdays from September to August.',
          '<strong>Check which nation\'s curriculum applies.</strong> The map on this page is England\'s. Scotland is above; Wales and Northern Ireland are not covered here.',
          '<strong>Find the next national check.</strong> A Year 3 child has the tables check next; a Year 9 student has GCSE two years out.',
          '<strong>Read the row before your child\'s row.</strong> If the previous year\'s headline content is not secure, start there.',
          '<strong>Then open the year page, or book a free class.</strong> A free class shows which row your child is really working at.'
        ] },
        { kind: 'p', mt: true, html: '<strong>A worked example (ours).</strong> A child was born in March 2018. Which year are they in during 2026 to 2027, and which national check comes next? They turned 4 in March 2022, so under the gov.uk rule they started Reception in September 2022. Counting on one year each September gives Year 1 in 2023 to 2024, Year 2 in 2024 to 2025, Year 3 in 2025 to 2026 and Year 4 in 2026 to 2027. The Year 4 row carries the multiplication tables check, which the DfE lists in the two weeks from Monday 7 June 2027, so the pages to open are Year 4 and the tables check.' }
      ]
    },
    {
      id: 'changes', tint: 'deep', eyebrow: 'What is changing',
      h2: 'Is the maths curriculum in England changing?',
      lede: 'Yes, but not this school year.',
      body: [
        { kind: 'p', html: 'The November 2025 government response says it will "publish the final revised national curriculum by spring 2027" and implement it "for first teaching from September 2028". For maths it promises to review Key Stages 1 to 3 "with a particular focus on resequencing content (particularly in the \'number\' domain)", so some rows above may move. GCSEs are to be updated "for first teaching from 2029 onwards".' },
        { kind: 'table', mt: true, caption: 'Announced changes and their timing (Government response to the Curriculum and Assessment Review, November 2025; DfE Primary assessments: future dates, October 2026)', head: ['Change', 'Timing as published', 'Who it affects first (our reading)'], rows: [
          ['2026 to 2027 assessments', 'Unchanged', 'Every year group this school year'],
          ['Revised curriculum first taught', 'September 2028', 'Schools from that September'],
          ['Year 8 maths progress check by schools', 'Expectation announced; no start year in the text we read', 'Future Year 8 groups'],
          ['Updated GCSEs first taught', '2029 onwards', 'Year 7 or below in 2026 to 2027, at the earliest']
        ] },
        { kind: 'p', mt: true, html: 'The last column is our arithmetic: a child in Year 8 now reaches Year 10 in September 2028 and sits GCSE on the current specification. On Year 8 itself the response says: "We will expect all schools to assess pupil progress in writing and maths in Year 8".' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'Four stages of school maths, and what each one asks',
    lede: 'Our grouping of the twelve years into the four shifts we see most in class.',
    table: { caption: 'What a child should be able to show at the end of each stage (our summary of the programmes of study)', head: ['Stage', 'Years', 'What secure looks like'], rows: [
      ['1. Count and compose', 'Reception to Year 2', 'Place value to 100, bonds to 20 recalled, halves and quarters'],
      ['2. Calculate', 'Years 3 and 4', 'Tables to 12 × 12, column methods, tenths and hundredths'],
      ['3. Connect', 'Years 5 and 6', 'Fraction, decimal and percentage as one amount; long methods; first ratio'],
      ['4. Generalise', 'Years 7 to 11', 'Letters for any number; equations solved and checked; proportion']
    ] },
    left: { h3: 'Stages, not ages', ps: [
      'Families who teach at home may find our <a class="ag-inline-link" href="/maths-for-home-educated-children-uk">home education maths page</a> useful for planning across stages.'
    ] },
    right: { h3: 'Stage 4 is the long one', ps: [
      'Students who reach it early can stretch with <a class="ag-inline-link" href="/ukmt-maths-challenge-tutoring">UKMT challenge tutoring</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catalogue',
    h2: 'Nine maths courses arranged by school stage',
    lede: 'From first counting to GCSE, plus three for extra depth.',
    bands: [
      { num: 'I', h3: 'Early years and primary', sub: 'Reception to Year 6', courses: [
        { code: 'UK / YY1 / 01', slug: 'early-math-foundations', title: 'Early Maths Foundations', blurb: 'Concrete, playful number for ages 4 to 7.' },
        { code: 'UK / YY1 / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary Maths', blurb: 'The primary years, strand by strand.' },
        { code: 'UK / YY1 / 03', slug: 'ks2-sats-maths-course', title: 'KS2 SATs Maths', blurb: 'The three Year 6 papers, taught calmly.' }
      ] },
      { num: 'II', h3: 'Secondary', sub: 'Year 7 to Year 11', courses: [
        { code: 'UK / YY2 / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle School Maths', blurb: 'Key Stage 3 algebra, proportion and geometry.' },
        { code: 'UK / YY2 / 02', slug: 'gcse-mathematics-mastery', title: 'GCSE Maths', blurb: 'Foundation or Higher, any English board.' },
        { code: 'UK / YY2 / 03', slug: '11-plus-maths-preparation-course-uk', title: '11 Plus Maths Prep', blurb: 'For families in selective areas, from Year 5.' }
      ] },
      { num: 'III', h3: 'Beyond the year list', sub: 'Depth and play', courses: [
        { code: 'UK / YY3 / 01', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Number sense without tricks, ages 5 to 10.' },
        { code: 'UK / YY3 / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Puzzles that reward patient reasoning.' },
        { code: 'UK / YY3 / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Sequences and graphs explored in Python, ages 10 to 15.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lessons',
    h2: 'How our maths classes run for any school year',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Teachers are in India; slots are quoted in UK time.',
    slots: [
      { time: 'After school', l: 'Common for primary children.' },
      { time: 'Evening', l: 'Often chosen by secondary students.' },
      { time: 'Weekend morning', l: 'Good for longer GCSE sessions.' }
    ],
    cells: [
      { h3: 'Placed by strand', p: 'We find the row your child is really on for each strand before planning.' },
      { h3: 'One year back first', p: 'Gaps from the previous year are closed before new content goes on top.' },
      { h3: 'Free first class', p: 'One live class, no payment, and a plain view of where to start.' },
      { h3: 'Group or 1-on-1', p: 'A same-stage group of 15 to 20, or a tutor for one child.' }
    ]
  },

  projectsH2: 'Work our students made in class',
  projectsLede: 'Ordinary class projects, unmarked. More in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'What parents wrote on Google, word for word.',

  fees: {
    h2: 'Fees for maths classes, Reception to Year 11',
    lede: 'The first class is free. Then one monthly fee, lower in a group than 1-on-1, due only once a course and weekly slot are agreed. No contract.',
    free: ['A live class at your child\'s level', 'A check across the main strands', 'Booked with a phone number'],
    group: ['15 to 20 children at the same stage', 'One tutor across the year', 'Short practice between classes', 'A note to parents each term'],
    one: ['A tutor for one child', 'Planned around the next national check', 'Suited to closing earlier gaps']
  },

  faq: {
    eyebrow: 'Year-by-year questions',
    h2: 'Questions parents ask about maths in each school year',
    items: [
      { q: 'What maths is taught in each year in the UK?', a: 'In England: numbers to 10 in Reception; place value to 100 and the first tables in Years 1 and 2; written methods and all tables to 12 × 12 in Years 3 and 4; large numbers, percentages, ratio and early algebra in Years 5 and 6; then Key Stages 3 and 4 towards GCSE.' },
      { q: 'Which year groups have maths tests in England?', a: 'Reception has the baseline assessment and the EYFS profile, Year 2 has optional KS1 tests, Year 4 has the multiplication tables check, Year 6 has the KS2 national tests and Year 11 sits GCSE Maths. The other years have no national maths test.' },
      { q: 'What age is each school year in England?', a: 'gov.uk lists Reception as 4 to 5, rising a year at a time to Year 11 at 15 to 16. Most children start Reception in the September after their fourth birthday.' },
      { q: 'When are the 2027 KS2 SATs and the times tables check?', a: 'The DfE lists the KS2 tests from Monday 10 May to Thursday 13 May 2027, with the maths papers on 12 and 13 May. The multiplication tables check runs in the two weeks from Monday 7 June 2027.' },
      { q: 'Are KS1 SATs still compulsory?', a: 'No. They are optional, and the STA recommends May 2027 for schools that use them.' },
      { q: 'Why is there no Year 7, 8 or 9 maths list?', a: 'Key Stage 3 is one programme for all three years, and each school decides the order.' },
      { q: 'Is there a Year 8 maths test now?', a: 'Not a national one. In November 2025 the government said it will expect schools to assess maths progress in Year 8; no start year has been given.' },
      { q: 'How is Scottish maths different from England?', a: 'Scotland uses stages (P1 to P7, then S1 upwards) and CfE levels from Early to Fourth. P1, P4, P7 and S3 take online assessments with no pass or fail.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Every time is given in UK time.' },
      { q: 'Are you linked to the Department for Education or an exam board?', a: 'No. We are independent of the DfE, the STA, Education Scotland and every exam board, and we promise no grades.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Wider pages',
    h2: 'Other maths pages for UK families',
    lede: 'Pages that cover a whole key stage, a qualification or a different kind of test.',
    items: [
      { href: '/ks2-maths-tuition-online', label: 'KS2 maths tuition', p: 'Four junior years seen as a single stretch.' },
      { href: '/ks3-maths-tuition-online', label: 'KS3 maths tuition', p: 'The three-year programme from Year 7.' },
      { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition', p: 'The qualification across every English board.' },
      { href: '/11-plus-maths-tuition', label: '11+ maths tuition', p: 'Selective entry tests, which the year map leaves out.' },
      { href: '/national-5-maths-tuition-online', label: 'National 5 maths', p: 'The first Scottish maths exam after S3.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Our UK hub', p: 'Every UK maths and coding page we run.' }
    ]
  },

  start: {
    h2: 'Book a free maths class for any school year',
    lede: 'Give the year group and a number; we ring at a UK time you pick. The class places your child on the map, strand by strand.',
    readFirst: 'Prefer to read first? The <a class="ag-inline-link" href="/courses/elementary-mathematics-complete-masterclass">Elementary Maths</a>, <a class="ag-inline-link" href="/courses/comprehensive-middle-school-mathematics-mastery">Middle School Maths</a> and <a class="ag-inline-link" href="/courses/gcse-mathematics-mastery">GCSE Maths</a> course pages list each syllabus, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes the method.',
    note: 'WhatsApp reaches us fastest and costs nothing from a UK phone. Answers come from our India team, on a +91 number.',
    formNote: 'Nothing to pay and nothing to sign. You get one reply with a proposed time.'
  },

  footer: {
    cols: [
      { h4: 'By stage', links: [
        { href: '/ks2-maths-tuition-online', label: 'KS2 maths' },
        { href: '/ks3-maths-tuition-online', label: 'KS3 maths' },
        { href: '/gcse-maths-tuition-online', label: 'GCSE maths' },
        { href: '/national-5-maths-tuition-online', label: 'National 5 maths' }
      ] },
      { h4: 'More from us', links: [
        { href: '/primary-maths-challenge-practice', label: 'Primary Maths Challenge' },
        { href: '/maths-for-home-educated-children-uk', label: 'Home education maths' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Twelve school years of maths, mapped and taught live'
  },

  personalityCss: `
.ag-root.ag-ukyy .ag-hero h1 { letter-spacing: -0.015em; font-weight: 680; max-width: 24ch; }
.ag-root.ag-ukyy .ag-capsule { border-left-width: 6px; border-radius: 4px; }
.ag-root.ag-ukyy .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-ukyy .ag-table caption { text-align: left; font-weight: 600; font-size: 0.95em; }
.ag-root.ag-ukyy #map .ag-table td:first-child { font-weight: 640; white-space: nowrap; }
.ag-root.ag-ukyy .ag-steps li { margin-bottom: 11px; }
`,

  dossier: {
    curriculumAuthority: 'England: gov.uk The national curriculum (key stages as blocks of years; year and age table Reception 4 to 5 through Year 11 15 to 16; assessments by year: baseline and EYFS profile, optional Year 2 tests, Year 4 times tables check, Year 6 national tests lasting less than 4 hours, GCSEs in Years 10 and 11; academies and private schools need not follow it); gov.uk school starting age (Reception in the September after the fourth birthday); EYFS framework from September 2026 (ELGs Number and Numerical Patterns; profile no later than 30 June); DfE programmes of study KS1 to KS4 (key stage aims; year statements Y1 to Y6; KS3 algebra generalising arithmetic, percentages above 100%, nth term, standard form; KS4 recurring decimals, quadratics, vectors); DfE Primary assessments future dates (2026 to 2027 unchanged; KS1 optional May 2027; KS2 10 to 13 May 2027, maths 12 and 13 May; MTC from 7 June 2027; 2028 dates); STA optional KS1 guidance, MTC parents leaflet, KS2 parents leaflet and ARA (results 6 July); AQA 8300 specification and key dates; Government response to the Curriculum and Assessment Review (revised curriculum by spring 2027, first taught September 2028, GCSEs from 2029, Year 8 maths progress expectation, number resequencing). Scotland: Achievement of CfE Levels 2024-25; National Standardised Assessments parents page; Education Scotland Benchmarks.',
    localProject: 'A hub index for the year-by-year hub. A twelve-row master table (year, stage, age, headline maths, national check) from gov.uk, the EYFS framework and the programmes of study, with the secondary rows labelled as our illustrative split of single key-stage programmes; a checks table with 2026 to 2027 dates from the DfE, STA and AQA; one H2 per hub section introducing every member page in fresh sentences; a Scotland table of stages, expected levels and 2024-25 numeracy shares; an original five-stage thread following three quarters from Year 2 to a recurring decimal at GCSE; five choosing steps with an original birthday-to-year worked example; and a dated table of announced curriculum changes. Lesson family: a hub index page.',
    requiredMentions: [
      'organised into blocks of years called',
      'Your child will be tested at the end of some key stages',
      'Schools must keep these periods free for administering the assessments',
      'the check should take no longer than 5 minutes to complete',
      'Most children start reception full-time in September after their fourth birthday',
      'resequencing content (particularly in the',
      'Two weeks from Monday 7 June 2027',
      'Maths on Wednesday 12 May and Thursday 13 May 2027',
      'interpret fractions and percentages as operators',
      'change recurring decimals into their corresponding fractions'
    ],
    sources: [
      { claim: 'gov.uk, The national curriculum: key stages, year and age table, assessments by year, academies and private schools.', url: 'https://www.gov.uk/national-curriculum' },
      { claim: 'gov.uk, School admissions: school starting age.', url: 'https://www.gov.uk/schools-admissions/school-starting-age' },
      { claim: 'DfE, Mathematics programmes of study (key stages 1 and 2; key stage 3; key stage 4).', url: 'https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study' },
      { claim: 'DfE, EYFS statutory framework for group and school-based providers, from September 2026.', url: 'https://www.gov.uk/government/publications/early-years-foundation-stage-framework--2' },
      { claim: 'DfE, Primary assessments: future dates (updated 12 October 2026).', url: 'https://www.gov.uk/guidance/primary-assessments-future-dates' },
      { claim: 'AQA, GCSE Mathematics 8300 specification and key dates.', url: 'https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/key-dates' },
      { claim: 'DfE, Government response to the Curriculum and Assessment Review (November 2025).', url: 'https://www.gov.uk/government/publications/curriculum-and-assessment-review-final-report-government-response' },
      { claim: 'Scottish Government, Achievement of CfE Levels 2024-25.', url: 'https://www.gov.scot/publications/achievement-of-curriculum-for-excellence-cfe-levels-2024-25/' }
    ],
    rejectedClaims: [
      'Ages for Scottish stages (P1 to S3): not stated in the Scottish sources we read, so no ages are printed for Scotland.',
      'A fixed year for each Key Stage 3 and Key Stage 4 topic: the programmes are per key stage; the year split in the table is labelled as ours.',
      'A start year for the Year 8 maths progress check: none in the government response text we read.',
      'Wales and Northern Ireland curricula: not researched for this page, so not described.',
      'Edexcel and OCR GCSE paper dates are not restated here; they are on the Year 11 page with their own sources.',
      'Any promise of a test score, a grade or a school place: declined.'
    ]
  }
};
