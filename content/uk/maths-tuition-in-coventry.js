'use strict';
// Maths tuition in Coventry (ag- maths by city, UK cluster Phase 11, row 572).
// Read on 1 October 2026 by curl, quotes grepped from the raw text:
//  - NCETM, Origin Maths Hub page: "The Lead School for the hub is Tudor Grange Academy, Solihull."; council areas listed:
//    Coventry, North Warwickshire, Nuneaton and Bedworth, Rugby, Solihull, Stratford-on-Avon, Warwick.
//  - University of Warwick, Mathematics Institute, "Outreach events for schools": "Saturday afternoon Maths Circles",
//    "On-campus, Saturday afternoon problem-solving sessions for pupils who love maths."; "Royal Institution Masterclasses",
//    "Saturday sessions on campus for Year 9 and Year 12 pupils run by our staff and students."; "Mathematical Problem Solving
//    Classes for Year 12" ("a suite of 10 weekly, face to face classes"); "Maths Art - Sat 14th Nov" ("Most suitable for
//    families with children from 5 years old and up"). Contacts page gives the Zeeman Building, CV4 7AL; postcodes.io places
//    CV4 7AL in the Coventry local authority (ward Wainbody). Admissions-test sessions on the page are deliberately not used.
//  - DfE GCSE mathematics subject content (2013), geometry item 17: "calculate: perimeters of 2D shapes, including circles;
//    areas of circles".
// Local project (our calculation): OpenStreetMap, one Overpass query for ways with ref A4053 (osm_base 2026-10-01T09:16:54Z),
// 97 ways. Chaining the trunk ways that run clockwise gives one closed loop of 44 ways and 131 mapped points (the other
// carriageway does not close in the extract, so it is not used). Local flat projection at 52.408 N. Perimeter 3,677.6 m;
// enclosed area 974,929 square metres (97.49 ha) by the shoelace method. Circle with the same perimeter: 1,076,258 m2.
// Square with the same perimeter: 845,291 m2. Isoperimetric ratio 4 pi A / P^2 = 0.9059 (square 0.7854, circle 1).
// Counting squares (full + half of part-covered): 200 m grid 14 full, 22 part, 1,000,000 m2 (+2.57%); 100 m 72 and 48,
// 960,000 (-1.53%); 50 m 345 and 94, 980,000 (+0.52%); 25 m 1,467 and 188, 975,625 (+0.07%). Distance from the centroid of
// the points to the loop: 424 to 654 m. Widest point-to-point span 1,234 m. Way names include Ringway Queens, Ringway
// Whitefriars, Ringway St Nicholas, Ringway Swanswell, Ringway St Patricks, Ringway Rudge, Ringway Hill Cross, Ringway St Johns.
// Spine: how close to a circle is the Coventry ring road? Family: perimeter and area, pi, circles versus squares, the
// isoperimetric idea, estimating area by counting squares.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'COVENTRY MATHS', label: 'Maths tuition in Coventry', blurb: 'Maths for Coventry learners aged 6 to 67, with a geometry project that measures how close the ring road comes to a circle.' },
  slug: 'maths-tuition-in-coventry',
  code: 'mcv',
  accent: '#7E5A1B',
  accentRationale: 'Coventry maths: a muted ochre (6.24:1 contrast on white), chosen by hand and kept apart from the dark olive on our Coventry coding page',
  pageType: 'city',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Maths tuition in Coventry',
  title: 'Maths Tuition in Coventry | Online Maths Tutor, KS2 to A Level',
  description: 'Maths tuition in Coventry from age 6 to 67: a live online maths tutor for times tables, KS2, KS3, GCSE, A level and Further Maths, and adult maths. Free trial.',
  ogDescription: 'Coventry maths tuition online: Year 4 times tables, SATs, KS3, GCSE on any board, A level and Further Maths, plus Functional Skills and resits for adults.',
  twitterDescription: 'Coventry maths, taught live online: how close is the ring road to a perfect circle?',
  pageName: 'Maths Tuition in Coventry',
  webPageDescription: 'Live online maths tuition for Coventry learners aged 6 to 67, covering KS2 and Year 6 SATs maths, KS3, GCSE and IGCSE, A level and Further Maths, and adult maths, with a geometry project on the shape of the Coventry ring road.',
  courseDescription: 'Live online maths classes for Coventry learners at every stage, in level-matched groups of five to ten or one to one, taught to the national curriculum for England and the GCSE and A level specifications.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Maths tuition in Coventry',
  navLinks: [
    { href: '#stages', label: 'Stages' },
    { href: '#ringroad', label: 'Ring road' },
    { href: '#squares', label: 'Counting squares' },
    { href: '#local', label: 'Local maths' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Coventry &middot; Maths for learners aged 6 to 67 &middot; Live lessons online',
  h1: 'Maths tuition in Coventry',
  lede: 'Trace the Coventry ring road on a map and it looks roughly round. Roughly is not a number, so we measured it. One carriageway, followed all the way round in OpenStreetMap, is 3,677.6 metres long and encloses 97.49 hectares. A perfect circle with the same perimeter would hold about 10% more; a square with the same perimeter would hold about 13% less. On the scale mathematicians use to score roundness, the ring road reaches 0.906 out of 1. Perimeter, area, π and ratio all sit inside GCSE, so one road carries a whole course; below we use it to explain how we teach Coventry learners, starting with eight-year-olds learning tables and ending with sixth formers and adults.',
  secondaryCta: { href: '#ringroad', label: 'See the ring road measurements' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for a learner in Coventry.',
  heroNote: 'A maths page for Coventry &middot; Children, teenagers and adults &middot; Not linked to any Coventry school or university',
  spec: [
    ['Learners', 'Ages 6 to 67 across Coventry'],
    ['Primary', 'Times tables, KS2 maths, Year 6 SATs'],
    ['Secondary', 'KS3 maths, GCSE foundation or higher'],
    ['Boards', 'AQA, Edexcel, OCR; IGCSE too'],
    ['Sixth form', 'A level Maths, Further Maths'],
    ['Adults', 'Functional Skills maths, GCSE resits'],
    ['How', 'Live video, groups of 5 to 10 or private'],
    ['Coventry project', 'The ring road, perimeter against area']
  ],
  capsuleQ: 'How does our maths tuition in Coventry work?',
  capsule: 'Anyone in Coventry aged 6 to 67 can learn maths with us over live video, sharing a class with five to ten others at a matching level or working alone with a tutor. Primary learners work on times tables for the Year 4 check, KS2 maths and Year 6 SATs reasoning. At secondary school that means KS3 maths followed by GCSE (AQA, Edexcel or OCR, foundation or higher) or the IGCSE route. Sixth formers study A level Maths and, where they choose, Further Maths. Adults come for Functional Skills maths, a GCSE maths resit or a refresher. Our Coventry example measures the ring road: its 3,677.6 metre loop encloses 97.49 hectares, about 90.6% of what a circle could hold with the same perimeter. The trial costs nothing; regular lessons are USD 100 per month as part of a group or USD 150 per month on your own.',

  picks: {
    eyebrow: 'Common starting points in Coventry',
    h2: 'Three maths courses most Coventry families choose',
    lede: 'GCSE, primary and A level maths account for most Coventry enquiries. Every other course is in the full list below.',
    items: [
      { course: 'gcse-mathematics-mastery', code: 'COV / 1', title: 'GCSE maths', note: 'Foundation or higher on AQA, Edexcel or OCR, with geometry practised on real shapes like the ring road.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'COV / 2', title: 'Primary maths, KS1 and KS2', note: 'Multiplication facts, fractions, area and perimeter, and the reasoning in SATs papers.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'COV / 3', title: 'A level maths', note: 'Pure, mechanics and statistics for Years 12 and 13; Further Maths is taught alongside on request.' }
    ]
  },

  sections: [
    {
      id: 'stages', tint: 'tint', eyebrow: 'All ages',
      h2: 'An online maths tutor for Coventry learners at every stage',
      lede: 'Coventry schools follow the national curriculum for England. The table shows what each stage covers and where our lessons spend their time; adults slot in wherever they need to.',
      body: [
        { kind: 'table', caption: 'Stages of maths for a Coventry learner and our emphasis at each one', head: ['Stage', 'Typical age', 'What our lessons stress'], rows: [
          ['KS1', '5 to 7', 'Number bonds, counting patterns, shapes and simple measuring.'],
          ['KS2', '7 to 11', 'Times tables before the Year 4 check, perimeter and area of rectangles, fractions, and SATs reasoning in Year 6.'],
          ['KS3', '11 to 14', 'Algebra, angles, ratio, area of compound shapes and the circle formulas.'],
          ['GCSE', '14 to 16', 'Foundation or higher tier on the school\'s board, including circles, arcs, sectors and trigonometry.'],
          ['A level', '16 to 18', 'Pure maths, mechanics and statistics; Further Maths for learners who want the extra modules.'],
          ['Adults', '18 to 67', 'Functional Skills maths, GCSE maths resits and refreshers at an adult pace.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'KS2 maths in Coventry',
          left: [
            'State-funded schools in England give the multiplication tables check to every Year 4 pupil, so Coventry eight-year-olds meet it too. In our lessons the tables are linked facts: 8 × 7 is double 4 × 7, and a child who can see that is never completely stuck.',
            'Perimeter and area arrive in KS2 and are often confused. We separate them early with fences and fields, then return to them in Year 6 when SATs maths asks children to reason about shapes rather than just measure them.'
          ],
          rightH3: 'GCSE, A level and Further Maths',
          right: [
            'For GCSE we work to the learner\'s exam board and tier, AQA, Edexcel or OCR. Circles, π and area appear on every specification, and the ring road project on this page covers most of that content in one connected problem.',
            'Stage-by-stage detail lives on our national pages: <a class="ag-inline-link" href="/ks2-maths-tuition-online">KS2 maths</a>, <a class="ag-inline-link" href="/ks3-maths-tuition-online">KS3 maths</a>, <a class="ag-inline-link" href="/gcse-maths-tuition-online">GCSE maths</a>, <a class="ag-inline-link" href="/a-level-maths-tuition-online">A level maths</a> and <a class="ag-inline-link" href="/further-maths-tuition-online">Further Maths</a>.'
          ] },
        { kind: 'source', html: 'Year 4 check details: <a class="ag-inline-link" href="https://www.gov.uk/government/collections/multiplication-tables-check" rel="noopener" target="_blank">gov.uk collection page</a>, checked on 1 October 2026. Key stage ages follow the normal pattern in English schools.' }
      ]
    },
    {
      id: 'ringroad', tint: 'plain', eyebrow: 'The Coventry project',
      h2: 'How close to a circle is the Coventry ring road?',
      lede: 'A circle encloses more area than any other shape with the same perimeter. That makes a neat test for any loop on a map: compare its area with the area of a circle drawn from the same length of string.',
      body: [
        { kind: 'two',
          left: [
            'On 1 October 2026 we downloaded every mapped section of the A4053 from OpenStreetMap. The road is a dual carriageway, so each direction is mapped separately, in sections with names such as Ringway Queens, Ringway Swanswell and Ringway St Johns. Following the sections that run clockwise gives one complete loop of 44 pieces and 131 mapped points.',
            'Around that loop the carriageway measures 3,677.6 metres. The area inside it, worked out from the coordinates of the 131 points, is 974,929 square metres, or 97.49 hectares. These are our measurements of the mapped line; the real road is wider than a line, so they describe the shape, not the tarmac.'
          ],
          right: [
            'A circle with a circumference of 3,677.6 metres has radius 3,677.6 ÷ 2π, which is 585.3 metres, and area π × 585.3², which is 1,076,258 square metres. So the ring road encloses 974,929 ÷ 1,076,258, or about 90.6%, of the most it could.',
            'A square with the same perimeter would have sides of 919.4 metres and an area of 845,291 square metres, about 78.5% of the circle. The ring road sits comfortably between the two: rounder than a square, less round than a circle.'
          ] },
        { kind: 'table', mt: true, caption: 'The clockwise ring road loop against a circle and a square with the same perimeter (our calculation from OpenStreetMap, 1 October 2026)', head: ['Shape', 'Perimeter', 'Area enclosed', 'Roundness score'], numCols: [1, 2, 3], rows: [
          ['Coventry ring road, clockwise carriageway', '3,677.6 m', '974,929 m²', '0.906'],
          ['Circle with the same perimeter', '3,677.6 m', '1,076,258 m²', '1.000'],
          ['Square with the same perimeter', '3,677.6 m', '845,291 m²', '0.785']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The roundness score',
          left: [
            'The score in the last column is 4π × area ÷ perimeter². It equals exactly 1 for a circle, π ÷ 4 for any square, and less for longer, thinner shapes. The ring road scores 0.9059.',
            'It is a good formula for a GCSE learner to rearrange: substitute the circle\'s area and circumference and watch everything cancel to 1. Then try it for a square and see π ÷ 4 appear.'
          ],
          rightH3: 'If it were a circle, what would π be?',
          right: [
            'Here is a puzzle we set in lessons. Pretend the ring road is a circle. Work out the radius from its area, then divide the perimeter by twice that radius. For a true circle you get π. For the ring road you get 3.30.',
            'The extra 0.16 is a measure of how far the road wanders from a circle. The distance from the centre of the loop to the road varies from 424 metres to 654 metres, and the widest span across it is 1,234 metres.'
          ] },
        { kind: 'source', html: 'Data: <a class="ag-inline-link" href="https://www.openstreetmap.org/copyright" rel="noopener" target="_blank">OpenStreetMap contributors</a>, ways tagged A4053, one Overpass query on 1 October 2026. Lengths and areas are Modern Age Coders\' calculations on a local flat projection; the other carriageway did not form a closed loop in our download and is left out. GCSE wording: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/gcse-mathematics-subject-content-and-assessment-objectives" rel="noopener" target="_blank">DfE, GCSE mathematics subject content</a>, which asks learners to "calculate: perimeters of 2D shapes, including circles; areas of circles".' }
      ]
    },
    {
      id: 'squares', tint: 'deep', eyebrow: 'A primary method, tested',
      h2: 'Finding the area by counting squares',
      lede: 'Before any formula, children estimate area by laying a grid over a shape and counting squares, adding half for each square the edge cuts through. We did exactly that for the ring road with four sizes of grid.',
      body: [
        { kind: 'table', caption: 'Counting-squares estimates of the area inside the ring road loop (our calculation)', head: ['Grid square', 'Fully inside', 'Cut by the edge', 'Estimate', 'Error'], numCols: [1, 2, 3, 4], rows: [
          ['200 m', '14', '22', '1,000,000 m²', '+2.57%'],
          ['100 m', '72', '48', '960,000 m²', '−1.53%'],
          ['50 m', '345', '94', '980,000 m²', '+0.52%'],
          ['25 m', '1,467', '188', '975,625 m²', '+0.07%']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Even the coarsest grid, with only 36 squares touching the shape, gets within 3% of the true area. The rule of counting half for each edge square works because, on average, the edge cuts squares roughly in half.',
            'The errors do not shrink smoothly. The 200 metre grid overestimates, the 100 metre grid underestimates, and only after that do the estimates settle. That surprises children who expect each finer grid to be a little better than the last.'
          ],
          right: [
            'At GCSE the same idea returns as the trapezium rule and, at A level, as integration: chop a shape into thin pieces, add them up and let the pieces get smaller. A Coventry learner who has counted squares on the ring road has already met the idea behind calculus.',
            'Our area figure of 974,929 square metres came from the shoelace method, which adds up cross products of neighbouring coordinates. It is quick to code, and A level learners enjoy proving why it works.'
          ] },
        { kind: 'source', html: 'All grid counts and errors are Modern Age Coders\' calculations, compared with the 974,929 m² shoelace area of the same 131 mapped points.' }
      ]
    },
    {
      id: 'local', tint: 'tint', eyebrow: 'Maths beyond our lessons',
      h2: 'The Origin Maths Hub and maths at the University of Warwick',
      lede: 'Coventry has a busy maths scene outside the classroom. We list some of it so families can find it. We are independent of every organisation named here.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Origin Maths Hub', p: 'The NCETM names Tudor Grange Academy, Solihull, as lead school of the Origin Maths Hub, which works with schools in Coventry, Solihull, Rugby, Warwick, Stratford-on-Avon, North Warwickshire, and Nuneaton and Bedworth.' },
          { h3: 'Maths Circles', p: 'The Mathematics Institute at the University of Warwick lists Saturday afternoon Maths Circles: "On-campus, Saturday afternoon problem-solving sessions for pupils who love maths."' },
          { h3: 'Ri Masterclasses', p: 'The same page describes Royal Institution Masterclasses as "Saturday sessions on campus for Year 9 and Year 12 pupils run by our staff and students." Places come through schools.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'The Mathematics Institute is in the Zeeman Building, and its postcode, CV4 7AL, lies inside the Coventry council area. Its outreach page also lists Mathematical Problem Solving Classes for Year 12, described as "a suite of 10 weekly, face to face classes", and a free family Maths Art afternoon on 14 November, "Most suitable for families with children from 5 years old and up".',
            'Competition fans can read how we coach for the three UK Mathematics Trust individual challenges on our <a class="ag-inline-link" href="/ukmt-maths-challenge-tutoring">UKMT maths challenge page</a>.'
          ],
          right: [
            'Families in and around Coventry sometimes ask about selective schools. Our <a class="ag-inline-link" href="/11-plus-maths-tuition-warwickshire">11 plus maths page for Warwickshire</a> describes the test used there; this Coventry page is about maths for every age.',
            'Lessons are online, so a learner in Earlsdon, Tile Hill or Wyken joins from home. We group by level, not location, and a Coventry learner may share a class with someone in Leeds or Cardiff.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.ncetm.org.uk/hubs/origin-maths-hub/" rel="noopener" target="_blank">NCETM, Origin Maths Hub</a>; <a class="ag-inline-link" href="https://warwick.ac.uk/fac/sci/maths/general/outreach/schools-support/school-events/" rel="noopener" target="_blank">University of Warwick, Mathematics Institute, outreach events for schools</a>; postcode lookup from postcodes.io. All read 1 October 2026. We have no link with the NCETM, the hub, the University of Warwick or any Coventry school.' }
      ]
    },
    {
      id: 'adults', tint: 'plain', eyebrow: 'Grown-ups',
      h2: 'Adult maths in Coventry: Functional Skills, GCSE resits and refreshers',
      lede: 'Adults make up a steady part of our Coventry learners. Many need a maths qualification; others want to help their children or feel sure of the numbers at work.',
      body: [
        { kind: 'three', cells: [
          { h3: 'GCSE maths resits', p: 'Our GCSE course welcomes resit candidates. We spend the first lessons finding what is secure, then rebuild the shaky topics in an order where each one helps the next.' },
          { h3: 'Functional Skills maths', p: 'Applied maths for work and further study, from measures and money to charts. Our <a class="ag-inline-link" href="/functional-skills-maths-tuition-online">Functional Skills maths page</a> has the detail.' },
          { h3: 'Everyday confidence', p: 'Fractions, percentages and area for home projects and work. See also our <a class="ag-inline-link" href="/online-maths-classes-for-adults-in-uk">adult maths classes</a>.' }
        ] },
        { kind: 'p', mt: true, html: 'Adults tend to love the counting-squares table. Many have measured a room for flooring or a garden for turf, and seeing that half a square per edge is a sensible rule, with the error to prove it, turns a school memory into a tool.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Building up',
    h2: 'From counting squares to the roundness of a ring road',
    lede: 'These four steps are the route through the geometry on this page. A newcomer\'s starting step is decided in the trial lesson.',
    table: { caption: 'A four-step route for Coventry learners, with the sign each step is secure', head: ['Usually', 'Step', 'Secure when the learner'], rows: [
      ['Years 3 and 4', '1. Tables and squares', 'Knows the tables and finds an area by counting squares'],
      ['Years 5 and 6', '2. Rectangles and composites', 'Separates perimeter from area and works out L-shapes'],
      ['Years 7 to 9', '3. Circles', 'Uses πr² and 2πr with sensible rounding'],
      ['Years 10 to 13', '4. Comparing shapes', 'Builds a ratio like 4πA ÷ P² and explains what it shows']
    ] },
    left: { h3: 'Arriving in Year 10 or 11', ps: [
      'A learner who starts late in GCSE can still improve a great deal, as long as weak foundations are fixed first. Algebra and fractions get attention before anything else.',
      'If the time left is shorter than the gap, we will say so honestly after the free lesson.'
    ] },
    right: { h3: 'What comes after', ps: [
      'Most go on to A level Maths, some with Further Maths. Learners who like data choose our <a class="ag-inline-link" href="/courses/statistics-probability-maths-course">statistics and probability course</a>.',
      'Others turn the shoelace method into code through <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'Course list',
    h2: 'All our maths courses for Coventry',
    lede: 'Four groups, from early number to university maths. Each card links to the full syllabus.',
    bands: [
      { num: 'I', h3: 'Primary school', sub: 'KS1 and KS2', courses: [
        { code: 'MCV / A1', slug: 'early-math-foundations', title: 'Early maths', blurb: 'Number, shape and pattern for the youngest learners.' },
        { code: 'MCV / A2', slug: 'elementary-mathematics-complete-masterclass', title: 'KS2 maths', blurb: 'Years 1 to 6 in full, SATs reasoning included.' },
        { code: 'MCV / A3', slug: 'mental-maths-mastery-kids', title: 'Mental arithmetic', blurb: 'Working sums out quickly and correctly.' },
        { code: 'MCV / A4', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths', blurb: 'Timed practice in the style of selective tests.' }
      ] },
      { num: 'II', h3: 'Secondary school', sub: 'KS3 to GCSE', courses: [
        { code: 'MCV / B1', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'KS3 maths', blurb: 'Algebra, geometry and number for Years 7 to 9.' },
        { code: 'MCV / B2', slug: 'gcse-mathematics-mastery', title: 'GCSE maths', blurb: 'AQA, Edexcel or OCR, at either tier.' },
        { code: 'MCV / B3', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'The international papers, start to finish.' },
        { code: 'MCV / B4', slug: 'algebra-foundations-masterclass', title: 'Algebra from scratch', blurb: 'For learners whose algebra never settled.' }
      ] },
      { num: 'III', h3: 'Sixth form and university', sub: 'Advanced maths', courses: [
        { code: 'MCV / C1', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'Pure, mechanics and statistics.' },
        { code: 'MCV / C2', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Problem solving for UKMT and olympiads.' },
        { code: 'MCV / C3', slug: 'college-mathematics-complete-masterclass', title: 'University maths', blurb: 'Calculus and linear algebra.' },
        { code: 'MCV / C4', slug: 'statistics-probability-maths-course', title: 'Statistics', blurb: 'Probability, distributions and inference.' }
      ] },
      { num: 'IV', h3: 'Maths for life', sub: 'Adults and enthusiasts', courses: [
        { code: 'MCV / D1', slug: 'complete-business-finance-mathematics-mastery', title: 'Money and business maths', blurb: 'Interest, budgets and growth.' },
        { code: 'MCV / D2', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data', blurb: 'The numbers behind analysis.' },
        { code: 'MCV / D3', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Geometry and data with Python.' },
        { code: 'MCV / D4', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus arithmetic', blurb: 'A visual way into mental calculation.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Timetable',
    h2: 'Maths lessons around the Coventry school week',
    lede: 'Our teachers work on Indian Standard Time, which never changes. Coventry runs four and a half hours behind India from spring to autumn and five and a half through the winter; every booking is confirmed on UK time.',
    slots: [
      { time: 'Weekday afternoons', l: 'Straight after school for primary and secondary.' },
      { time: 'Weekday evenings', l: 'Sixth formers and adults after work or college.' },
      { time: 'Weekends', l: 'Morning lessons for those who prefer them.' }
    ],
    cells: [
      { h3: 'Continuity', p: 'The same teacher each week, who knows the learner\'s habits.' },
      { h3: 'Family updates', p: 'Short notes after lessons about progress and next steps.' },
      { h3: 'Groups of five to ten', p: 'Everyone at one level, so no one waits and no one is lost.' },
      { h3: 'Maps and measurements', p: 'Ring roads, plans and real data alongside exam questions.' },
      { h3: 'Private lessons available', p: 'One to one for a specific gap or a close deadline.' },
      { h3: 'Understanding over speed', p: 'Learners explain a method before practising it.' }
    ]
  },

  projectsH2: 'What our learners go on to make',
  projectsLede: 'Students who started with measuring problems like the ring road have gone on to build the projects below. The <a class="ag-inline-link" href="/student-labs">student labs</a> have many more.',
  reviewsLede: 'What Coventry and other families wrote on Google, unedited.',

  fees: {
    h2: 'Fees',
    lede: 'Charged each month in US dollars, at the same rate for all countries outside India. No enrolment fee, no contract.',
    free: ['A genuine lesson at the right level', 'Straight feedback afterwards', 'No card details asked for'],
    group: ['Five to ten learners of one level', 'A consistent teacher', 'Homework checked and explained', 'Certificate when the course ends'],
    one: ['Private lessons with one teacher', 'Planned around specific gaps', 'Good for the run-up to exams']
  },

  faq: {
    eyebrow: 'Coventry maths questions',
    h2: 'What Coventry parents and learners ask us',
    items: [
      { q: 'What does a maths tutor in Coventry cost?', a: 'Nothing for the first lesson. Then USD 100 a month for a group of five to ten learners, or USD 150 a month for one-to-one lessons. There is no enrolment fee and you can stop at any time.' },
      { q: 'What is the difference between perimeter and area?', a: 'Perimeter is the distance around the outside of a shape, measured in units such as metres. Area is the amount of surface inside it, measured in square units such as square metres. The Coventry ring road has a perimeter of 3,677.6 metres and encloses 974,929 square metres.' },
      { q: 'Can online lessons really replace an in-person maths tutor?', a: 'Usually, yes. What matters is that a real teacher is present in real time and can watch the working unfold; ours follow each line on a shared board, so a slip in step two is fixed before it spoils step five.' },
      { q: 'Do you help adults retake GCSE maths?', a: 'Yes. Adults of any age join our GCSE course to resit. We find out what is already secure and then concentrate on the topics that will make the most difference.' },
      { q: 'Which GCSE boards do you cover?', a: 'AQA, Edexcel and OCR, at foundation and higher tier, plus the IGCSE papers for learners at schools that enter them.' },
      { q: 'Do you prepare children for Year 6 SATs maths?', a: 'We do. Primary lessons run right through KS2, so the explaining questions of the Year 6 papers get as much attention as the tables Year 4 pupils are checked on.' },
      { q: 'Can you teach Further Maths?', a: 'Yes. Sixth formers who take Further Maths with A level Maths can study the extra content with us, in a group or one to one.' },
      { q: 'What is the best time of year to start tuition?', a: 'As soon as a learner starts to struggle. Gaps in times tables or algebra are far quicker to close early than in the months before an exam, though we also help learners who start late.' },
      { q: 'Are you connected to the University of Warwick or the Origin Maths Hub?', a: 'No. We mention their public activities so families can find them. We have no link with either, or with any Coventry school.' },
      { q: 'Will you guarantee a grade?', a: 'No. We teach carefully and report progress honestly, but nobody can guarantee an exam grade and we do not pretend to.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for learners in Coventry',
    lede: 'Our maths pages by stage, our coding page for the city and nearby maths pages.',
    items: [
      { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition', p: 'Our national GCSE page.' },
      { href: '/further-maths-tuition-online', label: 'Further Maths tuition', p: 'The extra A level modules.' },
      { href: '/11-plus-maths-tuition-warwickshire', label: '11 plus maths in Warwickshire', p: 'The selective test used in Warwickshire.' },
      { href: '/best-coding-class-in-coventry', label: 'Coding classes in Coventry', p: 'Our Coventry page for coding and AI.' },
      { href: '/maths-tuition-in-birmingham', label: 'Maths tuition in Birmingham', p: 'Our Birmingham maths page and its canal project.' },
      { href: '/coding-classes-in-united-kingdom', label: 'UK index', p: 'Every UK page we publish.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson in Coventry',
    lede: 'Tell us the learner\'s age or school year, any exam board, and which topic feels hardest. The first lesson is a full lesson, and you get an honest view of where things stand afterwards.',
    readFirst: 'Browsing first? Look through our <a class="ag-inline-link" href="/courses">courses</a> or read <a class="ag-inline-link" href="/how-we-teach">how lessons work</a>.',
    note: 'WhatsApp is the fastest way to reach us. Our number starts with India\'s code because the team is in India; there is no Coventry office and all teaching is online.',
    formNote: 'You will not be asked for card details. We reply to agree a lesson time.'
  },

  footer: {
    cols: [
      { h4: 'Maths stages', links: [
        { href: '/ks2-maths-tuition-online', label: 'KS2 maths' },
        { href: '/ks3-maths-tuition-online', label: 'KS3 maths' },
        { href: '/a-level-maths-tuition-online', label: 'A level maths' },
        { href: '/functional-skills-maths-tuition-online', label: 'Functional Skills maths' }
      ] },
      { h4: 'Nearby', links: [
        { href: '/best-coding-class-in-coventry', label: 'Coding in Coventry' },
        { href: '/maths-tuition-in-leicester', label: 'Maths tuition in Leicester' },
        { href: '/11-plus-maths-tuition-warwickshire', label: '11 plus in Warwickshire' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK index' }
      ] }
    ],
    bottomRight: 'Coventry maths, live and online'
  },

  personalityCss: `
.ag-root.ag-mcv .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-mcv .ag-capsule { border-left-width: 5px; }
.ag-root.ag-mcv .ag-section-head h2 { max-width: 23ch; }
.ag-root.ag-mcv .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-mcv .ag-table td:nth-child(3) { font-variant-numeric: tabular-nums; }
.ag-root.ag-mcv .ag-spec dt { letter-spacing: 0.11em; }
.ag-root.ag-mcv .ag-three h3 { letter-spacing: -0.01em; }
.ag-root.ag-mcv .ag-slots { gap: 0.95rem; }
`,

  mustMention: ['Origin Maths Hub', 'Tudor Grange Academy', 'Zeeman Building', 'Ringway Swanswell', '3,677.6 metres', '974,929 square metres', '1,076,258', '845,291', '0.9059'],

  dossier: {
    curriculumAuthority: 'National curriculum for England (DfE); GCSE mathematics subject content (DfE, 2013), geometry item 17 on perimeters and areas of circles; multiplication tables check (gov.uk). Coventry is listed by the NCETM as an area of the Origin Maths Hub (lead school Tudor Grange Academy, Solihull).',
    localProject: 'OpenStreetMap A4053 ways (97), 1 October 2026; clockwise trunk carriageway closes as one loop of 44 ways, 131 points. Perimeter 3,677.6 m, area 974,929 m2 (shoelace), equal-perimeter circle 1,076,258 m2, square 845,291 m2, 4piA/P^2 0.9059. Counting squares: 200 m +2.57%, 100 m -1.53%, 50 m +0.52%, 25 m +0.07%. Centroid-to-loop 424 to 654 m; widest span 1,234 m; "pi" from equal-area radius 3.30.',
    requiredMentions: ['Origin Maths Hub', 'Tudor Grange Academy', 'Zeeman Building', 'Ringway Swanswell', '3,677.6 metres', '974,929 square metres', '1,076,258', '845,291', '0.9059'],
    sources: [
      { claim: 'NCETM, Origin Maths Hub: lead school Tudor Grange Academy, Solihull; areas Coventry, North Warwickshire, Nuneaton and Bedworth, Rugby, Solihull, Stratford-on-Avon, Warwick.', url: 'https://www.ncetm.org.uk/hubs/origin-maths-hub/' },
      { claim: 'University of Warwick Mathematics Institute, outreach events for schools: Saturday afternoon Maths Circles, Ri Masterclasses for Years 9 and 12, Year 12 problem solving classes, Maths Art family afternoon.', url: 'https://warwick.ac.uk/fac/sci/maths/general/outreach/schools-support/school-events/' },
      { claim: 'University of Warwick Mathematics Institute contacts: Zeeman Building, CV4 7AL; postcodes.io places CV4 7AL in Coventry.', url: 'https://warwick.ac.uk/fac/sci/maths/general/contacts/' },
      { claim: 'OpenStreetMap ways tagged ref A4053, one Overpass query, 1 October 2026.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'DfE GCSE mathematics subject content: "calculate: perimeters of 2D shapes, including circles; areas of circles".', url: 'https://www.gov.uk/government/publications/gcse-mathematics-subject-content-and-assessment-objectives' }
    ],
    rejectedClaims: [
      'Published length of the ring road or its construction history: no primary source read, so none is printed.',
      'Sum of both carriageways or a road-surface area: the anticlockwise carriageway did not close in the extract and a centreline is not tarmac.',
      'Admissions-test sessions listed by Warwick: excluded by the spec (no admissions content).',
      'Any Coventry school results or rankings: excluded by the spec.',
      'Named Warwick outreach staff: not printed.'
    ]
  }
};
