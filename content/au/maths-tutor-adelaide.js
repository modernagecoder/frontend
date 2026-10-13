'use strict';
// Maths tutor in Adelaide (ag- maths by city; AU cluster Phase 10, row 375).
// Intent: Greater Adelaide families and adults searching for a maths tutor: Reception to Year 12 and adults, the SACE
// Stage 2 mathematics subjects, and online lessons in Adelaide time (half an hour behind Sydney, daylight saving in
// summer). Links the SACE Methods and Specialist pages and the SA IGNITE entry page.
// Sources, read raw on 13 October 2026 (curl, default agent):
//  - SACE Board, Mathematical Methods overview: subject menu lists Essential Mathematics, General Mathematics,
//    Mathematical Methods, Specialist Mathematics; "Mathematical Methods develops an increasingly complex and
//    sophisticated understanding of calculus and statistics."
//  - ABS, 2021 Census QuickStats, Greater Adelaide (4GADE): primary 117,510; secondary 81,582; vocational 31,492;
//    university or other higher education 77,275; highest attainment Year 12 181,904 (15.8%), Year 11 91,064 (7.9%),
//    Year 10 96,384 (8.4%), Advanced Diploma and Diploma 103,858, Certificate III 150,458. Preschool and bachelor-level
//    counts already on our Adelaide coding pages; not used.
//  - OpenStreetMap, one Overpass query (13 October 2026): all ways and relations named Victoria, Light, Hindmarsh, Hurtle
//    and Whitmore Square in the city centre; each square's position = mean of every mapped point carrying its name.
// Lesson family: Heron's formula against coordinates. Our calculation (local metres): triangle Light, Hindmarsh, Victoria
// sides 692.1 / 682.5 / 1107.0 m, area 225,557 m2 by coordinates; Heron with sides rounded to 1 m 225,705,
// to 10 m 222,822. Thin triangle Light, Victoria, Hurtle: 31,923 m2; Heron rounded to 1 m 32,523, to 10 m 0.
// Hindmarsh, Victoria, Whitmore: 10,309 m2; Heron rounded to 1 m 0. Coordinates (half base times height) win for thin
// triangles; Heron is fine for fat ones.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: {
    group: 'city',
    tag: 'ADELAIDE MATHS',
    label: 'Maths tutor in Adelaide',
    blurb: 'A maths tutor for Adelaide learners from Reception to SACE Stage 2 and adults, with a triangle project on the city squares that breaks a famous formula.'
  },
  slug: 'maths-tutor-adelaide',
  code: 'mtad',
  accent: '#474E17',
  accentRationale: 'Adelaide maths: a dark muted olive computed for South Australia, at least 20 RGB from every SA page accent, 10 from every AU accent and 6 from every colour in use',
  pageType: 'city',
  market: {
    name: 'Australia',
    iso: 'AU',
    dial: '+61',
    lang: 'en-AU',
    locale: 'en_AU',
    geoRegion: 'AU',
    brandTag: 'AU',
    phoneLabel: 'Australian mobile number',
    phonePlaceholder: '491 570 156',
    gradeLabel: 'Year level or age',
    minDigits: 9,
    stripTrunk: true
  },
  routeLabel: 'Maths tutor in Adelaide',
  title: 'Maths Tutor in Adelaide | Reception to SACE Maths, Online',
  description: 'Online maths tutor for Adelaide, Reception to Year 12 and adults: SACE Essential, General, Mathematical Methods and Specialist Mathematics, live in Adelaide time.',
  ogDescription: 'Join three of Adelaide\'s city squares into a thin triangle and Heron\'s formula says its area is zero. An Adelaide maths tutor explains why, with the numbers.',
  twitterDescription: 'Adelaide maths tutoring, live online: Reception to SACE Stage 2 and adults, with real geometry from the city squares.',
  pageName: 'Maths Tutor in Adelaide',
  webPageDescription: 'Live online maths tutoring for Greater Adelaide learners from Reception to the SACE Stage 2 mathematics subjects and adult maths, with a geometry project on triangles between the city squares.',
  courseDescription: 'Live online maths lessons for Adelaide learners, privately or in level-matched groups of five to ten, from early number to SACE Specialist Mathematics and adult maths.',
  crumbs: [
    { name: 'Courses', href: '/courses' },
    { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }
  ],
  crumbLabel: 'Maths tutor in Adelaide',
  navLinks: [
    { href: '#ladder-sa', label: 'Year levels' },
    { href: '#sace', label: 'SACE maths' },
    { href: '#squares', label: 'A worked example' },
    { href: '#adelaide', label: 'Adelaide learners' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Adelaide &middot; Reception to SACE Stage 2 and adults &middot; Online maths lessons',
  h1: 'Maths tutor in Adelaide',
  lede: 'Adelaide\'s city centre has five squares, and a map shows that three of them, Light Square, Victoria Square and Hurtle Square, almost line up. Join them and you get a long, thin triangle. Ask Heron\'s formula, the well-known rule that finds an area from three side lengths, for its area using sides rounded to the nearest ten metres, and it answers zero. Measure more carefully and the area is 31,923 square metres. Why a respected formula fails so badly is a lovely piece of mathematics, and we work through it below. Our live online maths tutoring serves Adelaide learners from Reception to SACE Stage 2 and adults, in Adelaide time.',
  secondaryCta: { href: '#squares', label: 'See the triangle project' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for a learner in Adelaide.',
  heroNote: 'Maths only on this page &middot; Reception to adult &middot; Independent of every Adelaide school and university',
  spec: [
    ['Ages', '6 to 67'],
    ['Primary', 'Reception to Year 6'],
    ['Secondary', 'Years 7 to 10'],
    ['SACE', 'Essential, General, Methods, Specialist'],
    ['Adults', 'Refreshers and bridging maths'],
    ['How', 'Live video, private or five to ten'],
    ['Time', 'Adelaide time, with daylight saving'],
    ['City project', 'Triangles between the city squares']
  ],
  capsuleQ: 'Maths tutor in Adelaide, in brief',
  capsule: 'For Adelaide, Modern Age Coders offers live online maths tutoring from Reception through Year 12 and on to adult learners up to 67. Senior students are taught the four SACE subjects: Essential Mathematics, General Mathematics, Mathematical Methods and Specialist Mathematics. Every session is booked on the Adelaide clock, either privately or with five to ten classmates working at the same level, and a first session costs nothing.',
  picks: {
    eyebrow: 'Where Adelaide learners often start',
    h2: 'Three maths courses for Adelaide',
    lede: 'Primary foundations, the geometry and algebra of the middle years, and senior calculus and statistics. Everything else is listed further down.',
    items: [
      {
        course: 'elementary-mathematics-complete-masterclass',
        code: 'ADL / 1',
        title: 'Primary maths',
        note: 'Reception to Year 6: number, fractions, shape and measurement, built on understanding.'
      },
      {
        course: 'comprehensive-middle-school-mathematics-mastery',
        code: 'ADL / 2',
        title: 'Maths for Years 7 to 10',
        note: 'Algebra, measurement and the geometry and trigonometry that triangles like ours need.'
      },
      {
        course: 'statistics-probability-maths-course',
        code: 'ADL / 3',
        title: 'Statistics and probability',
        note: 'For SACE students whose subject leans on data and chance, and adults who need statistics for study.'
      }
    ]
  },
  sections: [
    {
      id: 'ladder-sa',
      tint: 'tint',
      eyebrow: 'Reception to Year 12',
      h2: 'A maths tutor for Adelaide learners at every level',
      lede: 'South Australian schooling starts with Reception and finishes with the SACE. We teach each step, and adults who want to revisit any of them.',
      body: [
        {
          kind: 'table',
          caption: 'Levels and what lessons emphasise',
          head: ['Stage', 'Years', 'Emphasis'],
          rows: [
            ['Early years', 'Reception to Year 2', 'Counting, adding and subtracting with understanding'],
            ['Primary', 'Years 3 to 6', 'Multiplication, fractions, area and perimeter'],
            ['Middle school', 'Years 7 to 9', 'Integers, algebra, angles and the first statistics'],
            ['Year 10', 'Year 10', 'Preparing for the SACE subject a student intends to take'],
            ['SACE', 'Stage 1 and Stage 2', 'Essential, General, Mathematical Methods or Specialist'],
            ['Adults', 'Up to 67', 'Bridging, workplace or interest-led maths']
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'Entry and competition maths',
          left: [
            'Families looking at the IGNITE entry assessment can read our <a class="ag-inline-link" href="/sa-ignite-entry-maths-practice">SA IGNITE maths practice</a> page. Competition-minded students might like <a class="ag-inline-link" href="/australian-mathematics-competition-practice-by-year">Australian Mathematics Competition practice</a>.',
            'This page covers maths learning in general.'
          ],
          rightH3: 'Learners we see',
          right: [
            'Students who want to catch up, students who want more challenge, and adults who need maths for study or work.',
            'The first free lesson tells us which applies.'
          ]
        }
      ]
    },
    {
      id: 'sace',
      tint: 'deep',
      eyebrow: 'SACE mathematics',
      h2: 'The SACE maths subjects an Adelaide student can choose',
      lede: 'The SACE Board lists four mathematics subjects. Its description of Mathematical Methods is a good summary of what senior maths is for: Methods "develops an increasingly complex and sophisticated understanding of calculus and statistics."',
      body: [
        {
          kind: 'table',
          caption: 'SACE mathematics subjects (read on the SACE Board site, 13 October 2026)',
          head: ['Subject', 'In general terms', 'Our detailed page'],
          rows: [
            ['Essential Mathematics', 'Maths for everyday life, work and further training', 'This page'],
            ['General Mathematics', 'Applied maths: data, modelling and finance', 'This page'],
            [
              'Mathematical Methods',
              'Calculus and statistics',
              '<a class="ag-inline-link" href="/sace-mathematical-methods-tutoring">SACE Mathematical Methods</a>'
            ],
            [
              'Specialist Mathematics',
              'Further calculus, vectors, complex numbers and proof',
              '<a class="ag-inline-link" href="/sace-specialist-mathematics-tutoring">SACE Specialist Mathematics</a>'
            ]
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'Choosing well',
          left: [
            'Students who enjoy algebra and are aiming at science, engineering or economics usually take Methods, and some add Specialist. Students who want useful maths without heavy calculus often thrive in General Mathematics.',
            'We help students test the fit early, before Stage 2 begins.'
          ],
          rightH3: 'What we do and do not offer',
          right: [
            'Content, method and exam habits. No promised grades or ATAR, and no help writing assessed tasks: SACE investigations are the student\'s own work.',
            'Our SACE pages explain each subject in more depth, including how the year is usually structured and where students tend to lose marks.'
          ]
        },
        {
          kind: 'p',
          mt: true,
          html: 'Students in Year 10 who are unsure which subject to choose often find one diagnostic lesson clears things up. We look at how comfortable they are with algebra, how much they enjoy problem solving for its own sake, and what they hope to study after school, then suggest a subject and an honest picture of the work it will take.'
        },
        {
          kind: 'source',
          html: 'Source: SACE Board of South Australia, <a class="ag-inline-link" href="https://www.sace.sa.edu.au/web/mathematical-methods/overview" rel="noopener" target="_blank">Mathematical Methods overview</a>, read 13 October 2026.'
        }
      ]
    },
    {
      id: 'squares',
      tint: 'tint',
      eyebrow: 'An Adelaide worked example',
      h2: 'When Heron\'s formula says a triangle has no area',
      lede: 'Heron\'s formula finds the area of a triangle from its three sides alone. It is exact in theory. In practice, with rounded measurements, it can be disastrously wrong for thin triangles. Adelaide\'s squares show why.',
      body: [
        {
          kind: 'p',
          html: 'We took the position of each city square as the average of every mapped point carrying its name on OpenStreetMap, then joined squares into triangles. For each triangle we found the area two ways: from the coordinates (which is half base times height, done carefully) and from Heron\'s formula using the side lengths rounded to the nearest metre and to the nearest ten metres, as someone reading a map might.'
        },
        {
          kind: 'table',
          caption: 'Triangles between Adelaide\'s squares (our calculation from OpenStreetMap)',
          head: ['Triangle', 'Sides in metres', 'Area from coordinates (m&sup2;)', 'Heron, sides to 1 m', 'Heron, sides to 10 m'],
          numCols: [
            2,
            3,
            4
          ],
          rows: [
            ['Light, Hindmarsh, Victoria', '692.1 / 682.5 / 1107.0', '225,557', '225,705', '222,822'],
            ['Light, Victoria, Hurtle', '733.2 / 1412.8 / 682.5', '31,923', '32,523', '0'],
            ['Hindmarsh, Victoria, Whitmore', '725.1 / 1416.9 / 692.1', '10,309', '0', '0']
          ]
        },
        {
          kind: 'three',
          mt: true,
          cells: [
            {
              h3: 'Fat triangles are safe',
              p: 'For Light, Hindmarsh and Victoria, Heron with sides to the metre gives 225,705 square metres against 225,557: close enough for any purpose.'
            },
            {
              h3: 'Thin triangles collapse',
              p: 'Light, Victoria and Hurtle almost lie on a line, so the longest side nearly equals the other two added together. Heron multiplies by "half the perimeter minus the longest side", a tiny number, and rounding wipes it out: zero when sides are rounded to ten metres.'
            },
            {
              h3: 'The simple method wins',
              p: 'Half base times height, using the coordinates directly, gives 31,923 square metres with no drama. The height above the longest side is only 45.2 metres, which is exactly why the triangle is so fragile.'
            }
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'What students practise',
          left: [
            'Distances from coordinates with Pythagoras, Heron\'s formula, half base times height, rounding and why subtracting nearly equal numbers loses accuracy.',
            'Middle years students do the distances; senior students explain the instability algebraically.'
          ],
          rightH3: 'Honest limits',
          right: [
            'Our square positions are averages of mapped points, not surveyed centres, so the exact areas depend on that choice. The lesson about thin triangles does not.',
            'Map data: OpenStreetMap contributors, ODbL.'
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Two ways to the same area, step by step for the fat triangle',
          head: ['Step', 'Heron\'s formula', 'Coordinates'],
          rows: [
            ['1', 'Measure the three sides', 'Write down the three corner positions'],
            ['2', 'Find s, half the perimeter', 'Take two edges as arrows from one corner'],
            ['3', 'Multiply s, s minus each side', 'Cross-multiply the arrows\' components'],
            ['4', 'Take the square root', 'Halve the result and drop any minus sign'],
            ['Weak point', 'Subtracting nearly equal numbers when the triangle is thin', 'Needs coordinates, not just lengths']
          ]
        },
        {
          kind: 'p',
          mt: true,
          html: 'Neither method is wrong. Heron is perfect when only lengths are known and the triangle is reasonably fat, which is why it appears in senior courses. Coordinates are better whenever positions are known, which, in the age of maps, is most of the time. Knowing which tool suits which job is a large part of being good at mathematics, and it is a habit we teach explicitly from the middle years onwards.'
        },
        {
          kind: 'source',
          html: 'Map positions come from <a class="ag-inline-link" href="https://www.openstreetmap.org/copyright" rel="noopener" target="_blank">OpenStreetMap</a> (ODbL), downloaded for this page on 13 October 2026; every centre, length and area above was worked out by us.'
        }
      ]
    },
    {
      id: 'adelaide',
      tint: 'deep',
      eyebrow: 'Adelaide learners',
      h2: 'Greater Adelaide in the 2021 Census: who was learning',
      lede: 'These Census figures describe the learners a maths tutor in Adelaide might meet, from primary school to adult study.',
      body: [
        {
          kind: 'table',
          caption: 'Greater Adelaide, 2021 Census',
          head: ['Measure', 'People'],
          numCols: [
            1
          ],
          rows: [
            ['Attending primary school', '117,510'],
            ['Attending secondary school', '81,582'],
            ['Attending vocational education, including TAFE', '31,492'],
            ['Attending university or other higher education', '77,275'],
            ['Highest level Year 12', '181,904 (15.8%)'],
            ['Highest level Year 11', '91,064 (7.9%)'],
            ['Highest level Year 10', '96,384 (8.4%)'],
            ['Highest level Certificate III', '150,458'],
            ['Highest level Advanced Diploma or Diploma', '103,858']
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'One row stands out',
          left: [
            'In Greater Adelaide, 7.9% of people aged 15 and over list Year 11 as their highest level of schooling. Many of them are adults who left school before the senior years, and some come back to maths later for a course or a job.',
            'Rows are printed as published and never added up.'
          ],
          rightH3: 'Adult maths in Adelaide',
          right: [
            'Adults learn in their own groups or privately, starting with the maths they need now.',
            'Many are surprised how quickly it returns. A common first goal is the maths in a TAFE or university bridging unit, or the numbers that come with a new role at work.'
          ]
        },
        {
          kind: 'source',
          html: 'Source: ABS, <a class="ag-inline-link" href="https://abs.gov.au/census/find-census-data/quickstats/2021/4GADE" rel="noopener" target="_blank">2021 Census QuickStats, Greater Adelaide</a>, read 13 October 2026, CC BY 4.0.'
        }
      ]
    },
    {
      id: 'clock-sa',
      tint: '',
      eyebrow: 'Online in Adelaide time',
      h2: 'Live online maths lessons on Adelaide\'s clock',
      lede: 'Adelaide sits half an hour behind Sydney and uses daylight saving in summer, so it is four hours ahead of India in winter and five hours ahead in summer. We book everything in Adelaide time.',
      body: [
        {
          kind: 'three',
          cells: [
            { h3: 'One to one', p: 'For a particular topic, a test or a fresh start, at a fixed weekly time.' },
            { h3: 'Small classes', p: 'Between five and ten students who share a level, taught by one regular teacher.' },
            { h3: 'Shared working', p: 'A digital whiteboard where the teacher sees each step a learner writes.' }
          ]
        },
        {
          kind: 'p',
          mt: true,
          html: 'The half-hour offset trips up many online services. We confirm each booking in writing in Adelaide time, and we recheck it in the weeks when daylight saving begins and ends.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Progress',
    h2: 'Four stages of a learner\'s maths',
    lede: 'Start anywhere; the first lesson shows where.',
    table: {
      caption: 'From counting to calculus',
      head: ['Usually', 'Stage', 'Ready for the next when'],
      rows: [
        ['Reception to Year 2', '1. Quantity', 'They see 8 as 5 and 3 without counting'],
        ['Years 3 to 6', '2. Shape and space', 'They find an area by splitting a shape into rectangles'],
        ['Years 7 to 10', '3. Generalising', 'They use a formula and check its answer another way'],
        ['Stage 1 and 2', '4. Rigour', 'They know when a method can fail, like Heron for thin triangles']
      ]
    },
    left: {
      h3: 'Late starters',
      ps: [
        'Students who begin in Stage 1 often need a few earlier ideas firmed up first.',
        'We name those ideas and how long they should take.'
      ]
    },
    right: {
      h3: 'Adults',
      ps: ['Adults usually progress quickly with a clear plan.', 'We begin with the maths needed now.']
    }
  },
  catalogue: {
    eyebrow: 'Full list',
    h2: 'Maths courses for Adelaide learners',
    lede: 'International course names, taught to South Australian stages and SACE subjects.',
    bands: [
      {
        num: 'I',
        h3: 'Primary',
        sub: 'Reception to Year 6',
        courses: [
          { code: 'ADL / P1', slug: 'early-math-foundations', title: 'First maths', blurb: 'Early number with objects.' },
          { code: 'ADL / P2', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'All primary strands.' },
          { code: 'ADL / P3', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Thinking through puzzles.' }
        ]
      },
      {
        num: 'II',
        h3: 'Secondary',
        sub: 'Years 7 to 10',
        courses: [
          { code: 'ADL / S1', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle years maths', blurb: 'Algebra and geometry.' },
          { code: 'ADL / S2', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Algebra rebuilt.' },
          { code: 'ADL / S3', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Formulas you can test.' }
        ]
      },
      {
        num: 'III',
        h3: 'SACE and adults',
        sub: 'Stage 1, Stage 2 and beyond',
        courses: [
          { code: 'ADL / H1', slug: 'complete-high-school-mathematics-mastery', title: 'Stage 1 and 2 maths', blurb: 'Graphs, rates of change, data.' },
          { code: 'ADL / H2', slug: 'ap-calculus-exam-prep', title: 'Calculus in depth', blurb: 'For Methods and Specialist.' },
          { code: 'ADL / H3', slug: 'college-mathematics-complete-masterclass', title: 'University maths', blurb: 'Beyond school.' }
        ]
      }
    ]
  },
  how: {
    eyebrow: 'Lesson times',
    h2: 'Lessons arranged around an Adelaide week',
    lede: 'Bookings are made and confirmed in Adelaide time, half an hour behind the eastern states.',
    slots: [
      { time: 'After school', l: 'Primary and middle school.' },
      { time: 'Evenings', l: 'SACE students and adults.' },
      { time: 'Weekends', l: 'Longer lessons when needed.' }
    ],
    cells: [
      { h3: 'Continuity', p: 'The same teacher week after week.' },
      { h3: 'Updates', p: 'Short notes for parents.' },
      { h3: 'Five to ten', p: 'Groups matched by level.' },
      { h3: 'Real geometry', p: 'Maps and measurements alongside exercises.' },
      { h3: 'Private choice', p: 'One to one when it suits.' },
      { h3: 'Why it works', p: 'Every method explained before practice.' }
    ]
  },
  projectsH2: 'What learners have built with their maths',
  projectsLede: 'Student projects that grew out of solid number and geometry. More in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews from our Google profile, as written.',
  fees: {
    h2: 'Fees for maths tutoring in Adelaide',
    lede: 'Adelaide families pay a single monthly fee in US dollars, with no enrolment charge and no fixed term.',
    free: ['A full lesson at the learner\'s level', 'Honest advice on next steps', 'No card'],
    group: ['Five to ten learners at one level', 'The same teacher each week', 'Marked practice', 'Stop after any month'],
    one: ['Private teaching', 'One goal at a time', 'Ideal before SACE exams']
  },
  faq: {
    eyebrow: 'Adelaide maths questions',
    h2: 'Adelaide maths tutoring: common questions',
    items: [
      {
        q: 'How does an Adelaide maths tutor help?',
        a: 'Regular live lessons that find and fill gaps, extend strong learners and build exam habits, privately or in small groups, booked in Adelaide time.'
      },
      { q: 'Which SACE maths subjects do you teach?', a: 'Essential Mathematics, General Mathematics, Mathematical Methods and Specialist Mathematics.' },
      {
        q: 'What is Heron\'s formula?',
        a: 'A rule giving a triangle\'s area from its three side lengths: the square root of s(s - a)(s - b)(s - c), where s is half the perimeter. It is exact, but very sensitive to rounding for thin triangles.'
      },
      {
        q: 'Why did Heron\'s formula give zero for an Adelaide triangle?',
        a: 'Light, Victoria and Hurtle squares almost line up. With sides rounded to ten metres, the longest side equals the other two added together, so the formula multiplies by zero.'
      },
      { q: 'Do you guarantee SACE grades or an ATAR?', a: 'No. We teach well and help with exam technique, but we promise no grade or ATAR.' },
      { q: 'Do you teach Reception children?', a: 'Yes, with short, practical lessons on number, usually with a parent close by for the first few weeks.' },
      {
        q: 'Can an adult who left school in Year 11 learn senior maths?',
        a: 'Yes. We start from what the learner remembers, fill the gaps from the middle years, and move on to the senior topics a course or job requires, at a pace that suits adult life.'
      },
      { q: 'Are lessons in Adelaide time?', a: 'Yes, including the half-hour offset and daylight saving changes.' },
      { q: 'What does it cost?', a: 'The first lesson is free. Monthly fees are listed in the fees section of this page.' }
    ]
  },
  elsewhere: {
    eyebrow: 'More for Adelaide',
    h2: 'Related pages',
    lede: 'SACE, entry tests and costs.',
    items: [
      { href: '/sace-mathematical-methods-tutoring', label: 'SACE Mathematical Methods', p: 'Calculus and statistics.' },
      { href: '/sace-specialist-mathematics-tutoring', label: 'SACE Specialist Mathematics', p: 'The most advanced SACE maths.' },
      { href: '/sa-ignite-entry-maths-practice', label: 'SA IGNITE maths', p: 'Entry assessment practice.' },
      { href: '/naplan-numeracy-practice-online', label: 'NAPLAN numeracy', p: 'Practice by year.' },
      { href: '/australian-curriculum-maths-year-7-to-10-help', label: 'Years 7 to 10 maths', p: 'Curriculum help.' },
      { href: '/maths-tutor-cost-australia-explained', label: 'Maths tutor costs', p: 'Prices explained.' }
    ]
  },
  start: {
    h2: 'Book a free Adelaide maths lesson',
    lede: 'Tell us when we can call. The free lesson is a real lesson, and we follow it with a plain recommendation.',
    readFirst: 'Curious first? There is a page on <a class="ag-inline-link" href="/how-we-teach">our lessons</a>, and another on <a class="ag-inline-link" href="/online-maths-tutoring-australia">tutoring maths online across Australia</a>.',
    note: 'Expect a call or message from India (the number begins +91): we have no office in Adelaide or anywhere else in Australia. An Australian mobile on WhatsApp tends to get the quickest reply.',
    formNote: 'Free, no card, no obligation.'
  },
  footer: {
    cols: [
      {
        h4: 'South Australia',
        links: [
          { href: '/sace-mathematical-methods-tutoring', label: 'SACE Methods' },
          { href: '/sace-specialist-mathematics-tutoring', label: 'SACE Specialist' },
          { href: '/sa-ignite-entry-maths-practice', label: 'SA IGNITE maths' },
          { href: '/how-we-teach', label: 'How we teach' }
        ]
      },
      {
        h4: 'Australia',
        links: [
          { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
          { href: '/online-maths-tutoring-australia', label: 'Online maths tutoring' },
          { href: '/australian-mathematics-competition-practice-by-year', label: 'Maths competitions' },
          { href: '/australian-mathematical-olympiad-preparation', label: 'Mathematical Olympiad' }
        ]
      }
    ],
    bottomRight: 'Thin triangles need careful sums'
  },
  personalityCss: `
.ag-root.ag-mtad .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-mtad .ag-capsule { border-left-width: 7px; border-radius: 2px; }
.ag-root.ag-mtad .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-mtad .ag-table caption { text-align: left; font-weight: 615; }
.ag-root.ag-mtad .ag-band-head h3 { letter-spacing: -0.015em; }
.ag-root.ag-mtad .ag-slots { gap: 0.95rem; }
`,
  dossier: {
    curriculumAuthority: 'South Australia: SACE Board, mathematics subjects Essential Mathematics, General Mathematics, Mathematical Methods, Specialist Mathematics; Mathematical Methods overview description.',
    localProject: 'Heron versus coordinates on triangles between Adelaide city squares (OpenStreetMap, 13 October 2026; square position = mean of mapped points): Light-Hindmarsh-Victoria 225,557 m2, Heron (1 m) 225,705; Light-Victoria-Hurtle 31,923 m2, Heron (1 m) 32,523, Heron (10 m) 0; Hindmarsh-Victoria-Whitmore 10,309 m2, Heron (1 m) 0. Half base times height wins for thin triangles. Lesson family: Heron\'s formula.',
    requiredMentions: [
      'Essential Mathematics',
      'develops an increasingly complex and sophisticated understanding of calculus and statistics',
      '117,510',
      '81,582',
      '77,275',
      '181,904',
      '91,064',
      '150,458',
      'When Heron\'s formula says a triangle has no area',
      'Hurtle Square'
    ],
    sources: [
      {
        claim: 'SACE Board, Mathematical Methods overview: subject list and description.',
        url: 'https://www.sace.sa.edu.au/web/mathematical-methods/overview'
      },
      {
        claim: 'ABS, 2021 Census QuickStats, Greater Adelaide: education attendance and highest attainment rows.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/4GADE'
      },
      {
        claim: 'OpenStreetMap ways and relations named for the five Adelaide city squares, Overpass query 13 October 2026.',
        url: 'https://www.openstreetmap.org/copyright'
      }
    ],
    rejectedClaims: [
      'History of the city plan and its surveyor: no primary source read raw this week, so no history is claimed.',
      'Mathematical Association of South Australia: its host did not answer from this network.',
      'Preschool and bachelor-level counts for Greater Adelaide: already on our Adelaide coding pages.',
      'SACE results or school comparisons: none.',
      'Named tutoring businesses in Adelaide: none.'
    ]
  }
};
