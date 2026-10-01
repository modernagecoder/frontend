'use strict';
// Maths tuition in Luton (ag- maths by city, UK cluster Phase 11, row 584).
// Read on 1 October 2026 by curl, quotes grepped from the raw text:
//  - NATS UK AIP, AIRAC 2026-10-01, EGGW AD 2.12 runway physical characteristics: RWY 07 true bearing 074.38°,
//    RWY 25 true bearing 254.40°, dimensions 2162 x 45 M; centre-line points marked THR: 515219.25N 0002300.91W (07),
//    515237.36N 0002116.15W (25). EGGW AD 2.2: magnetic variation 1.23°E (2027), annual change 0.17°E.
//  - FAA Aeronautical Information Manual, chapter 2 section 3: "The runway number is the whole number nearest
//    one‐tenth the magnetic azimuth of the centerline of the runway, measured clockwise from the magnetic north."
//  - NCETM, Enigma Maths Hub page: lead school Denbigh School, Milton Keynes; council areas listed include Luton.
//  - DfE, GCSE mathematics subject content (2013): "round numbers and measures to an appropriate degree of accuracy";
//    trigonometric ratios "apply them to find angles and lengths in right-angled triangles".
// Local project (our calculation): thresholds to decimal degrees 51.872014 N 0.383586 W and 51.877044 N 0.354486 W.
// Spherical initial bearing 07 to 25: 074.35°, 25 to 07: 254.37°; distance between the two points 2,074.6 m.
// Flat method with longitude scaled by cos(latitude): 559.4 m north, 1,997.7 m east, bearing 074.36°.
// Without the cos(latitude) factor: 080.19°. Magnetic: 74.38 - 1.23 = 73.15 -> 7.315 -> 07; 254.40 - 1.23 = 253.17
// -> 25. A westerly variation above 0.62° would make 074.38 true read above 075.0 magnetic, rounding to 08.
// Spine: why is Luton's runway called 07 and 25? Family: degrees, minutes and seconds to decimals, rounding to the
// nearest ten, right-angled trigonometry from north and east components, the cos(latitude) scale factor slip.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'LUTON MATHS', label: 'Maths tuition in Luton', blurb: 'GCSE, A level, KS2 and adult maths for Luton, with a trigonometry and rounding project on the airport runway numbers.' },
  slug: 'maths-tuition-in-luton',
  code: 'lum',
  accent: '#9C391E',
  accentRationale: 'Luton maths: a burnt brick orange (6.96:1 on white), chosen by hand at least 30 RGB units from every other maths-by-city page and 40 from our coding page for the town',
  pageType: 'city',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Maths tuition in Luton',
  title: 'Maths Tuition in Luton | GCSE, A Level and Adult Maths Online',
  description: 'Online maths tutor in Luton for ages 6 to 67: KS2 and SATs, KS3, GCSE, A level and adult maths, with a project on why the airport runway is numbered 07.',
  ogDescription: 'Why is the runway at Luton called 07 and 25? Degrees, rounding and trigonometry from the official runway data, and how we teach maths from Year 1 to adult.',
  twitterDescription: 'Maths tuition in Luton, live online: the runway points at 074.38 degrees true, so why is it Runway 07?',
  pageName: 'Maths Tuition in Luton',
  webPageDescription: 'Live online maths tuition for Luton learners aged 6 to 67, from KS2 and the SATs through KS3, GCSE and A level to adult maths and GCSE resits, with a trigonometry and rounding project on the London Luton Airport runway.',
  courseDescription: 'Live online maths teaching for Luton learners of every age, in level-matched groups of five to ten or one to one, following the national curriculum and the main GCSE and A level specifications.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Maths tuition in Luton',
  navLinks: [
    { href: '#stages', label: 'Stages' },
    { href: '#runway', label: 'Runway numbers' },
    { href: '#trig', label: 'Trigonometry' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Luton &middot; Maths for ages 6 to 67 &middot; Live online, groups or one to one',
  h1: 'Maths tuition in Luton',
  lede: 'Anyone who has flown from Luton has seen the big white numbers painted at each end of the runway: 07 at one end, 25 at the other. Where do they come from? The official UK aeronautical publication gives the runway a true bearing of 074.38 degrees. That does not round to 07. It rounds to 07 only after you allow for the difference between true north and magnetic north, which the same publication puts at 1.23 degrees east. One painted number, and inside it sit bearings, rounding, decimals and a correction that most adults have never heard of. This page shows how we teach maths to Luton learners, from Key Stage 2 to A level and adult study, using that runway as our example.',
  secondaryCta: { href: '#runway', label: 'Work out the runway number' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for a learner in Luton.',
  heroNote: 'A maths page only &middot; From primary to A level and adult learners &middot; Not affiliated with any Luton school or the airport',
  spec: [
    ['Who', 'Learners aged 6 to 67 in Luton'],
    ['Primary', 'KS2 maths, tables, SATs'],
    ['KS3', 'Years 7 to 9, angles and algebra'],
    ['GCSE', 'AQA, Edexcel, OCR, both tiers'],
    ['A level', 'Maths plus Further Maths topics'],
    ['Adults', 'GCSE resits and Functional Skills topics'],
    ['Delivery', 'Live online, 1 to 1 or classes of 5 to 10'],
    ['Project', 'Runway numbers and trigonometry']
  ],
  capsuleQ: 'Maths tuition in Luton, quickly',
  capsule: 'We teach maths to Luton learners aged 6 to 67, live online. Primary pupils build number sense and tables on the way to the Year 6 SATs. In secondary school the work moves through KS3 to GCSE (Foundation or Higher, for AQA, Edexcel or OCR) or IGCSE. Sixth formers study A level, with Further Maths topics if they want them, and adults come to resit GCSE, to cover Functional Skills content or simply to feel at ease with numbers. A learner can study privately or in a class of five to ten at one level. Our Luton project explains the runway numbers: the UK aeronautical publication gives a true bearing of 074.38 degrees and a magnetic variation of 1.23 degrees east, so the magnetic direction is 073.15 degrees, which rounds to Runway 07. The opening lesson is free of charge. Continuing means USD 100 monthly for a shared class or USD 150 monthly for a teacher of your own.',

  picks: {
    eyebrow: 'The three most asked about in Luton',
    h2: 'Where most Luton learners start',
    lede: 'GCSE, A level and KS2 maths account for most first enquiries from Luton. Our other courses are listed below.',
    items: [
      { course: 'gcse-mathematics-mastery', code: 'LTN / 1', title: 'GCSE maths tuition', note: 'Bearings, trigonometry and rounding sit on every GCSE paper; we teach them to the tier and board the school uses.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'LTN / 2', title: 'A level maths tuition', note: 'Vectors, radians and mechanics for sixth formers, with Further Maths topics for those who want them.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'LTN / 3', title: 'KS2 maths tuition', note: 'Times tables, place value and the reasoning that the Year 6 SATs ask for, built carefully from Year 3.' }
    ]
  },

  sections: [
    {
      id: 'stages', tint: 'tint', eyebrow: 'At every stage',
      h2: 'Maths tutor in Luton for school and adult learners',
      lede: 'Luton schools teach the national curriculum for England. This is how our lessons shift as a learner moves through it.',
      body: [
        { kind: 'table', caption: 'Maths stages in Luton and where our lessons concentrate', head: ['Stage', 'Ages', 'Where we concentrate'], rows: [
          ['KS1', '5 to 7', 'Counting, number bonds, simple shapes and turns.'],
          ['KS2', '7 to 11', 'Angles measured in degrees, decimals to two places, every table up to 12, and the reasoning style of the SATs at the end of Year 6.'],
          ['KS3', '11 to 14', 'Angle facts, bearings, rounding, ratio and the start of algebra proper.'],
          ['GCSE', '14 to 16', 'Both tiers for the three main boards; trigonometry and harder bearings for Higher.'],
          ['A level', '16 to 18', 'Pure, statistics and mechanics, and Further Maths topics on request.'],
          ['Adults', '18 to 67', 'Resitting GCSE, practical Functional Skills content, and numbers for the workplace.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Primary, times tables and SATs',
          left: [
            'Primary children in Luton get most from us when they are secure with number. We teach the tables as a web of related facts, so 9 × 7 comes from 10 × 7 minus 7, and we keep checking them until they are automatic.',
            'Angles first appear properly in KS2. A child who understands that a full turn is 360 degrees and a right angle is 90 is already halfway to the runway question on this page.'
          ],
          rightH3: 'Secondary and sixth form',
          right: [
            'Bearings, rounding and trigonometry all arrive between Year 7 and Year 11, and they are often taught as separate tricks. We teach them together, because a real problem like a runway number needs all three at once.',
            'Each stage has its own national page with us, starting at <a class="ag-inline-link" href="/ks2-maths-tuition-online">primary (KS2)</a> and running through <a class="ag-inline-link" href="/ks3-maths-tuition-online">lower secondary (KS3)</a>, <a class="ag-inline-link" href="/gcse-maths-tuition-online">GCSE</a> and <a class="ag-inline-link" href="/a-level-maths-tuition-online">A level</a> to <a class="ag-inline-link" href="/further-maths-tuition-online">Further Maths tuition</a>.'
          ] },
        { kind: 'source', html: 'The age bands are the ones normally used in English schools. Details of the statutory tables check for Year 4 are published on <a class="ag-inline-link" href="https://www.gov.uk/government/collections/multiplication-tables-check" rel="noopener" target="_blank">the government website</a>.' }
      ]
    },
    {
      id: 'runway', tint: 'plain', eyebrow: 'The Luton project',
      h2: 'Why is the runway at Luton called 07 and 25?',
      lede: 'Two painted numbers, one official table and a rule written in a pilots\' manual. Together they make a neat lesson in rounding.',
      body: [
        { kind: 'two',
          left: [
            'NATS publishes the UK Aeronautical Information Publication, the official reference pilots use. Its entry for London Luton Airport, in the edition dated 1 October 2026, lists one runway, 2,162 metres long and 45 metres wide. It gives the direction of Runway 07 as a true bearing of 074.38 degrees and Runway 25 as 254.40 degrees.',
            'True bearings are measured clockwise from true north, the direction of the North Pole. A compass does not point there. It points to magnetic north, and the publication says that at Luton the difference, called the magnetic variation, is 1.23 degrees east.'
          ],
          right: [
            'The rule for runway numbers is written in the Aeronautical Information Manual of the US Federal Aviation Administration: "The runway number is the whole number nearest one‐tenth the magnetic azimuth of the centerline of the runway, measured clockwise from the magnetic north." Azimuth here simply means bearing.',
            'So the method is: change the true bearing to a magnetic one, divide by ten, and round to the nearest whole number. Every step is school maths.'
          ] },
        { kind: 'table', mt: true, caption: 'From true bearing to painted runway number, our working from the UK AIP figures', head: ['Step', 'Runway 07 end', 'Runway 25 end'], rows: [
          ['True bearing (published)', '074.38°', '254.40°'],
          ['Subtract the easterly variation, 1.23°', '073.15°', '253.17°'],
          ['Divide by 10', '7.315', '25.317'],
          ['Round to the nearest whole number', '7', '25'],
          ['Painted on the runway', '07', '25']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why subtract?',
          left: [
            'With an easterly variation, magnetic north lies 1.23 degrees clockwise of true north. A direction measured from magnetic north therefore reads 1.23 degrees less than the same direction measured from true north. With a westerly variation you would add instead.',
            'This is the step most learners get backwards, and it is worth drawing: two north lines, a small angle between them, and the runway line crossing both.'
          ],
          rightH3: 'How close was it to 08?',
          right: [
            'The magnetic bearing 073.15 is 1.85 degrees away from 075, the point where rounding would tip it to 08. Turn the question round: if the variation had been more than 0.62 degrees west, the magnetic bearing would have been above 075.00, and the paint would say 08.',
            'The publication also gives an annual change of 0.17 degrees east. Magnetic north moves, so a runway number is a rounded snapshot of something that drifts. We make no claim about past or future numbers at Luton; we only show the arithmetic.'
          ] },
        { kind: 'source', html: 'Data: <a class="ag-inline-link" href="https://nats-uk.ead-it.com/cms-nats/opencms/en/Publications/AIP/" rel="noopener" target="_blank">NATS, UK AIP</a>, AIRAC 1 October 2026, EGGW AD 2.2 and AD 2.12; rule: <a class="ag-inline-link" href="https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html" rel="noopener" target="_blank">FAA Aeronautical Information Manual, chapter 2, section 3</a>. Both read on 1 October 2026. The working in the table is ours. This page is for maths teaching only and must never be used for navigation.' }
      ]
    },
    {
      id: 'trig', tint: 'deep', eyebrow: 'Checking the bearing ourselves',
      h2: 'Degrees, minutes and seconds, a right-angled triangle, and one easy slip',
      lede: 'The publication also gives the latitude and longitude of the two runway thresholds. From those we can work out the bearing ourselves and see whether we agree.',
      body: [
        { kind: 'two',
          left: [
            'The Runway 07 threshold is listed as 51° 52′ 19.25″ N, 0° 23′ 00.91″ W, and the Runway 25 threshold as 51° 52′ 37.36″ N, 0° 21′ 16.15″ W. To use them we first turn degrees, minutes and seconds into decimals: 51° 52′ 19.25″ is 51 + 52 ÷ 60 + 19.25 ÷ 3,600 = 51.872014 degrees.',
            'Next we change the differences into metres. Going north, one degree of latitude is roughly 111.2 kilometres everywhere. Going east, one degree of longitude shrinks as you move away from the equator, by a factor of cos(latitude), about 0.618 at Luton.'
          ],
          right: [
            'Doing that, the second threshold lies 559.4 metres north and 1,997.7 metres east of the first. That is a right-angled triangle. The DfE content says GCSE learners should know the trigonometric ratios and "apply them to find angles and lengths in right-angled triangles". Here tan θ = 1,997.7 ÷ 559.4, so θ = 74.36 degrees from north.',
            'The published figure is 074.38. A more exact method on a sphere gives 074.35. Our three answers agree to within 0.03 of a degree, which is a satisfying check on both the data and the method.'
          ] },
        { kind: 'table', mt: true, caption: 'Four ways to get the bearing between the Luton thresholds (our calculation from the UK AIP coordinates)', head: ['Method', 'Bearing', 'Comment'], rows: [
          ['Published true bearing', '074.38°', 'The official figure in the UK AIP.'],
          ['Sphere formula', '074.35°', 'A level and beyond: great-circle bearing.'],
          ['Flat triangle with cos(latitude)', '074.36°', 'GCSE trigonometry with one sensible correction.'],
          ['Flat triangle, cos(latitude) forgotten', '080.19°', 'The slip: east distances come out too large.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The slip that turns 07 into 08',
          left: [
            'Treat a degree of longitude as if it were the same length as a degree of latitude, and the east distance comes out about 1.6 times too big. The bearing then comes out at 080.19 degrees. Subtract the variation and you get 078.96, which rounds to 08: a wrong runway number from one missing factor.',
            'This is why we ask learners to estimate before they calculate. A runway that looks more east-north-east than east should not come out at 80 degrees.'
          ],
          rightH3: 'Two more things to notice',
          right: [
            'The two thresholds are 2,074.6 metres apart by our calculation, less than the published runway length of 2,162 metres, because the threshold markings do not sit at the very ends of the paved runway.',
            'The two published bearings, 074.38 and 254.40, differ by 180.02 degrees, not exactly 180. On a curved Earth the bearing at the far end of a straight path is very slightly different, a fact that A level students find surprising and satisfying.'
          ] },
        { kind: 'source', html: 'Coordinates from the NATS UK AIP, EGGW AD 2.12. GCSE wording from <a class="ag-inline-link" href="https://www.gov.uk/government/publications/gcse-mathematics-subject-content-and-assessment-objectives" rel="noopener" target="_blank">DfE, GCSE mathematics subject content</a>. All conversions, distances and bearings are Modern Age Coders calculations.' }
      ]
    },
    {
      id: 'local', tint: 'tint', eyebrow: 'Maths around Luton',
      h2: 'Maths beyond the classroom in Luton',
      lede: 'Public programmes and national papers a Luton family may hear about. We run none of them.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Enigma Maths Hub', p: 'On the NCETM website, Luton appears among the council areas served by the Enigma Maths Hub, whose lead school is in Milton Keynes. Maths Hubs help teachers and schools; they do not teach children directly.' },
          { h3: 'UKMT challenges', p: 'Each year many UK secondary schools put pupils in for the UKMT maths challenge papers, which favour thought over speed. Our approach to coaching for them is on the <a class="ag-inline-link" href="/maths-challenges">maths challenges page</a>.' },
          { h3: 'Times tables in Year 4', p: 'Every Year 4 pupil at a state-funded school in England takes the multiplication tables check. Our <a class="ag-inline-link" href="/multiplication-tables-check-year-4-practice">Year 4 practice page</a> has more.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'Learners who enjoy the runway puzzle usually enjoy competition problems, because both start with a simple-looking question and reward a careful look at what is really being asked.',
            'Our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a> lists national events by age, and the <a class="ag-inline-link" href="/intermediate-mathematical-olympiad-cayley-hamilton-maclaurin-preparation">Intermediate Olympiad page</a> covers the next round.'
          ],
          right: [
            'All lessons are live online, so a learner in Stopsley, Leagrave, Bury Park or Farley Hill joins from home. Classes are formed by level, so classmates may live in Milton Keynes or Manchester.',
            'Adults who travel through the airport often find the runway question the most memorable maths they have done in years.'
          ] },
        { kind: 'source', html: 'Hub information comes from the <a class="ag-inline-link" href="https://www.ncetm.org.uk/hubs/enigma-maths-hub/" rel="noopener" target="_blank">Enigma Maths Hub page on the NCETM site</a>, checked on the first of October 2026. Modern Age Coders has no tie to the NCETM, any Maths Hub, the UKMT, London Luton Airport, NATS or any school in Luton.' }
      ]
    },
    {
      id: 'adults', tint: 'plain', eyebrow: 'Learning as an adult',
      h2: 'Adult maths in Luton, including GCSE resits',
      lede: 'Adults make up a real share of our learners. Many need a GCSE pass for work or study; others want to stop feeling anxious about numbers.',
      body: [
        { kind: 'three', cells: [
          { h3: 'GCSE maths resits', p: 'We rebuild the course from your weakest area, at a pace that fits round work. The exam is entered through a college or exam centre, and we prepare you for it.' },
          { h3: 'Functional Skills topics', p: 'Practical maths: measures, percentages, money, timetables and charts. Read more on our <a class="ag-inline-link" href="/functional-skills-maths-tuition-online">Functional Skills maths page</a>.' },
          { h3: 'Maths at work', p: 'Rounding sensibly, reading tables of figures and checking a calculation by estimating first, the same habits the runway project builds.' }
        ] },
        { kind: 'p', mt: true, html: 'A common story from Luton adults: they were handed rules at school but never the reasons. We do the opposite, and the rules tend to stick as a result. Our <a class="ag-inline-link" href="/online-maths-classes-for-adults-in-uk">adult maths page</a> says more.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Steps we follow',
    h2: 'Four steps from right angles to trigonometry',
    lede: 'Start wherever the learner is; the free lesson tells us where that is.',
    table: { caption: 'From turns and degrees to bearings with trigonometry, and what shows each step has landed', head: ['Typical years', 'Step', 'Shows it has landed when the learner'], rows: [
      ['Years 3 to 5', '1. Turns and degrees', 'Knows a right angle is 90 degrees and a full turn 360'],
      ['Years 6 to 8', '2. Bearings', 'Gives a bearing as three figures, measured clockwise from north'],
      ['Years 8 to 10', '3. Rounding with purpose', 'Rounds to the accuracy a question needs and explains why'],
      ['Years 10 to 13', '4. Trigonometry', 'Finds an angle from two sides and checks it with an estimate']
    ] },
    left: { h3: 'Late starters', ps: [
      'Learners who join us in Year 11 are welcome. We check angle facts and fractions first, because trigonometry questions usually fail there.',
      'If there is more to rebuild than time allows, we say so honestly after the first lesson.'
    ] },
    right: { h3: 'What comes next', ps: [
      'Learners who enjoy this often go on to <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a>, where the bearing calculation becomes a few lines of Python, or to <a class="ag-inline-link" href="/courses/statistics-probability-maths-course">statistics and probability</a>.',
      'Those who love a puzzle tend to try competition maths.'
    ] }
  },

  catalogue: {
    eyebrow: 'Course list',
    h2: 'Popular maths courses for Luton learners',
    lede: 'First come the courses UK families look for most: GCSE, A level, 11 plus and IGCSE. Open a card to see its syllabus.',
    bands: [
      { num: 'I', h3: 'Most searched', sub: 'Exam preparation', courses: [
        { code: 'LUM / A1', slug: 'gcse-mathematics-mastery', title: 'GCSE maths', blurb: 'Foundation and Higher for the main boards.' },
        { code: 'LUM / A2', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'All three strands of the A level.' },
        { code: 'LUM / A3', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths', blurb: 'Selective-test maths for Years 5 and 6.' },
        { code: 'LUM / A4', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'The international GCSE papers.' }
      ] },
      { num: 'II', h3: 'Primary school', sub: 'KS1 and KS2', courses: [
        { code: 'LUM / B1', slug: 'elementary-mathematics-complete-masterclass', title: 'KS2 maths', blurb: 'Years 1 to 6, ending with the SATs.' },
        { code: 'LUM / B2', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Arithmetic in the head, done reliably.' },
        { code: 'LUM / B3', slug: 'early-math-foundations', title: 'Early number', blurb: 'For children aged 6 and 7.' },
        { code: 'LUM / B4', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus', blurb: 'Bead-frame sums for younger learners.' }
      ] },
      { num: 'III', h3: 'Secondary school', sub: 'KS3 and further', courses: [
        { code: 'LUM / C1', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'KS3 maths', blurb: 'Angles, bearings, algebra and ratio.' },
        { code: 'LUM / C2', slug: 'algebra-foundations-masterclass', title: 'Algebra again', blurb: 'For algebra that never quite clicked.' },
        { code: 'LUM / C3', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data handling and chance.' },
        { code: 'LUM / C4', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'For learners entering UKMT challenges.' }
      ] },
      { num: 'IV', h3: 'Adults', sub: 'Work and study', courses: [
        { code: 'LUM / D1', slug: 'college-mathematics-complete-masterclass', title: 'University maths', blurb: 'For adults returning to higher study.' },
        { code: 'LUM / D2', slug: 'complete-business-finance-mathematics-mastery', title: 'Business maths', blurb: 'Percentages, interest and costs.' },
        { code: 'LUM / D3', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data jobs', blurb: 'Averages, spread and regression for analysts.' },
        { code: 'LUM / D4', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Pattern-based tricks for quick arithmetic.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Our timetable',
    h2: 'Lessons that fit round school and work in Luton',
    lede: 'Teaching is done from India. In winter India runs 5 hours 30 minutes ahead of Luton, and from late March to late October the gap is 4 hours 30 minutes. We always quote slots in UK time.',
    slots: [
      { time: 'Weekdays from 4pm', l: 'Children in primary school or Years 7 to 9.' },
      { time: 'Weekday evenings', l: 'Exam-year pupils, sixth formers and working adults.' },
      { time: 'Weekend mornings', l: 'Learners of every age.' }
    ],
    cells: [
      { h3: 'The same teacher', p: 'One teacher follows the learner, week after week.' },
      { h3: 'Updates for families', p: 'A short note after lessons: what clicked, what to revisit.' },
      { h3: 'Classes of five to ten', p: 'Grouped by level so nobody is lost or bored.' },
      { h3: 'Real-world numbers', p: 'Runway data, timetables and census figures as well as past papers.' },
      { h3: 'Private when needed', p: 'One to one before an exam or for a particular gap.' },
      { h3: 'Estimate first', p: 'We train learners to predict an answer before calculating it.' }
    ]
  },

  projectsH2: 'Student projects',
  projectsLede: 'Learners who began with problems like this one went on to build the projects shown here. The <a class="ag-inline-link" href="/student-labs">student labs</a> include many others.',
  reviewsLede: 'Copied exactly from reviews left on our Google profile by families and learners.',

  fees: {
    h2: 'Fees',
    lede: 'A single monthly price in US dollars for everyone outside India, with no registration fee and no lock-in.',
    free: ['A genuine lesson at the right level', 'Our honest assessment afterwards', 'No payment details needed'],
    group: ['Five to ten learners at one level', 'A dedicated teacher', 'Homework reviewed together', 'Certificate when you finish'],
    one: ['Individual lessons', 'Built around one learner', 'Ideal before exams']
  },

  faq: {
    eyebrow: 'Luton maths questions',
    h2: 'Maths tuition in Luton: common questions',
    items: [
      { q: 'What is a bearing in maths?', a: 'A bearing is a direction given as an angle measured clockwise from north, always written with three figures. East is 090 degrees, south is 180 and a direction just north of east might be 074.' },
      { q: 'What do your Luton maths lessons cost?', a: 'Lesson one is on us. To continue, Luton families pay USD 100 per month for a class seat, or USD 150 per month when the teacher works with their child alone. Nothing is charged to register.' },
      { q: 'Which exam board will a GCSE maths tutor follow?', a: 'Whichever one the school uses, whether AQA, Edexcel or OCR, at Foundation or Higher tier. Pupils at schools that sit IGCSE are taught to that syllabus instead.' },
      { q: 'I failed GCSE maths at school. Is it too late to pass it?', a: 'Not at all. Plenty of our Luton learners resit in their twenties, thirties or later. We find the topics that let you down and rebuild from there; a college or exam centre handles the entry.' },
      { q: 'My child is in Year 5. Is that a good time to start on SATs maths?', a: 'Yes. Year 5 leaves room to secure fractions, decimals and long multiplication properly, so Year 6 becomes practice rather than panic. Earlier still, the Year 4 tables check is a useful milestone.' },
      { q: 'Can a sixth former in Luton study Further Maths topics with you?', a: 'Yes. Alongside single A level maths, a confident student can take on topics like complex numbers, matrices and further mechanics. Mention the board and modules when booking.' },
      { q: 'What is the best way to learn trigonometry?', a: 'Start with right-angled triangles drawn to scale, name the sides from the angle you care about, and check every answer against a rough estimate.' },
      { q: 'Is the UKMT maths challenge worth preparing for?', a: 'For a child who enjoys puzzles, yes: the problems train careful reading and clear reasoning, which help in every exam. Entries go through school; our competition course covers the thinking.' },
      { q: 'Do I need to travel anywhere for lessons?', a: 'No travel at all. Our teaching happens over live video, so a laptop or tablet at home in Luton is all a learner needs.' },
      { q: 'Can you promise my child will pass?', a: 'We will not make that promise, because nobody can keep it honestly. What we promise is careful teaching and a clear account of progress.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related',
    h2: 'More for Luton learners',
    lede: 'National maths pages, our coding page for the town and a nearby maths page.',
    items: [
      { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition', p: 'Both tiers and every board.' },
      { href: '/a-level-maths-tuition-online', label: 'A level maths tuition', p: 'Sixth form maths in full.' },
      { href: '/functional-skills-maths-tuition-online', label: 'Functional Skills maths', p: 'Practical maths for adults.' },
      { href: '/best-coding-class-in-luton', label: 'Coding classes in Luton', p: 'Our coding page for Luton.' },
      { href: '/maths-tuition-in-milton-keynes', label: 'Maths tuition in Milton Keynes', p: 'The same Maths Hub area, a grid road project.' },
      { href: '/coding-classes-in-united-kingdom', label: 'The UK index', p: 'All our UK pages.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson in Luton',
    lede: 'Send us the learner\'s year group and the part of maths that causes the most groans at home. We teach a genuine lesson first and then give you a straight account of the starting point.',
    readFirst: 'Want to look around first? There is our <a class="ag-inline-link" href="/courses">course catalogue</a> and an explanation of <a class="ag-inline-link" href="/how-we-teach">our teaching</a>.',
    note: 'WhatsApp is quickest. The number carries India\'s code because our teachers are based there; we have no Luton premises and every lesson is online.',
    formNote: 'No card required. We will reply to agree a time.'
  },

  footer: {
    cols: [
      { h4: 'Maths', links: [
        { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition' },
        { href: '/ks2-maths-tuition-online', label: 'KS2 maths tuition' },
        { href: '/further-maths-tuition-online', label: 'Further maths tuition' },
        { href: '/online-maths-classes-for-adults-in-uk', label: 'Maths for adults' }
      ] },
      { h4: 'Nearby', links: [
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/best-coding-class-in-luton', label: 'Coding in Luton' },
        { href: '/maths-tuition-in-milton-keynes', label: 'Maths tuition in Milton Keynes' },
        { href: '/maths-tuition-in-cambridge', label: 'Maths tuition in Cambridge' }
      ] }
    ],
    bottomRight: 'Maths lessons for every age, online'
  },

  personalityCss: `
.ag-root.ag-lum .ag-hero h1 { letter-spacing: -0.019em; }
.ag-root.ag-lum .ag-capsule { border-left-width: 6px; }
.ag-root.ag-lum .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-lum .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-lum .ag-table td:nth-child(2) { font-variant-numeric: tabular-nums; }
.ag-root.ag-lum .ag-spec dt { letter-spacing: 0.12em; }
.ag-root.ag-lum .ag-three h3 { letter-spacing: -0.006em; }
.ag-root.ag-lum .ag-slots { gap: 1.1rem; }
`,

  mustMention: ['074.38 degrees', '254.40 degrees', '1.23 degrees east', '073.15 degrees', '080.19 degrees', '1,997.7 metres east', '2,074.6 metres', 'Aeronautical Information Manual', 'London Luton Airport'],

  dossier: {
    curriculumAuthority: 'National curriculum for England (DfE); GCSE mathematics subject content (DfE, 2013), rounding, bearings and trigonometric ratios. Luton schools sit in the Enigma Maths Hub area (NCETM).',
    localProject: 'UK AIP (AIRAC 2026-10-01) EGGW: RWY 07 true 074.38, RWY 25 true 254.40, 2,162 x 45 m, MAG VAR 1.23 E (2027), annual change 0.17 E. Magnetic 073.15 and 253.17, divided by 10 and rounded, 07 and 25. From threshold coordinates: sphere 074.35, flat with cos(latitude) 074.36 (559.4 m N, 1,997.7 m E), flat without 080.19 (would round to 08 after variation). Threshold separation 2,074.6 m. Westerly variation above 0.62 would give 08.',
    requiredMentions: ['074.38 degrees', '254.40 degrees', '1.23 degrees east', '073.15 degrees', '080.19 degrees', '1,997.7 metres east', '2,074.6 metres', 'Aeronautical Information Manual', 'London Luton Airport'],
    sources: [
      { claim: 'NATS UK AIP, AIRAC 2026-10-01, EGGW AD 2.12 runway physical characteristics and AD 2.2 magnetic variation.', url: 'https://www.aurora.nats.co.uk/htmlAIP/Publications/2026-10-01-AIRAC/html/eAIP/EG-AD-2.EGGW-en-GB.html' },
      { claim: 'FAA Aeronautical Information Manual 2-3-3: runway number is the whole number nearest one-tenth the magnetic azimuth.', url: 'https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html' },
      { claim: 'NCETM, Enigma Maths Hub: council areas include Luton; lead school Denbigh School, Milton Keynes.', url: 'https://www.ncetm.org.uk/hubs/enigma-maths-hub/' },
      { claim: 'DfE GCSE mathematics subject content: rounding; bearings; trigonometric ratios in right-angled triangles.', url: 'https://www.gov.uk/government/publications/gcse-mathematics-subject-content-and-assessment-objectives' }
    ],
    rejectedClaims: [
      'Any statement that the Luton runway was once numbered 08 and 26, or when it changed: not checked against a primary source, so not printed.',
      'Back-projecting the magnetic variation to past years: the annual change is not constant over decades, so no past-year figure is printed.',
      'Any navigational use of these figures: the page says they are for teaching only.',
      'Any claim about airport noise, flights or passenger numbers: not relevant to the maths and not printed.',
      'Any statement about Luton exam results or school performance: excluded by the spec.'
    ]
  }
};
