'use strict';
// Maths tuition in Edinburgh (ag- maths by city, UK cluster Phase 11, worker M3).
// Read on 1 October 2026 by curl, quotes grepped from the raw text:
//  - SQA course specifications: National 5 Mathematics (C847 75, SCQF 5): "Identify gradient and y-intercept from various forms
//    of the equation of a straight line". Higher Mathematics (C847 76, SCQF 6): using m = tan(theta) "to calculate a gradient or
//    angle"; "solving problems using rate of change"; "finding the area between a curve and the x-axis". Advanced Higher
//    Mathematics (C847 77, SCQF 7): "applying differentiation to related rates".
//  - University of Edinburgh, School of Mathematics, Outreach: "workshops for local school students and events at the
//    Edinburgh Science Festival"; "The Mathematics Outreach Team is our dedicated team of staff and students who are committed
//    to organising and delivering high-quality mathematics outreach activities."; "We want to show people that mathematics is
//    more than just facts and figures, or a subject in school".
//  - Education Scotland, Maths Week Scotland: "Maths Week Scotland 2026", 19 September to 27 September; "This year is the tenth
//    anniversary of Maths Week Scotland."; 2026 theme "Maths Matters"; responsibility moved from National Museums Scotland to
//    Education Scotland.
// Local project (our calculation): straight line from the Palace of Holyroodhouse (Nominatim, OSM relation 16769442, centre
// 55.9526948, -3.1716130) to the Arthur's Seat summit node (OSM node 31209291, 55.9440693, -3.1616030, tag ele=251), length
// 1,143.8 m, 59 points 19.72 m apart, heights from OpenTopoData eudem25m (EU-DEM v1.1, Copernicus), bilinear, 1 October 2026.
// Start 43.0 m, summit point 213.6 m (37.4 m below the mapped 251). Overall gradient 0.149 (8.5 deg). Steepest 19.7 m step
// 0.574 (29.8 deg) between 947 and 966 m along; steepest 99 m stretch 0.530. 22 of 58 steps go downhill; total climbing 195.4
// m for a net gain of 170.5 m; dips to 39.4 m at 177 m along and to 64.4 m at 710 m along after a rise to 85.4 m at 434 m.
// Chord gradients ending at the summit over the last 40, 20, 10, 5, 2, 1 steps: 0.179, 0.373, 0.403, 0.312, 0.291, 0.292.
// Trapezium-rule mean height along the line 86.1 m.
// Spine: how steep is Arthur's Seat? Family: gradient as rise over run, average vs local rate of change (chords approaching a
// tangent), angle from gradient (m = tan theta), the trapezium rule, and resolution limits of a 25 m elevation model.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'EDINBURGH MATHS', label: 'Maths tuition in Edinburgh', blurb: 'Primary to Advanced Higher and adult maths for Edinburgh, with a calculus project measuring how steep Arthur\'s Seat really is.' },
  slug: 'maths-tuition-in-edinburgh',
  code: 'mte',
  accent: '#4E458D',
  accentRationale: 'Edinburgh maths: a muted slate blue, chosen by hand and clearly different from the plum of our Edinburgh coding page',
  pageType: 'city',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Maths tuition in Edinburgh',
  title: 'Maths Tuition in Edinburgh | Higher, N5 and Adult Maths',
  description: 'Online maths tuition in Edinburgh for ages 6 to 67: primary maths, National 5, Higher and Advanced Higher, and adult maths, with a gradient project on Arthur\'s Seat.',
  ogDescription: 'An Edinburgh maths tutor, live online: primary maths, S1 to S3, SQA National 5, Higher and Advanced Higher Mathematics, and adult learners.',
  twitterDescription: 'Edinburgh maths, taught live online: how steep is Arthur\'s Seat? A height profile turns Higher calculus into a walk.',
  pageName: 'Maths Tuition in Edinburgh',
  webPageDescription: 'Live online maths tuition for Edinburgh learners aged 6 to 67 under the Curriculum for Excellence, from primary maths to SQA National 5, Higher and Advanced Higher Mathematics, and adult study, with a gradient and rate of change project on a height profile up Arthur\'s Seat.',
  courseDescription: 'Live online maths lessons for Edinburgh learners from P1 to S6 and for adults, in groups of five to ten matched by level or one to one, with senior-phase work steered to the SQA course specifications.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Maths tuition in Edinburgh',
  navLinks: [
    { href: '#route', label: 'School route' },
    { href: '#profile', label: 'The climb' },
    { href: '#calculus', label: 'Rate of change' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Edinburgh &middot; Maths for ages 6 to 67 &middot; Live lessons online, small groups or individual',
  h1: 'Maths tuition in Edinburgh',
  lede: 'How steep is Arthur\'s Seat? Draw a straight line on the map from the Palace of Holyroodhouse to the summit and it runs 1,143.8 metres. Along it, a public elevation model gains 170.5 metres, an average gradient of 0.149, or about 8.5 degrees. That sounds gentle, and anyone who has climbed it knows it is not. Near the top, one twenty-metre stretch climbs at 0.574, almost 30 degrees. The difference between an average gradient and a local one is the idea behind differentiation, which Scottish learners meet properly at Higher. This page explains how we teach maths to Edinburgh learners of every age and uses that one hill to connect the stages.',
  secondaryCta: { href: '#profile', label: 'See the height profile' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for a learner in Edinburgh.',
  heroNote: 'Maths only on this page &middot; Primary, secondary and adult learners &middot; Independent of every Edinburgh school and university',
  spec: [
    ['Who', 'Edinburgh learners from 6 to 67'],
    ['Primary', 'P1 to P7 number, measure and shape'],
    ['BGE', 'S1 to S3, including straight-line gradient'],
    ['Senior phase', 'National 5, Higher, Advanced Higher'],
    ['Adults', 'Refreshers and a route back to SQA courses'],
    ['Format', 'Live video, 5 to 10 per group or one to one'],
    ['Teachers', 'In India, timetabled in UK time'],
    ['Local project', 'A height profile up Arthur\'s Seat']
  ],
  capsuleQ: 'In short',
  capsule: 'Edinburgh learners aged 6 to 67 study maths with us live online, at whatever stage they are: early and upper primary, the S1 to S3 years, the three SQA senior courses (National 5, Higher, Advanced Higher), or adult study. Learners share a class of five to ten at the same level, unless they prefer a private teacher. Our Edinburgh example is a height profile up Arthur\'s Seat from the Palace of Holyroodhouse: the average gradient along the straight line is 0.149, but the steepest twenty-metre step is 0.574, and the chord gradient to the summit changes as the chord shrinks, which is how Higher Mathematics introduces rate of change. The trial is free of charge. Continuing lessons cost USD 100 monthly in a group or USD 150 monthly on a one to one basis.',

  picks: {
    eyebrow: 'Where most Edinburgh learners join',
    h2: 'Three usual first courses',
    lede: 'Choose by stage. Everything else, from first counting to degree-level maths, follows below.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'EDI / 1', title: 'Primary maths', note: 'From P1 counting to P7 fractions, with measure and scale taught through maps and real distances.' },
      { course: 'gcse-mathematics-mastery', code: 'EDI / 2', title: 'National 5 level maths', note: 'Most GCSE topics reappear in National 5, so this course works as a topic match, taught against the National 5 course specification.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'EDI / 3', title: 'Higher and Advanced Higher level maths', note: 'Calculus and algebra from the English A level course, re-sequenced to follow the SQA senior courses.' }
    ]
  },

  sections: [
    {
      id: 'route', tint: 'tint', eyebrow: 'The Scottish route',
      h2: 'From P1 to Advanced Higher: maths for Edinburgh learners',
      lede: 'Edinburgh schools follow the Curriculum for Excellence and SQA qualifications, not GCSEs and A levels, which belong to the English system. Adults can re-enter at whichever level suits them.',
      body: [
        { kind: 'table', caption: 'How maths progresses in Scotland, with our emphasis at each stage', head: ['Stage', 'Typical ages', 'Our emphasis'], rows: [
          ['Early primary', '5 to 8', 'Counting, place value, number facts, shape and simple measure.'],
          ['Later primary', '8 to 12', 'Multiplication, fractions, decimals, scale on maps and explaining a strategy.'],
          ['S1 to S3', '11 to 15', 'Algebra, Pythagoras, the gradient of a straight line and early statistics.'],
          ['National 5', '14 to 16', 'Straight lines, quadratics, trigonometry, vectors, arcs and statistics.'],
          ['Higher', '15 to 17', 'Differentiation and integration, functions, circles, vectors and recurrence relations.'],
          ['Advanced Higher', '16 to 18', 'Related rates, integration by parts, complex numbers, matrices and Maclaurin series.'],
          ['Adults', '18 to 67', 'Rebuilding number confidence, re-sitting an SQA course, or numeracy for a job.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Higher maths tutor',
          left: [
            'SQA Higher Mathematics (C847 76) is where calculus arrives. Its course specification includes "solving problems using rate of change" and "finding the area between a curve and the x-axis", and it asks learners to use m = tan θ "to calculate a gradient or angle". Every one of those appears in the Arthur\'s Seat project below.',
            'Higher students who struggle almost always have an algebra problem rather than a calculus problem. We check algebra at the trial lesson and fix it first.'
          ],
          rightH3: 'National 5 and Advanced Higher',
          right: [
            'At National 5 (C847 75), learners must "Identify gradient and y-intercept from various forms of the equation of a straight line". It is the first time gradient becomes a number rather than a feeling. At Advanced Higher (C847 77) the same idea grows into "applying differentiation to related rates".',
            'Each course has its own page with us: <a class="ag-inline-link" href="/national-5-maths-tuition-online">National 5 maths</a>, <a class="ag-inline-link" href="/higher-maths-tuition-online">Higher maths</a> and <a class="ag-inline-link" href="/advanced-higher-maths-tuition-online">Advanced Higher maths</a>.'
          ] },
        { kind: 'source', html: 'Sources: SQA course specifications for <a class="ag-inline-link" href="https://www.sqa.org.uk/sqa/files_ccc/n5-course-spec-mathematics.pdf" rel="noopener" target="_blank">National 5</a>, <a class="ag-inline-link" href="https://www.sqa.org.uk/sqa/files_ccc/h-course-spec-mathematics.pdf" rel="noopener" target="_blank">Higher</a> and <a class="ag-inline-link" href="https://www.sqa.org.uk/files_ccc/AHCourseSpecMathematics.pdf" rel="noopener" target="_blank">Advanced Higher</a> Mathematics, read on 1 October 2026. Ages are typical rather than fixed.' }
      ]
    },
    {
      id: 'profile', tint: 'plain', eyebrow: 'The Edinburgh project',
      h2: 'How steep is Arthur\'s Seat? A height profile, point by point',
      lede: 'We drew one straight line from the palace to the summit and read the ground height every 19.72 metres from a public elevation model. It is not a walking route; it is a clean set of numbers.',
      body: [
        { kind: 'two',
          left: [
            'The start is the mapped centre of the Palace of Holyroodhouse, and the end is the Arthur\'s Seat summit as plotted in OpenStreetMap. Between them we placed 59 points, 19.72 metres apart, and looked up each height in EU-DEM, a European elevation model with a grid of 25 metres, through the free OpenTopoData service.',
            'The model puts the start at 43.0 metres and the summit point at 213.6 metres. OpenStreetMap labels the summit 251 metres. The 37.4 metre shortfall is not a mistake in either. A 25 metre grid averages the ground over each cell, and a narrow rocky top gets averaged down with the slopes around it. Resolution is a real limit on any measurement, and a good learner says so.'
          ],
          right: [
            'The line does not simply climb. It rises a little, dips to 39.4 metres about 177 metres along, climbs to 85.4 metres, then drops again to 64.4 metres before the final steep pull. Of the 58 steps between points, 22 go downhill.',
            'Add up only the uphill steps and you climb 195.4 metres to finish 170.5 metres higher than you started. A walker feels the 195.4, and a map that quotes only the net gain hides it. Simple subtraction and addition, done carefully, already tells a story.'
          ] },
        { kind: 'table', mt: true, caption: 'Heights along the straight line from the palace to the summit, every five steps, from EU-DEM (our extraction)', head: ['Distance along, m', 'Height, m'], numCols: [0, 1], rows: [
          ['0', '43.0'],
          ['197', '39.5'],
          ['394', '82.1'],
          ['592', '67.2'],
          ['789', '71.8'],
          ['887', '103.7'],
          ['986', '155.5'],
          ['1,085', '196.1'],
          ['1,144', '213.6']
        ] },
        { kind: 'source', html: 'Heights: EU-DEM v1.1 (produced using Copernicus data and information funded by the European Union) via <a class="ag-inline-link" href="https://www.opentopodata.org/datasets/eudem/" rel="noopener" target="_blank">OpenTopoData eudem25m</a>, read on 1 October 2026. End points: <a class="ag-inline-link" href="https://www.openstreetmap.org/copyright" rel="noopener" target="_blank">OpenStreetMap contributors</a>. Distances, gradients and sums are Modern Age Coders\' calculations. This is not a route guide; paths on the hill do not follow a straight line.' }
      ]
    },
    {
      id: 'calculus', tint: 'deep', eyebrow: 'Higher Maths on a hillside',
      h2: 'Average gradient, local gradient and the idea of a derivative',
      lede: 'Gradient is rise divided by run. The question is: over which run? Change the run and the answer changes, and following that change is how calculus begins.',
      body: [
        { kind: 'two',
          leftH3: 'From the whole hill to one step',
          left: [
            'Over the whole line the gradient is 170.5 ÷ 1,143.8 = 0.149. Using m = tan θ, as Higher asks, the angle is about 8.5°. The steepest single step, between 947 and 966 metres along, has a gradient of 0.574, or 29.8°. Even the steepest stretch of about 99 metres averages 0.530.',
            'So one number cannot describe a hill. National 5 learners find the gradient of a straight line; the hillside is not straight, so its gradient depends on where you stand. That is exactly why Higher needs differentiation.'
          ],
          rightH3: 'Shrinking the chord',
          right: [
            'Take a chord that ends at the summit and starts further and further back. Over the last 40 steps its gradient is 0.179; over the last 20, 0.373; over 10, 0.403; over 5, 0.312; over 2, 0.291; over the final step alone, 0.292.',
            'The values settle as the chord shrinks, around 0.29 for the very top. On a smooth curve that limit would be the derivative. On real data the steps cannot shrink below the model\'s spacing, so the limit is only approached, never reached, which is a lovely thing to discuss with an Advanced Higher learner.'
          ] },
        { kind: 'table', mt: true, caption: 'Gradient of a chord ending at the summit, as the chord gets shorter (our calculation)', head: ['Chord covers the last', 'Length, m', 'Gradient'], numCols: [1, 2], rows: [
          ['40 steps', '789', '0.179'],
          ['20 steps', '394', '0.373'],
          ['10 steps', '197', '0.403'],
          ['5 steps', '99', '0.312'],
          ['2 steps', '39', '0.291'],
          ['1 step', '20', '0.292']
        ] },
        { kind: 'p', mt: true, html: 'Integration closes the loop. Using the trapezium rule on all 59 heights, the area under the profile divided by its length gives a mean height along the line of 86.1 metres. Higher asks for "the area between a curve and the x-axis"; here the curve is real ground, and the learner has to decide what the area actually means before calculating it.' },
        { kind: 'source', html: 'All gradients, angles and areas are our calculations from the EU-DEM profile above. SQA wording from the <a class="ag-inline-link" href="https://www.sqa.org.uk/sqa/files_ccc/h-course-spec-mathematics.pdf" rel="noopener" target="_blank">Higher Mathematics course specification</a>.' }
      ]
    },
    {
      id: 'city', tint: 'tint', eyebrow: 'Beyond our lessons',
      h2: 'Maths Week Scotland, the university and other ways to go further',
      lede: 'Edinburgh offers plenty for learners who like maths. These are details we confirmed on public pages; we play no part in them.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Maths Week Scotland', p: 'Education Scotland lists Maths Week Scotland 2026 as 19 September to 27 September, with the theme Maths Matters, and says "This year is the tenth anniversary of Maths Week Scotland."' },
          { h3: 'University of Edinburgh', p: 'Its School of Mathematics runs "workshops for local school students and events at the Edinburgh Science Festival", led by its Mathematics Outreach Team of staff and students.' },
          { h3: 'Why it matters', p: 'The school says it wants "to show people that mathematics is more than just facts and figures, or a subject in school". The hill project above is our own attempt at the same thing.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'Responsibility for Maths Week Scotland moved from National Museums Scotland to Education Scotland, according to the Education Scotland page, and the week now runs with resource packs, live events and challenges for schools.',
            'Pupils in Scotland can also enter the UK Mathematics Trust challenges, which run across the whole UK. Our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a> lists them by age.'
          ],
          right: [
            'Learners in Leith, Morningside or Portobello join each live lesson from their own homes. We build groups by level, so a classmate could be in Glasgow, Inverness or much further away.',
            'A learner who enjoys problem solving can try competition work through our <a class="ag-inline-link" href="/maths-olympiad-training-uk">olympiad page</a>, which explains how we prepare for the harder rounds.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://education.gov.scot/resource-themes/maths-week-scotland/" rel="noopener" target="_blank">Education Scotland, Maths Week Scotland</a>; <a class="ag-inline-link" href="https://maths.ed.ac.uk/outreach" rel="noopener" target="_blank">University of Edinburgh, School of Mathematics, outreach</a>. Both read on 1 October 2026. Neither organisation has any tie to Modern Age Coders.' }
      ]
    },
    {
      id: 'adults', tint: 'plain', eyebrow: 'Grown-up learners',
      h2: 'Adult maths lessons in Edinburgh',
      lede: 'A good share of the people who contact us are adults, and they come for very different reasons.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Starting fresh', p: 'Fractions, percentages and algebra, from the beginning and at a comfortable speed, with every question welcome.' },
          { h3: 'Back to an SQA course', p: 'National 5 or Higher for college, a career change or simply to finish something left undone at school.' },
          { h3: 'Maths for work', p: 'Rates, charts, percentages and spreadsheets. Our <a class="ag-inline-link" href="/online-maths-classes-for-adults-in-uk">adult maths page</a> describes how these groups work.' }
        ] },
        { kind: 'p', mt: true, html: 'Adults who have walked up the hill enjoy the profile project, because the numbers confirm what their legs told them: the climb is gentle for a long way and then very steep. Seeing a gradient of 0.574 next to an average of 0.149 makes the idea of a rate of change feel obvious rather than abstract.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Step by step',
    h2: 'From reading a map scale to differentiation, in four steps',
    lede: 'Each step depends on the last. A learner joins wherever they are ready, and the trial lesson tells us where that is.',
    table: { caption: 'A path from measuring to calculus, with a sign that each step is secure', head: ['Usually', 'Step', 'Secure when the learner'], rows: [
      ['P5 to P7', '1. Scale and measure', 'Turns a map distance into a real one using the scale'],
      ['S1 to S3', '2. Straight-line gradient', 'Finds rise over run from two points and from a graph'],
      ['S4', '3. Gradient and angle', 'Moves between a gradient and an angle using tangent'],
      ['S5 and S6', '4. Rate of change', 'Explains why a chord\'s gradient tends to the derivative']
    ] },
    left: { h3: 'Starting in S4 or S5', ps: [
      'Not too late at all. We make algebra and straight-line work secure first, then build calculus on top.',
      'If there is more to do than time allows, we will be honest about it after the trial.'
    ] },
    right: { h3: 'After Higher', ps: [
      'S6 learners usually take Advanced Higher. Others branch into <a class="ag-inline-link" href="/courses/statistics-probability-maths-course">statistics and probability</a> or <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a>, where a short program draws the hill profile itself.',
      'Others discover a taste for problem solving and move to competition maths.'
    ] }
  },

  catalogue: {
    eyebrow: 'Course list',
    h2: 'Maths courses for Edinburgh learners',
    lede: 'Arranged by stage. Where a course was written for English exams, we match it topic by topic to the SQA course an Edinburgh learner is taking.',
    bands: [
      { num: 'I', h3: 'Primary', sub: 'P1 to P7', courses: [
        { code: 'MTE / A1', slug: 'early-math-foundations', title: 'First maths', blurb: 'Counting, shapes and patterns for the youngest.' },
        { code: 'MTE / A2', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'All of primary maths, with the reasons.' },
        { code: 'MTE / A3', slug: 'mental-maths-mastery-kids', title: 'Mental arithmetic', blurb: 'Calculating confidently in the head.' },
        { code: 'MTE / A4', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus', blurb: 'A frame of beads that becomes a mental picture.' }
      ] },
      { num: 'II', h3: 'S1 to S4', sub: 'BGE and National 5', courses: [
        { code: 'MTE / B1', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'S1 to S3 maths', blurb: 'Algebra, Pythagoras and graphs before the senior phase.' },
        { code: 'MTE / B2', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Solid algebra before National 5.' },
        { code: 'MTE / B3', slug: 'gcse-mathematics-mastery', title: 'National 5 level maths', blurb: 'GCSE content used as a National 5 match.' },
        { code: 'MTE / B4', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'Cambridge 0580 and Edexcel International.' }
      ] },
      { num: 'III', h3: 'S5, S6 and university', sub: 'Higher and further', courses: [
        { code: 'MTE / C1', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'Higher level maths', blurb: 'Calculus and algebra matched to Higher.' },
        { code: 'MTE / C2', slug: 'statistics-probability-maths-course', title: 'Statistics', blurb: 'Probability, distributions and inference.' },
        { code: 'MTE / C3', slug: 'college-mathematics-complete-masterclass', title: 'University maths', blurb: 'First-year calculus and linear algebra.' },
        { code: 'MTE / C4', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Unusual problems for keen learners.' }
      ] },
      { num: 'IV', h3: 'Applied and adult', sub: 'Work and interest', courses: [
        { code: 'MTE / D1', slug: 'complete-business-finance-mathematics-mastery', title: 'Finance maths', blurb: 'Interest, loans and investments.' },
        { code: 'MTE / D2', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data', blurb: 'The numbers behind analysis.' },
        { code: 'MTE / D3', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Programs that draw and measure.' },
        { code: 'MTE / D4', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Speedy arithmetic for confident learners.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Scheduling',
    h2: 'Lessons around school, work and weekends',
    lede: 'Our teachers are in India, which does not change its clocks. Edinburgh therefore sits 5.5 hours behind in winter and 4.5 hours behind in summer. Every slot is agreed in UK time.',
    slots: [
      { time: 'Weekday afternoons', l: 'For primary and secondary pupils.' },
      { time: 'Weekday evenings', l: 'For S5, S6 and adults.' },
      { time: 'Weekend mornings', l: 'For anyone who likes a fresh start.' }
    ],
    cells: [
      { h3: 'A familiar teacher', p: 'The same person teaches the group from week to week.' },
      { h3: 'Quick reports', p: 'A short message home on progress after lessons.' },
      { h3: 'Level-matched groups', p: 'Five to ten learners working at the same level.' },
      { h3: 'Genuine data', p: 'Height profiles, maps and records sit beside exam questions.' },
      { h3: 'Private lessons', p: 'For a single tough topic or the final weeks before exams.' },
      { h3: 'Understanding first', p: 'Every method is explained before it is practised.' }
    ]
  },

  projectsH2: 'Projects our students made next',
  projectsLede: 'Learners who started with gradients and graphs built the four projects below. There are many more in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Straight from Google: reviews by our families and learners, left exactly as written.',

  fees: {
    h2: 'Fees',
    lede: 'Billed monthly in US dollars at a single rate for all countries outside India. No joining fee and no lengthy commitment.',
    free: ['A real lesson pitched correctly', 'A frank account afterwards', 'No card details'],
    group: ['Five to ten learners, one level', 'The same teacher throughout', 'Written work marked and explained', 'Certificate at the end'],
    one: ['Personal teaching', 'Focused on the exact difficulty', 'Helpful just before exams']
  },

  faq: {
    eyebrow: 'Edinburgh maths questions',
    h2: 'What Edinburgh families and adult learners want to know',
    items: [
      { q: 'What does gradient mean in maths?', a: 'Gradient measures steepness: the vertical rise divided by the horizontal run. A gradient of 0.149 means 14.9 metres up for every 100 metres across. For a straight line it is the same everywhere; for a curve it changes, which is why calculus is needed.' },
      { q: 'How much does a maths tutor cost in Edinburgh?', a: 'The first lesson is free. Then it is USD 100 per month for a place in a group or USD 150 per month for private lessons, with no other charges.' },
      { q: 'Do you tutor Higher Maths in Edinburgh?', a: 'Yes. We teach SQA Higher Mathematics, including differentiation, integration, functions, circles and vectors, steering lessons to the course specification.' },
      { q: 'Can you help with National 5 and Advanced Higher maths?', a: 'Yes. We teach National 5 Mathematics and Advanced Higher Mathematics as well, matched to the SQA courses.' },
      { q: 'What is the best age to begin maths tuition?', a: 'Any age can work. The right moment is when a learner first starts to feel unsure, before the gap grows. We teach children from 6 and adults up to 67.' },
      { q: 'Is learning maths over video as effective as a home tutor?', a: 'For most learners, yes. The teacher sees each line of working as it appears and responds at once. Lessons are live with a real person, and each group keeps its teacher.' },
      { q: 'Do you teach adults in Edinburgh?', a: 'We do. Adults range from people starting over with basic number to graduates brushing up calculus, and they learn in adult-only groups or privately.' },
      { q: 'Can an Edinburgh learner sit English GCSEs or A levels with you?', a: 'We teach both, mainly to learners in England. Pupils at Edinburgh schools normally follow SQA courses, so we teach them National 5, Higher and Advanced Higher.' },
      { q: 'Can you promise a particular grade?', a: 'No promise of a grade is ever honest. What we offer is structured teaching, marked work and a monthly update you can trust.' },
      { q: 'Are you linked with the University of Edinburgh or Education Scotland?', a: 'No. We mention their public activities so families are aware of them, but we have no link with either, nor with any school.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related',
    h2: 'More for Edinburgh learners',
    lede: 'Pages on each SQA maths course, Scotland as a whole, and coding in Edinburgh.',
    items: [
      { href: '/higher-maths-tuition-online', label: 'Higher maths tuition', p: 'Calculus, functions, circles and vectors.' },
      { href: '/national-5-maths-tuition-online', label: 'National 5 maths tuition', p: 'The SCQF level 5 course, topic by topic.' },
      { href: '/advanced-higher-maths-tuition-online', label: 'Advanced Higher maths', p: 'The last stage of school maths in Scotland.' },
      { href: '/best-coding-class-in-edinburgh', label: 'Coding classes in Edinburgh', p: 'Python and AI for Edinburgh learners.' },
      { href: '/maths-tuition-in-glasgow', label: 'Maths tuition in Glasgow', p: 'Circle geometry on the Subway.' },
      { href: '/coding-and-ai-classes-in-scotland', label: 'Coding and AI in Scotland', p: 'The nation page, from the Highlands to the Borders.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson',
    lede: 'Give us the stage, from P3 to adult, and the topic that refuses to stick. We run a proper trial lesson and then share an honest verdict.',
    readFirst: 'Prefer to explore first? Look through the <a class="ag-inline-link" href="/courses">courses</a> or read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>.',
    note: 'Replies come quickest on WhatsApp. The +91 number reflects where our teachers live; there is no office in Edinburgh and every class is held online.',
    formNote: 'No card needed. We will reply to arrange a time.'
  },

  footer: {
    cols: [
      { h4: 'Maths in Scotland', links: [
        { href: '/higher-maths-tuition-online', label: 'Higher maths' },
        { href: '/national-5-maths-tuition-online', label: 'National 5 maths' },
        { href: '/advanced-higher-maths-tuition-online', label: 'Advanced Higher maths' },
        { href: '/online-maths-classes-for-adults-in-uk', label: 'Maths for adults' }
      ] },
      { h4: 'In the UK', links: [
        { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
        { href: '/best-coding-class-in-edinburgh', label: 'Coding in Edinburgh' },
        { href: '/maths-tuition-in-glasgow', label: 'Maths tuition in Glasgow' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] }
    ],
    bottomRight: 'Maths for all ages, live online'
  },

  personalityCss: `
.ag-root.ag-mte .ag-hero h1 { letter-spacing: -0.017em; }
.ag-root.ag-mte .ag-capsule { border-left-width: 5px; }
.ag-root.ag-mte .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-mte .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-mte .ag-table td:last-child { font-variant-numeric: tabular-nums; font-weight: 600; }
.ag-root.ag-mte .ag-spec dt { letter-spacing: 0.1em; }
.ag-root.ag-mte .ag-three h3 { letter-spacing: -0.009em; }
.ag-root.ag-mte .ag-slots { gap: 1rem; }
`,

  mustMention: ['Palace of Holyroodhouse', '1,143.8 metres', '0.574', '213.6 metres', '195.4 metres', 'Maths Week Scotland', 'tenth anniversary', 'Edinburgh Science Festival', 'applying differentiation to related rates'],

  dossier: {
    curriculumAuthority: 'Curriculum for Excellence (Scotland); SQA National 5 Mathematics C847 75, Higher Mathematics C847 76, Advanced Higher Mathematics C847 77 course specifications.',
    localProject: 'Straight line Palace of Holyroodhouse to Arthur\'s Seat summit (OSM ele 251), 1,143.8 m, 59 EU-DEM 25 m heights 19.72 m apart: 43.0 m to 213.6 m; overall gradient 0.149 (8.5 deg); steepest step 0.574 (29.8 deg); steepest 99 m 0.530; 22 of 58 steps downhill; climbing 195.4 m for net 170.5 m; chord gradients to summit 0.179, 0.373, 0.403, 0.312, 0.291, 0.292; trapezium mean height 86.1 m.',
    requiredMentions: ['Palace of Holyroodhouse', '1,143.8 metres', '0.574', '213.6 metres', '195.4 metres', 'Maths Week Scotland', 'tenth anniversary', 'Edinburgh Science Festival', 'applying differentiation to related rates'],
    sources: [
      { claim: 'SQA Higher Mathematics course specification: rate of change, area between a curve and the x-axis, m = tan theta for gradient or angle.', url: 'https://www.sqa.org.uk/sqa/files_ccc/h-course-spec-mathematics.pdf' },
      { claim: 'SQA National 5 Mathematics course specification: gradient and y-intercept of a straight line.', url: 'https://www.sqa.org.uk/sqa/files_ccc/n5-course-spec-mathematics.pdf' },
      { claim: 'SQA Advanced Higher Mathematics course specification: applying differentiation to related rates.', url: 'https://www.sqa.org.uk/files_ccc/AHCourseSpecMathematics.pdf' },
      { claim: 'Education Scotland, Maths Week Scotland 2026: 19 to 27 September, tenth anniversary, theme Maths Matters, responsibility moved from National Museums Scotland.', url: 'https://education.gov.scot/resource-themes/maths-week-scotland/' },
      { claim: 'University of Edinburgh School of Mathematics outreach: workshops for local school students, Edinburgh Science Festival, Mathematics Outreach Team.', url: 'https://maths.ed.ac.uk/outreach' },
      { claim: 'EU-DEM v1.1 heights via OpenTopoData eudem25m; end points from OpenStreetMap (summit node ele 251).', url: 'https://www.opentopodata.org/datasets/eudem/' }
    ],
    rejectedClaims: [
      'An official or surveyed height for Arthur\'s Seat: only the OpenStreetMap tag (251) and the EU-DEM value (213.6) are given, each labelled.',
      'Names of crags or paths along the line: not verified, not printed.',
      'Any walking route, time or safety advice: the line is not a path, and the page says so.',
      'GCSE or A level as Edinburgh qualifications: described as the English system.',
      'Edinburgh exam results or school performance: excluded by the spec.'
    ]
  }
};
