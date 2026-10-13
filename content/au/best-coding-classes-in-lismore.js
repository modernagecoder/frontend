'use strict';
// Lismore (cg- city page, Australia cluster Phase 7, row 175). Shaped page: leads with teenagers and adults;
// younger learners are covered by the kids pages and the national hub.
// Spine: can a smooth formula fill the gaps between a few known points? Data: NSW Department of Education,
// "Master dataset: NSW government school locations and student enrolment numbers" (data.nsw.gov.au, Creative
// Commons Attribution), master_dataset.csv downloaded 7 October 2026, Date_extracted 2026-10-02. Rows with LGA
// "Lismore": 28 schools (22 Primary School, 3 Secondary School, 1 Central/Community School, 1 Environmental
// Education Centre, 1 Schools for Specific Purposes). Counting how many of today's 28 schools had recorded a first
// teacher by each year (our calculation, scratchpad au/r6/py/lis_lagrange.py): knots every 20 years from 1870 to
// 2010 are (1870, 2) (1890, 10) (1910, 15) (1930, 20) (1950, 22) (1970, 25) (1990, 28) (2010, 28). The 8-point
// Lagrange polynomial through them: largest error 5.70 at 1878 (estimate 7.70, true 2), mean error 1.00 over
// 1870 to 2010; straight lines between knots: largest error 3.40 at 1881 (estimate 6.40, true 3), mean 0.73. The
// polynomial falls in 13 of the 140 year steps although the true count can never fall. Outside the knots it
// estimates -22.92 for 1860 and 37.89 for 2020 (true 0 and 28). With 16 knots every 10 years from 1870 to 2020,
// it is worst at 2017: -76.4 against a true 28, an error of 104.4, and it falls in 38 of 150 year steps.
// Earliest Date_1st_teacher 1867-01-01 (Wyrallah Public School); latest 1978-09-01 (Wilson Park School).
// Lesson family: Lagrange polynomial interpolation versus piecewise linear interpolation, Runge's phenomenon;
// screened free site-wide on 9 October 2026 ("Lagrange", "Runge": 0 page hits; claimed by AU-R6).
// Place facts read raw on 9 October 2026: ABS Census 2021 QuickStats, Lismore Significant Urban Area (1018):
// 28,816 people; median age 42 (NSW 39, Australia 38); 7,238 families; 13,026 private dwellings; 2.3 people per
// household; separate house 8,939 (77.2%; NSW 65.6%; Australia 72.3%); semi-detached, row or terrace house,
// townhouse 1,668 (14.4%; NSW 11.7%); flat or apartment 737 (6.4%; NSW 21.7%); Professionals 2,563 (20.2%; NSW
// 25.8%); Technicians and Trades Workers 1,642 (12.9%); Bachelor Degree level and above 4,592 (19.2%; NSW
// 27.8%); aged 10 to 14 1,831 (6.4%); aged 15 to 19 1,768 (6.1%). NSW Department of Education, 2027 term dates,
// Eastern division: Term 1 Wednesday 3 February to Friday 9 April; Term 4 Tuesday 12 October to Monday 20
// December. IANA tz: Australia/Sydney daylight saving Sunday 4 October 2026 to Sunday 4 April 2027; Asia/Kolkata
// UTC+5:30.
// Excluded by the cluster rules: income, rent, mortgage, ancestry, birthplace, language, religion, health,
// disaster and flood material, and the dataset's ICSEA, Indigenous and LBOTE columns.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'LISMORE', label: 'Lismore', blurb: 'Lismore teens and adults, and a project on what happens when a smooth curve is forced through a few known points.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'best-coding-classes-in-lismore',
  code: 'lsm',
  accent: '#614910',
  accentRationale: 'Lismore: a dark river-silt olive (HSV saturation 0.84, value 0.38, hue 43), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, and 6.9:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Lismore',
    eyebrow: 'Lismore, New South Wales, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-australia', name: 'Australia' }, { slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Lismore, New South Wales',
  title: 'Best Coding Classes in Lismore | Live Online, First Lesson Free',
  description: 'Live online coding, Python and maths-in-code classes for Lismore teenagers and adults, with a real teacher, in small groups or one to one. The first lesson is free.',
  ogDescription: 'Coding classes for Lismore teens and adults, with a project that pushes a polynomial through school founding years and watches it bend out of shape.',
  twitterDescription: 'Lismore coding classes for teens and adults, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '9 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Numerical Methods Classes for Lismore Learners',
    description: 'Level-matched online Python, numerical methods, data handling and problem solving for teenagers and adults in Lismore and the Northern Rivers, taught live in English.'
  },

  h1: 'Coding classes in Lismore',
  capsuleQ: 'What are the best coding classes in Lismore?',
  capsule: 'Live lessons where a Lismore teenager or adult writes real Python with a teacher, moving from first programs into the mathematics that sits underneath code, using open data about the Northern Rivers. The 2021 Census counted 28,816 people in the Lismore urban area, with a median age of 42. Teaching happens live on camera, privately or in a level-matched group, and the opening lesson costs nothing.',
  lead: 'Here is a puzzle from the Lismore council area. Of the 28 public schools open today, how many already had a first teacher in 1880? The state\'s school file answers it exactly: three. Now pretend you only know the count every twenty years, and ask a polynomial to fill in the gaps. It says 8.31. Give it a reading every ten years instead, which sounds like better information, and for 2017 it predicts minus 76 schools. Our Lismore project builds that polynomial in Python and shows why adding more points can make a smooth curve worse, not better.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in Lismore.',

  picks: {
    eyebrow: 'Course picks for Lismore',
    h2: 'Four starting points for a Lismore learner',
    intro: 'Each course links to the interpolation project below. The free first lesson suggests which one fits, and you are not asked for card details.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from scratch, reading a real file and turning dates into counts within the first few weeks.' },
      { course: 'maths-through-coding', band: 'Ages 12 to 16', note: 'Algebra, functions and graphs explored by writing code, so a formula becomes something you can test.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University and adult', note: 'A complete Python course for adults who want to build and check their own tools.' },
      { course: 'data-analysis-mastery-course-college', band: 'University and adult', note: 'Cleaning, summarising and modelling public data so that estimates stay honest.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Lismore in the Census',
      h2: 'A river city with more houses and fewer flats than the state',
      intro: 'Numbers the statistics bureau published for the Lismore Significant Urban Area after the 2021 Census, set beside New South Wales and Australia.',
      body: [
        { kind: 'table', caption: 'Lismore urban area totals, 2021 Census QuickStats', head: ['Census item', 'Lismore'], rows: [
          ['Residents', '28,816'],
          ['Families', '7,238'],
          ['Private dwellings', '13,026'],
          ['Average people per household', '2.3']
        ] },
        { kind: 'table', mt: true, caption: 'Lismore shares compared with the state and the country', head: ['Measure', 'Lismore', 'NSW', 'Australia'], rows: [
          ['Median age in years', '42', '39', '38'],
          ['Separate houses, share of occupied homes', '77.2% (8,939 homes)', '65.6%', '72.3%'],
          ['Flats or apartments, share of occupied homes', '6.4% (737 homes)', '21.7%', '14.2%'],
          ['Bachelor degree or above, residents 15 and over', '19.2% (4,592 people)', '27.8%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Three years older', p: 'Lismore\'s median resident was 42 in 2021, three years older than the New South Wales median of 39.' },
          { h3: 'Townhouses too', p: '1,668 occupied homes, 14.4%, were semi-detached, terrace or townhouses, a little above the state share of 11.7%.' },
          { h3: 'Teenagers', p: 'The Census counted 1,831 residents aged 10 to 14 and 1,768 aged 15 to 19.' }
        ] },
        { kind: 'p', text: 'Why some rows do not add up: to stop anyone being identified, the bureau nudges each census cell by a small random amount. We therefore reproduce the published totals and percentages and never build our own total from the rows.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Can one smooth curve fill the gaps between known points?',
      intro: 'The NSW Department of Education records the date of each public school\'s first teacher. For the 28 schools in the Lismore council area we counted how many had begun by each year, kept only a few of those counts, and asked two methods to rebuild the rest.',
      body: [
        { kind: 'table', caption: 'Known points, one every 20 years: how many of today\'s schools had begun (our count from the department\'s file)', head: ['Year', 'Schools begun'], rows: [
          ['1870', '2'], ['1890', '10'], ['1910', '15'], ['1930', '20'], ['1950', '22'], ['1970', '25'], ['1990', '28'], ['2010', '28']
        ] },
        { kind: 'table', mt: true, caption: 'Rebuilding the years in between (our calculation)', head: ['Year', 'True count', 'Straight lines between points', 'One polynomial through all points'], rows: [
          ['1875', '2', '4.00', '6.33'],
          ['1880', '3', '6.00', '8.31'],
          ['1905', '12', '13.75', '13.46'],
          ['1935', '20', '20.50', '20.68'],
          ['1965', '25', '24.25', '24.03'],
          ['1995', '28', '28.00', '27.94']
        ] },
        { kind: 'table', mt: true, caption: 'How each method behaves across 1870 to 2010, and beyond it (our calculation)', head: ['Measure', 'Straight lines', 'Polynomial, 8 points', 'Polynomial, 16 points'], rows: [
          ['Largest error inside the range', '3.40 (1881)', '5.70 (1878)', '104.4 (2017)'],
          ['Average error inside the range', '0.73', '1.00', 'larger near both ends'],
          ['Years where the estimate goes down', '0', '13', '38'],
          ['Estimate for 2020 (true 28)', 'not defined beyond the last point', '37.89', 'inside the range: 2017 gives -76.4']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Count', p: 'Read each school\'s first-teacher date, keep the year, and for any year count the schools that had begun by then. The count only ever rises.' },
          { h3: '2. Interpolate', p: 'Write Lagrange\'s formula in Python: one polynomial that passes exactly through every known point. Then write the plain version, a straight line between neighbours.' },
          { h3: '3. Compare', p: 'Check both against the true count for every year. The polynomial matches the known points perfectly and drifts badly between and beyond them.' }
        ] },
        { kind: 'callout', h3: 'More points, worse curve', p: 'With eight evenly spaced points the polynomial overshoots near the start, predicting 8.31 schools in 1880 when there were 3. With sixteen points, one every ten years, the wobble near the ends becomes enormous and the curve swings below zero. Mathematicians call this Runge\'s phenomenon. It is the reason careful programmers fit simple pieces between neighbours, or use a low-degree curve, rather than one high-degree polynomial through everything.' },
        { kind: 'p', text: 'Every figure in this section is our own calculation from the department\'s open file, counting today\'s 28 schools by their recorded first-teacher dates. It is not a history of every school that ever operated in the area, and it says nothing about any school\'s size, results or quality.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Thinking about estimates',
      h2: 'What the Lismore curve teaches about every model',
      intro: 'Filling gaps between known values is one of the most common jobs in computing, from graphics to machine learning. The same small project raises the big questions.',
      body: [
        { kind: 'table', caption: 'Questions that grow out of the interpolation project', head: ['Question', 'What the code shows', 'Where it matters'], rows: [
          ['Is fitting the data the same as being right?', 'The polynomial hits all 8 points and still errs by 5.70', 'Overfitting in machine learning'],
          ['Should the estimate respect known rules?', 'A count cannot fall, yet the curve does in 13 years', 'Constraints in models'],
          ['Is more data always better?', '16 points made the worst error 104.4', 'Choosing model complexity'],
          ['Can a model forecast past its data?', '2020 comes out at 37.89 against 28', 'Extrapolation risk']
        ] },
        { kind: 'p', text: 'Lagrange\'s formula is short enough for a Year 10 student to code, and its behaviour is a vivid first look at a lesson that runs right through artificial intelligence: a model that matches its training points perfectly can be badly wrong everywhere else. Seeing a count of schools go negative makes the idea stick in a way no definition does.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Build the counting function and both interpolators, graph them, and find the years where they disagree most.' },
          { h3: 'University students', p: 'Chebyshev points, splines, error bounds and why the choice of where to sample matters as much as how many samples.' },
          { h3: 'Adults', p: 'Practical estimation from sparse records, with checks that catch an estimate that breaks an obvious rule.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no link with the NSW Department of Education, Lismore City Council or the Australian Bureau of Statistics. The department publishes the school file and the bureau publishes the population figures; the counts, curves and errors on this page come from our own code.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Lismore',
      h2: 'Schools from 1867 to 1978 in one council area',
      intro: 'Further details drawn from the department\'s list and the 2027 NSW calendar.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The earliest date', p: 'Wyrallah Public School records a first teacher in January 1867, the earliest date among the 28 schools in the file.' },
          { h3: 'The most recent', p: 'The latest first-teacher date in the Lismore list is September 1978, so every school in today\'s list has been running for well over forty years.' },
          { h3: 'Terms in 2027', p: 'In 2027 the Eastern division calendar opens Term 1 for students on Wednesday 3 February and closes Term 4 on Monday 20 December.' }
        ] },
        { kind: 'spec', title: 'A busy decade in the data', p: 'Nine of the 28 schools have first-teacher dates between 1882 and 1891, the steepest stretch of the count. Steep stretches like that are exactly where a single polynomial strains hardest to follow the data, which is why the 1880s show its biggest errors.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting dates to judging a model',
    intro: 'Ages are a rough guide; the free trial lesson finds the real starting point.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Data into numbers', p: 'Python that reads dates from a file, counts by year and draws a simple graph of the result.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Functions and fitting', p: 'Interpolation, polynomials and error measurement, coded by hand and checked against the true values.', courses: ['problem-solving-dsa-masterclass-teens', 'ai-ml-masterclass-teens'] },
      { band: 'University', h3: 'Numerical methods', p: 'Splines, conditioning and the cost of high-degree fits, with Python as the laboratory.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Honest estimates', p: 'Filling gaps in work data and reporting how far an estimate can be trusted.', courses: ['data-analysis-mastery-course-college', 'mysql-database-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can fit a curve in a second. Why should a Lismore learner code one?',
    intro: 'Because the curve that fits every point can still be the wrong answer, and only someone who has watched it happen knows to check.',
    p1: 'Ask an assistant to interpolate a handful of values and it may well reach for a single polynomial, because the formula is tidy and the result passes through every number you gave it. What it will not volunteer is that the curve can swing to impossible values between and beyond those points, as ours did when it predicted minus 76 schools.',
    p2: 'Learners who have coded Lagrange\'s formula on the Lismore file ask better questions of any model: does it break a rule the real data obeys, does it get worse when given more points, is it being asked to forecast beyond what it has seen? Those habits matter far more than the speed of the fitting.',
    closer: 'In 2026 the fitting is free, and the value is in a Lismore learner who can tell a good fit from a curve that only looks good at the points it was given.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Goonellabah to Nimbin, one live class',
    intro: 'The schools in our project spread across the city and its surrounding villages, and an online lesson reaches all of them in the same way.',
    cells: [
      { h3: 'City and villages', p: 'A learner in Goonellabah and one in a hill village can share a lesson without either making the drive into town.' },
      { h3: 'NSW stages, taught in English', p: 'Lessons follow NSW stages, from Stage 4 in Year 7 to the HSC years, and pause for the state\'s term breaks. Senior students can link projects to their computing and maths subjects.' },
      { h3: 'A real first lesson', p: 'The free trial is a normal class, not a sales call. Afterwards you receive a recommended level, course and weekly time, and nobody asks for a card.' },
      { h3: 'Matched groups', p: 'Groups hold five to ten people working at one stage, drawn from Lismore and other towns, which keeps every class properly filled.' },
      { h3: 'Twice a week', p: 'Two lessons each week at a fixed hour, about eight a month, pausing for school holidays and exam periods by arrangement.' },
      { h3: 'A teacher in India', p: 'A 6pm Lismore lesson in July begins at 1:30pm India time; after NSW clocks go forward in October, the same lesson begins at 12:30pm there.' }
    ],
    spec: { title: 'Daylight saving in the Northern Rivers', p: 'New South Wales starts daylight saving on Sunday 4 October 2026 and ends it on Sunday 4 April 2027, while India keeps the same time all year. The gap to our teachers therefore grows by an hour in summer, and every lesson is booked and quoted in Lismore time.' }
  },

  fees: {
    h2: 'What classes cost in Lismore',
    intro: 'Three figures, with nothing left out.',
    first: 'A complete lesson free, ending with a suggested level, course and lesson time.',
    group: 'A month of lessons, usually eight, shared with fifteen to twenty learners at the same level.',
    private: 'About eight lessons a month on the same pattern, one teacher and one learner.',
    closer: 'Outside India every invoice is in US dollars, so a family in Goonellabah and one in South Lismore pay the same amount and there is no separate Lismore price. Nothing is charged until the trial has settled a course and a time; the pricing page explains breaks, missed lessons and switching formats.'
  },

  reviewsH2: 'What families say about us on Google',

  book: {
    h2: 'Tell us what the learner wants to make',
    intro: 'An age and an interest are enough to start. A Year 9 student might begin by turning a column of dates into a graph; an adult might go straight to the full interpolation project.',
    success: 'Thank you. Our team will contact you shortly about a Lismore class.'
  },

  faq: {
    h2: 'Lismore coding class questions',
    intro: 'What Lismore learners and parents most often ask first.',
    items: [
      { q: 'How many people live in the Lismore urban area?', a: 'The bureau\'s 2021 count for the Lismore Significant Urban Area is 28,816 residents. Their median age was 42; for the whole state it was 39.' },
      { q: 'What is Lagrange interpolation?', a: 'It is a formula that builds the single polynomial passing exactly through a set of known points, so you can estimate values in between. It is exact at the points themselves but can swing wildly between them when there are many points, an effect called Runge\'s phenomenon.' },
      { q: 'What is the Lismore schools project?', a: 'Learners count how many of the 28 public schools in the Lismore council area had a first teacher by each year, keep a few of those counts, and rebuild the rest with straight lines and with one polynomial. The polynomial errs by up to 5.70 with eight points and by 104.4 with sixteen.' },
      { q: 'Does the project say anything about the schools themselves?', a: 'No. It only uses the first-teacher dates in the department\'s open file to study a mathematical method. Nothing on this page comments on any school\'s results, size or quality.' },
      { q: 'Do you help HSC maths and computing students?', a: 'Yes. Year 11 and 12 learners taking computing or maths get lessons planned around the NSW stage they are in and the four-term year. Any work a school marks must be the student\'s own; we teach the method and never write assessed work.' },
      { q: 'What time are lessons for Lismore learners?', a: 'Lesson times are agreed during the free trial and written in Lismore time, usually late afternoon or a weekend morning. From April to early October Lismore sits 4.5 hours ahead of India; from the first Sunday in October it sits 5.5 hours ahead.' },
      { q: 'Can younger children join?', a: 'Yes, from age six. Younger children start with Scratch blocks and drawing programs before typing code; the project on this page is aimed at older students.' },
      { q: 'Is there a Modern Age Coders centre in Lismore?', a: 'No, and none is claimed. All lessons are live and online and we have no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection; the contact number shown is Indian.', boiler: true },
      { q: 'What do Lismore coding classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before any payment.', boiler: true },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners, grouped by level, pace and goals rather than age or suburb. When no group fits the time a learner needs, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Lismore and New South Wales learners',
    html: 'Senior students will find course help on <a class="cg-inline-link" href="/hsc-maths-advanced-tutoring">HSC Mathematics Advanced tutoring</a> and <a class="cg-inline-link" href="/hsc-software-engineering-help">HSC Software Engineering help</a>. Families comparing options across the state can start from <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">our New South Wales page</a>, and every other Australian guide is listed on the <a class="cg-inline-link" href="/coding-classes-in-australia">national page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Lismore and Australia',
  footerPlaces: [
    { href: '/online-coding-and-python-classes-in-ballina', label: 'Ballina' },
    { href: '/best-coding-classes-in-coffs-harbour', label: 'Coffs Harbour' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-lsm .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.4rem); }
.cg-root.cg-lsm .cg-hero h1 { font-weight: 760; letter-spacing: -0.018em; line-height: 1.08; }
.cg-root.cg-lsm .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-lsm .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-lsm .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.01em; }
.cg-root.cg-lsm .cg-grid-3 { gap: clamp(0.9rem, 2.2vw, 1.8rem); }
.cg-root.cg-lsm .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-lsm .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lsm .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-lsm .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Lismore, ABS Census 2021 QuickStats, Significant Urban Area 1018 (read 9 October 2026): 28,816 people; median age 42 (New South Wales 39, Australia 38); 7,238 families; 13,026 private dwellings; average 2.3 people per household; dwelling structure, occupied private dwellings: separate house 8,939 (77.2 percent; NSW 65.6; Australia 72.3), semi-detached, row or terrace house, townhouse 1,668 (14.4 percent; NSW 11.7), flat or apartment 737 (6.4 percent; NSW 21.7; Australia 14.2); occupation, employed people aged 15 and over: Professionals 2,563 (20.2 percent; NSW 25.8), Technicians and Trades Workers 1,642 (12.9 percent); highest educational attainment, people aged 15 and over: Bachelor Degree level and above 4,592 (19.2 percent; NSW 27.8; Australia 26.3); aged 10 to 14 1,831 (6.4 percent); aged 15 to 19 1,768 (6.1 percent). NSW Department of Education, 2027 term dates, Eastern division: Term 1 Wednesday 3 February to Friday 9 April; Term 2 Thursday 29 April to Friday 2 July; Term 3 Tuesday 20 July to Friday 24 September; Term 4 Tuesday 12 October to Monday 20 December. IANA tz database: Australia/Sydney, daylight saving Sunday 4 October 2026 to Sunday 4 April 2027; Asia/Kolkata UTC+5:30.',
    localProject: 'Lagrange polynomial interpolation versus piecewise linear interpolation (Runge\'s phenomenon). NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (data.nsw.gov.au, Creative Commons Attribution), master_dataset.csv downloaded 7 October 2026, Date_extracted 2026-10-02. Rows with LGA = Lismore: 28 (Primary School 22, Secondary School 3, Central/Community School 1, Environmental Education Centre 1, Schools for Specific Purposes 1). Count of schools with Date_1st_teacher year <= Y. Knots every 20 years 1870 to 2010: 2, 10, 15, 20, 22, 25, 28, 28. Lagrange polynomial (exact rational arithmetic, Python fractions) over every year 1870 to 2010: maximum absolute error 5.70 at 1878 (estimate 7.70, true 2), mean 1.00, estimate falls in 13 of 140 year steps; piecewise linear: maximum 3.40 at 1881 (estimate 6.40, true 3), mean 0.73. Selected years (true, linear, Lagrange): 1875 (2, 4.00, 6.33), 1880 (3, 6.00, 8.31), 1905 (12, 13.75, 13.46), 1935 (20, 20.50, 20.68), 1965 (25, 24.25, 24.03), 1995 (28, 28.00, 27.94). Extrapolation: 1860 -22.92 (true 0), 2020 37.89 (true 28). Knots every 10 years 1870 to 2020 (16 knots): maximum error 104.4 at 2017 (estimate -76.4, true 28), falls in 38 of 150 year steps. Earliest Date_1st_teacher 1867-01-01 Wyrallah Public School; latest 1978-09-01 Wilson Park School; nine first-teacher dates between 1882 and 1891. Lesson family distinct from curve fitting by least squares, splines and interval methods used elsewhere on the site.',
    requiredMentions: [
      '28,816',
      '1,831 residents aged 10 to 14',
      '13,026',
      '4,592',
      '737 homes',
      'Wyrallah Public School',
      '-76.4',
      '8.31 schools in 1880',
      'Runge\'s phenomenon'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Lismore Significant Urban Area (1018): people, median age, families, private dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/1018' },
      { claim: 'NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (Creative Commons Attribution).', url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset' },
      { claim: 'NSW Department of Education, 2027 term dates, Eastern division.', url: 'https://education.nsw.gov.au/schooling/calendars/2027' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Any history of schools that have closed: the department\'s file lists only schools operating today, so the counts describe today\'s 28 schools, not every school that ever existed.',
      'Flood or disaster history of Lismore: excluded by the cluster rules and not used.',
      'Southern Cross University facts: not needed for the project and not verified at source.',
      'Enrolment, ICSEA, Indigenous and LBOTE figures from the master dataset: excluded by the cluster rules or not needed.',
      'Bureau of Meteorology station facts: the Bureau\'s pages returned 403 and were not used.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with the NSW Department of Education, Lismore City Council or the ABS.'
    ]
  }
};
