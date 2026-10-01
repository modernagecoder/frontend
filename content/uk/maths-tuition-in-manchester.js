'use strict';
// Maths tuition in Manchester (ag- maths by city, UK cluster Phase 11 pilot).
// Read on 1 October 2026 by curl, quotes grepped from the raw text:
//  - NCETM, North West One Maths Hub page: "Welcome to North West One Maths Hub. The Lead School for the hub is
//    Altrincham Grammar School for Girls."; local council areas listed: Bury, Manchester, Oldham, Rochdale, Stockport.
//    (NCETM find-your-hub page: "The 40 Maths Hubs cover all state-funded schools in England".)
//  - University of Manchester, Department of Mathematics, "Schools, colleges and the public": MathsBombe ("Every fortnight
//    a new chapter is released online consisting of two mathematical puzzles."; open to Years 12 and 13 and below in
//    England and Wales); The Alan Turing Cryptography Competition; 'Taking Maths Further' days "usually for a group of
//    schools for (mainly) Year 10 students", "There is no charge, and lunch is provided."; Mathematical Modelling Day,
//    "aimed at year 12 students and held in June"; northwestern partner for the mA*ths Online and Further mA*ths Online
//    Programme in 2026/27. Department home page image alt text: "Alan Turing Building".
//  - DfE, GCSE mathematics subject content (2013), statistics item 4: "appropriate measures of central tendency
//    (median, mean, mode and modal class) and spread (range, including consideration of outliers, quartiles and
//    inter-quartile range)"; item 3: cumulative frequency graphs and histograms for grouped data.
//  - gov.uk, multiplication tables check collection: "The multiplication tables check ( MTC ) is statutory for all
//    year 4 pupils registered at state-funded maintained schools, special schools or academies, including free schools,
//    in England."
//  - TfGM and metrolink.co.uk both answered curl with HTTP 202 and an empty body (a bot check); not circumvented, not used.
// Local project (our calculation): OpenStreetMap via one Overpass query, 1 October 2026 (osm_base 08:45:35Z): 23 Metrolink
// route relations, 99 named stops, 101 distinct pairs of neighbouring stops. Straight-line (great-circle) distance between
// the mean mapped stop positions of each pair, in metres: mean 952.9, median 819.5, Q1 621.2, Q3 1158.7, IQR 537.5,
// min 217.9 (Market Street to Piccadilly Gardens), max 3502.3 (Bury to Radcliffe). Upper fence Q3 + 1.5 IQR = 1965.0:
// five outliers (Radcliffe to Whitefield 2121.2, Monsall to Victoria 2516.3, Newhey to Shaw and Crompton 2759.2,
// Derker to Shaw and Crompton 3043.6, Bury to Radcliffe 3502.3). Without them: mean 857.3, median 788.8.
// Grouped estimates of the mean: 250 m classes 959.2 (+6.2), 500 m classes 962.9 (+10.0), 1,000 m classes 905.9 (-47.0).
// Interpolated medians: 820.7, 838.2, 753.7. 500 m classes: 16, 51, 21, 8, 1, 2, 1, 1. The sum of the gaps is not printed:
// straight lines are not track length, and a sum would invite comparison with published route lengths.
// Spine: is the typical gap between Metrolink stops the mean or the median? Family: mean vs median under skew,
// quartiles and the 1.5 IQR outlier rule, estimating the mean and median from grouped data.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'MANCHESTER MATHS', label: 'Maths tuition in Manchester', blurb: 'Primary to A level and adult maths for Manchester, with a statistics project that asks how far apart the Metrolink stops really are.' },
  slug: 'maths-tuition-in-manchester',
  code: 'mtm',
  accent: '#813C39',
  accentRationale: 'Manchester maths: a muted mill-brick red, chosen by hand and kept clear of the purple on our Manchester coding page',
  pageType: 'city',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Maths tuition in Manchester',
  title: 'Maths Tuition in Manchester | GCSE, A Level and KS2 Online',
  description: 'Online maths tutor in Manchester for ages 6 to 67: KS2 and SATs, KS3, GCSE, A level, Further Maths and adult maths, with a Metrolink statistics project.',
  ogDescription: 'Maths tuition for Manchester, from the Year 4 multiplication check to Further Maths and adult refreshers, taught live online in small groups or one to one.',
  twitterDescription: 'Manchester maths, taught live online: is the typical gap between Metrolink stops the mean or the median?',
  pageName: 'Maths Tuition in Manchester',
  webPageDescription: 'Live online mathematics tuition for learners in Manchester from age 6 to 67, covering primary maths, Key Stage 3, GCSE, A level and Further Maths, and adult maths, with a statistics project built on the Metrolink network.',
  courseDescription: 'Live online maths lessons for Manchester learners at every stage, in groups of five to ten at one level or one to one, taught to the national curriculum and the GCSE and A level specifications.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Maths tuition in Manchester',
  navLinks: [
    { href: '#stages', label: 'Stages' },
    { href: '#metrolink', label: 'Metrolink' },
    { href: '#grouped', label: 'Grouped data' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Manchester &middot; Maths from age 6 to 67 &middot; Live online, small groups or one to one',
  h1: 'Maths tuition in Manchester',
  lede: 'Ask a Manchester commuter how far apart the tram stops are and you will get a feeling, not a number. We measured it. Between the 99 named Metrolink stops in OpenStreetMap there are 101 pairs of neighbours, and the straight-line gaps between them average 952.9 metres. Yet half the gaps are shorter than 819.5 metres. Two honest answers, 133 metres apart, from the same list: that gap between the mean and the median is the whole of GCSE statistics in one tram map. This page explains how we teach maths to Manchester learners from the Year 4 multiplication tables check to Further Maths and adult refreshers, and uses the Metrolink as a running example.',
  secondaryCta: { href: '#metrolink', label: 'See the Metrolink numbers' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for a learner in Manchester.',
  heroNote: 'Maths only on this page &middot; Primary, secondary, sixth form and adults &middot; No link with any Manchester school or university',
  spec: [
    ['Who', 'Learners aged 6 to 67 in Manchester'],
    ['Primary', 'Times tables, the Year 4 check, Year 6 tests'],
    ['GCSE', 'Foundation or Higher, AQA, Edexcel or OCR'],
    ['Sixth form', 'A level Maths and Further Maths'],
    ['Adults', 'GCSE resits, Functional Skills topics, refreshers'],
    ['Format', 'Live video, 5 to 10 per group or one to one'],
    ['Teachers', 'Based in India, booked on UK time'],
    ['Local project', 'Metrolink stop gaps, mean against median']
  ],
  capsuleQ: 'In short',
  capsule: 'As an online maths tutor we teach Manchester learners live from age 6 to 67: primary number, times tables and the Year 6 SATs, KS3, GCSE maths at Foundation or Higher tier for AQA, Edexcel or OCR, IGCSE, A level Maths and Further Maths, and adult maths from GCSE maths resits to plain refreshers. Group classes hold between five and ten learners of matching level, and private lessons are on offer too. Lessons follow the national curriculum and the GCSE and A level specifications, and every learner works on real data as well as textbook questions. Our Manchester example is the Metrolink: across 101 pairs of neighbouring stops, the mean straight-line gap is 952.9 metres and the median is 819.5 metres, because a few long gaps on the lines out to Bury, Oldham and Rochdale pull the mean up. We charge nothing for the opening lesson; continuing costs USD 100 monthly for a group seat or USD 150 monthly for private teaching.',

  picks: {
    eyebrow: 'Where a Manchester learner starts',
    h2: 'GCSE, A level and primary maths come first',
    lede: 'Pick by stage. The full list, from early number to university maths, is further down the page.',
    items: [
      { course: 'gcse-mathematics-mastery', code: 'MCR / 1', title: 'GCSE mathematics', note: 'Whichever board and tier a Manchester school uses, with statistics practised on real data such as the tram gaps below.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'MCR / 2', title: 'A level maths', note: 'Pure, statistics and mechanics, for learners who want the reasons behind each method, not only the method.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'MCR / 3', title: 'Primary maths, Years 1 to 6', note: 'Place value, times tables for the Year 4 check, fractions and the reasoning that the Year 6 tests ask for.' }
    ]
  },

  sections: [
    {
      id: 'stages', tint: 'tint', eyebrow: 'Every age',
      h2: 'Maths tutor in Manchester: what we teach from KS1 to A level',
      lede: 'Manchester schools follow the national curriculum for England, so the stages below are the ones a Manchester child moves through. Adults join at whatever point they left off.',
      body: [
        { kind: 'table', caption: 'Maths stages for a Manchester learner, and what our lessons concentrate on', head: ['Stage', 'Ages', 'What we concentrate on'], rows: [
          ['Key Stage 1', '5 to 7', 'Counting, place value to 100, number bonds, simple fractions of shapes and quantities.'],
          ['Key Stage 2', '7 to 11', 'Times tables to 12 × 12 before the Year 4 check, written methods, fractions and decimals, and the reasoning questions of the Year 6 tests.'],
          ['Key Stage 3', '11 to 14', 'Algebra as a language, ratio, negative numbers, angle facts, and the first proper statistics.'],
          ['GCSE', '14 to 16', 'Foundation or higher tier: number, algebra, ratio, geometry, probability and statistics, including box plots and grouped data.'],
          ['A level', '16 to 18', 'Pure maths, statistics and mechanics; Further Maths for those who want more proof and more abstraction.'],
          ['Adults', '18 to 67', 'Refreshers, helping with homework, maths for work, and a return to GCSE content at an adult pace.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Primary: the Year 4 check and beyond',
          left: [
            'The government says the multiplication tables check "is statutory for all year 4 pupils registered at state-funded maintained schools, special schools or academies, including free schools, in England". In lessons we treat the tables as facts to understand, not a chant: 7 × 8 is 56 because 7 × 8 is 7 × 4 doubled, and a child who sees that can rebuild a fact they forget.',
            'By Year 6 the work is about reasoning. A child who can explain why 0.3 is bigger than 0.25 is ready for the tests; a child who only knows a rule about lining up digits is not yet.'
          ],
          rightH3: 'Secondary and sixth form',
          right: [
            'From Year 7 we build algebra slowly and properly, because almost everything later depends on it. At GCSE we teach to the learner\'s exam board and tier, and at A level we keep the statistics tied to real data sets so that a hypothesis test is about something.',
            'Our national pages go deeper on each stage: <a class="ag-inline-link" href="/ks2-maths-tuition-online">Key Stage 2</a>, <a class="ag-inline-link" href="/ks3-maths-tuition-online">Key Stage 3</a>, <a class="ag-inline-link" href="/gcse-maths-tuition-online">GCSE</a>, <a class="ag-inline-link" href="/a-level-maths-tuition-online">A level</a> and <a class="ag-inline-link" href="/further-maths-tuition-online">Further Maths</a>.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.gov.uk/government/collections/multiplication-tables-check" rel="noopener" target="_blank">gov.uk, multiplication tables check</a>, read on 1 October 2026. The age ranges are the usual ones for each key stage in England.' }
      ]
    },
    {
      id: 'metrolink', tint: 'plain', eyebrow: 'The Manchester project',
      h2: 'How far apart are the Metrolink stops?',
      lede: 'One list of 101 distances, measured by us, carries a learner from rounding at primary school to box plots at GCSE and spherical distance at A level.',
      body: [
        { kind: 'two',
          left: [
            'On 1 October 2026 we downloaded the Metrolink routes from OpenStreetMap, the free map that volunteers keep up to date. The 23 route records name 99 stops. Wherever two stops sit next to each other on any route, we counted that pair once, which gives 101 pairs of neighbours. For each pair we took the straight-line distance between the mapped stop positions, the distance a bird would fly, not the length of track.',
            'The shortest gap is 217.9 metres, from Market Street to Piccadilly Gardens in the city centre. The longest is 3,502.3 metres, from Bury to Radcliffe. Every number on this page is our own calculation from that download, and the map will change as volunteers edit it.'
          ],
          right: [
            'The mean gap is 952.9 metres. The median, the middle gap when all 101 are put in order, is 819.5 metres. So which is the typical distance between stops? A learner who says the mean is not wrong, and a learner who says the median is not wrong either. The interesting question is why they differ by 133 metres.',
            'The answer is the shape of the data. Most gaps are short and similar, but a handful are very long, and all five of the longest are on the lines to Bury and to Oldham and Rochdale. Those few big values pull the mean upwards. The median only cares about the middle position, so it barely moves.'
          ] },
        { kind: 'table', mt: true, caption: 'The 101 gaps between neighbouring Metrolink stops, our calculation from OpenStreetMap on 1 October 2026', head: ['Measure', 'Value', 'What it tells a learner'], rows: [
          ['Mean', '952.9 m', 'Add all 101 gaps and share the total equally.'],
          ['Median', '819.5 m', 'The 51st gap when they are sorted from shortest to longest.'],
          ['Lower quartile', '621.2 m', 'A quarter of the gaps are shorter than this.'],
          ['Upper quartile', '1,158.7 m', 'A quarter of the gaps are longer than this.'],
          ['Interquartile range', '537.5 m', 'The spread of the middle half, which ignores the extremes.'],
          ['Range', '3,284.4 m', 'Longest minus shortest, which is all about the extremes.'],
          ['Gaps under 500 m', '16', 'Mostly in the city centre and around Salford Quays.'],
          ['Gaps over 1,500 m', '13', 'Seven of them on the lines out to Bury, Oldham and Rochdale.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Outliers, by the rule GCSE uses',
          left: [
            'The DfE content for GCSE maths asks for measures of "spread (range, including consideration of outliers, quartiles and inter-quartile range)". A common convention calls a value an outlier if it lies more than 1.5 interquartile ranges above the upper quartile. Here that fence is 1,158.7 + 1.5 × 537.5 = 1,965.0 metres.',
            'Five gaps lie beyond it: Radcliffe to Whitefield (2,121.2 m), Monsall to Victoria (2,516.3 m), Newhey to Shaw and Crompton (2,759.2 m), Derker to Shaw and Crompton (3,043.6 m) and Bury to Radcliffe (3,502.3 m). Take those five away and the mean falls to 857.3 metres while the median only slips to 788.8 metres.'
          ],
          rightH3: 'What each stage takes from it',
          right: [
            'At primary, learners round each gap to the nearest 100 metres and find the shortest and the longest. At Key Stage 3 they find the mean, median and range and argue about which to quote. At GCSE they draw the box plot, test for outliers and estimate from grouped data. At A level they ask why we used a great-circle formula rather than flat Pythagoras, and how much difference it makes over three kilometres.',
            'The point at every stage is the same: an average is a choice, and a good mathematician says which one they chose and why.'
          ] },
        { kind: 'source', html: 'Data: <a class="ag-inline-link" href="https://www.openstreetmap.org/copyright" rel="noopener" target="_blank">OpenStreetMap contributors</a>, Metrolink route relations, one Overpass query on 1 October 2026. Distances are straight lines between mapped stop positions, calculated by Modern Age Coders; they are not track lengths and are not published by Transport for Greater Manchester. GCSE wording: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/gcse-mathematics-subject-content-and-assessment-objectives" rel="noopener" target="_blank">DfE, GCSE mathematics subject content</a>.' }
      ]
    },
    {
      id: 'grouped', tint: 'deep', eyebrow: 'A GCSE skill, checked',
      h2: 'Estimating the mean from a grouped table, and how far off it is',
      lede: 'GCSE questions often hide the raw data and give only a grouped frequency table. Because we have all 101 gaps, we can see exactly how good the estimate is.',
      body: [
        { kind: 'table', caption: 'The Metrolink gaps grouped into 500 metre classes (our calculation)', head: ['Gap, metres', 'Frequency', 'Class midpoint', 'Midpoint × frequency'], numCols: [1, 2, 3], rows: [
          ['0 to under 500', '16', '250', '4,000'],
          ['500 to under 1,000', '51', '750', '38,250'],
          ['1,000 to under 1,500', '21', '1,250', '26,250'],
          ['1,500 to under 2,000', '8', '1,750', '14,000'],
          ['2,000 to under 2,500', '1', '2,250', '2,250'],
          ['2,500 to under 3,000', '2', '2,750', '5,500'],
          ['3,000 to under 3,500', '1', '3,250', '3,250'],
          ['3,500 to under 4,000', '1', '3,750', '3,750']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The method every GCSE student learns: assume each gap sits at the middle of its class, multiply, add and divide. The products add to 97,250, and 97,250 ÷ 101 = 962.9 metres. The true mean is 952.9 metres, so the estimate is 10.0 metres too high, about 1%.',
            'The modal class is 500 to under 1,000 metres, with 51 of the 101 gaps. The median falls in the same class: reading from a cumulative frequency graph, the estimate is 838.2 metres against a true median of 819.5.'
          ],
          right: [
            'Change the class width and the estimate changes. With 250 metre classes the estimated mean is 959.2 metres, only 6.2 too high. With 1,000 metre classes it is 905.9, which is 47.0 metres too low, because a wide class hides where its gaps really sit.',
            'That is a lesson worth more than the formula: grouping throws information away, and the wider the groups, the more you throw away. Students who have seen it happen with real numbers stop treating an estimated mean as if it were exact.'
          ] },
        { kind: 'source', html: 'All figures are Modern Age Coders\' calculations from the OpenStreetMap download above. The table and the worked estimates are ours and are not taken from any exam paper.' }
      ]
    },
    {
      id: 'local', tint: 'tint', eyebrow: 'Maths around Manchester',
      h2: 'The Maths Hub, the university and what a keen learner can join',
      lede: 'A lot of maths happens in Manchester outside any classroom of ours. We list it here because families ask; we run none of it and are linked to none of it.',
      body: [
        { kind: 'three', cells: [
          { h3: 'North West One Maths Hub', p: 'The NCETM page says the lead school for the North West One Maths Hub is Altrincham Grammar School for Girls, and that the hub serves schools in Bury, Manchester, Oldham, Rochdale and Stockport. Maths Hubs work with teachers and schools, not with families directly.' },
          { h3: 'University of Manchester', p: 'The Department of Mathematics, in the Alan Turing Building, runs activities for school students. Its MathsBombe competition releases puzzles online: "Every fortnight a new chapter is released online consisting of two mathematical puzzles."' },
          { h3: 'Days for Years 10 and 12', p: 'The department lists Taking Maths Further days, usually for groups of schools and mainly for Year 10; it says "There is no charge, and lunch is provided." A Mathematical Modelling Day for Year 12 is held in June.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'The same department also runs The Alan Turing Cryptography Competition, and it says it will continue in 2026/27 as the northwestern partner for the mA*ths Online and Further mA*ths Online Programme for Year 12 and 13 students. Schools usually arrange places on these, so a learner who is interested should ask their maths teacher.',
            'National challenges run alongside them. Our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">UK competitions calendar</a> lists the UKMT challenges and others by age, and our <a class="ag-inline-link" href="/maths-olympiad-training-uk">olympiad page</a> explains how we prepare learners for the harder rounds.'
          ],
          right: [
            'For a learner who enjoys puzzles, the Metrolink project above is a good warm-up for this kind of competition. It has no single right answer and rewards a clear explanation. In our lessons, a student who argues well for the median scores as highly as one who computes the mean correctly.',
            'Our lessons are live on video, so a learner in Wythenshawe, Moston or Didsbury joins from home after school. Because we group by level rather than by postcode, a classmate might be logging in from Leeds or Bristol.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.ncetm.org.uk/hubs/north-west-one-maths-hub/" rel="noopener" target="_blank">NCETM, North West One Maths Hub</a>; <a class="ag-inline-link" href="https://www.maths.manchester.ac.uk/connect/schools-colleges-public/" rel="noopener" target="_blank">University of Manchester, Department of Mathematics, schools, colleges and the public</a>. Both read on 1 October 2026. We are independent of the NCETM, the Maths Hubs, the University of Manchester and every Manchester school.' }
      ]
    },
    {
      id: 'adults', tint: 'plain', eyebrow: 'Maths for grown-ups',
      h2: 'Adults learning maths in Manchester',
      lede: 'Plenty of the people who ask us about maths are adults. Many left school some time ago and want to understand what they were once only told to do.',
      body: [
        { kind: 'three', cells: [
          { h3: 'GCSE resits and refreshers', p: 'A GCSE maths resit, or simply percentages, fractions and algebra from the start, at an adult pace and without the embarrassment of a classroom. Many adults find the reasons make sense now in a way they never did at fourteen.' },
          { h3: 'Helping with homework', p: 'Parents learn the methods their children are taught now, from the grid method to bar models, so homework at the kitchen table stops being an argument.' },
          { h3: 'Maths for work', p: 'Spreadsheets, rates, statistics for reports, and the numbers behind data work. Our <a class="ag-inline-link" href="/functional-skills-maths-tuition-online">Functional Skills page</a> and <a class="ag-inline-link" href="/online-maths-classes-for-adults-in-uk">adult maths page</a> say more.' }
        ] },
        { kind: 'p', mt: true, html: 'Adults use the same Metrolink data as the teenagers, and often get more from it: anyone who has waited at a stop in the rain has an opinion on the gaps between them. The difference is that an adult tends to ask straight away whether the median is the fairer number to quote, which is exactly the right question.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'A route through',
    h2: 'Four steps from times tables to statistics that mean something',
    lede: 'The steps below are the order we teach in. A learner can join at any of them, and the free first lesson tells us which.',
    table: { caption: 'From number facts to choosing an average, with a sign that each step is secure', head: ['Usually', 'Step', 'The sign it is secure'], rows: [
      ['Years 3 and 4', '1. Facts', 'Knows the tables to 12 × 12 and can rebuild one from another'],
      ['Years 5 to 7', '2. Methods', 'Multiplies, divides and works with fractions on paper, accurately and neatly'],
      ['Years 8 to 10', '3. Algebra and data', 'Writes a rule with letters and finds a mean, median and range from a table'],
      ['Years 10 to 13', '4. Judgement', 'Chooses an average or a model and explains, in words, why it fits the data']
    ] },
    left: { h3: 'Starting late', ps: [
      'A GCSE student who joins in Year 11 still gains a lot, as long as we fix the foundations first. A shaky understanding of fractions shows up everywhere from ratio to probability.',
      'If the gap is larger than the time left before an exam, we will say so honestly at the free lesson.'
    ] },
    right: { h3: 'After an exam', ps: [
      'The maths keeps going. Many learners move on to <a class="ag-inline-link" href="/courses/statistics-probability-maths-course">statistics and probability</a> or to <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a>, where the Metrolink distances become a short program.',
      'Learners who enjoy problems for their own sake often try competition maths next.'
    ] }
  },

  catalogue: {
    eyebrow: 'Every course',
    h2: 'Popular maths courses for Manchester learners',
    lede: 'Headed by the four that UK parents and students ask about most, GCSE, A level, 11 plus and IGCSE, then sorted by stage. Tap a card for its syllabus.',
    bands: [
      { num: 'I', h3: 'Most asked for', sub: 'Exam and entry courses', courses: [
        { code: 'MTM / A1', slug: 'gcse-mathematics-mastery', title: 'GCSE mathematics', blurb: 'Foundation or higher tier, matched to the board a school enters.' },
        { code: 'MTM / A2', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'Pure, statistics and mechanics.' },
        { code: 'MTM / A3', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths', blurb: 'For families next door in Trafford and beyond who sit a grammar school test.' },
        { code: 'MTM / A4', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'For learners at schools that sit the international papers.' }
      ] },
      { num: 'II', h3: 'Primary', sub: 'Ages 6 to 11', courses: [
        { code: 'MTM / B1', slug: 'early-math-foundations', title: 'Early maths foundations', blurb: 'Counting, shape and number sense for the youngest learners.' },
        { code: 'MTM / B2', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths, Years 1 to 6', blurb: 'Every primary topic, with the why before the how.' },
        { code: 'MTM / B3', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Working sums out in the head without guessing.' },
        { code: 'MTM / B4', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus arithmetic', blurb: 'A bead frame that slowly moves inside the head.' }
      ] },
      { num: 'III', h3: 'Secondary and stretch', sub: 'KS3 and beyond', courses: [
        { code: 'MTM / C1', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Key Stage 3 maths', blurb: 'Algebra, ratio, geometry and the start of statistics.' },
        { code: 'MTM / C2', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'For a learner who needs algebra rebuilt from the ground.' },
        { code: 'MTM / C3', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'From data to hypothesis testing.' },
        { code: 'MTM / C4', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Problems with no set method, for UKMT-minded learners.' }
      ] },
      { num: 'IV', h3: 'Applied and adult', sub: 'Maths for work and interest', courses: [
        { code: 'MTM / D1', slug: 'college-mathematics-complete-masterclass', title: 'University maths', blurb: 'Calculus, linear algebra and the start of analysis.' },
        { code: 'MTM / D2', slug: 'complete-business-finance-mathematics-mastery', title: 'Business and finance maths', blurb: 'Interest, investment and risk, worked through.' },
        { code: 'MTM / D3', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data science', blurb: 'Statistics and linear algebra behind data work.' },
        { code: 'MTM / D4', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Shortcuts for arithmetic, learned once the basics hold.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lesson times',
    h2: 'After school, evenings and weekends, on UK time',
    lede: 'Teaching happens from India, where clocks never go forward or back. Between late October and late March the two countries are five and a half hours apart; in British Summer Time the difference shrinks to four and a half. Every slot is agreed and shown in UK time.',
    slots: [
      { time: 'Weekday, after school', l: 'For primary and secondary learners.' },
      { time: 'Weekday evening', l: 'For sixth formers and adults after work.' },
      { time: 'Weekend morning', l: 'For anyone who prefers a fresh start.' }
    ],
    cells: [
      { h3: 'The same teacher each week', p: 'Whoever spotted a slip on Tuesday is the one who checks for it the following Tuesday.' },
      { h3: 'Short reports home', p: 'A few lines after lessons on what clicked and what still wobbles.' },
      { h3: 'Five to ten per group', p: 'Everyone at the same level, so an explanation lands for all of them.' },
      { h3: 'Real data in lessons', p: 'Metrolink gaps, weather records and census tables, as well as textbook questions.' },
      { h3: 'One to one if needed', p: 'For a specific gap, an exam close at hand, or a learner who prefers it.' },
      { h3: 'Maths, explained', p: 'We ask learners to say why a method works, not only to follow it.' }
    ]
  },

  projectsH2: 'What our students go on to build',
  projectsLede: 'Learners who started with numbers like these went on to make the four projects below. The <a class="ag-inline-link" href="/student-labs">student labs</a> show many others.',
  reviewsLede: 'Copied without edits from reviews that families and learners left for us on Google.',

  fees: {
    h2: 'Fees',
    lede: 'Billed monthly in US dollars at one rate for every country outside India, with nothing to sign up front and nothing to pay to join.',
    free: ['A real lesson at the right level', 'Our honest view afterwards', 'No card details asked for'],
    group: ['Five to ten learners at one level', 'A regular teacher', 'Marked work, talked through', 'A certificate at the end'],
    one: ['A teacher for one learner', 'Aimed at the exact gap', 'Useful in the months before an exam']
  },

  faq: {
    eyebrow: 'Manchester maths questions',
    h2: 'What Manchester families and adult learners ask us',
    items: [
      { q: 'What is maths tuition?', a: 'Maths tuition is teaching outside school hours that follows the learner rather than a class: it finds the gaps, explains the ideas behind them and builds confidence step by step. Ours is live and online, in small groups of five to ten at one level or one to one.' },
      { q: 'What is the best age to start maths tuition?', a: 'There is no single right age. We teach from 6, when number sense and times tables are being built, and we also teach adults up to 67. The useful moment is when a learner first feels lost, before the gap grows.' },
      { q: 'Will you follow the GCSE exam board my child is entered for?', a: 'Yes. We teach to the national curriculum for England and to whichever board the school uses, AQA, Edexcel or OCR, at Foundation or Higher tier, or to IGCSE where that is the course.' },
      { q: 'Can you help with the Year 4 multiplication tables check?', a: 'Yes. We teach the tables to 12 × 12 so that each fact can be rebuilt from another, which makes them stick. The check is statutory in Year 4 at state-funded schools in England.' },
      { q: 'Do you coach for Further Maths or the UKMT maths challenge?', a: 'Both. Sixth formers can add Further Maths topics alongside A level Maths, and keen younger pupils can work on UKMT-style problems in our competition maths course.' },
      { q: 'What is the difference between the mean and the median?', a: 'The mean shares the total equally; the median is the middle value when the data are in order. In our Metrolink data the mean gap is 952.9 metres and the median 819.5, because a few long gaps pull the mean up.' },
      { q: 'Are lessons in person anywhere in Manchester?', a: 'No. All lessons are live on video with a real teacher, so a learner anywhere in the city joins from home.' },
      { q: 'Do you promise grades?', a: 'No. We teach carefully and report honestly on progress, but no tutor can promise a grade, and we do not.' },
      { q: 'I am an adult in Manchester who needs a GCSE maths resit. Can you help?', a: 'Yes. We teach the GCSE content again at an adult pace, from whichever topic feels weakest. The entry is made through a college or exam centre, and we have no link with the NCETM, any Maths Hub or the university.' },
      { q: 'How much does a maths tutor in Manchester cost?', a: 'Nothing for the trial lesson. Ongoing places cost USD 100 per month in a small group or USD 150 per month one to one, with no joining fee and no minimum term.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related',
    h2: 'More for Manchester learners',
    lede: 'Our national maths pages by stage, and our coding page for the city.',
    items: [
      { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition', p: 'Our national page on GCSE maths, by tier and board.' },
      { href: '/a-level-maths-tuition-online', label: 'A level maths tuition', p: 'Pure, statistics and mechanics at sixth form.' },
      { href: '/ks2-maths-tuition-online', label: 'Key Stage 2 maths', p: 'Primary maths from Year 3 to the Year 6 tests.' },
      { href: '/best-coding-class-in-manchester', label: 'Coding classes in Manchester', p: 'Our page on coding for Manchester learners.' },
      { href: '/11-plus-maths-tuition-trafford', label: '11 plus maths in Trafford', p: 'For families next door preparing for the Trafford test.' },
      { href: '/coding-classes-in-united-kingdom', label: 'The UK index', p: 'Our list of nations, cities, towns and maths pages.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson',
    lede: 'Tell us the age or school year and which topic feels hardest. The trial is a proper lesson, and afterwards you get a frank account of where the learner stands.',
    readFirst: 'Prefer to look around first? The <a class="ag-inline-link" href="/courses">course list</a> and our note on <a class="ag-inline-link" href="/how-we-teach">teaching method</a> are a good place to start.',
    note: 'Messages on WhatsApp get the fastest reply. The number has an Indian code because the team is in India; there is no UK office and every lesson happens online.',
    formNote: 'No card needed. We write back to fix a time that suits you.'
  },

  footer: {
    cols: [
      { h4: 'Maths', links: [
        { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition' },
        { href: '/a-level-maths-tuition-online', label: 'A level maths tuition' },
        { href: '/further-maths-tuition-online', label: 'Further maths tuition' },
        { href: '/online-maths-classes-for-adults-in-uk', label: 'Maths for adults' }
      ] },
      { h4: 'In the UK', links: [
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/best-coding-class-in-manchester', label: 'Coding in Manchester' },
        { href: '/maths-tuition-in-birmingham', label: 'Maths tuition in Birmingham' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] }
    ],
    bottomRight: 'Maths at every age, taught live'
  },

  personalityCss: `
.ag-root.ag-mtm .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-mtm .ag-capsule { border-left-width: 5px; }
.ag-root.ag-mtm .ag-section-head h2 { max-width: 24ch; }
.ag-root.ag-mtm .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-mtm .ag-table td:nth-child(2) { font-weight: 600; }
.ag-root.ag-mtm .ag-spec dt { letter-spacing: 0.12em; }
.ag-root.ag-mtm .ag-three h3 { letter-spacing: -0.006em; }
.ag-root.ag-mtm .ag-slots { gap: 1rem; }
`,

  mustMention: ['North West One Maths Hub', 'MathsBombe', 'Taking Maths Further', 'Market Street to Piccadilly Gardens', 'Bury to Radcliffe', '952.9 metres', '819.5 metres', '1,965.0 metres', 'Alan Turing Building'],

  dossier: {
    curriculumAuthority: 'National curriculum for England (DfE); GCSE mathematics subject content (DfE, 2013); multiplication tables check (gov.uk). Manchester schools sit in the North West One Maths Hub area (NCETM).',
    localProject: 'Metrolink stop gaps from OpenStreetMap, 1 October 2026: 99 named stops, 101 neighbouring pairs, straight-line metres. Mean 952.9, median 819.5, Q1 621.2, Q3 1158.7, IQR 537.5, fence 1965.0, five outliers; grouped mean estimates 959.2 / 962.9 / 905.9 for 250 / 500 / 1,000 m classes.',
    requiredMentions: ['North West One Maths Hub', 'MathsBombe', 'Taking Maths Further', 'Market Street to Piccadilly Gardens', 'Bury to Radcliffe', '952.9 metres', '819.5 metres', '1,965.0 metres', 'Alan Turing Building'],
    sources: [
      { claim: 'NCETM, North West One Maths Hub: lead school Altrincham Grammar School for Girls; areas Bury, Manchester, Oldham, Rochdale, Stockport.', url: 'https://www.ncetm.org.uk/hubs/north-west-one-maths-hub/' },
      { claim: 'University of Manchester, Department of Mathematics, schools page: MathsBombe, Alan Turing Cryptography Competition, Taking Maths Further, Mathematical Modelling Day, mA*ths Online partner.', url: 'https://www.maths.manchester.ac.uk/connect/schools-colleges-public/' },
      { claim: 'DfE GCSE mathematics subject content: central tendency and spread including outliers, quartiles and inter-quartile range; grouped data.', url: 'https://www.gov.uk/government/publications/gcse-mathematics-subject-content-and-assessment-objectives' },
      { claim: 'gov.uk: the multiplication tables check is statutory for all year 4 pupils at state-funded schools in England.', url: 'https://www.gov.uk/government/collections/multiplication-tables-check' },
      { claim: 'OpenStreetMap Metrolink route relations (23) and stop nodes, one Overpass query, 1 October 2026.', url: 'https://www.openstreetmap.org/copyright' }
    ],
    rejectedClaims: [
      'TfGM or Metrolink published stop count or network length: both sites returned a bot check (HTTP 202, empty body) to curl; not circumvented, so no published figure is quoted.',
      'Sum of the 101 straight-line gaps as a network length: straight lines are not track, so it is not printed.',
      'Any claim about Manchester exam results or school performance: excluded by the spec (no results tables).',
      'Any statement that the Maths Hub or the university teaches families directly or endorses tuition.',
      'Named outreach staff: not printed.'
    ]
  }
};
