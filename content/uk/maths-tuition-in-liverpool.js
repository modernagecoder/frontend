'use strict';
// Maths tuition in Liverpool (ag- maths by city, UK cluster Phase 11, worker M3).
// Read on 1 October 2026 by curl, quotes grepped from the raw text:
//  - NCETM, North West Three Maths Hub: "The Lead School for the hub is St Mary and St Thomas Primary School, St Helens.";
//    council areas: Knowsley, Liverpool, Sefton, St Helens, Wigan.
//  - University of Liverpool, Department of Mathematical Sciences, Outreach: "The University of Liverpool Maths Outreach Team
//    is a group of staff and students committed to providing interactive and enriching mathematics to school pupils from
//    Year 1 up to Year 13."; 70 to 80 days a year in schools, "reaching between 8,000 and 10,000 pupils in each academic
//    year"; "The roadshow offers a choice of over 300 Maths activities to entertain and educate pupils." (FunMaths Roadshow).
//    Address line "Mathematical Sciences Building". Staff names not printed.
//  - DfE, GCE AS and A level subject content for mathematics: E3 "Understand and use the sine, cosine and tangent functions;
//    their graphs, symmetries and periodicity"; OT3.4 "Understand that a mathematical model can be refined by considering its
//    outputs and simplifying assumptions; evaluate whether the model is appropriate".
// Local project (our calculation): Environment Agency flood-monitoring API, station E70124 "Liverpool" (SJ 32480 95252),
// measure E70124-level-tidal_level-Mean-15_min-m, readings 2 September 2026 00:00 to 30 September 2026 20:45 UTC, 2,766
// readings, 4 irregular gaps. Heights in metres on the gauge's own scale (datum not restated here; values compared only with
// each other). High and low waters = local extremes within +/- 3 hours: 55 each. 54 intervals between successive high waters:
// mean 745.6 min (12 h 25.6 min), shortest 720, longest 795. Largest range 8.832 m (high water 13 Sep 00:00 UTC 9.784, low
// 07:00 0.952); smallest 2.513 m (high 20 Sep 04:45 UTC 6.682, low 4.169). Rising tides (54): mean rise 5.63 h, fall 6.79 h.
// Share of each rise in each sixth of its duration, in twelfths: 0.77, 2.32, 3.27, 3.02, 1.94, 0.68 (rule of twelfths 1, 2,
// 3, 3, 2, 1; cosine 0.80, 2.20, 3.00, 3.00, 2.20, 0.80); after three sixths 53.0% risen. Cosine model from 13 Sep 00:00 HW,
// a = 4.416, d = 5.368, period 12.426 h, over the next 48 readings: mean absolute error 0.348 m, largest 0.948 m. Same
// amplitude used at the 20 Sep neap high water: misses by up to 6.44 m. Predicting each next high water as previous + 12 h
// 25 min: 41 of 54 within 15 minutes, mean absolute error 12.8 min, worst 50 min.
// Spine: can one cosine curve predict the tide at Liverpool? Family: trigonometric functions as models (amplitude, period,
// vertical shift), time arithmetic, the rule of twelfths as a fraction model, refining a model from its errors.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'LIVERPOOL MATHS', label: 'Maths tuition in Liverpool', blurb: 'KS2 to A level and adult maths for Liverpool, with a trigonometry project that tries to predict the Mersey tide with one cosine curve.' },
  slug: 'maths-tuition-in-liverpool',
  code: 'mtl',
  accent: '#24337E',
  accentRationale: 'Liverpool maths: a muted deep-water blue, chosen by hand and kept apart from the teal of our Liverpool coding page',
  pageType: 'city',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Maths tuition in Liverpool',
  title: 'Maths Tuition in Liverpool | GCSE, A Level and Adults, Online',
  description: 'Online maths tuition in Liverpool for ages 6 to 67: KS2, KS3, GCSE, A level, Further Maths and adult maths, with a trigonometry project on Mersey tide data.',
  ogDescription: 'A Liverpool maths tutor, live online: KS2 maths, KS3, GCSE on any board, A level and Further Maths, and maths for adults, taught in small groups or privately.',
  twitterDescription: 'Liverpool maths, taught live online: can a single cosine curve forecast the Mersey tide? A month of gauge readings puts it to the test.',
  pageName: 'Maths Tuition in Liverpool',
  webPageDescription: 'Live online maths tuition for Liverpool learners aged 6 to 67, from primary maths and Key Stage 3 to GCSE, A level, Further Maths and adult study, with a trigonometric modelling project built on Environment Agency tide readings.',
  courseDescription: 'Live online maths lessons for Liverpool learners at every stage, in level-matched groups of five to ten or one to one, following the national curriculum and the learner\'s GCSE or A level board.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Maths tuition in Liverpool',
  navLinks: [
    { href: '#ages', label: 'Ages' },
    { href: '#tide', label: 'The tide' },
    { href: '#cosine', label: 'Cosine model' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Liverpool &middot; Maths at any age from 6 to 67 &middot; Taught live online, in groups or one to one',
  h1: 'Maths tuition in Liverpool',
  lede: 'The water at Liverpool rises and falls twice a day, and in September 2026 the Environment Agency\'s gauge recorded it every fifteen minutes. Across 54 gaps between one high water and the next, the average was 12 hours 25.6 minutes. That number, and the shape of the rise between, is A level trigonometry wearing a coat: a cosine curve with an amplitude, a period and a midline. We fitted one. On a big spring tide it stayed within a metre of the truth all cycle. A week later, on a small neap tide, the same curve was wrong by more than six metres. This page explains how we teach maths to Liverpool learners from primary school to adulthood, and uses the tide to show what a model can and cannot do.',
  secondaryCta: { href: '#tide', label: 'See the tide readings' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for a learner in Liverpool.',
  heroNote: 'Maths only on this page &middot; Primary, secondary, sixth form and adults &middot; Unconnected to any Liverpool school or university',
  spec: [
    ['Who', 'Liverpool learners from 6 to 67'],
    ['Primary', 'KS2 maths, times tables, Year 6 papers'],
    ['Secondary', 'KS3 and GCSE, Foundation or Higher'],
    ['Sixth form', 'A level Maths and Further Maths'],
    ['Adults', 'Refreshers, resits, everyday maths'],
    ['Format', 'Live video, groups of 5 to 10 or private'],
    ['Teachers', 'Teaching from India on UK time'],
    ['Local project', 'Mersey tide readings and a cosine model']
  ],
  capsuleQ: 'In short',
  capsule: 'Liverpool learners aged 6 to 67 can take live online maths with us, at every level: KS2 maths and the Year 6 papers, KS3, GCSE at Foundation or Higher tier on AQA, Edexcel or OCR, A level Maths with Further Maths, and adult maths from refreshers to GCSE resits. Classes run with five to ten learners matched by level, or privately for one learner. Our Liverpool example is the tide: from 2,766 Environment Agency readings in September 2026, the average time from one high water to the next was 12 hours 25.6 minutes, and a single cosine curve tracked a spring tide to within 0.948 metres but missed a neap tide by up to 6.44 metres. Lesson one is on us. From then on, a group seat runs to USD 100 monthly and individual tuition to USD 150 monthly.',

  picks: {
    eyebrow: 'A good first course for most Liverpool learners',
    h2: 'Three places to begin',
    lede: 'Choose by stage. The longer list, from early number to university maths, is below.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'LPL / 1', title: 'KS2 maths', note: 'Place value, fractions and times, including the clock arithmetic a tide table needs, taught until it is automatic.' },
      { course: 'gcse-mathematics-mastery', code: 'LPL / 2', title: 'GCSE maths', note: 'Whichever of the three English boards the school uses, at either tier, with trig graphs tied to real measurements.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'LPL / 3', title: 'A level Maths', note: 'Trigonometric functions, calculus and statistics, finally applied to something that repeats, like the tide.' }
    ]
  },

  sections: [
    {
      id: 'ages', tint: 'tint', eyebrow: 'Every age',
      h2: 'Maths for every Liverpool learner, from KS2 to adult study',
      lede: 'Liverpool schools follow the national curriculum for England. Here is how the stages run, and what our lessons emphasise at each one.',
      body: [
        { kind: 'table', caption: 'A Liverpool learner\'s path through maths, and our emphasis at each stage', head: ['Stage', 'Usual ages', 'Our emphasis'], rows: [
          ['Key Stage 1', '5 to 7', 'Counting, number bonds to 20, money and o\'clock and half past times.'],
          ['Key Stage 2', '7 to 11', 'Times tables, the four written methods, fractions, and working out durations across midnight.'],
          ['Key Stage 3', '11 to 14', 'Algebra, ratio, graphs of real situations, and the first trigonometry with right-angled triangles.'],
          ['GCSE', '14 to 16', 'Foundation or Higher on any of the three English boards, including trigonometric graphs at Higher tier.'],
          ['A level', '16 to 18', 'Pure, statistics and mechanics; Further Maths for learners who want complex numbers, matrices and more proof.'],
          ['Adults', '18 to 67', 'Refreshing old skills, a GCSE resit, maths for a course or a job, or helping a child.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Primary: time is harder than it looks',
          left: [
            'Working out how long it is from 9:45 in the evening to 10:10 the next morning trips up plenty of adults, let alone ten year olds. It needs place value in base 60 and base 24 at once. We teach it with number lines and with real timetables, and the tide gives a natural one: add 12 hours 25 minutes and see where you land.',
            'By Year 6, learners should be able to solve a problem in several steps and explain each one. That is the habit we build from the start.'
          ],
          rightH3: 'Secondary and sixth form',
          right: [
            'From Year 7 we treat graphs as pictures of real things changing: water rising, money growing, a car slowing. At GCSE we teach to the school\'s board and tier, and Higher-tier students meet the graph of a cosine. At A level the DfE content asks students to "Understand and use the sine, cosine and tangent functions; their graphs, symmetries and periodicity".',
            'Our national pages explain each stage further: <a class="ag-inline-link" href="/ks2-maths-tuition-online">KS2</a>, <a class="ag-inline-link" href="/ks3-maths-tuition-online">KS3</a>, <a class="ag-inline-link" href="/gcse-maths-tuition-online">GCSE</a>, <a class="ag-inline-link" href="/a-level-maths-tuition-online">A level</a> and <a class="ag-inline-link" href="/further-maths-tuition-online">Further Maths</a>.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/gce-as-and-a-level-mathematics" rel="noopener" target="_blank">DfE, GCE AS and A level subject content for mathematics</a>, item E3, read on 1 October 2026. The ages are typical for each stage.' }
      ]
    },
    {
      id: 'tide', tint: 'plain', eyebrow: 'The Liverpool project',
      h2: 'A month of the Mersey tide, fifteen minutes at a time',
      lede: 'The Environment Agency publishes live readings from a tide gauge it labels Liverpool. We took every reading for September 2026 and asked how regular the tide really is.',
      body: [
        { kind: 'two',
          left: [
            'From midnight on 2 September to 20:45 on 30 September, in UTC, the gauge gave 2,766 readings, almost all exactly fifteen minutes apart. Each is a height in metres on the gauge\'s own scale, so we only ever compare readings with each other, never with a height quoted elsewhere.',
            'We called a reading a high water if nothing within three hours either side was higher, and a low water the same way round. That found 55 of each. The biggest range from a high water to the next low was 8.832 metres, around the spring tide of 13 September. The smallest was 2.513 metres, on 20 September, a week later.'
          ],
          right: [
            'The time from one high water to the next averaged 745.6 minutes, which is 12 hours 25.6 minutes. The shortest gap we measured was 12 hours exactly and the longest 13 hours 15 minutes. Readings come every fifteen minutes, so every time we quote can be up to about seven minutes out, and we say so to students.',
            'That 12 hours 25 minutes is why the tide is roughly fifty minutes later each day: two tides take about 24 hours 50 minutes. A primary learner can check it with nothing more than addition, and the data agree.'
          ] },
        { kind: 'table', mt: true, caption: 'Tide figures from the Liverpool gauge, 2 to 30 September 2026, our calculation', head: ['Measure', 'Value', 'Stage that uses it'], rows: [
          ['Readings used', '2,766', 'Any: counting and checking a data set'],
          ['High waters found', '55', 'KS3: defining a maximum carefully'],
          ['Average high-to-high gap', '12 h 25.6 min', 'KS2: time arithmetic'],
          ['Largest range', '8.832 m', 'KS3: difference and scale'],
          ['Smallest range', '2.513 m', 'GCSE: ratio of spring to neap'],
          ['Average time rising', '5 h 38 min', 'GCSE: why the curve is not symmetrical'],
          ['Average time falling', '6 h 48 min', 'A level: refining a model']
        ] },
        { kind: 'p', mt: true, html: 'The last two rows are a surprise for most students. A perfect wave would rise and fall in equal times. At this gauge, in this month, the water came up in about 5 hours 38 minutes on average and took about 6 hours 48 minutes to go down. The model we try next cannot see that difference, which is one reason it goes wrong.' },
        { kind: 'source', html: 'Data: <a class="ag-inline-link" href="https://environment.data.gov.uk/flood-monitoring/id/stations/E70124" rel="noopener" target="_blank">Environment Agency real-time flood-monitoring API, station E70124 (Liverpool)</a>, 15-minute tidal level readings, retrieved 1 October 2026, Open Government Licence. These are recent readings, not a checked archive. All derived figures are Modern Age Coders\' calculations, and this page is not a tide table: never use it for safety on or near the water.' }
      ]
    },
    {
      id: 'cosine', tint: 'deep', eyebrow: 'From the rule of twelfths to A level trigonometry',
      h2: 'Can one cosine curve predict the tide?',
      lede: 'Sailors have long used a rough rule for how the tide rises hour by hour. A level students can do better with a cosine. Both are models, and both can be tested against the readings.',
      body: [
        { kind: 'two',
          leftH3: 'The rule of twelfths, tested',
          left: [
            'The traditional rule says that over the six parts of a rising tide the water climbs 1, 2, 3, 3, 2 and 1 twelfths of its range. It is a lovely piece of fraction work for KS3: the parts must add to twelve twelfths, and the middle of the rise is the fastest.',
            'We split each of the 54 rising tides into six equal parts of its own length and averaged. The water rose 0.77, 2.32, 3.27, 3.02, 1.94 and 0.68 twelfths. So the rule is close, but the real tide starts more slowly, rushes harder in the third part, and by halfway has already done 53.0% of its rising, not 50%.'
          ],
          rightH3: 'A cosine with three numbers',
          right: [
            'An A level model of height h after t hours is h = d + a cos(2πt ÷ T). For the spring tide that began at high water on 13 September, the amplitude a is half the range, 4.416 metres; the midline d is 5.368 metres; and T is the measured period of 12.426 hours.',
            'Over the next 48 readings the curve was off by 0.348 metres on average and never by more than 0.948 metres. For three numbers and one function, that is good. Then we kept the same amplitude and started it at the neap high water of 20 September. It missed by up to 6.44 metres, because a neap tide has a far smaller range.'
          ] },
        { kind: 'table', mt: true, caption: 'Share of each rising tide in each sixth of its duration, in twelfths of the range', head: ['Sixth', 'Rule of twelfths', 'Pure cosine', 'Liverpool, Sept 2026'], numCols: [1, 2, 3], rows: [
          ['1st', '1', '0.80', '0.77'],
          ['2nd', '2', '2.20', '2.32'],
          ['3rd', '3', '3.00', '3.27'],
          ['4th', '3', '3.00', '3.02'],
          ['5th', '2', '2.20', '1.94'],
          ['6th', '1', '0.80', '0.68']
        ] },
        { kind: 'p', mt: true, html: 'The DfE content asks A level students to "Understand that a mathematical model can be refined by considering its outputs and simplifying assumptions; evaluate whether the model is appropriate". Here the outputs say exactly what to refine: let the amplitude change over a fortnight, and let the rise be quicker than the fall. Students who make those changes have done real modelling, not a textbook exercise.' },
        { kind: 'p', mt: true, html: 'Timing works in a similar way. Predicting each high water as the previous one plus 12 hours 25 minutes, 41 of the 54 predictions landed within fifteen minutes of the measured time. The average miss was 12.8 minutes and the worst was 50 minutes, which shows that even the timing drifts more than a single number suggests.' },
        { kind: 'source', html: 'Wording: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/gce-as-and-a-level-mathematics" rel="noopener" target="_blank">DfE, GCE AS and A level subject content for mathematics</a>, item OT3.4. The rule of twelfths is a traditional approximation, not an official standard. All fitted values and errors are our calculations from the gauge readings.' }
      ]
    },
    {
      id: 'local', tint: 'tint', eyebrow: 'Beyond our lessons',
      h2: 'The Maths Hub, the university outreach team and maths challenges',
      lede: 'There is plenty of maths on offer in Liverpool that has nothing to do with us. These are the parts we confirmed on public pages.',
      body: [
        { kind: 'three', cells: [
          { h3: 'North West Three Maths Hub', p: 'The NCETM lists Liverpool, Knowsley, Sefton, St Helens and Wigan as its council areas, and names St Mary and St Thomas Primary School, St Helens, as lead school. It works with teachers and schools rather than families.' },
          { h3: 'Liverpool\'s Maths Outreach Team', p: 'The university describes it as "a group of staff and students committed to providing interactive and enriching mathematics to school pupils from Year 1 up to Year 13", typically visiting schools on 70 to 80 days a year.' },
          { h3: 'The FunMaths Roadshow', p: 'Its page says "The roadshow offers a choice of over 300 Maths activities to entertain and educate pupils." The team reports reaching between 8,000 and 10,000 pupils each academic year.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'School visits and university activities are booked by schools, so a learner who would like to take part should mention it to a maths teacher. The Department of Mathematical Sciences, based in its Mathematical Sciences Building, also lists summer project topics, from the geometry of complex functions to computer-assisted proofs.',
            'For national competition, schools enter the UK Mathematics Trust challenges at Junior, Intermediate and Senior level. Our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a> gives the dates, and the <a class="ag-inline-link" href="/maths-olympiad-training-uk">olympiad page</a> says how we prepare learners for the later rounds.'
          ],
          right: [
            'Our own lessons are live online, so a learner in Anfield, Allerton or Walton joins from home. We group by level rather than by area, which means classmates may log in from Manchester, Leeds or further away.',
            'Wirral families preparing for the eleven plus will find our <a class="ag-inline-link" href="/11-plus-maths-tuition-wirral">Wirral 11 plus maths page</a> more useful than this one, which covers maths in general rather than the test.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.ncetm.org.uk/hubs/north-west-three-maths-hub/" rel="noopener" target="_blank">NCETM, North West Three Maths Hub</a>; <a class="ag-inline-link" href="https://www.liverpool.ac.uk/mathematical-sciences/outreach-team/" rel="noopener" target="_blank">University of Liverpool, Maths Outreach team</a>; <a class="ag-inline-link" href="https://ukmt.org.uk/" rel="noopener" target="_blank">UK Mathematics Trust</a>. All read on 1 October 2026. Modern Age Coders has no connection with any of these organisations or with any Liverpool school.' }
      ]
    },
    {
      id: 'adults', tint: 'plain', eyebrow: 'For adults',
      h2: 'Adult maths in Liverpool, at your own pace',
      lede: 'Many adults who contact us were told at school that they were not maths people. Most of them were simply taught too fast.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Starting again', p: 'Number, fractions and percentages from the beginning, explained rather than recited, with room to ask the questions that felt silly at fifteen.' },
          { h3: 'A GCSE resit', p: 'For a course, an apprenticeship or a job that asks for the grade. The GCSE course we use is built to include resit candidates at either tier.' },
          { h3: 'Maths you use', p: 'Budgets, rates, rotas and charts. See our <a class="ag-inline-link" href="/online-maths-classes-for-adults-in-uk">adult maths page</a> and our <a class="ag-inline-link" href="/functional-skills-maths-tuition-online">Functional Skills page</a>.' }
        ] },
        { kind: 'p', mt: true, html: 'Adults tend to enjoy the tide project because it is so concrete. Anyone who has walked along the waterfront has seen the river at very different heights, and working out why the times shift by nearly an hour a day turns a vague memory into a calculation they can do themselves.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The sequence',
    h2: 'From telling the time to modelling a wave, in four steps',
    lede: 'Each step rests on the one below it. Learners join where they fit, and the trial lesson shows us where that is.',
    table: { caption: 'Four steps from clock arithmetic to trigonometric models, with a sign that each is secure', head: ['Usually', 'Step', 'Secure when the learner can'], rows: [
      ['Years 3 to 6', '1. Time and number', 'Add hours and minutes across midnight without a calculator'],
      ['Years 6 to 8', '2. Fractions of a whole', 'Split a quantity into twelfths and check that the parts add up'],
      ['Years 9 to 11', '3. Graphs and trigonometry', 'Sketch a cosine graph and read its period and amplitude'],
      ['Years 12 and 13', '4. Modelling', 'Fit a model to data, measure its errors and propose a better one']
    ] },
    left: { h3: 'Late starters', ps: [
      'Joining in Year 11 or Year 6 still pays off, as long as we repair number skills first. Weak arithmetic quietly costs marks on every paper.',
      'If the gap is bigger than the time left, we tell you so at the free lesson.'
    ] },
    right: { h3: 'After the exams', ps: [
      'Some learners move on to <a class="ag-inline-link" href="/courses/statistics-probability-maths-course">statistics and probability</a>, others to <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a>, where a short program fits the tide curve automatically.',
      'A few discover they love hard problems and turn to competition maths.'
    ] }
  },

  catalogue: {
    eyebrow: 'The full list',
    h2: 'Maths courses for Liverpool learners',
    lede: 'Grouped by stage. Open a card to read the complete syllabus.',
    bands: [
      { num: 'I', h3: 'Primary', sub: 'Ages 6 to 11', courses: [
        { code: 'MTL / A1', slug: 'early-math-foundations', title: 'Number for beginners', blurb: 'Counting, sorting and shapes for young children.' },
        { code: 'MTL / A2', slug: 'elementary-mathematics-complete-masterclass', title: 'KS2 maths', blurb: 'All of primary maths, with understanding.' },
        { code: 'MTL / A3', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Confident calculation without paper.' },
        { code: 'MTL / A4', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus', blurb: 'From bead frame to mental image.' }
      ] },
      { num: 'II', h3: 'Secondary', sub: 'KS3 and GCSE', courses: [
        { code: 'MTL / B1', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'KS3 maths', blurb: 'Algebra, ratio and geometry from Year 7.' },
        { code: 'MTL / B2', slug: 'algebra-foundations-masterclass', title: 'Algebra from scratch', blurb: 'Firm ground for learners who lost the thread.' },
        { code: 'MTL / B3', slug: 'gcse-mathematics-mastery', title: 'GCSE maths', blurb: 'Either tier, AQA, Edexcel or OCR, resits welcome.' },
        { code: 'MTL / B4', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'For international GCSE entries.' }
      ] },
      { num: 'III', h3: 'Sixth form and university', sub: 'From 16', courses: [
        { code: 'MTL / C1', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level Maths', blurb: 'Calculus, vectors, forces and data.' },
        { code: 'MTL / C2', slug: 'statistics-probability-maths-course', title: 'Statistics', blurb: 'Data, distributions and inference.' },
        { code: 'MTL / C3', slug: 'college-mathematics-complete-masterclass', title: 'University maths', blurb: 'Support alongside first-year degree modules.' },
        { code: 'MTL / C4', slug: 'olympiad-competition-mathematics-mastery', title: 'Problem solving', blurb: 'Competition-style questions with no set method.' }
      ] },
      { num: 'IV', h3: 'Applied and adult', sub: 'Maths at work', courses: [
        { code: 'MTL / D1', slug: 'complete-business-finance-mathematics-mastery', title: 'Finance maths', blurb: 'Interest, loans and investment.' },
        { code: 'MTL / D2', slug: 'data-analytics-mathematics-masterclass', title: 'Data maths', blurb: 'The mathematics behind analysis.' },
        { code: 'MTL / D3', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Letting a program do the repetitive arithmetic.' },
        { code: 'MTL / D4', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Fast methods for confident calculators.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Fitting lessons in',
    h2: 'Lesson times that suit a Liverpool day',
    lede: 'Teaching happens from India, which has no daylight saving. So the gap to Liverpool is 5 h 30 min from late October to late March, and 4 h 30 min the rest of the year. All slots are agreed and shown in UK time.',
    slots: [
      { time: 'Weekdays from mid-afternoon', l: 'After school for younger learners.' },
      { time: 'Weekday evenings', l: 'Sixth formers and working adults.' },
      { time: 'Weekend mornings', l: 'For a calmer start to the week\'s maths.' }
    ],
    cells: [
      { h3: 'Continuity', p: 'The same teacher takes a group each week and knows every learner\'s slips.' },
      { h3: 'Brief reports', p: 'A short note home after lessons on progress and next steps.' },
      { h3: 'Level, not age', p: 'Five to ten learners in a group, all at one level.' },
      { h3: 'Measured data', p: 'Tide readings, maps and census tables next to exam practice.' },
      { h3: 'One to one', p: 'For a stubborn topic, a near exam, or by choice.' },
      { h3: 'Say why', p: 'Learners explain a method in words before drilling it.' }
    ]
  },

  projectsH2: 'Where our students take their maths',
  projectsLede: 'Learners who began with graphs and numbers built the four projects below. More live in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Quoted exactly as families and learners wrote them in Google reviews.',

  fees: {
    h2: 'Fees',
    lede: 'Monthly, in US dollars, at one rate for every country outside India. No joining fee, no minimum term.',
    free: ['A real lesson at the learner\'s level', 'A candid account afterwards', 'No card required'],
    group: ['Five to ten learners at one level', 'A familiar teacher', 'Work marked and talked through', 'A certificate when finished'],
    one: ['Individual teaching', 'Aimed at the specific gap', 'Ideal close to exams']
  },

  faq: {
    eyebrow: 'Liverpool maths questions',
    h2: 'What Liverpool families and adult learners ask',
    items: [
      { q: 'What is the period of a trigonometric function?', a: 'The period is the length of one complete cycle before the graph repeats. For cos x in degrees it is 360°. For our tide model it is the time from one high water to the next, which averaged 12 hours 25.6 minutes at the Liverpool gauge in September 2026.' },
      { q: 'How much does a maths tutor cost in Liverpool?', a: 'Nothing for the trial. Afterwards, small-group lessons are USD 100 per month and private lessons USD 150 per month, with no registration charge.' },
      { q: 'Do you teach GCSE maths for AQA, Edexcel and OCR?', a: 'Yes. We match lessons to the board and tier your school uses, Foundation or Higher, and we also teach learners who are resitting.' },
      { q: 'When is the best time to start maths tuition?', a: 'Usually as soon as a learner starts to feel lost, before the gap widens. We teach children from 6 and adults up to 67, so it is never too early or too late.' },
      { q: 'Is online maths tuition as good as having a tutor in the room?', a: 'For most learners, yes. The teacher sees each line of working as it is written and responds immediately. Lessons are live, never recorded, and a group keeps the same teacher.' },
      { q: 'Is Further Maths covered as well as A level Maths?', a: 'It is. A level work spans calculus, statistics and forces; Further Maths adds complex numbers, matrices and proof by induction for learners who want the extra subject.' },
      { q: 'Do you teach maths to adults in Liverpool?', a: 'Yes, from first steps to GCSE resits and Functional Skills, in adult groups or privately.' },
      { q: 'Do you have a centre in Liverpool?', a: 'No. Every lesson is live and online, so learners join from home anywhere in the city.' },
      { q: 'Can you guarantee my child will pass?', a: 'No. No tutor can honestly guarantee a result. We teach thoroughly and give you an honest account of progress each month.' },
      { q: 'Are you connected with the University of Liverpool or the Maths Hub?', a: 'No. Their activities appear here only because families ask about them. Modern Age Coders is a separate, independent tutoring service.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related',
    h2: 'Further reading for Liverpool learners',
    lede: 'Stage pages, a nearby 11 plus page and our coding page for Liverpool.',
    items: [
      { href: '/a-level-maths-tuition-online', label: 'A level maths tuition', p: 'Pure, statistics and mechanics in depth.' },
      { href: '/ks3-maths-tuition-online', label: 'KS3 maths tuition', p: 'Years 7 to 9 and the move to GCSE.' },
      { href: '/11-plus-maths-tuition-wirral', label: '11 plus maths in Wirral', p: 'For families preparing for the Wirral test.' },
      { href: '/best-coding-class-in-liverpool', label: 'Coding classes in Liverpool', p: 'Our coding page for the city.' },
      { href: '/maths-tuition-in-nottingham', label: 'Maths tuition in Nottingham', p: 'A weather data project on correlation.' },
      { href: '/coding-classes-in-united-kingdom', label: 'All UK pages', p: 'Our index of UK places and maths pages.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson',
    lede: 'Send us a school year, or an age, plus whichever topic is causing grief. We teach a full trial lesson and then give you our frank view.',
    readFirst: 'Prefer to explore first? Browse the <a class="ag-inline-link" href="/courses">courses</a> or read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>.',
    note: 'For a fast reply, use WhatsApp. The +91 prefix is because our teachers are in India. Nobody works from a Liverpool office; teaching is entirely online.',
    formNote: 'No card details needed. We reply to agree a time.'
  },

  footer: {
    cols: [
      { h4: 'Maths', links: [
        { href: '/ks2-maths-tuition-online', label: 'KS2 maths tuition' },
        { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition' },
        { href: '/further-maths-tuition-online', label: 'Further maths tuition' },
        { href: '/online-maths-classes-for-adults-in-uk', label: 'Maths for adults' }
      ] },
      { h4: 'In the UK', links: [
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/best-coding-class-in-liverpool', label: 'Coding in Liverpool' },
        { href: '/maths-tuition-in-manchester', label: 'Maths tuition in Manchester' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] }
    ],
    bottomRight: 'Maths taught live, at every age'
  },

  personalityCss: `
.ag-root.ag-mtl .ag-hero h1 { letter-spacing: -0.022em; }
.ag-root.ag-mtl .ag-capsule { border-left-width: 5px; }
.ag-root.ag-mtl .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-mtl .ag-table caption { text-align: left; font-weight: 600; letter-spacing: 0.01em; }
.ag-root.ag-mtl .ag-table td:nth-child(4) { font-weight: 600; }
.ag-root.ag-mtl .ag-spec dt { letter-spacing: 0.11em; }
.ag-root.ag-mtl .ag-three h3 { letter-spacing: -0.005em; }
.ag-root.ag-mtl .ag-slots { gap: 0.95rem; }
`,

  mustMention: ['North West Three Maths Hub', 'St Mary and St Thomas Primary School', 'FunMaths Roadshow', 'over 300 Maths activities', '12 hours 25.6 minutes', '8.832 metres', '6.44 metres', 'rule of twelfths', 'Mathematical Sciences Building'],

  dossier: {
    curriculumAuthority: 'National curriculum for England (DfE); GCE AS and A level subject content for mathematics (DfE), items E3 (trigonometric functions, periodicity) and OT3.4 (refining a model). Liverpool schools sit in the North West Three Maths Hub area (NCETM).',
    localProject: 'Environment Agency gauge E70124 (Liverpool), 15-minute tidal levels 2 to 30 September 2026 UTC, 2,766 readings: 55 high and 55 low waters; mean high-to-high 745.6 min (12 h 25.6 min); range 8.832 m (13 Sep) to 2.513 m (20 Sep); mean rise 5.63 h, fall 6.79 h; rise by sixths in twelfths 0.77, 2.32, 3.27, 3.02, 1.94, 0.68; spring cosine model mean abs error 0.348 m, max 0.948 m; same amplitude at neap misses by up to 6.44 m; +12 h 25 min prediction within 15 min for 41 of 54.',
    requiredMentions: ['North West Three Maths Hub', 'St Mary and St Thomas Primary School', 'FunMaths Roadshow', 'over 300 Maths activities', '12 hours 25.6 minutes', '8.832 metres', '6.44 metres', 'rule of twelfths', 'Mathematical Sciences Building'],
    sources: [
      { claim: 'NCETM, North West Three Maths Hub: lead school St Mary and St Thomas Primary School, St Helens; areas Knowsley, Liverpool, Sefton, St Helens, Wigan.', url: 'https://www.ncetm.org.uk/hubs/north-west-three-maths-hub/' },
      { claim: 'University of Liverpool Maths Outreach Team: Year 1 to Year 13, 70 to 80 days a year, 8,000 to 10,000 pupils a year, FunMaths Roadshow with over 300 activities.', url: 'https://www.liverpool.ac.uk/mathematical-sciences/outreach-team/' },
      { claim: 'DfE GCE AS and A level mathematics subject content: E3 trigonometric functions and periodicity; OT3.4 refining and evaluating a model.', url: 'https://www.gov.uk/government/publications/gce-as-and-a-level-mathematics' },
      { claim: 'Environment Agency flood-monitoring API, station E70124 Liverpool, 15-minute tidal level readings.', url: 'https://environment.data.gov.uk/flood-monitoring/id/stations/E70124' },
      { claim: 'UK Mathematics Trust: Junior, Intermediate and Senior Mathematical Challenges.', url: 'https://ukmt.org.uk/' }
    ],
    rejectedClaims: [
      'Any tide prediction or tide table for safety use: the page says it is not one.',
      'A comparison of gauge heights with chart datum or Ordnance Datum: the gauge scale is used only internally.',
      'Claims about the tidal range of the Mersey compared with other rivers: not verified here, not printed.',
      'Names of university outreach staff: not printed.',
      'Liverpool exam results or school performance: excluded by the spec.'
    ]
  }
};
