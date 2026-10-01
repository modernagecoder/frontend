'use strict';
// Maths tuition in Birmingham (ag- maths by city, UK cluster Phase 11 pilot).
// Read on 1 October 2026 by curl, quotes grepped from the raw text:
//  - NCETM, Central Maths Hub page: "The Lead School for the hub is Bishop Challoner Catholic College, Birmingham.";
//    local council areas listed: Birmingham, Dudley, Sandwell.
//  - University of Birmingham, School of Mathematics, about page: "The school is situated in the Watson Building on the main
//    Edgbaston campus of University of Birmingham." Outreach page: "The School of Mathematics hosts the regional office of the
//    Advanced Mathematics Support Programme"; Birmingham Popular Maths Lectures, "free of charge", hybrid, in person "in
//    Lecture Theatre A in the Watson Building", "The lecturers cater to individuals studying A Level Mathematics and advanced
//    GCSE students."; Maths Big Quiz, Year 10, "allowing each school to bring a maximum of 24 students organised into teams
//    of 4". (The outreach officer is named on the page; not printed.)
//  - Canal & River Trust, "Fascinating facts about canals and rivers": "Most people know that Birmingham has more canals than
//    Venice" and "the Birmingham Canal Navigations extend to just over 100 miles, including two long tunnels, several
//    aqueducts and even a waterway version of Spaghetti Junction."
//  - DfE, GCSE mathematics subject content (2013), number items 15 and 16: "use inequality notation to specify simple error
//    intervals due to truncation or rounding"; "apply and interpret limits of accuracy, including upper and lower bounds".
// Local project (our calculation): one Overpass query, 1 October 2026 (osm_base 08:47:35Z). Ways tagged waterway=canal
// inside the Birmingham admin_level 8 boundary: 275 ways, 2,049 points, 64.20 km = 39.89 miles (1 mile = 1.609344 km);
// in tunnels 3.78 km, open 60.42 km; two ways tagged usage=spillway 596.9 m; ways named Basin or Wharf 914.6 m.
// By name: Birmingham and Fazeley Canal 14.25 km, Grand Union Canal 13.91, Worcester & Birmingham Canal 10.12,
// Stratford-upon-Avon Canal 6.37, Tame Valley Canal 6.05. 26 distinct names, 11 of them canal names (not a tunnel,
// basin, wharf or aqueduct). Chord thinning: every point 64.20 km, every 2nd 64.15, 4th 63.93, 8th 63.59, 16th 62.75,
// end points only 59.73. Venice: waterway=canal inside the comune of Venezia 491.29 km (607 ways); inside the
// Venezia-Murano-Burano municipality area 317.56 km (430 ways); inside our rectangle round the historic city
// (45.4245 to 45.4475 N, 12.300 to 12.370 E, by way centroid) 77.41 km = 48.10 miles (233 ways, 188 names), of which
// ways named Rio, Rielo or Canal Grande 49.62 km = 30.83 miles (187 ways, 165 distinct names).
// Spine: does Birmingham have more canals than Venice? Family: measuring a length, units, error intervals and bounds,
// chord approximation of a curve, and how the definition decides the answer.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'BIRMINGHAM MATHS', label: 'Maths tuition in Birmingham', blurb: 'Maths for Birmingham learners from primary to A level and beyond, with a measuring project on the city canals and the famous claim about Venice.' },
  slug: 'maths-tuition-in-birmingham',
  code: 'mtb',
  accent: '#246357',
  accentRationale: 'Birmingham maths: a muted canal-water green, chosen by hand and kept clear of the navy on our Birmingham 11 plus page',
  pageType: 'city',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Maths tuition in Birmingham',
  title: 'Maths Tuition in Birmingham | GCSE, A Level and 11 Plus Online',
  description: 'Online maths tutor in Birmingham, ages 6 to 67: KS2 and SATs, 11 plus, KS3, GCSE, A level and adult maths, with a project measuring canals against Venice.',
  ogDescription: 'Does Birmingham really have more canals than Venice? A measuring project, and how we teach maths to Birmingham learners from age 6 to adult.',
  twitterDescription: 'Birmingham maths tuition, live online: we measured the city canals and Venice, and the answer depends on what you count.',
  pageName: 'Maths Tuition in Birmingham',
  webPageDescription: 'Live online mathematics tuition for learners in Birmingham aged 6 to 67, from primary maths and Key Stage 3 to GCSE, A level and adult maths, with a measurement project on the canals of Birmingham and Venice.',
  courseDescription: 'Live online maths lessons for Birmingham learners at every stage, taught in level-matched groups of five to ten or one to one, following the national curriculum and the GCSE and A level specifications.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Maths tuition in Birmingham',
  navLinks: [
    { href: '#levels', label: 'Levels' },
    { href: '#canals', label: 'Canals' },
    { href: '#bounds', label: 'Bounds' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Birmingham &middot; Maths for ages 6 to 67 &middot; Taught live online',
  h1: 'Maths tuition in Birmingham',
  lede: 'Every Birmingham child hears it sooner or later: the city has more canals than Venice. The Canal &amp; River Trust repeats it too. So we got out a map and measured. Inside the city boundary, the canal lines on OpenStreetMap add up to 64.20 kilometres, which is 39.89 miles. The canals of central Venice, measured the same way inside a rectangle we drew round the historic city, come to 49.62 kilometres. So Birmingham wins? Only if you count length. Count names instead, and that rectangle holds 165 differently named Venetian canals against 11 canal names inside Birmingham. Whether the saying is true depends entirely on what you decide to measure, and deciding what to measure is where real maths starts. That is how we teach maths in Birmingham, from first number bonds to A level calculus.',
  secondaryCta: { href: '#canals', label: 'See the canal measurements' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for a learner in Birmingham.',
  heroNote: 'Maths only on this page &middot; Every stage from Year 1 to adult &middot; Independent of every Birmingham school and the university',
  spec: [
    ['Ages', '6 to 67'],
    ['Early years and primary', 'Number bonds to the Year 6 tests'],
    ['Lower secondary', 'Key Stage 3 algebra, ratio and geometry'],
    ['GCSE', 'Foundation or Higher, AQA, Edexcel or OCR'],
    ['Grown-ups', 'GCSE resits, brush-ups, workplace maths'],
    ['How', 'Live video, 5 to 10 in a class, or private'],
    ['Sixth form', 'A level Maths and Further Maths'],
    ['City project', 'Canal length, Birmingham against Venice']
  ],
  capsuleQ: 'Maths tuition in Birmingham, in brief',
  capsule: 'Modern Age Coders is an online maths tutor for Birmingham learners aged 6 to 67: KS2 number, times tables and the Year 6 SATs, 11 plus maths, Key Stage 3, GCSE maths at either tier for AQA, Edexcel or OCR, IGCSE, A level Maths and Further Maths, and adults sitting a GCSE maths resit, brushing up for work or helping their children. Classes are matched by level and hold five to ten learners, or a learner can have a teacher to themselves. We follow the national curriculum and the exam specifications, and we build lessons on real measurements. Our Birmingham example: canal lines inside the city boundary measure 64.20 km on OpenStreetMap, against 49.62 km for the named canals of central Venice, yet Venice has far more separate canals. The first lesson is on us; afterwards a seat in a class is USD 100 per month and a private teacher USD 150 per month.',

  picks: {
    eyebrow: 'Most Birmingham families start here',
    h2: 'GCSE, A level and 11 plus maths',
    lede: 'The three courses Birmingham families ask about most. Primary, KS3 and adult courses sit in the full list below.',
    items: [
      { course: 'gcse-mathematics-mastery', code: 'BRUM / 1', title: 'GCSE maths', note: 'Either tier, any English board, with rounding, bounds and error intervals treated as skills in their own right.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'BRUM / 2', title: 'A level maths', note: 'Pure maths, mechanics and statistics, with proper attention to why a method works.' },
      { course: '11-plus-maths-preparation-course-uk', code: 'BRUM / 3', title: '11 plus maths', note: 'Quick, accurate arithmetic and problem solving for children heading for a grammar school test in Year 6.' }
    ]
  },

  sections: [
    {
      id: 'levels', tint: 'tint', eyebrow: 'From Year 1 to adult',
      h2: 'Maths tutor in Birmingham for every level, KS1 to A level',
      lede: 'Birmingham schools prepare children for the same Year 6 tests and the same GCSE and A level exams as the rest of England, so these are the levels we teach to.',
      body: [
        { kind: 'table', caption: 'Levels we teach in Birmingham, with the skill at the centre of each', head: ['Level', 'School years', 'The skill at the centre'], rows: [
          ['Early primary', 'Years 1 and 2', 'Number bonds to 20, counting in 2s, 5s and 10s, halves and quarters.'],
          ['Upper primary', 'Years 3 to 6', 'Times tables, long multiplication and division, fractions, and converting between units of length.'],
          ['Lower secondary', 'Years 7 to 9', 'Letters standing for numbers, proportional reasoning, angles and area.'],
          ['GCSE', 'Years 10 and 11', 'Either tier, with accuracy, rounding and bounds treated as skills in their own right.'],
          ['Sixth form', 'Years 12 and 13', 'A level Maths, and Further Maths for those heading towards maths, physics or engineering.'],
          ['Adults', 'Any age to 67', 'Whatever was missed first time, explained slowly and with real examples.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Primary in Birmingham',
          left: [
            'Measurement is where primary maths meets the world, and Birmingham is a good city to measure. A Year 4 child can follow a canal on a map with a piece of string, read the scale, and say roughly how far the towpath runs. A Year 5 child can convert that to miles, and a Year 6 child can say how sure they are of the answer.',
            'For families preparing for the grammar school test, our separate page on <a class="ag-inline-link" href="/11-plus-maths-tuition-birmingham">11 plus maths in Birmingham</a> covers that test. This page is about maths at every age, for everyone.'
          ],
          rightH3: 'Secondary, sixth form and adults',
          right: [
            'GCSE asks students to round sensibly, write error intervals and reason with upper and lower bounds. Students often find these fiddly because textbook examples are made up. The canal numbers below are real, so the question of how accurate they are actually matters.',
            'Deeper pages for each stage: <a class="ag-inline-link" href="/ks3-maths-tuition-online">Key Stage 3</a>, <a class="ag-inline-link" href="/gcse-maths-tuition-online">GCSE</a>, <a class="ag-inline-link" href="/a-level-maths-tuition-online">A level</a>, <a class="ag-inline-link" href="/further-maths-tuition-online">Further Maths</a> and <a class="ag-inline-link" href="/online-maths-classes-for-adults-in-uk">maths for adults</a>.'
          ] }
      ]
    },
    {
      id: 'canals', tint: 'plain', eyebrow: 'The Birmingham project',
      h2: 'Does Birmingham really have more canals than Venice?',
      lede: 'The Canal &amp; River Trust writes that "Most people know that Birmingham has more canals than Venice". We tested the saying with a map, a formula and some care about definitions.',
      body: [
        { kind: 'two',
          left: [
            'On 1 October 2026 we asked OpenStreetMap, the volunteer-built world map, for every line tagged as a canal inside the Birmingham city boundary. It returned 275 pieces of canal drawn through 2,049 points. Adding the straight steps between neighbouring points gives 64.20 kilometres. At 1.609344 kilometres to the mile, that is 39.89 miles.',
            'The Trust itself gives a different number: "the Birmingham Canal Navigations extend to just over 100 miles". Both can be right, because they measure different things. The Trust counts one named network of canals, wherever it runs; we counted every canal line inside the city boundary, whichever network it belongs to. Different definition, different total.'
          ],
          right: [
            'For Venice we ran the same query. The whole municipality of Venice, which stretches across the lagoon to the mainland, has 491.29 kilometres of mapped canal. Most of that lies well away from the historic city. So we drew a rectangle round the historic city and kept only the lines named Rio, Rielo or Canal Grande: 49.62 kilometres, or 30.83 miles.',
            'On length, then, Birmingham\'s 64.20 kilometres beats central Venice\'s 49.62. But widen the Venice rectangle to every mapped canal line inside it, including wide channels such as the Canale della Giudecca, and Venice reaches 77.41 kilometres. Count names instead of length and the rectangle holds 165 named Venetian canals against Birmingham\'s 11 canal names. The saying is true, false or both, depending on the question.'
          ] },
        { kind: 'table', mt: true, caption: 'Canal length by OpenStreetMap, measured by us on 1 October 2026', head: ['What was measured', 'Kilometres', 'Miles'], numCols: [1, 2], rows: [
          ['Birmingham, all canal lines inside the city boundary', '64.20', '39.89'],
          ['Birmingham, the same without tunnels', '60.42', '37.54'],
          ['Venice, Rio, Rielo and Canal Grande in our rectangle', '49.62', '30.83'],
          ['Venice, every canal line in our rectangle', '77.41', '48.10'],
          ['Venice, the Venezia-Murano-Burano municipality area', '317.56', '197.32'],
          ['Venice, the whole municipality, lagoon included', '491.29', '305.27']
        ] },
        { kind: 'table', mt: true, caption: 'The five longest canals inside Birmingham by mapped length (our calculation)', head: ['Canal', 'Kilometres inside the city'], numCols: [1], rows: [
          ['Birmingham and Fazeley Canal', '14.25'],
          ['Grand Union Canal', '13.91'],
          ['Worcester and Birmingham Canal', '10.12'],
          ['Stratford-upon-Avon Canal', '6.37'],
          ['Tame Valley Canal', '6.05']
        ] },
        { kind: 'source', html: 'Data: <a class="ag-inline-link" href="https://www.openstreetmap.org/copyright" rel="noopener" target="_blank">OpenStreetMap contributors</a>, ways tagged as canals, one Overpass query on 1 October 2026; lengths are great-circle sums calculated by Modern Age Coders. The Venice rectangle (45.4245 to 45.4475 N, 12.300 to 12.370 E) is our own choice. Quotes: <a class="ag-inline-link" href="https://canalrivertrust.org.uk/news-and-views/features/fascinating-facts-about-canals-and-rivers" rel="noopener" target="_blank">Canal &amp; River Trust, fascinating facts about canals and rivers</a>, read on 1 October 2026.' }
      ]
    },
    {
      id: 'bounds', tint: 'deep', eyebrow: 'Accuracy, at GCSE and A level',
      h2: 'How accurate is 64.20 kilometres?',
      lede: 'A measured length is never exact. The canal data shows two separate reasons why, and each one is on the syllabus.',
      body: [
        { kind: 'two',
          leftH3: 'Rounding and error intervals',
          left: [
            'The DfE subject content asks GCSE students to "use inequality notation to specify simple error intervals due to truncation or rounding" and to "apply and interpret limits of accuracy, including upper and lower bounds". Our total, 64.20 km, is given to 2 decimal places, so the true sum of our steps lies in 64.195 ≤ L &lt; 64.205.',
            'The Trust\'s "just over 100 miles" is a different kind of statement. It is not rounded to a stated accuracy, so no error interval can be written for it. Students who can tell those two kinds of number apart are reading statistics the way a careful adult should.'
          ],
          rightH3: 'Straight steps along a curve',
          right: [
            'The second reason is deeper. A canal bends, but the map stores it as points joined by straight steps, and a straight step is always a little shorter than the bend it replaces. Use fewer points and the total shrinks.',
            'We tested that by keeping only every second, fourth, eighth or sixteenth point. The total fell from 64.20 km to 62.75 km. Joining only the two ends of each piece gives 59.73 km. True length is what the steps approach as they get shorter, which is exactly the idea behind arc length in A level calculus.'
          ] },
        { kind: 'table', mt: true, caption: 'Birmingham canal length using fewer of the 2,049 mapped points (our calculation)', head: ['Points kept', 'Total length, km', 'Shortfall against all points, km'], numCols: [1, 2], rows: [
          ['Every point', '64.20', '0.00'],
          ['Every 2nd point', '64.15', '0.05'],
          ['Every 4th point', '63.93', '0.27'],
          ['Every 8th point', '63.59', '0.61'],
          ['Every 16th point', '62.75', '1.45'],
          ['End points only', '59.73', '4.47']
        ] },
        { kind: 'p', mt: true, html: 'Definitions move the answer further than either kind of error. The two spillways in the data add 596.9 metres, the named basins and wharves 914.6 metres, and the tunnels 3.78 kilometres. Whether a tunnel counts as canal is a choice, not a calculation, and we ask students to state their choice before they add anything up.' },
        { kind: 'source', html: 'GCSE wording: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/gcse-mathematics-subject-content-and-assessment-objectives" rel="noopener" target="_blank">DfE, GCSE mathematics subject content</a>, number items 15 and 16. The thinning experiment and its figures are Modern Age Coders\' own work on the OpenStreetMap download.' }
      ]
    },
    {
      id: 'local', tint: 'tint', eyebrow: 'Maths in the city',
      h2: 'The Maths Hub, the university lectures and the Year 10 quiz',
      lede: 'Birmingham has plenty of maths outside school that a curious learner can find. We describe it for families; it belongs to others, and we have no part in it.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Central Maths Hub', p: 'According to the NCETM, the lead school for the Central Maths Hub is Bishop Challoner Catholic College in Birmingham, and the hub works with schools in Birmingham, Dudley and Sandwell. Its work is with teachers, so families meet it through their child\'s school.' },
          { h3: 'Popular maths lectures', p: 'The University of Birmingham\'s School of Mathematics, in the Watson Building at Edgbaston, runs the Birmingham Popular Maths Lectures. The school says "The lecturers cater to individuals studying A Level Mathematics and advanced GCSE students", and the lectures are free, in person or on Zoom.' },
          { h3: 'Maths Big Quiz', p: 'The same school runs the Maths Big Quiz for Year 10, "allowing each school to bring a maximum of 24 students organised into teams of 4". Entry is through schools, so an interested student should ask a maths teacher.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'The school also says it "hosts the regional office of the Advanced Mathematics Support Programme" and frequently organises events for students and teachers at the university. A sixth former thinking about Further Maths can ask their school about those events.',
            'For competitions open to individual learners, our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">UK competitions calendar</a> lists the UKMT challenges and others by age.'
          ],
          right: [
            'Our own lessons happen on video, so a learner in Erdington, Selly Oak or Hall Green joins from the kitchen table after school. Classmates are chosen by level, and they may be in Birmingham, Manchester or Glasgow.',
            'A good first lesson for a curious teenager is the canal project above. It starts with a saying everyone has heard and ends with arc length, and nobody has to be told the answer is interesting.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.ncetm.org.uk/hubs/central-maths-hub/" rel="noopener" target="_blank">NCETM, Central Maths Hub</a>; <a class="ag-inline-link" href="https://www.birmingham.ac.uk/about/college-of-engineering-and-physical-sciences/mathematics/about/outreach" rel="noopener" target="_blank">University of Birmingham, School of Mathematics outreach</a> and its about page. Read on 1 October 2026. Modern Age Coders is separate from the NCETM, every Maths Hub, the University of Birmingham and all Birmingham schools.' }
      ]
    },
    {
      id: 'grownups', tint: 'plain', eyebrow: 'Adult learners',
      h2: 'Grown-ups learning maths in Birmingham',
      lede: 'Adults come to us for many reasons, and almost none of them is an exam.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Getting comfortable with numbers', p: 'Percentages, ratios and fractions, rebuilt from the beginning, with time to ask the questions nobody answered at school.' },
          { h3: 'Keeping up with the children', p: 'Short courses on how primary and secondary schools teach methods today, so a parent can help without confusing anyone.' },
          { h3: 'Numbers at work', p: 'Estimating, checking and presenting figures, and knowing when a total is precise and when it is only roughly right. Our <a class="ag-inline-link" href="/functional-skills-maths-tuition-online">Functional Skills page</a> covers the qualification route.' }
        ] },
        { kind: 'p', mt: true, html: 'The canal project works well for adults too. Anyone who has walked a stretch of city-centre towpath has a feel for the distances, and comparing that feel with a measurement is a good way back into maths for someone who left it behind years ago.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'How a learner progresses',
    h2: 'From counting to measuring with confidence',
    lede: 'A learner can start at any rung. The free lesson shows us where.',
    table: { caption: 'Four rungs of maths, and how we know each is secure', head: ['Typically', 'Rung', 'We know it is secure when'], rows: [
      ['Years 1 to 3', '1. Number', 'They can partition 47 into 40 and 7 and use it to add and subtract'],
      ['Years 4 to 6', '2. Measure', 'They convert between kilometres and metres, and estimate before they calculate'],
      ['Years 7 to 11', '3. Accuracy', 'They write an error interval and explain what it says about a measurement'],
      ['Years 12 and 13', '4. Limits', 'They see why shorter steps along a curve approach its true length']
    ] },
    left: { h3: 'Coming in at GCSE', ps: [
      'Students who arrive in Year 10 or 11 usually need a few foundations repaired before exam practice is worth doing. We say how many weeks that is likely to take at the first lesson.',
      'Bounds and error intervals are a common weak spot, and they are best fixed with a short, focused run of lessons.'
    ] },
    right: { h3: 'Going further', ps: [
      'After an exam, some learners carry on with <a class="ag-inline-link" href="/courses/statistics-probability-maths-course">statistics and probability</a>; others try <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a> and write the canal calculation as a program.',
      'Learners who like hard problems for their own sake are welcome in our competition maths groups.'
    ] }
  },

  catalogue: {
    eyebrow: 'The full list',
    h2: 'Popular maths courses for Birmingham',
    lede: 'The four courses UK families search for most, GCSE, A level, 11 plus and IGCSE, lead the list; the rest follow by stage. Open any card for the syllabus.',
    bands: [
      { num: 'I', h3: 'Most searched for', sub: 'Exams and entry tests', courses: [
        { code: 'MTB / A1', slug: 'gcse-mathematics-mastery', title: 'GCSE', blurb: 'Either tier, any English board.' },
        { code: 'MTB / A2', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level', blurb: 'Pure, mechanics and statistics.' },
        { code: 'MTB / A3', slug: '11-plus-maths-preparation-course-uk', title: '11 plus', blurb: 'Maths for the Birmingham grammar school test and others.' },
        { code: 'MTB / A4', slug: 'igcse-mathematics-mastery', title: 'IGCSE', blurb: 'For schools that enter the international exam.' }
      ] },
      { num: 'II', h3: 'Ages 6 to 11', sub: 'Primary years', courses: [
        { code: 'MTB / B1', slug: 'early-math-foundations', title: 'First maths', blurb: 'Counting, shapes and patterns with objects to hand.' },
        { code: 'MTB / B2', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'Years 1 to 6, topic by topic, for understanding.' },
        { code: 'MTB / B3', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Calculating in the head, quickly and correctly.' },
        { code: 'MTB / B4', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus', blurb: 'Beads on a frame, then beads in the mind.' }
      ] },
      { num: 'III', h3: 'Ages 11 and up', sub: 'Secondary and stretch', courses: [
        { code: 'MTB / C1', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Key Stage 3', blurb: 'The algebra, ratio and geometry GCSE builds on.' },
        { code: 'MTB / C2', slug: 'algebra-foundations-masterclass', title: 'Algebra from scratch', blurb: 'For a learner who lost the thread of algebra.' },
        { code: 'MTB / C3', slug: 'statistics-probability-maths-course', title: 'Statistics', blurb: 'Data, probability and testing ideas.' },
        { code: 'MTB / C4', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad maths', blurb: 'Hard problems, no recipes, UKMT style.' }
      ] },
      { num: 'IV', h3: 'Maths for life and work', sub: 'Adults and the curious', courses: [
        { code: 'MTB / D1', slug: 'college-mathematics-complete-masterclass', title: 'First-year university maths', blurb: 'Calculus and linear algebra in depth.' },
        { code: 'MTB / D2', slug: 'complete-business-finance-mathematics-mastery', title: 'Money and business maths', blurb: 'Interest, growth and risk, with worked cases.' },
        { code: 'MTB / D3', slug: 'data-analytics-mathematics-masterclass', title: 'Data maths', blurb: 'The statistics and algebra under data work.' },
        { code: 'MTB / D4', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Speed arithmetic', blurb: 'Vedic methods once the foundations are firm.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Scheduling',
    h2: 'Lessons that fit a Birmingham week',
    lede: 'The teachers are in India, which keeps one time all year. Birmingham is five and a half hours behind India in winter and four and a half in summer, and we arrange everything in UK time so families never need to convert.',
    slots: [
      { time: 'Straight after school', l: 'Primary and lower secondary.' },
      { time: 'Later evenings', l: 'GCSE, A level and working adults.' },
      { time: 'Saturday or Sunday', l: 'For a calmer, unhurried lesson.' }
    ],
    cells: [
      { h3: 'A teacher who stays', p: 'One person follows the learner from week to week and remembers what went wrong.' },
      { h3: 'News after lessons', p: 'Parents get a brief, honest note on progress.' },
      { h3: 'Classes of five to ten', p: 'Matched by level so nobody is left behind or held back.' },
      { h3: 'Measurement and data', p: 'Canals, maps and timetables alongside the usual exercises.' },
      { h3: 'Private option', p: 'One teacher, one learner, for a gap or a deadline.' },
      { h3: 'Reasons, not rules', p: 'Learners explain a method before they practise it.' }
    ]
  },

  projectsH2: 'Where our learners take their maths',
  projectsLede: 'Four things built by students who began with exactly this kind of number work. There are more in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Straight from our Google profile, as families and learners wrote them.',

  fees: {
    h2: 'Fees',
    lede: 'A flat monthly fee in US dollars for every family outside India. There is no sign-up charge and no fixed term to commit to.',
    free: ['A full lesson at the learner\'s level', 'An honest summary for you', 'No payment card'],
    group: ['A class of five to ten at one level', 'The same teacher each week', 'Work marked and discussed', 'Certificate on completion'],
    one: ['Private teaching', 'Built around one gap or goal', 'Good for the run-up to an exam']
  },

  faq: {
    eyebrow: 'Birmingham maths questions',
    h2: 'Questions Birmingham families ask about maths',
    items: [
      { q: 'What does maths tuition in Birmingham involve?', a: 'Regular live lessons with one teacher, either in a level-matched class of five to ten or privately. The teacher finds what a learner has missed, teaches it properly and checks it has stuck, from KS2 number work and the SATs to GCSE for AQA, Edexcel or OCR and A level.' },
      { q: 'What is an error interval?', a: 'An error interval is the range a measurement could really lie in, given how it was rounded. A length of 64.20 km to 2 decimal places is at least 64.195 km and less than 64.205 km. GCSE asks students to write this with inequality signs.' },
      { q: 'Does Birmingham have more canals than Venice?', a: 'By our measurement, Birmingham has more length of canal inside its boundary (64.20 km) than the named canals of central Venice (49.62 km). But Venice has many more separate canals, and widening the area changes the answer, so the saying depends on what you count.' },
      { q: 'Do you teach 11 plus maths too?', a: 'Yes, on a separate page about the Birmingham grammar schools test. This page covers maths for everyone, from Year 1 to adult.' },
      { q: 'Can you help with A level and Further Maths?', a: 'Yes. We teach A level Maths across pure, mechanics and statistics, and Further Maths for students who want more.' },
      { q: 'Are lessons face to face in Birmingham?', a: 'No. Every lesson is live on video, so learners join from home anywhere in the city.' },
      { q: 'Can an adult in Birmingham do a GCSE maths resit with you?', a: 'Yes. Many adults come to us for exactly that, and others simply want the explanations they missed. We teach adults up to 67 at their pace; for a resit, the entry is made through a college or exam centre.' },
      { q: 'Will tuition guarantee a grade?', a: 'No. We teach well and tell you honestly how things are going, but we never promise grades.' },
      { q: 'Do you prepare learners for the UKMT maths challenge?', a: 'Yes, through our olympiad maths course, which works on problems in the UKMT style. Schools enter pupils themselves, and we have no connection with the UKMT, the NCETM, any Maths Hub, the university or any school.' },
      { q: 'How much does a maths tutor in Birmingham cost?', a: 'The first lesson is free. Then it is USD 100 per month for a class place or USD 150 per month for private lessons, with no joining fee and no minimum term.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Also useful',
    h2: 'More pages for Birmingham learners',
    lede: 'National maths pages by stage, the city 11 plus page and our Birmingham coding page.',
    items: [
      { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition', p: 'Our national GCSE maths page.' },
      { href: '/further-maths-tuition-online', label: 'Further Maths tuition', p: 'For sixth formers who want more maths.' },
      { href: '/ks3-maths-tuition-online', label: 'Key Stage 3 maths', p: 'Years 7 to 9, the bridge to GCSE.' },
      { href: '/coding-classes-in-birmingham', label: 'Coding classes in Birmingham', p: 'Our coding page for the city.' },
      { href: '/maths-tuition-in-manchester', label: 'Maths tuition in Manchester', p: 'The same approach, built on the Metrolink.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Every UK page', p: 'Nations, cities, towns and maths, in one list.' }
    ]
  },

  start: {
    h2: 'Start with a free lesson',
    lede: 'Let us know the learner\'s age or year and what is going wrong, or right, in maths at the moment. We teach a full lesson and then give you a straight assessment.',
    readFirst: 'Want to look first? See <a class="ag-inline-link" href="/courses">all our courses</a> or how we approach <a class="ag-inline-link" href="/how-we-teach">teaching</a>.',
    note: 'The quickest reply comes on WhatsApp. You will see an Indian number, since our team works from India; we have no UK premises and teach only online.',
    formNote: 'We never ask for card details here. Expect a reply to agree a time.'
  },

  footer: {
    cols: [
      { h4: 'Maths pages', links: [
        { href: '/ks2-maths-tuition-online', label: 'Key Stage 2 maths' },
        { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition' },
        { href: '/a-level-maths-tuition-online', label: 'A level maths tuition' },
        { href: '/functional-skills-maths-tuition-online', label: 'Functional Skills maths' }
      ] },
      { h4: 'Around the UK', links: [
        { href: '/coding-classes-in-united-kingdom', label: 'UK index' },
        { href: '/coding-classes-in-birmingham', label: 'Coding in Birmingham' },
        { href: '/maths-tuition-in-manchester', label: 'Maths tuition in Manchester' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] }
    ],
    bottomRight: 'Measure first, then decide what it means'
  },

  personalityCss: `
.ag-root.ag-mtb .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-mtb .ag-capsule { border-left-width: 3px; border-radius: 0 4px 4px 0; }
.ag-root.ag-mtb .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-mtb .ag-table caption { text-align: left; font-weight: 600; letter-spacing: 0.01em; }
.ag-root.ag-mtb .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-mtb .ag-spec dt { letter-spacing: 0.1em; }
.ag-root.ag-mtb .ag-three h3 { letter-spacing: -0.01em; }
.ag-root.ag-mtb .ag-slots { gap: 0.9rem; }
`,

  mustMention: ['Central Maths Hub', 'Bishop Challoner Catholic College', 'Birmingham Popular Maths Lectures', 'Maths Big Quiz', 'Watson Building', 'Birmingham and Fazeley Canal', 'Venezia-Murano-Burano', '64.195 ≤ L &lt; 64.205', 'Advanced Mathematics Support Programme'],

  dossier: {
    curriculumAuthority: 'National curriculum for England (DfE); GCSE mathematics subject content (DfE, 2013), number items 15 and 16 on error intervals and bounds. Birmingham schools sit in the Central Maths Hub area (NCETM).',
    localProject: 'Canal length from OpenStreetMap, 1 October 2026: Birmingham city boundary 64.20 km (39.89 mi) over 275 ways and 2,049 points; tunnels 3.78 km; Venice historic-centre rectangle 49.62 km for Rio, Rielo and Canal Grande (165 names), 77.41 km for all canal lines; municipality 491.29 km. Thinning: 64.20 to 62.75 km at every 16th point, 59.73 km end points only.',
    requiredMentions: ['Central Maths Hub', 'Bishop Challoner Catholic College', 'Birmingham Popular Maths Lectures', 'Maths Big Quiz', 'Watson Building', 'Birmingham and Fazeley Canal', 'Venezia-Murano-Burano', '64.195 ≤ L &lt; 64.205', 'Advanced Mathematics Support Programme'],
    sources: [
      { claim: 'NCETM, Central Maths Hub: lead school Bishop Challoner Catholic College, Birmingham; areas Birmingham, Dudley, Sandwell.', url: 'https://www.ncetm.org.uk/hubs/central-maths-hub/' },
      { claim: 'University of Birmingham School of Mathematics outreach: Birmingham Popular Maths Lectures, Maths Big Quiz, regional office of the Advanced Mathematics Support Programme; about page: Watson Building, Edgbaston campus.', url: 'https://www.birmingham.ac.uk/about/college-of-engineering-and-physical-sciences/mathematics/about/outreach' },
      { claim: 'Canal & River Trust: "Most people know that Birmingham has more canals than Venice"; "the Birmingham Canal Navigations extend to just over 100 miles".', url: 'https://canalrivertrust.org.uk/news-and-views/features/fascinating-facts-about-canals-and-rivers' },
      { claim: 'DfE GCSE mathematics subject content: error intervals due to truncation or rounding; limits of accuracy, upper and lower bounds.', url: 'https://www.gov.uk/government/publications/gcse-mathematics-subject-content-and-assessment-objectives' },
      { claim: 'OpenStreetMap waterway=canal ways in Birmingham and Venice, one Overpass query, 1 October 2026.', url: 'https://www.openstreetmap.org/copyright' }
    ],
    rejectedClaims: [
      'Birmingham has "35 miles" of canal inside the city: widely repeated, no primary source found; our own measurement is printed instead.',
      'Venice has "26 miles" of canals: widely repeated, no primary source found; not printed.',
      'A flat yes or no to "more canals than Venice": the answer depends on the definition, so the page shows each definition.',
      'Any claim about Birmingham exam results or school performance: excluded by the spec.',
      'Named outreach staff at the university: not printed.'
    ]
  }
};
