'use strict';
// Clondalkin, Dublin 22 (cg- district page, Ireland cluster, Phase 6). Named sources only
// (owner rule for districts), read 20 September 2026: South Dublin County Council's Round
// Tower tourism page and news release, The Round Tower's own site (dublinsoutdoors.ie),
// SDCC library pages (Clondalkin, North Clondalkin), Irish Rail Clondalkin Fonthill.
// Spine: sensitivity to measurement error (a constructive maths-and-code lesson, no
// dataset). Tower 27.5 m high (SDCC); a learner measures it by angle and distance with an
// assumed eye height of 1.5 m on level ground. A 1-degree angle error moves the estimate by
// +2.69/-2.24 m at 5 m, +1.42/-1.30 at 10 m, +0.92/-0.89 at 26 m (45 degrees, the best
// place, worst case 0.92 at 26.5 m), +1.00/-0.98 at 40 m, +1.55/-1.54 at 80 m,
// +2.71/-2.69 at 150 m; a 5% distance error at 26 m moves it by 1.30 m. Height-to-base ratio
// 27.5/4 = 6.88. The SDCC pages disagree on the tower's age ("around 790 AD" against "about
// 1000 years old"): NOT used (Kerry owns self-contradicting sources); no age is printed.
// The Clondalkin Library page prints its eircode with a letter O, which eircodes do not
// use, so no eircode is printed for it. The South Dublin page owns the Clondalkin LEA
// figure and Coláiste Bríde.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'area', tag: 'CLONDALKIN', blurb: 'Measure a 27.5-metre round tower with an angle and a distance, then find where to stand so a small error does least harm.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-clondalkin-dublin',
  code: 'cld',
  accent: '#1D1E72',
  accentRationale: 'Clondalkin: a dusk-sky indigo from the widened solver search, the most distant colour left and apart from the South Dublin purple and the Tallaght plum',
  pageType: 'district',
  place: {
    name: 'Clondalkin',
    eyebrow: 'Clondalkin, Dublin 22',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'South Dublin' },
      { type: 'AdministrativeArea', name: 'County Dublin' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-south-dublin', name: 'South Dublin' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'South Dublin', href: '/coding-classes-in-south-dublin' },
    { label: 'Tallaght', href: '/coding-classes-in-tallaght-dublin' }
  ],
  routeLabel: 'Clondalkin, Dublin 22, Ireland',
  title: 'Coding Classes in Clondalkin, Dublin 22 | Modern Age Coders',
  description: 'Coding, Python, AI and maths classes for Clondalkin learners aged 6 to 67, taught live online in same-level groups or one to one. The first lesson is free.',
  ogDescription: 'Coding and maths classes for Clondalkin, with a project that measures the Round Tower by trigonometry and tests how errors spread.',
  twitterDescription: 'Live online coding, Python, AI and maths for Clondalkin, Dublin 22, ages 6 to 67. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '20 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Maths Classes for Learners in Clondalkin',
    description: 'Online coding, Python, AI and mathematics for children, teenagers and adults in Clondalkin, Dublin 22, taught live in English to small groups at one level or one to one.'
  },

  h1: 'Coding classes in Clondalkin',
  capsuleQ: 'What are the best coding classes in Clondalkin?',
  capsule: 'Clondalkin learners have a live teacher on video for each lesson, either in a small group where everyone is at the same point or individually, commonly twice a week, and the classes are open to people from six to sixty-seven. There is no trip to make. The free first lesson comes before anything else; from then on a group place is USD 100 a month and a private place USD 150 a month.',
  lead: 'South Dublin County Council gives the height of the Round Tower in Clondalkin village as 27.5 metres. Suppose a learner wants to check that with nothing but a phone\'s angle app and a measured distance. The trigonometry is one line, but the answer is only as good as the measurements, and a single degree of error in the angle can shift the result by almost a metre or by nearly three, depending on where the learner stands. This page turns that into a small coding project: build the calculation, add a deliberate error, and let the program find the spot where the tower can be measured most reliably.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Clondalkin.',

  picks: {
    eyebrow: 'Courses for Clondalkin',
    h2: 'First courses for Clondalkin learners',
    intro: 'A course for each stage of life, with the free first lesson and its teacher deciding whether it fits.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Blocks and angles: a sprite that turns, aims and measures how far its shot lands from the target.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 14', note: 'Maths through code: triangles, angles and tangent turned into a height calculator that anyone can test.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Python models with inputs that can be nudged, to see which measurement errors matter most.' },
      { course: 'data-analysis-mastery-course-college', band: 'College and adult', note: 'For adults whose estimates rest on measurements, and who need to know how much a small error matters.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Measure the Round Tower with an angle, then find where to stand',
      intro: 'The height is worked out from the distance to the tower and the angle up to its top, plus the observer\'s eye height, assumed here to be 1.5 metres on level ground. The table shows how far off the answer lands when the angle is misread by one degree either way.',
      body: [
        { kind: 'table', caption: 'Estimating a 27.5 m tower when the angle is off by one degree', head: ['Distance', 'Angle to the top', 'Error if +1 degree', 'Error if -1 degree'], rows: [
          ['5 m', '79.1 degrees', '+2.69 m', '-2.24 m'],
          ['10 m', '69.0 degrees', '+1.42 m', '-1.30 m'],
          ['26 m', '45.0 degrees', '+0.92 m', '-0.89 m'],
          ['40 m', '33.0 degrees', '+1.00 m', '-0.98 m'],
          ['80 m', '18.0 degrees', '+1.55 m', '-1.54 m'],
          ['150 m', '9.8 degrees', '+2.71 m', '-2.69 m']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Too close', p: 'Five metres from the base the top is almost straight up, at 79.1 degrees, and a one-degree slip changes the answer by up to 2.69 metres. At steep angles the tangent climbs fast, so small errors are magnified.' },
          { h3: 'Too far', p: 'From 150 metres the top is less than ten degrees above eye level, and the same slip is worth about 2.7 metres. At shallow angles a degree covers a long way at the tower\'s distance.' },
          { h3: 'Just right', p: 'The error is smallest, about 0.9 metres either way, near 26 metres, where the top sits at 45 degrees. A search over distances from 1 to 200 metres puts the most forgiving spot at 26.5 metres.' }
        ] },
        { kind: 'callout', h3: 'Before trusting a result, nudge its inputs', p: 'Every calculated answer inherits the errors of its inputs, and some inputs matter far more than others. Sensitivity testing is the habit of changing each input by a realistic amount, one at a time, and watching how far the answer moves. It shows which measurements deserve the most care, and sometimes, as here, how to set up the measurement so the errors hurt least. It costs a loop and a few lines of code, and it turns a single number into a number with a known margin.' },
        { kind: 'p', text: 'The learner\'s program has one function: given a distance, an angle and an eye height, return the tower\'s height using the tangent of the angle. Around it goes a loop over distances, and for each one the program computes the true angle to a 27.5-metre top, adds and subtracts one degree, and records how far the answers land from 27.5. A second loop does the same for the distance instead of the angle: at 26 metres, judging the distance 5 percent too long adds 1.30 metres to the height. The results go into a small table and a line chart, and the lowest point of the chart is the recommended place to stand.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Stated assumptions', p: 'The eye height of 1.5 metres and the level ground are assumptions, not facts about Clondalkin; a sloping street or a taller observer changes the numbers slightly. A good report lists them before the answer.' },
          { h3: 'Tall and thin', p: 'The council describes the tower as 27.5 metres high and four metres wide at the bottom, a height nearly seven times its base, 6.88 to be exact, and thought to be the slenderest round tower in Ireland.' },
          { h3: 'Why 45 degrees', p: 'The error from a small angle slip is smallest where the angle is 45 degrees, because that is where the product of its sine and cosine is largest. The program finds this by searching; the maths explains why.' }
        ] }
      ]
    },
    {
      id: 'place', tint: 'tint', eyebrow: 'Clondalkin, named',
      h2: 'Clondalkin, in the words of the council and its services',
      intro: 'Facts that each body publishes itself, with an eircode where its page gives a valid one.',
      body: [
        { kind: 'table', caption: 'Named places in Clondalkin', head: ['Place', 'What its own source says'], rows: [
          ['The Round Tower', '27.5 m high, four metres wide at the base'],
          ['Round Tower visitor centre', 'Tower Road, D22 DV56; opened 3 July 2017'],
          ['North Clondalkin Library', 'Liscarne Close, Rowlagh, D22 E2Y2; opened December 2020'],
          ['Clondalkin Fonthill station', 'Fonthill Road, D22 Y2F9']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The tower itself', p: 'South Dublin County Council calls it one of only four remaining round towers in County Dublin, with its original cap, a raised doorway and four windows at the top facing north, south, east and west. Inside there were once six floors; there are now five.' },
          { h3: 'A modern library', p: 'The council describes North Clondalkin Library as purpose-built and opened to the public in December 2020, with a creative studio and a virtual reality library experience designed for a Meta Quest 2 headset.' },
          { h3: 'In the village', p: 'Clondalkin Library, on Monastery Road in the village, opens until 8pm from Monday to Thursday. Its web page prints an eircode containing the letter O, which eircodes do not use, so none is repeated here.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'No population is printed for Clondalkin, because the page uses only facts that named bodies publish about the place itself. The council\'s pages give the tower\'s age in two different ways, so this page does not state one. The measurement project uses stated assumptions, not a survey of the tower.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'Clondalkin learners and their week',
      intro: 'Two live lessons make up a typical week, each taught by a teacher who is present the whole way through.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'Children begin with block code and angle games, turning and aiming sprites, the playful start of trigonometry.' },
          { h3: 'Teenagers', p: 'Teenagers move to Python, websites, AI projects and models whose inputs they can test, like the tower calculator.' },
          { h3: 'Adults', p: 'Adults may start with no coding at all; the opening lesson chooses the path.' }
        ] },
        { kind: 'p', text: 'The tower\'s height and width are South Dublin County Council\'s figures; the angles, errors and recommended distance are our own calculations, run on 20 September 2026, using the assumptions stated above. The libraries, the visitor centre and the station are quoted from their own pages.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From aiming a sprite to testing a model',
    intro: 'Age bands are approximate; lesson one finds the real starting point for each learner.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Turn and aim', p: 'Block-coded sprites that turn by angles and hit, or miss, a target.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Triangles in code', p: 'Python that uses tangent to find a height from a distance and an angle.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Sensitivity', p: 'Nudging inputs in a loop to see which errors matter and how to reduce them.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Estimates with margins', p: 'Workplace calculations reported with the error each input can cause.', courses: ['data-analysis-mastery-course-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant to measure the Round Tower from a photo',
    intro: 'It will usually produce a confident height.',
    p1: 'Describe a photo of the tower to an AI assistant, with a distance and an angle, and it will calculate a height and state it neatly. The arithmetic will be right. What it will rarely add is how much that height would change if the angle were a degree off, or whether the photo was taken from a good distance for measuring at all.',
    p2: 'With the sensitivity table in hand, the learner asks the assistant what error margin its answer carries, how the margin changes with distance, and what assumptions it made about eye height and level ground. The answers turn a neat number into an honest one.',
    closer: 'Calculating a height is one line. Knowing how wrong it could be is the skill.',
    blogAnchor: 'the case for learning to code at any age'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons run for Clondalkin',
    intro: 'The practical arrangements.',
    cells: [
      { h3: 'A live teacher', p: 'Each lesson is led live, with the teacher watching and helping as every learner writes code.' },
      { h3: 'Same-stage learners', p: 'Groups of five to ten at one stage, from Dublin 22, elsewhere in Ireland and abroad.' },
      { h3: 'Two regular slots', p: 'About eight lessons a month, on the same two weekly slots agreed at the outset.' },
      { h3: 'Term planning', p: 'School holidays, mid-term breaks and exam weeks are accounted for in advance.' },
      { h3: 'Setup at home', p: 'Whatever laptop or desktop is at home will usually do, with a mic and something to hear through, on broadband that copes with video.' },
      { h3: 'Alone with a tutor', p: 'One-to-one lessons for learners who are ahead, need extra time, or can only attend at unusual hours.' }
    ],
    spec: { title: 'Online, not local', p: 'We have no premises in Clondalkin, in South Dublin or anywhere in Ireland. Every lesson is on video and is the same wherever the learner joins from.' }
  },

  fees: {
    h2: 'Clondalkin lesson fees',
    intro: 'Here is everything.',
    first: 'A free first lesson that includes a level check.',
    group: 'A month in a group of five to ten at one stage, around eight live lessons.',
    private: 'A month of private lessons at the same pace.',
    closer: 'One monthly fee in US dollars applies to every family outside India. The free lesson involves no commitment, the first payment is due when the course begins, and the pricing page explains holidays, missed lessons and moving between group and private lessons.'
  },

  reviewsH2: 'Six families on Google, word for word',

  book: {
    h2: 'Book a free first lesson in Clondalkin',
    intro: 'Tell us the learner\'s age and interests, and the first hour will be planned around them. The hour might close with a small game, a program that works, or a height calculator honest about its own margin of error.',
    success: 'Thank you. We will be in touch soon to arrange the first lesson.'
  },

  faq: {
    h2: 'Clondalkin coding class questions',
    intro: 'Questions Clondalkin families often ask.',
    items: [
      { q: 'Is there a Modern Age Coders centre in Clondalkin?', a: 'No. Lessons are live on video, and we have no premises in Ireland. A learner needs a computer, a microphone and sound, and a dependable connection. The phone number given here is in India.', boiler: true },
      { q: 'What is the Round Tower project?', a: 'Learners write a small program that works out the tower\'s height from a distance and an angle, then add a one-degree error and see how much the answer moves. The error is smallest, about 0.9 metres, near 26 metres from the base, and grows to about 2.7 metres very close or far away.' },
      { q: 'Is this more maths than coding?', a: 'It is both. The maths is a single tangent; the coding is in the loops, the tables and the search for the most reliable place to stand, which is the part a learner cannot easily do by hand.' },
      { q: 'Why does the page give no population for Clondalkin?', a: 'District pages carry only facts that named bodies publish about the place itself, and neither the council\'s tower, library and visitor-centre pages nor Irish Rail publishes a head count.' },
      { q: 'When are lessons?', a: 'On weekdays from after school into the evening, and at weekends during the day. Times are fixed in Irish time. The teachers are in India, whose clocks run five and a half hours ahead of Clondalkin in the winter months and four and a half in the summer ones, so we only propose hours that are sensible at both ends.' },
      { q: 'Can adults learn too?', a: 'Yes, up to the age of sixty-seven and from any level. An adult chooses a small group at the same level or private lessons after the first lesson.' },
      { q: 'Will my child be with other Clondalkin children?', a: 'Only if their level matches. Groups are formed by level, so classmates may be local or far away.' },
      { q: 'What do coding classes in Clondalkin cost?', a: 'The first lesson is free. A group place is then USD 100 a month for around eight live lessons, two a week, with five to ten learners, and one-to-one lessons on the same schedule are USD 150 a month. Terms are agreed before any payment.', boiler: true },
      { q: 'How big are groups?', a: 'Between five and ten learners, grouped by level, pace and goals rather than age or address. If no group fits a workable hour, lessons are one to one.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Clondalkin and South Dublin',
    html: 'The <a class="cg-inline-link" href="/coding-classes-in-south-dublin">South Dublin</a> page covers the council area, <a class="cg-inline-link" href="/coding-classes-in-tallaght-dublin">Tallaght</a> and <a class="cg-inline-link" href="/coding-classes-in-lucan-dublin">Lucan</a> have their own district pages nearby, and learners who like the maths side can look at the <a class="cg-inline-link" href="/problem-solving-skills-through-coding-ireland">problem solving through coding</a> page. The <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> lists everything else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Clondalkin, South Dublin and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-south-dublin', label: 'South Dublin' },
    { href: '/coding-classes-in-tallaght-dublin', label: 'Tallaght' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-cld .cg-hero-grid { align-items: start; gap: clamp(1.03rem, 3.19vw, 2.44rem); }
.cg-root.cg-cld .cg-hero h1 { font-weight: 700; letter-spacing: -0.0195em; line-height: 1.07; }
.cg-root.cg-cld .cg-capsule { border-top: 6px solid var(--cg-accent); padding-top: 1.08rem; }
.cg-root.cg-cld .cg-eyebrow { letter-spacing: 0.125em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-cld .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.0136em; }
.cg-root.cg-cld .cg-grid-3 { gap: clamp(1.12rem, 2.76vw, 2.16rem); }
.cg-root.cg-cld .cg-table caption { letter-spacing: 0.035em; font-weight: 700; }
.cg-root.cg-cld .cg-table td { font-variant-numeric: tabular-nums lining-nums; }
.cg-root.cg-cld .cg-table td:first-child { font-weight: 650; }
.cg-root.cg-cld .cg-ladder-col { border-left: 5px solid var(--cg-accent); padding-left: 1.13rem; }
.cg-root.cg-cld .cg-callout { border-left-width: 8px; }
`,

  dossier: {
    curriculumAuthority: 'Clondalkin, Dublin 22, named sources only (owner rule for districts), read 20 September 2026. South Dublin County Council, The Round Tower tourism page: "one of only four remaining round towers in Co. Dublin"; "the tower stands at 27.5 metres high, still has its original cap and is thought to be the slenderest of all the round towers in Ireland"; "Tower Road, Clondalkin, Dublin 22, D22 DV56". The Round Tower site and SDCC news release: "The tower is 27.5 metres high and just four metres wide at the bottom"; "a raised doorway and four windows at the top, which face towards the four compass points: north, south, east and west"; "Inside there were once six floors ... There are now five floors"; visitor centre "opened its door on Monday 3rd July, 2017". SDCC North Clondalkin Library: "Liscarne Close Rowlagh Dublin 22 D22 E2Y2"; "a purpose-built modern library which opened to the public in December 2020"; "View our VR library experience below- compatible with a Meta Quest 2 VR headset"; Creative Studio at NCL. SDCC Clondalkin Library: "Monastery Road, Clondalkin, Dublin D22 XPO3" (letter O, not a valid eircode character; not printed); "Monday to Thursday: 9.45am - 8.00pm". Irish Rail Clondalkin Fonthill: "Fonthill Road Dublin 22", "Eircode D22Y2F9". Our arithmetic: height = distance x tan(angle) + eye height (assumed 1.5 m, level ground); angle to a 27.5 m top and error for +/-1 degree: 5 m 79.1 degrees +2.69/-2.24; 10 m 69.0 +1.42/-1.30; 20 m 52.4 +0.96/-0.92; 26 m 45.0 +0.92/-0.89; 40 m 33.0 +1.00/-0.98; 80 m 18.0 +1.55/-1.54; 150 m 9.8 +2.71/-2.69; search 1 to 200 m in 0.5 m steps: least worst-case error 0.92 m at 26.5 m; distance misjudged 5% long at 26 m adds 1.30 m; height/base 27.5/4 = 6.88. SDCC pages give the age as "Thought to have been built around 790 AD" and "about 1000 years old": not used.',
    localProject: 'Sensitivity to measurement error. From South Dublin County Council\'s height for the Round Tower (27.5 m), the learner writes a height-from-angle function, then loops over viewing distances adding and subtracting one degree of angle error: the answer moves by up to 2.69 m at 5 m, about 0.9 m at 26 m (45 degrees, the best place, found by search at 26.5 m), and about 2.7 m at 150 m; a 5% distance error at 26 m adds 1.30 m. Assumptions (eye height 1.5 m, level ground) are stated. Lessons: nudge each input to see which errors matter; choose a setup that minimises error; report a margin with the answer. New family for the cluster: sensitivity analysis and error propagation (constructive, no dataset).',
    requiredMentions: [
      '27.5',
      '0.92',
      '2.69',
      '2.71',
      '6.88',
      '1.30',
      '26 metres',
      '3 July 2017',
      'December 2020',
      'D22 DV56',
      'D22 E2Y2',
      'D22 Y2F9'
    ],
    sources: [
      { claim: 'South Dublin County Council, The Round Tower: one of only four remaining round towers in County Dublin; 27.5 metres high with its original cap; thought to be the slenderest in Ireland; Tower Road, Clondalkin, D22 DV56.', url: 'https://www.sdcc.ie/en/services/tourism/the-round-tower/' },
      { claim: 'South Dublin County Council news release: 27.5 metres high and four metres wide at the bottom; raised doorway; four windows facing the compass points; once six floors; visitor centre opened Monday 3 July 2017.', url: 'https://www.sdcc.ie/en/news/the-round-tower-visitor-centre-clondalkin-marks-its-second-birthday-.html' },
      { claim: 'The Round Tower at Clondalkin Village: 27.5 meters high and four meters wide at the bottom; now five floors.', url: 'https://www.dublinsoutdoors.ie/round-tower-clondalkin-village/about-the-round-tower/' },
      { claim: 'South Dublin County Council, North Clondalkin Library: Liscarne Close, Rowlagh, D22 E2Y2; purpose-built, opened December 2020; VR library experience for Meta Quest 2.', url: 'https://www.sdcc.ie/en/services/sport-and-recreation/libraries/join-library-login/find-a-library/north-clondalkin/' },
      { claim: 'South Dublin County Council, Clondalkin Library: Monastery Road; open to 8pm Monday to Thursday (eircode printed with a letter O, not repeated).', url: 'https://www.sdcc.ie/en/services/sport-and-recreation/libraries/join-library-login/find-a-library/clondalkin1/' },
      { claim: 'Irish Rail, Clondalkin Fonthill station: Fonthill Road, Dublin 22, D22 Y2F9.', url: 'https://www.irishrail.ie/en-ie/station/clondalkin-fonthill' }
    ],
    rejectedClaims: [
      'Any age for the tower: the council\'s pages give "around 790 AD" and "about 1000 years old"; self-contradicting sources are the Kerry page\'s lesson.',
      'Clondalkin Library\'s eircode as printed ("XPO3"): contains a letter eircodes do not use.',
      'Any claim about the tower\'s building stone or construction method: not sourced.',
      'The Clondalkin LEA figure and Coláiste Bríde: the South Dublin page owns them.',
      'Any population figure for Clondalkin and any aggregation of census small areas: owner rule for district pages.'
    ]
  }
};
