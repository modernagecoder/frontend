'use strict';
// Maths tuition in Leicester (ag- maths by city, UK cluster Phase 11, row 571).
// Read on 1 October 2026 by curl, quotes grepped from the raw text:
//  - NCETM, East Midlands South Maths Hub page: "The Lead School for the hub is Beauchamp College, Oadby, Leicestershire.";
//    council areas listed: "Leicestershire - Blaby, Charnwood, Harborough, Hinckley and Bosworth, Melton, North West
//    Leicestershire, Oadby and Wigston", "Northamptonshire ... Corby, East Northamptonshire, Kettering and Wellingborough",
//    "Leicester", "Rutland".
//  - DfE GCSE mathematics subject content (2013), statistics item 3: "construct and interpret diagrams for grouped discrete
//    data and continuous data, i.e. histograms with equal and unequal class intervals and cumulative frequency graphs, and
//    know their appropriate use".
//  - Nomis, Census 2021 TS058 Distance travelled to work (NM_2075_1), Leicester (E06000016), usual residents aged 16+ in
//    employment the week before the census: total 154,934; less than 2km 29,065; 2km to less than 5km 36,598; 5km to less
//    than 10km 18,539; 10km to less than 20km 9,819; 20km to less than 30km 5,286; 30km to less than 40km 3,555; 40km to less
//    than 60km 1,818; 60km and over 2,399; works mainly from home 29,530; works mainly at an offshore installation, in no fixed
//    place, or outside the UK 18,325. The ten categories add exactly to the published 154,934 (checked).
//  - University of Leicester outreach page returned HTTP 403 to curl; not circumvented and not used.
// Our calculations: the eight distance classes hold 107,079 people. Frequency densities (people per km of class width):
// 14,532.5; 12,199.3; 3,707.8; 981.9; 528.6; 355.5; 90.9; the open class has none. Interpolated median 4.006 km
// (position 53,539.5), quartiles 1.84 km and 8.95 km. Mean with midpoints depends on where the open class is closed:
// 8.95 km at 80 km, 9.18 km at 100 km, 9.74 km at 150 km. Within 5 km: 61.3% of the 107,079.
// Spine: which is the commonest commuting distance in Leicester, and why does the bar chart disagree with the histogram?
// Family: histograms with unequal class widths, frequency density, open-ended classes, estimating median and mean.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'LEICESTER MATHS', label: 'Maths tuition in Leicester', blurb: 'Primary, GCSE, A level and adult maths for Leicester, with a histogram project on how far the city travels to work.' },
  slug: 'maths-tuition-in-leicester',
  code: 'mlc',
  accent: '#964B5D',
  accentRationale: 'Leicester maths: a muted rosewood (6.07:1 contrast on white), chosen by hand and kept apart from the blue on our Leicester coding page',
  pageType: 'city',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Maths tuition in Leicester',
  title: 'Maths Tuition in Leicester | GCSE, A Level and KS2 Maths Tutor',
  description: 'Maths tuition in Leicester for ages 6 to 67: a live online maths tutor for KS2 SATs, KS3, GCSE, A level and Further Maths, and adult maths. First lesson free.',
  ogDescription: 'Leicester maths tuition, live online: times tables and SATs, KS3, GCSE on AQA, Edexcel or OCR, A level, Further Maths, Functional Skills and GCSE resits.',
  twitterDescription: 'Leicester maths, taught live online: why does a bar chart of commuting distances tell the wrong story?',
  pageName: 'Maths Tuition in Leicester',
  webPageDescription: 'Live online maths tuition for learners in Leicester aged 6 to 67, from KS2 and Year 6 SATs maths through KS3, GCSE, A level and Further Maths to adult Functional Skills maths and GCSE resits, with a histogram project built on Census 2021 travel data.',
  courseDescription: 'Live online maths lessons for Leicester learners, in groups of five to ten at one level or one to one, following the national curriculum for England and the GCSE and A level specifications of each exam board.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Maths tuition in Leicester',
  navLinks: [
    { href: '#years', label: 'School years' },
    { href: '#commute', label: 'Commuting data' },
    { href: '#density', label: 'Histograms' },
    { href: '#hub', label: 'Maths hub' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Leicester &middot; Maths tutor for ages 6 to 67 &middot; Live online lessons',
  h1: 'Maths tuition in Leicester',
  lede: 'Draw a bar chart of how far Leicester residents travel to work and one bar towers over the rest: 36,598 people travel between 2 and 5 km. It looks like the most common distance. It is not. That class is three kilometres wide, while the class below it is only two, and once you divide by the width the under 2 km group turns out to be the most crowded part of the chart. Spotting that is exactly what GCSE higher tier asks of a histogram, and it is the kind of reasoning our online maths tutors build with Leicester learners, from times tables in Year 4 to Further Maths and adult refreshers.',
  secondaryCta: { href: '#commute', label: 'See the Leicester census numbers' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for a learner in Leicester.',
  heroNote: 'A maths page for Leicester &middot; Every age from 6 to 67 &middot; Not connected with any Leicester school, college or university',
  spec: [
    ['Who for', 'Learners aged 6 to 67 in Leicester'],
    ['Primary', 'KS2 maths, times tables, Year 6 SATs maths'],
    ['Secondary', 'KS3 and GCSE, foundation or higher'],
    ['Exam boards', 'AQA, Edexcel, OCR and IGCSE'],
    ['Post-16', 'A level Maths and Further Maths'],
    ['Adults', 'Functional Skills, resits and refreshers'],
    ['Lessons', 'Live online, five to ten per group or one to one'],
    ['Leicester project', 'Census commuting distances as a histogram']
  ],
  capsuleQ: 'What is maths tuition in Leicester like with us?',
  capsule: 'We teach maths live online to Leicester learners from age 6 to 67, in small groups of five to ten at the same level or one to one. That covers primary work (times tables for the Year 4 check and Year 6 SATs maths), KS3 maths, GCSE maths on whichever board a school uses, whether AQA, Edexcel or OCR, at either tier, the IGCSE papers, A level Maths with Further Maths, and adult courses from Functional Skills maths to GCSE maths resits. Lessons use real data as well as past papers. Our Leicester example takes Census 2021 commuting distances and shows why a histogram with unequal class widths needs frequency density, not frequency. The first lesson costs nothing; afterwards it is USD 100 a month for a group place or USD 150 a month for one-to-one lessons.',

  picks: {
    eyebrow: 'Where Leicester learners start',
    h2: 'Three popular maths courses in Leicester',
    lede: 'Most enquiries from Leicester are about GCSE, primary maths or A level. The full list follows further down.',
    items: [
      { course: 'gcse-mathematics-mastery', code: 'LEI / 1', title: 'GCSE maths', note: 'Foundation or higher tier on the learner\'s own board, with histograms and grouped data practised on real numbers.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'LEI / 2', title: 'KS2 primary maths', note: 'Tables for the Year 4 check, then fractions, decimals and the explaining that Year 6 SATs maths rewards.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'LEI / 3', title: 'A level maths', note: 'Pure maths, mechanics and statistics for Year 12 and 13, with Further Maths open to anyone who wants to go further.' }
    ]
  },

  sections: [
    {
      id: 'years', tint: 'tint', eyebrow: 'From Year 1 to adult',
      h2: 'A maths tutor in Leicester for KS2 SATs, KS3, GCSE and A level',
      lede: 'Leicester follows the national curriculum for England, so a Leicester learner meets the same stages, checks and exams as every other English learner. Adults rejoin at whatever level they need.',
      body: [
        { kind: 'table', caption: 'Maths at each stage for a Leicester learner, and what we teach hardest', head: ['Stage', 'Years', 'Our main focus'], rows: [
          ['KS1', '1 to 2', 'Number bonds, counting in steps, place value to 100, simple measures.'],
          ['KS2', '3 to 6', 'Times tables for the Year 4 check, written methods, fractions, decimals and percentages, and SATs reasoning.'],
          ['KS3', '7 to 9', 'Algebra, ratio, angles, probability and the first histograms and averages.'],
          ['GCSE', '10 to 11', 'Foundation or higher tier on AQA, Edexcel or OCR, from number to unequal-width histograms.'],
          ['A level', '12 to 13', 'Pure maths, statistics and mechanics; Further Maths alongside for learners who want more.'],
          ['Adult', 'Any', 'Functional Skills maths, GCSE maths resits and refreshers for work or for helping children.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Times tables, SATs and KS2 maths',
          left: [
            'Every Year 4 pupil at a state-funded school in England sits the multiplication tables check, Leicester children included. We teach the tables as a web of facts: if 9 × 6 slips away, 10 × 6 take away one six brings it back.',
            'For Year 6 SATs maths we spend most of the time on reasoning, because that is where children lose marks they could have earned. Explaining why a method works is practised every lesson, not saved for the weeks before the test.'
          ],
          rightH3: 'KS3, GCSE and beyond',
          right: [
            'KS3 maths is where algebra either clicks or quietly goes wrong, so we teach it slowly and check it often. At GCSE we follow the learner\'s board and tier; the histogram work on this page is higher tier content on every board.',
            'For more detail, see our pages on <a class="ag-inline-link" href="/ks2-maths-tuition-online">KS2 maths tuition</a>, <a class="ag-inline-link" href="/ks3-maths-tuition-online">KS3 maths tuition</a>, <a class="ag-inline-link" href="/gcse-maths-tuition-online">GCSE maths tuition</a>, <a class="ag-inline-link" href="/a-level-maths-tuition-online">A level maths tuition</a> and <a class="ag-inline-link" href="/further-maths-tuition-online">Further Maths tuition</a>.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.gov.uk/government/collections/multiplication-tables-check" rel="noopener" target="_blank">gov.uk, multiplication tables check</a>, read 1 October 2026. The year groups for each key stage are the standard ones in England.' }
      ]
    },
    {
      id: 'commute', tint: 'plain', eyebrow: 'The Leicester project',
      h2: 'How far does Leicester travel to work?',
      lede: 'Census 2021 asked every working adult how far they travel to their place of work. For Leicester the answers come in eight distance classes of different widths, which is exactly the situation a histogram is designed for.',
      body: [
        { kind: 'table', caption: 'Leicester residents aged 16 and over in work, by distance travelled to work, Census 2021 (Nomis table TS058)', head: ['Distance', 'People', 'Class width', 'Frequency density'], numCols: [1, 2, 3], rows: [
          ['Less than 2 km', '29,065', '2 km', '14,532.5'],
          ['2 km to less than 5 km', '36,598', '3 km', '12,199.3'],
          ['5 km to less than 10 km', '18,539', '5 km', '3,707.8'],
          ['10 km to less than 20 km', '9,819', '10 km', '981.9'],
          ['20 km to less than 30 km', '5,286', '10 km', '528.6'],
          ['30 km to less than 40 km', '3,555', '10 km', '355.5'],
          ['40 km to less than 60 km', '1,818', '20 km', '90.9'],
          ['60 km and over', '2,399', 'Open', 'Not defined']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The people column comes straight from the census. The frequency density column is our own calculation: people divided by the width of the class, so it is measured in people per kilometre. On a histogram, density goes on the vertical axis and the area of each bar shows how many people are in the class.',
            'Two more groups sit outside the distance classes: 29,530 Leicester residents worked mainly from home, and 18,325 worked offshore, in no fixed place or outside the UK. Adding all ten groups gives 154,934, which matches the published total exactly.'
          ],
          right: [
            'Look at the first two rows. By frequency, 2 to 5 km wins easily, 36,598 against 29,065. By density, under 2 km wins, 14,532.5 against 12,199.3. The second answer is the honest one: commuters are packed more tightly into the first two kilometres than into the next three.',
            'This is why GCSE higher tier insists on frequency density whenever classes are unequal. A bar chart of raw frequencies rewards wide classes for being wide, and the 40 to 60 km class, twenty kilometres across, would look far busier than it really is.'
          ] },
        { kind: 'source', html: 'Data: <a class="ag-inline-link" href="https://www.nomisweb.co.uk/sources/census_2021_bulk" rel="noopener" target="_blank">Nomis, Census 2021 table TS058, distance travelled to work</a>, Leicester local authority, read 1 October 2026. Census data: Office for National Statistics, Open Government Licence. Frequency densities and every estimate below are Modern Age Coders\' calculations.' }
      ]
    },
    {
      id: 'density', tint: 'deep', eyebrow: 'Higher tier skills, worked',
      h2: 'Estimating the median and the mean from a histogram',
      lede: 'The DfE content for GCSE maths asks for "histograms with equal and unequal class intervals and cumulative frequency graphs, and know their appropriate use". The Leicester data shows why the last four words matter.',
      body: [
        { kind: 'table', caption: 'Estimates from the eight Leicester distance classes, 107,079 people in all (our calculation)', head: ['Estimate', 'Value', 'How it is found'], rows: [
          ['Median distance', '4.0 km', 'The 53,539.5th person sits in the 2 to 5 km class; interpolating gives 4.006 km.'],
          ['Lower quartile', '1.84 km', 'A quarter of commuters travel less than this.'],
          ['Upper quartile', '8.95 km', 'A quarter travel further than this.'],
          ['Within 5 km', '61.3%', 'The first two classes together, as a share of the 107,079.'],
          ['Mean, open class closed at 80 km', '8.95 km', 'Using 70 km as that class midpoint.'],
          ['Mean, open class closed at 100 km', '9.18 km', 'Using 80 km as that class midpoint.'],
          ['Mean, open class closed at 150 km', '9.74 km', 'Using 105 km as that class midpoint.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The median is robust',
          left: [
            'The median needs only the position of the middle person, so the open-ended class at the top makes no difference to it at all. Whatever the 2,399 longest commuters actually travel, the median stays at about 4.0 km.',
            'The quartiles behave the same way. That is why statisticians reach for the median and interquartile range when data has a long tail or an open class, and why a GCSE question will often hint at it.'
          ],
          rightH3: 'The mean is not',
          right: [
            'To estimate a mean you need a midpoint for every class, and "60 km and over" has no top. Close it at 80 km and the mean is 8.95 km; close it at 150 km and the mean rises to 9.74 km. Nothing in the census tells you which is right.',
            'Students who see that a choice they made changed the answer by almost 0.8 km rarely forget it. It is a better lesson about the limits of grouped data than any formula sheet.'
          ] },
        { kind: 'p', mt: true, html: 'At primary level this data becomes a reading and comparing exercise. At KS3 learners turn it into percentages and pie charts. At GCSE they draw the histogram and estimate the median, and at A level they discuss which distribution might fit and how the home workers should be treated.' },
        { kind: 'source', html: 'GCSE wording: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/gcse-mathematics-subject-content-and-assessment-objectives" rel="noopener" target="_blank">DfE, GCSE mathematics subject content</a>. Figures in the table are our calculations from the census counts above.' }
      ]
    },
    {
      id: 'hub', tint: 'tint', eyebrow: 'Maths support around Leicester',
      h2: 'The East Midlands South Maths Hub and where Leicester fits',
      lede: 'Schools in Leicester can draw on the national network of Maths Hubs. Families rarely hear about it, so here is what the public pages say. We are not part of it.',
      body: [
        { kind: 'three', cells: [
          { h3: 'East Midlands South Maths Hub', p: 'The NCETM page names Beauchamp College, Oadby, Leicestershire as the lead school, and lists Leicester among the council areas the hub works with.' },
          { h3: 'A wide area', p: 'The same hub also covers Rutland, seven Leicestershire districts from Blaby to Oadby and Wigston, and Corby, East Northamptonshire, Kettering and Wellingborough.' },
          { h3: 'Who it works with', p: 'Maths Hubs support teachers and schools, for example through teacher development work groups. They do not offer tuition to families, so parents usually see the effect in the classroom.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'For competition maths, the UK Mathematics Trust challenges are entered through schools. Our <a class="ag-inline-link" href="/ukmt-maths-challenge-tutoring">UKMT maths challenge page</a> explains how we prepare learners, and the <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">UK competitions calendar</a> lists dates by age.',
            'We do not run a separate 11 plus page for Leicester. Families who are preparing for a selective school test can still use our <a class="ag-inline-link" href="/courses/11-plus-maths-preparation-course-uk">11 plus maths course</a>, which covers the maths of the common test formats.'
          ],
          right: [
            'All our lessons are online, so a learner in Belgrave, Aylestone or Evington joins from home. Groups are formed by level rather than by area, which means a Leicester learner may share a class with someone in Bristol or Glasgow.',
            'Our <a class="ag-inline-link" href="/coding-classes-in-leicester">Leicester coding page</a> covers programming and AI for the city; this page is about maths only.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.ncetm.org.uk/hubs/east-midlands-south-maths-hub/" rel="noopener" target="_blank">NCETM, East Midlands South Maths Hub</a>, read 1 October 2026. We have no connection with the NCETM, the hub, Beauchamp College or any Leicester school.' }
      ]
    },
    {
      id: 'grownups', tint: 'plain', eyebrow: 'Adults welcome',
      h2: 'Maths for adults in Leicester: Functional Skills and GCSE resits',
      lede: 'A good share of our Leicester learners are adults. Some need a maths qualification for a course or a job; others simply want to stop feeling anxious about numbers.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Resitting GCSE maths', p: 'Our GCSE course accepts resit candidates. We find the topics that are really secure first, then fill the gaps in an order that makes each new topic easier than the last.' },
          { h3: 'Functional Skills maths', p: 'Everyday and workplace maths at a steady pace: measures, percentages, charts and problem solving. Read more on our <a class="ag-inline-link" href="/functional-skills-maths-tuition-online">Functional Skills maths page</a>.' },
          { h3: 'Confidence and refreshers', p: 'Fractions, algebra and data for parents, carers and professionals. Our <a class="ag-inline-link" href="/online-maths-classes-for-adults-in-uk">adult maths page</a> has more.' }
        ] },
        { kind: 'p', mt: true, html: 'The commuting histogram suits adult learners particularly well. Almost everyone has a commute of their own, and placing yourself in the right bar is a quick way to see what frequency density means in practice.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Steps',
    h2: 'From counting in steps to reading a histogram properly',
    lede: 'This is the order in which we build the ideas on this page. The free lesson tells us where a new learner should start.',
    table: { caption: 'Four steps for Leicester learners, with the sign that each is secure', head: ['Usually', 'Step', 'Secure when the learner can'], rows: [
      ['Years 3 to 4', '1. Tables and place value', 'Recall 12 × 12 facts and rebuild any that slip'],
      ['Years 5 to 7', '2. Fractions and percentages', 'Convert between them and compare sizes with a reason'],
      ['Years 8 to 10', '3. Charts and averages', 'Choose a sensible diagram and average, and defend the choice'],
      ['Years 10 to 13', '4. Grouped data', 'Use frequency density and say what an estimate depends on']
    ] },
    left: { h3: 'Starting close to an exam', ps: [
      'A learner who joins a few months before GCSE can still gain a great deal. We put the topics that carry the most marks and the weakest foundations first.',
      'If the time is too short to close the whole gap, we say so at the free lesson rather than later.'
    ] },
    right: { h3: 'Carrying on', ps: [
      'After GCSE many learners take A level Maths, some with Further Maths. Others enjoy our <a class="ag-inline-link" href="/courses/statistics-probability-maths-course">statistics and probability course</a>.',
      'Learners who like computers can rebuild the histogram in Python through <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'Courses',
    h2: 'Every maths course we teach in Leicester',
    lede: 'Grouped by stage, from first numbers to university maths.',
    bands: [
      { num: 'I', h3: 'Primary', sub: 'Ages 6 to 11', courses: [
        { code: 'MLC / A1', slug: 'elementary-mathematics-complete-masterclass', title: 'KS1 and KS2 maths', blurb: 'All of primary maths, including SATs reasoning.' },
        { code: 'MLC / A2', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Fast, reliable arithmetic in the head.' },
        { code: 'MLC / A3', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus maths', blurb: 'Bead-frame arithmetic for younger children.' },
        { code: 'MLC / A4', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths', blurb: 'GL-style practice for selective school tests.' }
      ] },
      { num: 'II', h3: 'Secondary', sub: 'KS3, GCSE and IGCSE', courses: [
        { code: 'MLC / B1', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'KS3 maths', blurb: 'The three years that decide how GCSE goes.' },
        { code: 'MLC / B2', slug: 'gcse-mathematics-mastery', title: 'GCSE maths', blurb: 'Every board and tier, resits included.' },
        { code: 'MLC / B3', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'International papers, Cambridge or Edexcel.' },
        { code: 'MLC / B4', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Algebra rebuilt from the start.' }
      ] },
      { num: 'III', h3: 'Post-16', sub: 'A level and further', courses: [
        { code: 'MLC / C1', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'Pure, statistics and mechanics.' },
        { code: 'MLC / C2', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Distributions, sampling and testing.' },
        { code: 'MLC / C3', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'For UKMT challenges and olympiad problems.' },
        { code: 'MLC / C4', slug: 'college-mathematics-complete-masterclass', title: 'University maths', blurb: 'Calculus, matrices and proof.' }
      ] },
      { num: 'IV', h3: 'Applied', sub: 'Work and interest', courses: [
        { code: 'MLC / D1', slug: 'complete-business-finance-mathematics-mastery', title: 'Business maths', blurb: 'Interest, margins and forecasts.' },
        { code: 'MLC / D2', slug: 'data-analytics-mathematics-masterclass', title: 'Data maths', blurb: 'Statistics for analysts and reports.' },
        { code: 'MLC / D3', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Exploring data and number in Python.' },
        { code: 'MLC / D4', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Speed techniques for confident calculators.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'When lessons run',
    h2: 'Lesson times that suit a Leicester school day',
    lede: 'Teachers are in India, which keeps the same clock all year. In winter India is five and a half hours ahead of Leicester, in summer four and a half, and every slot we offer is written in UK time.',
    slots: [
      { time: 'After school on weekdays', l: 'For KS2, KS3 and GCSE learners.' },
      { time: 'Later weekday evenings', l: 'For A level students and adults.' },
      { time: 'Weekend mornings', l: 'For learners who prefer a fresh start.' }
    ],
    cells: [
      { h3: 'A regular teacher', p: 'The same teacher each week, who remembers last week\'s mistakes.' },
      { h3: 'Updates for families', p: 'A short honest note on what went well and what needs work.' },
      { h3: 'Classes by level', p: 'Five to ten learners at one level, so explanations fit everyone.' },
      { h3: 'Census and survey data', p: 'Tables such as the commuting one sit next to the past papers.' },
      { h3: 'One to one on request', p: 'For a learner who needs a tighter focus or a different pace.' },
      { h3: 'Reasons first', p: 'We expect learners to explain a method before drilling it.' }
    ]
  },

  projectsH2: 'Projects built by learners who started like this',
  projectsLede: 'Students who began with data questions like the commuting histogram went on to make the projects below. The <a class="ag-inline-link" href="/student-labs">student labs</a> show more.',
  reviewsLede: 'Taken word for word from Google reviews left by families and learners.',

  fees: {
    h2: 'Fees',
    lede: 'Paid monthly in US dollars, one price for every country except India, with no sign-up charge and no minimum period.',
    free: ['A proper lesson pitched at the right level', 'Frank feedback afterwards', 'No card required'],
    group: ['Five to ten learners at the same level', 'One teacher all term', 'Work marked and explained', 'Certificate at the end'],
    one: ['Individual lessons with one teacher', 'Built around the learner\'s gaps', 'Well suited to exam seasons']
  },

  faq: {
    eyebrow: 'Leicester maths questions',
    h2: 'Questions Leicester families ask about maths tuition',
    items: [
      { q: 'How much does a maths tutor cost in Leicester?', a: 'The first lesson is free. From then on a seat in a class of five to ten is USD 100 monthly, while private lessons are USD 150 monthly, with nothing to pay to join and no term to commit to.' },
      { q: 'What is frequency density?', a: 'Frequency density is the frequency of a class divided by its width. It is used on histograms with unequal class widths so that the area of each bar, not its height, shows how many values fall in the class.' },
      { q: 'Does an online maths tutor work as well as one at the kitchen table?', a: 'It does for most learners, as long as the lesson is live and the teacher watches the working rather than just the answer. Our teachers see each line written on a shared board and correct slips the moment they appear.' },
      { q: 'I need to retake GCSE maths. Can you help?', a: 'Certainly. Resit candidates of any age join our GCSE course. The first few lessons map what is already solid, so the time goes on the topics that will actually lift the mark.' },
      { q: 'Do you teach GCSE maths for AQA, Edexcel and OCR?', a: 'All three, at either tier. Learners at schools that use the Cambridge or Edexcel international papers follow our IGCSE course instead.' },
      { q: 'Do you offer KS2 maths and Year 6 SATs preparation?', a: 'Yes. Our primary course covers KS2 maths in full, including the times tables needed for the Year 4 check and the reasoning questions in Year 6 SATs maths.' },
      { q: 'Do you teach A level Further Maths?', a: 'Yes, alongside A level Maths, for learners who want the extra pure, statistics or mechanics content.' },
      { q: 'What is the best age to start maths tuition?', a: 'Whenever a learner first starts to feel lost. We teach from age 6, and an early gap in times tables or fractions is much quicker to close than the same gap at fifteen.' },
      { q: 'Are you linked to the East Midlands South Maths Hub?', a: 'No. We describe what its public page says so families know it exists. We have no connection with the NCETM, the hub or any Leicester school.' },
      { q: 'Do you guarantee exam results?', a: 'No. We teach carefully and report honestly on progress, but no tutor can guarantee a grade and we never claim to.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Also see',
    h2: 'More for Leicester learners',
    lede: 'National maths pages by stage, our Leicester coding page and nearby maths pages.',
    items: [
      { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition', p: 'Every board and tier, explained.' },
      { href: '/ks2-maths-tuition-online', label: 'KS2 maths tuition', p: 'Primary maths from Year 3 to SATs.' },
      { href: '/functional-skills-maths-tuition-online', label: 'Functional Skills maths', p: 'Practical maths for adults and apprentices.' },
      { href: '/coding-classes-in-leicester', label: 'Coding classes in Leicester', p: 'Programming and AI for Leicester learners.' },
      { href: '/maths-tuition-in-coventry', label: 'Maths tuition in Coventry', p: 'Our Coventry maths page, with a ring road project.' },
      { href: '/coding-classes-in-united-kingdom', label: 'UK index', p: 'All our UK nation, city, town and maths pages.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson in Leicester',
    lede: 'Let us know the learner\'s age or year group, any exam and board, and the topic that causes most trouble. The free lesson is a real lesson, followed by a straight answer about where the learner is.',
    readFirst: 'Prefer to browse? See the <a class="ag-inline-link" href="/courses">full course list</a> or our page on <a class="ag-inline-link" href="/how-we-teach">teaching approach</a>.',
    note: 'WhatsApp gets the fastest reply. The number begins with India\'s code because the team is based there; we have no Leicester office and all lessons are online.',
    formNote: 'We never ask for card details. We will write back to fix a time.'
  },

  footer: {
    cols: [
      { h4: 'Maths', links: [
        { href: '/ks3-maths-tuition-online', label: 'KS3 maths tuition' },
        { href: '/a-level-maths-tuition-online', label: 'A level maths tuition' },
        { href: '/igcse-maths-tuition-online', label: 'IGCSE maths tuition' },
        { href: '/online-maths-classes-for-adults-in-uk', label: 'Adult maths classes' }
      ] },
      { h4: 'Places', links: [
        { href: '/coding-classes-in-leicester', label: 'Coding in Leicester' },
        { href: '/coding-classes-in-leicestershire', label: 'Coding in Leicestershire' },
        { href: '/maths-tuition-in-birmingham', label: 'Maths tuition in Birmingham' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK index' }
      ] }
    ],
    bottomRight: 'Leicester maths, live online'
  },

  personalityCss: `
.ag-root.ag-mlc .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-mlc .ag-capsule { border-left-width: 6px; }
.ag-root.ag-mlc .ag-section-head h2 { max-width: 25ch; }
.ag-root.ag-mlc .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-mlc .ag-table td:nth-child(4) { font-weight: 600; }
.ag-root.ag-mlc .ag-spec dt { letter-spacing: 0.08em; }
.ag-root.ag-mlc .ag-three h3 { letter-spacing: -0.008em; }
.ag-root.ag-mlc .ag-slots { gap: 1.1rem; }
`,

  mustMention: ['East Midlands South Maths Hub', 'Beauchamp College', '36,598', '29,065', '14,532.5', '12,199.3', '4.006 km', '107,079', '9.74 km'],

  dossier: {
    curriculumAuthority: 'National curriculum for England (DfE); GCSE mathematics subject content (DfE, 2013), statistics item 3 on histograms with unequal class intervals; multiplication tables check (gov.uk). Leicester is listed by the NCETM as an area of the East Midlands South Maths Hub (lead school Beauchamp College, Oadby).',
    localProject: 'Census 2021 TS058, Leicester E06000016: <2km 29,065; 2-5 36,598; 5-10 18,539; 10-20 9,819; 20-30 5,286; 30-40 3,555; 40-60 1,818; 60+ 2,399; home 29,530; offshore/no fixed place 18,325; total 154,934 (sums exactly). Frequency densities 14,532.5 / 12,199.3 / 3,707.8 / 981.9 / 528.6 / 355.5 / 90.9. Median 4.006 km, Q1 1.84, Q3 8.95; mean 8.95 / 9.18 / 9.74 km with the open class closed at 80 / 100 / 150 km.',
    requiredMentions: ['East Midlands South Maths Hub', 'Beauchamp College', '36,598', '29,065', '14,532.5', '12,199.3', '4.006 km', '107,079', '9.74 km'],
    sources: [
      { claim: 'NCETM, East Midlands South Maths Hub: lead school Beauchamp College, Oadby, Leicestershire; council areas include Leicester, Rutland, seven Leicestershire districts and four Northamptonshire ones.', url: 'https://www.ncetm.org.uk/hubs/east-midlands-south-maths-hub/' },
      { claim: 'Nomis, Census 2021 TS058 Distance travelled to work, Leicester local authority.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2075_1.data.csv?geography=645922890&measures=20100&select=c2021_ttwdist_11_name,obs_value' },
      { claim: 'DfE GCSE mathematics subject content: "histograms with equal and unequal class intervals and cumulative frequency graphs, and know their appropriate use".', url: 'https://www.gov.uk/government/publications/gcse-mathematics-subject-content-and-assessment-objectives' },
      { claim: 'gov.uk: the multiplication tables check is statutory for year 4 pupils at state-funded schools in England.', url: 'https://www.gov.uk/government/collections/multiplication-tables-check' }
    ],
    rejectedClaims: [
      'University of Leicester outreach details: the page returned HTTP 403 to curl; not circumvented, so nothing is quoted from it.',
      'A single "true" mean commuting distance: the open-ended 60 km and over class makes it depend on an assumption, so three estimates are printed with their assumptions.',
      'Any claim about Leicester exam results or school performance: excluded by the spec.',
      'That Leicester has no selective schools anywhere nearby: we only state that we run no Leicester 11 plus page.',
      'Any link between the hub, its lead school and Modern Age Coders.'
    ]
  }
};
