'use strict';
// Ilford, Redbridge (cg- district page, UK cluster Phase 9, row 439). Keyword slug per the owner's 2026-09-30 decision
// (rotation with city suffix), with the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: why can
// a correct formula give an impossible answer on a computer? (floating-point precision, catastrophic cancellation in the
// one-pass variance formula, float32 against float64, Welford's online algorithm and the two-pass method).
// Data (read 30 September 2026): Ordnance Survey Code-Point Open (dataset version 2026.3.0, OGL), file ig.csv: 1,325
// postcodes in the IG1 (913) and IG2 (412) districts, all in Redbridge (E09000026); eastings and northings in metres.
// Our run (scratchpad ilf/wel.py, wel2.py): population variance of eastings and northings. Exact (Python fractions):
// eastings mean 543,986.0 m, variance 603,291.8 square m (standard deviation 776.7 m); northings mean 187,128.9 m,
// variance 1,277,505.9 (sd 1,130.3). One-pass formula mean(x squared) minus mean squared, accumulated in float32:
// eastings 1,933,312 (220.46% too high), northings 1,433,600 (12.22% too high). Welford online in float32: 603,046.9
// (-0.0406%) and 1,277,274.8 (-0.0181%). Two-pass in float32: 603,293.0 and 1,277,506.1. One-pass in float64 (Python
// floats): off by 0.00005 and 0.000002. Postcode sector IG1 1 (220 postcodes): one-pass float32 gives -98,304 square m,
// true 158,907.5; 1 of 8 sectors with at least 5 postcodes came out negative.
// Lesson family: numerical stability (catastrophic cancellation, float32 vs float64, Welford's online algorithm).
// Screened 30 September 2026: "Welford", "catastrophic cancellation", "Kahan", "float32" 0 hits; claimed as ilf.
// Redbridge borough page = trilateration; its mentions (Aldersbrook, Fullwell Cross, Valentines Mansion) not reused.
// Place facts: Census 2021 usual residents by 2022 ward (Nomis NM_2021_1, TYPE153), per ward, not summed: Ilford Town
// 12,327; Clementswood 13,503; Loxford 15,123; Valentines 15,209. postcodes.io (Redbridge): Cranbrook, Loxford (IG1),
// Gants Hill, Newbury Park (IG2), Seven Kings, Goodmayes (IG3) suburban areas; Ilford a settlement.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'ILFORD', label: 'Ilford', blurb: 'Online coding and Python classes for Ilford in Redbridge, with a project where a textbook formula gives an impossible answer on real postcode data, and how to fix it.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-ilford-london',
  code: 'ilf',
  accent: '#0B6E55',
  accentRationale: 'Ilford: a deep sea green (6.22:1 contrast), chosen by hand to differ from recent purples and blues',
  pageType: 'city',
  place: {
    name: 'Ilford',
    eyebrow: 'Ilford, Redbridge, London',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'London' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-london', name: 'London' }],
  nav: [
    { label: 'Redbridge', href: '/coding-classes-in-redbridge-london' },
    { label: 'London', href: '/best-coding-class-in-london' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Ilford, London',
  title: 'Online Coding and Python Classes in Ilford, London | AI, 6 to 67',
  description: 'Live online coding, Python, AI and vibe coding lessons for Ilford, Gants Hill, Cranbrook and Newbury Park learners aged 6 to 67, taught live. First lesson free.',
  ogDescription: 'Online coding and Python classes for Ilford, with a project where a textbook formula returns an impossible negative answer on real postcode data.',
  twitterDescription: 'Ilford online coding, Python, AI and vibe coding classes for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Ilford',
    description: 'Online coding, Python, AI, vibe coding and maths for children, teenagers and adults in Ilford and Redbridge, taught live with careful numerical thinking first.'
  },

  h1: 'Online coding and Python classes in Ilford',
  capsuleQ: 'Which are the best online coding and Python classes in Ilford?',
  capsule: 'No official figure covers Ilford as one place; the ONS instead reports its 2022 wards one by one at Census 2021, with 12,327 usual residents in Ilford Town, 13,503 in Clementswood and 15,123 in Loxford. Gants Hill, Cranbrook, Newbury Park and Seven Kings are recorded suburban areas of Redbridge. India-based tutors teach coding, Python, AI, vibe coding and maths on camera to anyone from six to 67, individually or in a class of five to ten of similar level. Every course teaches careful reasoning first, so learners can tell when a program, or an AI, has produced a number that cannot be right. We teach lesson one without charge and finish by naming a course. The Ilford project takes 1,325 real postcodes and shows a correct textbook formula returning a negative spread, then fixes it in a few lines of Python. Staying on costs USD 100 monthly for a seat in a class, or USD 150 monthly for lessons on your own.',
  lead: 'Variance measures how spread out some numbers are, and it can never be negative. Yet one of the most common ways of calculating it, the average of the squares minus the square of the average, can come out negative on a real computer. The formula is mathematically correct; the trouble is that computers store numbers with limited precision, and subtracting two huge, nearly equal numbers wipes out the digits that mattered, an effect called catastrophic cancellation. This project finds it happening on Ilford\'s own postcodes from the Ordnance Survey, whose map coordinates are hundreds of thousands of metres, and then fixes it with Welford\'s method.',
  wa: 'Hello Modern Age Coders, could we book a free coding or Python lesson for a learner in Ilford?',

  picks: {
    eyebrow: 'Ilford course picks',
    h2: 'Ilford courses in reasoning, Python and AI',
    intro: 'Four courses, arranged by age. Try any of them with a free live lesson, booked without card details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: estimating first, then spotting an answer that cannot possibly be right.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games planned by the learner, built with AI help and checked thoroughly.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from first programs to real data, including the Ilford postcode precision puzzle.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python for data, numerical methods, machine learning and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Ilford and Redbridge',
      h2: 'Ilford Town, Clementswood, Loxford and Gants Hill',
      intro: 'Census 2021 ward counts, and places recorded in Redbridge.',
      body: [
        { kind: 'table', caption: 'Usual residents by 2022 ward, Census 2021, ONS via Nomis', head: ['Ward', 'Residents (2021)'], rows: [
          ['Valentines', '15,209'],
          ['Loxford', '15,123'],
          ['Clementswood', '13,503'],
          ['Ilford Town', '12,327']
        ] },
        { kind: 'p', text: 'These are separate ward figures, not a total for Ilford, which has no single official count. Postcodes.io lists Cranbrook and Loxford in IG1, Gants Hill and Newbury Park in IG2, and Seven Kings and Goodmayes in IG3 as suburban areas of Redbridge. Redbridge schools work to the national curriculum for England, so we plan by year group with GCSE and A level in mind, and leave out the holiday weeks you tell us about.' },
        { kind: 'callout', h3: 'Redbridge, London and our teaching', p: 'See <a class="cg-inline-link" href="/coding-classes-in-redbridge-london">coding classes in Redbridge</a> and <a class="cg-inline-link" href="/best-coding-class-in-london">London</a> for more. Our case for thinking before tools is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Ilford project',
      h2: 'When a correct formula gives an impossible answer: variance, float32 and Welford\'s method',
      intro: 'Real postcode coordinates, three ways to compute one statistic, and a result below zero.',
      body: [
        { kind: 'p', text: 'The learner downloads Code-Point Open, the Ordnance Survey\'s free postcode file, and keeps the 1,325 postcodes in the IG1 and IG2 districts. Each has an easting and a northing in metres; for Ilford the eastings average 543,986 m. The task is to measure how spread out the postcodes are, the variance of their coordinates, three ways. First, the textbook one-pass formula: average of the squares minus the square of the average. Second, the two-pass method: find the average, then average the squared distances from it. Third, Welford\'s online algorithm, which updates a running mean and a running sum of squared differences one value at a time. Each is run in 32-bit floating point, the compact number format common on graphics cards, and checked against an exact answer from Python\'s fractions.' },
        { kind: 'table', caption: 'Variance of Ilford postcode coordinates in square metres, our Python run on OS Code-Point Open', head: ['Method (32-bit floats)', 'Eastings', 'Northings'], rows: [
          ['Exact answer', '603,291.8', '1,277,505.9'],
          ['One-pass textbook formula', '1,933,312 (220% too high)', '1,433,600 (12% too high)'],
          ['Two-pass method', '603,293.0', '1,277,506.1'],
          ['Welford online', '603,046.9 (0.04% low)', '1,277,274.8 (0.02% low)']
        ] },
        { kind: 'p', text: 'The textbook formula is wrong by a factor of three on the eastings, because squaring numbers around 544,000 gives about 296 billion, far more than a 32-bit float can hold precisely, and the tiny true spread is lost when two such giant numbers are subtracted. On postcode sector IG1 1, 220 postcodes, it goes further and returns a variance of minus 98,304, a mathematical impossibility; the true value is 158,907.5. Welford\'s method never forms those giant squares, so it stays within a small fraction of a percent while reading each value only once. In Python\'s ordinary 64-bit floats the textbook formula happens to survive on this data, off by only 0.00005, which is exactly why the problem goes unnoticed until someone switches to a smaller number type.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Use a calculator that shows only a few digits, subtract two big close numbers, and see the answer go wrong.' },
          { h3: 'Ages 11 to 15', p: 'Load Ilford postcode coordinates in Python and work out their average and spread.' },
          { h3: 'Ages 15 and up', p: 'Code all three variance methods in float32 and float64, and explain every difference.' }
        ] },
        { kind: 'callout', h3: 'OS postcodes, our calculations', p: 'Postcode coordinates are from Ordnance Survey Code-Point Open, contains OS data, Crown copyright and database right, under the Open Government Licence. Every variance and error figure is our own calculation.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Precision and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'The maths was right; the arithmetic inside the machine was not.',
      body: [
        { kind: 'table', caption: 'From the Ilford precision puzzle to working with AI', head: ['In the variance project', 'When AI writes numerical code'], rows: [
          ['The textbook formula was 220% off in float32', 'Correct maths can fail in finite precision'],
          ['One sector gave a negative variance', 'Sanity-check results that cannot be true'],
          ['Float64 hid the problem', 'Passing one test is not the same as being right'],
          ['Welford read each value once, accurately', 'Stable algorithms beat clever shortcuts'],
          ['Graphics cards favour small number types', 'AI hardware makes precision matter more']
        ] },
        { kind: 'p', text: 'AI models are trained and run on hardware that prefers 32-bit, 16-bit and even 8-bit numbers, so the same traps appear in machine learning code, from averages to softmax. An AI assistant asked for "a variance function" may well produce the textbook one-pass version, which passes a quick test and fails later. In vibe coding the learner describes what they need while an AI writes it; our Ilford learners then test the code on awkward real data and check that the answers are possible at all. AI agents that crunch numbers for you need the same checks. Agent building is for learners whose Python already works without a helper, which tends to mean sixth-formers and adults; Copilot Studio is private tuition only. The thinking behind this is on <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>, and the next steps on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our agents pathway for UK students</a>.' },
        { kind: 'p', text: 'Nobody at Ordnance Survey, the ONS, Nomis or postcodes.io has reviewed this page. Their open data went in; the arithmetic and any mistakes are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From calculator puzzles to numerical Python',
    intro: 'The school year guides where we begin; the trial lesson settles it.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Estimating, rounding and spotting impossible answers.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and apps planned by the learner and built with AI help.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and numbers', p: 'Real data, floating point and statistics beside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'statistics-probability-maths-course'] },
      { band: 'Adults', h3: 'Python, data and agents', p: 'Numerical code, machine learning and AI agents in Python.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Python and precision',
    h2: 'Why can a correct formula give a wrong answer in Python?',
    intro: 'Because computers store numbers with limited precision, subtracting two huge, nearly equal values can wipe out the digits that mattered, called catastrophic cancellation; stable methods such as Welford\'s algorithm avoid forming those huge values in the first place.',
    p1: 'On 1,325 Ilford postcodes in 32-bit floats, the textbook variance formula was 220% too high for eastings and negative for one postcode sector, while Welford\'s method stayed within 0.04% of the exact answer.',
    p2: 'Learners who have seen that ask of any number a program or an AI returns: could this possibly be true, and what precision was it computed in?',
    closer: 'Checking that answers are even possible lets Ilford teenagers trust code for the right reasons, a solid reason to learn Python in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Gants Hill to Cranbrook, online',
    intro: 'A computer with a webcam and a video-ready connection is all that is required.',
    cells: [
      { h3: 'Learner at the keyboard', p: 'Students write and run the code; the tutor follows the shared screen and asks what answer they expect first.' },
      { h3: 'Trial sets the start', p: 'The free lesson shows where to begin, and any GCSE or A level board is noted.' },
      { h3: 'Opening lesson free', p: 'No charge for lesson one, which finishes with a course suggestion.' },
      { h3: 'Level-matched groups', p: 'Five to ten UK learners at one stage in every class.' },
      { h3: 'Twice weekly', p: 'Holiday weeks off.' },
      { h3: 'Constant time', p: 'Tutors adjust for UK clock changes so your lesson hour holds.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at one level, free on one evening, are rarely next-door neighbours. Online, it does not matter.' }
  },

  fees: {
    h2: 'Ilford fees',
    intro: 'Ilford learners are charged our international rates, which apply everywhere apart from India.',
    first: 'A complete free lesson, then a recommendation.',
    group: 'Roughly eight live group lessons a month.',
    private: 'Roughly eight live private lessons a month.',
    closer: 'All prices are in US dollars, never sterling, and invoicing begins only after the trial has fixed a course and a weekly slot. The pricing page sets out holidays, absences and moving between group and private.'
  },

  reviewsH2: 'Google reviews: Redbridge parents and learners nationwide',

  book: {
    h2: 'Book a free Ilford lesson',
    intro: 'All we need is an age or year group and one interest. We could start with a which-answer-is-impossible puzzle, a Scratch game co-built with an AI, some early Python, or genuine postcode data.',
    success: 'Thank you. Your Ilford request is in.'
  },

  faq: {
    h2: 'Ilford questions',
    intro: 'Precision, the postcode project, Python, vibe coding and practical details.',
    items: [
      { q: 'How many people live in Ilford?', a: 'There is no single official Ilford figure. Census 2021 counted 12,327 in Ilford Town ward, 13,503 in Clementswood and 15,123 in Loxford, each measured separately.' },
      { q: 'Are online Python classes available in Ilford?', a: 'They are. Lessons happen on live video, so Gants Hill, Newbury Park and the whole of Redbridge are covered, from age 6 to 67.' },
      { q: 'What is catastrophic cancellation?', a: 'The loss of accuracy when two large, nearly equal numbers are subtracted, leaving mostly rounding error. It made a textbook variance formula negative on real Ilford data.' },
      { q: 'What is Welford\'s algorithm?', a: 'A way to compute the mean and variance in one pass, updating a running mean and a running sum of squared differences, which stays accurate even in low precision.' },
      { q: 'What does the Ilford project involve?', a: 'Computing the spread of 1,325 Ilford postcode coordinates three ways in 32-bit floats, comparing each with an exact answer, and explaining the failures.' },
      { q: 'Is vibe coding on the timetable?', a: 'For every age group. The learner sets out what the program should do, and tests whatever the AI writes.' },
      { q: 'When do learners build AI agents?', a: 'After their own Python runs reliably, typically sixth form or later; Copilot Studio is taught privately.' },
      { q: 'Do you support GCSE and A level?', a: 'Yes, in computer science and maths, for understanding rather than promised grades.' },
      { q: 'How much will it cost?', a: 'Nothing for lesson one; afterwards USD 100 per month in a class or USD 150 per month with your own tutor.' },
      { q: 'Do lessons pause for holidays?', a: 'Yes, school holidays are skipped; send us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More east London pages',
    html: 'Each of these teaches something different: <a class="cg-inline-link" href="/coding-classes-in-redbridge-london">Redbridge</a> (finding a position from distances), <a class="cg-inline-link" href="/coding-classes-in-barking-and-dagenham-london">Barking and Dagenham</a>, <a class="cg-inline-link" href="/coding-classes-in-newham-london">Newham</a> and <a class="cg-inline-link" href="/best-coding-class-in-london">London</a>. Everywhere else is linked from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Ilford and Redbridge',
  footerPlaces: [
    { href: '/coding-classes-in-redbridge-london', label: 'Redbridge' },
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-ilf .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.2vw, 2.6rem); }
.cg-root.cg-ilf .cg-hero h1 { font-weight: 770; letter-spacing: -0.026em; line-height: 1.05; }
.cg-root.cg-ilf .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-ilf .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-ilf .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.02em; }
.cg-root.cg-ilf .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-ilf .cg-table td { font-variant-numeric: tabular-nums; font-family: var(--font-mono, monospace); font-size: 0.92rem; }
.cg-root.cg-ilf .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-ilf .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-ilf .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Redbridge (E09000026), London. England: national curriculum, GCSE and A level. Census 2021 usual residents by 2022 ward (Nomis NM_2021_1, TYPE153): Ilford Town 12,327; Clementswood 13,503; Loxford 15,123; Valentines 15,209. postcodes.io (Redbridge): Cranbrook, Loxford (IG1), Gants Hill, Newbury Park (IG2), Seven Kings, Goodmayes (IG3) suburban areas; Ilford settlement.',
    localProject: 'OS Code-Point Open 2026.3.0: 1,325 postcodes IG1 (913) + IG2 (412). Exact variance eastings 603,291.8, northings 1,277,505.9. Float32 one-pass 1,933,312 (+220.46%) and 1,433,600 (+12.22%); two-pass 603,293.0 / 1,277,506.1; Welford 603,046.9 (-0.0406%) / 1,277,274.8 (-0.0181%); float64 one-pass off 0.00005. Sector IG1 1 (220) one-pass float32 -98,304 vs 158,907.5. Lesson family: numerical stability, catastrophic cancellation, Welford.',
    requiredMentions: [
      '12,327',
      '13,503',
      '15,123',
      '1,325',
      'Gants Hill',
      'Cranbrook',
      'Newbury Park',
      'Seven Kings',
      'catastrophic cancellation',
      'Welford'
    ],
    sources: [
      { claim: 'Ordnance Survey Code-Point Open, dataset version 2026.3.0, Open Government Licence.', url: 'https://www.ordnancesurvey.co.uk/products/code-point-open' },
      { claim: 'ONS Census 2021 TS001 usual residents by 2022 ward, via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: suburban areas in Redbridge.', url: 'https://api.postcodes.io/places?q=Gants%20Hill' }
    ],
    rejectedClaims: [
      'A population for Ilford as a whole: no published figure for exactly that area; ward figures only, not summed.',
      'Town history or landmarks: not read from a source; not claimed.',
      'That a particular AI tool writes the unstable formula: described only as a possibility to test for.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
