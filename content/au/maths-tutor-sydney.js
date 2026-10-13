'use strict';
// Maths tutor in Sydney (ag- maths by city; AU cluster Phase 10, row 371).
// Intent: families and adult learners in Greater Sydney searching for a maths tutor: Kindergarten to Year 12 and adults,
// the NSW senior maths courses, and how live online lessons work in Sydney time. Links the NSW maths doors (OC, selective,
// NAPLAN, HSC Standard, Advanced, Extension 1 and 2) rather than repeating them.
// Sources, read raw on 13 October 2026 (curl, default agent):
//  - NESA, NSW Curriculum, Mathematics learning area: stages Primary (K to 6), Secondary (7 to 10), Senior (11 to 12);
//    Mathematics Standard 11-12 (2024), Mathematics Advanced 11-12 (2024), Mathematics Extension 1 11-12 (2024),
//    Mathematics Extension 2 11-12 (2024), alongside the Stage 6 (2017) versions.
//  - ABS, 2021 Census QuickStats, Greater Sydney (1GSYD): attending primary school 427,508; secondary 339,220; vocational
//    tertiary 137,739; university or other higher education 288,727; highest attainment Bachelor Degree level and above
//    1,423,358 (33.3%), Year 12 679,878 (15.9%) and the other rows used in the project. (Preschool figure not used: it
//    appears on coding-classes-for-kids-sydney.) Sector rows not used.
//  - University of Sydney, School of Mathematics and Statistics: "one of the largest mathematical sciences schools in
//    Australia"; "the only Australian university to have received the highest rating of 5 out of 5 for research in the
//    mathematical sciences in every Australian Research Council Excellence in Research for Australia assessment to date".
//  - MANSW home page: "MANSW provides support for Mathematics teachers K-12"; member publications PAMphlet (primary) and
//    Fractal (secondary).
// Lesson family: reverse percentages. Each attainment row gives an interval for the whole (people aged 15 and over) because
// the percentage is rounded to one decimal; intersecting seven intervals pins it to 4,267,940 to 4,268,256 (width
// 316). Dividing the largest row alone gives 4,274,348, off the midpoint by 6,250 (0.15%): the
// simple method is good enough for nearly every purpose. Rows are never added together.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: {
    group: 'city',
    tag: 'SYDNEY MATHS',
    label: 'Maths tutor in Sydney',
    blurb: 'A maths tutor for Sydney learners from Kindergarten to Year 12 and adults, with the NSW senior courses explained and a real percentage puzzle from the Census.'
  },
  slug: 'maths-tutor-sydney',
  code: 'mtsy',
  accent: '#2B1C5E',
  accentRationale: 'Sydney maths: a deep muted violet-navy computed for New South Wales, at least 20 RGB from every NSW page accent, 10 from every AU accent and 6 from every colour in use',
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
  routeLabel: 'Maths tutor in Sydney',
  title: 'Maths Tutor in Sydney | K to 12, HSC and Adults, Online',
  description: 'Online maths tutor for Sydney, Kindergarten to Year 12 and adults: the NSW syllabus and HSC Standard, Advanced and Extension maths, live in Sydney time.',
  ogDescription: 'Seven rounded percentages from the Census pin a hidden Sydney total to a window 316 people wide. How a Sydney maths tutor turns real data into real maths.',
  twitterDescription: 'Sydney maths tutoring, live online: Kindergarten to HSC and adult maths, in Sydney time, with real problems from real data.',
  pageName: 'Maths Tutor in Sydney',
  webPageDescription: 'Live online maths tutoring for Greater Sydney learners from Kindergarten to Year 12 and adults, following the NSW syllabus and the HSC mathematics courses, with a reverse-percentage project on Census data.',
  courseDescription: 'Live online maths lessons for Sydney learners, one to one or in level-matched groups of fifteen to twenty, from early number to HSC Mathematics Extension 2 and adult maths.',
  crumbs: [
    { name: 'Courses', href: '/courses' },
    { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }
  ],
  crumbLabel: 'Maths tutor in Sydney',
  navLinks: [
    { href: '#levels', label: 'Year levels' },
    { href: '#senior', label: 'HSC maths' },
    { href: '#reverse', label: 'A worked example' },
    { href: '#online', label: 'Online in Sydney' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Sydney &middot; Kindergarten to Year 12 and adults &middot; Live online maths',
  h1: 'Maths tutor in Sydney',
  lede: 'Sydney is a city of numbers, and some of the most useful ones are hidden in plain sight. The 2021 Census says 679,878 people in Greater Sydney finished their schooling at Year 12, and that this is 15.9% of everyone aged 15 and over. It never prints that total in the same table. Can you work it out? Roughly, yes, in one line of arithmetic. Exactly? Only to within a window, because 15.9% has been rounded. Combine seven rows of the same table and the window shrinks to 316 people. That is the kind of maths we teach: careful, honest and connected to something real. Our live online maths tutoring serves Sydney learners from Kindergarten to Year 12 and adults, following the NSW syllabus and the HSC courses, in Sydney time.',
  secondaryCta: { href: '#reverse', label: 'See the percentage puzzle' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for a learner in Sydney.',
  heroNote: 'Maths only on this page &middot; Kindergarten to adult &middot; Independent of every Sydney school and university',
  spec: [
    ['Ages', '6 to 67'],
    ['Primary', 'Kindergarten to Year 6'],
    ['Secondary', 'Years 7 to 10'],
    ['Senior', 'HSC Standard, Advanced, Extension 1 and 2'],
    ['Adults', 'Brush-ups, bridging and workplace maths'],
    ['How', 'Live video, one to one or five to ten'],
    ['Time', 'Sydney time, all year'],
    ['City project', 'Reverse percentages on Census data']
  ],
  capsuleQ: 'Maths tutor in Sydney, in brief',
  capsule: 'Modern Age Coders is an online maths tutor for Sydney learners aged 6 to 67, teaching the NSW mathematics syllabus from Kindergarten to Year 10 and the HSC courses: Mathematics Standard, Advanced, Extension 1 and Extension 2. Lessons are live over video in Sydney time, one to one or in level-matched groups of fifteen to twenty, and the first lesson is free.',
  picks: {
    eyebrow: 'Where most Sydney families begin',
    h2: 'Primary, junior secondary and senior maths',
    lede: 'Three courses cover most requests from Sydney: building number sense in primary school, holding algebra together in Years 7 to 10, and preparing for the HSC courses. More options follow further down.',
    items: [
      {
        course: 'elementary-mathematics-complete-masterclass',
        code: 'SYD / 1',
        title: 'Primary maths',
        note: 'Kindergarten to Year 6 in Sydney terms: place value, fractions, measurement and early problem solving.'
      },
      {
        course: 'comprehensive-middle-school-mathematics-mastery',
        code: 'SYD / 2',
        title: 'Years 7 to 10 maths',
        note: 'Algebra, ratio, geometry and statistics, the ground every HSC course stands on.'
      },
      {
        course: 'complete-high-school-mathematics-mastery',
        code: 'SYD / 3',
        title: 'Senior maths',
        note: 'Functions, calculus and statistics for Years 11 and 12, matched to the HSC course a student is taking.'
      }
    ]
  },
  sections: [
    {
      id: 'levels',
      tint: 'tint',
      eyebrow: 'Kindergarten to Year 12',
      h2: 'A maths tutor for every year level in Sydney',
      lede: 'NSW groups its mathematics curriculum into Primary (K to 6), Secondary (7 to 10) and Senior (11 to 12). We teach to the same stages, and to adults who want to revisit any of them.',
      body: [
        {
          kind: 'table',
          caption: 'Year levels we teach for Sydney learners',
          head: ['Stage', 'Years', 'Where lessons usually focus'],
          rows: [
            ['Early primary', 'Kindergarten to Year 2', 'Counting, number bonds, place value and simple measurement'],
            ['Upper primary', 'Years 3 to 6', 'Multiplication, fractions and decimals, area and the first word problems'],
            ['Junior secondary', 'Years 7 and 8', 'Algebra as generalised arithmetic, ratio, angles and data'],
            ['Middle secondary', 'Years 9 and 10', 'Linear and quadratic relationships, trigonometry and probability'],
            ['Senior', 'Years 11 and 12', 'The HSC course the student has chosen'],
            ['Adults', 'Any age to 67', 'Whatever was missed the first time, rebuilt step by step']
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'Tests along the way',
          left: [
            'Some Sydney families are preparing for a particular test. We keep separate pages for <a class="ag-inline-link" href="/oc-test-maths-practice-nsw">OC test maths</a>, the <a class="ag-inline-link" href="/nsw-selective-test-mathematical-reasoning-practice">selective test mathematical reasoning</a> section and <a class="ag-inline-link" href="/naplan-numeracy-practice-online">NAPLAN numeracy</a>.',
            'This page is about everyday maths at every stage, which is what makes any of those tests manageable.'
          ],
          rightH3: 'Learners who come to us',
          right: [
            'Many are doing fine and want to go further; many have lost confidence in one topic and need it rebuilt. Both are normal, and the first free lesson tells us which applies.',
            'Adults are taught separately from school students, often for a university bridging unit or work.'
          ]
        }
      ]
    },
    {
      id: 'senior',
      tint: 'deep',
      eyebrow: 'Senior maths in NSW',
      h2: 'The HSC mathematics courses a Sydney student can take',
      lede: 'NESA lists four senior mathematics courses on its curriculum site, each in a new 11 to 12 (2024) version alongside the earlier Stage 6 (2017) one.',
      body: [
        {
          kind: 'table',
          caption: 'NSW senior mathematics courses, as listed by NESA (read 13 October 2026)',
          head: ['Course', 'Who it usually suits', 'Our detailed page'],
          rows: [
            [
              'Mathematics Standard 11 to 12',
              'Students who want practical, applied maths',
              '<a class="ag-inline-link" href="/hsc-maths-standard-tutoring">HSC Maths Standard</a>'
            ],
            [
              'Mathematics Advanced 11 to 12',
              'Students heading for calculus-based study',
              '<a class="ag-inline-link" href="/hsc-maths-advanced-tutoring">HSC Maths Advanced</a>'
            ],
            [
              'Mathematics Extension 1 11 to 12',
              'Strong Advanced students who want more depth',
              '<a class="ag-inline-link" href="/hsc-maths-extension-1-tutoring">HSC Extension 1</a>'
            ],
            [
              'Mathematics Extension 2 11 to 12',
              'Students who enjoy proof and hard problems',
              '<a class="ag-inline-link" href="/hsc-maths-extension-2-tutoring">HSC Extension 2</a>'
            ]
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'Choosing between courses',
          left: [
            'The right course depends on what a student enjoys and what they want to study next, not on what friends are taking. A short diagnostic lesson often settles the question faster than a term of worrying.',
            'Year 11 students can read our <a class="ag-inline-link" href="/preliminary-hsc-maths-year-11-help">Year 11 maths</a> page for the first year of senior study.'
          ],
          rightH3: 'What we promise, and what we do not',
          right: [
            'We teach the course content, exam technique and the habit of checking work. We make no promise of a band, a mark or an ATAR; those depend on the student and the exams.',
            'School-based assessment tasks are the student\'s own work, and we never write them.'
          ]
        },
        {
          kind: 'source',
          html: 'Source: NSW Education Standards Authority, <a class="ag-inline-link" href="https://curriculum.nsw.edu.au/learning-areas/mathematics" rel="noopener" target="_blank">Mathematics syllabuses on the NSW Curriculum site</a>, read 13 October 2026.'
        }
      ]
    },
    {
      id: 'reverse',
      tint: 'tint',
      eyebrow: 'A Sydney worked example',
      h2: 'Finding a hidden total from rounded percentages',
      lede: 'The Census table of highest education for Greater Sydney gives a count and a percentage on every row, but the percentages are rounded to one decimal place. Working backwards from them is a classic reverse-percentage problem, with a twist.',
      body: [
        {
          kind: 'p',
          html: 'If 679,878 people are 15.9% of a total, the total is 679,878 divided by 0.159, which is about 4.28 million. But "15.9%" really means anything from 15.85% up to 15.95%, so the total could be anywhere from 4,262,558 to 4,289,451. Every row of the table gives its own window like that. Because every row shares the same total, the true value must sit inside all of the windows at once.'
        },
        {
          kind: 'table',
          caption: 'Greater Sydney, people aged 15 and over, 2021 Census: each row\'s estimate of the total (our calculation)',
          head: ['Highest level', 'Count', 'Rounded share', 'Count divided by share', 'Window allowed by rounding'],
          numCols: [
            1,
            2,
            3
          ],
          rows: [
            ['Bachelor Degree level and above', '1,423,358', '33.3%', '4,274,348', '4,267,940 to 4,280,776'],
            ['Year 12', '679,878', '15.9%', '4,275,962', '4,262,558 to 4,289,451'],
            ['Advanced Diploma and Diploma level', '412,740', '9.7%', '4,255,052', '4,233,231 to 4,277,098'],
            ['Certificate level III', '389,224', '9.1%', '4,277,187', '4,253,814 to 4,300,818'],
            ['Year 10', '359,130', '8.4%', '4,275,357', '4,250,059 to 4,300,958'],
            ['Year 9 or below', '266,766', '6.3%', '4,234,381', '4,201,039 to 4,268,256'],
            ['Year 11', '125,161', '2.9%', '4,315,897', '4,242,746 to 4,391,614']
          ]
        },
        {
          kind: 'three',
          mt: true,
          cells: [
            {
              h3: 'Where the windows overlap',
              p: 'The overlap of all seven windows runs from 4,267,940 to 4,268,256, a range only 316 people wide. The large rows set the lower edge and the "Year 9 or below" row sets the upper edge.'
            },
            {
              h3: 'The simple method wins, nearly always',
              p: 'One division using the biggest row gives 4,274,348, off the middle of the overlap by 6,250, or 0.15%. For almost any real question, that one line of arithmetic is enough.'
            },
            {
              h3: 'Why small rows mislead',
              p: 'The "Year 11" row alone suggests 4,315,897, nearly 1% too high, because rounding 2.9% hides a lot. A small percentage carries a wide window.'
            }
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'What students practise',
          left: [
            'Reverse percentages, the meaning of rounding to one decimal place, writing an interval as an inequality and finding the intersection of several intervals.',
            'Years 7 and 8 students do the single division; Years 9 and 10 add the windows; senior students can prove why larger rows give tighter windows.'
          ],
          rightH3: 'What we did not do',
          right: [
            'We never add the rows to make a total. Published parts need not add exactly to a published total, because of how the ABS protects small counts and how people answered.',
            'The interval is our calculation from the published figures; the ABS publishes its own counts in its own tables.'
          ]
        },
        {
          kind: 'source',
          html: 'Data: Australian Bureau of Statistics, <a class="ag-inline-link" href="https://abs.gov.au/census/find-census-data/quickstats/2021/1GSYD" rel="noopener" target="_blank">2021 Census QuickStats, Greater Sydney</a>, level of highest educational attainment, read 13 October 2026, CC BY 4.0. All estimates and windows are our calculation.'
        }
      ]
    },
    {
      id: 'city',
      tint: 'deep',
      eyebrow: 'Maths in Sydney',
      h2: 'Sydney learners, by the numbers, and the maths around them',
      lede: 'The same Census pages show how many Sydney residents were studying in 2021, which gives a sense of the city\'s scale as a place of learning.',
      body: [
        {
          kind: 'table',
          caption: 'People attending an educational institution, Greater Sydney, 2021 Census',
          head: ['Type of institution', 'People'],
          numCols: [
            1
          ],
          rows: [
            ['Primary school', '427,508'],
            ['Secondary school', '339,220'],
            ['Vocational education, including TAFE', '137,739'],
            ['University or other higher education', '288,727']
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'Mathematics in the city',
          left: [
            'The University of Sydney describes its School of Mathematics and Statistics as "one of the largest mathematical sciences schools in Australia", and says it is "the only Australian university to have received the highest rating of 5 out of 5 for research in the mathematical sciences" in every national research assessment so far.',
            'We are independent of every Sydney school and university, and we quote this only to show how much mathematics happens in the city.'
          ],
          rightH3: 'Teachers of mathematics',
          right: [
            'The Mathematical Association of NSW says it "provides support for Mathematics teachers K-12", and publishes PAMphlet for primary teachers and Fractal for secondary teachers.',
            'Good school teaching and good tutoring work together. Our job is the extra hour a week that lets a learner catch up, consolidate or go further.'
          ]
        },
        {
          kind: 'source',
          html: 'Sources, read 13 October 2026: ABS, <a class="ag-inline-link" href="https://abs.gov.au/census/find-census-data/quickstats/2021/1GSYD" rel="noopener" target="_blank">QuickStats, Greater Sydney</a>; University of Sydney, <a class="ag-inline-link" href="https://www.sydney.edu.au/science/schools/school-of-mathematics-and-statistics.html" rel="noopener" target="_blank">School of Mathematics and Statistics</a>; <a class="ag-inline-link" href="https://www.mansw.nsw.edu.au/" rel="noopener" target="_blank">Mathematical Association of NSW</a>.'
        }
      ]
    },
    {
      id: 'online',
      tint: '',
      eyebrow: 'Online in Sydney',
      h2: 'How online maths tutoring works in Sydney time',
      lede: 'Sydney keeps Australian Eastern Standard Time in winter and moves to daylight saving time from the first Sunday in October to the first Sunday in April. Our teachers work in India time, which never changes, so the gap shifts by an hour twice a year.',
      body: [
        {
          kind: 'table',
          caption: 'Sydney and India time',
          head: ['Period', 'Sydney clock', 'Sydney ahead of India by'],
          rows: [
            ['April to October', 'AEST, UTC+10', '4 hours 30 minutes'],
            ['October to April', 'AEDT, UTC+11', '5 hours 30 minutes']
          ]
        },
        {
          kind: 'three',
          mt: true,
          cells: [
            {
              h3: 'One to one',
              p: 'A private lesson at a fixed weekly time, built around one learner\'s gaps or goals. Useful before an HSC exam block or after a difficult topic test.'
            },
            {
              h3: 'Small groups',
              p: 'Fifteen to twenty learners at the same level, with the same teacher each week. Students hear other people\'s questions, which often answer their own.'
            },
            {
              h3: 'Shared whiteboard',
              p: 'Students write their working on a shared screen, so the teacher sees the step where things go wrong, not just the final answer.'
            }
          ]
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'How a learner progresses',
    h2: 'From counting to confident HSC maths',
    lede: 'A learner can join at any rung. The free lesson shows where to start.',
    table: {
      caption: 'Four rungs of maths',
      head: ['Typically', 'Rung', 'Secure when'],
      rows: [
        ['K to Year 3', '1. Number', 'They split 47 into 40 and 7 and use it to add and subtract'],
        ['Years 4 to 6', '2. Proportion', 'They find 15% of an amount and say whether the answer is sensible'],
        ['Years 7 to 10', '3. Algebra', 'They write and solve an equation from a word problem'],
        ['Years 11 and 12', '4. Reasoning', 'They explain why a method works, not only how to use it']
      ]
    },
    left: {
      h3: 'Joining in Year 11 or 12',
      ps: [
        'Students arriving late in senior school often need a few junior topics repaired first. We say how many weeks that is likely to take.',
        'Algebra and functions are the most common weak spots, and they are fixable.'
      ]
    },
    right: {
      h3: 'Adults returning to maths',
      ps: [
        'Adults usually move faster than they expect once the vocabulary comes back.',
        'Bridging maths for a university course is a common starting point.'
      ]
    }
  },
  catalogue: {
    eyebrow: 'The full list',
    h2: 'Maths courses for Sydney learners',
    lede: 'Grouped by stage. Card titles use international course names; lessons follow the NSW stages and the HSC course the learner takes.',
    bands: [
      {
        num: 'I',
        h3: 'Primary',
        sub: 'Kindergarten to Year 6',
        courses: [
          { code: 'SYD / P1', slug: 'early-math-foundations', title: 'First maths', blurb: 'Counting and shapes with objects.' },
          { code: 'SYD / P2', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'Topic by topic, for understanding.' },
          { code: 'SYD / P3', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Number sense, not tricks.' }
        ]
      },
      {
        num: 'II',
        h3: 'Secondary',
        sub: 'Years 7 to 10',
        courses: [
          { code: 'SYD / S1', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Years 7 to 10 maths', blurb: 'Algebra, ratio and geometry.' },
          { code: 'SYD / S2', slug: 'algebra-foundations-masterclass', title: 'Algebra from scratch', blurb: 'For a learner who lost the thread.' },
          { code: 'SYD / S3', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Hard problems, no recipes.' }
        ]
      },
      {
        num: 'III',
        h3: 'Senior and beyond',
        sub: 'Years 11, 12 and adults',
        courses: [
          { code: 'SYD / H1', slug: 'complete-high-school-mathematics-mastery', title: 'Senior maths', blurb: 'Functions, calculus, statistics.' },
          { code: 'SYD / H2', slug: 'statistics-probability-maths-course', title: 'Statistics', blurb: 'Data, probability and inference.' },
          { code: 'SYD / H3', slug: 'college-mathematics-complete-masterclass', title: 'University maths', blurb: 'Calculus and linear algebra.' }
        ]
      }
    ]
  },
  how: {
    eyebrow: 'Scheduling',
    h2: 'Lessons that fit a Sydney week',
    lede: 'Every lesson is booked in Sydney time, and the daylight saving changes in October and April are handled by us, not by families.',
    slots: [
      { time: 'After school', l: 'Primary and junior secondary.' },
      { time: 'Evenings', l: 'Senior students and adults.' },
      { time: 'Weekends', l: 'Longer, unhurried lessons.' }
    ],
    cells: [
      { h3: 'The same teacher', p: 'One teacher follows the learner and remembers what went wrong last time.' },
      { h3: 'Notes for parents', p: 'A short, honest update after lessons.' },
      { h3: 'Groups by level', p: 'Fifteen to twenty learners at one stage.' },
      { h3: 'Real numbers', p: 'Census tables and maps alongside textbook work.' },
      { h3: 'Private option', p: 'One teacher, one learner, for a gap or deadline.' },
      { h3: 'Reasons first', p: 'Learners explain a method before practising it.' }
    ]
  },
  projectsH2: 'Where our learners take their maths',
  projectsLede: 'Projects built by students who started with the same kind of number work. More are in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'From our Google profile, as Sydney and other families wrote them.',
  fees: {
    h2: 'Fees for maths tutoring in Sydney',
    lede: 'Sydney families pay one flat monthly fee in US dollars. Nothing is charged to sign up, and there is no fixed term.',
    free: ['A full lesson at the learner\'s level', 'An honest summary afterwards', 'No payment card'],
    group: ['Fifteen to twenty learners at one level', 'The same teacher each week', 'Work marked and discussed', 'Stop after any month'],
    one: ['Private teaching', 'Built around one gap or goal', 'Useful before exam blocks']
  },
  faq: {
    eyebrow: 'Sydney maths questions',
    h2: 'Questions Sydney families ask about a maths tutor',
    items: [
      {
        q: 'What does a maths tutor in Sydney do?',
        a: 'A maths tutor finds what a learner has missed, teaches it clearly and gives practice until it is secure. Our lessons are live online in Sydney time, one to one or in small level-matched groups.'
      },
      {
        q: 'Which HSC maths courses do you teach?',
        a: 'All four NSW senior courses: Mathematics Standard, Mathematics Advanced, Mathematics Extension 1 and Mathematics Extension 2, in their 11 to 12 (2024) versions.'
      },
      {
        q: 'What is a reverse percentage?',
        a: 'It is working back from a part and its percentage to the whole. If 679,878 people are 15.9% of a group, the group is about 679,878 divided by 0.159, roughly 4.28 million.'
      },
      {
        q: 'Can you guarantee an HSC band or ATAR?',
        a: 'No. We teach the content and exam technique carefully, but results depend on the student and the exams, so we promise no band, mark or ATAR.'
      },
      { q: 'Do you teach primary school maths?', a: 'Yes, from Kindergarten to Year 6, focusing on number sense, fractions and measurement.' },
      { q: 'Are lessons in Sydney time?', a: 'Yes. Every lesson is booked in Sydney time, and we adjust for daylight saving in October and April.' },
      { q: 'Do you help adults with maths?', a: 'Yes, in adult groups or one to one, for bridging courses, work or personal interest.' },
      {
        q: 'How much do lessons cost?',
        a: 'The first lesson is free and needs no card. Monthly fees for group and private lessons are shown in the fees section of this page.'
      }
    ]
  },
  elsewhere: {
    eyebrow: 'Also on this site',
    h2: 'Related pages for Sydney families',
    lede: 'Deeper pages on NSW maths and tests.',
    items: [
      { href: '/hsc-maths-advanced-tutoring', label: 'HSC Maths Advanced', p: 'Calculus-based senior maths.' },
      { href: '/hsc-maths-standard-tutoring', label: 'HSC Maths Standard', p: 'Applied senior maths.' },
      { href: '/oc-test-maths-practice-nsw', label: 'OC test maths', p: 'For Year 4 families.' },
      { href: '/nsw-selective-test-mathematical-reasoning-practice', label: 'Selective test maths', p: 'Mathematical reasoning practice.' },
      { href: '/australian-mathematics-competition-practice-by-year', label: 'Australian Mathematics Competition', p: 'Practice by year level.' },
      { href: '/maths-tutor-cost-australia-explained', label: 'Maths tutor costs explained', p: 'What lessons cost and why.' }
    ]
  },
  start: {
    h2: 'Book a free maths lesson',
    lede: 'Leave a number and a convenient time. The first lesson is a real lesson at the learner\'s level, followed by an honest view of where to go next.',
    readFirst: 'More about our approach: <a class="ag-inline-link" href="/how-we-teach">how lessons are taught</a> and <a class="ag-inline-link" href="/online-maths-tutoring-australia">online maths tutoring in Australia</a>.',
    note: 'Our team is in India, which is why the number starts +91, and there is no Sydney office. A WhatsApp message from an Australian mobile is the quickest way to reach us.',
    formNote: 'Free, no card, no obligation.'
  },
  footer: {
    cols: [
      {
        h4: 'NSW maths',
        links: [
          { href: '/hsc-maths-extension-1-tutoring', label: 'HSC Extension 1' },
          { href: '/hsc-maths-extension-2-tutoring', label: 'HSC Extension 2' },
          { href: '/naplan-numeracy-practice-online', label: 'NAPLAN numeracy' },
          { href: '/how-we-teach', label: 'How we teach' }
        ]
      },
      {
        h4: 'Australia',
        links: [
          { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
          { href: '/online-maths-tutoring-australia', label: 'Online maths tutoring' },
          { href: '/australian-curriculum-maths-year-7-to-10-help', label: 'Years 7 to 10 maths' },
          { href: '/australian-mathematics-competition-practice-by-year', label: 'Maths competitions' }
        ]
      }
    ],
    bottomRight: 'Every rounded number hides a window'
  },
  personalityCss: `
.ag-root.ag-mtsy .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-mtsy .ag-capsule { border-left-width: 5px; border-radius: 4px; }
.ag-root.ag-mtsy .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-mtsy .ag-table caption { text-align: left; font-weight: 620; }
.ag-root.ag-mtsy .ag-band-head h3 { letter-spacing: -0.01em; }
.ag-root.ag-mtsy .ag-slots { gap: 1rem; }
`,
  dossier: {
    curriculumAuthority: 'NSW: NESA, NSW Curriculum mathematics learning area (Primary K to 6, Secondary 7 to 10, Senior 11 to 12; Mathematics Standard, Advanced, Extension 1 and Extension 2 11-12 (2024) and Stage 6 (2017)).',
    localProject: 'Reverse percentages on ABS 2021 QuickStats, Greater Sydney, level of highest educational attainment: seven rows, each count divided by its rounded share; windows from rounding intersect at 4,267,940 to 4,268,256 (316 wide); the Bachelor row alone gives 4,274,348 (0.15% off), so the simple method is good enough. Rows never summed. Lesson family: reverse percentages and intersecting rounding windows.',
    requiredMentions: [
      'Mathematics Extension 2 11 to 12',
      '427,508',
      '339,220',
      '137,739',
      '288,727',
      '679,878',
      'one of the largest mathematical sciences schools in Australia',
      'provides support for Mathematics teachers K-12',
      'PAMphlet',
      'Finding a hidden total from rounded percentages'
    ],
    sources: [
      {
        claim: 'NESA, NSW Curriculum, Mathematics: stages and the four senior courses in 11-12 (2024) and Stage 6 (2017) versions.',
        url: 'https://curriculum.nsw.edu.au/learning-areas/mathematics'
      },
      {
        claim: 'ABS, 2021 Census QuickStats, Greater Sydney: type of educational institution attending; level of highest educational attainment.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/1GSYD'
      },
      {
        claim: 'University of Sydney, School of Mathematics and Statistics: size and research rating statements.',
        url: 'https://www.sydney.edu.au/science/schools/school-of-mathematics-and-statistics.html'
      },
      {
        claim: 'Mathematical Association of NSW: support for mathematics teachers K-12; PAMphlet and Fractal publications.',
        url: 'https://www.mansw.nsw.edu.au/'
      }
    ],
    rejectedClaims: [
      'Preschool attendance for Greater Sydney: already printed on our Sydney kids coding page, so not repeated.',
      'Census rows by school sector: excluded (sector categories touch religion).',
      'Any HSC results, band distributions or school rankings for Sydney: no results or school comparisons on this page.',
      'Named tutoring or coaching businesses in Sydney: none named.',
      'University rankings beyond the school\'s own statement: not repeated.'
    ]
  }
};
