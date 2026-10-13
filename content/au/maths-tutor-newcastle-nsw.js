'use strict';
// Maths tutor in Newcastle, NSW (ag- maths by city; AU cluster Phase 10, row 378).
// Intent: families and adults in the City of Newcastle searching for a maths tutor: Kindergarten to Year 12 and adults,
// the NSW HSC mathematics courses, and online lessons in Newcastle (Sydney) time. Links the NSW maths doors.
// Sources, read raw on 13 October 2026 (curl, default agent):
//  - NESA, NSW Curriculum, Mathematics: stages Primary (K to 6), Secondary (7 to 10), Senior (11 to 12); Mathematics
//    Standard, Advanced, Extension 1 and Extension 2, each 11-12 (2024). (Shared NSW fact, written fresh here.)
//  - ABS, 2021 Census QuickStats, City of Newcastle LGA (LGA15900): primary 12,401; secondary 9,516; vocational 4,423;
//    university or other higher education 13,233 (25.3%); highest attainment Bachelor Degree level and above 40,077
//    (28.3%), Year 12 20,225 (14.3%), Year 10 15,216 (10.8%), Certificate III 18,401 (13.0%), Advanced Diploma and Diploma
//    12,487. Preschool not used. None appears on our Newcastle coding pages.
//  - OpenStreetMap, one Overpass query (osm_base 2026-10-13T10:20:53Z): leisure=swimming_pool polygons named Newcastle Ocean Baths
//    (4203.5 m2), Newcastle Canoe Pool (6768.0), Merewether Ocean Baths (5001.9), Soldiers Baths (1685.1).
//    University of Newcastle pages returned 403 and were not used.
// Lesson family: volume of a prism with an uncertain dimension. Depth is not mapped, so volumes are given for assumed
// average depths of 1.0, 1.5 and 2.0 m (our assumption, labelled). Rounding each area to the nearest 100 m2 changes the
// 1.5 m volume by under 1%, while the depth range changes it by a factor of two: the simple rounded area is good enough.
// Comparison: a 50 m by 25 m pool 2 m deep holds 2,500 m3 (our arithmetic).

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: {
    group: 'city',
    tag: 'NEWCASTLE MATHS',
    label: 'Maths tutor in Newcastle',
    blurb: 'A maths tutor for Newcastle learners from Kindergarten to the HSC and adults, with a volume project on the city\'s ocean baths.'
  },
  slug: 'maths-tutor-newcastle-nsw',
  code: 'mtnc',
  accent: '#73592F',
  accentRationale: 'Newcastle maths: a muted sandstone brown computed for New South Wales, at least 20 RGB from every NSW page accent, 10 from every AU accent and 6 from every colour in use',
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
  routeLabel: 'Maths tutor in Newcastle, NSW',
  title: 'Maths Tutor Newcastle NSW | K to 12, HSC and Adults, Online',
  description: 'Online maths tutor for Newcastle, NSW: Kindergarten to Year 12 and adults, HSC Standard, Advanced and Extension maths, live in Newcastle time. First lesson free.',
  ogDescription: 'How much seawater does Newcastle Ocean Baths hold? The area comes from a map; the depth is a guess. A Newcastle maths tutor shows which one matters more.',
  twitterDescription: 'Newcastle maths tutoring, live online: Kindergarten to HSC and adults, with a real volume problem from the ocean baths.',
  pageName: 'Maths Tutor in Newcastle, NSW',
  webPageDescription: 'Live online maths tutoring for City of Newcastle learners from Kindergarten to the HSC mathematics courses and adult maths, with a volume-estimation project on the ocean baths.',
  courseDescription: 'Live online maths lessons for Newcastle learners, privately or in level-matched groups of five to ten, from early number to HSC Mathematics Extension 2 and adult maths.',
  crumbs: [
    { name: 'Courses', href: '/courses' },
    { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }
  ],
  crumbLabel: 'Maths tutor in Newcastle',
  navLinks: [
    { href: '#ncl-levels', label: 'Year levels' },
    { href: '#ncl-hsc', label: 'HSC maths' },
    { href: '#baths', label: 'A worked example' },
    { href: '#newcastle', label: 'Newcastle learners' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Newcastle, New South Wales &middot; Kindergarten to HSC and adults &middot; Online maths tuition',
  h1: 'Maths tutor in Newcastle',
  lede: 'Newcastle\'s ocean baths are among the city\'s favourite places, and they make a fine maths problem. How much water does Newcastle Ocean Baths hold? A map gives the surface area: about 4,204 square metres. The depth is harder, because maps do not record it. So the honest answer is a range: if the average depth is between one and two metres, the baths hold somewhere between 4,203 and 8,407 cubic metres of seawater. Deciding which measurement deserves more care, the area or the depth, is the real lesson. Our live online maths tutoring serves Newcastle learners from Kindergarten to the HSC and adults, in Newcastle time.',
  secondaryCta: { href: '#baths', label: 'See the ocean baths project' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for a learner in Newcastle, NSW.',
  heroNote: 'Maths only on this page &middot; Kindergarten to adult &middot; Independent of every Newcastle school and the university',
  spec: [
    ['Ages', '6 to 67'],
    ['Primary', 'Kindergarten to Year 6'],
    ['Secondary', 'Years 7 to 10'],
    ['HSC', 'Standard, Advanced, Extension 1 and 2'],
    ['Adults', 'Bridging units and refreshers'],
    ['How', 'Live video, private or five to ten'],
    ['Time', 'Newcastle time, with daylight saving'],
    ['City project', 'How much water the baths hold']
  ],
  capsuleQ: 'Maths tutor in Newcastle, in brief',
  capsule: 'Learners in Newcastle, New South Wales, can study maths live online with Modern Age Coders from age 6 to 67. That covers the NSW syllabus from Kindergarten through Year 10, every HSC mathematics course from Standard to Extension 2, and maths for adults. Sessions run in Newcastle time, privately or with five to ten learners at the same level, and the first one is free.',
  picks: {
    eyebrow: 'Where Newcastle learners often begin',
    h2: 'Three courses for Newcastle families',
    lede: 'A strong primary course, an algebra course for students who have lost confidence, and a senior course for HSC students. The rest of the range follows below.',
    items: [
      {
        course: 'elementary-mathematics-complete-masterclass',
        code: 'NCL / 1',
        title: 'Primary maths',
        note: 'Kindergarten to Year 6: number, measurement (including volume), shape and data.'
      },
      {
        course: 'algebra-foundations-masterclass',
        code: 'NCL / 2',
        title: 'Algebra from the ground up',
        note: 'For Years 7 to 10 students who need algebra rebuilt before the HSC courses.'
      },
      {
        course: 'complete-high-school-mathematics-mastery',
        code: 'NCL / 3',
        title: 'Senior maths for the HSC',
        note: 'For Year 11 and 12 students: graphs, rates of change and probability, paced to whichever HSC course they are enrolled in.'
      }
    ]
  },
  sections: [
    {
      id: 'ncl-levels',
      tint: 'tint',
      eyebrow: 'Kindergarten to Year 12',
      h2: 'A Newcastle maths tutor for every stage',
      lede: 'Newcastle children start school in Kindergarten and can stay until Year 12. NESA sorts those years into three bands, and our teachers plan with the same bands in mind.',
      body: [
        {
          kind: 'table',
          caption: 'Stages and lesson emphasis',
          head: ['NSW stage', 'Years', 'What we stress'],
          rows: [
            ['Primary, early', 'Kindergarten to Year 2', 'Number, counting patterns and comparing quantities'],
            ['Primary, later', 'Years 3 to 6', 'Multiplication, fractions, area and volume of simple solids'],
            ['Secondary, early', 'Years 7 and 8', 'Algebra, ratio, angles and prisms'],
            ['Secondary, later', 'Years 9 and 10', 'Equations, trigonometry, surface area and volume'],
            ['Senior', 'Years 11 and 12', 'The HSC mathematics course chosen'],
            ['Adults', 'To 67', 'Bridging, work and personal goals']
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'Tests along the way',
          left: [
            'For the OC test see <a class="ag-inline-link" href="/oc-test-maths-practice-nsw">OC test maths practice</a>; for selective entry, <a class="ag-inline-link" href="/nsw-selective-test-mathematical-reasoning-practice">selective test mathematical reasoning</a>; for national tests, <a class="ag-inline-link" href="/naplan-numeracy-practice-online">NAPLAN numeracy</a>.',
            'This page covers maths learning more broadly.'
          ],
          rightH3: 'Who we usually teach',
          right: [
            'Students who need a gap filled, students who want stretch, and adults returning to study at TAFE or university.',
            'A free first lesson shows which group a learner is in.'
          ]
        }
      ]
    },
    {
      id: 'ncl-hsc',
      tint: 'deep',
      eyebrow: 'HSC mathematics',
      h2: 'HSC maths courses for Newcastle students',
      lede: 'NESA\'s curriculum site lists four senior mathematics courses, now in their 11 to 12 (2024) versions. Newcastle students choose among the same four as the rest of the state.',
      body: [
        {
          kind: 'table',
          caption: 'NSW senior mathematics courses (NESA, read 13 October 2026)',
          head: ['Course', 'Suits students who', 'Further reading'],
          rows: [
            [
              'Mathematics Standard',
              'want maths for work, money and data',
              '<a class="ag-inline-link" href="/hsc-maths-standard-tutoring">HSC Maths Standard page</a>'
            ],
            [
              'Mathematics Advanced',
              'plan calculus-based study',
              '<a class="ag-inline-link" href="/hsc-maths-advanced-tutoring">HSC Maths Advanced page</a>'
            ],
            [
              'Mathematics Extension 1',
              'are strong in Advanced and want more',
              '<a class="ag-inline-link" href="/hsc-maths-extension-1-tutoring">Extension 1 page</a>'
            ],
            [
              'Mathematics Extension 2',
              'love proof and difficult problems',
              '<a class="ag-inline-link" href="/hsc-maths-extension-2-tutoring">Extension 2 page</a>'
            ]
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'Making the choice',
          left: [
            'Volume and surface area questions, like the ocean baths problem below, appear across all four courses in different forms. How comfortably a student handles them is a good hint about which course suits.',
            'For the first senior year, our page on <a class="ag-inline-link" href="/preliminary-hsc-maths-year-11-help">preliminary HSC maths</a> has more detail.'
          ],
          rightH3: 'What we never promise',
          right: [
            'Bands, marks or ATARs. We teach carefully and help with exam technique, and assessment tasks stay the student\'s own work.',
            'Honest feedback about course choice comes first.'
          ]
        },
        {
          kind: 'source',
          html: 'Source: NSW Education Standards Authority, <a class="ag-inline-link" href="https://curriculum.nsw.edu.au/learning-areas/mathematics" rel="noopener" target="_blank">NSW Curriculum, Mathematics</a>, read 13 October 2026.'
        }
      ]
    },
    {
      id: 'baths',
      tint: 'tint',
      eyebrow: 'A Newcastle worked example',
      h2: 'How much water is in Newcastle\'s ocean baths?',
      lede: 'A pool with straight sides and a flat floor is a prism: its volume is the area of its surface multiplied by its depth. The area we can measure from a map. The depth we cannot, so we treat it as an unknown and work with a range.',
      body: [
        {
          kind: 'p',
          html: 'OpenStreetMap draws the outline of each pool. Adding up the outline with the shoelace method gives the surface area. Because depth is not mapped, and the floors of ocean baths are not flat, we used three assumed average depths, 1.0, 1.5 and 2.0 metres, and calculated a volume for each. These depths are our assumption for the exercise, not measurements.'
        },
        {
          kind: 'table',
          caption: 'Pool areas from OpenStreetMap and volumes for assumed average depths (our calculation)',
          head: ['Pool', 'Area (m&sup2;)', 'Volume at 1.0 m (m&sup3;)', 'At 1.5 m', 'At 2.0 m'],
          numCols: [
            1,
            2,
            3,
            4
          ],
          rows: [
            ['Newcastle Canoe Pool', '6,768.0', '6,768', '10,152', '13,536'],
            ['Merewether Ocean Baths', '5,001.9', '5,002', '7,503', '10,004'],
            ['Newcastle Ocean Baths', '4,203.5', '4,203', '6,305', '8,407'],
            ['Soldiers Baths', '1,685.1', '1,685', '2,528', '3,370']
          ]
        },
        {
          kind: 'three',
          mt: true,
          cells: [
            {
              h3: 'The depth dominates',
              p: 'For Newcastle Ocean Baths, moving the assumed depth from 1.0 to 2.0 metres doubles the volume, from 4,203 to 8,407 cubic metres. No amount of care with the area can fix an uncertainty that large.'
            },
            {
              h3: 'The simple area is enough',
              p: 'Rounding the area to the nearest hundred square metres (4,200) changes the 1.5 metre volume from 6,305 to 6,300 cubic metres, less than one per cent. A rough area is good enough; effort belongs on the depth.'
            },
            {
              h3: 'A sense of scale',
              p: 'A 50 by 25 metre pool, 2 metres deep, holds 2,500 cubic metres. At an average depth of 1.5 metres, Newcastle Ocean Baths would hold about 2.5 times as much.'
            }
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'What students practise',
          left: [
            'Area of irregular shapes, prisms and volume, unit conversion (one cubic metre is 1,000 litres), working with an unknown, and reporting a range instead of a false single number.',
            'At an assumed 1.25 metres, the baths would hold about 5.25 million litres, a figure students enjoy checking.'
          ],
          rightH3: 'Honest limits',
          right: [
            'Pool outlines are as mapped; depths are assumed; real ocean baths have sloping, uneven floors and change with the tide. The figures illustrate the method, not the engineering.',
            'Map data: OpenStreetMap contributors, ODbL.'
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'The same problem at different year levels',
          head: ['Years', 'Version of the task'],
          rows: [
            ['3 to 6', 'Count squares on a grid drawing of a pool, then multiply by a depth'],
            ['7 and 8', 'Use length times width times depth for a rectangular model'],
            ['9 and 10', 'Find an irregular area, then the volume, then convert to litres'],
            ['11 and 12', 'Model a sloping floor and find the volume by integration']
          ]
        },
        {
          kind: 'source',
          html: 'Data: <a class="ag-inline-link" href="https://www.openstreetmap.org/copyright" rel="noopener" target="_blank">OpenStreetMap</a> swimming pool outlines, one Overpass query on 13 October 2026. Areas and volumes are our calculation; depths are assumed.'
        }
      ]
    },
    {
      id: 'newcastle',
      tint: 'deep',
      eyebrow: 'Newcastle learners',
      h2: 'City of Newcastle in the 2021 Census: students and qualifications',
      lede: 'One number stands out: a quarter of the people in education in the City of Newcastle were at university.',
      body: [
        {
          kind: 'table',
          caption: 'City of Newcastle local government area, 2021 Census',
          head: ['Measure', 'People'],
          numCols: [
            1
          ],
          rows: [
            ['Attending primary school', '12,401'],
            ['Attending secondary school', '9,516'],
            ['Attending vocational education, including TAFE', '4,423'],
            ['Attending university or other higher education', '13,233 (25.3%)'],
            ['Highest level Bachelor Degree or above', '40,077 (28.3%)'],
            ['Highest level Year 12', '20,225 (14.3%)'],
            ['Highest level Year 10', '15,216 (10.8%)'],
            ['Highest level Certificate III', '18,401 (13.0%)'],
            ['Highest level Advanced Diploma or Diploma', '12,487']
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'A university city',
          left: [
            'More people in the City of Newcastle were attending university or other higher education (13,233) than primary school (12,401). First-year maths support is a common request here.',
            'We print the figures as published, without adding rows.'
          ],
          rightH3: 'Schools and families',
          right: [
            'Thousands of Newcastle children are at primary and secondary school, and their parents ask us about everything from times tables to HSC calculus.',
            'A teacher looks at the school\'s current unit before planning lessons, so that tutoring reinforces class work rather than racing ahead of it or repeating it.'
          ]
        },
        {
          kind: 'source',
          html: 'Source: ABS, <a class="ag-inline-link" href="https://abs.gov.au/census/find-census-data/quickstats/2021/LGA15900" rel="noopener" target="_blank">2021 Census QuickStats, City of Newcastle</a>, read 13 October 2026, CC BY 4.0.'
        }
      ]
    },
    {
      id: 'ncl-online',
      tint: '',
      eyebrow: 'Online in Newcastle time',
      h2: 'Lessons on Newcastle\'s clock, through daylight saving',
      lede: 'Newcastle shares Sydney\'s time: four and a half hours ahead of India in winter, five and a half in summer once daylight saving starts in October. Every booking is made in Newcastle time.',
      body: [
        {
          kind: 'three',
          cells: [
            { h3: 'Just one learner', p: 'A private lesson each week for a topic, a test or a fresh start.' },
            { h3: 'Five to ten together', p: 'A level-matched group with one regular teacher and plenty of discussion.' },
            { h3: 'Working in view', p: 'A shared digital board where each step a student writes is visible to the teacher.' }
          ]
        },
        {
          kind: 'p',
          mt: true,
          html: 'Online lessons save Newcastle families the drive, which matters for learners in the outer suburbs and for students fitting maths around sport, part-time work or a university timetable.'
        },
        {
          kind: 'p',
          mt: true,
          html: 'Some families worry that a screen makes maths harder to follow. Usually the opposite happens: the teacher sees every line a student writes, can zoom in on a diagram, and can pause the moment something looks wrong. Lessons are recorded only with permission, and notes are shared afterwards so that practice between lessons stays on track.'
        },
        {
          kind: 'p',
          mt: true,
          html: 'Students who began with us in primary school often stay through high school, which means the teacher already knows their habits when the HSC arrives. That continuity is one of the quiet advantages of steady weekly lessons.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Progress',
    h2: 'From counting to calculus',
    lede: 'Learners start wherever they are.',
    table: {
      caption: 'Four markers of progress',
      head: ['Usually', 'Marker', 'Secure when'],
      rows: [
        ['K to Year 2', '1. Counting', 'They count objects reliably and compare amounts'],
        ['Years 3 to 6', '2. Space', 'They find area by counting squares and then by multiplying'],
        ['Years 7 to 10', '3. Volume', 'They find the volume of a prism and convert to litres'],
        ['Years 11 and 12', '4. Uncertainty', 'They report an answer as a range when an input is unknown']
      ]
    },
    left: {
      h3: 'Arriving in Year 11',
      ps: ['We check junior algebra and measurement before HSC topics.', 'Most gaps close within a term.']
    },
    right: {
      h3: 'University students and adults',
      ps: ['First-year maths and bridging units are common requests.', 'We teach concepts, never assessed work.']
    }
  },
  catalogue: {
    eyebrow: 'Course list',
    h2: 'Maths courses for Newcastle learners',
    lede: 'International course names, taught to NSW stages and the HSC course a student is in.',
    bands: [
      {
        num: 'I',
        h3: 'Primary',
        sub: 'Kindergarten to Year 6',
        courses: [
          { code: 'NCL / P1', slug: 'early-math-foundations', title: 'First maths', blurb: 'Counting with objects.' },
          { code: 'NCL / P2', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'Number to volume.' },
          { code: 'NCL / P3', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus', blurb: 'Mental arithmetic.' }
        ]
      },
      {
        num: 'II',
        h3: 'Secondary',
        sub: 'Years 7 to 10',
        courses: [
          { code: 'NCL / S1', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Secondary maths', blurb: 'Prisms, algebra, trigonometry.' },
          { code: 'NCL / S2', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Confidence first.' },
          { code: 'NCL / S3', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Harder problems.' }
        ]
      },
      {
        num: 'III',
        h3: 'HSC and beyond',
        sub: 'Years 11, 12 and adults',
        courses: [
          { code: 'NCL / H1', slug: 'complete-high-school-mathematics-mastery', title: 'HSC-level maths', blurb: 'Functions and calculus.' },
          { code: 'NCL / H2', slug: 'ap-calculus-exam-prep', title: 'Calculus', blurb: 'For Advanced and Extension.' },
          { code: 'NCL / H3', slug: 'college-mathematics-complete-masterclass', title: 'University maths', blurb: 'First-year topics.' }
        ]
      }
    ]
  },
  how: {
    eyebrow: 'Times',
    h2: 'Fitting lessons into a Newcastle week',
    lede: 'Lessons are fixed in Newcastle time; we adjust for daylight saving so families do not have to.',
    slots: [
      { time: 'After school', l: 'Primary and junior secondary.' },
      { time: 'Weeknights', l: 'HSC students and adults.' },
      { time: 'Weekends', l: 'Longer sessions.' }
    ],
    cells: [
      { h3: 'One teacher', p: 'Continuity week to week.' },
      { h3: 'Short updates', p: 'For parents after lessons.' },
      { h3: 'Groups by level', p: 'Five to ten learners.' },
      { h3: 'Local problems', p: 'Baths, beaches and maps.' },
      { h3: 'Private lessons', p: 'For one goal.' },
      { h3: 'Ideas before drills', p: 'Understanding first.' }
    ]
  },
  projectsH2: 'Projects from our learners',
  projectsLede: 'Things students built once their maths was solid. More in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from families, as posted.',
  fees: {
    h2: 'Fees for maths tutoring in Newcastle',
    lede: 'A single monthly charge in US dollars covers lessons for Newcastle families; you pay nothing up front, and can finish whenever a month ends.',
    free: ['A full lesson at the learner\'s level', 'A clear recommendation', 'No card'],
    group: ['Five to ten learners', 'The same teacher', 'Marked practice', 'Stop after any month'],
    one: ['Private lessons', 'Built around one goal', 'Useful before HSC exams']
  },
  faq: {
    eyebrow: 'Newcastle maths questions',
    h2: 'Questions about maths tutoring in Newcastle',
    items: [
      {
        q: 'How does a Newcastle maths tutor work with my child?',
        a: 'By finding the gaps, teaching the missing ideas clearly and setting practice until they stick, in live online lessons in Newcastle time, privately or in a small group.'
      },
      {
        q: 'Do you teach all four HSC maths courses?',
        a: 'We do. Newcastle senior students in any of Standard, Advanced, Extension 1 or Extension 2 can learn with us, following the current NESA syllabuses.'
      },
      {
        q: 'How do you find the volume of a pool?',
        a: 'For a flat-floored pool, multiply the surface area by the depth. Newcastle Ocean Baths has a mapped area of about 4,204 square metres, so at an assumed 1.5 metres average depth it holds roughly 6,305 cubic metres.'
      },
      {
        q: 'Why give a range instead of one answer?',
        a: 'Because the depth is not measured. A range between the smallest and largest sensible depths is more honest than a single number.'
      },
      {
        q: 'Can lessons lock in a particular band?',
        a: 'No tutor can honestly promise that. We teach the content well and practise exam technique, but bands, marks and any ATAR depend on the student and the exam.'
      },
      { q: 'Can university students get help?', a: 'Yes, with first-year maths concepts, never with assessed work.' },
      {
        q: 'My child finds volume and area confusing. Where do you start?',
        a: 'With real objects and grids: counting squares for area, stacking cubes for volume, then linking both to multiplication. Once the picture is clear, the formulas follow naturally, and problems like the ocean baths become a pleasure rather than a puzzle.'
      },
      {
        q: 'Is online tutoring suitable for students in the Hunter outside the city?',
        a: 'Yes. Lessons run anywhere with a reliable internet connection, so learners across the wider region book the same lessons in the same local time.'
      },
      { q: 'Are lessons in Newcastle time?', a: 'Always. When the clocks go forward in October or back in April, we move the booking for you.' },
      { q: 'What do lessons cost?', a: 'Nothing for the first one. After that, the group and private monthly fees appear in the fees panel above.' }
    ]
  },
  elsewhere: {
    eyebrow: 'More for Newcastle',
    h2: 'Related pages',
    lede: 'NSW maths, tests and costs.',
    items: [
      { href: '/maths-tutor-sydney', label: 'Maths tutor in Sydney', p: 'Our page for Greater Sydney.' },
      { href: '/hsc-maths-advanced-tutoring', label: 'HSC Mathematics Advanced', p: 'The calculus course in detail.' },
      { href: '/hsc-maths-standard-tutoring', label: 'HSC Maths Standard', p: 'Applied senior maths.' },
      { href: '/naplan-numeracy-practice-online', label: 'NAPLAN numeracy', p: 'Practice by year.' },
      { href: '/australian-mathematics-competition-practice-by-year', label: 'Maths competition practice', p: 'Problems by year.' },
      { href: '/maths-tutor-cost-australia-explained', label: 'Maths tutor costs', p: 'Prices explained.' }
    ]
  },
  start: {
    h2: 'Book a free Newcastle maths lesson',
    lede: 'Send your number and a convenient time. The free lesson is taught at the learner\'s level, and we give straightforward advice afterwards.',
    readFirst: 'You can read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or <a class="ag-inline-link" href="/online-maths-tutoring-australia">about online maths tutoring</a> first.',
    note: 'Replies come from our India team on a +91 number, and there is no Newcastle office. WhatsApp from an Australian mobile gets the fastest response.',
    formNote: 'Free, no card, no obligation.'
  },
  footer: {
    cols: [
      {
        h4: 'NSW maths',
        links: [
          { href: '/maths-tutor-sydney', label: 'Maths tutor in Sydney' },
          { href: '/hsc-maths-extension-1-tutoring', label: 'HSC Extension 1' },
          { href: '/oc-test-maths-practice-nsw', label: 'OC test maths' },
          { href: '/how-we-teach', label: 'How we teach' }
        ]
      },
      {
        h4: 'Australia',
        links: [
          { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
          { href: '/online-maths-tutoring-australia', label: 'Online maths tutoring' },
          { href: '/maths-tutor-cost-australia-explained', label: 'Maths tutor costs' },
          { href: '/australian-mathematical-olympiad-preparation', label: 'Mathematical Olympiad' }
        ]
      }
    ],
    bottomRight: 'Measure what matters most'
  },
  personalityCss: `
.ag-root.ag-mtnc .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-mtnc .ag-capsule { border-left-width: 5px; border-radius: 1px; }
.ag-root.ag-mtnc .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-mtnc .ag-table caption { text-align: left; font-weight: 655; }
.ag-root.ag-mtnc .ag-band-head h3 { letter-spacing: -0.007em; }
.ag-root.ag-mtnc .ag-slots { gap: 0.8rem; }
`,
  dossier: {
    curriculumAuthority: 'NSW: NESA, NSW Curriculum mathematics learning area (Primary K to 6, Secondary 7 to 10, Senior 11 to 12; Mathematics Standard, Advanced, Extension 1 and 2, 11-12 (2024)).',
    localProject: 'Ocean baths volume from OpenStreetMap areas (2026-10-13T10:20:53Z): Newcastle Ocean Baths 4203.5 m2, Newcastle Canoe Pool 6768.0, Merewether Ocean Baths 5001.9, Soldiers Baths 1685.1; volumes at assumed average depths 1.0, 1.5 and 2.0 m; rounding area to 100 m2 changes the 1.5 m volume by under 1% (simple rounded area is enough; depth dominates). Lesson family: prism volume with an uncertain dimension.',
    requiredMentions: [
      'Newcastle Ocean Baths',
      'Newcastle Canoe Pool',
      'Soldiers Baths',
      '12,401',
      '9,516',
      '13,233',
      '40,077',
      '18,401',
      'How much water is in Newcastle\'s ocean baths?'
    ],
    sources: [
      { claim: 'NESA, NSW Curriculum, Mathematics: stages and the four senior courses.', url: 'https://curriculum.nsw.edu.au/learning-areas/mathematics' },
      {
        claim: 'ABS, 2021 Census QuickStats, City of Newcastle LGA: education attendance and highest attainment rows.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA15900'
      },
      {
        claim: 'OpenStreetMap swimming pool outlines for Newcastle and Merewether baths, Overpass query 13 October 2026.',
        url: 'https://www.openstreetmap.org/copyright'
      }
    ],
    rejectedClaims: [
      'Official depths, capacities or history of the ocean baths: City of Newcastle pages returned 404 and no depth is mapped, so depths are stated as assumptions.',
      'University of Newcastle maths school pages: 403 to curl\'s default agent; not used.',
      'Claims that any baths are the largest of their kind: not verified; not made.',
      'Preschool attendance for the City of Newcastle: not used.',
      'Named tutoring businesses in Newcastle: none.'
    ]
  }
};
