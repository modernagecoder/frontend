'use strict';
// Maths tuition in Sheffield (ag- maths by city, UK cluster Phase 11, row 574).
// Read on 1 October 2026 by curl, quotes grepped from the raw text:
//  - NCETM, South Yorkshire Maths Hub page: "The Lead School for the hub is Notre Dame High School, Sheffield."; council
//    areas listed: Barnsley, Doncaster, Rotherham, Sheffield.
//  - DfE GCSE mathematics subject content (2013), geometry item 15: "measure line segments and angles in geometric figures,
//    including interpreting maps and scale drawings and use of bearings"; item 22: "know and apply the sine rule ... and
//    cosine rule ... to find unknown lengths and angles" (formulae omitted, they do not survive text extraction).
//  - University of Sheffield schools and outreach page returned 404 to curl; nothing quoted from it.
// Local project (our calculation): OpenStreetMap, one Overpass query for tram route relations and their stop nodes
// (osm_base 2026-10-01T09:20:15Z): 8 route relations named Supertram Yellow (Middlewood, Meadowhall Interchange), Blue
// (Halfway, Malin Bridge), Purple (Herdings Park, Cathedral) and Tram-Train (Rotherham Parkgate, Cathedral), each both ways.
// Stop position = mean of the mapped stop nodes with that name. Initial great-circle bearings and haversine distances from
// Cathedral: Middlewood 323.7 deg, 4,596 m; Malin Bridge 307.8, 3,287 m; Halfway 125.9, 10,231 m; Herdings Park 156.1,
// 4,876 m; Meadowhall Interchange 043.9, 5,342 m; Rotherham Parkgate 051.1, 10,700 m. Back bearings measured from each end:
// 143.6, 127.8, 306.0, 336.1, 224.0, 231.2. Triangle Cathedral, Middlewood, Meadowhall Interchange: included angle at
// Cathedral 80.26 deg; cosine rule gives 6,430.9 m, direct distance 6,430.9 m; angle at Middlewood 54.95 (sine rule also
// allows 125.05, rejected); angle at Meadowhall 44.78; area (1/2) ab sin C = 12.10 km2; bearing Middlewood to Meadowhall
// 088.7. Malin Bridge, Cathedral and Halfway: angle at Cathedral 178.1 deg.
// Spine: where do the Supertram lines go from the Cathedral stop, by bearing and distance? Family: three-figure bearings,
// back bearings, cosine rule, sine rule and its ambiguous case, area of a triangle from two sides and the included angle.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'SHEFFIELD MATHS', label: 'Maths tuition in Sheffield', blurb: 'Primary to A level and adult maths for Sheffield, with a trigonometry project on the bearings of the Supertram termini.' },
  slug: 'maths-tuition-in-sheffield',
  code: 'msh',
  accent: '#275799',
  accentRationale: 'Sheffield maths: a muted steel blue (7.22:1 contrast on white), chosen by hand and kept apart from the deep violet on our Sheffield coding page',
  pageType: 'city',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Maths tuition in Sheffield',
  title: 'Maths Tuition in Sheffield | KS2, GCSE and A Level Maths Tutor',
  description: 'Maths tuition in Sheffield for ages 6 to 67: live online maths tutors for KS2 SATs, KS3, GCSE, A level and Further Maths, and adult maths. Book a free lesson.',
  ogDescription: 'Sheffield maths tuition, live online: times tables, Year 6 SATs, KS3, GCSE for AQA, Edexcel or OCR, A level, Further Maths, Functional Skills and resits.',
  twitterDescription: 'Sheffield maths, taught live online: what bearing does each Supertram line take from the Cathedral stop?',
  pageName: 'Maths Tuition in Sheffield',
  webPageDescription: 'Live online maths tuition for Sheffield learners aged 6 to 67, covering KS2 and Year 6 SATs maths, KS3, GCSE and IGCSE, A level and Further Maths, and adult maths, with a bearings and trigonometry project built on the Supertram network.',
  courseDescription: 'Live online maths classes for Sheffield learners of all ages, in level-matched groups of five to ten or one to one, following the national curriculum for England and the GCSE and A level specifications.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Maths tuition in Sheffield',
  navLinks: [
    { href: '#key-stages', label: 'Key stages' },
    { href: '#supertram', label: 'Supertram bearings' },
    { href: '#triangle', label: 'Cosine rule' },
    { href: '#south-yorkshire', label: 'Maths hub' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Sheffield &middot; Maths tutor, ages 6 to 67 &middot; Live online, in small groups or one to one',
  h1: 'Maths tuition in Sheffield',
  lede: 'Stand at the Cathedral tram stop with a compass and the Supertram network fans out around you. Middlewood lies on a bearing of 323.7 degrees, Meadowhall Interchange on 043.9, Halfway on 125.9. Join two of those ends to the Cathedral and you have a triangle whose third side you can find without ever measuring it: the cosine rule gives 6,430.9 metres from Middlewood to Meadowhall, and the direct distance worked out from the map agrees to a tenth of a metre. Bearings, the cosine rule, the sine rule and triangle area are all GCSE topics, and this page uses the Supertram to show how our online maths tutors teach Sheffield learners, from the Year 4 multiplication check to A level, Further Maths and adult maths.',
  secondaryCta: { href: '#supertram', label: 'See the Supertram bearings' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for a learner in Sheffield.',
  heroNote: 'A Sheffield maths page &middot; Primary, secondary, sixth form and adults &middot; Not connected with any Sheffield school or university',
  spec: [
    ['Who', 'Sheffield learners aged 6 to 67'],
    ['Primary', 'KS2 maths, the Year 4 check, Year 6 SATs'],
    ['Secondary', 'KS3, GCSE foundation or higher'],
    ['Exam boards', 'AQA, Edexcel, OCR; IGCSE as well'],
    ['Post-16', 'A level Maths, Further Maths'],
    ['Adults', 'Functional Skills maths, GCSE resits'],
    ['Lessons', 'Live online; 5 to 10 per group or one to one'],
    ['Sheffield project', 'Bearings and triangles on the Supertram']
  ],
  capsuleQ: 'What does maths tuition in Sheffield with us look like?',
  capsule: 'Learners across Sheffield, the youngest six and the oldest 67, join our maths lessons by live video, either as one of five to ten classmates working at one level or alone with their tutor. Younger pupils get KS2 maths with tables practice ahead of the Year 4 check and reasoning practice ahead of Year 6 SATs maths. Teenagers get KS3 maths and then GCSE (AQA, Edexcel or OCR, either tier) or IGCSE, followed by A level Maths with optional Further Maths. Adults get anything from Functional Skills maths to a GCSE resit. Lessons combine exam practice with real problems. In Sheffield that means measuring bearings from the Cathedral tram stop to each end of the Supertram and solving the triangles they make. The first lesson is free; afterwards a group place costs USD 100 a month and private lessons USD 150 a month.',

  picks: {
    eyebrow: 'Where Sheffield learners usually start',
    h2: 'The three maths courses Sheffield families book most',
    lede: 'Most requests from Sheffield are for GCSE, A level or primary maths. The full list is further down.',
    items: [
      { course: 'gcse-mathematics-mastery', code: 'SHF / 1', title: 'GCSE maths', note: 'Foundation or higher tier for AQA, Edexcel or OCR, with bearings and trigonometry practised on real maps.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'SHF / 2', title: 'A level maths', note: 'Year 12 and 13 maths, where bearings grow into vectors, radians and the trigonometry of mechanics.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'SHF / 3', title: 'Primary maths', note: 'Times tables, angles and turns, fractions, and the reasoning the Year 6 SATs papers look for.' }
    ]
  },

  sections: [
    {
      id: 'key-stages', tint: 'tint', eyebrow: 'Year 1 to adult',
      h2: 'A maths tutor in Sheffield for KS2, KS3, GCSE and A level',
      lede: 'Sheffield schools follow the national curriculum for England, so the stages below are the ones every Sheffield learner passes through. Adults start from wherever they left off.',
      body: [
        { kind: 'table', caption: 'Maths at each stage for a Sheffield learner, and the focus of our lessons', head: ['Stage', 'Years', 'What we concentrate on'], rows: [
          ['KS1', '1 and 2', 'Counting, number bonds, simple shapes and quarter and half turns.'],
          ['KS2', '3 to 6', 'Times tables before the Year 4 check, angles in degrees, compass directions and the reasoning of Year 6 SATs.'],
          ['KS3', '7 to 9', 'Angle facts, scale drawings, first bearings and Pythagoras.'],
          ['GCSE', '10 and 11', 'Foundation or higher tier: bearings, trigonometry, and at higher tier the sine and cosine rules.'],
          ['A level', '12 and 13', 'Pure maths, statistics and mechanics, with vectors and radians; Further Maths for those who want more.'],
          ['Adults', 'Any', 'Functional Skills maths, GCSE maths resits, and practical maths for work.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'KS2: from turns to degrees',
          left: [
            'Children at state-funded schools in England sit the multiplication tables check in Year 4. We teach the tables as a network: 7 × 9 is 7 × 10 take away one seven, and a child who sees that never has to panic over a forgotten fact.',
            'Angles arrive in KS2 as turns, then as degrees. A child who knows that a quarter turn is 90 degrees and a full turn 360 is already halfway to understanding bearings, and we build that link on purpose.'
          ],
          rightH3: 'GCSE, A level and Further Maths',
          right: [
            'Our GCSE tutors teach to the learner\'s board and tier. Bearings appear at both tiers; the sine rule, the cosine rule and the area formula ½ab sin C are higher tier, and all of them appear in the Supertram project below.',
            'For more on each stage see our national pages: <a class="ag-inline-link" href="/ks2-maths-tuition-online">KS2 maths</a>, <a class="ag-inline-link" href="/ks3-maths-tuition-online">KS3 maths</a>, <a class="ag-inline-link" href="/gcse-maths-tuition-online">GCSE maths</a>, <a class="ag-inline-link" href="/a-level-maths-tuition-online">A level maths</a> and <a class="ag-inline-link" href="/further-maths-tuition-online">Further Maths</a>.'
          ] },
        { kind: 'source', html: 'The Year 4 check is described on <a class="ag-inline-link" href="https://www.gov.uk/government/collections/multiplication-tables-check" rel="noopener" target="_blank">gov.uk</a> (read 1 October 2026). Key stage years are the standard ones for England.' }
      ]
    },
    {
      id: 'supertram', tint: 'plain', eyebrow: 'The Sheffield project',
      h2: 'Bearings from the Cathedral stop to every end of the Supertram',
      lede: 'A bearing is a direction given as an angle measured clockwise from north, always written with three figures. The Supertram, with lines spreading out from the city centre, is an ideal place to practise them.',
      body: [
        { kind: 'two',
          left: [
            'On 1 October 2026 we downloaded the tram routes from OpenStreetMap. Four services are mapped, each in both directions: the Yellow route between Middlewood and Meadowhall Interchange, the Blue route between Halfway and Malin Bridge, the Purple route between Herdings Park and Cathedral, and the Tram-Train between Rotherham Parkgate and Cathedral.',
            'For every stop we took the average position of its mapped platforms. Then, from the Cathedral stop, we calculated the bearing and the straight-line distance to each of the six outer ends of the network.'
          ],
          right: [
            'A learner with a protractor and a paper map would get close to these numbers; we used the exact formulas for a curved Earth so that the answers can be trusted to a tenth of a degree. On a map this small the curvature barely matters, but it shows up in one interesting place, explained below the table.',
            'Every figure here is our own calculation from the open map. The distances are straight lines, not distances along the track, so they are shorter than any tram journey.'
          ] },
        { kind: 'table', mt: true, caption: 'Bearings and straight-line distances from the Cathedral tram stop (our calculation from OpenStreetMap, 1 October 2026)', head: ['End of the line', 'Bearing from Cathedral', 'Distance', 'Bearing back to Cathedral'], numCols: [1, 2, 3], rows: [
          ['Malin Bridge', '307.8°', '3,287 m', '127.8°'],
          ['Middlewood', '323.7°', '4,596 m', '143.6°'],
          ['Herdings Park', '156.1°', '4,876 m', '336.1°'],
          ['Meadowhall Interchange', '043.9°', '5,342 m', '224.0°'],
          ['Halfway', '125.9°', '10,231 m', '306.0°'],
          ['Rotherham Parkgate', '051.1°', '10,700 m', '231.2°']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Back bearings',
          left: [
            'GCSE students learn that a back bearing is the forward bearing plus or minus 180 degrees. Check the table: Middlewood is 323.7 degrees from Cathedral, and Cathedral is 143.6 degrees from Middlewood. The rule predicts 143.7.',
            'That tenth of a degree is real. North points in very slightly different directions at two places on a curved Earth, so over ten kilometres the back bearing drifts a little from the flat-map rule. For Halfway the rule gives 305.9 and the true back bearing is 306.0.'
          ],
          rightH3: 'A nearly straight line',
          right: [
            'Malin Bridge is on 307.8 degrees and Halfway on 125.9 degrees, ends of the same Blue route. The difference is 178.1 degrees, so the two ends and the Cathedral stop lie within two degrees of a straight line through the city centre.',
            'That makes a lovely KS3 question: if the angle were exactly 180 degrees, what would the distance from Malin Bridge to Halfway be? Simply 3,287 + 10,231 metres. The cosine rule, for the real angle, gives a total only a few metres shorter.'
          ] },
        { kind: 'source', html: 'Data: <a class="ag-inline-link" href="https://www.openstreetmap.org/copyright" rel="noopener" target="_blank">OpenStreetMap contributors</a>, Supertram route relations and stops, one Overpass query on 1 October 2026. Bearings and distances are Modern Age Coders\' calculations and are not published by the tram operator. GCSE wording: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/gcse-mathematics-subject-content-and-assessment-objectives" rel="noopener" target="_blank">DfE, GCSE mathematics subject content</a>, which includes "interpreting maps and scale drawings and use of bearings".' }
      ]
    },
    {
      id: 'triangle', tint: 'deep', eyebrow: 'Higher tier trigonometry',
      h2: 'Middlewood, Meadowhall and the cosine rule',
      lede: 'Take the Cathedral stop, Middlewood and Meadowhall Interchange as the three corners of a triangle. Two sides and the angle between them come straight from the bearings table; everything else follows.',
      body: [
        { kind: 'table', caption: 'Solving the Cathedral, Middlewood and Meadowhall Interchange triangle (our calculation)', head: ['Step', 'Working', 'Result'], rows: [
          ['Angle at Cathedral', '043.9° − 323.7° + 360°', '80.26°'],
          ['Third side, cosine rule', '√(4,596.4² + 5,341.8² − 2 × 4,596.4 × 5,341.8 × cos 80.26°)', '6,430.9 m'],
          ['Direct distance from the map', 'Great-circle formula between the two ends', '6,430.9 m'],
          ['Angle at Middlewood, sine rule', 'sin⁻¹(5,341.8 × sin 80.26° ÷ 6,430.9)', '54.95°'],
          ['Angle at Meadowhall', '180° − 80.26° − 54.95°', '44.78°'],
          ['Area, ½ab sin C', '½ × 4,596.4 × 5,341.8 × sin 80.26°', '12.10 km²']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Two methods, one answer',
          left: [
            'The cosine rule, working only from the two distances and the angle at Cathedral, gives 6,430.9 metres from Middlewood to Meadowhall Interchange. Calculating the same distance directly from the map coordinates gives 6,430.9 metres too.',
            'Agreement to a tenth of a metre is a satisfying check for a GCSE student, and it shows why the cosine rule works on maps: over a few kilometres the Earth is flat enough for school trigonometry to be exact in practice.'
          ],
          rightH3: 'The ambiguous case',
          right: [
            'The sine rule tells you that sin of the angle at Middlewood is about 0.819. Two angles below 180 degrees have that sine: 54.95 degrees and 125.05 degrees. Which is right?',
            'Add 125.05 to the 80.26 degrees already at Cathedral and you pass 180, which no triangle allows, so the angle must be 54.95. Higher tier students who learn to ask that question avoid one of the commonest traps in the exam.'
          ] },
        { kind: 'p', mt: true, html: 'Different stages use the same triangle differently. KS2 children estimate the angles with a protractor on a printed map. KS3 learners draw it to scale. GCSE students use the cosine and sine rules as above, and A level students turn the bearings into vectors and find the bearing from Middlewood to Meadowhall, which is 088.7 degrees.' },
        { kind: 'source', html: 'All values are Modern Age Coders\' calculations from the OpenStreetMap stop positions. The sine and cosine rules and the area formula appear in the DfE GCSE subject content, geometry and measures.' }
      ]
    },
    {
      id: 'south-yorkshire', tint: 'tint', eyebrow: 'Maths in South Yorkshire',
      h2: 'The South Yorkshire Maths Hub and maths beyond the classroom',
      lede: 'Sheffield schools belong to a regional maths network that most families never hear about. Here is what its public page says. We have no part in it.',
      body: [
        { kind: 'three', cells: [
          { h3: 'South Yorkshire Maths Hub', p: 'The NCETM page for the South Yorkshire Maths Hub names Notre Dame High School, Sheffield, as its lead school.' },
          { h3: 'Four council areas', p: 'The same page lists the areas the hub works with: Barnsley, Doncaster, Rotherham and Sheffield.' },
          { h3: 'Teachers, not families', p: 'Maths Hubs support schools and teachers through development work. Families see the effect in lessons rather than dealing with a hub directly.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'For learners who enjoy problems like the Supertram triangle, competition maths is the natural next step. Schools enter pupils for the UK Mathematics Trust challenges, and our <a class="ag-inline-link" href="/ukmt-maths-challenge-tutoring">UKMT maths challenge page</a> sets out how we coach for each level.',
            'The <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">UK competitions calendar</a> lists dates for maths and coding competitions by age.'
          ],
          right: [
            'Our lessons are online, so a learner in Walkley, Crookes or Gleadless joins from home. We group by level rather than by area, so a Sheffield learner may share a class with someone in London or Leicester.',
            'We do not run an 11 plus page for Sheffield. Families preparing for a selective school test elsewhere can use our <a class="ag-inline-link" href="/courses/11-plus-maths-preparation-course-uk">11 plus maths course</a>.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.ncetm.org.uk/hubs/south-yorkshire-maths-hub/" rel="noopener" target="_blank">NCETM, South Yorkshire Maths Hub</a>, read 1 October 2026. Modern Age Coders is independent of all of them, and of every school and university in the city.' }
      ]
    },
    {
      id: 'adult-maths', tint: 'plain', eyebrow: 'Adult learners',
      h2: 'Maths for adults in Sheffield: Functional Skills, resits and refreshers',
      lede: 'Adults are a large part of our Sheffield intake. Some need a qualification, some want to support their children, and some want to use numbers at work without a knot in the stomach.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Retaking GCSE maths', p: 'Adults retaking the exam sit in our GCSE course. A short diagnostic comes first, so lesson time goes where the marks are.' },
          { h3: 'Functional Skills maths', p: 'Applied maths for jobs, apprenticeships and further study. Our <a class="ag-inline-link" href="/functional-skills-maths-tuition-online">Functional Skills maths page</a> describes the course.' },
          { h3: 'Refreshers', p: 'Fractions, percentages, angles and statistics, rebuilt at an adult pace. See our <a class="ag-inline-link" href="/online-maths-classes-for-adults-in-uk">maths classes for adults</a>.' }
        ] },
        { kind: 'p', mt: true, html: 'Adults who once found trigonometry baffling often enjoy the Supertram triangle. They know the places, they can picture the map, and seeing the cosine rule reproduce a distance they could check for themselves makes the formula feel like a tool rather than a test.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'From quarter turns to solving any triangle',
    lede: 'The four steps below build towards the trigonometry on this page. A new learner can join at any step; the free lesson shows which.',
    table: { caption: 'Four steps towards bearings and trigonometry for Sheffield learners', head: ['Usually', 'Step', 'The learner can'], rows: [
      ['Years 3 to 5', '1. Turns and degrees', 'Describe turns in degrees and use the eight compass points'],
      ['Years 6 to 8', '2. Angle facts', 'Find missing angles on lines, around points and in triangles'],
      ['Years 8 to 10', '3. Bearings and scale', 'Measure and draw three-figure bearings on a scale map'],
      ['Years 10 to 13', '4. Any triangle', 'Choose between the sine and cosine rules and check the ambiguous case']
    ] },
    left: { h3: 'Starting in Year 10 or 11', ps: [
      'Learners who join late in GCSE can still make real gains, provided algebra and angle facts are put right first.',
      'If there is not enough time to close the gap before the exam, we say so honestly after the free lesson.'
    ] },
    right: { h3: 'After GCSE', ps: [
      'Many continue to A level Maths, and some add Further Maths. Learners who prefer data move to our <a class="ag-inline-link" href="/courses/statistics-probability-maths-course">statistics and probability course</a>.',
      'Others recreate the bearings table in Python with <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'All courses',
    h2: 'Maths courses for Sheffield learners',
    lede: 'Arranged by stage, from early number to university mathematics.',
    bands: [
      { num: 'I', h3: 'Primary', sub: 'KS1 and KS2', courses: [
        { code: 'MSH / A1', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'All of KS1 and KS2, with SATs reasoning.' },
        { code: 'MSH / A2', slug: 'early-math-foundations', title: 'Early number', blurb: 'Counting, shape and pattern for young children.' },
        { code: 'MSH / A3', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus maths', blurb: 'Arithmetic with a bead frame, then in the head.' },
        { code: 'MSH / A4', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Quick, confident calculation.' }
      ] },
      { num: 'II', h3: 'Secondary', sub: 'KS3, GCSE, IGCSE', courses: [
        { code: 'MSH / B1', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'KS3 maths', blurb: 'Lower secondary: angles, equations, ratio.' },
        { code: 'MSH / B2', slug: 'gcse-mathematics-mastery', title: 'GCSE maths', blurb: 'Any board, either tier, resits included.' },
        { code: 'MSH / B3', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'Cambridge and Edexcel international routes.' },
        { code: 'MSH / B4', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths', blurb: 'Practice for selective school tests.' }
      ] },
      { num: 'III', h3: 'Advanced', sub: 'Sixth form and university', courses: [
        { code: 'MSH / C1', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'Sixth form maths across all three strands.' },
        { code: 'MSH / C2', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'UKMT challenges and olympiad problems.' },
        { code: 'MSH / C3', slug: 'college-mathematics-complete-masterclass', title: 'University maths', blurb: 'Calculus, linear algebra, proof.' },
        { code: 'MSH / C4', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'For anyone whose algebra needs a reset.' }
      ] },
      { num: 'IV', h3: 'Applied and adult', sub: 'Work and curiosity', courses: [
        { code: 'MSH / D1', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'From averages to inference.' },
        { code: 'MSH / D2', slug: 'complete-business-finance-mathematics-mastery', title: 'Money maths for work', blurb: 'Percentages, loans and forecasts in context.' },
        { code: 'MSH / D3', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data', blurb: 'The statistics behind analysis.' },
        { code: 'MSH / D4', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Trigonometry and data in Python.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lesson times',
    h2: 'Maths lessons around a Sheffield school week',
    lede: 'Our tutors keep Indian Standard Time, which has no summer change. That puts India four and a half hours ahead of Sheffield in summer and five and a half in winter; we quote every slot in UK time.',
    slots: [
      { time: 'Weekdays after school', l: 'Children and teenagers, straight from class.' },
      { time: 'Weekday evenings', l: 'For A level students and adults.' },
      { time: 'Weekend mornings', l: 'For anyone who prefers a weekend lesson.' }
    ],
    cells: [
      { h3: 'One tutor, every week', p: 'The tutor who saw last week\'s slip checks for it again this week.' },
      { h3: 'Short reports', p: 'Families get a brief note on progress after lessons.' },
      { h3: 'Level-matched groups', p: 'Five to ten learners at one level, so the pace suits everyone.' },
      { h3: 'Maps and real places', p: 'Tram networks and local data alongside past papers.' },
      { h3: 'One to one when needed', p: 'For a specific weakness or the weeks before an exam.' },
      { h3: 'Explain, then practise', p: 'Learners say why a rule works before they drill it.' }
    ]
  },

  projectsH2: 'What learners built after lessons like these',
  projectsLede: 'Students who began with problems like the Supertram triangle went on to make the projects below. More are in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from families and learners, exactly as written.',

  fees: {
    h2: 'Fees',
    lede: 'Paid monthly in US dollars, one rate for all countries except India, with no joining fee and no contract.',
    free: ['A full lesson at the right level', 'An honest assessment afterwards', 'No card needed'],
    group: ['Five to ten learners at one level', 'The same tutor each week', 'Homework marked with feedback', 'Certificate at the end'],
    one: ['One tutor for one learner', 'Aimed at specific gaps', 'Ideal before exams']
  },

  faq: {
    eyebrow: 'Sheffield maths questions',
    h2: 'What Sheffield families and adult learners ask',
    items: [
      { q: 'How much does a maths tutor cost in Sheffield?', a: 'Your trial costs nothing. A seat in a Sheffield-friendly class of five to ten is then USD 100 per month, and a private tutor is USD 150 per month; there is no sign-up charge and you can leave whenever you wish.' },
      { q: 'What is a three-figure bearing?', a: 'A three-figure bearing is a direction measured clockwise from north, written with three digits, so east is 090 degrees and south-west is 225 degrees. From the Sheffield Cathedral tram stop, Meadowhall Interchange lies on a bearing of 043.9 degrees.' },
      { q: 'Will a tutor on a screen help as much as one in the room?', a: 'In our experience it helps just as much when the lesson is live and the tutor can follow each line of working. Ours write and watch on a shared board, so an error in the second line never survives to the tenth.' },
      { q: 'I need to resit GCSE maths. Can you help?', a: 'Yes. Learners of any age join our GCSE course for a resit. We find out which topics are already secure, then spend the time where it will raise the mark most.' },
      { q: 'Which GCSE maths boards do you teach?', a: 'AQA, Edexcel and OCR at foundation and higher tier, and the IGCSE for learners whose schools use it.' },
      { q: 'Is there KS2 maths help for Year 6 SATs?', a: 'Yes. Primary lessons follow the whole of Key Stage 2, so a child practises multiplication facts in time for Year 4 and written explanations in time for the Year 6 papers.' },
      { q: 'Is Further Maths on offer too?', a: 'It is. Sixth formers studying Further Maths next to A level Maths can take the extra modules with us online.' },
      { q: 'What is the best way to learn the sine and cosine rules?', a: 'Learn when to use each one before memorising them: the cosine rule for two sides and the angle between them, or three sides; the sine rule for a side and its opposite angle. Then practise on real triangles, like the Supertram one, and always check the ambiguous case.' },
      { q: 'Are you connected with the South Yorkshire Maths Hub?', a: 'No. We describe what its public page says so that families know it exists. We have no link with the NCETM, the hub or any Sheffield school or university.' },
      { q: 'Do you promise exam grades?', a: 'No. Honest teaching and honest progress reports are what we offer; a grade depends on the learner and the day, and nobody can promise one.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related',
    h2: 'More for Sheffield learners',
    lede: 'Stage-by-stage maths guides, coding in Sheffield, and maths pages for nearby cities.',
    items: [
      { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition', p: 'Tiers, boards and how we teach them.' },
      { href: '/a-level-maths-tuition-online', label: 'A level maths tuition', p: 'Sixth form maths in depth.' },
      { href: '/ks3-maths-tuition-online', label: 'KS3 maths tuition', p: 'Years 7 to 9, where the groundwork is laid.' },
      { href: '/best-coding-class-in-sheffield', label: 'Coding classes in Sheffield', p: 'Our Sheffield page for coding and AI.' },
      { href: '/maths-tuition-in-leeds', label: 'Maths tuition in Leeds', p: 'Our Leeds maths page and its hill gradients project.' },
      { href: '/coding-classes-in-united-kingdom', label: 'UK index', p: 'Every UK page we publish.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson in Sheffield',
    lede: 'Tell us the learner\'s age or year group, the exam board if there is one, and which topic feels hardest. The first lesson is a real lesson, and we give you a frank view of where things stand afterwards.',
    readFirst: 'Would you rather browse first? Visit our <a class="ag-inline-link" href="/courses">course pages</a> or read about <a class="ag-inline-link" href="/how-we-teach">the way we teach</a>.',
    note: 'WhatsApp is quickest. The number carries India\'s country code because that is where the team works; there is no Sheffield office and every lesson happens online.',
    formNote: 'No payment details requested. We will be in touch to arrange a time.'
  },

  footer: {
    cols: [
      { h4: 'Maths stages', links: [
        { href: '/ks2-maths-tuition-online', label: 'KS2 maths' },
        { href: '/gcse-maths-tuition-online', label: 'GCSE maths' },
        { href: '/further-maths-tuition-online', label: 'Further Maths' },
        { href: '/online-maths-classes-for-adults-in-uk', label: 'Adult maths' }
      ] },
      { h4: 'Sheffield and nearby', links: [
        { href: '/best-coding-class-in-sheffield', label: 'Coding in Sheffield' },
        { href: '/maths-tuition-in-leeds', label: 'Maths tuition in Leeds' },
        { href: '/maths-tuition-in-manchester', label: 'Maths tuition in Manchester' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK index' }
      ] }
    ],
    bottomRight: 'Sheffield maths, live online'
  },

  personalityCss: `
.ag-root.ag-msh .ag-hero h1 { letter-spacing: -0.017em; }
.ag-root.ag-msh .ag-capsule { border-left-width: 4px; }
.ag-root.ag-msh .ag-section-head h2 { max-width: 25ch; }
.ag-root.ag-msh .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-msh .ag-table td:nth-child(2) { font-variant-numeric: tabular-nums; }
.ag-root.ag-msh .ag-spec dt { letter-spacing: 0.12em; }
.ag-root.ag-msh .ag-three h3 { letter-spacing: -0.007em; }
.ag-root.ag-msh .ag-slots { gap: 1rem; }
`,

  mustMention: ['South Yorkshire Maths Hub', 'Notre Dame High School', 'Middlewood', 'Meadowhall Interchange', 'Rotherham Parkgate', 'Herdings Park', '6,430.9 metres', '80.26', '54.95'],

  dossier: {
    curriculumAuthority: 'National curriculum for England (DfE); GCSE mathematics subject content (DfE, 2013), geometry items on bearings, the sine and cosine rules and the area of a triangle; multiplication tables check (gov.uk). Sheffield is listed by the NCETM as an area of the South Yorkshire Maths Hub (lead Notre Dame High School, Sheffield).',
    localProject: 'OpenStreetMap Supertram route relations and stops, 1 October 2026. From Cathedral: Middlewood 323.7 deg 4,596 m; Malin Bridge 307.8 3,287; Halfway 125.9 10,231; Herdings Park 156.1 4,876; Meadowhall Interchange 043.9 5,342; Rotherham Parkgate 051.1 10,700; back bearings 143.6, 127.8, 306.0, 336.1, 224.0, 231.2. Triangle Cathedral/Middlewood/Meadowhall: C 80.26, cosine rule 6,430.9 m = direct 6,430.9 m, angles 54.95 and 44.78, area 12.10 km2. Malin Bridge, Cathedral, Halfway angle 178.1.',
    requiredMentions: ['South Yorkshire Maths Hub', 'Notre Dame High School', 'Middlewood', 'Meadowhall Interchange', 'Rotherham Parkgate', 'Herdings Park', '6,430.9 metres', '80.26', '54.95'],
    sources: [
      { claim: 'NCETM, South Yorkshire Maths Hub: lead school Notre Dame High School, Sheffield; areas Barnsley, Doncaster, Rotherham, Sheffield.', url: 'https://www.ncetm.org.uk/hubs/south-yorkshire-maths-hub/' },
      { claim: 'OpenStreetMap Supertram route relations (Yellow, Blue, Purple, Tram-Train) and stop nodes, one Overpass query, 1 October 2026.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'DfE GCSE mathematics subject content: "interpreting maps and scale drawings and use of bearings"; sine rule, cosine rule and area of a triangle.', url: 'https://www.gov.uk/government/publications/gcse-mathematics-subject-content-and-assessment-objectives' },
      { claim: 'gov.uk: the multiplication tables check is statutory for year 4 pupils at state-funded schools in England.', url: 'https://www.gov.uk/government/collections/multiplication-tables-check' }
    ],
    rejectedClaims: [
      'University of Sheffield outreach details: the schools page returned 404 to curl, so nothing is quoted.',
      'Track lengths or journey times: only straight-line distances computed from the map are printed.',
      'The "seven hills of Sheffield" or similar local lore: no primary source read.',
      'Any Sheffield school results or rankings: excluded by the spec.',
      'Any link between the hub, its lead school and Modern Age Coders.'
    ]
  }
};
