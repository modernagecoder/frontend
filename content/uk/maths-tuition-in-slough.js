'use strict';
// Maths tuition in Slough (ag- maths by city, UK cluster Phase 11, row 583).
// Read on 1 October 2026 by curl, quotes grepped from the raw text:
//  - NCETM, Bucks, Berks and Oxon Maths Hub page: "The Lead School for the hub is Wycombe High School, High Wycombe.";
//    council areas listed include Buckinghamshire districts, Oxfordshire, Slough, Windsor and Maidenhead.
//  - ONS, "Protecting personal data in Census 2021 results": "a typical dataset would have around 14% of cell counts
//    perturbed by a small amount, and small counts were more likely to have been perturbed than large counts."
//  - DfE, GCSE mathematics subject content (2013), ratio items 4 and 7: "use ratio notation, including reduction to
//    simplest form"; "understand and use proportion as equality of ratios".
// Local project (our calculation): Census 2021 TS007A (age by five-year bands) from Nomis for Slough (E06000039) and
// England. Slough total 158,500; under 15: 37,285; 15 to 64: 105,895; 65 and over: 15,320. Per 100 aged 15 to 64:
// 35.2 children, 14.5 older people, 49.7 in all. England (56,490,048): 9,838,977; 36,249,768; 10,401,303; per 100:
// 27.1, 28.7, 55.8. Children to older people: Slough 37,285 : 15,320 = 7,457 : 3,064 (HCF 5), about 2.43 : 1; England
// about 0.95 : 1. Per 1,000 residents: Slough 235 children, 97 older; England 174 and 184. At the England rate Slough's
// 105,895 working-age residents would come with 59,127 dependants, against 52,605 (our sum of bands). TS007 (age by
// single year) for Slough totals 158,498, two fewer than TS007A: not reconciled, explained by ONS cell key perturbation.
// Spine: how many children and older people are there for every 100 working-age people in Slough? Family: ratio and
// proportion, simplest form, the unitary method, published tables whose totals differ.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'SLOUGH MATHS', label: 'Maths tuition in Slough', blurb: 'GCSE, A level, 11 plus and adult maths for Slough, with a ratio and proportion project on the town census age bands.' },
  slug: 'maths-tuition-in-slough',
  code: 'msl',
  accent: '#15334E',
  accentRationale: 'Slough maths: a dark petrol blue (13.0:1 on white), chosen by hand at least 30 RGB units from every other maths-by-city page and 40 from our coding page for the town',
  pageType: 'city',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Maths tuition in Slough',
  title: 'Maths Tuition in Slough | 11 Plus, GCSE and A Level, Online',
  description: 'Online maths tuition in Slough for ages 6 to 67: KS2 and SATs, 11 plus, KS3, GCSE, A level and adult maths, with a census ratio and proportion project.',
  ogDescription: 'For every 100 working-age people in Slough there are 35.2 children and 14.5 people over 65. A ratio project from the census, and how we teach maths at every age.',
  twitterDescription: 'Maths tuition in Slough, live online: ratio and proportion from the town census, and two tables that disagree by two people.',
  pageName: 'Maths Tuition in Slough',
  webPageDescription: 'Live online maths tuition for Slough learners aged 6 to 67, from KS2, the SATs and the 11 plus to KS3, GCSE, A level and adult maths, with a ratio and proportion project built on Census 2021 age bands.',
  courseDescription: 'Live online maths teaching for Slough learners at every stage, in level-matched groups of five to ten or one to one, following the national curriculum and the main GCSE and A level specifications.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Maths tuition in Slough',
  navLinks: [
    { href: '#ages', label: 'Ages' },
    { href: '#ratio', label: 'Ratio project' },
    { href: '#tables', label: 'Two tables' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Slough &middot; Maths lessons for ages 6 to 67 &middot; Taught live by video',
  h1: 'Maths tuition in Slough',
  lede: 'Here is a ratio a Year 9 pupil can work out from public data in ten minutes. In the 2021 census Slough had 105,895 residents aged 15 to 64, 37,285 under 15 and 15,320 aged 65 or over. For every 100 people of working age, then, there were 35.2 children and 14.5 older people. Across England the same two figures were 27.1 and 28.7. Slough has far more children for its size and far fewer pensioners, and the ratio says so in one line. This page explains how we teach maths to Slough learners, from times tables and the 11 plus to A level, and why ratio and proportion sit at the heart of so much of it.',
  secondaryCta: { href: '#ratio', label: 'Work through the ratios' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for a learner in Slough.',
  heroNote: 'Maths is the only subject on this page &middot; Primary, 11 plus, GCSE, A level, adults &middot; Unconnected to any Slough school',
  spec: [
    ['For', 'Learners aged 6 to 67 in Slough'],
    ['Primary', 'KS2, times tables, Year 6 SATs'],
    ['Selective', '11 plus maths preparation'],
    ['Secondary', 'KS3, GCSE Foundation and Higher'],
    ['Sixth form', 'A level, with Further Maths topics'],
    ['Adults', 'Resits, refreshers, work maths'],
    ['Lessons', 'Live online, private or 5 to 10 per class'],
    ['Project', 'Census ratios and proportion']
  ],
  capsuleQ: 'Maths tuition in Slough at a glance',
  capsule: 'Modern Age Coders gives live online maths lessons to Slough learners between 6 and 67. Children start with number, times tables and the Year 6 SATs; some go on to 11 plus maths; older pupils move through KS3 into GCSE at Foundation or Higher tier for AQA, Edexcel or OCR, or IGCSE; sixth formers take A level Maths and, if they want, Further Maths topics; and adults come for GCSE maths resits and everyday confidence. Teaching is private or in classes of five to ten at one level. Our Slough project builds ratios from the census: 35.2 children and 14.5 people aged 65 or over for every 100 aged 15 to 64. Lesson one is free. From then on a class seat costs USD 100 per month and a private teacher USD 150 per month.',

  picks: {
    eyebrow: 'Where Slough learners usually begin',
    h2: '11 plus, GCSE and A level maths',
    lede: 'Slough families most often ask about these three. The complete list of our maths courses is lower down the page.',
    items: [
      { course: '11-plus-maths-preparation-course-uk', code: 'SLO / 1', title: '11 plus maths', note: 'Number fluency and multi-step problems for Year 5 children working towards a selective test in the autumn of Year 6.' },
      { course: 'gcse-mathematics-mastery', code: 'SLO / 2', title: 'GCSE mathematics', note: 'Ratio, proportion and every other topic on the specification, at whichever tier and board the school uses.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'SLO / 3', title: 'A level mathematics', note: 'The three strands of the course, with statistics practised on census tables like the ones on this page.' }
    ]
  },

  sections: [
    {
      id: 'ages', tint: 'tint', eyebrow: 'Six to sixty-seven',
      h2: 'Maths tutor in Slough for each school stage and for adults',
      lede: 'Slough schools follow the national curriculum for England, and the 11 plus sits alongside it for families who choose it. Here is how our lessons change across the stages.',
      body: [
        { kind: 'table', caption: 'Maths stages for Slough learners and the heart of our lessons at each', head: ['Stage', 'Years or ages', 'Heart of our lessons'], rows: [
          ['KS1', 'Years 1 and 2', 'Counting, place value, adding and taking away, halves and quarters.'],
          ['KS2', 'Years 3 to 6', 'All the times tables, the Year 4 multiplication tables check, fractions and the Year 6 SATs papers.'],
          ['11 plus', 'Years 5 and 6', 'Speed with accuracy, and problems that need two or three steps.'],
          ['KS3', 'Years 7 to 9', 'Ratio and proportion, algebra, area and volume, simple probability.'],
          ['GCSE and IGCSE', 'Years 10 and 11', 'Foundation or Higher tier with AQA, Edexcel or OCR, or the international papers.'],
          ['A level and adults', '16 onwards', 'A level Maths, Further Maths topics, GCSE resits and adult refreshers.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Primary, SATs and the 11 plus',
          left: [
            'Primary maths is mostly about number, and number is mostly about knowing facts well enough to use them. We teach tables as connected facts, so a child who forgets 7 × 9 can get there from 7 × 10 minus 7.',
            'Families preparing for the Slough grammar school tests will find the schools, test format and timings on our <a class="ag-inline-link" href="/11-plus-maths-tuition-slough">11 plus maths in Slough</a> page. Here we only say that strong primary number work is the base for both the SATs and the 11 plus.'
          ],
          rightH3: 'From KS3 to A level',
          right: [
            'Ratio and proportion run through secondary maths like a thread: recipes and maps in Year 7, similar shapes and value-for-money problems at GCSE, rates of change at A level. We give it more time than most courses do.',
            'Our national pages add detail stage by stage: <a class="ag-inline-link" href="/ks2-maths-tuition-online">KS2 maths</a>, <a class="ag-inline-link" href="/ks3-maths-tuition-online">KS3 maths</a>, <a class="ag-inline-link" href="/gcse-maths-tuition-online">GCSE maths</a>, <a class="ag-inline-link" href="/a-level-maths-tuition-online">A level maths</a> and <a class="ag-inline-link" href="/further-maths-tuition-online">Further Maths</a>.'
          ] },
        { kind: 'source', html: 'Years and ages are the usual ones in England. Details of the Slough selective tests are kept on our separate Slough 11 plus page.' }
      ]
    },
    {
      id: 'ratio', tint: 'plain', eyebrow: 'The Slough project',
      h2: 'How many children and pensioners for every 100 working-age people?',
      lede: 'Three numbers from the census, two ratios, and a comparison with England that a learner can explain in a sentence.',
      body: [
        { kind: 'two',
          left: [
            'The Office for National Statistics publishes the 2021 census through Nomis, including a table of age in five-year bands for every local authority. For Slough it gives a total of 158,500 residents. We grouped the bands three ways: under 15, 15 to 64, and 65 and over. That gave 37,285 children, 105,895 people of working age and 15,320 older people.',
            'Statisticians often divide the young and the old by the working-age group and scale to 100, a figure known as a dependency ratio. It is not a judgement about anyone; it is simply a way to compare places of very different sizes.'
          ],
          right: [
            'For Slough: 37,285 ÷ 105,895 × 100 = 35.2 children per 100 working-age residents, and 15,320 ÷ 105,895 × 100 = 14.5 older people. Together that is 49.7.',
            'For England, the same table gives 9,838,977 under 15, 36,249,768 aged 15 to 64 and 10,401,303 aged 65 and over, which makes 27.1 and 28.7 per 100, or 55.8 together. Slough has fewer dependants per worker than England overall, even though it has far more children. The ratio shows two things a single percentage would hide.'
          ] },
        { kind: 'table', mt: true, caption: 'Census 2021 age groups, Slough and England, with our ratios per 100 people aged 15 to 64', head: ['', 'Under 15', 'Aged 15 to 64', '65 and over', 'Children per 100', 'Older per 100'], numCols: [1, 2, 3, 4, 5], rows: [
          ['Slough', '37,285', '105,895', '15,320', '35.2', '14.5'],
          ['England', '9,838,977', '36,249,768', '10,401,303', '27.1', '28.7']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Simplest form, and when not to use it',
          left: [
            'The DfE content for GCSE asks learners to "use ratio notation, including reduction to simplest form". Children to older people in Slough is 37,285 : 15,320. The highest common factor is only 5, so the simplest form is 7,457 : 3,064, which helps nobody.',
            'Divide instead: 37,285 ÷ 15,320 is about 2.43, so the ratio is roughly 2.43 : 1, or close to 12 : 5. In England it is about 0.95 : 1. Knowing when an exact simplest form is useless and a rounded unit ratio is clearer is a real mathematical judgement.'
          ],
          rightH3: 'The unitary method',
          right: [
            'Proportion questions become easy once you scale to one, or to a round number. Per 1,000 Slough residents there are 235 children under 15 and 97 people aged 65 or over. Per 1,000 people in England there are 174 and 184.',
            'Now a "what if" question. If Slough had England\'s rate of 55.8 dependants per 100 working-age people, its 105,895 working-age residents would come with about 59,127 children and older people. Our sum of the census bands gives 52,605. That gap of about 6,500 is the difference the ratio describes.'
          ] },
        { kind: 'source', html: 'Data: <a class="ag-inline-link" href="https://www.nomisweb.co.uk/" rel="noopener" target="_blank">Nomis</a>, Census 2021 table TS007A (age by five-year age bands), Slough and England, read on 1 October 2026; Office for National Statistics, Open Government Licence. The grouping into three age groups and every ratio are Modern Age Coders calculations. GCSE wording: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/gcse-mathematics-subject-content-and-assessment-objectives" rel="noopener" target="_blank">DfE, GCSE mathematics subject content</a>.' }
      ]
    },
    {
      id: 'tables', tint: 'deep', eyebrow: 'When the parts do not add up',
      h2: 'Two census tables, two totals, two people apart',
      lede: 'A careful learner checks a total. Here the check fails, and the reason is one of the more interesting facts in official statistics.',
      body: [
        { kind: 'two',
          left: [
            'The five-year table gives Slough 158,500 residents. A second census table, age by single year from under 1 to 100 and over, gives a total of 158,498. Same census, same town, two published totals that differ by two people.',
            'The ONS explains that, to protect privacy, it used a "cell key method" on its tables, and that "a typical dataset would have around 14% of cell counts perturbed by a small amount, and small counts were more likely to have been perturbed than large counts." Our reading is that this is why the two totals differ; we do not try to say which is right.'
          ],
          right: [
            'The lesson for a learner is not that statistics are wrong. It is that a published figure is a measurement with a method behind it, and two methods can give slightly different answers. We never force them to agree, and we never add up the parts of one table and call it the total of another.',
            'For the ratios above, a difference of two people out of 158,500 changes nothing at one decimal place. That is a second lesson: always ask whether a discrepancy is big enough to matter for the question you are answering.'
          ] },
        { kind: 'table', mt: true, caption: 'What each stage takes from the Slough census ratios', head: ['Stage', 'Question we ask', 'Skill practised'], rows: [
          ['KS2', 'Are there more children or more older people in Slough?', 'Comparing and ordering large numbers'],
          ['KS3', 'How many children per 100 working-age people?', 'Ratio, division, rounding to one decimal place'],
          ['GCSE', 'What would the dependants be at the England rate?', 'Proportion as equality of ratios'],
          ['A level', 'Why might two official totals differ?', 'Data quality, error and judgement']
        ] },
        { kind: 'source', html: 'Source on perturbation: <a class="ag-inline-link" href="https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/methodologies/protectingpersonaldataincensus2021results" rel="noopener" target="_blank">ONS, Protecting personal data in Census 2021 results</a>, read on 1 October 2026. The comparison of the two totals is our own; the ONS does not comment on these two Slough figures.' }
      ]
    },
    {
      id: 'local', tint: 'tint', eyebrow: 'Maths beyond lessons',
      h2: 'The Maths Hub, competitions and the 11 plus in Slough',
      lede: 'A few things a Slough family might want to know about. We have no link with any of them.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Bucks, Berks and Oxon Maths Hub', p: 'The NCETM lists Slough among the council areas of the Bucks, Berks and Oxon Maths Hub, led by Wycombe High School in High Wycombe. Maths Hubs work with schools and teachers, not directly with families.' },
          { h3: 'UKMT maths challenge', p: 'Slough secondary schools can enter pupils for the UK Mathematics Trust challenges. We prepare learners for that style of problem; see our <a class="ag-inline-link" href="/maths-challenges">maths challenges page</a>.' },
          { h3: 'The 11 plus', p: 'Selective school places in Slough are decided by a test in Year 6. Everything about it, schools and format included, is on our <a class="ag-inline-link" href="/11-plus-maths-tuition-slough">Slough 11 plus page</a>.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'Children who enjoy puzzles often like the census work above, because it rewards spotting the right question before reaching for a calculator.',
            'Our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">UK competitions calendar</a> lists challenges by age, and the <a class="ag-inline-link" href="/junior-mathematical-olympiad-preparation">Junior Olympiad page</a> covers the next round up.'
          ],
          right: [
            'Every lesson is online, so a learner in Langley, Cippenham, Chalvey or Britwell logs in from home. Our classes are grouped by level, not by town, so a classmate might be in Reading or Leicester.',
            'Adults often say this is the first time a ratio has felt useful rather than abstract, because the numbers describe the town they live in.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.ncetm.org.uk/hubs/bucks-berks-and-oxon-maths-hub/" rel="noopener" target="_blank">NCETM, Bucks, Berks and Oxon Maths Hub</a>, read on 1 October 2026. We are independent of the NCETM, the Maths Hubs, the UKMT and every Slough school and test body.' }
      ]
    },
    {
      id: 'adults', tint: 'plain', eyebrow: 'For adults',
      h2: 'Maths for adults in Slough',
      lede: 'Not every learner on this page is a child. Adults join us to resit GCSE maths, to sharpen their numbers for work, or to keep pace with a child at school.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Resitting GCSE maths', p: 'We go back through the course from the shakiest topic, at a pace that suits working adults. Exam entry is arranged through a college or exam centre.' },
          { h3: 'Functional Skills style maths', p: 'Fractions, percentages, ratios, measures and money in practical settings. Our <a class="ag-inline-link" href="/functional-skills-maths-tuition-online">Functional Skills maths page</a> explains more.' },
          { h3: 'Supporting a child', p: 'Parents learn today\'s school methods, so help at home matches what the teacher says in class.' }
        ] },
        { kind: 'p', mt: true, html: 'Ratio is where many adults first lost confidence at school, and it is often where they regain it fastest once the idea of scaling to one clicks. There is more on our <a class="ag-inline-link" href="/online-maths-classes-for-adults-in-uk">adult maths page</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'How the topic builds',
    h2: 'Four rungs from sharing sweets to proportion',
    lede: 'Anyone can come in at any rung. The free first lesson shows us which.',
    table: { caption: 'From fair sharing to proportional reasoning, with a check before climbing higher', head: ['When it usually happens', 'Rung', 'Check before climbing'], rows: [
      ['Years 2 to 4', '1. Sharing', 'Shares a quantity fairly and explains any remainder'],
      ['Years 5 to 7', '2. Ratio', 'Writes a ratio, simplifies it and says what each part means'],
      ['Years 8 to 10', '3. Unitary method', 'Scales to one, or to 100 or 1,000, to compare two places'],
      ['Years 11 to 13', '4. Proportion', 'Treats proportion as equal ratios and spots when data quality matters']
    ] },
    left: { h3: 'Starting in Year 10 or 11', ps: [
      'Late starters are welcome. We look at fractions and division first, since almost every ratio question that goes wrong goes wrong there.',
      'If more needs fixing than there is time before the exam, we tell you at the first lesson.'
    ] },
    right: { h3: 'Where it leads', ps: [
      'Learners who enjoy census data often continue with <a class="ag-inline-link" href="/courses/statistics-probability-maths-course">statistics and probability</a>, or use <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a> to calculate ratios for every town at once.',
      'Puzzle lovers usually head for competition maths.'
    ] }
  },

  catalogue: {
    eyebrow: 'Our full list',
    h2: 'Popular maths courses for Slough learners',
    lede: 'We list first what UK families most often search for: the 11 plus, GCSE, A level and IGCSE. Each card leads to a full syllabus.',
    bands: [
      { num: 'I', h3: 'Searched for most', sub: 'Exams and entry tests', courses: [
        { code: 'MSL / A1', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths', blurb: 'Fluency and problem solving for selective tests.' },
        { code: 'MSL / A2', slug: 'gcse-mathematics-mastery', title: 'GCSE maths', blurb: 'Either tier, any of the main boards.' },
        { code: 'MSL / A3', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'Pure, mechanics and statistics together.' },
        { code: 'MSL / A4', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'For international specifications.' }
      ] },
      { num: 'II', h3: 'Primary years', sub: 'KS1 and KS2', courses: [
        { code: 'MSL / B1', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'Years 1 to 6 up to the SATs.' },
        { code: 'MSL / B2', slug: 'mental-maths-mastery-kids', title: 'Mental arithmetic', blurb: 'Confident sums without pen and paper.' },
        { code: 'MSL / B3', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus', blurb: 'Bead-frame calculation for young children.' },
        { code: 'MSL / B4', slug: 'early-math-foundations', title: 'First steps in maths', blurb: 'For children just starting school.' }
      ] },
      { num: 'III', h3: 'Secondary', sub: 'KS3 and further', courses: [
        { code: 'MSL / C1', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'KS3 maths', blurb: 'Ratio, algebra and geometry for Years 7 to 9.' },
        { code: 'MSL / C2', slug: 'statistics-probability-maths-course', title: 'Statistics', blurb: 'Handling data and chance.' },
        { code: 'MSL / C3', slug: 'algebra-foundations-masterclass', title: 'Algebra from scratch', blurb: 'For learners who need a second run.' },
        { code: 'MSL / C4', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition problems', blurb: 'UKMT-type questions for keen pupils.' }
      ] },
      { num: 'IV', h3: 'Grown-up learners', sub: 'Study and work', courses: [
        { code: 'MSL / D1', slug: 'complete-business-finance-mathematics-mastery', title: 'Maths for business', blurb: 'Ratios, percentages and interest in practice.' },
        { code: 'MSL / D2', slug: 'college-mathematics-complete-masterclass', title: 'Degree-level maths', blurb: 'For adults going back to study.' },
        { code: 'MSL / D3', slug: 'data-analytics-mathematics-masterclass', title: 'Data maths', blurb: 'The numbers under data analysis.' },
        { code: 'MSL / D4', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Shortcut methods for quick sums.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lesson times',
    h2: 'Teaching around the school day and the working day',
    lede: 'Teachers work from India, five and a half hours ahead of Slough in winter and four and a half in summer. Every time we give you is in UK time.',
    slots: [
      { time: 'Late afternoon, weekdays', l: 'Primary, 11 plus and KS3 pupils.' },
      { time: 'Evening, weekdays', l: 'GCSE, sixth form and adults.' },
      { time: 'Saturday and Sunday mornings', l: 'Learners of any age.' }
    ],
    cells: [
      { h3: 'Continuity', p: 'Your teacher stays the same, so nothing has to be explained twice.' },
      { h3: 'Parents kept informed', p: 'A brief note after lessons on what went well and what comes next.' },
      { h3: 'Small, matched classes', p: 'Five to ten learners, all at a similar point.' },
      { h3: 'Local numbers', p: 'Census tables and other real data, not only textbook exercises.' },
      { h3: 'Private option', p: 'One to one for a near exam or a stubborn topic.' },
      { h3: 'Understanding first', p: 'We show why a method works before practising it.' }
    ]
  },

  projectsH2: 'What our students made next',
  projectsLede: 'Students who began with numbers like these went on to build the projects shown here. Browse the <a class="ag-inline-link" href="/student-labs">student labs</a> for more.',
  reviewsLede: 'Reviews from our Google profile, quoted exactly as families and learners wrote them.',

  fees: {
    h2: 'Fees',
    lede: 'We bill monthly in US dollars, one price for all countries except India. No sign-up fee, no fixed term.',
    free: ['A proper lesson pitched at the right level', 'An honest summary afterwards', 'No card asked for'],
    group: ['A class of five to ten at one level', 'A regular teacher', 'Homework checked and explained', 'Certificate on finishing'],
    one: ['Private lessons with one teacher', 'Tailored to one learner', 'Good for the weeks before an exam']
  },

  faq: {
    eyebrow: 'Slough maths questions',
    h2: 'Questions about maths tuition in Slough',
    items: [
      { q: 'What is a ratio in maths?', a: 'A ratio compares two or more quantities by how many times bigger one is than another. If a class has 12 girls and 8 boys, the ratio of girls to boys is 12:8, which simplifies to 3:2.' },
      { q: 'How much does a maths tutor in Slough cost?', a: 'Our first lesson is free. After that, a place in a small class costs USD 100 a month and one to one lessons USD 150 a month. There is no joining fee.' },
      { q: 'Do you offer 11 plus maths tuition in Slough?', a: 'Yes, through our 11 plus maths course. The details of the local tests and schools are on our Slough 11 plus page.' },
      { q: 'Which GCSE exam boards do you teach?', a: 'AQA, Edexcel and OCR at Foundation and Higher tier, plus IGCSE. We follow whichever specification the school uses.' },
      { q: 'Can an adult resit GCSE maths with you?', a: 'Yes. We reteach the course from the topics you find hardest. You enter for the exam through a college or exam centre, and we prepare you for it.' },
      { q: 'Do you teach KS2 maths and SATs preparation?', a: 'Yes. We cover the whole KS2 curriculum, the times tables for the Year 4 check, and the arithmetic and reasoning papers of the Year 6 SATs.' },
      { q: 'Do you help with the UKMT maths challenge?', a: 'Yes. Our competition maths course works on the kind of problems the UK Mathematics Trust sets. Schools handle the entries.' },
      { q: 'What is the best way to get better at ratio questions?', a: 'Turn every ratio into a fraction or a rate per one, then check the answer makes sense. Most ratio mistakes come from dividing the wrong way round.' },
      { q: 'Are lessons in person in Slough?', a: 'No, all teaching is live online, so learners join from home anywhere in Slough.' },
      { q: 'Can you guarantee a grade or a test pass?', a: 'No. Nobody honest can. We teach carefully and keep you informed about progress.' }
    ]
  },

  elsewhere: {
    eyebrow: 'See also',
    h2: 'More for Slough learners',
    lede: 'The Slough 11 plus page, national maths pages and our coding page for the town.',
    items: [
      { href: '/11-plus-maths-tuition-slough', label: '11 plus maths in Slough', p: 'The Slough selective tests in full.' },
      { href: '/ks2-maths-tuition-online', label: 'KS2 maths tuition', p: 'Years 3 to 6, up to the SATs.' },
      { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition', p: 'Every tier and board.' },
      { href: '/best-coding-class-in-slough', label: 'Coding classes in Slough', p: 'Our coding page for the town.' },
      { href: '/maths-tuition-in-reading', label: 'Maths tuition in Reading', p: 'A neighbouring town with a river project.' },
      { href: '/coding-classes-in-united-kingdom', label: 'The UK index', p: 'Every UK page we have published.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson in Slough',
    lede: 'Tell us the age or school year and what feels hardest right now. The free lesson is a full one, and afterwards we tell you plainly where the learner is.',
    readFirst: 'Prefer to read more first? Try our <a class="ag-inline-link" href="/courses">course list</a> or our page on <a class="ag-inline-link" href="/how-we-teach">teaching</a>.',
    note: 'We answer WhatsApp fastest. Our number has India\'s country code because our teachers are there; we have no office in Slough and teach online only.',
    formNote: 'No card details. We reply to arrange a time.'
  },

  footer: {
    cols: [
      { h4: 'Maths', links: [
        { href: '/11-plus-maths-tuition-slough', label: '11 plus maths in Slough' },
        { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition' },
        { href: '/a-level-maths-tuition-online', label: 'A level maths tuition' },
        { href: '/ks3-maths-tuition-online', label: 'KS3 maths tuition' }
      ] },
      { h4: 'Nearby', links: [
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/best-coding-class-in-slough', label: 'Coding in Slough' },
        { href: '/maths-tuition-in-reading', label: 'Maths tuition in Reading' },
        { href: '/maths-tuition-in-oxford', label: 'Maths tuition in Oxford' }
      ] }
    ],
    bottomRight: 'Live maths lessons for all ages'
  },

  personalityCss: `
.ag-root.ag-msl .ag-hero h1 { letter-spacing: -0.017em; }
.ag-root.ag-msl .ag-capsule { border-left-width: 5px; }
.ag-root.ag-msl .ag-section-head h2 { max-width: 25ch; }
.ag-root.ag-msl .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-msl .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-msl .ag-spec dt { letter-spacing: 0.09em; }
.ag-root.ag-msl .ag-three h3 { letter-spacing: -0.003em; }
.ag-root.ag-msl .ag-slots { gap: 0.95rem; }
`,

  mustMention: ['Bucks, Berks and Oxon Maths Hub', 'Wycombe High School', '105,895', '37,285', '15,320', '35.2 children', '7,457 : 3,064', '158,498', '59,127'],

  dossier: {
    curriculumAuthority: 'National curriculum for England (DfE); GCSE mathematics subject content (DfE, 2013), ratio notation and proportion. Slough schools sit in the Bucks, Berks and Oxon Maths Hub area (NCETM).',
    localProject: 'Census 2021 TS007A, Slough (158,500): under 15 37,285, 15 to 64 105,895, 65+ 15,320; per 100 working-age 35.2 and 14.5 (49.7). England 27.1 and 28.7 (55.8). Children to older 7,457 : 3,064, about 2.43 : 1 (England 0.95 : 1). Per 1,000: Slough 235 and 97, England 174 and 184. At the England rate 59,127 dependants vs 52,605. TS007 single-year total 158,498 vs TS007A 158,500, not reconciled (ONS cell key perturbation).',
    requiredMentions: ['Bucks, Berks and Oxon Maths Hub', 'Wycombe High School', '105,895', '37,285', '15,320', '35.2 children', '7,457 : 3,064', '158,498', '59,127'],
    sources: [
      { claim: 'NCETM, Bucks, Berks and Oxon Maths Hub: lead school Wycombe High School; council areas include Slough.', url: 'https://www.ncetm.org.uk/hubs/bucks-berks-and-oxon-maths-hub/' },
      { claim: 'Nomis, Census 2021 TS007A age by five-year bands and TS007 age by single year, Slough and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS, Protecting personal data in Census 2021 results: cell key method, around 14% of cell counts perturbed by a small amount.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/methodologies/protectingpersonaldataincensus2021results' },
      { claim: 'DfE GCSE mathematics subject content: ratio notation including simplest form; proportion as equality of ratios.', url: 'https://www.gov.uk/government/publications/gcse-mathematics-subject-content-and-assessment-objectives' }
    ],
    rejectedClaims: [
      'Any ranking of Slough as the youngest town or similar: no ranking computed or sourced, so none printed.',
      'Any reconciliation of the 158,500 and 158,498 totals: both printed as published, with the ONS explanation as our reading.',
      'Any statement about ethnicity, religion or other identity characteristics of Slough residents: excluded.',
      'Herschel and telescope material: used on our Slough coding page, kept off this page.',
      'Selective school names, test format and dates: kept on the Slough 11 plus page.',
      'Any statement about Slough exam results or school performance: excluded by the spec.'
    ]
  }
};
