'use strict';
// Maths tuition in Cardiff (ag- maths by city, UK cluster Phase 11, worker M3).
// Read on 1 October 2026 by curl, quotes grepped from the raw text:
//  - WJEC, GCSE Mathematics and Numeracy (Double Award) specification PDF, "For teaching from September 2025 First Award
//    November 2026"; "There are two tiers of entry for this qualification"; "GCSE double award qualifications are reported on
//    an eight grade scale from A*A*- GG"; Unit 1 "Financial Mathematics and Other Applications of Numeracy", Unit 2
//    "Non-calculator"; content 4.2.20 "construct and interpret histograms with unequal class widths, including calculating
//    the median and other percentages of the distribution"; 4.1.8 "group discrete or continuous data into class intervals of
//    equal or unequal widths".
//  - Hwb (Welsh Government), Curriculum for Wales, Mathematics and Numeracy: progression "involves the development of five
//    connected and interdependent proficiencies which have no hierarchy": conceptual understanding, communication using
//    symbols, fluency, logical reasoning, strategic competence.
//  - Maths Support Programme Wales (rhgmc-mspw.cymru), What MSPW does: "a Welsh Government funded project which was launched
//    in 2010", "managed by the Mathematics Department, Swansea University and works in collaboration with the universities of
//    Aberystwyth, Bangor, Cardiff, Wrexham Glyndwr and the University of South Wales"; supports uptake of AS/A level Further
//    Mathematics.
//  - Cardiff University returned HTTP 403 to curl; not circumvented and not quoted.
// Local project (our calculation): Census 2021 TS007B (age by broad age bands), Nomis NM_2018_1, Cardiff W06000015 and Wales
// W92000004, read 1 October 2026. Cardiff total 362,308 (published). Bands and counts as published; frequency density = count
// / band width in years; per 1,000 residents = 1000 x density / published total. Cardiff 20 to 24: 37,885 people, 7,577.0 per
// year of age, 20.91 per 1,000 residents per year; 35 to 49: 67,407 (the largest count), 4,493.8 per year; 16 to 19: 5,630.0
// per year; 25 to 34: 5,630.6 per year. Wales 20 to 24: 12.08 per 1,000 per year; Wales tallest bar 50 to 64 at 13.69. The
// open 85 and over band (7,117) has no width and is not drawn as a bar. No band sums are printed.
// Spine: which age band is really the busiest in Cardiff? Family: histograms with unequal class widths, frequency density,
// open-ended classes, comparing distributions of different sizes by scaling.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'CARDIFF MATHS', label: 'Maths tuition in Cardiff', blurb: 'Maths for Cardiff learners from primary number to WJEC GCSE, A level and adult study, with a histogram project on the city\'s age bands.' },
  slug: 'maths-tuition-in-cardiff',
  code: 'mcd',
  accent: '#991E45',
  accentRationale: 'Cardiff maths: a muted dragon red, chosen by hand and kept well away from the green on our Cardiff coding page',
  pageType: 'city',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Maths tuition in Cardiff',
  title: 'Maths Tuition in Cardiff | WJEC GCSE to A Level, Online',
  description: 'Online maths tuition in Cardiff for ages 6 to 67: WJEC GCSE Mathematics and Numeracy, A level, Further Maths and adult maths, plus a census histogram project.',
  ogDescription: 'A maths tutor for Cardiff learners, live online: Curriculum for Wales, the WJEC double award GCSE, A level, Further Maths and adult refreshers.',
  twitterDescription: 'Cardiff maths, taught live online: which age band is really the busiest in the city? A histogram answers it.',
  pageName: 'Maths Tuition in Cardiff',
  webPageDescription: 'Live online maths tuition for Cardiff learners aged 6 to 67, from primary maths under the Curriculum for Wales to the WJEC GCSE Mathematics and Numeracy double award, A level, Further Maths and adult maths, with a statistics project built on Census 2021 age bands.',
  courseDescription: 'Live online maths for Cardiff learners at every stage, taught in level-matched groups of five to ten or one to one, with secondary lessons steered to the WJEC specification.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Maths tuition in Cardiff',
  navLinks: [
    { href: '#wales', label: 'In Wales' },
    { href: '#histogram', label: 'Histogram' },
    { href: '#density', label: 'Density' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Cardiff &middot; Maths for ages 6 to 67 &middot; Live online lessons, in small groups or one to one',
  h1: 'Maths tuition in Cardiff',
  lede: 'Ask which age group is the biggest in Cardiff and the census table seems to answer at once: the 35 to 49 band, with 67,407 people. Draw the bars properly and a different band towers over the rest. The 20 to 24 band holds 37,885 people, but it covers only five years of age, so it packs in 7,577 people for each year, against 4,494 for each year of the 35 to 49 band. That gap between a count and a density is exactly what WJEC asks of a GCSE student who meets a histogram with unequal class widths. This page sets out how we teach maths to Cardiff learners, from early number to A level and adult study, and uses the city\'s own census as the worked example.',
  secondaryCta: { href: '#histogram', label: 'See the Cardiff histogram' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for a learner in Cardiff.',
  heroNote: 'Maths only on this page &middot; Primary, secondary, sixth form and adult learners &middot; Independent of every Cardiff school and university',
  spec: [
    ['Who', 'Cardiff learners from 6 to 67'],
    ['Primary', 'Number sense, tables, early reasoning'],
    ['Secondary', 'WJEC GCSE Mathematics and Numeracy'],
    ['Sixth form', 'AS and A level, Further Maths'],
    ['Adults', 'Refreshers and maths for work'],
    ['Format', 'Live video, groups of 5 to 10 or private'],
    ['Teachers', 'In India, timetabled on UK time'],
    ['Local project', 'Census age bands as a histogram']
  ],
  capsuleQ: 'In short',
  capsule: 'We are a maths tutor for Cardiff learners aged 6 to 67, teaching live online: primary maths under the Curriculum for Wales, secondary maths up to the WJEC GCSE Mathematics and Numeracy double award at Foundation or Higher tier, AS and A level Maths with Further Maths, and adult refreshers. Groups hold five to ten learners at one level, and one to one lessons are available. Our Cardiff example comes from Census 2021: the 35 to 49 age band has the most people, 67,407, yet the 20 to 24 band is the densest, at 7,577 people per year of age, because it is only five years wide. A first lesson is free; afterwards a group seat is USD 100 a month and private lessons USD 150 a month.',

  picks: {
    eyebrow: 'Where a Cardiff learner usually begins',
    h2: 'Three common starting points',
    lede: 'Choose by stage. The complete list, from first counting to university maths, sits further down.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'CDF / 1', title: 'Primary maths', note: 'Number, fractions, shape and the habit of explaining an answer, which the Curriculum for Wales asks of every learner.' },
      { course: 'gcse-mathematics-mastery', code: 'CDF / 2', title: 'GCSE maths', note: 'Built on the English boards, so for Cardiff we steer it to the WJEC double award and its two tiers.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'CDF / 3', title: 'A level maths', note: 'Pure, statistics and mechanics, with a route on to Further Maths for those who want it.' }
    ]
  },

  sections: [
    {
      id: 'wales', tint: 'tint', eyebrow: 'Maths in Wales',
      h2: 'How maths is organised for a Cardiff learner',
      lede: 'Wales runs its own curriculum and its own GCSEs, so a Cardiff family meets different names from a family in Bristol or Birmingham. Adults return at whichever point suits them.',
      body: [
        { kind: 'table', caption: 'Stages a Cardiff learner passes through, and our focus at each', head: ['Stage', 'Usual ages', 'Our focus in lessons'], rows: [
          ['Early primary', '5 to 8', 'Counting, place value, adding and taking away with confidence, simple shapes.'],
          ['Later primary', '8 to 11', 'Times tables, written methods, fractions and decimals, and explaining a method out loud.'],
          ['Years 7 to 9', '11 to 14', 'Algebra, ratio, negative numbers, angles, and the first real work with data.'],
          ['WJEC GCSE', '14 to 16', 'Mathematics and Numeracy at Foundation or Higher tier, including the financial maths unit and the non-calculator paper.'],
          ['Sixth form', '16 to 18', 'AS and A level Maths, and Further Maths for learners who want proof, matrices and more mechanics or statistics.'],
          ['Adults', '18 to 67', 'Rebuilding confidence, helping children with homework, and maths for work or study.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The Curriculum for Wales',
          left: [
            'Maths in Welsh schools sits inside the Mathematics and Numeracy Area of Learning and Experience. Hwb, the Welsh Government\'s education site, says progression there "involves the development of five connected and interdependent proficiencies which have no hierarchy": conceptual understanding, communication using symbols, fluency, logical reasoning and strategic competence.',
            'That list matches how we teach. A learner who can do a calculation but cannot say why it works has fluency without understanding, and we work on both, at every age.'
          ],
          rightH3: 'The new WJEC double award',
          right: [
            'GCSE maths in Wales has changed. WJEC\'s GCSE Mathematics and Numeracy (Double Award) is taught from September 2025, with a first award in November 2026. It has two tiers of entry, and the specification says double award results are reported "on an eight grade scale from A*A*- GG".',
            'Its units include Financial Mathematics and Other Applications of Numeracy, and a non-calculator paper. Our <a class="ag-inline-link" href="/gcse-maths-and-numeracy-wales-help">WJEC GCSE maths page</a> goes into the units in detail.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://hwb.gov.wales/curriculum-for-wales/mathematics-and-numeracy/" rel="noopener" target="_blank">Hwb, Curriculum for Wales: Mathematics and Numeracy</a>; <a class="ag-inline-link" href="https://www.wjec.co.uk/media/ojhfscmj/wjec-gcse-mathematics-and-numeracy-specification.pdf" rel="noopener" target="_blank">WJEC, GCSE Mathematics and Numeracy (Double Award) specification</a>. Both read on 1 October 2026. The age ranges in the table are typical, not official.' }
      ]
    },
    {
      id: 'histogram', tint: 'plain', eyebrow: 'The Cardiff project',
      h2: 'Which age band is really the busiest in Cardiff?',
      lede: 'The census publishes Cardiff\'s population in eleven age bands of different widths. Read them as plain counts and you get one answer; draw them as a histogram and you get another.',
      body: [
        { kind: 'two',
          left: [
            'Census 2021 counted 362,308 usual residents in Cardiff. The table we used, TS007B on Nomis, splits them into broad age bands: under 5, 5 to 9, 10 to 15, 16 to 19, 20 to 24, 25 to 34, 35 to 49, 50 to 64, 65 to 74, 75 to 84, and 85 and over. The widths are not equal. Some bands span four years of age, some fifteen.',
            'Draw an ordinary bar chart of the counts and the 35 to 49 band wins easily, with 67,407 people. But that band covers fifteen birthdays. Of course it holds more people than a band covering five.'
          ],
          right: [
            'A histogram fixes this by making area, not height, stand for the count. The height becomes the frequency density: the count divided by the class width. For Cardiff, the 20 to 24 band has a density of 37,885 ÷ 5 = 7,577 people per year of age, the tallest bar by a distance. The 35 to 49 band falls to 67,407 ÷ 15 = 4,493.8.',
            'One more surprise sits in the middle. The 16 to 19 band and the 25 to 34 band have almost identical densities, 5,630.0 and 5,630.6, although one count is more than twice the other. Equal heights, very unequal areas.'
          ] },
        { kind: 'table', mt: true, caption: 'Cardiff, Census 2021 age bands: published counts and our frequency densities', head: ['Age band', 'People (published)', 'Width, years', 'Frequency density'], numCols: [1, 2, 3], rows: [
          ['Under 5', '19,069', '5', '3,813.8'],
          ['5 to 9', '21,504', '5', '4,300.8'],
          ['10 to 15', '25,422', '6', '4,237.0'],
          ['16 to 19', '22,520', '4', '5,630.0'],
          ['20 to 24', '37,885', '5', '7,577.0'],
          ['25 to 34', '56,306', '10', '5,630.6'],
          ['35 to 49', '67,407', '15', '4,493.8'],
          ['50 to 64', '59,697', '15', '3,979.8'],
          ['65 to 74', '28,874', '10', '2,887.4'],
          ['75 to 84', '16,507', '10', '1,650.7'],
          ['85 and over', '7,117', 'open', 'not drawn']
        ] },
        { kind: 'source', html: 'Data: <a class="ag-inline-link" href="https://www.nomisweb.co.uk/datasets/c2021ts007b" rel="noopener" target="_blank">ONS Census 2021, TS007B Age by broad age bands, via Nomis</a>, Cardiff, read on 1 October 2026, Open Government Licence. Counts are as published. Widths and densities are Modern Age Coders\' calculations. The ONS applies statistical disclosure control to census counts, so small areas are not exact; at the scale of a whole city the effect is small.' }
      ]
    },
    {
      id: 'density', tint: 'deep', eyebrow: 'From GCSE to A level',
      h2: 'Frequency density, the open class, and comparing Cardiff with Wales',
      lede: 'Three questions turn the table above into a full lesson: what to do with the open band, how to compare two places of very different size, and what a histogram can hide.',
      body: [
        { kind: 'two',
          leftH3: 'The band with no end',
          left: [
            'The 85 and over band has no upper limit, so it has no width, and without a width there is no density. A textbook usually invents an end, such as 100. Try it: with an end at 100 the density is 7,117 ÷ 15 = 474.5; with an end at 95 it is 711.7. The bar\'s height depends on a guess.',
            'This is why we do not draw that bar on the page. Saying so is part of the answer. WJEC asks students to "recognise that graphs may be misleading", and an invented class boundary is one of the quietest ways a graph misleads.'
          ],
          rightH3: 'Cardiff against Wales',
          right: [
            'Wales has about eight and a half times as many people as Cardiff, so raw densities cannot be compared. Divide each density by the area\'s published total and multiply by 1,000, and both become people per 1,000 residents per year of age.',
            'On that scale the Cardiff 20 to 24 bar stands at 20.91, while the same band for Wales stands at 12.08. The tallest bar for Wales as a whole is 50 to 64, at 13.69. A student who sees both histograms side by side understands what makes a university city\'s age profile different, without a single sentence of explanation.'
          ] },
        { kind: 'table', mt: true, caption: 'People per 1,000 residents per year of age, our calculation from the published bands', head: ['Age band', 'Cardiff', 'Wales'], numCols: [1, 2], rows: [
          ['Under 5', '10.53', '9.98'],
          ['16 to 19', '15.54', '11.38'],
          ['20 to 24', '20.91', '12.08'],
          ['25 to 34', '15.54', '12.31'],
          ['50 to 64', '10.98', '13.69'],
          ['75 to 84', '4.56', '7.10']
        ] },
        { kind: 'p', mt: true, html: 'The median is the next step. WJEC item 4.2.20 asks students to "construct and interpret histograms with unequal class widths, including calculating the median and other percentages of the distribution". Half of 362,308 is 181,154. Counting through the bands from the youngest, the halfway person falls in the 25 to 34 band, and a straight-line estimate inside that band places the median age at about 34.7, right at the top of it. We set the working as an exercise, because the reasoning matters more than the number.' },
        { kind: 'source', html: 'WJEC wording from the <a class="ag-inline-link" href="https://www.wjec.co.uk/media/ojhfscmj/wjec-gcse-mathematics-and-numeracy-specification.pdf" rel="noopener" target="_blank">GCSE Mathematics and Numeracy specification</a>. Wales figures: Census 2021 TS007B for Wales (W92000004) on Nomis. The rates per 1,000 and the median estimate are ours.' }
      ]
    },
    {
      id: 'around', tint: 'tint', eyebrow: 'Maths beyond lessons',
      h2: 'Further Maths support in Wales, and how a keen Cardiff learner goes further',
      lede: 'Families often ask what exists outside school. We list what we found on public pages; we are not part of any of it.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Maths Support Programme Wales', p: 'Its own page calls it "a Welsh Government funded project which was launched in 2010", managed by the Mathematics Department at Swansea University and working with Cardiff and other Welsh universities.' },
          { h3: 'Further Maths in Wales', p: 'The programme says students who plan to study AS or A level Maths "should have the opportunity to consider studying AS/A level Further Mathematics". Schools and colleges arrange this, often with online tuition.' },
          { h3: 'Challenges and olympiads', p: 'The UK Mathematics Trust runs the Junior, Intermediate and Senior Mathematical Challenges, which many Welsh schools enter. Our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a> lists them by age.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'For a sixth former, Further Maths is where the subject opens up: complex numbers, matrices, proof by induction and more serious mechanics or statistics. Our <a class="ag-inline-link" href="/further-maths-tuition-online">Further Maths page</a> explains how we teach it alongside A level Maths.',
            'For a younger learner who enjoys puzzles, the histogram project above makes a good first taste of the kind of reasoning a challenge paper rewards: there is a trap in the obvious answer, and the point is to spot it.'
          ],
          right: [
            'A learner in Roath, Canton or Llanishen logs in from home for each live lesson. Classmates are grouped by level, not by postcode, so one might be in Swansea and another in Bristol.',
            'We teach in English. Learners in Welsh-medium schools are welcome, and we work from the English versions of WJEC material.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.rhgmc-mspw.cymru/about-us/what-fmsp-wales-does/" rel="noopener" target="_blank">Maths Support Programme Wales, what MSPW does</a>; <a class="ag-inline-link" href="https://ukmt.org.uk/" rel="noopener" target="_blank">UK Mathematics Trust</a>. Both read on 1 October 2026. Cardiff University\'s pages refused our automated request, so we quote nothing from them. We have no link with the MSPW, the UKMT, WJEC or any Cardiff school or university.' }
      ]
    },
    {
      id: 'adults', tint: 'plain', eyebrow: 'Grown-up learners',
      h2: 'Maths tuition for adults in Cardiff',
      lede: 'Many of our learners left school years ago. Some want a qualification, some want to help a child, and some simply want to stop feeling anxious about numbers.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Back to basics', p: 'Fractions, percentages and algebra from the beginning, with time to ask why. Adults often find the reasons land now in a way they never did in Year 9.' },
          { h3: 'Homework without arguments', p: 'Parents learn the methods children use now, so evenings at the table stop turning into a clash between two ways of doing long division.' },
          { h3: 'Numbers at work', p: 'Spreadsheets, percentages, rates and charts for reports. Our <a class="ag-inline-link" href="/online-maths-classes-for-adults-in-uk">adult maths page</a> and <a class="ag-inline-link" href="/functional-skills-maths-tuition-online">Functional Skills page</a> say more.' }
        ] },
        { kind: 'p', mt: true, html: 'The census histogram works well with adults. Most have read a misleading chart at some point, in a newspaper or a work report, and the moment they see why the tallest bar was not the biggest group, they start checking the widths on every chart they meet.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The order we teach in',
    h2: 'From counting to reading a chart critically, in four steps',
    lede: 'Each step depends on the one before. Learners slot in wherever they are; the trial lesson tells us which rung.',
    table: { caption: 'Four steps, with a sign that each one is secure', head: ['Usually', 'Step', 'How we know it is secure'], rows: [
      ['Primary', '1. Number sense', 'Explains why 6 × 7 is 42 using a fact they already know'],
      ['Years 6 to 8', '2. Proportion', 'Works with fractions, percentages and ratio without a calculator'],
      ['Years 8 to 10', '3. Algebra and data', 'Forms an equation from words and builds a frequency table'],
      ['Years 10 to 13', '4. Interpretation', 'Spots a misleading graph and says, in writing, what is wrong with it']
    ] },
    left: { h3: 'Joining in Year 11', ps: [
      'It is not too late, but the order matters. We secure number and proportion first, because a learner who is shaky on fractions loses marks on every paper, not just one.',
      'If the time left is shorter than the gap, we say so plainly at the free lesson.'
    ] },
    right: { h3: 'After GCSE', ps: [
      'Plenty of learners carry on to <a class="ag-inline-link" href="/courses/statistics-probability-maths-course">statistics and probability</a> or <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a>, where the census table becomes a short program that draws its own histogram.',
      'Others move on to competition problems, for the pleasure of the hard question.'
    ] }
  },

  catalogue: {
    eyebrow: 'Every course',
    h2: 'Maths courses for Cardiff learners',
    lede: 'Grouped by stage; each card leads to the full syllabus.',
    bands: [
      { num: 'I', h3: 'Primary', sub: 'Ages 6 to 11', courses: [
        { code: 'MCD / A1', slug: 'early-math-foundations', title: 'First steps in number', blurb: 'Counting, comparing and shape for the youngest.' },
        { code: 'MCD / A2', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'Every primary topic, with reasons as well as rules.' },
        { code: 'MCD / A3', slug: 'mental-maths-mastery-kids', title: 'Mental arithmetic', blurb: 'Quick, accurate sums done in the head.' },
        { code: 'MCD / A4', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus maths', blurb: 'Bead-frame arithmetic that becomes a mental picture.' }
      ] },
      { num: 'II', h3: 'Secondary', sub: 'Years 7 to 11', courses: [
        { code: 'MCD / B1', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Years 7 to 9 maths', blurb: 'Algebra, ratio, geometry and early statistics.' },
        { code: 'MCD / B2', slug: 'algebra-foundations-masterclass', title: 'Algebra rebuilt', blurb: 'For a learner whose algebra needs firm ground.' },
        { code: 'MCD / B3', slug: 'gcse-mathematics-mastery', title: 'GCSE maths', blurb: 'Foundation or Higher tier, steered to WJEC for Cardiff.' },
        { code: 'MCD / B4', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'Cambridge or Edexcel International entries.' }
      ] },
      { num: 'III', h3: 'Sixth form and university', sub: 'Ages 16 and over', courses: [
        { code: 'MCD / C1', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'Pure, mechanics and statistics.' },
        { code: 'MCD / C2', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Distributions, sampling and testing a claim.' },
        { code: 'MCD / C3', slug: 'college-mathematics-complete-masterclass', title: 'University maths', blurb: 'Calculus and linear algebra for first-year study.' },
        { code: 'MCD / C4', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Unfamiliar problems with no recipe.' }
      ] },
      { num: 'IV', h3: 'Applied and adult', sub: 'For work and curiosity', courses: [
        { code: 'MCD / D1', slug: 'complete-business-finance-mathematics-mastery', title: 'Money and business maths', blurb: 'Interest, loans and investment, step by step.' },
        { code: 'MCD / D2', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data work', blurb: 'The statistics and algebra behind analysis.' },
        { code: 'MCD / D3', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Python as a way to explore number and data.' },
        { code: 'MCD / D4', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Calculation shortcuts once the basics are firm.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'When lessons run',
    h2: 'Lesson slots that fit a Cardiff week',
    lede: 'Our teachers work from India, which keeps the same clock all year. In winter India is five and a half hours ahead of Cardiff; during British Summer Time the gap is four and a half. Every slot is agreed and written in UK time.',
    slots: [
      { time: 'Weekday, after school', l: 'Primary and secondary learners.' },
      { time: 'Weekday evening', l: 'Sixth formers and adults.' },
      { time: 'Saturday or Sunday morning', l: 'For anyone who learns better fresh.' }
    ],
    cells: [
      { h3: 'One regular teacher', p: 'The person who noticed a mistake last week checks for it again this week.' },
      { h3: 'Notes after lessons', p: 'A short message home on what went well and what still needs work.' },
      { h3: 'Groups of five to ten', p: 'All at one level, so an explanation fits everyone in the room.' },
      { h3: 'Real data', p: 'Census tables, weather records and maps sit next to textbook exercises.' },
      { h3: 'Private lessons', p: 'For one stubborn topic, an exam close by, or a learner who prefers it.' },
      { h3: 'Reasons first', p: 'We ask why a method works before we drill it.' }
    ]
  },

  projectsH2: 'What our students go on to make',
  projectsLede: 'Learners who began with tables and graphs went on to build the four projects below. The <a class="ag-inline-link" href="/student-labs">student labs</a> hold many more.',
  reviewsLede: 'Copied unchanged from reviews that families and learners posted about us on Google.',

  fees: {
    h2: 'Fees',
    lede: 'Charged monthly in US dollars at a single rate for every country outside India. There is no joining fee and nothing to sign in advance.',
    free: ['A proper lesson at the right level', 'An honest view of where things stand', 'No card details needed'],
    group: ['Five to ten learners at one level', 'The same teacher each week', 'Work marked and discussed', 'A certificate at the end'],
    one: ['A teacher for a single learner', 'Aimed at the exact weak spot', 'Handy in the run-up to exams']
  },

  faq: {
    eyebrow: 'Cardiff maths questions',
    h2: 'Questions Cardiff families and adult learners ask us',
    items: [
      { q: 'What is a histogram with unequal class widths?', a: 'It is a chart where each bar\'s area, not its height, shows how many values fall in a class. The height is the frequency density, the count divided by the class width, so a wide class with many values can still have a short bar.' },
      { q: 'How much does a maths tutor cost in Cardiff?', a: 'With us the first lesson is free. After that a place in a small group is USD 100 a month and one to one lessons are USD 150 a month, with no joining fee.' },
      { q: 'Do you teach the WJEC GCSE Mathematics and Numeracy double award?', a: 'Yes. Our GCSE course is written for the English boards, and for Cardiff learners we steer the lessons to the WJEC specification, at Foundation or Higher tier, including the financial maths and non-calculator units.' },
      { q: 'Which age is best for a child to start maths lessons?', a: 'Any age can work. Our youngest are 6, still building number sense, and our oldest are 67. The moment that matters most is the first sign of confusion, before it grows.' },
      { q: 'Is learning maths online as effective as a tutor at the kitchen table?', a: 'For most learners, yes. The teacher watches the working appear on a shared screen and reacts to each slip as it happens. Nothing is pre-recorded, and a group keeps one teacher.' },
      { q: 'Can you help with A level Maths and Further Maths?', a: 'Yes. We teach pure maths, statistics and mechanics at A level, and Further Maths for learners who want more proof and more advanced topics.' },
      { q: 'Do you teach adults in Cardiff?', a: 'Yes, from complete beginners to adults returning to GCSE-level maths or preparing for maths at work. Adults join adult groups or have private lessons.' },
      { q: 'Do you teach in Welsh?', a: 'No, our lessons are in English. Learners from Welsh-medium schools are welcome, and we work from the English versions of WJEC material.' },
      { q: 'Do you promise a particular GCSE grade?', a: 'No. Grades depend on the learner, the paper and the day. What we promise is careful teaching and a frank monthly picture of progress.' },
      { q: 'Are you linked to WJEC, Cardiff University or the MSPW?', a: 'No. We describe their public material so that families know about it. We have no connection with WJEC, the Maths Support Programme Wales, any university or any school.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related',
    h2: 'More for Cardiff learners',
    lede: 'Our pages on maths in Wales, maths by stage, and coding in the city.',
    items: [
      { href: '/gcse-maths-and-numeracy-wales-help', label: 'WJEC GCSE maths help', p: 'The double award GCSE, unit by unit.' },
      { href: '/further-maths-tuition-online', label: 'Further Maths tuition', p: 'Complex numbers, matrices and proof at sixth form.' },
      { href: '/a-level-maths-tuition-online', label: 'A level maths tuition', p: 'Pure, statistics and mechanics.' },
      { href: '/best-coding-class-in-cardiff', label: 'Coding classes in Cardiff', p: 'Our page on coding for Cardiff learners.' },
      { href: '/coding-and-ai-classes-in-wales', label: 'Wales', p: 'Our page for learners across Wales.' },
      { href: '/coding-classes-in-united-kingdom', label: 'All UK pages', p: 'Every nation, city and town we cover, plus the maths list.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson',
    lede: 'Tell us the learner\'s age or school year and which topic causes the most trouble. The trial is a real lesson, and afterwards you hear honestly where things stand.',
    readFirst: 'Want to look around first? Our <a class="ag-inline-link" href="/courses">courses</a> and our page on <a class="ag-inline-link" href="/how-we-teach">how we teach</a> are good places to begin.',
    note: 'Messages on WhatsApp get answered fastest. Expect an Indian country code: the team sits in India, there is no office in Wales, and every lesson is online.',
    formNote: 'No card needed. We reply to agree a time that works for you.'
  },

  footer: {
    cols: [
      { h4: 'Maths', links: [
        { href: '/gcse-maths-and-numeracy-wales-help', label: 'WJEC GCSE maths' },
        { href: '/a-level-maths-tuition-online', label: 'A level maths tuition' },
        { href: '/further-maths-tuition-online', label: 'Further maths tuition' },
        { href: '/online-maths-classes-for-adults-in-uk', label: 'Maths for adults' }
      ] },
      { h4: 'In the UK', links: [
        { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
        { href: '/best-coding-class-in-cardiff', label: 'Coding in Cardiff' },
        { href: '/maths-tuition-in-belfast', label: 'Maths tuition in Belfast' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] }
    ],
    bottomRight: 'Maths for every age, taught live'
  },

  personalityCss: `
.ag-root.ag-mcd .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-mcd .ag-capsule { border-left-width: 6px; }
.ag-root.ag-mcd .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-mcd .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-mcd .ag-table td:last-child { font-weight: 600; }
.ag-root.ag-mcd .ag-spec dt { letter-spacing: 0.1em; }
.ag-root.ag-mcd .ag-three h3 { letter-spacing: -0.004em; }
.ag-root.ag-mcd .ag-slots { gap: 0.9rem; }
`,

  mustMention: ['TS007B', '7,577 people per year of age', '4,493.8', '5,630.6', 'Mathematics and Numeracy (Double Award)', 'A*A*- GG', 'Maths Support Programme Wales', 'five connected and interdependent proficiencies', '20.91'],

  dossier: {
    curriculumAuthority: 'Curriculum for Wales, Mathematics and Numeracy Area of Learning and Experience (Hwb, Welsh Government); WJEC GCSE Mathematics and Numeracy (Double Award), teaching from September 2025, first award November 2026.',
    localProject: 'Census 2021 TS007B broad age bands for Cardiff (W06000015, total 362,308) and Wales (W92000004) via Nomis, 1 October 2026: frequency density per year of age by band; Cardiff 20 to 24 = 7,577.0 (20.91 per 1,000 residents per year), 35 to 49 = 4,493.8 (largest count 67,407), 16 to 19 = 5,630.0, 25 to 34 = 5,630.6; Wales tallest band 50 to 64 at 13.69 per 1,000; open 85 and over band not drawn.',
    requiredMentions: ['TS007B', '7,577 people per year of age', '4,493.8', '5,630.6', 'Mathematics and Numeracy (Double Award)', 'A*A*- GG', 'Maths Support Programme Wales', 'five connected and interdependent proficiencies', '20.91'],
    sources: [
      { claim: 'WJEC GCSE Mathematics and Numeracy (Double Award) specification: teaching from September 2025, first award November 2026, two tiers, eight grade scale A*A* to GG, item 4.2.20 histograms with unequal class widths.', url: 'https://www.wjec.co.uk/media/ojhfscmj/wjec-gcse-mathematics-and-numeracy-specification.pdf' },
      { claim: 'Hwb, Curriculum for Wales, Mathematics and Numeracy: five connected and interdependent proficiencies.', url: 'https://hwb.gov.wales/curriculum-for-wales/mathematics-and-numeracy/' },
      { claim: 'Maths Support Programme Wales: Welsh Government funded, launched 2010, managed by Swansea University Mathematics Department with Cardiff and other universities; AS/A level Further Mathematics uptake.', url: 'https://www.rhgmc-mspw.cymru/about-us/what-fmsp-wales-does/' },
      { claim: 'ONS Census 2021 TS007B Age by broad age bands, Cardiff and Wales, via Nomis (NM_2018_1).', url: 'https://www.nomisweb.co.uk/datasets/c2021ts007b' },
      { claim: 'UK Mathematics Trust home page: Junior, Intermediate and Senior Mathematical Challenges.', url: 'https://ukmt.org.uk/' }
    ],
    rejectedClaims: [
      'Cardiff University School of Mathematics outreach details: the site returned HTTP 403 to curl; not circumvented, nothing quoted.',
      'A sum of the age bands as a Cardiff total: the published total 362,308 is printed instead.',
      'A density for the open 85 and over band: depends on an invented end age, so not drawn.',
      'Any Cardiff exam results or school performance: excluded by the spec.',
      'Claims about Welsh-medium teaching by us: we teach in English only, and say so.'
    ]
  }
};
