'use strict';
// Wagga Wagga (cg- city page, Australia cluster Phase 7, row 155). Shaped page: leads with teenagers and
// adults.
// Spine: how many bars should a histogram have? Data: NSW Department of Education, "Master dataset: NSW
// government school locations and student enrolment numbers" (data.nsw.gov.au, Creative Commons Attribution),
// master_dataset.csv downloaded 7 October 2026, Date_extracted 2026-10-02. Rows with LGA "Wagga Wagga": 24
// schools (Primary School 17, Secondary School 3, Schools for Specific Purposes 3, Environmental Education
// Centre 1). Date_1st_teacher converted to decimal years (our calculation, scratchpad au/r3/wgw_bins.py): earliest
// 1861-01-01 Wagga Wagga Public School, latest 2021-01-27 Estella Public School, range 160.07 years. Sturges'
// rule: 1 + log2(24) = 5.58, so 6 bins of 26.68 years with counts 8, 2, 0, 7, 5, 2 (the 1914 to 1941 bin is
// empty). Freedman-Diaconis rule: quartiles (Python statistics.quantiles, inclusive method) 1880.62 and 1970.75,
// IQR 90.13 years, bin width 2 x IQR / 24^(1/3) = 62.49 years, 2.56 bins rounded up to 3, counts 10, 7, 7.
// Decades with no current school's first teacher: 1900s, 1920s, 1930s, 1940s, 1990s, 2010s. Wagga Wagga High
// School 1912-01-01; Riverina Environmental Education Centre 1989-05-02. Lesson family: histogram bin-count
// rules (Sturges versus Freedman-Diaconis); screened free site-wide on 7 October 2026 ("Sturges",
// "Freedman-Diaconis": 0 page hits; claimed by AU-R3).
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Wagga Wagga Significant Urban Area (1035):
// 57,003 people; median age 36 (NSW 39, Australia 38); 14,576 families; 24,251 private dwellings; 2.5 people per
// household; separate house 17,960 (83.9%; NSW 65.6%; Australia 72.3%); Technicians and Trades Workers 3,975
// (14.4%; NSW 11.9%; Australia 12.9%); Professionals 5,876 (21.3%; NSW 25.8%); Bachelor Degree level and above
// 8,931 (19.6%; NSW 27.8%; Australia 26.3%); aged 15 to 19 3,785 (6.6%; NSW 5.7%). NSW Department of Education,
// 2027 term dates, Eastern division: Term 2 Thursday 29 April to Friday 2 July; Term 3 Tuesday 20 July to Friday
// 24 September. IANA tz: Australia/Sydney daylight saving 4 October 2026 to 4 April 2027.
// Excluded by the cluster rules: income, rent, mortgage, ancestry, birthplace, language, religion, health, and
// the dataset's ICSEA, Indigenous and LBOTE columns.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'WAGGA WAGGA', label: 'Wagga Wagga', blurb: 'Coding for Wagga Wagga teens and adults, and two histogram rules that tell different stories about when its schools opened.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'best-coding-classes-in-wagga-wagga',
  code: 'wgw',
  accent: '#7A3C44',
  accentRationale: 'Wagga Wagga: a dusty Riverina red-brown (HSV saturation 0.51, value 0.48, hue 352), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, 8.2:1 on white and 6.7:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Wagga Wagga',
    eyebrow: 'Wagga Wagga, New South Wales, Australia',
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
  routeLabel: 'Wagga Wagga, New South Wales',
  title: 'Best Coding Classes in Wagga Wagga | Live Online Lessons',
  description: 'Live online coding, Python and data classes for Wagga Wagga teenagers and adults, with a real teacher in small groups or one to one. Your first lesson is free.',
  ogDescription: 'Coding classes for Wagga Wagga teens and adults, with a data project in which two histogram rules disagree about when the city\'s schools opened.',
  twitterDescription: 'Wagga Wagga coding classes for teens and adults, live online, first lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Data Classes for Wagga Wagga Learners',
    description: 'Level-matched online Python, statistics in code and data visualisation for teenagers and adults across Wagga Wagga and the Riverina, taught live in English.'
  },

  h1: 'Coding classes in Wagga Wagga',
  capsuleQ: 'What are the best coding classes in Wagga Wagga?',
  capsule: 'Classes in which a Wagga Wagga teenager or adult writes working code with a teacher each week, using real Riverina data, instead of following pre-recorded videos. The 2021 Census counted 57,003 people in the Wagga Wagga urban area, with a median age of 36. We teach live over video, one to one or with a small group at the same level, and the first lesson is free.',
  lead: 'Wagga Wagga Public School had its first teacher in 1861; Estella Public School opened in 2021. Draw a histogram of when the 24 public schools in the council area began and you have to decide how many bars to use. Sturges\' rule says six, and the picture shows two waves of building with an empty gap from 1914 to 1941. The Freedman-Diaconis rule says three, and the gap vanishes. Same data, same code, two different stories. Our Wagga Wagga project teaches learners to compute both rules in Python and to notice when a chart\'s design is quietly making a claim.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in Wagga Wagga.',

  picks: {
    eyebrow: 'Course picks for Wagga Wagga',
    h2: 'Where a Wagga Wagga learner could begin',
    intro: 'These courses lead into the histogram project. The free first lesson decides the fit, and we never ask for a card.',
    items: [
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Python for data: reading files, drawing charts and asking whether a chart tells the truth.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'A steady Python foundation, from the first variable to programs that read real public data.' },
      { course: 'data-analysis-mastery-course-college', band: 'University and adult', note: 'Cleaning, summarising and charting data responsibly, with the statistics explained along the way.' },
      { course: 'data-science-complete-masterclass-college', band: 'University and adult', note: 'A complete data science pathway, from distributions to models, built on Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Wagga Wagga in the Census',
      h2: 'A younger regional city with a strong trades base',
      intro: 'Published results for the Wagga Wagga Significant Urban Area from the 2021 Census, set beside New South Wales and Australia.',
      body: [
        { kind: 'table', caption: 'Wagga Wagga urban area totals, 2021 Census QuickStats', head: ['Census figure', 'Wagga Wagga'], rows: [
          ['Residents', '57,003'],
          ['Families', '14,576'],
          ['Private dwellings', '24,251'],
          ['Average household', '2.5 people']
        ] },
        { kind: 'table', mt: true, caption: 'Selected shares, Wagga Wagga against New South Wales and Australia', head: ['Measure', 'Wagga Wagga', 'NSW', 'Australia'], rows: [
          ['Median age', '36', '39', '38'],
          ['Separate houses among occupied homes', '83.9% (17,960)', '65.6%', '72.3%'],
          ['Technicians and trades workers among employed residents', '14.4% (3,975)', '11.9%', '12.9%'],
          ['Bachelor degree or above, residents 15 and over', '19.6% (8,931)', '27.8%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger than the state', p: 'Wagga Wagga\'s median age of 36 sits three years under the New South Wales median and two under Australia\'s.' },
          { h3: 'Trades', p: 'Technicians and trades workers made up 14.4% of employed residents, a larger share than in the state or the country.' },
          { h3: 'Older teenagers', p: '3,785 residents were aged 15 to 19, 6.6% of the urban area against 5.7% for New South Wales.' }
        ] },
        { kind: 'p', text: 'One rule for census tables: the bureau introduces small random changes to each cell for confidentiality, so the parts of a table can differ slightly from its total. We report published totals and percentages exactly, and never add rows together to make a total of our own.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How many bars should the Wagga Wagga schools histogram have?',
      intro: 'The NSW Department of Education\'s open school file records when each school had its first teacher. We turned the 24 dates for the Wagga Wagga council area into years and applied two standard rules for choosing histogram bins.',
      body: [
        { kind: 'table', caption: 'Two rules, two answers (our calculation)', head: ['Rule', 'How it works', 'Bins for 24 schools', 'Bin width'], rows: [
          ['Sturges', '1 + log2(n), rounded up', '6', '26.68 years'],
          ['Freedman-Diaconis', 'Width = 2 x IQR / cube root of n', '3', '62.49 years from the rule, 53.36 once rounded to 3 bins']
        ] },
        { kind: 'table', mt: true, caption: 'Schools per bin under Sturges\' rule (first-teacher dates, our count)', head: ['From', 'To', 'Schools'], rows: [
          ['1861.0', '1887.7', '8'],
          ['1887.7', '1914.4', '2'],
          ['1914.4', '1941.0', '0'],
          ['1941.0', '1967.7', '7'],
          ['1967.7', '1994.4', '5'],
          ['1994.4', '2021.1', '2']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Dates to numbers', p: 'Convert each date such as 1953-06-01 into a decimal year, so the earliest is 1861.0 and the latest 2021.07. The range is 160.07 years.' },
          { h3: '2. Apply both rules', p: 'Sturges uses only the count: 1 + log2(24) is 5.58, so six bins. Freedman-Diaconis uses the spread of the middle half: an interquartile range of 90.13 years gives three.' },
          { h3: '3. Compare the pictures', p: 'Six bins show an empty stretch from 1914 to 1941 and a second wave after the war. Three bins report 10, 7 and 7 schools, and the empty stretch disappears inside a wide bar.' }
        ] },
        { kind: 'callout', h3: 'A chart\'s design is a claim', p: 'Neither rule is wrong. Sturges was derived with roughly bell-shaped data in mind and is known to give too few bins for large datasets; Freedman-Diaconis adapts to the spread of the data, but with few values its bins come out wide. With only 24 dates, the choice changes what a reader concludes. Good analysts show more than one view, say which rule they used, and check whether a striking feature survives a change of bins.' },
        { kind: 'p', text: 'The file lists schools operating today, so schools that closed are missing and the histogram describes survivors, not every school ever opened. Quartiles depend on the method used; we used Python\'s inclusive method and say so. All counts are ours, from the file extracted on 2 October 2026; nothing here judges any school.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Charts that tell the truth',
      h2: 'Habits for honest charts, learned on Wagga Wagga data',
      intro: 'The histogram question opens up a set of skills every data learner needs.',
      body: [
        { kind: 'table', caption: 'Chart checks to make routine', head: ['Check', 'In the Wagga Wagga project', 'Why it matters'], rows: [
          ['Try more than one bin rule', 'Sturges gives 6 bars, Freedman-Diaconis 3', 'Features can appear or vanish'],
          ['State the method', 'Inclusive quartiles, decimal years', 'Others can reproduce the result'],
          ['Ask what is missing', 'Closed schools are not in the file', 'A chart of survivors misleads'],
          ['Look at the raw values', 'Every one of the 24 dates', 'Small datasets deserve a full listing'],
          ['Try a simpler grouping', 'Counts by decade', 'A familiar unit can be clearer than a formula']
        ] },
        { kind: 'p', text: 'Counting by decade gives its own picture: six decades, from the 1900s to the 2010s, have no current school\'s first teacher, while the 1950s alone account for four. Learners write each grouping in a few lines of Python and then argue, with evidence, about which chart they would publish.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Draw histograms by hand first, then code them, and watch the shape change as the bin count changes.' },
          { h3: 'University students', p: 'Bin-width rules, kernel density estimates and the statistics behind each choice.' },
          { h3: 'Adults', p: 'Charts for reports and meetings that are clear, reproducible and hard to misread.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders is not affiliated with the NSW Department of Education, Wagga Wagga City Council or the Australian Bureau of Statistics. They publish the figures; our code produced every histogram, quartile and count on this page.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Wagga Wagga',
      h2: 'A school from 1861 and an education centre by the river country',
      intro: 'More details from the same open file and from the NSW calendar.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The oldest date', p: 'Wagga Wagga Public School records its first teacher on 1 January 1861, the earliest date among the 24 schools in the council area.' },
          { h3: 'A high school from 1912', p: 'Wagga Wagga High School\'s first-teacher date is 1 January 1912, the only date in the file between 1892 and 1953.' },
          { h3: 'Mid-year terms in 2027', p: 'NSW Eastern division schools run Term 2 from Thursday 29 April to Friday 2 July 2027 and Term 3 from Tuesday 20 July to Friday 24 September.' }
        ] },
        { kind: 'spec', title: 'Why a date column suits a first statistics project', p: 'Dates are familiar, easy to check and full of small traps: text that must be parsed, leap years, and the question of whether 1 January really means a school opened on New Year\'s Day or simply that only the year was recorded. Each trap teaches care with data before any formula appears.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From drawing a bar chart to reasoning about data',
    intro: 'Ages are only a rough guide; the free trial sets the real start.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Counting and charts', p: 'Python that reads a short file, counts values and draws simple bar charts and histograms.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Statistics in code', p: 'Quartiles, spread and bin rules, computed by hand and in Python on real NSW data.', courses: ['data-science-course-for-teens-python-data', 'statistics-probability-maths-course'] },
      { band: 'University', h3: 'Distributions and models', p: 'Density estimation, sampling and modelling, with careful attention to what the data leaves out.', courses: ['data-science-complete-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] },
      { band: 'Adults', h3: 'Reporting with data', p: 'Clear, honest charts and summaries for the decisions a workplace has to make.', courses: ['data-analysis-mastery-course-college', 'mysql-database-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can draw a histogram instantly. Why should a Wagga Wagga learner question it?',
    intro: 'Because the tool picks the number of bars for you, and that choice can create or hide a pattern.',
    p1: 'Ask an AI assistant to chart when Wagga Wagga\'s schools opened and it will produce a tidy histogram in seconds, usually with a default number of bins chosen by its plotting library. Nothing on the chart tells you that a different, equally standard choice would remove the empty years between 1914 and 1941, or that schools which have closed are missing from the data altogether.',
    p2: 'Learners who have computed Sturges\' and Freedman-Diaconis\' rules themselves read every generated chart with the right questions: how many bins, chosen how, from which data, and what is not there. They use AI to make charts faster, and their own judgement to decide which chart is fair.',
    closer: 'In 2026 charts cost nothing to make, and a Wagga Wagga learner who knows how a histogram can mislead is the one people trust to present the numbers.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Kooringal, Lake Albert or Tarcutta, the same class',
    intro: 'The council area reaches well beyond the city into small towns, and an online lesson treats every one of them the same.',
    cells: [
      { h3: 'City and villages', p: 'A learner in Lake Albert and one in Uranquinty share the same lesson, with no drive into town needed.' },
      { h3: 'Built around NSW', p: 'Lessons use the NSW stages and pause with the state\'s terms; older students can tie a data project to senior computing or maths. Classes are taught in English.' },
      { h3: 'Start with a proper class', p: 'The trial is a normal lesson that ends with a suggested level, course and weekly time; we never take card details at that point.' },
      { h3: 'Level-matched groups', p: 'Fifteen to twenty learners at the same stage, from Wagga Wagga and other towns, so groups run at a workable size.' },
      { h3: 'Same slots each week', p: 'Two lessons a week at fixed times, about eight a month, with holiday and exam gaps agreed together.' },
      { h3: 'Teachers in India', p: 'A 6:30pm Wagga Wagga lesson in July begins at 2pm in India, and at 1pm once daylight saving starts in October.' }
    ],
    spec: { title: 'Two clock changes a year', p: 'New South Wales moves to daylight saving on Sunday 4 October 2026 and back on Sunday 4 April 2027, while India does not change. Lesson times are always set and confirmed in Wagga Wagga time.' }
  },

  fees: {
    h2: 'Wagga Wagga class fees',
    intro: 'Three prices, plainly put.',
    first: 'A free first lesson, ending with a suggested level, course and time.',
    group: 'A month of lessons, typically eight, with fifteen to twenty learners at your level.',
    private: 'About eight lessons a month on the same schedule, one to one with a teacher.',
    closer: 'Fees outside India are charged in US dollars, so a household in Bourkelands pays what one in Estella pays and there is no regional price. The first invoice follows the trial, once a course and time are agreed, and the pricing page answers questions about breaks, absences and format changes.'
  },

  reviewsH2: 'Google reviews from our families',

  book: {
    h2: 'Book a first lesson for a Wagga Wagga learner',
    intro: 'Tell us an age and a favourite subject. A Year 9 student might start with a hand-drawn histogram; an adult could begin with both bin rules in Python.',
    success: 'Thanks. Our team will be in touch soon about a Wagga Wagga class.'
  },

  faq: {
    h2: 'Wagga Wagga coding class questions',
    intro: 'What Wagga Wagga families and learners usually want to know.',
    items: [
      { q: 'How many people live in the Wagga Wagga urban area?', a: 'The 2021 Census counted 57,003 residents in the Wagga Wagga Significant Urban Area, with a median age of 36.' },
      { q: 'What is Sturges\' rule?', a: 'A formula for the number of bars in a histogram: one plus the base-2 logarithm of the number of data points, rounded up. For 24 values it gives 6 bins.' },
      { q: 'What is the Freedman-Diaconis rule?', a: 'A formula for histogram bin width: twice the interquartile range divided by the cube root of the number of values. Because it uses the spread of the middle half of the data, it is less affected by extreme values than Sturges\' rule.' },
      { q: 'What does the Wagga Wagga project show?', a: 'Using the NSW Department of Education\'s file of 24 public schools in the council area, Sturges\' rule gives 6 bins and shows no first-teacher dates between 1914 and 1941, while the Freedman-Diaconis rule gives 3 bins of 10, 7 and 7 schools, in which that gap cannot be seen.' },
      { q: 'Do you teach students doing the HSC?', a: 'Yes. Teachers know the NSW stages and terms and help Year 11 and 12 students with computing and maths. Work handed in for school marks has to be the student\'s own, so we teach how to do it rather than doing it.' },
      { q: 'What time are lessons for Wagga Wagga learners?', a: 'Families usually pick a weekday evening or weekend morning at the trial, in NSW time. Our teachers\' clocks run four and a half hours behind Wagga Wagga in winter, and five and a half once NSW starts daylight saving.' },
      { q: 'Can younger children learn to code?', a: 'Yes. From age six children work with Scratch and visual projects before moving to typed code; the histogram project suits older learners.' },
      { q: 'Is there a Modern Age Coders centre in Wagga Wagga?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Wagga Wagga coding classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Wagga Wagga and New South Wales learners',
    html: 'Data-minded senior students might read <a class="cg-inline-link" href="/hsc-enterprise-computing-help">HSC Enterprise Computing help</a>, which covers charts and data in the NSW course. Across the Murray, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-albury-wodonga">Albury-Wodonga</a> has its own page, and the statewide picture is on <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">coding and AI classes in New South Wales</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Wagga Wagga and Australia',
  footerPlaces: [
    { href: '/vibe-coding-and-ai-agents-classes-in-albury-wodonga', label: 'Albury-Wodonga' },
    { href: '/vibe-coding-and-ai-agents-classes-in-canberra', label: 'Canberra' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-wgw .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.4vw, 2.7rem); }
.cg-root.cg-wgw .cg-hero h1 { font-weight: 800; letter-spacing: -0.022em; line-height: 1.05; }
.cg-root.cg-wgw .cg-capsule { border: 1px solid var(--cg-accent); padding: 0.85rem 1rem; }
.cg-root.cg-wgw .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-wgw .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.01em; }
.cg-root.cg-wgw .cg-grid-3 { gap: clamp(1rem, 2.5vw, 2rem); }
.cg-root.cg-wgw .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-wgw .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wgw .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-wgw .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Wagga Wagga, ABS Census 2021 QuickStats, Significant Urban Area 1035 (read 7 October 2026): 57,003 people; median age 36 (New South Wales 39, Australia 38); 14,576 families; 24,251 private dwellings; average 2.5 people per household; dwelling structure, occupied private dwellings: separate house 17,960 (83.9 percent; NSW 65.6; Australia 72.3), flat or apartment 2,204 (10.3 percent); occupation: Technicians and Trades Workers 3,975 (14.4 percent; NSW 11.9; Australia 12.9), Professionals 5,876 (21.3 percent; NSW 25.8; Australia 24.0); highest educational attainment, people aged 15 and over: Bachelor Degree level and above 8,931 (19.6 percent; NSW 27.8; Australia 26.3); aged 15 to 19 3,785 (6.6 percent; NSW 5.7). NSW Department of Education, 2027 term dates, Eastern division: Term 1 Wednesday 3 February to Friday 9 April; Term 2 Thursday 29 April to Friday 2 July; Term 3 Tuesday 20 July to Friday 24 September; Term 4 Tuesday 12 October to Monday 20 December. IANA tz database: Australia/Sydney, daylight saving Sunday 4 October 2026 to Sunday 4 April 2027; Asia/Kolkata UTC+5:30.',
    localProject: 'Histogram bin-count rules. NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (data.nsw.gov.au, Creative Commons Attribution), master_dataset.csv downloaded 7 October 2026, Date_extracted 2026-10-02. Rows with LGA = Wagga Wagga: 24 (Primary School 17, Secondary School 3, Schools for Specific Purposes 3, Environmental Education Centre 1). Date_1st_teacher as decimal year (year + (day of year - 1) / days in year): minimum 1861.0 (Wagga Wagga Public School, 1861-01-01), maximum 2021.07 (Estella Public School, 2021-01-27), range 160.07. Sturges: k = ceil(1 + log2 24) = ceil(5.585) = 6, width 26.68; counts [1861.0, 1887.7) 8, [1887.7, 1914.4) 2, [1914.4, 1941.0) 0, [1941.0, 1967.7) 7, [1967.7, 1994.4) 5, [1994.4, 2021.1] 2. Freedman-Diaconis: statistics.quantiles(n=4, method=inclusive) Q1 1880.62, Q3 1970.75, IQR 90.13; h = 2 x 90.13 / 24^(1/3) = 62.49; range / h = 2.56, k = 3, width 53.36; counts 10, 7, 7. Decade counts: 1860s 2, 1870s 3, 1880s 3, 1890s 1, 1910s 1, 1950s 4, 1960s 3, 1970s 3, 1980s 2, 2000s 1, 2020s 1. Wagga Wagga High School 1912-01-01. Lesson family: histogram bin-count rules (Sturges versus Freedman-Diaconis); distinct from frequency density with unequal class widths used elsewhere on the site.',
    requiredMentions: [
      '57,003',
      '14,576',
      '24,251',
      '17,960',
      '3,975',
      '1 + log2(n), rounded up',
      '90.13 years',
      'Estella Public School',
      '160.07 years'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Wagga Wagga Significant Urban Area (1035): people, median age, families, private dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/1035' },
      { claim: 'NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (Creative Commons Attribution).', url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset' },
      { claim: 'NSW Department of Education, 2027 term dates, Eastern division.', url: 'https://education.nsw.gov.au/schooling/calendars/2027' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'That no school opened in Wagga Wagga between 1914 and 1941: the file lists only schools operating now, so the gap may hold schools that later closed; the page says so.',
      'That a 1 January first-teacher date means the school opened on New Year\'s Day: such dates may record the year only, so no day-level claim is made.',
      'Wagga Wagga City Council flood studies and reports on data.nsw.gov.au: not used, under the cluster rule against disaster topics.',
      'Enrolment, ICSEA, Indigenous and LBOTE figures from the master dataset: excluded or not needed.',
      'Bureau of Meteorology facts for Wagga Wagga: the Bureau returned 403 and was not used.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with the NSW Department of Education, Wagga Wagga City Council or the ABS.'
    ]
  }
};
