'use strict';
// Maths tuition in Cambridge (ag- maths by city, UK cluster Phase 11, row 586).
// Read on 1 October 2026 by curl, quotes grepped from the raw text:
//  - NCETM, Cambridge Maths Hub page: "The joint Lead Schools for the hub are Cambourne Village College and Comberton
//    Village College, Cambridge."; council areas listed include Cambridge, Cambridgeshire, West Suffolk, King's Lynn
//    and West Norfolk, Peterborough.
//  - Millennium Mathematics Project (maths.org): "The Millennium Mathematics Project (MMP) is a maths education and
//    outreach initiative for ages 3 to 19 and the general public." and "including the very successful NRICH website,
//    Plus online mathematics magazine, and face-to-face work with schools and the public."
//  - ONS, Travel to work, England and Wales: Census 2021: "Take care when interpreting areas below regional level since
//    high concentrations of furloughed respondents may have affected the data."; "569,000 (2.0%) travelled by bicycle".
//  - DfE, GCSE mathematics subject content (2013), ratio item 9: "compare two quantities using percentages; work with
//    percentages greater than 100%".
// Local project (our calculation): Census 2021 TS061 (method used to travel to work) from Nomis, all 331 local
// authority districts of England and Wales. Cambridge (E07000008): 70,596 in employment; 32,113 mainly at or from home;
// 11,836 bicycle; 13,485 driving a car or van; 6,858 on foot. England: 26,405,214; 8,321,252; 554,215; 11,751,945;
// 2,016,981. Cycling share of all: Cambridge 16.77%, England 2.10%: 14.67 points, 7.99 times, +699%. Share of those not
// at home (our subtraction: 38,483 and 18,083,962): 30.76% and 3.06%: 10.04 times. Cambridge highest of 331 on both
// bases; Oxford second (10.53% of all, 17.20% of travellers). Car drivers: Cambridge 19.10% of all, England 44.51%.
// Spine: how much more do Cambridge workers cycle than England as a whole? Family: percentages of different bases,
// percentage points vs percentage change, multiplicative comparison, percentages above 100%.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'CAMBRIDGE MATHS', label: 'Maths tuition in Cambridge', blurb: 'GCSE, A level, Further Maths topics and adult maths for Cambridge, with a percentages project on how the city travels to work.' },
  slug: 'maths-tuition-in-cambridge',
  code: 'cbm',
  accent: '#8A1518',
  accentRationale: 'Cambridge maths: a deep brick red (9.54:1 on white), chosen by hand at least 30 RGB units from every other maths-by-city page and 40 from our coding page for the town',
  pageType: 'city',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Maths tuition in Cambridge',
  title: 'Maths Tuition in Cambridge | GCSE, A Level and Further Maths',
  description: 'Online maths tutor in Cambridge for ages 6 to 67: KS2, KS3, GCSE, A level, Further Maths topics and adult maths, with a census percentages project on cycling.',
  ogDescription: 'Cambridge workers cycle 8 times as much as England, or 10 times, depending on what you divide by. A percentages project from the census, and how we teach maths.',
  twitterDescription: 'Maths tuition in Cambridge, live online: is cycling 14.7 points higher, 699% higher or 8 times higher? All three are true.',
  pageName: 'Maths Tuition in Cambridge',
  webPageDescription: 'Live online maths tuition for Cambridge learners aged 6 to 67, from KS2 and the SATs through KS3, GCSE and A level with Further Maths topics to adult maths, with a percentages project on Census 2021 travel to work.',
  courseDescription: 'Live online maths teaching for Cambridge learners at every stage, in level-matched groups of five to ten or one to one, following the national curriculum and the GCSE and A level specifications.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Maths tuition in Cambridge',
  navLinks: [
    { href: '#stages', label: 'Stages' },
    { href: '#cycling', label: 'Cycling' },
    { href: '#bases', label: 'Percentages' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Cambridge &middot; Maths tutors for ages 6 to 67 &middot; Live lessons by video',
  h1: 'Maths tuition in Cambridge',
  lede: 'In the 2021 census, 11,836 Cambridge residents said they usually cycled to work. That was 16.8 per cent of everyone in work, against 2.1 per cent across England. So how much more do Cambridge people cycle? You can honestly say 14.7 percentage points more, or 699 per cent more, or about 8 times as much. Leave out the people who worked from home and the share climbs to 30.8 per cent, and the multiple becomes 10. Every one of those statements is true. Knowing which one a writer chose, and why, is what percentages are really about. This page explains how we teach maths to Cambridge learners from primary school to A level and beyond, with the census as our example.',
  secondaryCta: { href: '#cycling', label: 'Compare the percentages' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for a learner in Cambridge.',
  heroNote: 'Maths only, on this page &middot; Primary, GCSE, A level and adults &middot; Unconnected to the University of Cambridge or any school',
  spec: [
    ['Ages', '6 to 67, in and around Cambridge'],
    ['Primary', 'KS2 maths, tables, SATs'],
    ['KS3', 'Years 7 to 9, percentages and algebra'],
    ['GCSE', 'Foundation and Higher, AQA, Edexcel, OCR'],
    ['Sixth form', 'A level and Further Maths topics'],
    ['Adults', 'GCSE resits and statistics for work'],
    ['Teaching', 'Live online, solo or 5 to 10 per class'],
    ['Project', 'Census cycling percentages']
  ],
  capsuleQ: 'Maths tuition in Cambridge, briefly',
  capsule: 'Modern Age Coders teaches maths live online to Cambridge learners aged 6 to 67. For younger children that means number sense, the tables and SATs reasoning. Secondary pupils move from KS3 into GCSE, taught for their own board (AQA, Edexcel or OCR) and tier, or into IGCSE. A level students can reach into Further Maths topics. Grown-ups arrive for GCSE retakes, for statistics, or to stop dreading numbers. A learner may have a teacher to themselves or share a class with between five and ten others at the same point. Our Cambridge project uses the census: 16.8 per cent of Cambridge workers cycled to work against 2.1 per cent in England, which is 14.7 percentage points, or about 8 times as much. The first lesson is free; then it is USD 100 a month for a class place or USD 150 a month for a private teacher.',

  picks: {
    eyebrow: 'Where Cambridge learners begin',
    h2: 'A level, GCSE and primary maths',
    lede: 'These three cover most of the enquiries we receive from Cambridge. The rest of our maths courses are listed further down.',
    items: [
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'CAM / 1', title: 'A level maths and stretch', note: 'The full A level, with Further Maths topics for students who finish the core early and want harder problems.' },
      { course: 'gcse-mathematics-mastery', code: 'CAM / 2', title: 'GCSE maths at either tier', note: 'Percentages, ratio and proportion done properly, because they decide more GCSE marks than most families realise.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'CAM / 3', title: 'Primary maths to the SATs', note: 'Place value, tables and fractions for Years 1 to 6, so that percentages later have something firm to stand on.' }
    ]
  },

  sections: [
    {
      id: 'stages', tint: 'tint', eyebrow: 'From six to sixty-seven',
      h2: 'Maths tutor in Cambridge, stage by stage',
      lede: 'The national curriculum for England sets what Cambridge schools teach. Below, the emphasis of our lessons at each point along it.',
      body: [
        { kind: 'table', caption: 'Maths stages for Cambridge learners and what our lessons stress', head: ['Stage', 'Usual ages', 'What our lessons stress'], rows: [
          ['KS1', '5 to 7', 'Number to 100, simple fractions, adding and subtracting with confidence.'],
          ['KS2', '7 to 11', 'Tables for the Year 4 multiplication tables check, fractions to percentages, the Year 6 SATs.'],
          ['KS3', '11 to 14', 'Percentage change, ratio, algebra and the first statistics.'],
          ['GCSE', '14 to 16', 'Either tier for the three main boards or IGCSE, with multipliers and percentage change taught as one idea.'],
          ['A level', '16 to 18', 'Pure, statistics and mechanics; Further Maths topics for those who want them.'],
          ['Adults', '18 to 67', 'Retaking GCSE, statistics for the job, or a fresh start with the basics.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Primary and SATs',
          left: [
            'Most percentage trouble at GCSE begins with fractions at primary school. We teach that a half, 0.5 and 50 per cent are the same amount written three ways, and we keep coming back to it until it is obvious.',
            'Times tables matter too. The Year 4 multiplication tables check is statutory, and a child who knows the tables well finds percentages of amounts far less frightening later.'
          ],
          rightH3: 'Secondary, A level and Further Maths',
          right: [
            'At KS3 and GCSE we treat percentages as multipliers: an increase of 20 per cent means multiplying by 1.2. That one idea turns a long topic into a short one. At A level the same idea becomes exponential growth and logarithms.',
            'Deeper guides sit on our national pages, one per stage: <a class="ag-inline-link" href="/further-maths-tuition-online">Further Maths</a> for the keenest sixth formers, <a class="ag-inline-link" href="/a-level-maths-tuition-online">A level</a>, <a class="ag-inline-link" href="/gcse-maths-tuition-online">GCSE</a>, <a class="ag-inline-link" href="/ks3-maths-tuition-online">Years 7 to 9</a> and <a class="ag-inline-link" href="/ks2-maths-tuition-online">Years 3 to 6</a>.'
          ] },
        { kind: 'source', html: 'Ages follow the normal English school pattern. Admissions advice is not something we offer.' }
      ]
    },
    {
      id: 'cycling', tint: 'plain', eyebrow: 'The Cambridge project',
      h2: 'How much more do Cambridge workers cycle than England as a whole?',
      lede: 'One census table, the same few numbers, and three different but correct answers.',
      body: [
        { kind: 'two',
          left: [
            'The 2021 census asked people in work how they usually travelled to work. The Office for National Statistics publishes the answers for every local authority through Nomis, in table TS061. Cambridge had 70,596 residents in employment. Of those, 32,113 worked mainly at or from home, 11,836 cycled, 13,485 drove a car or van and 6,858 walked.',
            'Across England the same table counts 26,405,214 people in work, of whom 554,215 cycled. As a share of everyone in work, that is 16.77 per cent for Cambridge and 2.10 per cent for England.'
          ],
          right: [
            'We ranked all 331 local authority districts in England and Wales by the share of workers who cycled. Cambridge came first, and Oxford second at 10.53 per cent. That ranking is our own calculation from the published table.',
            'A warning comes with the data. The census was taken during the pandemic, and the ONS says: "Take care when interpreting areas below regional level since high concentrations of furloughed respondents may have affected the data." Our numbers describe March 2021, not a normal year.'
          ] },
        { kind: 'table', mt: true, caption: 'Travel to work, Census 2021, Cambridge and England (counts from TS061; percentages are our calculation)', head: ['', 'In employment', 'Mainly at or from home', 'Cycled', 'Cycled, % of all in work'], numCols: [1, 2, 3, 4], rows: [
          ['Cambridge', '70,596', '32,113', '11,836', '16.77%'],
          ['England', '26,405,214', '8,321,252', '554,215', '2.10%']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Three true answers',
          left: [
            'Subtract: 16.77 minus 2.10 is 14.67. That is a difference of 14.67 percentage points, a difference between two percentages.',
            'Divide: 16.77 divided by 2.10 is about 7.99. Cambridge workers cycled about 8 times as often, in proportion, as workers across England.'
          ],
          rightH3: 'And one that sounds enormous',
          right: [
            'Percentage change: the Cambridge share is 699 per cent higher than the England share, because (16.77 − 2.10) ÷ 2.10 × 100 is about 699. The DfE content for GCSE asks learners to "compare two quantities using percentages; work with percentages greater than 100%". This is exactly that.',
            'A headline writer wanting drama picks 699 per cent; a cautious one picks 14.7 points. Neither is lying. A good reader asks which was chosen.'
          ] },
        { kind: 'source', html: 'Counts come from census table TS061 on <a class="ag-inline-link" href="https://www.nomisweb.co.uk/" rel="noopener" target="_blank">Nomis</a>, the ONS labour market and census service, downloaded on the first of October 2026 under the Open Government Licence. Caveat quoted from the <a class="ag-inline-link" href="https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/employmentandemployeetypes/bulletins/traveltoworkenglandandwales/census2021" rel="noopener" target="_blank">ONS travel to work bulletin</a>. GCSE wording: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/gcse-mathematics-subject-content-and-assessment-objectives" rel="noopener" target="_blank">DfE, GCSE mathematics subject content</a>.' }
      ]
    },
    {
      id: 'bases', tint: 'deep', eyebrow: 'Percentage of what?',
      h2: 'Change the denominator and the story changes',
      lede: 'Every percentage is a fraction with a bottom number. In the census that bottom number is a choice, and Cambridge shows why it matters.',
      body: [
        { kind: 'two',
          left: [
            'Nearly half of Cambridge workers, 45.5 per cent, worked mainly at or from home in March 2021, against 31.5 per cent across England. Those people did not travel at all, so it is reasonable to ask what share of the people who did travel went by bike.',
            'Subtracting the home workers leaves 38,483 Cambridge residents who travelled. Of those, 11,836 cycled, which is 30.76 per cent. For England, 18,083,962 travelled and the cycling share is 3.06 per cent.'
          ],
          right: [
            'On this base Cambridge cycles about 10 times as much as England, not 8. Nothing about the cyclists changed; only the bottom of the fraction did. Cambridge still comes first of the 331 districts on this measure, with Oxford second at 17.20 per cent.',
            'The same trick works on cars. Driving a car or van was 19.10 per cent of all Cambridge workers but 35.04 per cent of those who travelled. In England the figures were 44.51 and 64.99. Whichever base you use, say which one it is.'
          ] },
        { kind: 'table', mt: true, caption: 'Cycling to work on two different bases, Census 2021 (our calculation from TS061)', head: ['Base', 'Cambridge', 'England', 'Cambridge as a multiple'], numCols: [1, 2, 3], rows: [
          ['Everyone in employment', '16.77%', '2.10%', '7.99 times'],
          ['Those not working mainly from home', '30.76%', '3.06%', '10.04 times']
        ] },
        { kind: 'table', mt: true, caption: 'What each stage takes from the cycling project', head: ['Stage', 'Question', 'Skill'], rows: [
          ['KS2', 'What fraction of Cambridge workers cycled, roughly?', 'Fractions and percentages of amounts'],
          ['KS3', 'How many percentage points higher is Cambridge?', 'Percentage points versus per cent'],
          ['GCSE', 'By what percentage is the share higher?', 'Percentage change, values above 100%'],
          ['A level', 'How uncertain is a share measured in a pandemic?', 'Sampling, bias and judgement']
        ] },
        { kind: 'source', html: 'For England and Wales together the ONS reports that "569,000 (2.0%) travelled by bicycle". Our England-only figures come from the same table and are not added to anything to recreate that total. The subtraction of home workers and every percentage on this page are Modern Age Coders calculations.' }
      ]
    },
    {
      id: 'local', tint: 'tint', eyebrow: 'Maths in Cambridge',
      h2: 'The Maths Hub, NRICH and the UKMT maths challenge',
      lede: 'Cambridge is unusually rich in public maths. Here is what a family may come across; we run none of it.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Cambridge Maths Hub', p: 'The NCETM names Cambourne Village College and Comberton Village College as the joint lead schools of the Cambridge Maths Hub, which supports maths teaching in schools rather than individual pupils.' },
          { h3: 'The Millennium Mathematics Project', p: 'Based in the University of Cambridge, the project describes itself as "a maths education and outreach initiative for ages 3 to 19 and the general public". Its programmes include the NRICH website and Plus online mathematics magazine.' },
          { h3: 'UKMT maths challenge', p: 'Many Cambridge secondary schools enter pupils for the UK Mathematics Trust challenges. Our <a class="ag-inline-link" href="/maths-challenges">maths challenges page</a> and <a class="ag-inline-link" href="/mathematical-olympiad-for-girls-preparation">Olympiad for Girls page</a> explain how we help.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'NRICH is free and full of rich problems, and we encourage learners to use it between lessons. A child who enjoys our census project will find similar thinking there.',
            'National competitions, sorted by the age they suit, are on our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">calendar page</a>.'
          ],
          right: [
            'Lessons are live online, so a learner in Chesterton, Cherry Hinton, Trumpington or Arbury joins from home. Because we sort learners by level rather than location, the rest of the class might be in Luton or Leeds.',
            'University entry is outside what we do here; the maths a learner needs is the same whichever path they choose afterwards.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.ncetm.org.uk/hubs/cambridge-maths-hub/" rel="noopener" target="_blank">NCETM, Cambridge Maths Hub</a>; <a class="ag-inline-link" href="https://maths.org/" rel="noopener" target="_blank">Millennium Mathematics Project</a>. Both read on 1 October 2026. None of these organisations is connected with Modern Age Coders: not the NCETM or its hubs, not the University of Cambridge or its outreach projects, and not the UKMT.' }
      ]
    },
    {
      id: 'adults', tint: 'plain', eyebrow: 'For adult learners',
      h2: 'Adult maths tuition in Cambridge',
      lede: 'Adults are a large part of our Cambridge enquiries: GCSE resits, statistics for a new job, or the wish to finally understand percentages.',
      body: [
        { kind: 'three', cells: [
          { h3: 'GCSE maths resit', p: 'We reteach GCSE from the topics you find hardest. A college or exam centre takes the entry; the preparation is ours.' },
          { h3: 'Percentages at work', p: 'Reports full of percentages and percentage points, read critically. See also our <a class="ag-inline-link" href="/functional-skills-maths-tuition-online">Functional Skills maths page</a>.' },
          { h3: 'Helping at home', p: 'Parents learn the methods schools use now, so homework help backs up the teacher rather than confusing the child.' }
        ] },
        { kind: 'p', mt: true, html: 'The cycling project lands well with adults, because the same numbers appear in news stories, and seeing three honest versions of one fact changes how a headline reads. Our <a class="ag-inline-link" href="/online-maths-classes-for-adults-in-uk">adult maths page</a> says more.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The road to percentages',
    h2: 'Four steps from halves to percentage change',
    lede: 'A learner can start on any step. The free lesson tells us which.',
    table: { caption: 'From fractions to percentage change, and the sign a learner is ready to go on', head: ['Typical years', 'Step', 'Ready to go on when they'], rows: [
      ['Years 2 to 4', '1. Fractions', 'Find a half, a quarter and a tenth of an amount'],
      ['Years 5 to 7', '2. Percentages', 'Switch between fractions, decimals and percentages without a calculator'],
      ['Years 8 to 10', '3. Multipliers', 'Use 1.2 for a 20 per cent rise and 0.8 for a 20 per cent fall'],
      ['Years 11 to 13', '4. Bases and change', 'Explain the difference between points and per cent, and choose a base']
    ] },
    left: { h3: 'Starting late', ps: [
      'Learners who join in Year 11 can still make real progress. We check fractions and decimals first, since most percentage errors start there.',
      'If more needs repair than the time allows, we will be honest about it after the free lesson.'
    ] },
    right: { h3: 'After the exam', ps: [
      'A natural next step is to rank all 331 districts in a few lines of Python on our <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a> course. Others prefer to go deeper into data with <a class="ag-inline-link" href="/courses/statistics-probability-maths-course">statistics and probability</a>.',
      'Those drawn to proof tend to move on to Further Maths topics.'
    ] }
  },

  catalogue: {
    eyebrow: 'All maths courses',
    h2: 'Popular maths courses for Cambridge learners',
    lede: 'UK families most often look for GCSE, A level, 11 plus and IGCSE courses, so those come first. Open a card to read the syllabus.',
    bands: [
      { num: 'I', h3: 'Most in demand', sub: 'Exam courses', courses: [
        { code: 'CBM / A1', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'All three strands, with stretch available.' },
        { code: 'CBM / A2', slug: 'gcse-mathematics-mastery', title: 'GCSE maths', blurb: 'Both tiers, all major boards.' },
        { code: 'CBM / A3', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths', blurb: 'For families sitting selective tests.' },
        { code: 'CBM / A4', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'International papers, taught in full.' }
      ] },
      { num: 'II', h3: 'Primary years', sub: 'KS1 and KS2', courses: [
        { code: 'CBM / B1', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'The whole of KS1 and KS2.' },
        { code: 'CBM / B2', slug: 'early-math-foundations', title: 'Early maths', blurb: 'Counting and shape for six and seven year olds.' },
        { code: 'CBM / B3', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Fluent arithmetic without paper.' },
        { code: 'CBM / B4', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus', blurb: 'A hands-on way into number.' }
      ] },
      { num: 'III', h3: 'Secondary and beyond', sub: 'KS3 and stretch', courses: [
        { code: 'CBM / C1', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'KS3 maths', blurb: 'Percentages, ratio and algebra for Years 7 to 9.' },
        { code: 'CBM / C2', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'For UKMT and olympiad-style problems.' },
        { code: 'CBM / C3', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Reading data with a critical eye.' },
        { code: 'CBM / C4', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Algebra rebuilt step by step.' }
      ] },
      { num: 'IV', h3: 'Adults', sub: 'Study and career', courses: [
        { code: 'CBM / D1', slug: 'college-mathematics-complete-masterclass', title: 'University maths', blurb: 'Calculus, linear algebra, proof.' },
        { code: 'CBM / D2', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data', blurb: 'Statistics for analytical work.' },
        { code: 'CBM / D3', slug: 'complete-business-finance-mathematics-mastery', title: 'Business maths', blurb: 'Percentages, interest and growth.' },
        { code: 'CBM / D4', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Speed methods for arithmetic.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lesson schedule',
    h2: 'Evenings, weekends and after school, on UK time',
    lede: 'Our teachers are in India, which sits five and a half hours ahead of Cambridge in winter and four and a half once the UK clocks go forward. We give every time in UK time.',
    slots: [
      { time: 'After school', l: 'Primary pupils and Years 7 to 9.' },
      { time: 'Evenings', l: 'GCSE, sixth form and adult learners.' },
      { time: 'Weekend mornings', l: 'All ages and levels.' }
    ],
    cells: [
      { h3: 'One teacher throughout', p: 'The same teacher each week, who remembers what went wrong last time.' },
      { h3: 'Notes home', p: 'A short update after lessons on progress and next steps.' },
      { h3: 'Classes of five to ten', p: 'Learners at the same level, so the pace fits.' },
      { h3: 'Census and real data', p: 'Real tables alongside exam papers.' },
      { h3: 'Solo lessons', p: 'For an exam soon or one stubborn topic.' },
      { h3: 'Why, then how', p: 'Every method is explained before it is practised.' }
    ]
  },

  projectsH2: 'Projects by our learners',
  projectsLede: 'Four things made by students who once started with data questions like this one. The <a class="ag-inline-link" href="/student-labs">student labs</a> show plenty more.',
  reviewsLede: 'Reviews posted on our Google profile, exactly as families and learners wrote them.',

  fees: {
    h2: 'Fees',
    lede: 'Monthly, in US dollars, at one price for everywhere outside India. No registration fee and no minimum term.',
    free: ['A full lesson at the right level', 'An honest view of the starting point', 'No card needed'],
    group: ['Five to ten learners, one level', 'A consistent teacher', 'Marked work with feedback', 'A certificate on completion'],
    one: ['A teacher for one learner', 'Planned around their needs', 'Useful before exams']
  },

  faq: {
    eyebrow: 'Cambridge maths questions',
    h2: 'Cambridge families ask us about maths tuition',
    items: [
      { q: 'What is the difference between a percentage point and a per cent?', a: 'A percentage point is the gap between two percentages, found by subtracting. A per cent change compares that gap with the starting value. Going from 2.10% to 16.77% is 14.67 percentage points, or a rise of about 699 per cent.' },
      { q: 'How much does a maths tutor in Cambridge cost with you?', a: 'The first lesson is free. After that a place in a class of five to ten is USD 100 a month and one to one lessons are USD 150 a month, with no joining fee.' },
      { q: 'Do you teach Further Maths in Cambridge?', a: 'Yes, as an extension of our A level course. Students who are secure in the core can work on Further Maths topics with the same teacher. Tell us the board when booking.' },
      { q: 'Which GCSE boards do you cover?', a: 'AQA, Edexcel and OCR at both tiers, plus IGCSE. We teach to the specification the school uses.' },
      { q: 'Can adults resit GCSE maths with you?', a: 'Certainly. Plenty of Cambridge adults retake GCSE maths with us, often for a training course or job. The work starts wherever your confidence runs out, and the exam itself is entered through a local college or exam centre.' },
      { q: 'Do you help with KS2 maths and SATs?', a: 'Yes, from the Year 4 multiplication tables check through to the Year 6 SATs papers.' },
      { q: 'Do you offer Cambridge admissions test preparation?', a: 'No. We teach school and A level maths and general problem solving. We do not prepare students for admissions tests or advise on applications.' },
      { q: 'What is the best way to get percentages right?', a: 'Think of a percentage as a multiplier. A 15 per cent increase means multiplying by 1.15, and a 15 per cent decrease by 0.85. It removes most of the confusion.' },
      { q: 'Are lessons held in person in Cambridge?', a: 'No. All lessons are live online with a teacher, which suits learners anywhere in and around the city.' },
      { q: 'Do you guarantee grades?', a: 'Grades depend on the learner and the day, so we never guarantee one. What we commit to is good teaching and plain reporting.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related',
    h2: 'More for Cambridge learners',
    lede: 'Our Further Maths and A level pages, the Cambridge coding page and Oxford maths.',
    items: [
      { href: '/further-maths-tuition-online', label: 'Further Maths tuition', p: 'Our national page for keen sixth formers.' },
      { href: '/a-level-maths-tuition-online', label: 'A level maths tuition', p: 'Pure, statistics and mechanics.' },
      { href: '/ks3-maths-tuition-online', label: 'KS3 maths tuition', p: 'Years 7 to 9, where percentages take hold.' },
      { href: '/best-coding-class-in-cambridge', label: 'Coding classes in Cambridge', p: 'Our coding page for the city.' },
      { href: '/maths-tuition-in-oxford', label: 'Maths tuition in Oxford', p: 'Second on cycling, with a probability project.' },
      { href: '/coding-classes-in-united-kingdom', label: 'The UK index', p: 'All of our UK pages.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson in Cambridge',
    lede: 'Let us know the age or year group and the topic that is causing trouble. The trial is a real lesson, after which we give you a clear, honest view of where the learner is.',
    readFirst: 'Prefer to explore first? See the <a class="ag-inline-link" href="/courses">full course list</a> and our approach to <a class="ag-inline-link" href="/how-we-teach">teaching</a>.',
    note: 'The fastest reply comes on WhatsApp. Our number starts with India\'s code because the teachers are there; there is no Cambridge office and lessons are online only.',
    formNote: 'No card needed. We reply to agree a time.'
  },

  footer: {
    cols: [
      { h4: 'Maths', links: [
        { href: '/further-maths-tuition-online', label: 'Further maths tuition' },
        { href: '/a-level-maths-tuition-online', label: 'A level maths tuition' },
        { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition' },
        { href: '/ks2-maths-tuition-online', label: 'KS2 maths tuition' }
      ] },
      { h4: 'Nearby', links: [
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/best-coding-class-in-cambridge', label: 'Coding in Cambridge' },
        { href: '/maths-tuition-in-oxford', label: 'Maths tuition in Oxford' },
        { href: '/maths-tuition-in-luton', label: 'Maths tuition in Luton' }
      ] }
    ],
    bottomRight: 'Maths at any age, live online'
  },

  personalityCss: `
.ag-root.ag-cbm .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-cbm .ag-capsule { border-left-width: 4px; }
.ag-root.ag-cbm .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-cbm .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-cbm .ag-table td:last-child { font-variant-numeric: tabular-nums; }
.ag-root.ag-cbm .ag-spec dt { letter-spacing: 0.08em; }
.ag-root.ag-cbm .ag-three h3 { letter-spacing: -0.004em; }
.ag-root.ag-cbm .ag-slots { gap: 1rem; }
`,

  mustMention: ['Cambridge Maths Hub', 'Comberton Village College', 'Millennium Mathematics Project', '11,836', '16.77 per cent', '14.67 percentage points', '30.76 per cent', '10.04 times', '554,215'],

  dossier: {
    curriculumAuthority: 'National curriculum for England (DfE); GCSE mathematics subject content (DfE, 2013), percentages and percentage change. Cambridge schools sit in the Cambridge Maths Hub area (NCETM).',
    localProject: 'Census 2021 TS061, 331 LADs: Cambridge 70,596 in work, 32,113 home, 11,836 bicycle (16.77% of all, 30.76% of the 38,483 who travelled), 13,485 car drivers; England 26,405,214, 8,321,252, 554,215 (2.10%, 3.06%). 14.67 points, 7.99 times, +699%; 10.04 times on the travellers base. Cambridge first of 331 on both bases, Oxford second. ONS furlough caveat quoted.',
    requiredMentions: ['Cambridge Maths Hub', 'Comberton Village College', 'Millennium Mathematics Project', '11,836', '16.77 per cent', '14.67 percentage points', '30.76 per cent', '10.04 times', '554,215'],
    sources: [
      { claim: 'NCETM, Cambridge Maths Hub: joint lead schools Cambourne Village College and Comberton Village College.', url: 'https://www.ncetm.org.uk/hubs/cambridge-maths-hub/' },
      { claim: 'Millennium Mathematics Project: maths education and outreach initiative for ages 3 to 19 and the general public; NRICH and Plus.', url: 'https://maths.org/' },
      { claim: 'Nomis, Census 2021 TS061 method used to travel to work, all local authority districts.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS travel to work bulletin: furlough caveat below regional level; 569,000 (2.0%) by bicycle in England and Wales.', url: 'https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/employmentandemployeetypes/bulletins/traveltoworkenglandandwales/census2021' },
      { claim: 'DfE GCSE mathematics subject content: compare quantities using percentages; percentages greater than 100%.', url: 'https://www.gov.uk/government/publications/gcse-mathematics-subject-content-and-assessment-objectives' }
    ],
    rejectedClaims: [
      'Admissions tests, interviews and applications for the University of Cambridge (including STEP support listed on maths.org): excluded by the spec.',
      'Any claim that the 2021 figures describe a normal year: the ONS furlough caveat is quoted instead.',
      'Recreating the ONS England and Wales cycling total by adding England and Wales: not done.',
      'Any statement about why Cambridge cycles more: not sourced, not printed.',
      'Any statement about Cambridge exam results or school performance: excluded by the spec.'
    ]
  }
};
