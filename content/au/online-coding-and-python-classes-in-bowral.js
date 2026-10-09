'use strict';
// Bowral (cg- regional city page, Australia cluster Phase 7, row 164). Shaped page: online coding and Python
// for teenagers and adults. Spine: how much hill is there in Mount Gibraltar, and how many ways can Python
// stack contour slices to answer? Data: NSW Spatial Services, NSW Elevation and Depth Theme, Contour layer
// (MapServer layer 2), extracted 8 October 2026 around the MOUNT GIBRALTAR physiography point (150.428,
// -34.4652); 27 closed rings enclose the summit ring centre (150.42804, -34.46537): every 10 m from 770 to
// 820 m and every 2 m from 820 to 862 m. Ring areas: 770 m 163.37 ha, 800 m 84.21, 820 m 58.99, 840 m 15.91,
// 860 m 1.22, 862 m 0.59. Our code (scratchpad au/r4/bwl_vol.py plus slice sums): 770 to 860 m in 10 m
// slices: lower-area prism 64.66 million cubic metres, upper-area prism 48.45, trapezoid 56.55, frustum
// 56.24; 820 to 860 m in 10 m slices 10.91 / 5.14 / 8.03 / 7.83 and in 2 m slices 8.54 / 7.38 / 7.96 / 7.95.
// Lesson family: frustum (contour slice) volume of a hill; screened 0 content hits 8 October 2026; claimed by
// AU-R4. Licence: Spatial Services applies CC BY 4.0, attribution "(c) Spatial Services", extraction date
// marked. Place facts: ABS Census 2021 QuickStats SUA 1006 Bowral - Mittagong; NSW place names inside the SUA
// from Spatial Services places points; NSW term dates; IANA tz 2026e Australia/Sydney (rule AN). Excluded by
// the cluster rules: income, rent, ancestry, religion, health.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'BOWRAL', label: 'Bowral', blurb: 'Bowral and Mittagong in the Southern Highlands, Mount Gibraltar sliced at its contours, and four Python rules for the volume of a hill.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-bowral',
  code: 'bwl',
  accent: '#28522F',
  accentRationale: 'Bowral: a dark highland forest green (HSV saturation 0.51, value 0.32, hue 130), selected by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims file, with strong contrast on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Bowral',
    eyebrow: 'Bowral, New South Wales, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'New South Wales', href: '/coding-and-ai-classes-in-new-south-wales' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Bowral, New South Wales',
  title: 'Online Coding and Python Classes in Bowral | Live Lessons',
  description: 'Live online coding and Python classes for Bowral and Mittagong teens and adults, built on real Southern Highlands data. Groups or one to one, first lesson free.',
  ogDescription: 'Bowral Python classes with a project that measures the volume of Mount Gibraltar from NSW contour lines, four different ways.',
  twitterDescription: 'Online coding and Python classes for Bowral teens and adults, live with a teacher, first lesson free.',
  ogImageCourse: 'python-programming-masterclass-zero-to-advanced-college',
  verifiedOn: '8 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Bowral Learners',
    description: 'Python programming and the maths that powers it, taught live online to teenagers and adults in Bowral, Mittagong, Moss Vale and the Southern Highlands.'
  },

  h1: 'Online coding and Python classes in Bowral',
  capsuleQ: 'What are the best online coding and Python classes in Bowral?',
  capsule: 'For Bowral teenagers and adults, Python taught live by a teacher who explains each idea, with projects that use real Southern Highlands data so the code means something. The Bowral and Mittagong urban area had 41,600 residents at the 2021 Census. Learners meet a teacher online, either one to one or with a few others at the same level, and pay nothing for the first lesson.',
  lead: 'Mount Gibraltar rises between Bowral and Mittagong, and the NSW contour map draws it as a set of closed rings, one inside the next, up to 862 metres. Each ring encloses an area. Stack those areas like slices of bread and you can estimate how much rock and soil makes up the hill. There is more than one way to turn a stack of slices into a volume, though, and they disagree by over 16 million cubic metres. Working out which to trust, and why thinner slices settle the argument, is a tidy first project in Python.',
  wa: 'Hello Modern Age Coders, I would like a free coding or Python class for a learner in Bowral.',

  picks: {
    eyebrow: 'Python courses for Bowral',
    h2: 'Where a Southern Highlands learner starts',
    intro: 'Each course is live and leads naturally into projects like the one below. The free trial, with no card to book, picks the right one.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python for teenagers from variables onward, building up to programs that read map data and calculate with it.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 17', note: 'Python with real datasets: tables, charts and the questions behind them.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University and adult', note: 'A full Python path for adults starting from scratch or returning after years away.' },
      { course: 'python-ai-automation-masterclass-college', band: 'Adults', note: 'Python for automating real work, from spreadsheets and files to AI-assisted scripts.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Bowral and Mittagong in 2021',
      h2: 'A Southern Highlands urban area with an older population',
      intro: 'The statistics bureau groups Bowral, Mittagong, Moss Vale and nearby towns into one Significant Urban Area. Here is what the 2021 Census found.',
      body: [
        { kind: 'table', caption: 'Headline Census counts for Bowral - Mittagong', head: ['Census 2021', 'Bowral - Mittagong'], rows: [
          ['Population', '41,600'],
          ['Median age', '47'],
          ['Families', '11,666'],
          ['Private dwellings', '18,146'],
          ['Average people per household', '2.4']
        ] },
        { kind: 'table', mt: true, caption: 'Six comparisons with New South Wales and Australia', head: ['Measure', 'Bowral - Mittagong', 'NSW', 'Australia'], rows: [
          ['Separate houses among occupied homes', '14,135 (88.4%)', '65.6%', '72.3%'],
          ['Flats or apartments among occupied homes', '442 (2.8%)', '21.7%', '14.2%'],
          ['People aged 20 to 24', '1,763 (4.2%)', '6.1%', '6.2%'],
          ['People aged 10 to 14', '2,660 (6.4%)', '6.2%', '6.2%'],
          ['Technicians and trades workers among employed', '2,990 (15.9%)', '11.9%', '12.9%'],
          ['Bachelor degree or higher, aged 15 and over', '8,607 (25.0%)', '27.8%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Many towns, one area', p: 'NSW place names inside the boundary run from Hill Top, Colo Vale and Yerrinbool through Mittagong and Bowral to Burradoo, Moss Vale and New Berrima.' },
          { h3: 'Fewer young adults', p: 'Only 4.2% of residents are aged 20 to 24, compared with 6.1% across NSW, a common pattern where study means moving away.' },
          { h3: 'Adults who keep learning', p: 'A median age of 47 means plenty of adult learners, which is why our adult Python courses matter here as much as the teen ones.' }
        ] },
        { kind: 'p', text: 'To protect privacy the bureau makes small random adjustments to cell counts, so component figures may not add exactly to totals. All numbers are given as the bureau publishes them.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How much hill is Mount Gibraltar?',
      intro: 'Measure the area inside each closed contour ring, then turn the stack of areas into a volume with four different rules.',
      body: [
        { kind: 'table', caption: 'Area inside selected contour rings on Mount Gibraltar (our measurements, NSW contour layer extracted 8 October 2026)', head: ['Contour height', 'Area enclosed'], rows: [
          ['770 m', '163.37 ha'],
          ['800 m', '84.21 ha'],
          ['820 m', '58.99 ha'],
          ['840 m', '15.91 ha'],
          ['860 m', '1.22 ha'],
          ['862 m, the highest ring', '0.59 ha']
        ] },
        { kind: 'table', mt: true, caption: 'Volume between 770 m and 860 m using 10 m slices (our calculation, million cubic metres)', head: ['Rule for each slice', 'Volume'], rows: [
          ['Lower ring area times thickness', '64.66'],
          ['Upper ring area times thickness', '48.45'],
          ['Average of the two areas (trapezoid)', '56.55'],
          ['Frustum: thickness/3 times (A1 + A2 + square root of A1 times A2)', '56.24']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Find the rings', p: 'Keep only contour lines that close into a loop around the summit point. On this hill there are 27 of them, from 770 m up to 862 m.' },
          { h3: 'Measure each ring', p: 'Use the shoelace formula on each loop\'s coordinates to get the area it encloses, in square metres.' },
          { h3: 'Stack and sum', p: 'Treat each pair of neighbouring rings as one slice, apply a rule to get its volume, and add up all the slices.' }
        ] },
        { kind: 'callout', h3: 'Thinner slices end the argument', p: 'Above 820 m the contour layer has a ring every 2 metres. Using only the 10 m rings, the four rules give 5.14 to 10.91 million cubic metres for that top section. Using all the 2 m rings, they give 7.38 to 8.54, and the trapezoid and frustum agree almost exactly at 7.96 and 7.95.' },
        { kind: 'p', text: 'The contour layer has closed rings at 10 metre steps from 770 to 820 m and at 2 metre steps above that, and we used what it contains. Volumes cover only the hill above the 770 m ring, not the ground underneath. Spatial Services data, (c) Spatial Services, under Creative Commons Attribution 4.0; all areas and volumes are our own.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'In the code',
      h2: 'Why the frustum rule fits a hill',
      intro: 'Each rule assumes a different shape for the slice between two rings.',
      body: [
        { kind: 'p', text: 'Using the lower ring\'s area pretends every slice is a straight-sided block as wide as its base, so it overestimates. Using the upper ring\'s area does the opposite. The trapezoid takes the average of the two, which is good when the area shrinks steadily. The frustum rule is the exact volume of a slice of a cone or pyramid, so it fits a hill whose sides narrow towards the top. When slices are thin, all four converge, which is the same idea that underpins integration in calculus.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Build a cone out of cardboard rings, estimate its volume each way by hand, then check the answers with a short Python loop.' },
          { h3: 'University students', p: 'Link the slice rules to the Riemann sum, the trapezoidal rule and Simpson\'s rule, and measure how error falls as slices thin.' },
          { h3: 'Adults', p: 'Write a reusable Python function that takes any set of contour rings and returns the volume, with the method stated in its output.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders is independent of Spatial Services, the NSW Government, Wingecarribee Shire Council and the statistics bureau. The bureau supplied the Census data, and every ring area and volume was worked out by our own Python from the published contours.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Southern Highlands dates',
      h2: 'Fitting lessons around NSW terms',
      intro: 'School dates and clocks to bear in mind when choosing a time.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Autumn holidays 2027', p: 'NSW school holidays run from Monday 12 April to Friday 23 April 2027, and Term 2 starts on Tuesday 27 April.' },
          { h3: 'Middle of 2027', p: 'Term 2 ends on Friday 2 July; Term 3 runs from Monday 19 July to Friday 24 September.' },
          { h3: 'End of 2027', p: 'Term 4 runs from Monday 11 October to Monday 20 December, in daylight saving time, which begins on the first Sunday in October.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first loop to numerical methods',
    intro: 'These ages are a rough guide; the free lesson places each learner.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'First Python', p: 'Variables, loops and lists, with small programs that add up areas and draw shapes.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Working with data', p: 'Reading files of coordinates, computing areas and volumes, and charting the results.', courses: ['data-science-course-for-teens-python-data', 'complete-high-school-mathematics-mastery'] },
      { band: 'University', h3: 'Numerical thinking', p: 'Approximation error, convergence and the calculus behind slice-by-slice methods.', courses: ['college-mathematics-complete-masterclass', 'python-programming-masterclass-zero-to-advanced-college'] },
      { band: 'Adults', h3: 'Python at work', p: 'Scripts that save time with real files and data, written so others can read and reuse them.', courses: ['python-ai-automation-masterclass-college', 'data-analytics-mathematics-masterclass'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI assistants can write Python already. Why learn it in Bowral?',
    intro: 'Because an assistant will happily pick one slice rule without saying so, and only someone who knows the alternatives will notice that the answer could be 48 or 65 million cubic metres.',
    p1: 'Ask an AI assistant to estimate a hill\'s volume from contours and it will usually produce working code. Whether that code uses the lower ring, the upper ring, the trapezoid or the frustum depends on chance as much as reason, and the number it prints looks equally confident each time. Reading the code and recognising the rule is what turns that output into something you can rely on.',
    p2: 'Bowral learners use AI helpers in class, but they also write the core loop themselves, test it on a cone whose volume they can work out by hand, and then compare the assistant\'s version. That habit of checking is what makes Python useful for real decisions.',
    closer: 'AI speeds up writing code; understanding it is what keeps the answers right.',
    blogAnchor: 'why learning to code still pays off for adults too'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Online lessons across the Southern Highlands',
    intro: 'Whether you are in Bowral, Mittagong or Moss Vale, the class is the same video call.',
    cells: [
      { h3: 'No commute', p: 'Lessons are joined from home, so there is no trip up the highway to Sydney for a coding class.' },
      { h3: 'NSW school structure', p: 'Lessons line up with the NSW syllabus stage a learner is in, and shift around the state\'s four terms. Teaching is in English.' },
      { h3: 'A free first class', p: 'The trial lesson teaches real material and finishes with a recommendation for course and weekly time.' },
      { h3: 'Small classes', p: 'Groups have five to ten learners at a similar level, from the Highlands and beyond, so each group stays full.' },
      { h3: 'Two a week', p: 'Two live lessons each week, roughly eight per month, at a regular time agreed after the trial.' },
      { h3: 'Teachers in India', p: 'Our teaching team works from India. The Highlands clock leads theirs by 4.5 hours in the cooler months and by 5.5 hours once NSW daylight saving starts.' }
    ],
    spec: { title: 'Bowral time on every booking', p: 'Every lesson time we send is in Bowral time, so when NSW clocks change we adjust on our side.' }
  },

  fees: {
    h2: 'What Bowral classes cost',
    intro: 'Fees are simple and identical across Australia.',
    first: 'First lesson free, then a recommended level, course and lesson time.',
    group: 'A month of group lessons, about eight, with five to ten learners at the same level.',
    private: 'Roughly eight one-to-one lessons a month with a teacher of your own.',
    closer: 'Families and adults outside India pay in US dollars, so Bowral pays what every Australian town pays. Nothing is due until the trial has settled a course and a weekly slot, and the pricing page explains holidays, missed lessons and switching between group and private.'
  },

  reviewsH2: 'Google reviews from families we teach',

  book: {
    h2: 'Book a free Python lesson in Bowral',
    intro: 'Tell us roughly how old the learner is and what they hope to make. A teenager might start with loops and shapes; an adult might go straight to slicing Mount Gibraltar.',
    success: 'Thank you. We will be in touch shortly about a Bowral lesson.'
  },

  faq: {
    h2: 'Bowral Python questions',
    intro: 'What people across the Southern Highlands ask us.',
    items: [
      { q: 'How do you calculate the volume of a hill from contour lines?', a: 'Measure the area inside each closed contour ring, treat each gap between neighbouring rings as a slice, estimate each slice with a rule such as the trapezoid or frustum, and add the slices together.' },
      { q: 'What is the frustum rule?', a: 'It gives the volume of a slice between two areas A1 and A2 a height h apart as h divided by 3, times A1 plus A2 plus the square root of A1 times A2. It is exact for a slice of a cone or pyramid.' },
      { q: 'How big is Mount Gibraltar by this method?', a: 'Between the 770 m and 860 m contour rings, our frustum calculation gives about 56.24 million cubic metres, with the other rules ranging from 48.45 to 64.66 million.' },
      { q: 'How many people live in Bowral and Mittagong?', a: 'At the 2021 Census, 41,600 people lived in the Bowral - Mittagong urban area, and half of them were 47 or older.' },
      { q: 'Are your Python classes suitable for adults?', a: 'Yes. Adults are a large share of our learners, and courses run from complete beginner to automation and data work.' },
      { q: 'What time are lessons for Bowral learners?', a: 'After school on weekdays and Saturday mornings are common; adults often prefer other times. Slots are agreed at the trial and quoted in Bowral time.' },
      { q: 'Do you teach primary school children too?', a: 'Yes. From age six, children learn with Scratch and game making. Slicing Mount Gibraltar into volumes is a project for teenagers and adults.' },
      { q: 'Is there a Modern Age Coders centre in Bowral?', a: 'No. We do not have any premises in Australia and claim none. Classes are live online only; you need a computer with sound and a reliable connection, and our listed phone number is an Indian one.', boiler: true },
      { q: 'How much do Bowral Python classes cost?', a: 'The first lesson is free. Then a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, or USD 150 a month for one to one. All of it is agreed before any payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by level and pace rather than age or town. When no group time works, one-to-one classes are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'Where to read next from the Highlands',
    html: 'The state page is <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">coding and AI classes in New South Wales</a>. Students moving on from block coding should read <a class="cg-inline-link" href="/after-scratch-next-step-python-australia">the next step after Scratch: Python</a>, and senior maths students can see <a class="cg-inline-link" href="/hsc-maths-extension-1-tutoring">HSC Maths Extension 1 tutoring</a>. Every Australian page is listed on the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Bowral and New South Wales',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
    { href: '/coding-classes-for-kids-sydney', label: 'Sydney' },
    { href: '/best-coding-classes-in-wollongong', label: 'Wollongong' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-bwl .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.9vw, 2.2rem); }
.cg-root.cg-bwl .cg-hero h1 { font-weight: 760; letter-spacing: -0.021em; line-height: 1.08; }
.cg-root.cg-bwl .cg-capsule { border: 1px solid rgba(40, 82, 47, 0.28); border-radius: 4px; padding: 0.85rem 1rem; }
.cg-root.cg-bwl .cg-eyebrow { letter-spacing: 0.11em; font-weight: 700; font-size: 0.79rem; }
.cg-root.cg-bwl .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.014em; }
.cg-root.cg-bwl .cg-grid-3 { gap: clamp(1rem, 2.4vw, 1.9rem); }
.cg-root.cg-bwl .cg-table caption { font-weight: 650; text-align: left; }
.cg-root.cg-bwl .cg-table td:last-child { font-variant-numeric: tabular-nums; text-align: right; }
.cg-root.cg-bwl .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.9rem; }
.cg-root.cg-bwl .cg-callout { border-left: 3px solid var(--cg-accent); background: rgba(40, 82, 47, 0.05); }
`,

  dossier: {
    curriculumAuthority: 'Bowral - Mittagong, ABS Census 2021 QuickStats, Significant Urban Area 1006 (read 8 October 2026): 41,600 people; median age 47; 11,666 families; 18,146 private dwellings; average 2.4 people per household; separate house 14,135 (88.4 percent; NSW 65.6; Australia 72.3); flat or apartment 442 (2.8 percent; NSW 21.7; Australia 14.2); aged 20 to 24 1,763 (4.2 percent; NSW 6.1; Australia 6.2); aged 10 to 14 2,660 (6.4 percent; NSW 6.2; Australia 6.2); Technicians and Trades Workers 2,990 (15.9 percent; NSW 11.9; Australia 12.9); Bachelor Degree level and above 8,607 (25.0 percent; NSW 27.8; Australia 26.3). NSW place names inside the SUA polygon (Spatial Services places): Alpine, Aylmerton, Balaclava, Balmoral, Berrima, Berrima Junction, Bong Bong, Bowral, Braemar, Burradoo, Colo Vale, East Bowral, Hill Top, Lower Mittagong, Mittagong, Moss Vale, New Berrima, Notts Hill, Renwick, Welby, Willow Vale, Yerrinbool. NSW Department of Education 2027: autumn holidays Monday 12 April to Friday 23 April; Term 2 Tuesday 27 April to Friday 2 July; Term 3 Monday 19 July to Friday 24 September; Term 4 Monday 11 October to Monday 20 December. IANA tz 2026e: Australia/Sydney rule AN; Asia/Kolkata UTC+5:30.',
    localProject: 'Frustum (contour slice) volume of a hill. NSW Spatial Services, NSW Elevation and Depth Theme MapServer layer 2 (Contour), extracted 8 October 2026 (Creative Commons Attribution 4.0, attribution (c) Spatial Services), around the MOUNT GIBRALTAR point in NSW_Physiography_Category layer 0 (150.428, -34.4652). Closed rings enclosing the summit ring centre (150.42804, -34.46537): 27 elevations, every 10 m from 770 to 820 m and every 2 m from 820 to 862 m. Shoelace areas: 770 m 163.37 ha; 800 m 84.21 ha; 820 m 58.99 ha; 840 m 15.91 ha; 860 m 1.22 ha; 862 m 0.59 ha. Volumes 770 to 860 m, 10 m slices, million cubic metres: lower-area 64.66, upper-area 48.45, trapezoid 56.55, frustum 56.24. Volumes 820 to 860 m: 10 m slices lower 10.91, upper 5.14, trapezoid 8.03, frustum 7.83; 2 m slices lower 8.54, upper 7.38, trapezoid 7.96, frustum 7.95.',
    requiredMentions: [
      '41,600',
      '11,666',
      '18,146',
      '14,135',
      '8,607',
      'Mount Gibraltar',
      '163.37 ha',
      '56.24',
      '64.66',
      '48.45'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Bowral - Mittagong Significant Urban Area (1006): people, median age, families, dwellings, dwelling structure, age, occupation, education.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/1006' },
      { claim: 'NSW Spatial Services, NSW Elevation and Depth Theme, Contour layer (Creative Commons Attribution 4.0, (c) Spatial Services).', url: 'https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Elevation_and_Depth_Theme/MapServer/2' },
      { claim: 'NSW Spatial Services, NSW Physiography Category, MOUNT GIBRALTAR point.', url: 'https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Physiography_Category/MapServer/0' },
      { claim: 'NSW Spatial Services licence statement on the Elevation and Depth Theme portal item.', url: 'https://portal.spatial.nsw.gov.au/portal/sharing/rest/content/items/ca62b4699e5d43119617a9dce5bbe0c4?f=json' },
      { claim: 'NSW Department of Education, future and past NSW term and vacation dates.', url: 'https://education.nsw.gov.au/schooling/calendars/future-and-past-nsw-term-and-vacation-dates' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney and rule AN.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Total mass or tonnage of the hill: no density is published for it, so only volumes are given.',
      'Volume below the 770 m ring: the lowest ring that closes around the summit is 770 m, so the hill is measured only above it.',
      'Term 1 2027 dates: NSW lists Eastern and Western division dates and the page does not establish the division, so Term 1 is omitted.',
      'Walking tracks, lookouts or access on the mountain: not checked against an official source, so none are mentioned.',
      'Income, rent, ancestry, religion and health figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with Spatial Services, the NSW Government, Wingecarribee Shire Council or the ABS.'
    ]
  }
};
