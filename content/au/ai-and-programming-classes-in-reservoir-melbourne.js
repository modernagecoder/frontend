'use strict';
// Reservoir, Melbourne (cg- district page, Australia cluster Phase 8, row 282). Keyword slug in the rotation
// (ai-and-programming-classes-in-*), suburb page (ABS SAL22161, Reservoir (Vic.), City of Darebin) under Melbourne and
// Victoria. The Darebin council page carries council-wide figures; this page uses Reservoir suburb figures only.
// Spine: gradient checking (analytic vs central finite-difference gradient) to catch a bug in hand-written gradient
// descent. Linear model of FY24-25 station entries from FY23-24 entries (millions), 221 stations present in both
// files (McKinnon spelling differs). Correct analytic gradient matches numeric to relative error ~1e-11 to 2e-10;
// buggy bias gradient (copied from the weight term) relative error 0.73 and 0.80. Training lr 0.01, 20,000 steps:
// correct w 1.0055, c 0.01636, RMSE 102,645 entries (= numpy polyfit); buggy w 0.8485, c 0.8485, RMSE 774,902.
// Baseline "same as last year" RMSE 105,234. Reservoir actual 757,800 (FY23-24 852,650); correct model 873,741,
// buggy 1,572,056. Script: scratchpad au/b10/rsvr.py.
// Lesson family: gradient checking; 0 hits in content/, claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'RESERVOIR',
    label: 'Reservoir, Melbourne',
    blurb: 'AI and programming classes for Reservoir, with a machine learning project that catches a gradient bug before it ruins a model.'
  },
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
  slug: 'ai-and-programming-classes-in-reservoir-melbourne',
  code: 'rsvr',
  accent: '#4D240C',
  accentRationale: 'Reservoir: a dark iron brown (hue 22), picked by a full search of the muted range: 32.5 RGB units from every Victorian page accent, 16.3 from every other Australian accent and 6.2 from every other colour in content, the stylesheets and the claims logs; 10.83:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Reservoir',
    eyebrow: 'Reservoir, City of Darebin, Melbourne, Victoria',
    schemaType: 'Place',
    chain: [
      { type: 'City', name: 'Melbourne' },
      { type: 'AdministrativeArea', name: 'Victoria' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-victoria', name: 'Victoria' },
    { slug: 'vibe-coding-and-ai-agents-classes-in-melbourne', name: 'Melbourne' }
  ],
  nav: [
    { label: 'Melbourne', href: '/vibe-coding-and-ai-agents-classes-in-melbourne' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Reservoir, Melbourne',
  title: 'AI and Programming Classes in Reservoir, Melbourne',
  description: 'Live online AI and programming classes for Reservoir children, teenagers and adults: Scratch, Python, calculus for machine learning and AI, in groups or one to one.',
  ogDescription: 'AI classes for Reservoir: one copied line in a gradient made a station model 7.5 times worse. A numerical gradient check caught it before training began.',
  twitterDescription: 'Reservoir AI and programming classes, live online, first class free.',
  ogImageCourse: 'ai-ml-masterclass-complete-college',
  verifiedOn: '11 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Reservoir',
    description: 'Level-matched online lessons in Scratch, Python, machine learning and the maths behind it for learners in Reservoir, taught live in English.'
  },
  h1: 'AI and programming classes in Reservoir',
  capsuleQ: 'What do AI and programming classes cover for Reservoir learners?',
  capsule: 'Python and the maths inside machine learning, taught live online, with every model checked before it is trusted. Reservoir is a big suburb by population: the 2021 Census counted 51,096 residents and 23,146 private dwellings, about 2.4 people to a household.',
  lead: 'Every machine learning model learns by following a gradient, a set of numbers saying which way to nudge each setting. Write that gradient by hand and a single copied line can send training the wrong way without any error message. Gradient checking compares the formula with a slow but trustworthy estimate, and it takes seconds.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming class for a learner in Reservoir.',
  picks: {
    eyebrow: 'Course picks for Reservoir',
    h2: 'Courses that open up the model',
    intro: 'Each course goes beneath the library call to the gradients and loss functions that the checking project tests. The free first class sets the level.',
    items: [
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Models built from scratch in Python before any library does it for you.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Ages 14 to 18', note: 'Algebra through to calculus, the maths that gradients are made of.' },
      { course: 'ai-ml-masterclass-complete-college', band: 'University and adult', note: 'Machine learning and deep learning with the derivations shown.' },
      {
        course: 'data-analytics-mathematics-masterclass',
        band: 'Ages 16 and up',
        note: 'Calculus, linear algebra and statistics as used in machine learning.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Reservoir in the Census',
      h2: 'A large suburb of houses and townhouses',
      intro: 'Figures for the Reservoir suburb (ABS code SAL22161, listed as Reservoir (Vic.)) from the 2021 Census QuickStats, alongside Victoria. The City of Darebin is covered separately.',
      body: [
        {
          kind: 'table',
          caption: 'Reservoir suburb, 2021 Census headline counts',
          head: ['Headline', 'Reservoir'],
          rows: [
            ['Residents', '51,096'],
            ['Median age', '38'],
            ['Families', '13,259'],
            ['Private dwellings', '23,146'],
            ['Average people per household', '2.4']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Reservoir compared with Victoria',
          head: ['Measure', 'Reservoir', 'Victoria'],
          rows: [
            ['Separate houses', '63.2% (12,804)', '73.4%'],
            ['Semi-detached, row or terrace houses and townhouses', '32.5% (6,582)', '13.9%'],
            ['Workers who drove to work', '45.7% (11,155)', '49.9%'],
            ['Workers who took the train', '3.5% (860)', '1.6%'],
            ['Workers who took a bus', '0.9% (216)', '0.6%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Townhouse country', p: 'Almost a third of Reservoir homes are townhouses or semi-detached, more than double the Victorian share.' },
            { h3: 'Area', p: 'The bureau measures the suburb at 19.03 square kilometres, within the City of Darebin.' },
            { h3: 'Lockdown caveat', p: 'The 2021 Census was held in an August lockdown, when 27.7% of employed residents, 6,761 people, worked from home.' }
          ]
        },
        {
          kind: 'p',
          text: 'For confidentiality the bureau adds small random changes to each count, so table parts can differ from totals. We report numbers exactly as published and do not add them up.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'One copied line, caught by a check',
      intro: 'We fitted the simplest model there is: predict each station\'s FY24-25 entries from its FY23-24 entries with a straight line, for the 221 stations that appear in both files. Then we wrote the gradient by hand twice, once correctly and once with a classic copy-paste slip: the bias gradient copied from the weight line, still multiplied by last year\'s entries.',
      body: [
        {
          kind: 'table',
          caption: 'Gradient check: hand-written gradient against a numerical estimate (our calculation)',
          head: ['Version', 'Weight gradient error', 'Bias gradient error', 'Verdict'],
          rows: [
            ['Correct, at two test points', 'About 1 in 10 billion or less', 'About 1 in 4 billion or less', 'Pass'],
            ['Buggy, first test point', 'About 1 in 60 billion', '0.73', 'Fail'],
            ['Buggy, second test point', 'About 1 in 20 billion', '0.80', 'Fail']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'What happens if you train anyway (20,000 steps, our calculation)',
          head: ['Model', 'Typical error per station', 'Reservoir prediction'],
          rows: [
            ['Correct gradient', '102,645 entries', '873,741'],
            ['Buggy gradient', '774,902 entries', '1,572,056'],
            ['No model: same as last year', '105,234 entries', '852,650']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Silent failure',
              p: 'The buggy version trained without any error and settled on a line, just a much worse one. Only the comparison with the numerical gradient flagged it.'
            },
            {
              h3: 'Reservoir itself',
              p: 'Reservoir recorded 757,800 entries in FY24-25, down from 852,650. Every method overshot it, and simply repeating last year came closest.'
            },
            {
              h3: 'Matches the library',
              p: 'The correctly trained line, 1.0055 times last year plus a small constant, matched NumPy\'s own least-squares fit to the digits we printed.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'An honest baseline',
          p: 'The correct model beat "same as last year" by a small margin, 102,645 against 105,234 entries of typical error, and lost to it for Reservoir. A one-year straight line is a teaching model, not a forecast. The point of the project is the bug the check catches, not the prediction.'
        },
        {
          kind: 'p',
          text: 'Station figures arrive pre-rounded to multiples of 50 by the transport department. McKinnon station is spelled differently in the two years\' files, which is why 221 stations, not 222, matched. The model, the bug, the checks and every error figure are our own work.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'The method',
      h2: 'Nudge each setting both ways',
      intro: 'To estimate a gradient numerically, add a tiny amount to one setting, measure the loss, subtract the same amount, measure again, and divide the difference by twice the step. Compare that with the formula, setting by setting.',
      body: [
        {
          kind: 'table',
          caption: 'Reading a gradient check',
          head: ['Relative error', 'Usual meaning', 'Next step'],
          rows: [
            ['Below about 1 in a million', 'The formula is right', 'Train with confidence'],
            ['Around 1 in a thousand', 'Suspicious; often a scaling slip', 'Check each term and the step size'],
            ['Around 0.1 or above', 'The formula is wrong', 'Fix it before training']
          ]
        },
        {
          kind: 'p',
          text: 'The numerical estimate is far too slow to train with, since it needs two loss evaluations per setting, and models have millions of settings. That is exactly why it makes a good referee: slow, simple and hard to get wrong. Deep learning libraries compute gradients automatically, but anyone writing a custom layer or loss still checks it this way.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Children', p: 'Roll a ball down a slope drawn in Scratch and change the steepness to see which way it goes.' },
            { h3: 'Teenagers', p: 'Code the station model, plant the bug, and write the check that finds it.' },
            { h3: 'Adults', p: 'Add gradient checks to the tests for a custom loss function at work.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Reservoir',
      h2: 'Three stations and thirteen schools',
      intro: 'Station entries from the patronage file and school counts from the 2025 school locations file.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Reservoir station', p: 'Reservoir counted 757,800 entries in FY24-25, 47th of 222 metropolitan stations, against 959,050 in FY18-19.' },
            {
              h3: 'Regent and Ruthven',
              p: 'Regent rose from 369,000 to 382,700 entries between FY23-24 and FY24-25, while Ruthven slipped from 302,050 to 289,350.'
            },
            {
              h3: 'Schools',
              p: 'The file lists 13 open schools in Reservoir, eight of them government, including Reservoir Views Primary School, Reservoir High School and William Ruthven Secondary College.'
            }
          ]
        },
        {
          kind: 'spec',
          title: 'Term 3, 2027',
          p: 'Victorian government schools run Term 3 from Monday 12 July to Friday 17 September 2027, a natural point to start or change a course.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From slopes in Scratch to checked gradients',
    intro: 'Ages are only a guide; the free first class places each learner.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch',
        p: 'Games with motion, speed and simple slopes.',
        courses: ['scratch-programming-complete-course', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and graphs',
        p: 'Straight lines, plotting and a first model fitted by hand.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'Machine learning',
        p: 'Loss, gradients and training loops written from scratch.',
        courses: ['ai-ml-masterclass-teens', 'complete-high-school-mathematics-mastery']
      },
      {
        band: 'University and adult',
        h3: 'Deep learning',
        p: 'Neural networks, custom losses and the checks that keep them honest.',
        courses: ['ai-ml-masterclass-complete-college', 'data-analytics-mathematics-masterclass']
      }
    ]
  },
  ai: {
    eyebrow: 'AI and programming',
    h2: 'If AI tools compute gradients for you, why should a Reservoir learner check one?',
    intro: 'Because the moment you write anything custom, the automatic safety net has a hole in it.',
    p1: 'An assistant asked to write gradient descent for a new model will often write the gradient by hand, and a copied line like the one in our project is exactly the kind of mistake that gets through. The code runs, the loss falls a little, and nothing looks broken.',
    p2: 'A learner who has seen a relative error of 0.73 next to one of a ten-billionth knows to ask for a gradient check before trusting any training run, whoever or whatever wrote the code.',
    closer: 'Our Reservoir classes teach the maths inside AI so that learners can test it, not just run it.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Reservoir lessons, live online',
    intro: 'Every lesson is a live video class taken from home.',
    cells: [
      { h3: 'Learner drives', p: 'The learner types, runs and fixes the code with the screen shared, and the teacher guides from there.' },
      { h3: 'School-term rhythm', p: 'Courses run in Victorian terms and break in the holidays.' },
      { h3: 'Free first class', p: 'The trial is a real lesson, after which the teacher proposes a course and a weekly time.' },
      { h3: 'Level-matched', p: 'Groups run with five to ten learners who are working at about the same point.' },
      { h3: 'Two per week', p: 'Two set lessons a week, around eight a month, with holiday gaps agreed ahead.' },
      {
        h3: 'Teachers in India',
        p: 'Our teachers are in India, so a 4:30pm Reservoir class during daylight saving is 11am India time, and noon in the Melbourne winter.'
      }
    ],
    spec: {
      title: 'Melbourne clocks',
      p: 'Daylight saving in Melbourne began on Sunday 4 October 2026 and ends on Sunday 4 April 2027. India keeps one time all year, so lesson times are always confirmed in Melbourne time.'
    }
  },
  fees: {
    h2: 'Reservoir class fees',
    intro: 'A free trial and two monthly rates.',
    first: 'Your first lesson is free and finishes with a plain recommendation.',
    group: 'A month in a group of five to ten learners at one level, generally eight lessons.',
    private: 'Close to eight private lessons a month with one teacher.',
    closer: 'Families outside India are billed in US dollars, so Reservoir pays what every other overseas family pays. We take no payment until the trial has fixed course and time; the pricing page explains holidays, missed lessons and changes of format.'
  },
  reviewsH2: 'What Google reviewers write about our classes',
  book: {
    h2: 'Book a free Reservoir class',
    intro: 'Mention how old the learner is and something they enjoy. Seven-year-olds often open with a Scratch racing game; senior secondary students sometimes open by hunting a planted gradient bug.',
    success: 'Thank you. Our team will contact you soon about a Reservoir class.'
  },
  faq: {
    h2: 'Reservoir AI and programming questions',
    intro: 'Questions we get from Reservoir households and adult learners.',
    items: [
      {
        q: 'How many people live in Reservoir?',
        a: 'The 2021 Census QuickStats for the Reservoir (Vic.) suburb count 51,096 residents, 13,259 families and 23,146 private dwellings, with a median age of 38.'
      },
      {
        q: 'What is gradient checking?',
        a: 'A test that compares a hand-written gradient with a numerical estimate made by nudging each parameter up and down by a tiny amount. If the two disagree by more than a very small relative error, the formula has a bug.'
      },
      {
        q: 'What is gradient descent?',
        a: 'The method most machine learning models use to learn: repeatedly move each parameter a small step in the direction that reduces the error, as given by the gradient.'
      },
      {
        q: 'What did the Reservoir project find?',
        a: 'A copied line in the bias gradient gave relative errors of 0.73 and 0.80 in a gradient check. Trained anyway, the buggy model\'s typical error was 774,902 entries per station against 102,645 for the correct one.'
      },
      {
        q: 'Do students need calculus for machine learning?',
        a: 'A little helps, and we teach it as needed. Teenagers can start with slopes of straight lines and build up to the derivatives that gradients are made of.'
      },
      { q: 'What do younger Reservoir children start with?', a: 'Six-year-olds and up begin in Scratch, where games with movement and speed come first.' },
      {
        q: 'Do you have a Reservoir venue?',
        a: 'No. All lessons are live online, we have no Australian premises, and our phone number is an Indian one.',
        boiler: true
      },
      {
        q: 'How much are AI classes for Reservoir learners?',
        a: 'The first lesson is free. After it, group classes cost USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one classes cost USD 150 a month. Course, format and time are agreed before payment.',
        boiler: true
      },
      {
        q: 'How many are in a group?',
        a: 'Five to ten learners grouped on level, pace and goals, with one-to-one lessons if no group time suits.',
        boiler: true
      },
      {
        q: 'Can adults study machine learning with you?',
        a: 'Yes. Adults have their own groups or one-to-one lessons, often to understand the models their workplace has started to use.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for Reservoir learners',
    html: 'Across the city, the <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">Melbourne page</a> brings our classes together, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victoria guide</a> does the same for the state. A primary-age beginner may suit our <a class="cg-inline-link" href="/coding-classes-for-kids-melbourne">kids coding page for Melbourne</a> better.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Reservoir and Melbourne',
  footerPlaces: [
    { href: '/coding-classes-for-kids-melbourne', label: 'Kids coding, Melbourne' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-rsvr .cg-hero-grid { align-items: end; gap: clamp(1.05rem, 3vw, 2.4rem); }
.cg-root.cg-rsvr .cg-hero h1 { font-weight: 710; letter-spacing: -0.023em; line-height: 1.03; }
.cg-root.cg-rsvr .cg-capsule { border-left: 6px solid var(--cg-accent); padding: 0.6rem 0 0.6rem 1.15rem; }
.cg-root.cg-rsvr .cg-eyebrow { letter-spacing: 0.18em; font-weight: 640; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-rsvr .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.016em; }
.cg-root.cg-rsvr .cg-grid-3 { gap: clamp(0.85rem, 2.4vw, 1.9rem); }
.cg-root.cg-rsvr .cg-table caption { font-weight: 670; text-align: left; text-transform: none; }
.cg-root.cg-rsvr .cg-table td:nth-child(n+2) { font-variant-numeric: tabular-nums; }
.cg-root.cg-rsvr .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-rsvr .cg-callout { border-left-width: 6px; }
`,
  dossier: {
    curriculumAuthority: 'Reservoir (Vic.), ABS Census 2021 QuickStats, Reservoir (Vic.) suburb SAL22161 (read 11 October 2026): 51,096 people; median age 38; 13,259 families; 23,146 private dwellings; 2.4 people per household; separate house 63.2% (12,804; Victoria 73.4%); semi-detached, row or terrace house, townhouse 32.5% (6,582; Victoria 13.9%); car as driver 45.7% (11,155; Victoria 49.9%); train 3.5% (860; Victoria 1.6%); bus 0.9% (216; Victoria 0.6%); worked at home 27.7% (6,761; lockdown Census). ABS SAL area 19.03 square kilometres, City of Darebin. Stations inside the boundary (entries): Reservoir 757,800 FY24-25 (rank 47 of 222; FY23-24 852,650; FY18-19 959,050), Regent 382,700 (FY23-24 369,000), Ruthven 289,350 (FY23-24 302,050). Victorian School Locations 2025: 13 open schools (Government 8, Catholic 3, Independent 2), including Reservoir Views Primary School, Reservoir High School and William Ruthven Secondary College. Victorian 2027 Term 3: Monday 12 July to Friday 17 September. Melbourne daylight saving 4 October 2026 to 4 April 2027 (IANA).',
    localProject: 'Gradient checking. Linear model y = w x + c, x = FY23-24 entries, y = FY24-25 entries (millions), 221 stations in both files (McKinnon spelled differently). Central differences h = 1e-6, relative error |a - n| / (|a| + |n|). Correct gradient: relative errors 1.6e-11 and 2.6e-11 at (0.5, 0.1); 4.7e-11 and 2.3e-10 at (1.2, -0.05). Buggy (bias gradient uses x): bias relative error 0.7335 and 0.7953. Training lr 0.01, 20,000 steps from (0, 0): correct w 1.0055 c 0.01636 RMSE 102,645 entries (equal to numpy polyfit); buggy w 0.8485 c 0.8485 RMSE 774,902. Baseline y = x RMSE 105,234. Reservoir: actual 757,800, previous 852,650, correct 873,741, buggy 1,572,056. Script: scratchpad au/b10/rsvr.py.',
    requiredMentions: [
      '51,096',
      '13,259',
      '23,146',
      '19.03 square kilometres',
      '873,741',
      '959,050',
      '774,902',
      '102,645',
      'Reservoir Views Primary School',
      'William Ruthven Secondary College'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Reservoir (Vic.) suburb (SAL22161).', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL22161' },
      {
        claim: 'Department of Transport and Planning, Annual metropolitan train station patronage (station entries), FY18-19 to FY24-25 (Creative Commons Attribution 4.0); estimates rounded to the nearest 50.',
        url: 'https://discover.data.vic.gov.au/dataset/annual-metropolitan-train-station-patronage-station-entries'
      },
      {
        claim: 'Victorian Department of Education, School Locations 2025 (Creative Commons Attribution 4.0), dv402-SchoolLocations2025.csv.',
        url: 'https://discover.data.vic.gov.au/dataset/school-locations-2025'
      },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (SAL22161 polygon and area).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'NumPy documentation, numpy.polyfit (least squares polynomial fit).',
        url: 'https://numpy.org/doc/stable/reference/generated/numpy.polyfit.html'
      },
      {
        claim: 'Victorian Government, school term dates and holidays, 2027 Victorian school term dates.',
        url: 'https://www.vic.gov.au/school-term-dates-and-holidays-victoria'
      },
      {
        claim: 'IANA time zone database, australasia file: Australia/Melbourne daylight saving rules.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Any forecast of future station entries: not made; the model is a teaching example and barely beats repeating last year.',
      'Reasons for changes in Reservoir, Regent or Ruthven entries: not claimed.',
      'Names of Catholic, independent or specialist schools: not used; counted only.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with the City of Darebin, the Victorian Department of Education or the Department of Transport and Planning.'
    ]
  }
};
