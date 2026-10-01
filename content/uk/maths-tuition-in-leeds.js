'use strict';
// Maths tuition in Leeds (ag- maths by city, UK cluster Phase 11, row 570).
// Read on 1 October 2026 by curl, quotes grepped from the raw text:
//  - NCETM, West Yorkshire Maths Hub page: "The Lead School for the hub is Trinity Academy, Halifax."; council areas listed:
//    Bradford, Calderdale, Leeds.
//  - University of Leeds, School of Mathematics, "Outreach and public engagement" (eps.leeds.ac.uk/maths/doc/schools-outreach):
//    "Be Curious is the University's annual family-friendly research open day with fun activities, challenges and inspiring
//    talks"; lists "interactive events at Leeds Festival of Science, Leeds Light Night, Pint of Science and Soapbox Science";
//    Summer Schools "Suitable for Year 12 students".
//  - DfE GCSE mathematics subject content (2013), algebra item 14: "interpret the gradient of a straight line graph as a rate
//    of change"; ratio item 12 on "similarity (including trigonometric ratios)".
// Local project (our calculation): OpenStreetMap, one Overpass query for named residential, tertiary and secondary ways in
// the box 53.805 to 53.830 N, 1.590 to 1.545 W (osm_base 2026-10-01T09:23:27Z), 1,030 ways. Ways of the same name that share
// an end node were joined; 124 joined streets are at least 250 m long. Heights at the two most distant ends of each street
// from OpenTopoData eudem25m (EU-DEM v1.1, 25 m grid, Copernicus). Average end-to-end gradient = height difference / mapped
// length. Steepest: Argie Road 321 m, 29.7 m, 9.26%, 5.29 deg, 1 in 10.8; Woodside View 401 m, 32.1 m, 8.02%; Buckingham
// Road 261 m, 20.4 m, 7.81%; Richmond Avenue 320 m, 23.7 m, 7.38%; Woodsley Road 528 m, 35.4 m, 6.70%; Church Lane 713 m,
// 45.5 m, 6.38%. Median 2.18%, mean 2.58%; 15 streets over 5%, 25 under 1%; Stainbeck Avenue 0.02% over 364 m. Heights
// from 36.2 m to 118.6 m. Argie Road: atan(29.7/321) = 5.29 deg; asin(29.7/321) = 5.31 deg.
// Spine: which streets in north-west Leeds are steepest, and how should a gradient be written? Family: gradient as rise over
// run, percentage, ratio "1 in n", angle by inverse tangent, sine versus tangent for small angles, average versus local slope.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'LEEDS MATHS', label: 'Maths tuition in Leeds', blurb: 'KS2 to A level and adult maths in Leeds, with a gradients project that measures streets around Headingley and Burley.' },
  slug: 'maths-tuition-in-leeds',
  code: 'mle',
  accent: '#36661B',
  accentRationale: 'Leeds maths: a muted moorland green (6.83:1 contrast on white), chosen by hand and kept clear of the darker green on our Leeds coding page',
  pageType: 'city',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Maths tuition in Leeds',
  title: 'Maths Tuition in Leeds | Online Maths Tutor for GCSE and A Level',
  description: 'Maths tuition in Leeds for ages 6 to 67: a live online maths tutor for KS2 and SATs, KS3, GCSE, A level and Further Maths, plus maths for adults. Free trial.',
  ogDescription: 'Leeds maths tuition online: the Year 4 tables check, SATs, KS3, GCSE on AQA, Edexcel or OCR, A level and Further Maths, Functional Skills and GCSE resits.',
  twitterDescription: 'Leeds maths, taught live online: which streets in Headingley and Burley are steepest, and how do you write a gradient?',
  pageName: 'Maths Tuition in Leeds',
  webPageDescription: 'Live online maths tuition for Leeds learners aged 6 to 67, from KS2 and Year 6 SATs maths through KS3, GCSE and A level to Further Maths and adult maths, with a gradients and trigonometry project built on Leeds street heights.',
  courseDescription: 'Live online maths classes for Leeds learners, in groups of five to ten at a single level or one to one, taught to the national curriculum for England and the GCSE and A level specifications of every board.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Maths tuition in Leeds',
  navLinks: [
    { href: '#ages', label: 'Ages and stages' },
    { href: '#hills', label: 'Leeds hills' },
    { href: '#angles', label: 'Gradient to angle' },
    { href: '#west-yorkshire', label: 'Maths hub' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Leeds &middot; Maths for everyone from 6 to 67 &middot; Taught live online',
  h1: 'Maths tuition in Leeds',
  lede: 'Walk around Headingley, Hyde Park or Burley and sooner or later you meet a hill. We measured how steep those hills are. Using open map data and a European height model, we worked out the average gradient of 124 streets in that corner of north-west Leeds. The steepest, Argie Road, climbs 29.7 metres in 321 metres: a gradient of 9.26%, or 1 in 10.8, or an angle of 5.29 degrees. Three ways of writing one hill, and GCSE learners need all three. This page shows how our online maths tutors teach Leeds learners, from the Year 4 multiplication check through GCSE and A level to Further Maths and adult maths, starting with the city\'s own slopes.',
  secondaryCta: { href: '#hills', label: 'See the Leeds gradients' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for a learner in Leeds.',
  heroNote: 'A maths page for Leeds &middot; Primary, secondary, sixth form and adults &middot; Unconnected with any Leeds school, college or university',
  spec: [
    ['Who', 'Leeds learners aged 6 to 67'],
    ['Primary', 'KS2 maths, tables check, Year 6 SATs'],
    ['Secondary', 'KS3, GCSE at either tier'],
    ['Boards', 'AQA, Edexcel, OCR, plus IGCSE'],
    ['Sixth form', 'A level Maths and Further Maths'],
    ['Adults', 'Functional Skills, resits, refreshers'],
    ['Teaching', 'Live online, five to ten per group or one to one'],
    ['Leeds project', 'Street gradients in Headingley and Burley']
  ],
  capsuleQ: 'How does maths tuition in Leeds work with Modern Age Coders?',
  capsule: 'Leeds learners study maths with us live on video, at any age between 6 and 67, either in a level-matched class of five to ten or one to one. For primary children that means times tables in time for the Year 4 check, KS2 maths and the reasoning in Year 6 SATs maths. Secondary pupils follow KS3 maths into GCSE, on AQA, Edexcel or OCR at foundation or higher tier, or IGCSE. Sixth formers take A level Maths, often with Further Maths, and adults join for Functional Skills maths, a GCSE maths resit or a confidence refresher. Real data runs through every course; in Leeds we use the gradients of 124 streets around Headingley and Burley, the steepest of which rises 1 in 10.8. Lessons start with a free trial, then cost USD 100 a month in a group or USD 150 a month one to one.',

  picks: {
    eyebrow: 'Leeds favourites',
    h2: 'Three maths courses Leeds learners pick first',
    lede: 'GCSE, A level and primary maths make up most Leeds enquiries. Everything else is in the catalogue lower down.',
    items: [
      { course: 'gcse-mathematics-mastery', code: 'LDS / 1', title: 'GCSE maths', note: 'AQA, Edexcel or OCR, foundation or higher, with gradients and trigonometry tested on real Leeds hills.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'LDS / 2', title: 'A level maths', note: 'Sixth form maths in three strands, where a slope becomes a derivative and a block on an incline becomes mechanics.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'LDS / 3', title: 'Primary maths', note: 'Times tables, measures and fractions, building towards the reasoning in Year 6 SATs maths.' }
    ]
  },

  sections: [
    {
      id: 'ages', tint: 'tint', eyebrow: 'Age 6 to adult',
      h2: 'An online maths tutor in Leeds for every age and stage',
      lede: 'Leeds schools follow the national curriculum for England. The table shows the stages a Leeds learner passes through and what our lessons concentrate on at each; adults simply start where they need to.',
      body: [
        { kind: 'table', caption: 'Maths for Leeds learners by stage, and where our teaching puts its weight', head: ['Stage', 'Years', 'Where we focus'], rows: [
          ['KS1', '1 and 2', 'Counting, number bonds, measuring length and height in metres and centimetres.'],
          ['KS2', '3 to 6', 'Times tables for the Year 4 check, fractions, scale and the reasoning questions of Year 6 SATs.'],
          ['KS3', '7 to 9', 'Ratio, percentages, straight-line graphs and the first meaning of gradient.'],
          ['GCSE', '10 and 11', 'Foundation or higher tier on AQA, Edexcel or OCR: gradients, Pythagoras and right-angled trigonometry.'],
          ['A level', '12 and 13', 'Pure, statistics and mechanics, from differentiation to forces on slopes; Further Maths if chosen.'],
          ['Adults', 'Any age', 'Functional Skills maths, GCSE maths resits and refreshers for life and work.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'KS2 and SATs in Leeds',
          left: [
            'The multiplication tables check is taken in Year 4 at every state-funded school in England. We teach the tables so they connect: 6 × 12 is double 6 × 6, and a child who notices patterns like that recovers quickly from a blank moment.',
            'Year 6 SATs maths includes plenty of measures and scale. A child who can say that 30 metres in 300 is the same as 1 in 10 has, without knowing it, met gradient, and we make that connection deliberately.'
          ],
          rightH3: 'GCSE, A level and Further Maths',
          right: [
            'We teach GCSE to the learner\'s own board and tier. Gradient appears twice at GCSE, once in graphs and once in trigonometry, and the hill project below joins the two up.',
            'Our national pages cover each stage in more depth: <a class="ag-inline-link" href="/ks2-maths-tuition-online">KS2</a>, <a class="ag-inline-link" href="/ks3-maths-tuition-online">KS3</a>, <a class="ag-inline-link" href="/gcse-maths-tuition-online">GCSE</a>, <a class="ag-inline-link" href="/igcse-maths-tuition-online">IGCSE</a>, <a class="ag-inline-link" href="/a-level-maths-tuition-online">A level</a> and <a class="ag-inline-link" href="/further-maths-tuition-online">Further Maths</a>.'
          ] },
        { kind: 'source', html: 'About the Year 4 check: <a class="ag-inline-link" href="https://www.gov.uk/government/collections/multiplication-tables-check" rel="noopener" target="_blank">gov.uk</a>, as read on 1 October 2026. The year groups shown are standard for English schools.' }
      ]
    },
    {
      id: 'hills', tint: 'plain', eyebrow: 'The Leeds project',
      h2: 'How steep are the streets of Headingley, Hyde Park and Burley?',
      lede: 'Gradient is rise divided by run. To measure it for real streets you need two things: how long each street is, and how high each end sits. Both are freely available.',
      body: [
        { kind: 'two',
          left: [
            'On 1 October 2026 we downloaded every named residential and local road in a rectangle of north-west Leeds that takes in Headingley, Hyde Park, Burley and Woodhouse and reaches the southern edge of Meanwood. Where a street is mapped in several pieces we joined them, and kept the 124 streets at least 250 metres long.',
            'For the two ends of each street we looked up the ground height in EU-DEM, a European height model with a 25 metre grid. The heights across the area run from 36.2 metres to 118.6 metres above sea level.'
          ],
          right: [
            'The average gradient of a street is then its height difference divided by its mapped length. Half the streets have an average gradient below 2.18%, and 25 of them rise less than 1%. At the other end, 15 streets average more than 5%.',
            'Two cautions matter. First, this is an average from end to end: a street that dips and rises can have a short section far steeper. Second, a 25 metre height grid smooths out small bumps, so short, steep pieces are blurred. Both are useful things for a student to say about any measurement.'
          ] },
        { kind: 'table', mt: true, caption: 'The steepest streets in our north-west Leeds sample, by average end-to-end gradient (our calculation, 1 October 2026)', head: ['Street', 'Length', 'Height gained', 'Gradient', 'As 1 in n'], numCols: [1, 2, 3, 4], rows: [
          ['Argie Road', '321 m', '29.7 m', '9.26%', '1 in 10.8'],
          ['Woodside View', '401 m', '32.1 m', '8.02%', '1 in 12.5'],
          ['Buckingham Road', '261 m', '20.4 m', '7.81%', '1 in 12.8'],
          ['Richmond Avenue', '320 m', '23.7 m', '7.38%', '1 in 13.5'],
          ['Woodsley Road', '528 m', '35.4 m', '6.70%', '1 in 14.9'],
          ['Church Lane', '713 m', '45.5 m', '6.38%', '1 in 15.7']
        ] },
        { kind: 'p', mt: true, html: 'At the flat end of the list, Stainbeck Avenue rises only 0.02% across 364 metres: its two ends sit at almost exactly the same height. That does not mean it is flat all the way along; it means the climb and the fall cancel out, which is the first caution above in action.' },
        { kind: 'source', html: 'Data: <a class="ag-inline-link" href="https://www.openstreetmap.org/copyright" rel="noopener" target="_blank">OpenStreetMap contributors</a>, one Overpass query on 1 October 2026; heights from <a class="ag-inline-link" href="https://www.opentopodata.org/datasets/eudem/" rel="noopener" target="_blank">OpenTopoData, EU-DEM v1.1</a>, produced with funding from the European Union (Copernicus). Lengths, heights and gradients are Modern Age Coders\' calculations and are not official road gradients.' }
      ]
    },
    {
      id: 'angles', tint: 'deep', eyebrow: 'From a ratio to an angle',
      h2: 'Writing Argie Road\'s gradient three ways, and why the angle is so small',
      lede: 'The DfE asks GCSE learners to "interpret the gradient of a straight line graph as a rate of change". A hill is exactly that: height gained per metre travelled.',
      body: [
        { kind: 'table', caption: 'One slope, four descriptions: Argie Road, 29.7 m of rise over 321 m (our calculation)', head: ['Form', 'Working', 'Result'], rows: [
          ['Rise over run', '29.7 ÷ 321', '0.0926'],
          ['Percentage', '0.0926 × 100', '9.26%'],
          ['Ratio, 1 in n', '321 ÷ 29.7', '1 in 10.8'],
          ['Angle, using tangent', 'tan⁻¹(29.7 ÷ 321)', '5.29°'],
          ['Angle, using sine (if 321 m were the slope length)', 'sin⁻¹(29.7 ÷ 321)', '5.31°']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why 9% feels so steep',
          left: [
            'A gradient of 9.26% sounds gentle and an angle of 5.29 degrees sounds tiny, yet anyone who has cycled up a road like Argie Road knows it is hard work. The numbers are not wrong: they show how sensitive our legs are to small angles.',
            'Students are often surprised that a 45 degree slope is a gradient of 100%, because rise equals run. Very few roads come close. Seeing the real figures for local streets fixes that sense of scale for good.'
          ],
          rightH3: 'Tangent or sine?',
          right: [
            'Strictly, gradient is rise over horizontal distance, which uses tangent. If you measure the length along the slope instead, you need sine. For Argie Road the two angles differ by only 0.02 degrees, 5.29 against 5.31.',
            'That near-equality is no accident. For small angles, sine and tangent are almost the same, and an A level learner can show why with a diagram or a series expansion. It is also why a map length and a walking length differ so little on most roads.'
          ] },
        { kind: 'p', mt: true, html: 'Each stage takes something different from this. Primary children compare the heights and lengths and order the streets from steepest to flattest. KS3 learners calculate the percentages. GCSE students use tan⁻¹ to find the angles and discuss the caution about averages. A level students treat the street as a function of height against distance and ask where its derivative is largest.' },
        { kind: 'source', html: 'All values are Modern Age Coders\' calculations from the street lengths and heights above. GCSE wording: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/gcse-mathematics-subject-content-and-assessment-objectives" rel="noopener" target="_blank">DfE, GCSE mathematics subject content</a>.' }
      ]
    },
    {
      id: 'west-yorkshire', tint: 'tint', eyebrow: 'Maths around Leeds',
      h2: 'The West Yorkshire Maths Hub and the University of Leeds',
      lede: 'Leeds schools are part of a regional maths network, and the university runs public events. We describe their own public pages here; we are not involved in either.',
      body: [
        { kind: 'three', cells: [
          { h3: 'West Yorkshire Maths Hub', p: 'The NCETM page names Trinity Academy, Halifax, as lead school of the West Yorkshire Maths Hub, which works with schools in Bradford, Calderdale and Leeds.' },
          { h3: 'Be Curious', p: 'The University of Leeds describes Be Curious as its "annual family-friendly research open day with fun activities, challenges and inspiring talks".' },
          { h3: 'Science events', p: 'The same page lists interactive events at Leeds Festival of Science, Leeds Light Night, Pint of Science and Soapbox Science, and summer schools for Year 12 students.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'Maths Hubs support teachers and schools rather than families, so their work is seen in the classroom. Competitions also come through school: our <a class="ag-inline-link" href="/ukmt-maths-challenge-tutoring">UKMT maths challenge page</a> describes how we prepare learners for the individual challenges.',
            'For learners who want a timetable of contests, the <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">UK competitions calendar</a> lists maths and coding events by age group.'
          ],
          right: [
            'Some families in Leeds look at the selective schools of a neighbouring area. Our <a class="ag-inline-link" href="/11-plus-maths-tuition-calderdale">11 plus maths page for Calderdale</a> describes the test used there, and our <a class="ag-inline-link" href="/courses/11-plus-maths-preparation-course-uk">11 plus maths course</a> covers the common formats.',
            'Every lesson is online, so learners in Horsforth, Roundhay or Armley join from home. We group by level, which means a Leeds learner might share a class with someone in Bristol or Sheffield.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.ncetm.org.uk/hubs/west-yorkshire-maths-hub/" rel="noopener" target="_blank">NCETM, West Yorkshire Maths Hub</a>; <a class="ag-inline-link" href="https://eps.leeds.ac.uk/maths/doc/schools-outreach" rel="noopener" target="_blank">University of Leeds, School of Mathematics, outreach and public engagement</a>. Both read 1 October 2026. We are independent of the NCETM, the hub, the University of Leeds and all Leeds schools.' }
      ]
    },
    {
      id: 'grown-up-maths', tint: 'plain', eyebrow: 'Adults',
      h2: 'Leeds adults learning maths: Functional Skills, GCSE resits and more',
      lede: 'Adults are a large share of our Leeds learners. Some need a maths pass for a course or a job; some want to support their children; some just want to stop dreading numbers.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Resitting GCSE', p: 'The GCSE course accepts adult resit candidates. A short check of what is secure comes first, so lessons go straight to the topics that matter for the mark.' },
          { h3: 'Functional Skills maths', p: 'Practical maths for work and training, from measures to data. Our <a class="ag-inline-link" href="/functional-skills-maths-tuition-online">Functional Skills maths page</a> explains how it runs.' },
          { h3: 'Refreshers', p: 'Percentages, ratio, graphs and basic trigonometry at an adult pace. More on our <a class="ag-inline-link" href="/online-maths-classes-for-adults-in-uk">adult maths page</a>.' }
        ] },
        { kind: 'p', mt: true, html: 'The gradients project is a favourite with adult learners, especially cyclists and anyone who walks to work. Being able to turn "that hill nearly killed me" into "that hill averages 1 in 10.8" is a small, satisfying piece of mathematics that people tend to remember.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Steps up',
    h2: 'From measuring height to finding the angle of a hill',
    lede: 'These steps lead to the gradient work on this page. The free lesson tells us where a new learner should join the climb.',
    table: { caption: 'Four steps towards gradients and trigonometry for Leeds learners', head: ['Usually', 'Step', 'Ready to move on when the learner'], rows: [
      ['Years 3 and 4', '1. Measures', 'Knows the tables and converts between metres and centimetres'],
      ['Years 5 to 7', '2. Ratio and percentage', 'Writes 30 out of 300 as 10% and as 1 in 10'],
      ['Years 8 to 10', '3. Graphs', 'Finds the gradient of a straight line and says what it means'],
      ['Years 10 to 13', '4. Trigonometry', 'Uses tan, sin and cos to move between a slope and its angle']
    ] },
    left: { h3: 'Arriving in the GCSE years', ps: [
      'A learner joining late in GCSE can still make strong progress once ratio and algebra are secure, so those come first.',
      'If the time left is not enough to close the gap, we say so honestly after the free lesson.'
    ] },
    right: { h3: 'Further on', ps: [
      'Many learners continue to A level Maths, often with Further Maths. Data lovers move on to our <a class="ag-inline-link" href="/courses/statistics-probability-maths-course">statistics and probability course</a>.',
      'Others rebuild the street gradients in Python using <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catalogue',
    h2: 'Maths courses for learners in Leeds',
    lede: 'Grouped by stage, from first numbers to degree-level maths.',
    bands: [
      { num: 'I', h3: 'Primary years', sub: 'KS1 and KS2', courses: [
        { code: 'MLE / A1', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'Years 1 to 6, ending with SATs reasoning.' },
        { code: 'MLE / A2', slug: 'early-math-foundations', title: 'Early maths', blurb: 'Number sense and shape for young starters.' },
        { code: 'MLE / A3', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Calculating in the head with confidence.' },
        { code: 'MLE / A4', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths', blurb: 'Timed practice for selective school tests.' }
      ] },
      { num: 'II', h3: 'Secondary years', sub: 'KS3, GCSE and IGCSE', courses: [
        { code: 'MLE / B1', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'KS3 maths', blurb: 'Ratio, graphs and algebra in Years 7 to 9.' },
        { code: 'MLE / B2', slug: 'gcse-mathematics-mastery', title: 'GCSE maths', blurb: 'Every board, both tiers, adult resits too.' },
        { code: 'MLE / B3', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'For schools on the international papers.' },
        { code: 'MLE / B4', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Equations and graphs from the very start.' }
      ] },
      { num: 'III', h3: 'Post-16 and university', sub: 'Advanced study', courses: [
        { code: 'MLE / C1', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'Calculus, data and forces for Years 12 and 13.' },
        { code: 'MLE / C2', slug: 'college-mathematics-complete-masterclass', title: 'University maths', blurb: 'First-year degree topics.' },
        { code: 'MLE / C3', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Non-routine problems for UKMT and olympiads.' },
        { code: 'MLE / C4', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data, chance and inference.' }
      ] },
      { num: 'IV', h3: 'Life and work', sub: 'Adults and enthusiasts', courses: [
        { code: 'MLE / D1', slug: 'data-analytics-mathematics-masterclass', title: 'Maths behind data', blurb: 'Statistics for analysts and managers.' },
        { code: 'MLE / D2', slug: 'complete-business-finance-mathematics-mastery', title: 'Finance maths', blurb: 'Interest, mortgages and growth.' },
        { code: 'MLE / D3', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Using Python to explore slopes and data.' },
        { code: 'MLE / D4', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Speedy mental methods.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lesson slots',
    h2: 'When Leeds learners have their maths lessons',
    lede: 'Teaching runs on Indian Standard Time, which stays the same all year. From late March to late October, Leeds is four and a half hours behind; through the winter, five and a half. Slots are always confirmed in UK time.',
    slots: [
      { time: 'After school, Monday to Friday', l: 'Primary and secondary learners.' },
      { time: 'Evenings, Monday to Friday', l: 'Sixth formers, resitters and adults.' },
      { time: 'Saturday or Sunday morning', l: 'Anyone who likes a weekend lesson.' }
    ],
    cells: [
      { h3: 'A tutor who knows the learner', p: 'The same person each week, so progress builds rather than restarts.' },
      { h3: 'Notes home', p: 'Brief, truthful updates after lessons on what to work on next.' },
      { h3: 'Classes by ability', p: 'Five to ten learners working at the same level.' },
      { h3: 'Hills, maps and data', p: 'Leeds streets and real numbers alongside past papers.' },
      { h3: 'Individual lessons', p: 'One to one for a learner who needs a sharper focus.' },
      { h3: 'Understanding first', p: 'Methods are explained before they are practised.' }
    ]
  },

  projectsH2: 'Projects made by learners who started here',
  projectsLede: 'Learners who began with measurement problems like the Leeds hills have gone on to build the projects below. More appear in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Families and learners in their own words, copied from Google without changes.',

  fees: {
    h2: 'Fees',
    lede: 'Monthly fees in US dollars, the same for every country apart from India. Nothing to pay to register and no contract.',
    free: ['A complete lesson, properly pitched', 'Honest advice afterwards', 'No card details required'],
    group: ['A class of five to ten at one level', 'The same tutor throughout', 'Marked homework with comments', 'Certificate when you finish'],
    one: ['Private lessons with one tutor', 'Targeted at particular gaps', 'Handy before exams']
  },

  faq: {
    eyebrow: 'Leeds maths questions',
    h2: 'Questions Leeds families and adult learners ask us',
    items: [
      { q: 'What does a maths tutor in Leeds cost?', a: 'With us, the first lesson is free. After that it is USD 100 a month for a group of five to ten learners at the same level, or USD 150 a month for one-to-one lessons. No registration fee and no fixed term.' },
      { q: 'What does a gradient of 10% mean?', a: 'A gradient of 10% means the ground rises 10 metres for every 100 metres you travel horizontally, which can also be written as 1 in 10 or as an angle of about 5.7 degrees. Argie Road in Leeds averages 9.26%, or 1 in 10.8.' },
      { q: 'Is learning maths online as good as having a tutor at home?', a: 'For most learners it is, when lessons are live and the tutor can see the working as it happens. Our tutors follow every line on a shared board and pick up mistakes at once.' },
      { q: 'Can an adult resit GCSE maths with you?', a: 'Yes. Our GCSE course is open to resit candidates of any age. We check which topics are secure, then concentrate where the marks are.' },
      { q: 'Do you teach AQA, Edexcel and OCR GCSE maths?', a: 'Yes, at foundation and higher tier, along with the IGCSE for learners at schools that enter it.' },
      { q: 'Do you help children prepare for Year 6 SATs maths?', a: 'Yes. KS2 maths is taught in full, including the reasoning questions in the Year 6 papers and the tables practised for the Year 4 check.' },
      { q: 'Can I study Further Maths with you?', a: 'Yes. Sixth formers taking Further Maths alongside A level Maths can study the extra content with us online, in a group or one to one.' },
      { q: 'What is the best way to understand trigonometry?', a: 'Start from real slopes and triangles rather than from the formulas. When a learner sees that tan of an angle is simply rise over run, as on a Leeds street, sine and cosine become much easier to place.' },
      { q: 'Are you linked to the University of Leeds or the West Yorkshire Maths Hub?', a: 'No. We describe their public pages so families can find them, but we have no connection with either or with any Leeds school.' },
      { q: 'Do you guarantee results?', a: 'No. We teach carefully and report progress honestly, but no tutor can guarantee an exam grade.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Further reading',
    h2: 'More for learners in Leeds',
    lede: 'Maths guides by stage, coding in Leeds, and nearby maths pages.',
    items: [
      { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition', p: 'How we teach GCSE by board and tier.' },
      { href: '/a-level-maths-tuition-online', label: 'A level maths tuition', p: 'Our guide to sixth form maths.' },
      { href: '/11-plus-maths-tuition-calderdale', label: '11 plus maths in Calderdale', p: 'The selective test used in Calderdale.' },
      { href: '/best-coding-class-in-leeds', label: 'Coding classes in Leeds', p: 'Our Leeds page for coding and AI.' },
      { href: '/maths-tuition-in-sheffield', label: 'Maths tuition in Sheffield', p: 'Sheffield maths and its Supertram bearings.' },
      { href: '/coding-classes-in-united-kingdom', label: 'UK index', p: 'All our UK places and maths pages.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson for a Leeds learner',
    lede: 'Send us the learner\'s age or school year, the exam board if they have one, and which topic feels hardest. The first lesson is a real one, and you get a straight answer about where things stand.',
    readFirst: 'Prefer to explore first? Browse the <a class="ag-inline-link" href="/courses">courses</a> or our page on <a class="ag-inline-link" href="/how-we-teach">teaching method</a>.',
    note: 'WhatsApp gets the quickest reply. The number has India\'s country code because our team is there; we have no Leeds office and teach everything online.',
    formNote: 'We never ask for card details. Expect a reply to set up a time.'
  },

  footer: {
    cols: [
      { h4: 'Maths by stage', links: [
        { href: '/ks2-maths-tuition-online', label: 'KS2 maths' },
        { href: '/ks3-maths-tuition-online', label: 'KS3 maths' },
        { href: '/a-level-maths-tuition-online', label: 'A level maths' },
        { href: '/functional-skills-maths-tuition-online', label: 'Functional Skills' }
      ] },
      { h4: 'Leeds and Yorkshire', links: [
        { href: '/best-coding-class-in-leeds', label: 'Coding in Leeds' },
        { href: '/maths-tuition-in-sheffield', label: 'Maths tuition in Sheffield' },
        { href: '/11-plus-maths-tuition-calderdale', label: '11 plus in Calderdale' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK index' }
      ] }
    ],
    bottomRight: 'Leeds maths, live online'
  },

  personalityCss: `
.ag-root.ag-mle .ag-hero h1 { letter-spacing: -0.019em; }
.ag-root.ag-mle .ag-capsule { border-left-width: 5px; }
.ag-root.ag-mle .ag-section-head h2 { max-width: 24ch; }
.ag-root.ag-mle .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-mle .ag-table td:nth-child(4) { font-weight: 600; }
.ag-root.ag-mle .ag-spec dt { letter-spacing: 0.1em; }
.ag-root.ag-mle .ag-three h3 { letter-spacing: -0.006em; }
.ag-root.ag-mle .ag-slots { gap: 1.05rem; }
`,

  mustMention: ['West Yorkshire Maths Hub', 'Trinity Academy, Halifax', 'Argie Road', 'Woodside View', 'Woodsley Road', 'Stainbeck Avenue', '9.26%', '1 in 10.8', 'Be Curious'],

  dossier: {
    curriculumAuthority: 'National curriculum for England (DfE); GCSE mathematics subject content (DfE, 2013), gradient as a rate of change and trigonometric ratios; multiplication tables check (gov.uk). Leeds is listed by the NCETM as an area of the West Yorkshire Maths Hub (lead Trinity Academy, Halifax).',
    localProject: 'OpenStreetMap named residential/tertiary/secondary ways, box 53.805-53.830 N, 1.590-1.545 W, 1 October 2026; 124 joined streets of 250 m or more; end heights from EU-DEM 25 m. Argie Road 321 m, 29.7 m, 9.26%, 1 in 10.8, 5.29 deg (sine 5.31); Woodside View 8.02%; Buckingham Road 7.81%; Richmond Avenue 7.38%; Woodsley Road 6.70%; Church Lane 6.38%. Median 2.18%, mean 2.58%, 15 over 5%, 25 under 1%; Stainbeck Avenue 0.02%. Heights 36.2 to 118.6 m.',
    requiredMentions: ['West Yorkshire Maths Hub', 'Trinity Academy, Halifax', 'Argie Road', 'Woodside View', 'Woodsley Road', 'Stainbeck Avenue', '9.26%', '1 in 10.8', 'Be Curious'],
    sources: [
      { claim: 'NCETM, West Yorkshire Maths Hub: lead school Trinity Academy, Halifax; areas Bradford, Calderdale, Leeds.', url: 'https://www.ncetm.org.uk/hubs/west-yorkshire-maths-hub/' },
      { claim: 'University of Leeds, School of Mathematics outreach and public engagement: Be Curious open day, Leeds Festival of Science and other events, Year 12 summer schools.', url: 'https://eps.leeds.ac.uk/maths/doc/schools-outreach' },
      { claim: 'OpenStreetMap named streets in north-west Leeds, one Overpass query, 1 October 2026.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'OpenTopoData EU-DEM v1.1 25 m heights for street ends (Copernicus).', url: 'https://www.opentopodata.org/datasets/eudem/' },
      { claim: 'DfE GCSE mathematics subject content: "interpret the gradient of a straight line graph as a rate of change".', url: 'https://www.gov.uk/government/publications/gcse-mathematics-subject-content-and-assessment-objectives' }
    ],
    rejectedClaims: [
      'That Argie Road is the steepest street in Leeds: it is only the steepest by average gradient among 124 streets in our sample box, and the page says so.',
      'Official road gradients or signed percentages: none read; our figures are averages from a 25 m height model.',
      'Maximum local gradients: not computed, because the 25 m grid cannot resolve short steep sections.',
      'Any Leeds school results or rankings: excluded by the spec.',
      'Any link between the hub, the University of Leeds and Modern Age Coders.'
    ]
  }
};
