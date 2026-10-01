'use strict';
// Maths tuition in Milton Keynes (ag- maths by city, UK cluster Phase 11, row 581).
// Read on 1 October 2026 by curl, quotes grepped from the raw text:
//  - NCETM, Enigma Maths Hub page: "Welcome to Enigma Maths Hub. The Lead School for the hub is Denbigh School, Milton
//    Keynes."; council areas listed include Bedford, Central Bedfordshire, Luton and Milton Keynes.
//  - DfE, GCSE mathematics subject content (2013), algebra: "use the form y = mx + c to identify parallel and
//    perpendicular lines; find the equation of the line through two given points, or through one point with a given
//    gradient".
//  - The Open University mathematics pages answered curl with HTTP 403 (a bot check); not circumvented, not used.
// Local project (our calculation): OpenStreetMap via one Overpass query by bounding box (51.97, -0.86, 52.11, -0.64),
// osm_base 2026-10-01T09:21:22Z: 1,943 way pieces whose name starts H1 to H10 or V1 to V11. For each road, the chord
// joins the two mapped points furthest apart; bearing of that chord in local metres (longitude scaled by cos 52.04).
// Roads with chords of at least 2 km: H2 to H10 (9) and V1 to V8, V10, V11 (10). H chord bearings 051.3 (H6) to 068.7
// (H10), mean 060.1; V chord bearings 304.1 (V4) to 340.9 (V10), mean 323.3. Acute angle between the means 83.2.
// Gradients (east = x, north = y): H mean 0.576, V mean -1.342, product -0.773; a line perpendicular to the H mean would
// need -1.737. All 90 H and V pairs: median acute angle 79.0; 18 within 5 degrees of a right angle; closest H2 and V11
// 89.6; furthest H10 and V4 55.4. Second method, length-weighted average direction of every mapped piece (doubled
// angles): H 059.6, V 146.4 (heading 326.4), angle 86.8. Mapped piece lengths are not printed: dual carriageways are
// mapped twice, so they are not road lengths.
// Spine: are the Milton Keynes grid roads at right angles? Family: straight-line graphs, gradient, perpendicular
// gradients, angle between two lines, two methods giving two answers.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'MILTON KEYNES MATHS', label: 'Maths tuition in Milton Keynes', blurb: 'GCSE, A level, Key Stage 2 and adult maths for Milton Keynes, with a coordinate geometry project on the H and V grid roads.' },
  slug: 'maths-tuition-in-milton-keynes',
  code: 'mkm',
  accent: '#18189C',
  accentRationale: 'Milton Keynes maths: a deep grid blue (12.73:1 on white), chosen by hand at least 30 RGB units from every other maths-by-city page and 40 from our coding page for the town',
  pageType: 'city',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Maths tuition in Milton Keynes',
  title: 'Maths Tuition in Milton Keynes | GCSE, A Level and KS3 Online',
  description: 'Online maths tutor for Milton Keynes, ages 6 to 67: KS2 and SATs, KS3, GCSE, A level, Further Maths and adult maths, with a grid road geometry project.',
  ogDescription: 'Are the Milton Keynes grid roads really at right angles? We measured all of them, and that question carries a learner from KS3 gradients to A level vectors.',
  twitterDescription: 'Maths tuition in Milton Keynes, live online: we tested whether the H and V grid roads meet at right angles.',
  pageName: 'Maths Tuition in Milton Keynes',
  webPageDescription: 'Live online maths tuition for Milton Keynes learners aged 6 to 67, from Key Stage 2 and the Year 6 SATs through Key Stage 3, GCSE and A level to adult maths, with a coordinate geometry project on the city grid roads.',
  courseDescription: 'Live online maths lessons for Milton Keynes learners of every age, one to one or in level-matched groups of five to ten, following the national curriculum and the GCSE and A level specifications of AQA, Edexcel and OCR.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Maths tuition in Milton Keynes',
  navLinks: [
    { href: '#levels', label: 'Levels' },
    { href: '#grid', label: 'Grid roads' },
    { href: '#lines', label: 'Gradients' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Milton Keynes &middot; Maths tutors for ages 6 to 67 &middot; Live online lessons',
  h1: 'Maths tuition in Milton Keynes',
  lede: 'Milton Keynes is laid out on a grid, and every child who grows up here learns that the H roads run one way and the V roads the other. A grid suggests right angles. So we measured them. Using the free OpenStreetMap data, we drew a straight line from end to end of each grid road and worked out its direction. The H roads head, on average, at a bearing of 060 degrees, not 090; the V roads at 323. The angle between those two average directions is 83.2 degrees. Close to a right angle, but not one. That small gap is a whole unit of school maths, and it is how we teach: real numbers first, then the method that explains them, from Year 2 sums to A level vectors.',
  secondaryCta: { href: '#grid', label: 'See the grid road angles' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for a learner in Milton Keynes.',
  heroNote: 'A maths-only page &middot; KS2, KS3, GCSE, A level and adults &middot; We are independent of every Milton Keynes school',
  spec: [
    ['Learners', 'Aged 6 to 67, anywhere in Milton Keynes'],
    ['Primary', 'KS2 maths, times tables, Year 6 SATs'],
    ['KS3', 'Years 7 to 9, algebra and graphs'],
    ['GCSE', 'Foundation and Higher, AQA, Edexcel, OCR'],
    ['Post 16', 'A level Maths and Further Maths'],
    ['Adults', 'GCSE resits, Functional Skills topics, refreshers'],
    ['How', 'Live video, one to one or five to ten per group'],
    ['Project', 'Grid road gradients and angles']
  ],
  capsuleQ: 'Maths tuition in Milton Keynes, in brief',
  capsule: 'Milton Keynes families and adults use Modern Age Coders as an online maths tutor, with live lessons for anyone from 6 to 67. Children prepare for the Year 6 SATs through KS2; teenagers move through KS3 into GCSE, taught for their board (AQA, Edexcel or OCR) and tier, or IGCSE; sixth formers take A level, with Further Maths topics for the keenest; and adults sit GCSE maths resits or rebuild confidence. Lessons run one to one or in groups of five to ten learners at the same level. Our Milton Keynes project tests whether the grid roads cross at right angles: the H roads average a bearing of 060 degrees and the V roads 323, which leaves 83.2 degrees between them. The opening lesson is free. After it, a group place is USD 100 a month and private tuition USD 150 a month.',

  picks: {
    eyebrow: 'Most requested in Milton Keynes',
    h2: 'GCSE, A level and Key Stage 3 maths first',
    lede: 'These are the three courses Milton Keynes families ask about most often. Every other course we teach is listed further down.',
    items: [
      { course: 'gcse-mathematics-mastery', code: 'MK / 1', title: 'GCSE maths', note: 'Foundation or Higher tier, matched to the board the school enters, with straight-line graphs taught on the grid roads.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'MK / 2', title: 'A level maths', note: 'Calculus, vectors and statistics, with room for Further Maths ideas once the single-maths core is secure.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'MK / 3', title: 'KS3 maths, Years 7 to 9', note: 'The algebra, coordinates and graphs that GCSE quietly assumes a learner already owns.' }
    ]
  },

  sections: [
    {
      id: 'levels', tint: 'tint', eyebrow: 'From Year 1 to adult',
      h2: 'Maths tutor in Milton Keynes: what we teach at every level',
      lede: 'Schools in Milton Keynes follow the national curriculum for England. These are the levels a learner passes through, and what an hour with us concentrates on at each one.',
      body: [
        { kind: 'table', caption: 'Maths levels for a Milton Keynes learner and our focus at each', head: ['Level', 'Usual age', 'Focus of our lessons'], rows: [
          ['KS1', '5 to 7', 'Counting, place value, number bonds to 20, halves and quarters of shapes.'],
          ['KS2', '7 to 11', 'Times tables for the Year 4 multiplication tables check, long multiplication, fractions, and the arithmetic and reasoning papers of the Year 6 SATs.'],
          ['KS3', '11 to 14', 'Algebra, coordinates and straight-line graphs, ratio, angles and the first probability.'],
          ['GCSE', '14 to 16', 'Straight-line graphs, algebra and the rest of the course, at either tier, for AQA, Edexcel, OCR or IGCSE.'],
          ['A level', '16 to 18', 'Vectors, calculus, mechanics and statistics; Further Maths topics on request.'],
          ['Adults', '18 to 67', 'GCSE maths resits, the topics in Functional Skills maths, and confidence with numbers at work.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'KS2 maths and the Year 6 SATs',
          left: [
            'At primary level we spend most of our time on number. A child who knows that 6 × 7 = 42 because 6 × 7 is 6 × 5 plus 6 × 2 can rebuild the fact under pressure, which matters for the Year 4 multiplication tables check and again in the Year 6 arithmetic paper.',
            'The SATs reasoning papers reward a child who can explain. We ask for the reason as often as the answer, so that by spring of Year 6 explaining feels normal rather than frightening.'
          ],
          rightH3: 'KS3, GCSE and A level',
          right: [
            'From Year 7 the centre of gravity moves to algebra and graphs. A GCSE maths tutor who skips this stage spends Year 11 patching it, so we build it properly. At GCSE we teach to the exact specification of the board, and at A level we keep pure, statistics and mechanics connected to real data.',
            'Our national pages go further, stage by stage: <a class="ag-inline-link" href="/ks2-maths-tuition-online">KS2 maths</a>, <a class="ag-inline-link" href="/ks3-maths-tuition-online">KS3 maths</a>, <a class="ag-inline-link" href="/gcse-maths-tuition-online">GCSE maths</a>, <a class="ag-inline-link" href="/a-level-maths-tuition-online">A level maths</a> and <a class="ag-inline-link" href="/further-maths-tuition-online">Further Maths</a>.'
          ] },
        { kind: 'source', html: 'Each key stage is shown with the ages normally linked to it in English schools. Details of the multiplication tables check are on <a class="ag-inline-link" href="https://www.gov.uk/government/collections/multiplication-tables-check" rel="noopener" target="_blank">gov.uk</a>.' }
      ]
    },
    {
      id: 'grid', tint: 'plain', eyebrow: 'The Milton Keynes project',
      h2: 'Do the H and V grid roads really cross at right angles?',
      lede: 'A grid suggests squares. We tested the idea on every grid road in the city, using nothing but coordinates and a protractor of numbers.',
      body: [
        { kind: 'two',
          left: [
            'On 1 October 2026 we asked OpenStreetMap for every road whose name begins with H1 to H10 or V1 to V11. That returned 1,943 mapped pieces, from H3 Monks Way to V11 Tongwell Street. For each road we found the two mapped points that lie furthest apart and joined them with a straight line, called a chord. The chord shows the overall direction of a road that bends a little along the way.',
            'We then kept only the roads whose chord is at least 2 km long, because a short road can point almost anywhere. That leaves nine H roads, H2 to H10, and ten V roads, every V road except V9 Overstreet.'
          ],
          right: [
            'If the grid were perfectly square and lined up with north, every H road would point east, a bearing of 090 degrees, and every V road north, a bearing of 000. Neither is true. The H chords point between 051.3 degrees (H6 Childs Way) and 068.7 degrees (H10 Bletcham Way), and their average is 060.1. The V chords point between 304.1 degrees (V4 Watling Street) and 340.9 degrees (V10 Brickhill Street), with an average of 323.3.',
            'So the whole grid is turned about 30 degrees from the compass. More interesting for a mathematician: the two average directions are 83.2 degrees apart, not 90.'
          ] },
        { kind: 'table', mt: true, caption: 'Chord bearing and gradient of the main grid roads, our calculation from OpenStreetMap on 1 October 2026', head: ['Road', 'Chord bearing', 'Gradient (north per east)', 'What a learner notices'], rows: [
          ['H3 Monks Way', '060.1°', '0.575', 'Almost exactly the H average.'],
          ['H6 Childs Way', '051.3°', '0.801', 'The H road furthest round towards north.'],
          ['H8 Standing Way', '060.2°', '0.572', 'The longest H chord, at almost 11 km.'],
          ['H10 Bletcham Way', '068.7°', '0.391', 'The flattest gradient of the H roads.'],
          ['V4 Watling Street', '304.1°', '−0.676', 'The V road furthest from north.'],
          ['V7 Saxon Street', '340.6°', '−2.842', 'Steep: nearly three north for each one west.'],
          ['V8 Marlborough Street', '327.8°', '−1.586', 'Close to the V average.'],
          ['V10 Brickhill Street', '340.9°', '−2.881', 'The steepest gradient on the grid.']
        ] },
        { kind: 'source', html: 'Data: <a class="ag-inline-link" href="https://www.openstreetmap.org/copyright" rel="noopener" target="_blank">OpenStreetMap contributors</a>, one Overpass query on 1 October 2026. Bearings and gradients are Modern Age Coders calculations from chords between the furthest-apart mapped points of each road, with longitude converted to metres at the latitude of Milton Keynes. They describe the map, not the design drawings, and they change as volunteers edit the map.' }
      ]
    },
    {
      id: 'lines', tint: 'deep', eyebrow: 'Straight-line graphs, tested',
      h2: 'Perpendicular gradients: why two numbers multiply to minus one',
      lede: 'GCSE asks learners to use y = mx + c to spot perpendicular lines. The grid roads give that rule a real job to do.',
      body: [
        { kind: 'two',
          left: [
            'Put east along the x axis and north up the y axis. A road heading at a bearing of θ then has a gradient of tan(90° − θ). H5 Portway heads at 061.7°, so its gradient is tan(28.3°), about 0.539. V7 Saxon Street heads at 340.6°, giving a gradient of −2.842.',
            'The DfE content for GCSE says learners should "use the form y = mx + c to identify parallel and perpendicular lines". Two lines are perpendicular when their gradients multiply to −1. Here 0.539 × −2.842 = −1.532. Not −1, so H5 and V7 are not at right angles; the acute angle between them is 81.1°.'
          ],
          right: [
            'Try the averages. The mean H gradient is 0.576 and the mean V gradient −1.342. Their product is −0.773. For a line to be perpendicular to the H average, its gradient would have to be −1/0.576, which is −1.737.',
            'A sharp learner then spots something odd. H6 and V6 multiply to −1.145, further from −1 than H3 and V8 at −0.912, yet H6 and V6 meet at 86.3° while H3 and V8 meet at 87.7°. The product tells you whether lines are perpendicular; it is a poor ruler for how far from perpendicular they are. The angle is the honest measure.'
          ] },
        { kind: 'table', mt: true, caption: 'Pairs of grid roads, gradient product and angle between their chords (our calculation)', head: ['Pair', 'Gradients', 'Product', 'Acute angle'], rows: [
          ['H2 Millers Way and V11 Tongwell Street', '0.451 and −2.176', '−0.981', '89.6°'],
          ['H3 Monks Way and V8 Marlborough Street', '0.575 and −1.586', '−0.912', '87.7°'],
          ['H6 Childs Way and V6 Grafton Street', '0.801 and −1.429', '−1.145', '86.3°'],
          ['H5 Portway and V7 Saxon Street', '0.539 and −2.842', '−1.532', '81.1°'],
          ['H8 Standing Way and V4 Watling Street', '0.572 and −0.676', '−0.387', '63.8°'],
          ['H10 Bletcham Way and V4 Watling Street', '0.391 and −0.676', '−0.264', '55.4°']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'All 90 pairs at once',
          left: [
            'Nine H roads and ten V roads make 90 pairs. The median angle between their chords is 79.0°, and 18 of the 90 pairs are within 5° of a right angle. The pair closest to square is H2 and V11 at 89.6°; the furthest is H10 and V4 at 55.4°.',
            'Note what this does not say. Two chords are directions across the whole city; where two real roads meet at a roundabout, the angle there can be quite different.'
          ],
          rightH3: 'Two methods, two answers',
          right: [
            'A chord uses only two points. A second method uses all of them: average the direction of every short mapped piece, giving longer pieces more weight. That gives 059.6° for the H roads and 326.4° for the V roads, and an angle of 86.8° between them, against 83.2° by chords.',
            'Neither number is wrong. They answer slightly different questions, and a good mathematician states which method was used. That habit is worth more than the rule about −1.'
          ] },
        { kind: 'source', html: 'GCSE wording from <a class="ag-inline-link" href="https://www.gov.uk/government/publications/gcse-mathematics-subject-content-and-assessment-objectives" rel="noopener" target="_blank">DfE, GCSE mathematics subject content</a>, read on 1 October 2026. All bearings, gradients, products and angles are Modern Age Coders calculations; the doubled-angle averaging in the second method is A level material, not GCSE.' }
      ]
    },
    {
      id: 'local', tint: 'tint', eyebrow: 'Maths around Milton Keynes',
      h2: 'The Maths Hub, the UKMT maths challenge and keen learners',
      lede: 'Families sometimes ask what else is going on in the city for children who enjoy maths. Here is what we know. We run none of it.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Enigma Maths Hub', p: 'The NCETM lists the Enigma Maths Hub as the hub for Milton Keynes schools, with Denbigh School, Milton Keynes as its lead school. Maths Hubs support teachers and schools; they do not tutor children.' },
          { h3: 'The UKMT maths challenge', p: 'Many secondary schools enter pupils for the UK Mathematics Trust challenges. Our <a class="ag-inline-link" href="/maths-challenges">maths challenges page</a> and <a class="ag-inline-link" href="/junior-mathematical-olympiad-preparation">Junior Olympiad page</a> describe how we prepare learners.' },
          { h3: 'Next door for the 11 plus', p: 'Milton Keynes has no grammar schools of its own, but neighbouring Buckinghamshire does. Families weighing that route can read our <a class="ag-inline-link" href="/11-plus-maths-tuition-buckinghamshire">11 plus maths in Buckinghamshire</a> page.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'For a learner who likes puzzles, the grid road question is a fair taste of competition maths. There is a clean method, but the interesting part is noticing that the method and the question do not quite match.',
            'Our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a> lists national challenges by age, and the <a class="ag-inline-link" href="/maths-olympiad-training-uk">olympiad page</a> explains the harder rounds.'
          ],
          right: [
            'Because teaching happens over video, learners in Bletchley, Wolverton, Newport Pagnell and Kents Hill simply log in after school. Groups are formed by level, not postcode, so a classmate may be in Leeds or Cardiff.',
            'A GCSE student in Shenley Church End and an adult in Stony Stratford can therefore work on the same grid road data in the same week, at very different depths.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.ncetm.org.uk/hubs/enigma-maths-hub/" rel="noopener" target="_blank">NCETM, Enigma Maths Hub</a>, read on 1 October 2026. We are independent of the NCETM, every Maths Hub, the UKMT and every school in Milton Keynes and Buckinghamshire.' }
      ]
    },
    {
      id: 'adults', tint: 'plain', eyebrow: 'Grown-up maths',
      h2: 'Maths tutor for adults in Milton Keynes',
      lede: 'A good share of the people who contact us are adults. Some need a GCSE maths resit for a course or a job; others simply want the subject to make sense at last.',
      body: [
        { kind: 'three', cells: [
          { h3: 'GCSE maths resit', p: 'Adults retaking GCSE start with us wherever their confidence breaks down, and the content is covered at a pace that suits a working week. The exam itself is booked through a school, college or exam centre; we prepare you for it.' },
          { h3: 'Functional Skills topics', p: 'Percentages, measures, reading charts and handling money, taught as the Functional Skills maths qualifications expect. Our <a class="ag-inline-link" href="/functional-skills-maths-tuition-online">Functional Skills page</a> says more.' },
          { h3: 'Keeping up with your child', p: 'Parents learn the methods their children meet now, from bar models to the grid method, so that homework help agrees with the classroom.' }
        ] },
        { kind: 'p', mt: true, html: 'Adults usually enjoy the grid road project more than they expect. Most have driven the H and V roads for years, and the idea that the grid is turned 30 degrees from north surprises almost everyone. There is more on our <a class="ag-inline-link" href="/online-maths-classes-for-adults-in-uk">adult maths page</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The order we teach in',
    h2: 'Four steps from counting squares to the gradient rule',
    lede: 'A learner can start at any step. The free lesson tells us which one.',
    table: { caption: 'From grid coordinates to perpendicular lines, with the sign that each step is secure', head: ['Usually', 'Step', 'Secure when the learner can'], rows: [
      ['Years 3 to 5', '1. Coordinates', 'Plot and read points in all four quadrants without mixing up x and y'],
      ['Years 6 to 8', '2. Gradient', 'Find a gradient by counting up and across between two points'],
      ['Years 9 to 11', '3. y = mx + c', 'Write the equation of a line and spot parallel and perpendicular pairs'],
      ['Years 12 and 13', '4. Angles from vectors', 'Find the angle between two lines from their directions, not their gradients']
    ] },
    left: { h3: 'Joining in Year 10 or 11', ps: [
      'Plenty of learners come to us late in GCSE. We check the algebra underneath first, because a gradient question is really a fractions question in disguise.',
      'If there is more to fix than time allows before the exam, we will say so at the free lesson.'
    ] },
    right: { h3: 'After GCSE', ps: [
      'Those who enjoyed this kind of work often take <a class="ag-inline-link" href="/courses/statistics-probability-maths-course">statistics and probability</a> or <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a>, where the grid road calculation becomes a short program.',
      'Learners who like proof often look at Further Maths next.'
    ] }
  },

  catalogue: {
    eyebrow: 'All our maths courses',
    h2: 'Popular maths courses for Milton Keynes learners',
    lede: 'The courses UK families search for most come first: GCSE, A level, 11 plus and IGCSE. Each card opens the full syllabus.',
    bands: [
      { num: 'I', h3: 'Most popular', sub: 'Exam courses', courses: [
        { code: 'MKM / A1', slug: 'gcse-mathematics-mastery', title: 'GCSE maths', blurb: 'Foundation and Higher tier, AQA, Edexcel or OCR.' },
        { code: 'MKM / A2', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'Pure, statistics and mechanics.' },
        { code: 'MKM / A3', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths', blurb: 'Speed and reasoning for selective-school papers.' },
        { code: 'MKM / A4', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'For schools that enter the international papers.' }
      ] },
      { num: 'II', h3: 'Primary', sub: 'KS1 and KS2', courses: [
        { code: 'MKM / B1', slug: 'early-math-foundations', title: 'Early maths', blurb: 'Number sense and shape for the youngest.' },
        { code: 'MKM / B2', slug: 'elementary-mathematics-complete-masterclass', title: 'KS1 and KS2 maths', blurb: 'Every primary topic through to the SATs.' },
        { code: 'MKM / B3', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Quick, reliable sums in the head.' },
        { code: 'MKM / B4', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus maths', blurb: 'Bead-frame arithmetic that moves into the head.' }
      ] },
      { num: 'III', h3: 'Secondary and beyond', sub: 'KS3 and stretch', courses: [
        { code: 'MKM / C1', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'KS3 maths', blurb: 'Algebra, graphs, ratio and geometry.' },
        { code: 'MKM / C2', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Algebra rebuilt from the beginning.' },
        { code: 'MKM / C3', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'From averages to hypothesis tests.' },
        { code: 'MKM / C4', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'UKMT-style problems for keen learners.' }
      ] },
      { num: 'IV', h3: 'Adults and applied', sub: 'Maths for life and work', courses: [
        { code: 'MKM / D1', slug: 'college-mathematics-complete-masterclass', title: 'University maths', blurb: 'Calculus and linear algebra for adults and undergraduates.' },
        { code: 'MKM / D2', slug: 'complete-business-finance-mathematics-mastery', title: 'Business maths', blurb: 'Interest, percentages and risk.' },
        { code: 'MKM / D3', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data', blurb: 'The statistics behind data work.' },
        { code: 'MKM / D4', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Fast calculation shortcuts.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'When lessons run',
    h2: 'After school, evenings and Saturdays, in UK time',
    lede: 'Our teachers work from India. For most of the winter India is five and a half hours ahead of Milton Keynes, and four and a half during British Summer Time. You only ever see UK times.',
    slots: [
      { time: 'Weekdays after school', l: 'Primary and KS3 learners.' },
      { time: 'Weekday evenings', l: 'GCSE, A level and adults.' },
      { time: 'Saturday mornings', l: 'Any age, any level.' }
    ],
    cells: [
      { h3: 'One teacher, every week', p: 'The person who saw a mistake last week checks for it this week.' },
      { h3: 'Notes for parents', p: 'A short message after lessons on what landed and what needs another look.' },
      { h3: 'Five to ten in a group', p: 'Everyone working at the same level, so one explanation suits the room.' },
      { h3: 'Numbers from real places', p: 'Grid road angles, timetables and census tables alongside exam questions.' },
      { h3: 'One to one on request', p: 'For an exam close at hand or a particular gap.' },
      { h3: 'Reasons, not tricks', p: 'Every method comes with the reason it works.' }
    ]
  },

  projectsH2: 'Projects our students went on to build',
  projectsLede: 'Learners who began with numbers like these went on to the projects below. The <a class="ag-inline-link" href="/student-labs">student labs</a> hold many more.',
  reviewsLede: 'Reviews families and learners left on our Google profile, reproduced word for word.',

  fees: {
    h2: 'Fees',
    lede: 'One monthly price in US dollars for every country outside India. No joining fee and no contract.',
    free: ['A full lesson at the right level', 'A straight answer about where the learner stands', 'No payment details needed'],
    group: ['Five to ten learners at one level', 'The same teacher each week', 'Homework marked and discussed', 'A certificate at the end'],
    one: ['One teacher, one learner', 'Aimed at a particular gap', 'Handy in the run-up to an exam']
  },

  faq: {
    eyebrow: 'Milton Keynes maths questions',
    h2: 'Questions Milton Keynes families ask about maths tuition',
    items: [
      { q: 'What is a gradient in maths?', a: 'A gradient measures how steep a straight line is: how far it goes up for each one unit it goes across. A line through (0, 0) and (4, 2) has gradient 2 ÷ 4 = 0.5. Lines that slope down from left to right have negative gradients.' },
      { q: 'How much does a maths tutor cost in Milton Keynes?', a: 'With us the first lesson is free. After that it is USD 100 a month for a place in a small group or USD 150 a month for one to one lessons, with no joining fee.' },
      { q: 'Do you teach GCSE maths for AQA, Edexcel and OCR?', a: 'Yes. We teach Foundation and Higher tier to the specification of whichever board the school enters, and IGCSE for schools that sit it.' },
      { q: 'Can you help with a GCSE maths resit?', a: 'Yes, for teenagers and adults. We teach the content again from the weakest topic upwards. The exam entry itself is made through a school, college or exam centre.' },
      { q: 'Do you offer KS2 maths and Year 6 SATs preparation?', a: 'Yes. We teach the KS2 curriculum, the times tables behind the Year 4 multiplication tables check, and the arithmetic and reasoning skills the Year 6 SATs assess.' },
      { q: 'Is there an A level maths tutor for Further Maths?', a: 'Our A level course covers pure, statistics and mechanics and can stretch into Further Maths topics for students who want more. Tell us the board and the modules at the free lesson.' },
      { q: 'What is the best way to learn times tables?', a: 'Learn the facts by building them from ones already known, then practise a little every day. A child who knows 8 × 5 = 40 can find 8 × 6 by adding one more 8.' },
      { q: 'Do you have a classroom in Milton Keynes?', a: 'No classroom: we teach only over live video, which means a learner in any MK postcode can join from a desk at home.' },
      { q: 'Do you prepare learners for the UKMT maths challenge?', a: 'Yes, through our competition maths course, which works on the kind of problems the UK Mathematics Trust challenges set. Schools enter pupils for the challenges themselves.' },
      { q: 'Can you guarantee a grade?', a: 'No tutor honestly can, and we do not. We teach carefully and report progress plainly.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More maths for Milton Keynes learners',
    lede: 'National maths pages by stage, our coding page for the city, and nearby maths pages.',
    items: [
      { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition', p: 'Foundation and Higher, every board.' },
      { href: '/a-level-maths-tuition-online', label: 'A level maths tuition', p: 'Pure, statistics and mechanics.' },
      { href: '/ks3-maths-tuition-online', label: 'KS3 maths tuition', p: 'Years 7 to 9, where algebra starts in earnest.' },
      { href: '/best-coding-class-in-milton-keynes', label: 'Coding classes in Milton Keynes', p: 'Our coding page for the city.' },
      { href: '/maths-tuition-in-luton', label: 'Maths tuition in Luton', p: 'Another town in the same Maths Hub area.' },
      { href: '/coding-classes-in-united-kingdom', label: 'The UK index', p: 'Every nation, city, town and maths page we have.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson in Milton Keynes',
    lede: 'Give us the school year or age and the topic that worries the learner most. The trial is a real lesson, followed by an honest view of where things stand.',
    readFirst: 'Want to look around before booking? See the <a class="ag-inline-link" href="/courses">course list</a> and our note on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>.',
    note: 'For the fastest answer, message us on WhatsApp. The number has an Indian code because our team is in India; we have no Milton Keynes office, and all lessons are online.',
    formNote: 'No card details. We reply to agree a time.'
  },

  footer: {
    cols: [
      { h4: 'Maths', links: [
        { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition' },
        { href: '/a-level-maths-tuition-online', label: 'A level maths tuition' },
        { href: '/ks2-maths-tuition-online', label: 'KS2 maths tuition' },
        { href: '/functional-skills-maths-tuition-online', label: 'Functional Skills maths' }
      ] },
      { h4: 'Nearby', links: [
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/best-coding-class-in-milton-keynes', label: 'Coding in Milton Keynes' },
        { href: '/maths-tuition-in-luton', label: 'Maths tuition in Luton' },
        { href: '/maths-tuition-in-oxford', label: 'Maths tuition in Oxford' }
      ] }
    ],
    bottomRight: 'Maths for every age, taught live'
  },

  personalityCss: `
.ag-root.ag-mkm .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-mkm .ag-capsule { border-left-width: 6px; }
.ag-root.ag-mkm .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-mkm .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-mkm .ag-table td:nth-child(3) { font-variant-numeric: tabular-nums; }
.ag-root.ag-mkm .ag-spec dt { letter-spacing: 0.1em; }
.ag-root.ag-mkm .ag-three h3 { letter-spacing: -0.004em; }
.ag-root.ag-mkm .ag-slots { gap: 0.9rem; }
`,

  mustMention: ['Enigma Maths Hub', 'Denbigh School', 'H6 Childs Way', 'V10 Brickhill Street', 'H2 Millers Way', '83.2 degrees', '060.1', '−1.737', '1,943 mapped pieces'],

  dossier: {
    curriculumAuthority: 'National curriculum for England (DfE); GCSE mathematics subject content (DfE, 2013), straight-line graphs and perpendicular gradients. Milton Keynes schools sit in the Enigma Maths Hub area (NCETM).',
    localProject: 'Milton Keynes grid road chords from OpenStreetMap, 1 October 2026: 1,943 pieces named H1 to H10 and V1 to V11; 9 H and 10 V roads with chords of 2 km or more. H mean bearing 060.1 (051.3 to 068.7), V mean 323.3 (304.1 to 340.9), angle 83.2; gradients 0.576 and -1.342, product -0.773, perpendicular would need -1.737; 90 pairs, median 79.0, 18 within 5 degrees; second method 059.6 and 326.4, angle 86.8.',
    requiredMentions: ['Enigma Maths Hub', 'Denbigh School', 'H6 Childs Way', 'V10 Brickhill Street', 'H2 Millers Way', '83.2 degrees', '060.1', '−1.737', '1,943 mapped pieces'],
    sources: [
      { claim: 'NCETM, Enigma Maths Hub: lead school Denbigh School, Milton Keynes; areas include Bedford, Central Bedfordshire, Luton and Milton Keynes.', url: 'https://www.ncetm.org.uk/hubs/enigma-maths-hub/' },
      { claim: 'DfE GCSE mathematics subject content: use y = mx + c to identify parallel and perpendicular lines.', url: 'https://www.gov.uk/government/publications/gcse-mathematics-subject-content-and-assessment-objectives' },
      { claim: 'gov.uk multiplication tables check collection.', url: 'https://www.gov.uk/government/collections/multiplication-tables-check' },
      { claim: 'OpenStreetMap ways named H1 to H10 and V1 to V11, one Overpass query, 1 October 2026.', url: 'https://www.openstreetmap.org/copyright' }
    ],
    rejectedClaims: [
      'Any statement about why the grid was laid out at its angle, or what the designers intended: no primary source read, so not printed.',
      'Open University facts: its maths pages returned a bot check (HTTP 403); not circumvented, so the university is not described.',
      'Total length of the grid roads: mapped pieces double-count dual carriageways, so no length total is printed.',
      'Any claim that Milton Keynes pupils sit the Buckinghamshire test: we only link the neighbouring 11 plus page.',
      'Any statement about Milton Keynes exam results or school performance: excluded by the spec.'
    ]
  }
};
