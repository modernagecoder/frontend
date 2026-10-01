'use strict';
// Maths tuition in Glasgow (ag- maths by city, UK cluster Phase 11, worker M3).
// Read on 1 October 2026 by curl, quotes grepped from the raw text:
//  - SQA course specifications (sqa.org.uk, site now headed "Qualifications Scotland" with the note that visitors will see
//    references to both Qualifications Scotland and SQA): National 5 Mathematics, course code C847 75, SCQF level 5: "Relationship
//    in a circle between the centre, chord and perpendicular bisector", "Calculating the length of an arc". Higher Mathematics,
//    C847 76, SCQF level 6: "determining and using the equation of a circle", "using properties of tangency in the solution of
//    a problem", "using properties of medians, altitudes and perpendicular bisectors in problems involving the equation of a
//    line and intersection of lines". Advanced Higher Mathematics, C847 77, SCQF level 7.
//  - University of Glasgow, School of Mathematics & Statistics, Community and Public Engagement: the Strathclyde Series of
//    the Royal Institution Mathematics Masterclasses "is hosted by the University of Glasgow. It runs for 6 weeks in the
//    autumn term, starting at the end of October."; Maths Circles with the charity We Solve Problems, "for motivated pupils
//    from P7-S4", "take place on Saturdays throughout the academic year and are free to attend (booking is required)"; "The
//    Scottish Mathematical Challenge celebrated its 50th anniversary in 2026"; divisions Junior (S1 and S2), Middle (S3 and
//    S4) and Senior (S5 and S6); a separate primary competition run by the University of Strathclyde.
// Local project (our calculation): OpenStreetMap, one Overpass query on 1 October 2026 (osm_base 09:16:54Z): 15 stations
// tagged station=subway in Glasgow City (network "Glasgow Subway"). Positions projected to a local flat grid in metres.
// Least-squares (Kasa) circle: radius 1,600.1 m, centre about 100 m from postcode G3 8JU. Station distances from that centre:
// 1,304.4 m (St George's Cross) to 1,891.5 m (Partick), root mean square deviation from the circle 195.8 m. Circumference of the
// fitted circle 10,054 m; perimeter of the 15-sided polygon through the stations in order 10,261 m; polygon perimeter divided
// by fitted diameter 3.206. Angles between neighbouring stations seen from the centre: mean 24.0 deg, smallest 14.8 (Partick
// to Kelvinhall), largest 33.4 (Shields Road to Kinning Park); matching arcs on the fitted circle 413 m and 933 m. Origin at
// Buchanan Street, km: centre (-1.775, -0.058), r 1.600; x^2 + y^2 + 3.549x + 0.117y + 0.592 = 0. Circles through three
// stations (perpendicular bisectors): Govan, Buchanan Street, Shields Road r 1.831 km; Hillhead, St Enoch, Cessnock 1.602;
// Partick, Cowcaddens, Kinning Park 1.599; Kelvinbridge, Bridge Street, Ibrox 1.625.
// Spine: is the Glasgow Subway a circle? Family: equation of a circle (Higher), perpendicular bisectors and the circle through
// three points, arc length (N5), fitting and residuals.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'GLASGOW MATHS', label: 'Maths tuition in Glasgow', blurb: 'National 5, Higher and Advanced Higher maths for Glasgow, plus primary and adult learners, with a circle-geometry project on the Subway.' },
  slug: 'maths-tuition-in-glasgow',
  code: 'mtg',
  accent: '#66301E',
  accentRationale: 'Glasgow maths: a muted red sandstone, chosen by hand and well away from the blue on our Glasgow coding page',
  pageType: 'city',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Maths tuition in Glasgow',
  title: 'Maths Tuition in Glasgow | National 5 to Advanced Higher',
  description: 'Online maths tuition in Glasgow for ages 6 to 67: primary maths, National 5, Higher and Advanced Higher, plus adult learners, with a Subway circle geometry project.',
  ogDescription: 'A Glasgow maths tutor, live online: Curriculum for Excellence maths from P1, SQA National 5, Higher and Advanced Higher Mathematics, and maths for adults.',
  twitterDescription: 'Glasgow maths, taught live online: is the Subway really a circle? Fifteen stations and a Higher Maths equation decide.',
  pageName: 'Maths Tuition in Glasgow',
  webPageDescription: 'Live online maths tuition for Glasgow learners aged 6 to 67 under the Curriculum for Excellence, from primary maths to SQA National 5, Higher and Advanced Higher Mathematics, and adult study, with a circle-geometry project built on the 15 Subway stations.',
  courseDescription: 'Live online maths for Glasgow learners from P1 to S6 and beyond, taught in level-matched groups of five to ten or one to one, with senior-phase lessons steered to the SQA course specifications.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Maths tuition in Glasgow',
  navLinks: [
    { href: '#scotland', label: 'In Scotland' },
    { href: '#subway', label: 'The Subway' },
    { href: '#equation', label: 'Equation' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Glasgow &middot; Maths from P1 to adult learners &middot; Live online lessons for small groups or one learner',
  h1: 'Maths tuition in Glasgow',
  lede: 'Everyone in Glasgow calls the Subway a circle. Is it? We took the positions of its 15 stations from OpenStreetMap and asked which circle fits them most closely. The answer has a radius of 1,600.1 metres, and the stations sit anywhere from 1,304.4 to 1,891.5 metres from its centre. So it is a loop, and a fairly round one, but not a circle. Getting there uses exactly the tools of SQA Higher Mathematics: perpendicular bisectors, the circle through three points and the equation of a circle. This page sets out how we teach maths to Glasgow learners, from P1 to Advanced Higher and adult study, with the Subway as a running example.',
  secondaryCta: { href: '#subway', label: 'See the Subway geometry' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for a learner in Glasgow.',
  heroNote: 'Maths only on this page &middot; Primary, secondary and adult learners &middot; Not connected to any Glasgow school or university',
  spec: [
    ['Who', 'Glasgow learners aged 6 to 67'],
    ['Primary', 'P1 to P7, number and early algebra'],
    ['BGE', 'S1 to S3 maths, the base for the senior phase'],
    ['Senior phase', 'National 5, Higher, Advanced Higher'],
    ['Adults', 'Refreshers and a return to qualifications'],
    ['Format', 'Live video, groups of 5 to 10 or private'],
    ['Teachers', 'Based in India, booked in UK time'],
    ['Local project', 'Subway stations and the circle equation']
  ],
  capsuleQ: 'In short',
  capsule: 'We teach maths live online to Glasgow learners aged 6 to 67: primary maths from P1 to P7, S1 to S3 maths in the broad general education, then SQA National 5, Higher and Advanced Higher Mathematics, plus adult refreshers. Classes hold five to ten learners at one level, or a learner can work one to one. Our Glasgow example is the Subway: a least-squares circle through its 15 stations has a radius of 1,600.1 metres, but the stations lie between 1,304.4 and 1,891.5 metres from its centre, a good test of the Higher Maths equation of a circle. A first lesson is free; ongoing places are USD 100 a month in a group or USD 150 a month one to one.',

  picks: {
    eyebrow: 'Typical starting points in Glasgow',
    h2: 'Three common first steps',
    lede: 'Pick by stage. The full list, from early number to university study, is further down.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'GLA / 1', title: 'Primary maths, P1 to P7', note: 'Number, fractions, measure and shape, explained until each idea can be put into words.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'GLA / 2', title: 'S1 to S3 maths', note: 'Algebra, ratio, angles and data in the broad general education, so National 5 starts on firm ground.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'GLA / 3', title: 'Higher-level maths', note: 'Written for English A level; its pure content overlaps heavily with Higher and Advanced Higher, and we steer it to the SQA course specification.' }
    ]
  },

  sections: [
    {
      id: 'scotland', tint: 'tint', eyebrow: 'Maths in Scotland',
      h2: 'National 5, Higher and Advanced Higher maths for Glasgow learners',
      lede: 'Scotland has its own curriculum and exams. A Glasgow pupil does not sit GCSEs or A levels; those belong to the English system. Here is the Scottish route, and what our lessons focus on.',
      body: [
        { kind: 'table', caption: 'Maths stages in Scotland, and our focus at each one', head: ['Stage', 'Usual ages', 'Our focus'], rows: [
          ['P1 to P3', '5 to 8', 'Counting, place value, adding and subtracting with confidence, shape and pattern.'],
          ['P4 to P7', '8 to 12', 'Times tables, fractions and decimals, measure, and explaining a strategy aloud.'],
          ['S1 to S3', '11 to 15', 'Algebra, ratio, angles, Pythagoras and handling data in the broad general education.'],
          ['National 5', '14 to 16', 'SQA National 5 Mathematics: algebra, geometry including arcs and sectors, trigonometry and statistics.'],
          ['Higher', '15 to 17', 'SQA Higher Mathematics: straight lines, circles, functions, calculus and vectors.'],
          ['Advanced Higher', '16 to 18', 'Further calculus, complex numbers, matrices, proof and series.'],
          ['Adults', '18 to 67', 'Rebuilding confidence, returning to National 5 or Higher, or maths for work.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'National 5 maths tutor',
          left: [
            'SQA National 5 Mathematics (course code C847 75) sits at SCQF level 5. Its course specification lists, among much else, the "Relationship in a circle between the centre, chord and perpendicular bisector" and "Calculating the length of an arc". Both appear in our Subway project below.',
            'Many learners who struggle at National 5 have one shaky foundation, usually fractions or algebraic manipulation. We find it in the trial lesson and fix it before anything else.'
          ],
          rightH3: 'Higher and Advanced Higher maths tutor',
          right: [
            'Higher Mathematics (C847 76) sits at SCQF level 6. The specification asks candidates to be "determining and using the equation of a circle" and to use "properties of medians, altitudes and perpendicular bisectors" with straight lines. Advanced Higher Mathematics (C847 77) at SCQF level 7 goes on to deeper calculus, complex numbers and proof.',
            'Our national pages go further: <a class="ag-inline-link" href="/national-5-maths-tuition-online">National 5 maths</a>, <a class="ag-inline-link" href="/higher-maths-tuition-online">Higher maths</a> and <a class="ag-inline-link" href="/advanced-higher-maths-tuition-online">Advanced Higher maths</a>.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.sqa.org.uk/sqa/files_ccc/n5-course-spec-mathematics.pdf" rel="noopener" target="_blank">National 5 Mathematics course specification</a> and <a class="ag-inline-link" href="https://www.sqa.org.uk/sqa/files_ccc/h-course-spec-mathematics.pdf" rel="noopener" target="_blank">Higher Mathematics course specification</a>, read on 1 October 2026. The awarding body\'s site now shows both the names Qualifications Scotland and SQA. Age ranges are typical, not rules.' }
      ]
    },
    {
      id: 'subway', tint: 'plain', eyebrow: 'The Glasgow project',
      h2: 'Is the Glasgow Subway really a circle?',
      lede: 'Fifteen stations, one loop. The question is simple enough for P7 and deep enough for Higher, and it has a numerical answer.',
      body: [
        { kind: 'two',
          left: [
            'On 1 October 2026 we downloaded the 15 Subway stations from OpenStreetMap, the volunteer-built map. We turned each station\'s latitude and longitude into flat coordinates in metres, which is accurate enough over a few kilometres, and then asked a computer for the circle that sits closest to all 15 points at once.',
            'That fitted circle has a radius of 1,600.1 metres. Its centre lands roughly 100 metres from a postcode in the G3 district. Measured from that centre, St George\'s Cross is the closest station at 1,304.4 metres and Partick the furthest at 1,891.5 metres.'
          ],
          right: [
            'So the loop bulges in some places and pinches in others. The typical station sits about 176 metres off the fitted circle (root mean square 195.8 metres), roughly a ninth of the radius. Round enough to call it a circle in conversation; not round enough to call it one in a maths lesson.',
            'There is a nice check on that. Join the stations in order with straight lines and the 15-sided shape has a perimeter of 10,261 metres. Divide by the fitted diameter and you get 3.206. For a true circle that ratio would approach π, and 3.206 is a surprisingly good guess at 3.14159 from a railway map.'
          ] },
        { kind: 'table', mt: true, caption: 'Distance of selected stations from the centre of the fitted circle, our calculation from OpenStreetMap', head: ['Station', 'Distance from centre', 'Off the circle by'], numCols: [1, 2], rows: [
          ['St George\'s Cross', '1,304.4 m', '295.8 m inside'],
          ['Kinning Park', '1,333.8 m', '266.3 m inside'],
          ['Kelvinbridge', '1,384.0 m', '216.1 m inside'],
          ['Ibrox', '1,645.0 m', '44.9 m outside'],
          ['Buchanan Street', '1,775.5 m', '175.4 m outside'],
          ['Bridge Street', '1,839.8 m', '239.7 m outside'],
          ['Partick', '1,891.5 m', '291.4 m outside']
        ] },
        { kind: 'source', html: 'Data: <a class="ag-inline-link" href="https://www.openstreetmap.org/copyright" rel="noopener" target="_blank">OpenStreetMap contributors</a>, nodes tagged as Subway stations in Glasgow City, one Overpass query on 1 October 2026. Station positions are mapped points, not platform centres. The fitted circle, distances and ratios are Modern Age Coders\' calculations; they are not published by SPT and they are not track lengths.' }
      ]
    },
    {
      id: 'equation', tint: 'deep', eyebrow: 'Higher Maths, on a real map',
      h2: 'The equation of the Subway circle, and the circle through three stations',
      lede: 'Put the origin at Buchanan Street, measure in kilometres with east as x and north as y, and the fitted circle has an equation a Higher candidate can read at a glance.',
      body: [
        { kind: 'two',
          leftH3: 'Centre and radius',
          left: [
            'With that origin, our fitted circle has centre (−1.775, −0.058) and radius 1.600, both rounded to the nearest metre. In the form Higher uses, that is (x + 1.775)² + (y + 0.058)² = 1.600². Expanded, it becomes x² + y² + 3.549x + 0.117y + 0.592 = 0, and a learner can work backwards from the expanded form to the centre and radius, which is a classic exam step.',
            'Substitute a station into the left-hand side and the sign tells you which side of the circle it is on: negative inside, positive outside. Govan, at (−3.570, −0.018), gives a positive answer, so it lies outside, which matches the table above.'
          ],
          rightH3: 'Three stations, one circle',
          right: [
            'Any three points that are not in a straight line lie on exactly one circle. Its centre is where the perpendicular bisectors of two chords meet, the idea National 5 states and Higher puts to work. Choose different trios of stations and you get different circles.',
            'Hillhead, St Enoch and Cessnock give a radius of 1.602 km, almost identical to our fitted circle. Govan, Buchanan Street and Shields Road give 1.831 km. That spread is the clearest possible evidence that the stations are not on one circle: if they were, every trio would agree.'
          ] },
        { kind: 'table', mt: true, caption: 'Circles through three Subway stations, found from perpendicular bisectors (our calculation)', head: ['Three stations', 'Radius, km'], numCols: [1], rows: [
          ['Hillhead, St Enoch, Cessnock', '1.602'],
          ['Partick, Cowcaddens, Kinning Park', '1.599'],
          ['Kelvinbridge, Bridge Street, Ibrox', '1.625'],
          ['Govan, Buchanan Street, Shields Road', '1.831'],
          ['Least-squares fit to all 15', '1.600']
        ] },
        { kind: 'p', mt: true, html: 'Arc length gives a National 5 version. Seen from the centre, neighbouring stations are on average 24.0° apart. The widest gap, Shields Road to Kinning Park, is 33.4°, an arc of about 933 metres on the fitted circle; the narrowest, Partick to Kelvinhall, is 14.8°, about 413 metres. Learners compute those with (angle ÷ 360) × 2πr, and then discuss why an arc is not the same as the tunnel between two stations.' },
        { kind: 'source', html: 'All coordinates, equations and arcs are our calculations from the OpenStreetMap download above, rounded as shown. SQA wording from the <a class="ag-inline-link" href="https://www.sqa.org.uk/sqa/files_ccc/h-course-spec-mathematics.pdf" rel="noopener" target="_blank">Higher Mathematics course specification</a>.' }
      ]
    },
    {
      id: 'around', tint: 'tint', eyebrow: 'Maths beyond lessons',
      h2: 'Masterclasses, Maths Circles and the Scottish Mathematical Challenge',
      lede: 'Glasgow has a lot going on for learners who enjoy maths. These details come from the University of Glasgow\'s public engagement page; we take part in none of it.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Royal Institution Masterclasses', p: 'The page says the Strathclyde Series "is hosted by the University of Glasgow. It runs for 6 weeks in the autumn term, starting at the end of October." Each Saturday morning brings a different speaker.' },
          { h3: 'Maths Circles', p: 'Run with the charity We Solve Problems "for motivated pupils from P7-S4". The page adds that they "take place on Saturdays throughout the academic year and are free to attend (booking is required)".' },
          { h3: 'Scottish Mathematical Challenge', p: 'The page notes it "celebrated its 50th anniversary in 2026", with Junior (S1 and S2), Middle (S3 and S4) and Senior (S5 and S6) divisions, and a separate primary competition run by the University of Strathclyde.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'The university page explains how to book each of these. A learner who loves problems would get a great deal from the Maths Circles, which are free.',
            'UK-wide competitions, such as the UK Mathematics Trust challenges, are open to Scottish schools too. Our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a> keeps the dates in one place.'
          ],
          right: [
            'Our own teaching is live on video, so a learner in Partick, Shawlands or Dennistoun joins from home. Groups are formed by level, which means a Glasgow learner may share a class with someone in Edinburgh, Aberdeen or further afield.',
            'The Subway project is good practice for challenge papers: it rewards a clear argument, such as the point that every trio of stations would agree if the loop were truly a circle.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.gla.ac.uk/schools/mathematicsstatistics/outreach/" rel="noopener" target="_blank">University of Glasgow, School of Mathematics &amp; Statistics, Community and Public Engagement</a>, read on 1 October 2026. Modern Age Coders has no connection with the University of Glasgow, the Royal Institution, We Solve Problems, the University of Strathclyde or any Glasgow school.' }
      ]
    },
    {
      id: 'adults', tint: 'plain', eyebrow: 'Adult learners',
      h2: 'Maths tuition for adults in Glasgow',
      lede: 'Plenty of our learners are adults: some returning to a qualification, many simply wanting maths to make sense at last.',
      body: [
        { kind: 'three', cells: [
          { h3: 'From the beginning', p: 'Number, fractions, percentages and simple algebra, taken slowly and explained properly, without anyone watching the clock.' },
          { h3: 'Back to National 5 or Higher', p: 'For college entry, a change of career or personal satisfaction. We follow the SQA course specification and use past-paper style questions.' },
          { h3: 'Maths at work', p: 'Spreadsheets, rates, percentages and charts. Our <a class="ag-inline-link" href="/online-maths-classes-for-adults-in-uk">adult maths page</a> explains how adult groups run.' }
        ] },
        { kind: 'p', mt: true, html: 'Adults often light up at the Subway project, because so many have ridden the loop for years without ever asking how round it is. Ten minutes with a coordinate grid turns a familiar journey into a piece of geometry they can explain to anyone.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The route',
    h2: 'From counting to circle equations, in four steps',
    lede: 'Each step relies on the one before. A learner enters at whatever step fits, which the free lesson reveals.',
    table: { caption: 'Four steps through Scottish school maths, with a sign that each is secure', head: ['Usually', 'Step', 'Secure when the learner'], rows: [
      ['P4 to P7', '1. Number and measure', 'Converts between units and explains each step of a calculation'],
      ['S1 to S3', '2. Algebra and shape', 'Solves linear equations and uses Pythagoras on a coordinate grid'],
      ['S4', '3. National 5 geometry', 'Finds an arc length and the centre of a circle from two chords'],
      ['S5 and S6', '4. Higher reasoning', 'Writes and interprets the equation of a circle from given information']
    ] },
    left: { h3: 'Joining in S4 or S5', ps: [
      'It is not too late. We secure algebra first, because almost every Higher question leans on it, then build up the geometry.',
      'If the gap is larger than the months left, we will say so plainly after the trial.'
    ] },
    right: { h3: 'Beyond Higher', ps: [
      'Some learners continue to Advanced Higher; others try <a class="ag-inline-link" href="/courses/statistics-probability-maths-course">statistics and probability</a> or <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a>, where a short program fits the Subway circle for them.',
      'A few discover problem solving and head for competition maths.'
    ] }
  },

  catalogue: {
    eyebrow: 'Our courses',
    h2: 'Maths courses for Glasgow learners',
    lede: 'Arranged by stage. Courses written for English exams are matched topic by topic to SQA content when a Glasgow learner takes them.',
    bands: [
      { num: 'I', h3: 'Primary', sub: 'P1 to P7', courses: [
        { code: 'MTG / A1', slug: 'early-math-foundations', title: 'Early number', blurb: 'Counting, shape and sorting for P1 and P2.' },
        { code: 'MTG / A2', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'Every primary topic, explained as well as practised.' },
        { code: 'MTG / A3', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Sharp calculation without pencil and paper.' },
        { code: 'MTG / A4', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus maths', blurb: 'Counting beads that turn into a mental image.' }
      ] },
      { num: 'II', h3: 'S1 to S4', sub: 'BGE and National 5', courses: [
        { code: 'MTG / B1', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'S1 to S3 maths', blurb: 'The broad general education years.' },
        { code: 'MTG / B2', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'For learners whose algebra needs rebuilding.' },
        { code: 'MTG / B3', slug: 'gcse-mathematics-mastery', title: 'National 5 level maths', blurb: 'An English GCSE course used as a National 5 topic match.' },
        { code: 'MTG / B4', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'For international school entries.' }
      ] },
      { num: 'III', h3: 'S5, S6 and beyond', sub: 'Higher and further', courses: [
        { code: 'MTG / C1', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'Higher level maths', blurb: 'English A level content, steered to Higher and Advanced Higher.' },
        { code: 'MTG / C2', slug: 'statistics-probability-maths-course', title: 'Statistics', blurb: 'Data, probability and inference.' },
        { code: 'MTG / C3', slug: 'college-mathematics-complete-masterclass', title: 'University maths', blurb: 'Calculus and linear algebra at degree level.' },
        { code: 'MTG / C4', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Problem solving for challenge papers.' }
      ] },
      { num: 'IV', h3: 'Applied and adult', sub: 'Work and interest', courses: [
        { code: 'MTG / D1', slug: 'complete-business-finance-mathematics-mastery', title: 'Business maths', blurb: 'Interest, loans and investment explained.' },
        { code: 'MTG / D2', slug: 'data-analytics-mathematics-masterclass', title: 'Data maths', blurb: 'The algebra and statistics behind analysis.' },
        { code: 'MTG / D3', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Exploring geometry and number in Python.' },
        { code: 'MTG / D4', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Quick calculation methods for the confident.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Timings',
    h2: 'When Glasgow learners have their lessons',
    lede: 'Our teachers are in India, where the clocks stay put all year. Between late October and late March that puts India five and a half hours ahead of Glasgow; in British Summer Time it is four and a half. We agree every slot in UK time.',
    slots: [
      { time: 'After school on weekdays', l: 'Primary pupils and S1 to S6.' },
      { time: 'Weekday evenings', l: 'Senior phase learners and adults.' },
      { time: 'Weekend mornings', l: 'A quiet hour before the weekend gets busy.' }
    ],
    cells: [
      { h3: 'The same teacher', p: 'Every week, so small habits and slips are noticed.' },
      { h3: 'Short updates', p: 'A note after lessons on what is secure and what is next.' },
      { h3: 'Groups by level', p: 'Five to ten learners, all working at one level.' },
      { h3: 'Real maps and data', p: 'Station coordinates, census tables and weather records in lessons.' },
      { h3: 'One to one', p: 'For a single difficult topic or the weeks before an exam.' },
      { h3: 'Reasons, not tricks', p: 'Learners explain why a method works before practising it.' }
    ]
  },

  projectsH2: 'Projects our learners have gone on to build',
  projectsLede: 'Learners who began with coordinates and calculations made the four projects below. The <a class="ag-inline-link" href="/student-labs">student labs</a> have more.',
  reviewsLede: 'Taken word for word from reviews families and learners left on Google.',

  fees: {
    h2: 'Fees',
    lede: 'Charged monthly in US dollars, at one price for every country outside India, with no registration fee and no long contract.',
    free: ['A complete lesson at the right level', 'Our honest assessment', 'No card needed'],
    group: ['Five to ten learners at the same level', 'A regular teacher', 'Homework marked and explained', 'A certificate on completion'],
    one: ['One learner, one teacher', 'Targeted at the precise gap', 'Valuable in the run-up to exams']
  },

  faq: {
    eyebrow: 'Glasgow maths questions',
    h2: 'Questions Glasgow families and adult learners ask',
    items: [
      { q: 'What is the equation of a circle?', a: 'A circle with centre (a, b) and radius r has equation (x − a)² + (y − b)² = r². It comes from Pythagoras: every point on the circle is exactly r from the centre. SQA Higher Mathematics also uses the expanded form x² + y² + 2gx + 2fy + c = 0.' },
      { q: 'How much does a maths tutor cost in Glasgow?', a: 'The trial lesson is free. After that a group place is USD 100 a month and one to one lessons are USD 150 a month, with no extra fees.' },
      { q: 'Are you a National 5 maths tutor?', a: 'Yes. We teach National 5 Mathematics, steering lessons to the SQA course specification and practising the kinds of question the course assessment uses.' },
      { q: 'Do you offer Higher and Advanced Higher maths tutoring?', a: 'Yes, both. Higher covers straight lines, circles, functions, calculus and vectors; Advanced Higher adds further calculus, complex numbers, matrices and proof.' },
      { q: 'Which school year is best for starting a maths tutor?', a: 'Whenever a learner first starts to feel lost, before the gap grows. We teach from P1 age through to adults of 67.' },
      { q: 'Is online maths tuition as good as face to face?', a: 'For most learners it works very well: the teacher sees the working appear on screen and corrects it straight away. Every lesson is live with a real teacher, and groups keep the same teacher.' },
      { q: 'Do you teach GCSE or A level?', a: 'Yes, for learners in the English system. Glasgow pupils normally sit SQA qualifications, so for them we teach to National 5, Higher and Advanced Higher instead.' },
      { q: 'Do you teach adults in Glasgow?', a: 'Yes, from first steps to National 5 and Higher, in adult groups or one to one.' },
      { q: 'Can you guarantee an A at Higher?', a: 'No. Nobody can honestly guarantee a grade. We teach thoroughly and keep you informed about progress.' },
      { q: 'Are you part of the University of Glasgow or SQA?', a: 'No. We mention public events and documents so families know about them. We have no link with any university, the awarding body, or any school.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related',
    h2: 'More for Glasgow learners',
    lede: 'Scottish maths pages, our Scotland page and our coding page for the city.',
    items: [
      { href: '/national-5-maths-tuition-online', label: 'National 5 maths tuition', p: 'The National 5 course, topic by topic.' },
      { href: '/higher-maths-tuition-online', label: 'Higher maths tuition', p: 'Straight lines, circles, calculus and vectors.' },
      { href: '/advanced-higher-maths-tuition-online', label: 'Advanced Higher maths', p: 'The final step of Scottish school maths.' },
      { href: '/best-coding-class-in-glasgow', label: 'Coding classes in Glasgow', p: 'Our coding page for the city.' },
      { href: '/maths-tuition-in-edinburgh', label: 'Maths tuition in Edinburgh', p: 'Gradients up Arthur\'s Seat.' },
      { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland', p: 'Our page for learners across Scotland.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson',
    lede: 'Tell us the learner\'s age or school year, P or S, and the topic that feels toughest. The trial is a real lesson, and we tell you honestly afterwards where the learner stands.',
    readFirst: 'Would you like to browse first? See our <a class="ag-inline-link" href="/courses">courses</a> or our page on <a class="ag-inline-link" href="/how-we-teach">teaching method</a>.',
    note: 'Messages sent on WhatsApp are answered first. You will see an Indian country code, because that is where our team works; there is no office in Scotland, and every lesson takes place online.',
    formNote: 'No card details asked for. We will reply to fix a time.'
  },

  footer: {
    cols: [
      { h4: 'Maths in Scotland', links: [
        { href: '/national-5-maths-tuition-online', label: 'National 5 maths' },
        { href: '/higher-maths-tuition-online', label: 'Higher maths' },
        { href: '/advanced-higher-maths-tuition-online', label: 'Advanced Higher maths' },
        { href: '/online-maths-classes-for-adults-in-uk', label: 'Maths for adults' }
      ] },
      { h4: 'In the UK', links: [
        { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
        { href: '/best-coding-class-in-glasgow', label: 'Coding in Glasgow' },
        { href: '/maths-tuition-in-edinburgh', label: 'Maths tuition in Edinburgh' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] }
    ],
    bottomRight: 'Live maths lessons for every age'
  },

  personalityCss: `
.ag-root.ag-mtg .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-mtg .ag-capsule { border-left-width: 6px; }
.ag-root.ag-mtg .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-mtg .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-mtg .ag-table td:nth-child(2) { font-variant-numeric: tabular-nums; }
.ag-root.ag-mtg .ag-spec dt { letter-spacing: 0.09em; }
.ag-root.ag-mtg .ag-three h3 { letter-spacing: -0.007em; }
.ag-root.ag-mtg .ag-slots { gap: 1.05rem; }
`,

  mustMention: ['1,600.1 metres', '1,304.4', '1,891.5', 'x² + y² + 3.549x + 0.117y + 0.592 = 0', 'Shields Road to Kinning Park', 'Strathclyde Series', 'We Solve Problems', 'Scottish Mathematical Challenge', '3.206'],

  dossier: {
    curriculumAuthority: 'Curriculum for Excellence (Scotland); SQA National 5 Mathematics C847 75 (SCQF 5), Higher Mathematics C847 76 (SCQF 6), Advanced Higher Mathematics C847 77 (SCQF 7) course specifications.',
    localProject: 'OpenStreetMap Glasgow Subway stations (15), 1 October 2026: least-squares circle radius 1,600.1 m; station distances 1,304.4 (St George\'s Cross) to 1,891.5 (Partick); RMS deviation 195.8 m; polygon perimeter 10,261 m over fitted diameter 3.206; origin Buchanan Street equation x^2 + y^2 + 3.549x + 0.117y + 0.592 = 0; three-point circles 1.602, 1.599, 1.625, 1.831 km; mean angular gap 24.0 deg, arcs 413 to 933 m.',
    requiredMentions: ['1,600.1 metres', '1,304.4', '1,891.5', 'x² + y² + 3.549x + 0.117y + 0.592 = 0', 'Shields Road to Kinning Park', 'Strathclyde Series', 'We Solve Problems', 'Scottish Mathematical Challenge', '3.206'],
    sources: [
      { claim: 'SQA National 5 Mathematics course specification: C847 75, SCQF level 5; centre, chord and perpendicular bisector; arc length.', url: 'https://www.sqa.org.uk/sqa/files_ccc/n5-course-spec-mathematics.pdf' },
      { claim: 'SQA Higher Mathematics course specification: C847 76, SCQF level 6; equation of a circle; tangency; medians, altitudes and perpendicular bisectors.', url: 'https://www.sqa.org.uk/sqa/files_ccc/h-course-spec-mathematics.pdf' },
      { claim: 'SQA Advanced Higher Mathematics course specification: C847 77, SCQF level 7.', url: 'https://www.sqa.org.uk/files_ccc/AHCourseSpecMathematics.pdf' },
      { claim: 'University of Glasgow School of Mathematics & Statistics engagement page: RI Masterclasses Strathclyde Series, Maths Circles with We Solve Problems (P7 to S4, free, booking required), Scottish Mathematical Challenge 50th anniversary in 2026 and divisions.', url: 'https://www.gla.ac.uk/schools/mathematicsstatistics/outreach/' },
      { claim: 'OpenStreetMap Glasgow Subway station nodes, one Overpass query, 1 October 2026.', url: 'https://www.openstreetmap.org/copyright' }
    ],
    rejectedClaims: [
      'A published Subway route length or claims about its age or rank among metro systems: not verified here, not printed.',
      'That the fitted centre is at a named landmark: only a nearby postcode district (G3) is given.',
      'GCSE or A level as Glasgow qualifications: the page says they belong to the English system.',
      'An unnamed international team competition mentioned on the university page: its name was not in the extracted text, so it is omitted.',
      'Glasgow exam results or school performance: excluded by the spec.'
    ]
  }
};
