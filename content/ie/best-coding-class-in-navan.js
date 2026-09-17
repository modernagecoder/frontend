'use strict';
// Navan (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census 2022
// town tables for "Navan, Co Meath", read 18 September 2026, Beaufort College's
// own contact page and Solstice Arts Centre's own site. Spine: the column adds up
// to 100.1. Rounding each of the eleven shares in the Navan work travel column to
// one decimal gives a total of 100.1; two decimals gives 99.98; the exact values
// give 100. The school column of the same table, rounded identically, lands on
// 100.0, which shows the difference is arithmetic luck rather than correctness.
// Rounding rules verified in this session: Python round(2.5) is 2 and round(0.5)
// is 0, JavaScript Math.round gives 3 and 1, and both print 0.1 + 0.2 as
// 0.30000000000000004. New family for the cluster: rounding and false precision.
// Meath owns the council eircode and the town-list population, so neither appears.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'NAVAN', blurb: 'Eleven percentages that add up to 100.1, and nothing wrong with any of them. County-town arithmetic in Meath.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-navan',
  code: 'nvn',
  accent: '#4A4A2E',
  accentRationale: 'Navan: a dark olive from the solver, distinct from the Meath county indigo and from the Ashbourne and Ratoath accents in the same county',
  pageType: 'city',
  place: {
    name: 'Navan',
    eyebrow: 'Navan, County Meath',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'County Meath' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-meath', name: 'County Meath' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Meath', href: '/coding-classes-in-county-meath' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Navan, County Meath, Ireland',
  title: 'Best Coding Class in Navan | Modern Age Coders',
  description: 'Live online coding, Python and AI lessons for Navan learners aged 6 to 67, taught live by a teacher in small ability groups or one to one. First lesson free.',
  ogDescription: 'Coding and AI classes for Navan, with a project on a census column whose percentages add up to 100.1 and are all correct.',
  twitterDescription: 'Coding and AI classes for Navan, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '18 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Navan',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Navan, County Meath, taught live in English.'
  },

  h1: 'Coding classes in Navan',
  capsuleQ: 'What is the best coding class in Navan?',
  capsule: 'Navan counts 33,707 usual residents in the census town tables and 11,322 households, 9,762 of them reporting broadband. Nobody travels to us: the teacher appears on video at a set hour, twice in most weeks, and the learner works alongside as few as four others at the same stage or with nobody else at all. Six is our youngest age and sixty-seven our oldest. The opening lesson is free. A shared place then runs at USD 100 monthly, private teaching at USD 150.',
  lead: 'Take the eleven rows of Navan\'s work travel column, turn each count into a percentage of the 15,024 working residents, round each to one decimal, and add them up. The total is 100.1. Every individual figure is right, the counts are exactly as the CSO published them, and the column still comes to more than everything. Print two decimals instead and the same column totals 99.98. The explanation is not an error anywhere: eleven numbers were each rounded on their own, each moved by up to half a tenth, and the movements did not cancel. What a learner does next is the interesting part, because there are three defensible responses and each of them has a cost.',
  wa: 'Hello Modern Age Coders, I want to book a free coding lesson for a learner in Navan.',

  picks: {
    eyebrow: 'Course picks for Navan',
    h2: 'Where Navan learners begin',
    intro: 'Choose on age and interest. The teacher who runs the course takes the free lesson and sets the level from it.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Block coding with numbers that have to come out right, and be checked when they do not.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 13', note: 'Percentages, decimals and rounding written as code, which is where rounding stops being a school rule.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Real census columns in Python, including what to do when the shares do not total 100.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'For adults building reports where a table has to add up in front of other people.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'The column that adds to 100.1',
      intro: 'Main means of travel to work for the 15,024 Navan working residents. The counts are published; both percentage columns are our division of the same figures.',
      body: [
        { kind: 'table', caption: 'Travel to work, Navan, with shares at two precisions', head: ['Mode', 'Residents', 'Share, two decimals', 'Share, one decimal'], rows: [
          ['Car driver', '8,717', '58.02', '58.0'],
          ['On foot', '1,312', '8.73', '8.7'],
          ['Work mainly at or from home', '1,270', '8.45', '8.5'],
          ['Bus, minibus or coach', '977', '6.50', '6.5'],
          ['Van', '930', '6.19', '6.2'],
          ['Car passenger', '824', '5.48', '5.5'],
          ['Not stated', '688', '4.58', '4.6'],
          ['Bicycle', '179', '1.19', '1.2'],
          ['Train, DART or Luas', '45', '0.30', '0.3'],
          ['Motorcycle or scooter', '44', '0.29', '0.3'],
          ['Other, including lorry', '38', '0.25', '0.3'],
          ['Column total', '15,024', '99.98', '100.1']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why it happens', p: 'Each share is rounded by itself, moving up or down by as much as five hundredths. Eleven independent moves rarely cancel out, so the printed column can land above or below a hundred while every row in it is correctly rounded.' },
          { h3: 'Three answers, three costs', p: 'Publish as it stands and add a line saying the shares are rounded separately. Or adjust the row with the largest remainder so the column totals a hundred, at the cost of one printed figure no longer being its own row rounded. Or print more decimals, which invites comparisons a single person could flip.' },
          { h3: 'The same method, a clean total', p: 'Round the town\'s school, college and childcare column the same way and it comes to 100.0 exactly. Nothing was done differently. That is the proof that a clean total is luck rather than a sign of correctness.' }
        ] },
        { kind: 'callout', h3: 'Rounding is where careful code earns its keep', p: 'Two languages, checked while writing this page: Python answers round(2.5) with 2 and round(0.5) with 0, rounding halves to the nearest even number, while JavaScript\'s Math.round answers 3 and 1, rounding halves upward. The same dataset, the same formula, two different published tables. Both languages also print 0.1 plus 0.2 as 0.30000000000000004, because those values have no exact binary form. None of this is obscure trivia. It is the reason invoice totals disagree by a cent, dashboards show 101%, and two teams argue for a week about whose figure is wrong when both are right and neither wrote down a rule.',
        },
        { kind: 'p', text: 'The project asks for one function and one paragraph. The function takes the counts, returns the shares at a stated precision, prints the total of the printed values, and applies a largest-remainder adjustment only when asked, reporting that it did. The paragraph states which rule was used and why, in the words a reader of the table would need. The learner then runs the same calculation in Python and in JavaScript and checks whether the two agree, which for this Navan column they do, and for a column containing an exact half they would not.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'Navan in the town tables',
      h2: 'The county town, counted',
      intro: 'Published for the built-up area Navan, Co Meath, in the Census 2022 small area tables.',
      body: [
        { kind: 'table', caption: 'Navan, Census 2022', head: ['Measured', 'Count'], rows: [
          ['Usual residents', '33,707'],
          ['Households', '11,322'],
          ['Households reporting broadband', '9,762'],
          ['Working residents in the travel table', '15,024'],
          ['Residents travelling to school, college or childcare', '9,738'],
          ['Children under fifteen in childcare', '2,102']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The work journey', p: 'Of the 15,024 working residents, 8,717 drive, 1,312 walk, 1,270 give home as their main answer, 977 take a bus, 930 use a van and 179 cycle.' },
          { h3: 'Home working', p: 'A different table, asking directly rather than about a journey, records 3,865 working residents doing some work at home, 9,838 who never do and 1,321 who did not state.' },
          { h3: 'The town at work and study', p: 'The economic status table counts 15,099 residents at work, 3,031 students and 2,791 retired among those aged fifteen and over.' }
        ] },
        { kind: 'spec', title: 'A school in the town', p: 'Beaufort College gives its address as Trim Rd, Navan, Co Meath, eircode C15PY53, and describes itself on its own site as a multi-denominational, co-educational post-primary school in Navan under Louth and Meath Education and Training Board. We have no connection with the college, and our lessons run outside the school day.' }
      ]
    },
    {
      id: 'school', tint: 'tint', eyebrow: 'The control case',
      h2: 'The school column, rounded identically',
      intro: 'The same arithmetic applied to the 9,738 residents travelling to school, college or childcare in Navan. Counts published, shares ours.',
      body: [
        { kind: 'table', caption: 'Travel to school, college or childcare, Navan', head: ['Mode', 'Residents', 'Share, one decimal'], rows: [
          ['Car passenger', '3,717', '38.2'],
          ['On foot', '3,188', '32.7'],
          ['Bus, minibus or coach', '1,463', '15.0'],
          ['Not stated', '768', '7.9'],
          ['Bicycle', '273', '2.8'],
          ['Car driver', '231', '2.4'],
          ['Work mainly at or from home', '49', '0.5'],
          ['Train, DART or Luas', '25', '0.3'],
          ['Column total', '9,738', '100.0']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Rows left out of the printed table', p: 'Fourteen residents travel by van, ten under other including lorry, and none by motorcycle or scooter. They are in the total and are named here rather than quietly dropped, which is the other half of making a table add up.' },
          { h3: 'A clean hundred proves nothing', p: 'This column and the work column were produced by the same code. One lands on 100.0 and the other on 100.1, so a total that looks right is not evidence that a method is right.' },
          { h3: 'Rounding never touched the counts', p: 'Every count on both tables is exactly as published. Rounding happens only when a count becomes a share, which is also the only place the disagreement can appear.' }
        ] },
        { kind: 'spec', title: 'The arts centre', p: 'Solstice Arts Centre gives its address as Railway Street, Navan, Co. Meath, C15 KWP1, and publishes registered charity number 20065775 on its own site. We have no connection with it, and none of its prices appear here.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning in Navan',
      h2: 'What we teach around this',
      intro: 'A weekly hour, a live teacher, and the habit of making numbers behave in public.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Younger learners', p: 'Block coding and small games first, with counting and checking built into every project.' },
          { h3: 'Secondary years', p: 'Python, websites and AI projects, through the junior cycle and on into the exam years.' },
          { h3: 'Adults', p: 'Python, data and AI for adults, including the 3,865 residents already doing some of their work at home.' }
        ] },
        { kind: 'p', text: 'Beaufort College and Solstice Arts Centre appear here only as named institutions quoted from their own pages, and we are connected to neither, nor to Meath County Council. All counts are Central Statistics Office Census 2022 figures for the built-up area, printed unchanged. Both percentage columns are ours, produced by dividing published counts and rounding each share separately, and the page prints the totals those roundings produce rather than tidying either of them into a hundred.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From decimals to tables that add up',
    intro: 'Ages guide the choice; the free lesson settles the level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Nearly and exactly', p: 'Counting, estimating and checking in block code, where a total either matches or does not.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Rounding on purpose', p: 'Decimals and percentages in Python, with a rounding rule chosen rather than inherited.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Tables for other people', p: 'Producing summary tables from real data that survive being added up by a reader.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Money and totals', p: 'Handling currency, precision and rounding in code where a cent out is a problem.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant why the column adds to 100.1',
    intro: 'The explanation is usually right and the fix usually silent.',
    p1: 'Most models will correctly say that independent rounding causes it. Ask for a corrected table and many will quietly adjust a row so the column totals a hundred, without saying which row moved or why. The table then looks tidier and contains one figure that is no longer the rounded share of its own row, with nothing on the page to say so.',
    p2: 'A learner who has done this project asks for the rule before the table: round separately and disclose, or adjust and name the adjusted row. Either is publishable. Neither is the silent version, and knowing the difference is what makes a generated table safe to put your name on.',
    closer: 'The arithmetic here is primary school material. Deciding what to print, and saying what you did, is professional work, and it is learnable at any age from six upwards.',
    blogAnchor: 'why coding is worth learning now'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons run for Navan families',
    intro: 'Six points of logistics.',
    cells: [
      { h3: 'Live teaching', p: 'A teacher present for the whole hour, working from what the learner has on screen.' },
      { h3: 'Five to ten at a level', p: 'Groups are built on ability, with learners from Navan, the rest of Ireland and abroad.' },
      { h3: 'A fixed slot', p: 'Two lessons in most weeks, around eight a month, at an hour agreed once at the start.' },
      { h3: 'Around the school year', p: 'Mid-terms, holidays and exam weeks go into the plan before the first lesson.' },
      { h3: 'What is needed', p: 'A computer with a keyboard, sound that works, and a connection able to carry video.' },
      { h3: 'Private teaching', p: 'Where no group at the right level meets at a workable hour, the course runs one to one.' }
    ],
    spec: { title: 'Two lessons, eight a month', p: 'Eight is not exactly four weeks times two every month, and we say so rather than rounding the year into a promise. The schedule is set with the term dates in front of both sides.' }
  },

  fees: {
    h2: 'Navan class fees',
    intro: 'Three lines, in full.',
    first: 'The opening lesson, taught and assessed in full, with no charge.',
    group: 'A month in an ability group of five to ten learners, about eight live lessons.',
    private: 'A month of one to one teaching on the same weekly pattern.',
    closer: 'Fees are monthly, in US dollars, at the one rate used for every family outside India, so Navan sees the same figure as Ashbourne or Drogheda and no second list in another currency. Nothing is charged before the opening lesson has fixed a course and an hour, and the pricing page sets out breaks, missed weeks and moving between group and private teaching.'
  },

  reviewsH2: 'Six of our families, in their own words from Google',

  book: {
    h2: 'Book a free Navan lesson',
    intro: 'Tell us an age and an interest and the first hour is built around it, whether that is a game, a first program or a table that refuses to add up until somebody decides how to round it.',
    success: 'Thank you. We will be in touch about the Navan lesson shortly.'
  },

  faq: {
    h2: 'Navan coding class questions',
    intro: 'The questions Navan households ask first.',
    items: [
      { q: 'How many people live in Navan?', a: 'The Census 2022 small area tables count 33,707 usual residents in the built-up area of Navan, living in 11,322 households. Our Meath page quotes the census town list, which counts town populations on a slightly different basis.' },
      { q: 'What is the Navan data project?', a: 'Learners turn the town\'s work travel counts into percentages, discover that the eleven shares rounded to one decimal total 100.1 while the same shares at two decimals total 99.98, and then choose between disclosing the rounding, adjusting the largest remainder, or printing more decimals.' },
      { q: 'Is the census table wrong if the percentages do not add to 100?', a: 'No. The counts are exact and the shares are each correctly rounded. Independent rounding of eleven numbers simply does not have to sum to a hundred, which is why the same method gives 100.0 on the town\'s school travel column.' },
      { q: 'How do Navan residents travel to work?', a: 'Of the 15,024 working residents in the travel table, 8,717 drive, 1,312 walk, 1,270 give working mainly at or from home, 977 take a bus, 930 use a van, 824 travel as a car passenger, 179 cycle and 45 take a train, DART or Luas.' },
      { q: 'When do lessons take place?', a: 'Late afternoons, evenings and weekend mornings. Our teaching team is in India: while Irish summer time runs, they are four and a half hours in front, and five and a half once it ends. The weekly hour gets picked in the opening lesson with that gap in view.' },
      { q: 'Do you teach adults in Navan?', a: 'Yes. Our oldest learners are in their sixties, beginners are common, and where an adult ends up, in a group of peers at the same stage or alone with a teacher, is settled by what happens in the opening hour.' },
      { q: 'Is maths a big part of the courses?', a: 'Only as much as the project needs. Some learners take a maths through coding course deliberately; others meet arithmetic through games, data and small tools without it ever being a maths lesson.' },
      { q: 'Is there a Modern Age Coders classroom in Navan?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Navan cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Navan',
    html: 'Elsewhere in the county are <a class="cg-inline-link" href="/best-coding-class-in-ashbourne">Ashbourne</a> and <a class="cg-inline-link" href="/best-coding-class-in-ratoath">Ratoath</a>, inside <a class="cg-inline-link" href="/coding-classes-in-county-meath">County Meath</a> and the province of <a class="cg-inline-link" href="/coding-and-ai-classes-in-leinster">Leinster</a>. Our <a class="cg-inline-link" href="/best-online-coding-classes-ireland">comparison page</a> sets us beside other online schools, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> lists every page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Navan, Meath and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-ashbourne', label: 'Ashbourne' },
    { href: '/coding-classes-in-county-meath', label: 'County Meath' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-nvn .cg-hero-grid { align-items: start; gap: clamp(1.15rem, 3.18vw, 2.56rem); }
.cg-root.cg-nvn .cg-hero h1 { font-weight: 700; letter-spacing: -0.0188em; line-height: 1.057; }
.cg-root.cg-nvn .cg-capsule { border-bottom: 7px solid var(--cg-accent); padding-bottom: 1.17rem; }
.cg-root.cg-nvn .cg-eyebrow { letter-spacing: 0.176em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-nvn .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.0124em; }
.cg-root.cg-nvn .cg-grid-3 { gap: clamp(1.11rem, 2.59vw, 2.02rem); }
.cg-root.cg-nvn .cg-table caption { letter-spacing: 0.032em; font-weight: 700; }
.cg-root.cg-nvn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-nvn .cg-table tr:last-child td { font-weight: 700; border-top: 2px solid var(--cg-accent); }
.cg-root.cg-nvn .cg-ladder-col { border-left: 6px solid var(--cg-accent); padding-left: 1.08rem; }
.cg-root.cg-nvn .cg-callout { border-left-width: 9px; }
`,

  dossier: {
    curriculumAuthority: 'Navan, the built-up area "Navan, Co Meath", CSO Census 2022 Small Area Population town tables, read 18 September 2026. SAP2022T11T1TOWN22, to work, total 15,024: car driver 8,717, on foot 1,312, work mainly at or from home 1,270, bus minibus or coach 977, van 930, car passenger 824, not stated 688, bicycle 179, train DART or Luas 45, motorcycle or scooter 44, other including lorry 38. Our division of those counts gives, to two decimals, 58.02, 8.73, 8.45, 6.50, 6.19, 5.48, 4.58, 1.19, 0.30, 0.29 and 0.25, summing to 99.98, and to one decimal 58.0, 8.7, 8.5, 6.5, 6.2, 5.5, 4.6, 1.2, 0.3, 0.3 and 0.3, summing to 100.1. To school, college or childcare, total 9,738: car passenger 3,717, on foot 3,188, bus 1,463, not stated 768, bicycle 273, car driver 231, work mainly at or from home 49, train 25, van 14, other including lorry 10, motorcycle or scooter 0; the same one-decimal method on that column sums to 100.0. SAP2022T2T1TOWN22: usual residents 33,707, born in Ireland 24,319. SAP2022T15T2TOWN22: households 11,322, broadband 9,762, other 187, none 710, not stated 663. SAP2022T11T4TOWN22: 15,024 working persons, 3,865 work from home at least some of the time, 9,838 never, 1,321 not stated. SAP2022T11T5TOWN22: 2,102 children under 15 in childcare, 928 aged 0 to 4 and 1,174 aged 5 to 14. SAP2022T8T1TOWN22: at work 15,099, students 3,031, retired 2,791. Rounding behaviour checked in this session rather than recalled: Python returns 2 for round(2.5), 0 for round(0.5) and 2 for round(1.5); JavaScript Math.round returns 3, 1 and 2 for the same values; both print 0.1 + 0.2 as 0.30000000000000004. Beaufort College: "Trim Rd, Navan, Co Meath", "Eircode C15PY53", "a multi-denominational, co-educational Post-Primary School in Navan, Co. Meath", LMETB. Solstice Arts Centre: "Solstice Arts Centre Railway Street Navan, Co. Meath Ireland C15 KWP1", "Registered Charity Number (RCN): 20065775".',
    localProject: 'The column that adds to 100.1. Each of the eleven rows in Navan\'s work travel column is divided by the 15,024 working residents and rounded on its own. At one decimal the printed shares total 100.1; at two decimals they total 99.98; the unrounded values total 100. No figure is wrong: eleven independent roundings each move a value by up to five hundredths and the movements do not cancel. The page sets out the three defensible responses and the cost of each, publishing as-is with a disclosure line, adjusting the largest remainder so that one printed figure is no longer its own rounded share, or printing more decimals and inviting comparisons a single person could flip. The control case is the town\'s school, college and childcare column, run through identical code, which lands on exactly 100.0, showing that a clean total is luck rather than evidence of correctness. The callout uses rounding behaviour verified in this session: Python rounds halves to even, giving 2 for round(2.5) and 0 for round(0.5), JavaScript Math.round rounds halves upward, giving 3 and 1, and both languages print 0.1 plus 0.2 as 0.30000000000000004. The learner writes a function that returns shares at a stated precision, prints the total of the printed values, applies a largest-remainder adjustment only on request and reports when it has, then repeats the calculation in both languages. New family for the cluster: rounding and false precision.',
    requiredMentions: [
      '33,707',
      '11,322',
      '9,762',
      '15,024',
      '8,717',
      '9,738',
      '3,717',
      '3,188',
      '1,463',
      '2,102',
      'C15 KWP1',
      'C15PY53'
    ],
    sources: [
      { claim: 'CSO Census 2022 table SAP2022T11T1TOWN22, means of travel, Navan, Co Meath: to work 15,024 with car driver 8,717, on foot 1,312, mainly at or from home 1,270, bus 977, van 930, car passenger 824, not stated 688, bicycle 179, train 45, motorcycle 44, other 38; to school, college or childcare 9,738 with car passenger 3,717, on foot 3,188, bus 1,463, not stated 768, bicycle 273, car driver 231, home 49, train 25, van 14, other 10, motorcycle 0.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22, SAP2022T15T2TOWN22, SAP2022T11T4TOWN22, SAP2022T11T5TOWN22 and SAP2022T8T1TOWN22, Navan: usual residents 33,707, born in Ireland 24,319; households 11,322, broadband 9,762, other 187, none 710, not stated 663; 3,865 work from home at least some of the time, 9,838 never, 1,321 not stated; 2,102 children under 15 in childcare; at work 15,099, students 3,031, retired 2,791.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T15T2TOWN22/JSON-stat/2.0/en' },
      { claim: 'Beaufort College: "Trim Rd, Navan, Co Meath", "Eircode C15PY53"; "Beaufort College is a multi-denominational, co-educational Post-Primary School in Navan, Co. Meath" under Louth and Meath Education and Training Board.', url: 'https://www.beaufortcollege.ie/' },
      { claim: 'Solstice Arts Centre: "Solstice Arts Centre Railway Street Navan, Co. Meath Ireland C15 KWP1"; "Registered Charity Number (RCN): 20065775".', url: 'https://www.solsticeartscentre.ie/' }
    ],
    rejectedClaims: [
      'Any suggestion that the census table is wrong because the rounded shares total 100.1: the counts are exact and each share is correctly rounded.',
      'Silently adjusting a row so a printed column totals a hundred: any adjustment on this page would be named, and none is made.',
      'Any reason for the size of any travel share in Navan.',
      'Rounding claims from memory: the Python and JavaScript behaviour quoted here was run in this session before being written.',
      'The census town-list population of Navan and the Meath County Council eircode: the County Meath page owns both.',
      'Solstice Arts Centre ticket prices, and any claim about either institution beyond its own published page.'
    ]
  }
};
