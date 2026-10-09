'use strict';
// Nowra (cg- regional city page, Australia cluster Phase 7, row 168). Shaped page (online coding and Python): leads with
// teenagers and adults. Spine: if you double the amount of data, does your program take twice as long, four times as
// long, or almost no longer? Data: NSW Department of Education, NSW public schools master dataset (CSV, Creative
// Commons Attribution, data.nsw.gov.au, resource modified 2 October 2026), downloaded 7 October 2026. Measured by us on
// 9 October 2026 with Python 3.13.6 on one laptop (scratchpad au/r5/now_dbl.py): 2,210 school codes statewide, all
// unique; 30 rows with LGA 'Shoalhaven' (Primary School 23, Secondary School 5, Schools for Specific Purposes 2).
// Doubling experiment, every code in a random sample looked up once (seed 2026): comparisons for list membership
// 7,875 (n 125), 31,375 (250), 125,250 (500), 500,500 (1,000), 2,001,000 (2,000), each step x3.98 to x4.00; timed
// best of 7: list 0.18, 0.72, 2.95, 12.74, 53.32 ms; set 0.012, 0.024, 0.053, 0.095, 0.206 ms; ratios per doubling
// list x3.90, x4.12, x4.32, x4.18, set x2.05, x2.20, x1.78, x2.16 (timings vary between runs). Lesson family: the
// doubling experiment for empirical complexity, list vs set membership; screened free site-wide on 9 October 2026 and
// claimed by AU-R5. Enrolment, background and index columns in the file are never used.
// Place facts read raw on 8 October 2026: ABS Census 2021 QuickStats, Nowra - Bomaderry Significant Urban Area (1026),
// with New South Wales and Australia: 38,678 people; median age 39; 9,950 families; 15,983 private dwellings; 2.4 people
// per household; separate house 12,142 (86.1 percent; NSW 65.6; Australia 72.3); flat or apartment 384 (2.7; NSW 21.7);
// Professionals 2,597 (16.6; NSW 25.8; Australia 24.0); Technicians and Trades Workers 2,499 (16.0; NSW 11.9);
// Community and Personal Service Workers 2,640 (16.9; NSW 10.6); Bachelor Degree level and above 4,412 (14.1; NSW
// 27.8; Australia 26.3); aged 15 to 19: 2,257 (5.8); aged 20 to 24: 2,296 (5.9); industry: Defence 1,021 (6.5; NSW 0.6;
// Australia 0.7). NSW Department of Education calendars: 2026 Term 4 Tuesday 13 October to Thursday 17 December; 2027
// Term 2 Thursday 29 April to Friday 2 July. IANA tz: Australia/Sydney, daylight saving from the first Sunday in October
// to the first Sunday in April. Excluded by the cluster rules: income, rent, mortgage, ancestry, birthplace, language,
// religion, health.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'NOWRA', label: 'Nowra', blurb: 'Nowra, 2,210 NSW school codes, and a Python experiment that doubles the data to see what slows down.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-nowra',
  code: 'nwra',
  accent: '#2C6094',
  accentRationale: 'Nowra: a river slate blue (HSV saturation 0.70, value 0.58, hue 210), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims files, 6.4:1 on white and 5.1:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Nowra',
    eyebrow: 'Nowra and Bomaderry, New South Wales',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'New South Wales', href: '/coding-and-ai-classes-in-new-south-wales' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Nowra, New South Wales',
  title: 'Online Coding and Python Classes in Nowra',
  description: 'Live online Python and coding classes for Nowra and Bomaderry teens and adults: data, speed and real NSW open data. Small groups or one to one, first lesson free.',
  ogDescription: 'Python classes for Nowra teens and adults, with a project that doubles a list of NSW school codes and watches one approach slow down four times.',
  twitterDescription: 'Online Python and coding classes in Nowra, live, first lesson free.',
  ogImageCourse: 'python-programming-masterclass-zero-to-advanced-college',
  verifiedOn: '9 October 2026',
  courseSchema: {
    name: 'Live Online Python and Coding Classes for Nowra Learners',
    description: 'Level-matched online Python, data structures, program speed and data handling for teenagers and adults across Nowra, Bomaderry and the Shoalhaven, taught live in English.'
  },

  h1: 'Online coding and Python classes in Nowra',
  capsuleQ: 'Where does the best online Python learning start for someone in Nowra?',
  capsule: 'With a live teacher and projects on real data, so speed and correctness both get tested rather than assumed. The Nowra and Bomaderry urban area counted 38,678 residents in 2021. Classes happen live over video, privately or with a few classmates at the same level, and the first session costs nothing.',
  lead: 'NSW publishes a master file of its public schools, 2,210 of them, each with its own school code. Ask Python whether a code is on a list and it checks the list from the front, one item at a time. Ask the same question of a set and it jumps almost straight to the answer. Our Nowra learners time both on samples of 125, 250, 500, 1,000 and 2,000 codes, doubling each time. The list approach slows by about four times at every step; the set slows by about two, because the number of questions doubles too. By 2,000 codes the list takes 53 milliseconds and the set a fifth of one.',
  wa: 'Hello Modern Age Coders, I would like a free Python class for a learner in Nowra.',

  picks: {
    eyebrow: 'Python course picks for Nowra',
    h2: 'Four Python routes for Nowra teens and adults',
    intro: 'Choose by what you want Python for; the free lesson confirms the stage. No card details are asked for.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Lists, dictionaries and sets from the first weeks, with timing experiments on real files.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 14 to 18', note: 'Why one data structure beats another, measured rather than memorised.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University and adult', note: 'Hashing, complexity and profiling, the parts of Python that decide whether code scales.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'Adults moving into software', note: 'Big O made concrete with experiments, then interview-style problems.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Nowra in the Census',
      h2: 'An urban area of 38,678 on the Shoalhaven',
      intro: 'Census 2021 QuickStats for the Nowra and Bomaderry urban area, beside New South Wales and Australia where published.',
      body: [
        { kind: 'table', caption: 'Nowra and Bomaderry in the 2021 Census', head: ['Measure', 'Nowra and Bomaderry', 'New South Wales', 'Australia'], rows: [
          ['People counted', '38,678', 'Not given', 'Not given'],
          ['Median age', '39', 'Not given', 'Not given'],
          ['Families', '9,950', 'Not given', 'Not given'],
          ['Private dwellings', '15,983', 'Not given', 'Not given'],
          ['Separate houses among occupied homes', '12,142, or 86.1%', '65.6%', '72.3%'],
          ['Community and personal service workers', '2,640, or 16.9%', '10.6%', '11.5%'],
          ['Residents 15 and over with a bachelor degree or higher', '4,412, or 14.1%', '27.8%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A defence workforce', p: 'Defence was the largest single industry of employment, with 1,021 residents or 6.5% of workers, against 0.6% across New South Wales.' },
          { h3: 'Houses, not flats', p: 'Only 384 dwellings, 2.7%, were flats or apartments, compared with 21.7% statewide.' },
          { h3: 'Young adults', p: 'The urban area counted 2,257 people aged 15 to 19 and 2,296 aged 20 to 24.' }
        ] },
        { kind: 'p', text: 'The ABS slightly perturbs small census cells for privacy, so table parts need not add up to published totals. We print each figure as published and never construct a total ourselves.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'What happens to a program\'s speed when the data doubles?',
      intro: 'NSW public school codes from the Department of Education master file, looked up in a Python list and in a Python set.',
      body: [
        { kind: 'table', caption: 'Doubling experiment on one laptop, Python 3.13.6, 9 October 2026 (our measurement)', head: ['Codes in the sample', 'List comparisons', 'List time', 'Set time'], rows: [
          ['125', '7,875', '0.18 ms', '0.012 ms'],
          ['250', '31,375', '0.72 ms', '0.024 ms'],
          ['500', '125,250', '2.95 ms', '0.053 ms'],
          ['1,000', '500,500', '12.74 ms', '0.095 ms'],
          ['2,000', '2,001,000', '53.32 ms', '0.206 ms']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Double, then compare', p: 'Instead of guessing how code scales, run it at one size, double the input, run it again and divide the two times. The ratio tells you more than either time alone.' },
          { h3: '2. The list grows four times', p: 'Each lookup scans on average half the list, and there are twice as many lookups, so the work multiplies by close to four with each doubling: from 7,875 comparisons to 2,001,000.' },
          { h3: '3. The set grows two times', p: 'A set finds each code by its hash in roughly constant time, so doubling the questions roughly doubles the time and no more.' }
        ] },
        { kind: 'callout', h3: 'Why the exact times do not matter', p: 'Run the experiment again and the milliseconds change, because a laptop is never doing only one thing. The ratios hold steady: the list moved by 3.90, 4.12, 4.32 and 4.18 times across the four doublings, the set by 2.05, 2.20, 1.78 and 2.16. That is the point of a doubling experiment. It measures the shape of the growth, which survives noise, rather than a single speed, which does not.' },
        { kind: 'p', text: 'The Shoalhaven council area has 30 public schools in the file, 23 primary, 5 secondary and 2 schools for specific purposes. At that size the list is fast enough for anything a person would notice. The difference only shows when the data grows, which is exactly when a program written without the habit starts to hurt.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'Measuring code honestly',
      h2: 'Five rules for timing Python without fooling yourself',
      intro: 'Practised on the school codes, then used on any program a learner wants to speed up.',
      body: [
        { kind: 'table', caption: 'A fair timing experiment', head: ['Rule', 'How', 'What it prevents'], rows: [
          ['Repeat and take the minimum', 'timeit with several repeats', 'One slow run caused by the system'],
          ['Count operations as well', 'Comparisons counted in the code', 'Mistaking noise for a real change'],
          ['Double, do not just enlarge', 'Sizes 125, 250, 500 and so on', 'Ratios that cannot be read cleanly'],
          ['Fix the random sample', 'A seeded shuffle', 'Results nobody can reproduce'],
          ['Report the machine', 'Python version and device', 'Comparing numbers that are not comparable']
        ] },
        { kind: 'p', text: 'Counting comparisons is the steady half of the experiment: 2,001,000 at a sample of 2,000 is exact arithmetic, n times n plus one over two, and it will be the same on any computer. The milliseconds are the noisy half. Learners report both and explain why they disagree slightly.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Secondary students', p: 'Run the doubling table, plot the two curves and explain the factor of four in plain words.' },
          { h3: 'University students', p: 'Big O notation, hashing and profiling, tied to measurements rather than to definitions alone.' },
          { h3: 'Adults at work', p: 'Spot the list lookup inside a loop in a slow report script and replace it with a set or dictionary.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders is independent of the NSW Department of Education and the ABS. The school codes are the department\'s and the census figures the bureau\'s; every count and timing above is our own measurement.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Nowra',
      h2: 'Terms, summer time and lesson hours',
      intro: 'A few local details that affect when Nowra learners study.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Term 4 in 2026', p: 'The NSW Department of Education calendar runs Term 4 from Tuesday 13 October to Thursday 17 December 2026.' },
          { h3: 'Term 2 in 2027', p: 'Next year Term 2 runs from Thursday 29 April to Friday 2 July 2027, according to the same calendar.' },
          { h3: 'Clocks change twice', p: 'Daylight saving in NSW starts on the opening Sunday of October and ends on the opening Sunday of April, per the IANA zone file for Sydney.' }
        ] },
        { kind: 'spec', title: 'Lesson times stay in Nowra time', p: 'India does not change its clocks, so the gap is four and a half hours in winter and five and a half in summer. We fix lessons in Nowra time and our teachers absorb the shift.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first list to code that stays fast as data grows',
    intro: 'Ages are only a guide; the free lesson finds the real starting point.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Lists and loops', p: 'Storing codes in a list, searching it and counting how many checks a search makes.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Sets and timing', p: 'Sets, dictionaries and the doubling experiment on the full NSW file.', courses: ['python-complete-masterclass-teens', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'University', h3: 'Complexity', p: 'Big O, hashing, profiling and choosing structures by measurement.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Faster scripts at work', p: 'Finding and fixing the slow lookups hidden in everyday data scripts.', courses: ['data-analysis-mastery-course-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Will an AI assistant warn you that its working code gets slow?',
    intro: 'Rarely on its own, because code that is correct on a small test looks finished.',
    p1: 'Ask an assistant to check which school codes from one list appear in another and it often writes a loop with "if code in other_list". On 30 Shoalhaven schools that finishes instantly and passes every test. On larger files the same line multiplies its work by four each time the data doubles, and nothing in the code or the tests says so.',
    p2: 'Our Nowra learners run a doubling experiment on whatever an assistant writes before they rely on it. When the ratio comes out near four, they know to ask for a set or a dictionary, and they can explain why the suggestion is better.',
    closer: 'An assistant can write the faster version in a second, but a Nowra learner who has watched a list slow down fourfold knows to ask for it, and that judgement is learnt by writing code in 2026.',
    blogAnchor: 'whether learning to code still pays off in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Bomaderry to North Nowra, one Python class',
    intro: 'Both sides of the Shoalhaven River are the same distance from an online lesson.',
    cells: [
      { h3: 'From home, either bank', p: 'A learner in Bomaderry and another in North Nowra can share a live lesson without crossing the bridge.' },
      { h3: 'NSW year levels', p: 'Teachers use NSW stages and year levels, including the HSC years, and teach in English.' },
      { h3: 'The free trial', p: 'You write Python with a teacher, then hear a recommended stage, course and time; no card is requested.' },
      { h3: 'Five to ten per group', p: 'Learners at one level from Nowra, the rest of Australia and overseas, so every stage finds a slot.' },
      { h3: 'About eight lessons a month', p: 'Two sessions in most weeks; school breaks and exam periods are mapped out early with the teacher.' },
      { h3: 'The October change', p: 'A 4pm Nowra lesson is 11:30am in India through winter and 10:30am once NSW daylight saving begins.' }
    ],
    spec: { title: 'Times written for Nowra', p: 'Every lesson is booked and confirmed in Nowra time, so daylight saving never moves it for the family.' }
  },

  fees: {
    h2: 'What Python classes cost in Nowra',
    intro: 'Three figures cover it.',
    first: 'A free first lesson that ends with a stage, a course and a time.',
    group: 'A month of classes, usually eight, with five to ten learners at your level.',
    private: 'About eight private lessons a month with one teacher.',
    closer: 'Nowra families pay one rate in US dollars, the same in Bomaderry as in Sydney, with no local price list. Nothing is invoiced before the trial fixes a course and a weekly slot; school breaks, missed sessions and format changes are covered on the pricing page.'
  },

  reviewsH2: 'Google reviews in full: what learners and parents wrote',

  book: {
    h2: 'Tell us how much Python the learner knows',
    intro: 'We set a first task to match: building and searching a small list for a Year 8 beginner, the doubling experiment for a Year 11 student, or profiling a slow script for an adult.',
    success: 'Thank you. We will be in touch soon about a Python class in Nowra.'
  },

  faq: {
    h2: 'Nowra Python and coding questions',
    intro: 'What Nowra and Bomaderry families usually ask first.',
    items: [
      { q: 'How many people live in Nowra and Bomaderry?', a: 'The urban area counted 38,678 residents at the 2021 Census, with a median age of 39.' },
      { q: 'What is a doubling experiment in programming?', a: 'A doubling experiment runs a program at one input size, then at twice that size, and divides the two running times. A ratio near 2 suggests the work grows in line with the data; a ratio near 4 suggests it grows with the square of the data.' },
      { q: 'Why is a Python set faster than a list for lookups?', a: 'A list is checked item by item from the front, so a lookup can take as many steps as the list is long. A set stores items by their hash, so it can go almost directly to the right place whatever its size.' },
      { q: 'What is the Nowra school-codes project?', a: 'Learners take samples of 125 to 2,000 codes from the NSW public schools master file, look every code up in a list and in a set, and record comparisons and times. The list work rises about fourfold with each doubling and the set work about twofold.' },
      { q: 'Do HSC students join these classes?', a: 'Yes. HSC students fit weekly Python around their subjects, with breaks planned against NSW terms. Assessed school work stays entirely the student\'s own.' },
      { q: 'When do Nowra lessons run?', a: 'Weekday afternoons, evenings, Saturdays or Sundays, settled during the trial and set in Nowra time. India runs four and a half hours behind Nowra in winter and five and a half in summer.' },
      { q: 'Can younger children learn with you in Nowra?', a: 'They can, from six years old, normally beginning in Scratch with visual projects. Teen and adult learners are the focus here.' },
      { q: 'Is there a Modern Age Coders centre in Nowra?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Nowra coding classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with five to ten learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Five to ten learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore New South Wales',
    h2: 'More for Nowra and NSW learners',
    html: 'Up the coast there is <a class="cg-inline-link" href="/best-coding-classes-in-wollongong">a Wollongong coding classes page</a> and <a class="cg-inline-link" href="/best-coding-classes-in-sydney">coding classes in Sydney</a>. HSC students can read <a class="cg-inline-link" href="/hsc-software-engineering-help">HSC Software Engineering help</a>, while the whole-state overview lives at <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">coding and AI classes in New South Wales</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Nowra and New South Wales',
  footerPlaces: [
    { href: '/best-coding-classes-in-wollongong', label: 'Wollongong' },
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-nwra .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.9vw, 2.4rem); }
.cg-root.cg-nwra .cg-hero h1 { font-weight: 740; letter-spacing: -0.021em; line-height: 1.06; }
.cg-root.cg-nwra .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-nwra .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-nwra .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.013em; }
.cg-root.cg-nwra .cg-grid-3 { gap: clamp(0.95rem, 2vw, 1.8rem); }
.cg-root.cg-nwra .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-nwra .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-nwra .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.95rem; }
.cg-root.cg-nwra .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Nowra - Bomaderry Significant Urban Area, ABS Census 2021 QuickStats, area code 1026, with New South Wales and Australia (read 8 October 2026): 38,678 people; median age 39; 9,950 families; 15,983 private dwellings; 2.4 people per household; separate house 12,142 (86.1 percent; NSW 65.6; Australia 72.3); flat or apartment 384 (2.7 percent; NSW 21.7); Professionals 2,597 (16.6 percent; NSW 25.8); Technicians and Trades Workers 2,499 (16.0 percent; NSW 11.9); Community and Personal Service Workers 2,640 (16.9 percent; NSW 10.6; Australia 11.5); Bachelor Degree level and above 4,412 (14.1 percent; NSW 27.8; Australia 26.3); aged 15 to 19: 2,257 (5.8 percent); aged 20 to 24: 2,296 (5.9 percent); industry: Defence 1,021 (6.5 percent; NSW 0.6; Australia 0.7). NSW Department of Education calendars: 2026 Term 4 Tuesday 13 October to Thursday 17 December; 2027 Term 2 Thursday 29 April to Friday 2 July. IANA tz database: Australia/Sydney daylight saving first Sunday in October to first Sunday in April; Asia/Kolkata UTC+5:30.',
    localProject: 'Doubling experiment (empirical complexity), list vs set membership. NSW Department of Education, NSW public schools master dataset, CSV, Creative Commons Attribution, data.nsw.gov.au (resource modified 2 October 2026), downloaded 7 October 2026: 2,210 rows, 2,210 unique School_code values; LGA Shoalhaven 30 rows (Primary School 23, Secondary School 5, Schools for Specific Purposes 2). Random sample of codes (seed 2026), every sampled code looked up once in the list and in the set. Comparisons for list membership (position plus one, summed): n 125 7,875; 250 31,375; 500 125,250; 1,000 500,500; 2,000 2,001,000. Timing with timeit, best of 7, Python 3.13.6, one laptop, 9 October 2026: list 0.18, 0.72, 2.95, 12.74, 53.32 ms; set 0.012, 0.024, 0.053, 0.095, 0.206 ms; ratios per doubling list 3.90, 4.12, 4.32, 4.18; set 2.05, 2.20, 1.78, 2.16. Earlier runs gave list ratios 3.36 to 5.06 and set ratios 1.92 to 2.14. Enrolment, Indigenous, language-background and index columns never used.',
    requiredMentions: [
      '38,678',
      '9,950',
      '15,983',
      '12,142',
      '2,640',
      '4,412',
      '2,001,000',
      'Bomaderry to North Nowra',
      '53.32 ms'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Nowra - Bomaderry Significant Urban Area (1026): people, median age, families, dwellings, dwelling structure, occupation, education, age, industry.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/1026' },
      { claim: 'NSW Department of Education, NSW public schools master dataset, Creative Commons Attribution, on data.nsw.gov.au.', url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset' },
      { claim: 'NSW Department of Education school calendars: 2026 Term 4 and 2027 Term 2.', url: 'https://education.nsw.gov.au/schooling/calendars/2027' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney daylight saving rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Any statement about which NSW Department of Education division Nowra schools belong to for Term 1 start dates: not confirmed at source, so only terms that both divisions share are printed.',
      'Enrolment numbers, background percentages or index values from the schools file: excluded by the cluster rules and not used.',
      'Any timing claim beyond this one laptop and Python version: the milliseconds are labelled as one machine\'s measurement.',
      'OpenStreetMap data and Bureau of Meteorology observations: Overpass returned 406 and BOM 403 to this machine in October 2026; neither was circumvented.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with the NSW Department of Education or the ABS.'
    ]
  }
};
