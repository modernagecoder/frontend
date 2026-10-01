'use strict';
// Maths tuition in Bristol (ag- maths by city, UK cluster Phase 11, row 573).
// Read on 1 October 2026 by curl, quotes grepped from the raw text:
//  - NCETM, Boolean Maths Hub page: "The Lead School for the hub is Bristol Metropolitan Academy, part of the Cabot Learning
//    Federation."; council areas listed: Bath and North East Somerset, Bristol, City of, North Somerset, Somerset,
//    South Gloucestershire.
//  - University of Bristol, School of Mathematics, About page: "We recently moved into our new home at the heart of campus,
//    the fully refurbished Grade II-listed Fry Building." (a non-breaking space sits after "the" in the HTML).
//  - University of Bristol, Faculty outreach activities page lists "Numbercrunch book: Maths Toolkit for Making Sense of Your
//    World" among its resources.
//  - DfE GCSE mathematics subject content (2013), statistics item 6: "use and interpret scatter graphs of bivariate data;
//    recognise correlation and know that it does not indicate causation; draw estimated lines of best fit; make predictions;
//    interpolate and extrapolate apparent trends whilst knowing the dangers of so doing".
//  - Nomis, Census 2021 TS061 Method used to travel to work (NM_2078_1), the 57 MSOAs of Bristol (E06000023), and ONS
//    MSOA (December 2021) population weighted centroids (ArcGIS service MSOA_December_2021_EW_PWC_V2).
// Our calculations: for each MSOA, share of residents in work who travel (total minus "work mainly at or from home") by
// bicycle, on foot, driving and by bus; straight-line distance from a point we chose at Bristol Bridge (51.4547, -2.5907)
// to the MSOA centroid, 0.50 to 7.44 km. Least-squares lines (percentage points per km): walking -5.262, intercept 37.693,
// r -0.822; driving +6.489, intercept 30.296, r 0.846; cycling -1.465, intercept 13.871, r -0.599 (Spearman -0.648);
// bus -0.129, r -0.075. Cycling share 2.2% (Bristol 052, 5.57 km) to 18.0% (Bristol 058, 1.67 km); Bristol 020 17.9% at
// 1.93 km; Bristol 054 6.4% at 0.56 km (6.68 points below its line). Farthest area Bristol 008, 7.44 km: walking 12.4%,
// where the walking line predicts -1.43%; the line reaches zero at 7.16 km. Unweighted mean cycling share: 24 areas under
// 3 km 11.9%, 33 areas at 3 km or more 6.3%.
// Spine: does living further from the centre mean fewer Bristol commuters cycle and walk? Family: scatter graphs,
// correlation, lines of best fit, residuals, interpolation and extrapolation, correlation is not causation.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'BRISTOL MATHS', label: 'Maths tuition in Bristol', blurb: 'Maths from primary to A level and adult learning for Bristol, with a scatter graph project on how the city gets to work.' },
  slug: 'maths-tuition-in-bristol',
  code: 'mbs',
  accent: '#15631E',
  accentRationale: 'Bristol maths: a muted harbourside green (7.41:1 contrast on white), chosen by hand and kept apart from the brown on our Bristol coding page',
  pageType: 'city',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Maths tuition in Bristol',
  title: 'Maths Tuition in Bristol | GCSE and A Level Maths Tutor Online',
  description: 'Maths tuition in Bristol for ages 6 to 67: live online lessons for KS2 and SATs, KS3, GCSE, A level and Further Maths, plus adult maths. First lesson free.',
  ogDescription: 'Bristol maths tuition, taught live online: times tables, SATs, KS3, GCSE on AQA, Edexcel or OCR, A level, Further Maths, Functional Skills and GCSE resits.',
  twitterDescription: 'Bristol maths, taught live online: do people who live further out really cycle and walk less?',
  pageName: 'Maths Tuition in Bristol',
  webPageDescription: 'Live online maths tuition for Bristol learners aged 6 to 67: KS2 and Year 6 SATs maths, KS3, GCSE and IGCSE, A level Maths and Further Maths, and adult maths including Functional Skills and GCSE resits, with a scatter graph project on Census 2021 travel to work data.',
  courseDescription: 'Live online maths lessons for Bristol learners of every age, in groups of five to ten at one level or one to one, following the national curriculum for England and each exam board\'s GCSE and A level specification.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Maths tuition in Bristol',
  navLinks: [
    { href: '#learning', label: 'Learning stages' },
    { href: '#scatter', label: 'Scatter graphs' },
    { href: '#extrapolate', label: 'Extrapolation' },
    { href: '#maths-bristol', label: 'Maths in Bristol' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Bristol &middot; Online maths tutor, ages 6 to 67 &middot; Small live classes or private lessons',
  h1: 'Maths tuition in Bristol',
  lede: 'Split Bristol into its 57 census neighbourhoods and plot each one: distance from Bristol Bridge along the bottom, share of commuters who walk up the side. The points fall in a clear downhill band, with a correlation of minus 0.82. Draw the trend line and it makes a confident prediction for the furthest neighbourhood, 7.44 km out: minus 1.43% of people walk to work. In reality 12.4% do. A line that fits well in the middle can talk nonsense at the edges, and learning to notice that is a large part of GCSE statistics. This page explains how our online maths tutors teach Bristol learners, from the Year 4 times tables check through GCSE and A level to adult maths, using the city\'s own commuting data.',
  secondaryCta: { href: '#scatter', label: 'See the Bristol scatter graph data' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for a learner in Bristol.',
  heroNote: 'A maths page for Bristol &middot; Children, teenagers and adults &middot; Independent of every Bristol school and university',
  spec: [
    ['For', 'Bristol learners aged 6 to 67'],
    ['Primary', 'KS2 maths, tables check, Year 6 SATs'],
    ['Secondary', 'KS3, then GCSE at either tier'],
    ['Exam boards', 'AQA, Edexcel, OCR, and IGCSE'],
    ['Sixth form', 'A level Maths and Further Maths'],
    ['Adults', 'Functional Skills, GCSE resits'],
    ['Teaching', 'Live online, 5 to 10 per class or solo'],
    ['Bristol project', 'Commuting by neighbourhood on a scatter graph']
  ],
  capsuleQ: 'What do Bristol learners get from our maths tuition?',
  capsule: 'Bristol learners aged 6 to 67 take live maths lessons with us online, either in a class of five to ten people working at the same level or one to one. Young children build times tables for the Year 4 check and the reasoning needed for Year 6 SATs maths. Older pupils move through KS3 maths into GCSE, foundation or higher, for AQA, Edexcel or OCR, or into IGCSE. Sixth formers study A level Maths, with Further Maths if they want it, and adults come for Functional Skills maths, GCSE maths resits or simply to feel confident with numbers again. Our Bristol example plots Census 2021 commuting data for 57 neighbourhoods and shows where a trend line can and cannot be trusted. Your first lesson is free; ongoing lessons are USD 100 a month in a class or USD 150 a month one to one.',

  picks: {
    eyebrow: 'Popular with Bristol families',
    h2: 'Three maths courses Bristol learners book most',
    lede: 'GCSE, A level and primary maths come up in most Bristol enquiries. The complete list is further down.',
    items: [
      { course: 'gcse-mathematics-mastery', code: 'BRS / 1', title: 'GCSE maths', note: 'Every board, either tier, resits welcome; scatter graphs and correlation practised on real Bristol data.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'BRS / 2', title: 'A level maths', note: 'Pure, statistics and mechanics, with correlation and regression taught as tools rather than recipes.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'BRS / 3', title: 'KS1 and KS2 maths', note: 'Number facts, fractions and the explaining that the Year 6 SATs reasoning papers expect.' }
    ]
  },

  sections: [
    {
      id: 'learning', tint: 'tint', eyebrow: 'Primary to adult',
      h2: 'A Bristol maths tutor for KS2, KS3, GCSE, A level and adults',
      lede: 'Bristol schools teach the national curriculum for England, so a Bristol learner works through the same key stages and exams as learners elsewhere in England. Adults can join at any point.',
      body: [
        { kind: 'table', caption: 'What each stage of maths covers for a Bristol learner, and our main emphasis', head: ['Stage', 'Years', 'Emphasis in our lessons'], rows: [
          ['KS1', 'Years 1 and 2', 'Counting, number bonds, early multiplication and reading simple charts.'],
          ['KS2', 'Years 3 to 6', 'Times tables for the Year 4 check, written methods, fractions, line graphs and SATs reasoning.'],
          ['KS3', 'Years 7 to 9', 'Algebra, ratio, coordinates and straight-line graphs, the foundation for every scatter graph.'],
          ['GCSE', 'Years 10 and 11', 'Foundation or higher on AQA, Edexcel or OCR, including correlation and trend lines.'],
          ['A level', 'Years 12 and 13', 'Pure, statistics and mechanics, with correlation coefficients and hypothesis tests; Further Maths if wanted.'],
          ['Adults', 'Any age', 'Functional Skills maths, GCSE resits and confident everyday numbers.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'KS2 maths for Bristol children',
          left: [
            'In Year 4, children at state-funded schools in England take the multiplication tables check. We teach tables as related facts so that a forgotten one can be rebuilt: 4 × 9 is double 2 × 9, and 2 × 9 is easy.',
            'Line graphs and simple charts appear in KS2 too. We use them to plant the habit that every graph has a story and a scale, which is exactly what learners need years later in front of a scatter graph.'
          ],
          rightH3: 'GCSE and A level in Bristol',
          right: [
            'Our GCSE maths tutors match the learner\'s board and tier. Scatter graphs, correlation and trend lines are on every GCSE specification, and the Bristol project below covers the whole topic using real neighbourhoods.',
            'National pages go further on each stage: <a class="ag-inline-link" href="/ks2-maths-tuition-online">KS2</a>, <a class="ag-inline-link" href="/ks3-maths-tuition-online">KS3</a>, <a class="ag-inline-link" href="/gcse-maths-tuition-online">GCSE</a>, <a class="ag-inline-link" href="/igcse-maths-tuition-online">IGCSE</a>, <a class="ag-inline-link" href="/a-level-maths-tuition-online">A level</a> and <a class="ag-inline-link" href="/further-maths-tuition-online">Further Maths</a>.'
          ] },
        { kind: 'source', html: 'Tables check: <a class="ag-inline-link" href="https://www.gov.uk/government/collections/multiplication-tables-check" rel="noopener" target="_blank">gov.uk</a>, read on 1 October 2026. Year groups follow the usual pattern in English schools.' }
      ]
    },
    {
      id: 'scatter', tint: 'plain', eyebrow: 'The Bristol project',
      h2: 'Do people who live further out walk and cycle to work less?',
      lede: 'The 2021 census counted how every working Bristol resident travels to work, neighbourhood by neighbourhood. Put that next to distance from the centre and you have four scatter graphs with four very different stories.',
      body: [
        { kind: 'two',
          left: [
            'Census 2021 splits Bristol into 57 middle-sized neighbourhoods, which the Office for National Statistics names Bristol 001, Bristol 002 and so on. For each one we took the residents in work who travel, leaving out those who work mainly from home, and found the share who cycle, walk, drive or take the bus.',
            'For the distance we used each neighbourhood\'s population-weighted centre, published by the ONS, and measured in a straight line to a point at Bristol Bridge that we chose as the city centre. The nearest neighbourhood is 0.50 km away and the furthest 7.44 km.'
          ],
          right: [
            'Then we drew the four scatter graphs and fitted a least-squares line to each. The correlation coefficient, r, measures how tightly the points hug their line: near 1 or minus 1 means very tight, near 0 means no straight-line pattern at all.',
            'Distance explains driving and walking well, explains cycling only partly, and explains bus use not at all. The same city, the same distances and the same census, yet four quite different answers.'
          ] },
        { kind: 'table', mt: true, caption: 'Share of Bristol commuters by method against distance from Bristol Bridge, 57 neighbourhoods (our calculation from Census 2021)', head: ['Method', 'Least-squares line', 'r', 'Lowest and highest share'], rows: [
          ['Driving a car or van', '30.296 + 6.489 × distance', '0.846', '26.4% to 77.3%'],
          ['On foot', '37.693 − 5.262 × distance', '−0.822', '6.7% to 47.1%'],
          ['Bicycle', '13.871 − 1.465 × distance', '−0.599', '2.2% to 18.0%'],
          ['Bus, minibus or coach', '10.208 − 0.129 × distance', '−0.075', '3.5% to 16.9%']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Reading the cycling graph',
          left: [
            'Cycling falls with distance, but loosely. Bristol 058, 1.67 km out, has the highest cycling share at 18.0%, and Bristol 020, at 1.93 km, is close behind with 17.9%. At the far end Bristol 052, 5.57 km out, has just 2.2%.',
            'Yet Bristol 054, only 0.56 km from the bridge, has a cycling share of 6.4%, almost seven points below its line. Points like that, far from the line, are residuals, and they are often the most interesting part of a scatter graph.'
          ],
          rightH3: 'Correlation is not causation',
          right: [
            'The DfE content for GCSE asks learners to "recognise correlation and know that it does not indicate causation". Distance does not cause anyone to drive. Neighbourhoods further out may differ in many other ways, from hills and bus routes to the kinds of jobs people do, and the census table cannot separate them.',
            'Averaged without weighting, the 24 neighbourhoods within 3 km have a cycling share of 11.9% and the 33 further out 6.3%. A student who says "distance makes people cycle less" has gone further than the data allows; one who says "cycling is less common further out" has not.'
          ] },
        { kind: 'source', html: 'Data: <a class="ag-inline-link" href="https://www.nomisweb.co.uk/sources/census_2021_bulk" rel="noopener" target="_blank">Nomis, Census 2021 table TS061, method used to travel to work</a>, Bristol MSOAs; <a class="ag-inline-link" href="https://geoportal.statistics.gov.uk/" rel="noopener" target="_blank">ONS Open Geography Portal</a>, MSOA 2021 population weighted centroids. Both read 1 October 2026; Office for National Statistics, Open Government Licence. Shares, distances, lines and correlations are Modern Age Coders\' calculations.' }
      ]
    },
    {
      id: 'extrapolate', tint: 'deep', eyebrow: 'Prediction, with a warning',
      h2: 'When a good line gives an impossible answer',
      lede: 'The same DfE statement asks learners to "interpolate and extrapolate apparent trends whilst knowing the dangers of so doing". The walking graph shows those dangers in a single number.',
      body: [
        { kind: 'table', caption: 'What the walking line predicts against what the census recorded (our calculation)', head: ['Neighbourhood', 'Distance', 'Line predicts', 'Census shows'], numCols: [1, 2, 3], rows: [
          ['Bristol 061, nearest', '0.50 km', '35.1%', '42.9%'],
          ['Bristol 058', '1.67 km', '28.9%', '28.1%'],
          ['Bristol 052', '5.57 km', '8.4%', '6.9%'],
          ['Bristol 008, furthest', '7.44 km', '−1.43%', '12.4%']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Inside the range of the data, the walking line does a reasonable job: for Bristol 058 it predicts 28.9% against a true 28.1%. Using a line inside the range like this is interpolation, and it is usually safe when the correlation is strong.',
            'Near the ends it starts to strain. The line crosses zero at 7.16 km, so for the furthest neighbourhood it predicts a negative share of walkers, which is impossible. The real figure there is 12.4%, higher than several neighbourhoods much closer in.'
          ],
          right: [
            'Push the line beyond the data and it gets worse. The cycling line reaches zero at 9.47 km, so it would predict that nobody cycles to work from anywhere ten kilometres out. That is extrapolation, and the line has no evidence for it at all.',
            'At A level we go further: a share has to stay between 0% and 100%, so a straight line can never be the right model across the whole range. Learners who meet that problem with real data understand why statisticians reach for other curves.'
          ] },
        { kind: 'p', mt: true, html: 'Every learner meets this project at their own level. Primary children read off the highest and lowest values. KS3 learners plot the points and describe the pattern. GCSE learners draw the line by eye, compare it with ours and talk about correlation. A level learners calculate r themselves and test whether the cycling correlation could have arisen by chance.' },
        { kind: 'source', html: 'Predictions use the least-squares lines in the previous table; all values are Modern Age Coders\' calculations. GCSE wording: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/gcse-mathematics-subject-content-and-assessment-objectives" rel="noopener" target="_blank">DfE, GCSE mathematics subject content</a>.' }
      ]
    },
    {
      id: 'maths-bristol', tint: 'tint', eyebrow: 'Maths around the city',
      h2: 'The Boolean Maths Hub and maths at the University of Bristol',
      lede: 'Bristol has its own maths network for schools and a large university maths department. We describe their public pages here; we are not part of either.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Boolean Maths Hub', p: 'The NCETM names Bristol Metropolitan Academy, part of the Cabot Learning Federation, as the lead school of the Boolean Maths Hub, which covers Bristol, Bath and North East Somerset, North Somerset, Somerset and South Gloucestershire.' },
          { h3: 'The Fry Building', p: 'The University of Bristol\'s School of Mathematics says: "We recently moved into our new home at the heart of campus, the fully refurbished Grade II-listed Fry Building."' },
          { h3: 'A maths book for teenagers', p: 'The university\'s faculty outreach page lists the Numbercrunch book, "Maths Toolkit for Making Sense of Your World", among its resources for young people.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'Maths Hubs work with teachers and schools rather than with families, so most parents never see them directly. Their work shows up in how maths is taught in the classroom, for example through teacher development groups.',
            'Competition maths runs through schools too. Our <a class="ag-inline-link" href="/ukmt-maths-challenge-tutoring">UKMT maths challenge page</a> explains how we prepare learners for the Junior, Intermediate and Senior challenges, and our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a> lists the dates.'
          ],
          right: [
            'Some Bristol families also look at selective schools. Our <a class="ag-inline-link" href="/11-plus-maths-tuition-gloucestershire">11 plus maths page for Gloucestershire</a> covers the test used there, and our <a class="ag-inline-link" href="/courses/11-plus-maths-preparation-course-uk">11 plus maths course</a> works for most test formats.',
            'All our lessons are online, so a learner in Bedminster, Fishponds or Southmead joins from home. Classes are grouped by level, which means a Bristol learner may sit alongside someone in Sheffield or Coventry.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.ncetm.org.uk/hubs/boolean-maths-hub/" rel="noopener" target="_blank">NCETM, Boolean Maths Hub</a>; <a class="ag-inline-link" href="https://www.bristol.ac.uk/maths/about/" rel="noopener" target="_blank">University of Bristol, School of Mathematics, About</a>; <a class="ag-inline-link" href="https://www.bristol.ac.uk/science-engineering/faculty-outreach-activities/" rel="noopener" target="_blank">University of Bristol, faculty outreach activities</a>. All read 1 October 2026. We have no link with the NCETM, the hub, the University of Bristol or any Bristol school.' }
      ]
    },
    {
      id: 'adult-learners', tint: 'plain', eyebrow: 'For adults',
      h2: 'Adult maths in Bristol: Functional Skills, GCSE resits and confidence',
      lede: 'Plenty of our Bristol learners are adults. Some need a maths qualification for work or college, some want to help with homework, and some simply want numbers to stop feeling like a test.',
      body: [
        { kind: 'three', cells: [
          { h3: 'GCSE maths resit', p: 'Adults resitting GCSE maths join our GCSE course. Early lessons map what is already secure, so the time goes on the topics that will move the mark.' },
          { h3: 'Functional Skills maths', p: 'Maths for jobs, apprenticeships and further study, with real contexts throughout. See our <a class="ag-inline-link" href="/functional-skills-maths-tuition-online">Functional Skills maths page</a>.' },
          { h3: 'Numbers in daily life', p: 'Percentages, graphs and statistics in the news and at work. Our <a class="ag-inline-link" href="/online-maths-classes-for-adults-in-uk">adult maths classes</a> page explains more.' }
        ] },
        { kind: 'p', mt: true, html: 'Adults often take to this project quickly, because most of them commute and many have argued about whether more cycle lanes would change their own journey. The scatter graphs give them a careful way to have that argument, and the causation warning gives them a reason to be modest about the answer.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Route',
    h2: 'From reading a chart to judging a trend line',
    lede: 'These are the steps that lead to the statistics on this page. The free lesson shows where a new learner should start.',
    table: { caption: 'Four steps towards scatter graphs and correlation for Bristol learners', head: ['Usually', 'Step', 'Secure when the learner'], rows: [
      ['Years 3 and 4', '1. Facts and charts', 'Knows the tables and reads values from a bar chart or line graph'],
      ['Years 5 to 7', '2. Coordinates', 'Plots points accurately in all four quadrants'],
      ['Years 8 to 10', '3. Straight lines', 'Finds a gradient and an intercept and explains what each means'],
      ['Years 10 to 13', '4. Correlation', 'Describes a scatter graph and says where its line can be trusted']
    ] },
    left: { h3: 'Joining late in GCSE', ps: [
      'Learners who start in Year 11 can still make solid progress if we first secure the algebra and number that everything else depends on.',
      'If the gap is too big for the time left before the exam, we will tell you honestly after the free lesson.'
    ] },
    right: { h3: 'Beyond GCSE', ps: [
      'Many learners continue to A level Maths, some with Further Maths. Those who enjoy data often take our <a class="ag-inline-link" href="/courses/statistics-probability-maths-course">statistics and probability course</a>.',
      'Others use <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a> to draw these scatter graphs in Python.'
    ] }
  },

  catalogue: {
    eyebrow: 'Course catalogue',
    h2: 'Maths courses for Bristol learners',
    lede: 'Four groups by stage. Each card leads to the full syllabus.',
    bands: [
      { num: 'I', h3: 'Early years and primary', sub: 'Ages 6 to 11', courses: [
        { code: 'MBS / A1', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'KS1 and KS2, through to SATs reasoning.' },
        { code: 'MBS / A2', slug: 'early-math-foundations', title: 'First steps in maths', blurb: 'Number sense for the youngest.' },
        { code: 'MBS / A3', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Quick, careful calculation.' },
        { code: 'MBS / A4', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths', blurb: 'Preparation for selective school tests.' }
      ] },
      { num: 'II', h3: 'Secondary', sub: 'KS3 to GCSE', courses: [
        { code: 'MBS / B1', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'KS3 maths', blurb: 'Years 7 to 9: algebra, graphs and data.' },
        { code: 'MBS / B2', slug: 'gcse-mathematics-mastery', title: 'GCSE maths', blurb: 'AQA, Edexcel, OCR; either tier; resits.' },
        { code: 'MBS / B3', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'For the international specifications.' },
        { code: 'MBS / B4', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'A fresh start with letters and equations.' }
      ] },
      { num: 'III', h3: 'Sixth form and university', sub: 'Advanced and competition', courses: [
        { code: 'MBS / C1', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'Pure, statistics and mechanics.' },
        { code: 'MBS / C2', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Correlation, regression and testing.' },
        { code: 'MBS / C3', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'For UKMT challenges and beyond.' },
        { code: 'MBS / C4', slug: 'college-mathematics-complete-masterclass', title: 'University maths', blurb: 'Calculus and linear algebra.' }
      ] },
      { num: 'IV', h3: 'Adult and applied', sub: 'Work and interest', courses: [
        { code: 'MBS / D1', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data analysis', blurb: 'Regression and statistics at work.' },
        { code: 'MBS / D2', slug: 'complete-business-finance-mathematics-mastery', title: 'Business and finance maths', blurb: 'Interest, budgets and forecasting.' },
        { code: 'MBS / D3', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Scatter graphs and models in Python.' },
        { code: 'MBS / D4', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Speed methods for arithmetic.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Scheduling',
    h2: 'Maths lessons that fit the Bristol day',
    lede: 'Our tutors teach from India, where clocks do not change. India is four and a half hours ahead of Bristol in British Summer Time and five and a half ahead in winter, and we book every lesson in UK time.',
    slots: [
      { time: 'Weekday late afternoons', l: 'Primary and secondary learners after school.' },
      { time: 'Weekday evenings', l: 'A level students and working adults.' },
      { time: 'Weekend mornings', l: 'For families who prefer the weekend.' }
    ],
    cells: [
      { h3: 'Same tutor every week', p: 'Continuity means no time lost re-explaining.' },
      { h3: 'Progress notes', p: 'Short, honest updates after lessons for families.' },
      { h3: 'Matched by level', p: 'Classes of five to ten at one level, wherever they live.' },
      { h3: 'Census and local data', p: 'Real Bristol numbers next to exam questions.' },
      { h3: 'Private lessons', p: 'One to one for a particular gap or an exam close at hand.' },
      { h3: 'Why before how', p: 'Learners explain an idea before they practise it.' }
    ]
  },

  projectsH2: 'Projects built by our learners',
  projectsLede: 'Students who started with data problems like the Bristol scatter graphs have gone on to build the projects below. See more in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Unaltered Google reviews from families and learners.',

  fees: {
    h2: 'Fees',
    lede: 'Billed in US dollars each month, one price for every country outside India, with no registration fee and no contract to sign.',
    free: ['A real lesson pitched at the learner', 'Clear feedback afterwards', 'No card details'],
    group: ['A class of five to ten at one level', 'A regular tutor', 'Homework marked with comments', 'Course certificate'],
    one: ['One tutor, one learner', 'Focused on particular gaps', 'Useful before exams']
  },

  faq: {
    eyebrow: 'Bristol maths questions',
    h2: 'Questions Bristol families ask before booking',
    items: [
      { q: 'How much is a maths tutor in Bristol?', a: 'The first lesson is free. Ongoing lessons cost USD 100 a month in a class of five to ten learners at the same level, or USD 150 a month for private lessons. You pay no registration fee and can stop whenever you like.' },
      { q: 'What is a line of best fit?', a: 'It is a straight line drawn through a scatter graph so that it follows the general trend of the points as closely as possible. It can be used to estimate values inside the range of the data, but predictions outside that range are unreliable.' },
      { q: 'Are online maths lessons as effective as in-person tutoring?', a: 'For most learners, yes, as long as the lesson is live and the tutor sees the learner\'s working as it is written. Our tutors use a shared board and step in at the first wrong line.' },
      { q: 'Can adults resit GCSE maths with you?', a: 'Yes. Learners of any age join our GCSE course to resit. We begin by working out which topics are secure and then focus where it will help the result most.' },
      { q: 'Do you cover AQA, Edexcel and OCR GCSE maths?', a: 'Yes, all three, at foundation and higher tier. We also teach the IGCSE papers.' },
      { q: 'Can you help my child with KS2 maths and Year 6 SATs?', a: 'Yes. Our primary course covers all of KS2, from the times tables of the Year 4 check to the reasoning questions that Year 6 SATs maths is built around.' },
      { q: 'Do you teach A level Further Maths in Bristol?', a: 'Yes, online, alongside A level Maths, for learners who want the extra pure, statistics and mechanics content.' },
      { q: 'How can I help a child who is anxious about maths?', a: 'Start with something they can already do, then move forward in small steps they can explain. Anxiety eases when a child understands why a method works, which is why our lessons always explain before they drill.' },
      { q: 'Are you part of the Boolean Maths Hub or the University of Bristol?', a: 'No. We describe their public pages so families know about them, but we have no connection with either, or with any Bristol school.' },
      { q: 'Can you guarantee a GCSE grade?', a: 'No. We teach carefully and report progress honestly, but no tutor can guarantee an exam result.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Next pages',
    h2: 'More for Bristol learners',
    lede: 'Maths pages by stage, our Bristol coding page and other city maths pages.',
    items: [
      { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition', p: 'Our national GCSE maths page.' },
      { href: '/a-level-maths-tuition-online', label: 'A level maths tuition', p: 'Sixth form maths, explained.' },
      { href: '/online-maths-classes-for-adults-in-uk', label: 'Maths for adults', p: 'Classes for adult learners across the UK.' },
      { href: '/best-coding-class-in-bristol', label: 'Coding classes in Bristol', p: 'Our Bristol coding and AI page.' },
      { href: '/maths-tuition-in-london', label: 'Maths tuition in London', p: 'Our London maths page and its sampling project.' },
      { href: '/coding-classes-in-united-kingdom', label: 'UK index', p: 'All our UK pages in one place.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson for a Bristol learner',
    lede: 'Give us the learner\'s age or school year, any exam board, and the topic that feels hardest. The first lesson is a proper lesson, and afterwards we tell you plainly where the learner stands.',
    readFirst: 'Want to look first? See all <a class="ag-inline-link" href="/courses">our courses</a> or how <a class="ag-inline-link" href="/how-we-teach">our lessons are taught</a>.',
    note: 'WhatsApp brings the quickest answer. The number has an Indian code because the team is in India; we have no Bristol premises and teach entirely online.',
    formNote: 'No card details at any point. We will reply to set a time.'
  },

  footer: {
    cols: [
      { h4: 'Maths by stage', links: [
        { href: '/ks2-maths-tuition-online', label: 'KS2 maths tuition' },
        { href: '/ks3-maths-tuition-online', label: 'KS3 maths tuition' },
        { href: '/further-maths-tuition-online', label: 'Further Maths' },
        { href: '/functional-skills-maths-tuition-online', label: 'Functional Skills maths' }
      ] },
      { h4: 'Bristol and beyond', links: [
        { href: '/best-coding-class-in-bristol', label: 'Coding in Bristol' },
        { href: '/11-plus-maths-tuition-gloucestershire', label: '11 plus in Gloucestershire' },
        { href: '/maths-tuition-in-sheffield', label: 'Maths tuition in Sheffield' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK index' }
      ] }
    ],
    bottomRight: 'Bristol maths, live online'
  },

  personalityCss: `
.ag-root.ag-mbs .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-mbs .ag-capsule { border-left-width: 5px; }
.ag-root.ag-mbs .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-mbs .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-mbs .ag-table td:nth-child(3) { font-weight: 600; }
.ag-root.ag-mbs .ag-spec dt { letter-spacing: 0.09em; }
.ag-root.ag-mbs .ag-three h3 { letter-spacing: -0.005em; }
.ag-root.ag-mbs .ag-slots { gap: 1.05rem; }
`,

  mustMention: ['Boolean Maths Hub', 'Bristol Metropolitan Academy', 'Fry Building', 'Bristol 058', 'Bristol 054', 'Bristol 008', '7.16 km', '9.47 km', 'Numbercrunch book'],

  dossier: {
    curriculumAuthority: 'National curriculum for England (DfE); GCSE mathematics subject content (DfE, 2013), statistics item 6 on scatter graphs, correlation, causation, interpolation and extrapolation; multiplication tables check (gov.uk). Bristol is listed by the NCETM as an area of the Boolean Maths Hub (lead Bristol Metropolitan Academy, Cabot Learning Federation).',
    localProject: 'Census 2021 TS061 for the 57 Bristol MSOAs, shares of those who travel; distance from Bristol Bridge (51.4547, -2.5907) to ONS 2021 MSOA population-weighted centroids, 0.50-7.44 km. Lines: walk 37.693 - 5.262d (r -0.822), drive 30.296 + 6.489d (r 0.846), cycle 13.871 - 1.465d (r -0.599), bus 10.208 - 0.129d (r -0.075). Walking line zero at 7.16 km; predicts -1.43% at Bristol 008 (7.44 km) where 12.4% walk. Cycling line zero at 9.47 km.',
    requiredMentions: ['Boolean Maths Hub', 'Bristol Metropolitan Academy', 'Fry Building', 'Bristol 058', 'Bristol 054', 'Bristol 008', '7.16 km', '9.47 km', 'Numbercrunch book'],
    sources: [
      { claim: 'NCETM, Boolean Maths Hub: lead Bristol Metropolitan Academy, part of the Cabot Learning Federation; areas Bath and North East Somerset, Bristol, North Somerset, Somerset, South Gloucestershire.', url: 'https://www.ncetm.org.uk/hubs/boolean-maths-hub/' },
      { claim: 'University of Bristol School of Mathematics About page: new home in the fully refurbished Grade II-listed Fry Building.', url: 'https://www.bristol.ac.uk/maths/about/' },
      { claim: 'University of Bristol faculty outreach activities: Numbercrunch book, Maths Toolkit for Making Sense of Your World.', url: 'https://www.bristol.ac.uk/science-engineering/faculty-outreach-activities/' },
      { claim: 'Nomis Census 2021 TS061 Method used to travel to work, Bristol MSOAs.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2078_1.data.csv?geography=645923097TYPE152&measures=20100&select=geography_code,geography_name,c2021_ttwmeth_12_name,obs_value' },
      { claim: 'ONS MSOA December 2021 population weighted centroids.', url: 'https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/MSOA_December_2021_EW_PWC_V2/FeatureServer/0' },
      { claim: 'DfE GCSE mathematics subject content: scatter graphs, correlation not causation, interpolation and extrapolation "whilst knowing the dangers of so doing".', url: 'https://www.gov.uk/government/publications/gcse-mathematics-subject-content-and-assessment-objectives' }
    ],
    rejectedClaims: [
      'That distance causes lower cycling or walking: correlation only; printed with the causation warning.',
      'That Bristol is the UK cycling capital or similar superlatives: no primary source read.',
      'A Bristol-wide cycling percentage built by adding MSOA counts: not printed; only per-neighbourhood shares and unweighted group means, labelled.',
      'Ranking claims about the University of Bristol: its own ranking statement is not repeated.',
      'Any Bristol school results: excluded by the spec.'
    ]
  }
};
