'use strict';
// Maths tuition in Oxford (ag- maths by city, UK cluster Phase 11, row 585).
// Read on 1 October 2026 by curl, quotes grepped from the raw text:
//  - NCETM, Bucks, Berks and Oxon Maths Hub page: lead school Wycombe High School; council areas include Oxfordshire.
//  - University of Oxford, Mathematical Institute, contact page: "Andrew Wiles Building", "Radcliffe Observatory Quarter
//    (550)", "Woodstock Road". Public lectures page: "They are aimed at the General Public, schools and anyone who just
//    wants to come along and hear a bit more about what maths is really about." Outreach page: "The Oxford Mathematics
//    Alphabet is an outreach project showcasing the amazing and wonderful research going on at the Mathematical
//    Institute at the University of Oxford."
//  - DfE, GCSE mathematics subject content (2013), probability item 5: "understand that empirical unbiased samples tend
//    towards theoretical probability distributions, with increasing sample size".
//  - Met Office historic station data, Oxford (oxforddata.txt): "Location: 450900E 207200N, Lat 51.761 Lon -1.262,
//    63 metres amsl"; monthly tmax, tmin, af, rain, sun from 1853.
// Local project (our calculation): 173 complete years 1853 to 2025; yearly rain = our sum of the 12 monthly values
// (1996 has 10 estimated months, 1997 6, 2011 1, 2012 2). Wettest-so-far records: 7 (1853 692.0, 1857 735.4, 1860
// 789.4, 1875 844.3, 1903 913.8, 1960 964.7, 2012 984.4). Driest-so-far: 4 (1853, 1854 449.7, 1902 423.4, 1921 379.3).
// Expected under exchangeable years: H_173 = 5.73. 10,000 shuffles (seed 1853): mean 5.74, 33.3% gave 7 or more.
// Yearly mean of monthly maximum temperature: warm records 10 (1853 12.82 ... 2003 15.81, 2011 15.85, 2020 15.95,
// 2022 16.56), cold records 4 (1853, 1855 12.69, 1860 11.92, 1879 10.92). Driest year 1921 is year 69 of 173:
// chance the minimum of 173 shuffled years falls in the first 69 is 69/173 = 0.40.
// Spine: how many record-breaking years should 173 years of Oxford weather contain? Family: probability that the nth
// value is a record is 1/n, expected number of records is the harmonic number (about ln n + 0.577), simulation by shuffling.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'OXFORD MATHS', label: 'Maths tuition in Oxford', blurb: 'GCSE, A level, KS3 and adult maths for Oxford, with a probability project on record-breaking years in the city weather records.' },
  slug: 'maths-tuition-in-oxford',
  code: 'oxm',
  accent: '#4E6C39',
  accentRationale: 'Oxford maths: a muted meadow green (5.95:1 on white), chosen by hand at least 30 RGB units from every other maths-by-city page and 40 from our coding page for the town',
  pageType: 'city',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Maths tuition in Oxford',
  title: 'Maths Tuition in Oxford | Online Maths Tutor, KS2 to A Level',
  description: 'Online maths tutor for Oxford learners aged 6 to 67: KS2 and SATs, KS3, GCSE, A level, Further Maths topics and adult maths, plus a probability project.',
  ogDescription: 'Oxford has weather records back to 1853. How many record-wet years should 173 years contain? Probability, simulation and how we teach maths at every age.',
  twitterDescription: 'Maths tuition in Oxford, live online: in 173 years of Oxford rainfall, how many years should set a new record?',
  pageName: 'Maths Tuition in Oxford',
  webPageDescription: 'Live online maths tuition for Oxford learners aged 6 to 67, from KS2 and the SATs through KS3, GCSE and A level to adult maths, with a probability project on record-breaking years in the Met Office Oxford series.',
  courseDescription: 'Live online maths lessons for Oxford learners at every stage, one to one or in small groups matched by level, following the national curriculum and the GCSE and A level specifications.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Maths tuition in Oxford',
  navLinks: [
    { href: '#stages', label: 'Stages' },
    { href: '#records', label: 'Records' },
    { href: '#simulation', label: 'Simulation' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Oxford &middot; Maths for every age from 6 to 67 &middot; Live online teaching',
  h1: 'Maths tuition in Oxford',
  lede: 'The Met Office publishes monthly weather figures for Oxford going back to 1853. Add up each year\'s rainfall and you have 173 complete years. Now a question a GCSE student can answer and a professional statistician still enjoys: how many of those years should have been the wettest so far? If every year is equally likely to be the wettest, the chance that year n breaks the record is 1 in n. Add those chances up and the answer is about 5.73. Oxford had 7. This page shows how we teach maths to Oxford learners, from times tables to A level, and uses those records as our running example.',
  secondaryCta: { href: '#records', label: 'Count the record years' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for a learner in Oxford.',
  heroNote: 'This page is about maths only &middot; Primary, secondary, sixth form, adult &middot; We are independent of the university and every Oxford school',
  spec: [
    ['Ages', '6 to 67, across Oxford'],
    ['Primary', 'KS2, times tables, Year 6 SATs'],
    ['KS3', 'Years 7 to 9, probability starts'],
    ['GCSE', 'Foundation or Higher, AQA, Edexcel, OCR'],
    ['A level', 'Maths, with Further Maths topics'],
    ['Adults', 'Resits, statistics, refreshers'],
    ['Lessons', 'Live online, private or 5 to 10 per class'],
    ['Project', 'Record years in 173 years of data']
  ],
  capsuleQ: 'Maths tuition in Oxford, summarised',
  capsule: 'Oxford learners aged 6 to 67 can study maths with Modern Age Coders in live online lessons. Primary children work towards the Year 6 SATs with secure tables; Years 7 to 9 cover KS3; GCSE students are taught at their tier (Foundation or Higher) and board (AQA, Edexcel or OCR), or for IGCSE; sixth formers take A level Maths and can add Further Maths topics; adults resit GCSE or refresh their statistics. A learner can be taught alone or in a class of five to ten at a matching level. Our Oxford project counts record-breaking years in the Met Office series from 1853: of 173 complete years, 7 were the wettest so far, against about 5.73 expected if every year were equally likely to set a record. The first lesson is free; continuing costs USD 100 a month in a class or USD 150 a month one to one.',

  picks: {
    eyebrow: 'Most requested by Oxford families',
    h2: 'GCSE maths, A level maths and KS3',
    lede: 'Most first enquiries from Oxford are about one of these three courses. The full list of our maths courses comes later on the page.',
    items: [
      { course: 'gcse-mathematics-mastery', code: 'OXF / 1', title: 'GCSE maths, both tiers', note: 'Probability, statistics and every other strand of the specification, matched to the school\'s exam board.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'OXF / 2', title: 'A level maths with statistics', note: 'Sequences, series, logarithms and simulation, the tools behind the record-year project below.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'OXF / 3', title: 'KS3 maths for Years 7 to 9', note: 'Fractions, ratio, algebra and first probability, taught so they hold up under GCSE pressure.' }
    ]
  },

  sections: [
    {
      id: 'stages', tint: 'tint', eyebrow: 'Primary to adult',
      h2: 'Maths tutor in Oxford at every stage of learning',
      lede: 'Oxford schools teach the national curriculum for England. The table shows the stages and the thing our lessons care most about at each one.',
      body: [
        { kind: 'table', caption: 'Maths stages for an Oxford learner and our main concern at each', head: ['Stage', 'Ages', 'Our main concern'], rows: [
          ['KS1', '5 to 7', 'Counting reliably, place value and the first ideas of more, less and equal.'],
          ['KS2', '7 to 11', 'Fluent tables by Year 4, fractions and decimals, and reasoning for the end-of-primary SATs.'],
          ['KS3', '11 to 14', 'Algebra, ratio, and probability as a number between 0 and 1.'],
          ['GCSE', '14 to 16', 'Foundation or Higher with AQA, Edexcel or OCR; IGCSE where needed.'],
          ['A level', '16 to 18', 'Series, logarithms, statistical models and mechanics; Further Maths topics on request.'],
          ['Adults', '18 to 67', 'GCSE maths resits, statistics for work, and maths for its own sake.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Primary and the SATs',
          left: [
            'In primary school we keep returning to number until it is fluent and understood. Tables are learned as linked facts: 8 × 7 is double 4 × 7, and a child who sees that can rebuild what they forget.',
            'Probability first appears informally, as words like likely and impossible. We like to turn those words into fractions early, because that makes the step to KS3 much smoother.'
          ],
          rightH3: 'KS3 to A level',
          right: [
            'From Year 7 the work becomes algebraic, and probability becomes a number. At GCSE we teach to the board and tier the school uses; at A level, statistics and pure maths meet in topics like series and simulation, which is exactly where the record-year project lives.',
            'Our national pages give more detail for each stage: <a class="ag-inline-link" href="/ks2-maths-tuition-online">KS2</a>, <a class="ag-inline-link" href="/ks3-maths-tuition-online">KS3</a>, <a class="ag-inline-link" href="/gcse-maths-tuition-online">GCSE</a>, <a class="ag-inline-link" href="/a-level-maths-tuition-online">A level</a> and <a class="ag-inline-link" href="/further-maths-tuition-online">Further Maths</a>.'
          ] },
        { kind: 'source', html: 'Ages shown are those usual in England. This page gives no advice on university admissions.' }
      ]
    },
    {
      id: 'records', tint: 'plain', eyebrow: 'The Oxford project',
      h2: 'How many record-breaking years should 173 years of Oxford rain contain?',
      lede: 'A long, honest data set and a probability result that fits on one line.',
      body: [
        { kind: 'two',
          left: [
            'The Met Office makes historic station data for Oxford freely available: monthly rainfall, temperatures, frost and sunshine from January 1853. We added the twelve monthly rainfall totals for each year from 1853 to 2025, giving 173 complete years. Those yearly totals are our sums, not figures the Met Office publishes, and a few months in 1996, 1997, 2011 and 2012 are marked by the Met Office as estimated.',
            'Then we walked through the years in order, asking each time: is this the wettest year so far? The first year, 1853, counts automatically. After that a new record came in 1857, 1860, 1875, 1903, 1960 and 2012. That is 7 record-wet years in all, ending with 984.4 millimetres in 2012.'
          ],
          right: [
            'Here is the probability idea. Suppose the years were shuffled, with no year more likely than any other to be the wettest. Then among the first n years, each one is equally likely to be the wettest so far, so the chance that year n sets a record is 1/n.',
            'The expected number of records is the sum 1 + 1/2 + 1/3 + ... + 1/173, a harmonic number, which comes to 5.73. Mathematicians know it grows like the natural logarithm of n plus 0.577, and ln 173 + 0.577 is also 5.73. Oxford\'s 7 is a little above that, but well within what chance allows, as the shuffles below show.'
          ] },
        { kind: 'table', mt: true, caption: 'Record-breaking years in the Met Office Oxford series, 1853 to 2025 (our counts from monthly data)', head: ['Record type', 'How many', 'Years', 'Expected if years were shuffled'], rows: [
          ['Wettest so far (yearly rain)', '7', '1853, 1857, 1860, 1875, 1903, 1960, 2012', '5.73'],
          ['Driest so far (yearly rain)', '4', '1853, 1854, 1902, 1921', '5.73'],
          ['Warmest so far (yearly average of monthly maximum)', '10', '1853, 1854, 1857, 1865, 1868, 1921, 2003, 2011, 2020, 2022', '5.73'],
          ['Coolest so far (same measure)', '4', '1853, 1855, 1860, 1879', '5.73']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The driest record is old',
          left: [
            'The driest year in the series is 1921, with 379.3 millimetres, and no year since has beaten it. Is a 104-year wait surprising? Under the shuffle idea, the driest of 173 years is equally likely to be any of them, so the chance it lies among the first 69 years, as 1921 does, is 69/173, about 0.40.',
            'So a record standing for more than a century is not strange at all. Probability often says the opposite of what instinct expects.'
          ],
          rightH3: 'The warm records do not fit',
          right: [
            'Temperature behaves differently. Using the average of the twelve monthly maximum temperatures, there are 10 warm records, four of them since 2003, against the 5.73 the shuffle idea predicts. That pattern is what you would expect if the numbers were drifting upwards rather than shuffled.',
            'We stop at the mathematics: the 1/n rule assumes years are interchangeable, and a learner can test that assumption with data. We make no claim here about causes, which belong to a different subject.'
          ] },
        { kind: 'source', html: 'Data: <a class="ag-inline-link" href="https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/oxforddata.txt" rel="noopener" target="_blank">Met Office historic station data, Oxford</a>, read on 1 October 2026; the file gives the station at latitude 51.761, longitude -1.262, 63 metres above sea level. Yearly totals, averages and record counts are Modern Age Coders calculations; 2026 is left out because it is incomplete and provisional.' }
      ]
    },
    {
      id: 'simulation', tint: 'deep', eyebrow: 'Testing the idea by simulation',
      h2: 'Shuffling the years 10,000 times',
      lede: 'A formula is convincing. A simulation that agrees with it is more convincing, and it is something a GCSE student can run.',
      body: [
        { kind: 'two',
          left: [
            'We took the 173 yearly rainfall totals, shuffled them into a random order, counted the record-wet years, and repeated that 10,000 times. The average number of records across all the shuffles was 5.74, almost exactly the 5.73 the harmonic number predicts.',
            'The DfE content for GCSE asks learners to "understand that empirical unbiased samples tend towards theoretical probability distributions, with increasing sample size". Here you can watch it happen: after 10 shuffles the average wanders, after 10,000 it settles beside the theory.'
          ],
          right: [
            'The shuffles also say how unusual Oxford\'s 7 is. In 33.3 per cent of them there were 7 or more records. One time in three is ordinary, so the rainfall series gives no sign that wet records are becoming more frequent.',
            'The most common counts were 5 and 6, each turning up in about one shuffle in five. Counts as low as 1, which needs the first year to be the wettest of all, happened 54 times in 10,000.'
          ] },
        { kind: 'table', mt: true, caption: 'Number of record-wet years in 10,000 random shuffles of the 173 Oxford yearly totals (our simulation)', head: ['Records', 'Shuffles', 'Share'], numCols: [1, 2], rows: [
          ['1 or 2', '385', '3.9%'],
          ['3 or 4', '2,386', '23.9%'],
          ['5 or 6', '3,902', '39.0%'],
          ['7 or 8', '2,436', '24.4%'],
          ['9 or more', '891', '8.9%']
        ] },
        { kind: 'table', mt: true, caption: 'What each stage takes from the record-year project', head: ['Stage', 'Question', 'Skill'], rows: [
          ['KS2', 'Which was the wettest year in the list?', 'Ordering and comparing decimals'],
          ['KS3', 'What is the chance the 10th year is a record?', 'Probability as a fraction, here 1/10'],
          ['GCSE', 'Do 10,000 shuffles agree with the formula?', 'Relative frequency and sample size'],
          ['A level', 'Why does the sum of 1/n grow like ln n?', 'Series, logarithms and estimation']
        ] },
        { kind: 'source', html: 'Simulation: 10,000 random shuffles of our 173 yearly totals, run by Modern Age Coders with a fixed seed so the result can be repeated. GCSE wording from <a class="ag-inline-link" href="https://www.gov.uk/government/publications/gcse-mathematics-subject-content-and-assessment-objectives" rel="noopener" target="_blank">DfE, GCSE mathematics subject content</a>.' }
      ]
    },
    {
      id: 'local', tint: 'tint', eyebrow: 'Maths in Oxford',
      h2: 'The Maths Hub, public lectures and the UKMT maths challenge',
      lede: 'Oxford has plenty of maths going on outside school. These are public programmes; we are part of none of them.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Mathematical Institute', p: 'The University of Oxford Mathematical Institute is in the Andrew Wiles Building on Woodstock Road. Its Oxford Mathematics Public Lectures are, in its own words, "aimed at the General Public, schools and anyone who just wants to come along and hear a bit more about what maths is really about."' },
          { h3: 'Outreach', p: 'The Institute describes the Oxford Mathematics Alphabet as an outreach project showcasing research at the Mathematical Institute, a gentle way into university-level ideas for a curious teenager or adult.' },
          { h3: 'The Maths Hub', p: 'The NCETM lists Oxfordshire among the areas of the Bucks, Berks and Oxon Maths Hub. Maths Hubs support teachers and schools rather than individual families.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'The UKMT maths challenge papers, which Oxford secondary schools commonly enter, suit a learner who liked the record-year puzzle: short questions, deep thinking. Our <a class="ag-inline-link" href="/maths-challenges">maths challenges page</a> and <a class="ag-inline-link" href="/british-mathematical-olympiad-bmo-preparation">British Olympiad page</a> explain how we prepare.',
            'Our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a> lists national events by age.'
          ],
          right: [
            'All of our teaching is live online, so a learner in Headington, Cowley, Summertown or Botley joins from home. Classes are formed by level, so a classmate could be in Cambridge or Belfast.',
            'This page deliberately says nothing about university applications or admissions tests; we teach maths, and the maths is the same wherever a learner hopes to go next.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.maths.ox.ac.uk/events/public-lectures-events" rel="noopener" target="_blank">Mathematical Institute, public lectures</a>; <a class="ag-inline-link" href="https://www.maths.ox.ac.uk/outreach" rel="noopener" target="_blank">Mathematical Institute, outreach</a>; <a class="ag-inline-link" href="https://www.ncetm.org.uk/hubs/bucks-berks-and-oxon-maths-hub/" rel="noopener" target="_blank">NCETM, Bucks, Berks and Oxon Maths Hub</a>. All read on 1 October 2026. We have no connection with the University of Oxford, the NCETM, the Maths Hubs or the UKMT.' }
      ]
    },
    {
      id: 'adults', tint: 'plain', eyebrow: 'Adult learners',
      h2: 'Maths tutor for adults in Oxford',
      lede: 'Many of our Oxford learners are adults: some need a GCSE pass, some need statistics for work, and some simply want to understand maths they were rushed through at school.',
      body: [
        { kind: 'three', cells: [
          { h3: 'GCSE maths resit', p: 'We teach the GCSE course again from the topics that feel weakest. You enter the exam through a college or exam centre; we get you ready for it.' },
          { h3: 'Statistics for work', p: 'Averages, spread, probability and reading a graph critically, the same reasoning as the record-year project. See also our <a class="ag-inline-link" href="/functional-skills-maths-tuition-online">Functional Skills page</a>.' },
          { h3: 'Maths for pleasure', p: 'Some adults come because they enjoyed a public lecture and want to understand the next one. We welcome that warmly.' }
        ] },
        { kind: 'p', mt: true, html: 'The record-year idea is a favourite with adults, because it explains something everyone notices: records keep getting broken, yet fewer and fewer of them as time goes on. Our <a class="ag-inline-link" href="/online-maths-classes-for-adults-in-uk">adult maths page</a> has more.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The path through probability',
    h2: 'Four steps from likely and unlikely to the harmonic series',
    lede: 'Any learner can begin at any step; the free lesson shows us which.',
    table: { caption: 'From probability words to series, and how we know a learner is ready for the next step', head: ['Typical years', 'Step', 'Ready for the next when they'], rows: [
      ['Years 3 to 5', '1. Chance words', 'Put impossible, unlikely, even, likely and certain in order'],
      ['Years 6 to 8', '2. Probability as a fraction', 'Write the chance of an event as a fraction between 0 and 1'],
      ['Years 9 to 11', '3. Experiments', 'Compare relative frequency with theory and explain the gap'],
      ['Years 12 and 13', '4. Series and simulation', 'Sum a series, estimate it with a logarithm and test it by simulation']
    ] },
    left: { h3: 'Late to GCSE', ps: [
      'A learner joining in Year 11 can still do well. We look first at fractions, because a weak grasp of fractions breaks almost every probability question.',
      'If more needs repairing than the time allows, we will tell you frankly at the free lesson.'
    ] },
    right: { h3: 'After the exam', ps: [
      'Learners who liked the simulation often move to <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a>, where 10,000 shuffles take a fraction of a second, or to our <a class="ag-inline-link" href="/courses/statistics-probability-maths-course">statistics and probability</a> course.',
      'Those who enjoy proof usually try Further Maths topics next.'
    ] }
  },

  catalogue: {
    eyebrow: 'Every maths course',
    h2: 'Popular maths courses for Oxford learners',
    lede: 'Ordered by how often UK families look for them, so GCSE, A level, 11 plus and IGCSE lead. A card opens its syllabus.',
    bands: [
      { num: 'I', h3: 'Most searched for', sub: 'Exam courses', courses: [
        { code: 'OXM / A1', slug: 'gcse-mathematics-mastery', title: 'GCSE maths', blurb: 'Foundation and Higher, matched to the board.' },
        { code: 'OXM / A2', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'Pure, statistics and mechanics in balance.' },
        { code: 'OXM / A3', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths', blurb: 'Selective-test practice for families who need it.' },
        { code: 'OXM / A4', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'International GCSE specifications.' }
      ] },
      { num: 'II', h3: 'Primary', sub: 'KS1 and KS2', courses: [
        { code: 'OXM / B1', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'From Year 1 to the Year 6 SATs.' },
        { code: 'OXM / B2', slug: 'early-math-foundations', title: 'Starting maths', blurb: 'Number and pattern for young children.' },
        { code: 'OXM / B3', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Sums in the head, without guessing.' },
        { code: 'OXM / B4', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus maths', blurb: 'A visual route into mental arithmetic.' }
      ] },
      { num: 'III', h3: 'Secondary and enrichment', sub: 'KS3 and beyond', courses: [
        { code: 'OXM / C1', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'KS3 maths', blurb: 'Algebra, ratio, geometry and probability.' },
        { code: 'OXM / C2', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data, chance and simulation.' },
        { code: 'OXM / C3', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad maths', blurb: 'Problem solving for UKMT and beyond.' },
        { code: 'OXM / C4', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Solid algebra from the ground up.' }
      ] },
      { num: 'IV', h3: 'Adults and higher study', sub: 'For grown-up learners', courses: [
        { code: 'OXM / D1', slug: 'college-mathematics-complete-masterclass', title: 'University-level maths', blurb: 'Calculus, linear algebra and proof.' },
        { code: 'OXM / D2', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data', blurb: 'Statistics for analysts.' },
        { code: 'OXM / D3', slug: 'complete-business-finance-mathematics-mastery', title: 'Finance maths', blurb: 'Growth, interest and risk.' },
        { code: 'OXM / D4', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Quick calculation patterns.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Times of lessons',
    h2: 'Teaching that fits Oxford school days and working weeks',
    lede: 'The clocks in India never change, so our team is 5.5 hours ahead of Oxford from late October to late March and 4.5 hours ahead the rest of the year. Every slot we offer is stated in UK time.',
    slots: [
      { time: 'After school on weekdays', l: 'Younger learners and KS3.' },
      { time: 'Weekday evenings', l: 'Exam years and adults.' },
      { time: 'Saturday and Sunday mornings', l: 'Anyone.' }
    ],
    cells: [
      { h3: 'A familiar face', p: 'One teacher follows the learner through the course.' },
      { h3: 'Short reports', p: 'A few lines after lessons on progress and next steps.' },
      { h3: 'Level-matched classes', p: 'Five to ten learners at a similar point, never a mixed bag.' },
      { h3: 'Long data sets', p: 'Weather records and census tables used alongside past papers.' },
      { h3: 'One to one option', p: 'For an approaching exam or a specific weakness.' },
      { h3: 'Reasons first', p: 'We explain why a method works before drilling it.' }
    ]
  },

  projectsH2: 'Where our students went next',
  projectsLede: 'Learners who began with questions like this one went on to build the projects shown. The <a class="ag-inline-link" href="/student-labs">student labs</a> show many more.',
  reviewsLede: 'Reviews left on our Google profile, reproduced exactly as they were written.',

  fees: {
    h2: 'Fees',
    lede: 'Monthly fees in US dollars, the same everywhere outside India, with no registration charge and no contract.',
    free: ['A complete lesson at the right level', 'A candid view afterwards', 'No card details'],
    group: ['Five to ten learners at one level', 'A steady teacher', 'Homework marked and talked through', 'Certificate at the end'],
    one: ['Private teaching', 'Shaped around one learner', 'Helpful close to an exam']
  },

  faq: {
    eyebrow: 'Oxford maths questions',
    h2: 'Questions about maths tuition in Oxford',
    items: [
      { q: 'What is a harmonic number?', a: 'A harmonic number is the sum 1 + 1/2 + 1/3 and so on up to 1/n. It grows slowly, roughly like the natural logarithm of n plus 0.577. For n = 173 it is about 5.73.' },
      { q: 'How much does a maths tutor in Oxford cost with you?', a: 'The first lesson is free. Ongoing lessons cost USD 100 a month in a class of five to ten, or USD 150 a month one to one. There is no joining fee.' },
      { q: 'Which GCSE boards do your tutors teach?', a: 'AQA, Edexcel and OCR at both tiers, and the IGCSE papers too. We follow the specification the school has chosen.' },
      { q: 'Can an adult in Oxford resit GCSE maths with you?', a: 'Yes. We teach the course again, starting from your weakest topic, and prepare you for an exam you enter through a college or exam centre.' },
      { q: 'Do you teach KS2 maths and the Year 6 SATs?', a: 'Yes, from times tables and the Year 4 check through to the arithmetic and reasoning papers sat in Year 6.' },
      { q: 'Do you teach Further Maths?', a: 'We teach Further Maths topics as an extension of our A level course for students ready to go further. Tell us the board when you book.' },
      { q: 'Do you help with admissions tests for Oxford University?', a: 'No. We teach the school and A level curriculum and problem solving in general. We do not offer admissions test preparation or application advice.' },
      { q: 'What is the best way to understand probability?', a: 'Run experiments and compare them with theory. Rolling a dice 600 times and counting sixes teaches more than a page of rules.' },
      { q: 'Is there a classroom in Oxford we can visit?', a: 'There is not. We teach only over live video, which means a learner in Jericho, Marston or Littlemore studies from their own desk.' },
      { q: 'Do you promise results?', a: 'No. We teach carefully and report honestly, but no tutor can promise a grade.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related',
    h2: 'More for Oxford learners',
    lede: 'National maths pages, our coding page for Oxford and nearby maths pages.',
    items: [
      { href: '/a-level-maths-tuition-online', label: 'A level maths tuition', p: 'Pure, statistics and mechanics.' },
      { href: '/further-maths-tuition-online', label: 'Further Maths tuition', p: 'For sixth formers who want more.' },
      { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition', p: 'Every tier, every board.' },
      { href: '/best-coding-class-in-oxford', label: 'Coding classes in Oxford', p: 'Our coding page for the city.' },
      { href: '/maths-tuition-in-cambridge', label: 'Maths tuition in Cambridge', p: 'Another university city, a percentages project.' },
      { href: '/coding-classes-in-united-kingdom', label: 'The UK index', p: 'Our full list of UK pages.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson in Oxford',
    lede: 'Which year is the learner in, and which topic has stalled? Tell us that and we will plan a real trial lesson, then report back candidly on what we saw.',
    readFirst: 'Want to browse first? Look at our <a class="ag-inline-link" href="/courses">courses</a> or read about <a class="ag-inline-link" href="/how-we-teach">how we teach</a>.',
    note: 'Messages sent on WhatsApp are answered soonest. You will notice an Indian dialling code, since the teaching team works from India; we keep no premises in Oxford and teach entirely online.',
    formNote: 'No card details. We will write back to fix a time.'
  },

  footer: {
    cols: [
      { h4: 'Maths', links: [
        { href: '/a-level-maths-tuition-online', label: 'A level maths tuition' },
        { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition' },
        { href: '/ks3-maths-tuition-online', label: 'KS3 maths tuition' },
        { href: '/maths-olympiad-training-uk', label: 'Maths olympiad training' }
      ] },
      { h4: 'Nearby', links: [
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/best-coding-class-in-oxford', label: 'Coding in Oxford' },
        { href: '/maths-tuition-in-cambridge', label: 'Maths tuition in Cambridge' },
        { href: '/maths-tuition-in-reading', label: 'Maths tuition in Reading' }
      ] }
    ],
    bottomRight: 'Maths for ages 6 to 67, live'
  },

  personalityCss: `
.ag-root.ag-oxm .ag-hero h1 { letter-spacing: -0.021em; }
.ag-root.ag-oxm .ag-capsule { border-left-width: 5px; }
.ag-root.ag-oxm .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-oxm .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-oxm .ag-table td:nth-child(2) { font-weight: 600; }
.ag-root.ag-oxm .ag-spec dt { letter-spacing: 0.1em; }
.ag-root.ag-oxm .ag-three h3 { letter-spacing: -0.005em; }
.ag-root.ag-oxm .ag-slots { gap: 1rem; }
`,

  mustMention: ['Andrew Wiles Building', 'Oxford Mathematics Public Lectures', 'Oxford Mathematics Alphabet', '984.4 millimetres', '379.3 millimetres', '69/173', 'harmonic number', '7 record-wet years', '33.3 per cent'],

  dossier: {
    curriculumAuthority: 'National curriculum for England (DfE); GCSE mathematics subject content (DfE, 2013), probability and relative frequency. Oxfordshire schools sit in the Bucks, Berks and Oxon Maths Hub area (NCETM).',
    localProject: 'Met Office Oxford monthly data, 173 complete years 1853 to 2025, yearly rain as our sum: 7 wettest-so-far records (to 984.4 mm in 2012), 4 driest-so-far (to 379.3 mm in 1921); expected H_173 = 5.73; 10,000 shuffles mean 5.74, 33.3% with 7 or more; yearly mean of monthly max temperature 10 warm and 4 cool records; 1921 as year 69 of 173, chance 69/173 = 0.40.',
    requiredMentions: ['Andrew Wiles Building', 'Oxford Mathematics Public Lectures', 'Oxford Mathematics Alphabet', '984.4 millimetres', '379.3 millimetres', '69/173', 'harmonic number', '7 record-wet years', '33.3 per cent'],
    sources: [
      { claim: 'Met Office historic station data, Oxford: monthly tmax, tmin, af, rain, sun from 1853; Lat 51.761 Lon -1.262, 63 m.', url: 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/oxforddata.txt' },
      { claim: 'University of Oxford Mathematical Institute: Andrew Wiles Building, Woodstock Road; public lectures aimed at the general public and schools; Oxford Mathematics Alphabet outreach project.', url: 'https://www.maths.ox.ac.uk/events/public-lectures-events' },
      { claim: 'NCETM, Bucks, Berks and Oxon Maths Hub: council areas include Oxfordshire.', url: 'https://www.ncetm.org.uk/hubs/bucks-berks-and-oxon-maths-hub/' },
      { claim: 'DfE GCSE mathematics subject content: empirical unbiased samples tend towards theoretical probability distributions.', url: 'https://www.gov.uk/government/publications/gcse-mathematics-subject-content-and-assessment-objectives' }
    ],
    rejectedClaims: [
      'Admissions tests, interviews and applications for the University of Oxford: excluded by the spec, and the page says so.',
      'Any explanation of why warm records are frequent: the page states only that the 1/n assumption fails for that series and leaves causes alone.',
      'Yearly rainfall totals as Met Office figures: they are our sums of monthly values and are labelled as such.',
      'The Radcliffe Meteorological Station name for this series: the Met Office file says only Oxford, so we use that.',
      'Any statement about Oxford exam results or school performance: excluded by the spec.'
    ]
  }
};
