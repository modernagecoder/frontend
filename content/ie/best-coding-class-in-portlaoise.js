'use strict';
// Portlaoise (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census
// 2022 town tables for "Portlaoise, Co Laois", read 19 September 2026, the Irish
// Rail station page for Portlaoise, Dunamaise Arts Centre's own site and the HSE
// page for the Midland Regional Hospital. Spine: a linear axis hides almost every
// town. The 867 towns in the census table run from 92 residents to 1,243,278, so
// on a chart 1,000 pixels wide and scaled to the largest, 787 towns fall inside
// the first five pixels and Portlaoise, 18th largest at 23,299, sits at pixel 19;
// on a logarithmic axis the same town sits at pixel 582. Every figure was computed
// from the table in this session. New family for the cluster: scale and skew.
// Laois owns the town-list population 23,494, the council eircode R32 EHP9 and
// the Rock of Dunamase, so none of them appears here.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'PORTLAOISE', blurb: 'Seven hundred and eighty-seven towns squeezed into five pixels of one chart. The midlands town that shows why scale is a design decision.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-portlaoise',
  code: 'ptl',
  accent: '#4A2E5E',
  accentRationale: 'Portlaoise: a deep heather from the solver, kept clear of the Laois county accent and the Kildare and Offaly pages either side',
  pageType: 'city',
  place: {
    name: 'Portlaoise',
    eyebrow: 'Portlaoise, County Laois',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'County Laois' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-laois', name: 'County Laois' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Laois', href: '/coding-classes-in-county-laois' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Portlaoise, County Laois, Ireland',
  title: 'Best Coding Class in Portlaoise | Modern Age Coders',
  description: 'Live online coding, Python and AI lessons for Portlaoise learners aged 6 to 67, taught live by a teacher in small ability groups or one to one. First lesson free.',
  ogDescription: 'Coding and AI classes for Portlaoise, with a project on why a chart of Irish towns hides nearly all of them unless the axis changes.',
  twitterDescription: 'Coding and AI classes for Portlaoise, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '19 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Portlaoise',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Portlaoise, County Laois, taught live in English.'
  },

  h1: 'Coding classes in Portlaoise',
  capsuleQ: 'What is the best coding class in Portlaoise?',
  capsule: 'Portlaoise is home to 23,299 usual residents in the census town tables, living in 7,785 households, of which 6,646 report broadband. That makes it the 18th largest of the 867 towns in the table. The teaching we offer happens at home, on video, in real time: two lessons in most weeks, in a small group matched by level or with one learner alone, for anybody from six to sixty-seven. The first lesson is free, and after it the monthly fee is USD 100 in a group or USD 150 one to one.',
  lead: 'Draw every census town on one bar chart, 1,000 pixels wide, with Dublin city and suburbs and its 1,243,278 residents at the far end. Portlaoise, the 18th largest town in Ireland with 23,299 residents, gets a bar 19 pixels long. The median town, Glenealy in Wicklow with 622 people, gets half a pixel. Seven hundred and eighty-seven of the 867 towns end up inside the first five pixels, which is to say invisible. Nothing is wrong with the data. The problem is the axis. Redraw the same chart on a logarithmic scale, where each step multiplies instead of adds, and Portlaoise moves to pixel 582, the median town to pixel 201, and the whole country becomes readable. Choosing that scale, and saying that you chose it, is the lesson on this page.',
  wa: 'Hello Modern Age Coders, I would like to arrange a free coding lesson for a learner in Portlaoise.',

  picks: {
    eyebrow: 'Course picks for Portlaoise',
    h2: 'Courses Portlaoise learners start on',
    intro: 'The age and the interest narrow the choice; the first lesson, taught by the teacher of that course, decides it.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Block coding with charts and counters, where a big number and a small one have to share one screen.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 13', note: 'Powers of ten and multiplying steps, built in code, which is exactly what a logarithmic axis is.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Plotting real census data in Python, including when a linear axis is the wrong choice.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults whose dashboards show one giant bar and a row of slivers nobody can read.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'One chart, two axes',
      intro: 'Five towns from the same census column, placed on a chart 1,000 pixels wide, first with a linear axis and then with a logarithmic one. Populations are published usual residents; the pixel positions are our arithmetic.',
      body: [
        { kind: 'table', caption: 'Where five towns land on two axes of the same width', head: ['Town as labelled', 'Usual residents', 'Linear axis, pixel', 'Logarithmic axis, pixel'], rows: [
          ['Dromineer, Co Tipperary, the smallest', '92', '0.1', '0'],
          ['Glenealy, Co Wicklow, the median town', '622', '0.5', '201'],
          ['Portlaoise, Co Laois', '23,299', '18.7', '582'],
          ['Cork city and suburbs, Co Cork', '219,445', '176.5', '818'],
          ['Dublin city and suburbs, Counties Dublin & Meath', '1,243,278', '1,000', '1,000']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'What the linear chart hides', p: 'With the largest town setting the width, 787 of the 867 towns fall under 6,216 residents and so inside five pixels, and 622 fall inside the very first pixel. A reader sees three or four bars and a smudge, and the smudge is most of Ireland.' },
          { h3: 'What the logarithmic chart shows', p: 'Each equal step along the axis is a tenfold increase, so towns of 100, 1,000, 10,000 and 100,000 sit evenly spaced. The small towns become visible, the gaps between them become comparable, and Portlaoise lands a little past halfway.' },
          { h3: 'What it costs', p: 'A logarithmic axis compresses big differences, so Dublin being 53 times the size of Portlaoise no longer looks dramatic. Nothing is free: the axis must be labelled clearly and the reader told it is logarithmic, or the chart misleads in the other direction.' }
        ] },
        { kind: 'callout', h3: 'Skewed data is the normal case, not the exception', p: 'Town sizes, company revenues, file sizes, website visits, follower counts, house prices: most real quantities have a few enormous values and a long tail of small ones. A default chart drawn on a linear axis shows only the giants, and an average computed across them describes nobody. The habits that fix it are learnable in an hour: look at the range before plotting, try a logarithmic axis when the largest value is hundreds of times the smallest, report a median beside any mean, and label the scale so plainly that nobody can miss it.',
        },
        { kind: 'p', text: 'The project uses the whole census column rather than five towns. The learner loads all 867 town populations, plots them on a linear axis and counts how many bars are narrower than one pixel, then replots on a logarithmic axis and writes two sentences on what changed. They then compute the mean and the median: the mean town has 4,132 residents and the median 622, so the average is 6.6 times the typical town, which is the same skew seen from a different angle. The final step is the caption, stating the scale and why it was chosen, because a chart without that sentence is only half finished.' }
      ]
    },
    {
      id: 'spread', tint: 'tint', eyebrow: 'The shape of the whole column',
      h2: 'Where Ireland\'s town residents actually live',
      intro: 'All 867 towns grouped by powers of ten, which is how a logarithmic axis divides them. Counts of towns and residents are our tallies of the published figures, and they sum exactly to the 3,582,870 residents of all towns combined.',
      body: [
        { kind: 'table', caption: 'Towns and residents by size band, Census 2022', head: ['Town size', 'Towns', 'Residents', 'Share of all town residents'], rows: [
          ['Under 1,000', '562', '241,490', '6.7%'],
          ['1,000 to 9,999', '252', '715,371', '20.0%'],
          ['10,000 to 99,999', '50', '1,062,457', '29.7%'],
          ['100,000 and over', '3', '1,563,552', '43.6%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Most towns, few people', p: 'Five hundred and sixty-two towns, almost two thirds of the list, hold under 7% of all town residents between them. Three places hold 43.6%. Both facts are true at once, which is what a skewed distribution means.' },
          { h3: 'Where Portlaoise sits', p: 'In the band of 50 towns between 10,000 and 99,999, and near the top of it: 18th overall, just behind Newbridge and Balbriggan and just ahead of Athlone and Mullingar.' },
          { h3: 'Why the bands are powers of ten', p: 'Equal bands of 10,000 would put 814 towns in the first one and leave most of the others empty. Bands that multiply by ten keep every group populated, which is the same reasoning as the logarithmic axis.' }
        ] },
        { kind: 'spec', title: 'The arts centre', p: 'Dunamaise Arts Centre gives its address as Church Street, Portlaoise, Co. Laois, R32 W93P, with its gallery and box office open Tuesday to Saturday from 10am to 5pm and an hour before events, operated by The Laois Arts Theatre CLG. We have no connection with it and quote none of its prices.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'Portlaoise in the town tables',
      h2: 'The eighteenth largest town, counted',
      intro: 'Published for the built-up area Portlaoise, Co Laois, in the Census 2022 small area tables.',
      body: [
        { kind: 'table', caption: 'Portlaoise, Census 2022', head: ['Measured', 'Count'], rows: [
          ['Usual residents', '23,299'],
          ['Households', '7,785'],
          ['Households reporting broadband', '6,646'],
          ['Working residents in the travel table', '9,970'],
          ['Residents travelling to school, college or childcare', '6,542'],
          ['Children under fifteen in childcare', '1,629']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The drive to work', p: 'Of the 9,970 working residents, 5,686 drive, 750 walk, 632 give home as their main answer, 597 travel by van, 559 as a car passenger, 264 by train and 230 by bus, with 1,030 not stating.' },
          { h3: 'The school run', p: 'Of 6,542 journeys to school, college or childcare, 3,230 are as a car passenger, 1,166 on foot, 848 by bus, 223 by bicycle and 132 by train.' },
          { h3: 'Home working', p: 'Asked directly about working from home, 2,106 working residents do so at least some of the time, 6,418 never do and 1,446 did not say.' }
        ] },
        { kind: 'spec', title: 'The station and the hospital', p: 'Irish Rail gives Portlaoise station as Station Road, Portlaoise, Co. Laois, Eircode R32 P590, staffed from 05:00 to 23:30 Monday to Saturday with free Wi-Fi. The HSE lists the Midland Regional Hospital Portlaoise at Dublin Road, Portlaoise, R32 RW61. We have no connection with either.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning in Portlaoise',
      h2: 'What the lessons are like',
      intro: 'One agreed hour a week, twice, with a teacher who is there for all of it.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The youngest learners', p: 'Block coding and small games, with charts and counting creeping in almost from the start.' },
          { h3: 'Teenagers', p: 'Python, working websites and AI projects, taken from first year right through the exam years.' },
          { h3: 'Grown-ups', p: 'Adults starting from nothing are common, and 2,106 working residents here already spend part of the week at a desk at home.' }
        ] },
        { kind: 'p', text: 'The station, the arts centre and the hospital are named from their own published pages, and none of them, nor Laois County Council, has any relationship with us. The counts are Central Statistics Office Census 2022 figures, printed as published. The pixel positions, size bands, mean, median and shares are our own arithmetic on the full town column, computed on 19 September 2026, and the page says which axis every position belongs to.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From drawing a chart to choosing its scale',
    intro: 'Ages are only a guide; the first lesson sets the real level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Big and small together', p: 'Block projects that draw bars and counters, and notice when one number swamps the rest.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Multiplying steps', p: 'Powers of ten and logarithms met through code, long before they arrive in a maths exam.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Charts that tell the truth', p: 'Plotting skewed real data, choosing axes, and labelling a scale so nobody misreads it.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Dashboards for real data', p: 'Building reports where the giant and the long tail are both visible and both honest.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant to chart every Irish town',
    intro: 'You will get Dublin, Cork and a smudge.',
    p1: 'Plotting code generated on request almost always uses the default linear axis, because that is the default. For this column it produces a chart dominated by three bars, with nearly eight hundred towns crushed into a few pixels, and it will be described as a chart of Irish towns without a word about what cannot be seen on it.',
    p2: 'A learner who has done this project checks the range before plotting, asks for a logarithmic axis when the largest value is thousands of times the smallest, and adds the sentence that says so. The tool draws either version equally fast; knowing which one to ask for is the part that matters.',
    closer: 'Making a chart has never been easier. Making one that shows the thing you meant to show is still a skill, and a very learnable one.',
    blogAnchor: 'the reasons coding remains worth learning'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How the lessons work in practice',
    intro: 'Six short answers.',
    cells: [
      { h3: 'In real time', p: 'The teacher watches the learner\'s screen and responds to it; nothing is pre-recorded.' },
      { h3: 'Small, matched groups', p: 'Between five and ten learners who are at the same point, wherever they happen to live.' },
      { h3: 'A steady rhythm', p: 'Twice in most weeks, roughly eight lessons a month, at the hour the family chose.' },
      { h3: 'School year in view', p: 'Holidays, mid-terms and exam weeks are allowed for when the timetable is set.' },
      { h3: 'The kit', p: 'A machine with a real keyboard, since a phone will not do, plus speakers or a headset and broadband that can hold a video call.' },
      { h3: 'Alone with a teacher', p: 'One to one is there for learners whose level or whose hours no group matches.' }
    ],
    spec: { title: 'A town in the middle of the list', p: 'Portlaoise sits between the few very large places and the hundreds of small ones. Online lessons treat every point on that list the same way, which is the one thing the chart on this page cannot say about anything else.' }
  },

  fees: {
    h2: 'Portlaoise class fees',
    intro: 'What it costs, in three lines.',
    first: 'The first lesson, taught in full and assessed, for nothing.',
    group: 'A month in a matched group of five to ten, about eight live lessons.',
    private: 'A month of one to one lessons at the same weekly frequency.',
    closer: 'Portlaoise pays what every family outside India pays: one monthly rate in US dollars, with no euro version shown alongside. Money is only asked for once a course and a weekly time actually exist, and the pricing page covers holidays, a lesson that has to be missed, and switching between a group and private teaching.'
  },

  reviewsH2: 'What six families wrote about us on Google, word for word',

  book: {
    h2: 'Book a free Portlaoise lesson',
    intro: 'Tell us how old the learner is and what they enjoy. The first hour is planned from that and could end with a finished game, a first Python script, or a chart redrawn until it shows what it was meant to show.',
    success: 'Thank you. We will be in touch about the Portlaoise lesson shortly.'
  },

  faq: {
    h2: 'Portlaoise coding class questions',
    intro: 'Answers to what Portlaoise families ask most often.',
    items: [
      { q: 'How many people live in Portlaoise?', a: 'Census 2022 small area tables put 23,299 usual residents in the built-up area of Portlaoise, in 7,785 households, which makes it the 18th largest of 867 towns. The Laois county page quotes a different census product, the town list, so its figure is not identical.' },
      { q: 'What is the Portlaoise data project?', a: 'Learners plot all 867 census towns on a linear axis, count how many bars are narrower than a pixel, then redraw on a logarithmic axis where Portlaoise moves from pixel 19 to pixel 582 of 1,000. They finish by comparing the mean town, 4,132 residents, with the median, 622.' },
      { q: 'What is a logarithmic axis?', a: 'An axis where each equal step multiplies the value, usually by ten, instead of adding to it. It lets very large and very small values share one chart, as long as the scale is labelled so readers know which kind they are looking at.' },
      { q: 'How do Portlaoise residents get to work?', a: 'Of the 9,970 working residents in the travel table, 5,686 drive, 750 walk, 632 give working mainly at or from home, 597 travel by van, 559 as a car passenger, 264 by train and 230 by bus, with 1,030 not stating a mode.' },
      { q: 'When do lessons happen?', a: 'After school, in the evening, and on weekend mornings. India keeps one time all year while Ireland moves its clocks, so the gap is four and a half hours from late March to late October and five and a half for the rest of the year, and we choose the weekly slot with that in mind.' },
      { q: 'Can adults learn with you in Portlaoise?', a: 'Yes. Our learners go up to sixty-seven, many adults start with no experience at all, and the first lesson settles whether an adult learns in a matched group or one to one.' },
      { q: 'Is maths needed before starting?', a: 'No. Anything a project needs, such as the powers of ten behind this page, is taught when it comes up.' },
      { q: 'Is there a Modern Age Coders classroom in Portlaoise?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Portlaoise cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Portlaoise',
    html: 'Its county is covered on the <a class="cg-inline-link" href="/coding-classes-in-county-laois">County Laois</a> page, and its nearest neighbours on the list of large towns include <a class="cg-inline-link" href="/best-coding-class-in-newbridge">Newbridge</a> and <a class="cg-inline-link" href="/best-coding-class-in-athlone">Athlone</a>, all within <a class="cg-inline-link" href="/coding-and-ai-classes-in-leinster">Leinster</a>. A side-by-side look at online schools is on <a class="cg-inline-link" href="/best-online-coding-classes-ireland">our comparison page</a>, and every page in this series is gathered on the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Portlaoise, Laois and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-laois', label: 'County Laois' },
    { href: '/best-coding-class-in-athlone', label: 'Athlone' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-ptl .cg-hero-grid { align-items: start; gap: clamp(1.14rem, 3.21vw, 2.57rem); }
.cg-root.cg-ptl .cg-hero h1 { font-weight: 700; letter-spacing: -0.0189em; line-height: 1.058; }
.cg-root.cg-ptl .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-ptl .cg-eyebrow { letter-spacing: 0.173em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-ptl .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.0132em; }
.cg-root.cg-ptl .cg-grid-3 { gap: clamp(1.09rem, 2.7vw, 2.1rem); }
.cg-root.cg-ptl .cg-table caption { letter-spacing: 0.036em; font-weight: 700; }
.cg-root.cg-ptl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ptl .cg-table td:last-child { font-weight: 600; }
.cg-root.cg-ptl .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 1.05rem; }
.cg-root.cg-ptl .cg-callout { border-left-width: 8px; }
`,

  dossier: {
    curriculumAuthority: 'Portlaoise, the built-up area "Portlaoise, Co Laois", CSO Census 2022 Small Area Population town tables, read 19 September 2026. SAP2022T2T1TOWN22 usual residents by birthplace, total for Portlaoise 23,299, born in Ireland 16,664. Across the town dimension of the same table, 868 labels, 867 towns plus the all-towns row labelled State whose total is 3,582,870: the largest town is Dublin city and suburbs, Counties Dublin & Meath at 1,243,278, the smallest Dromineer, Co Tipperary at 92, Portlaoise is 18th, after Newbridge 24,253 and Balbriggan 24,145 and before Athlone 22,664, Mullingar 22,470 and Letterkenny 22,252; the median town, the 434th, is Glenealy, Co Wicklow at 622 and the mean is 4,132; Cork city and suburbs has 219,445. Our banding: under 1,000, 562 towns with 241,490 residents; 1,000 to 9,999, 252 towns with 715,371; 10,000 to 99,999, 50 towns with 1,062,457; 100,000 and over, 3 towns with 1,563,552, which is 43.6 percent; the bands sum exactly to 867 towns and 3,582,870 residents. Our chart arithmetic on a 1,000-pixel axis scaled to the largest town: linear positions Dromineer 0.1, Glenealy 0.5, Portlaoise 18.7, Cork 176.5; 787 towns fall below 6,216 residents and so within the first five pixels, 622 below 1,243 and so within the first pixel; logarithmic positions from 92 to 1,243,278: Glenealy 201, Portlaoise 582, Cork 818. SAP2022T15T2TOWN22: households 7,785, broadband 6,646, other 141, none 470, not stated 528. SAP2022T11T1TOWN22 to work total 9,970: car driver 5,686, not stated 1,030, on foot 750, work mainly at or from home 632, van 597, car passenger 559, train DART or Luas 264, bus 230, bicycle 166; to school, college or childcare total 6,542: car passenger 3,230, on foot 1,166, bus 848, not stated 733, bicycle 223, car driver 152, train 132. SAP2022T11T4TOWN22: 9,970 working persons, 2,106 work from home at least some of the time, 6,418 never, 1,446 not stated. SAP2022T11T5TOWN22: 1,629 children under 15 in childcare. Irish Rail, Portlaoise station: "Station Road, Portlaoise, Co. Laois", "Eircode R32 P590", staffing "Monday to Saturday: 05:00 - 23:30", "Free wifi available". Dunamaise Arts Centre: "Church Street Portlaoise Co. Laois R32 W93P", "Gallery and Box Office: Tuesday to Saturday: 10am-5pm", "The Laois Arts Theatre CLG, t/a Dunamaise Arts Centre". HSE, Midland Regional Hospital Portlaoise: "Dublin Road, Portlaoise, Laois, R32 RW61".',
    localProject: 'One chart, two axes. The 867 towns in the census table run from 92 residents at Dromineer to 1,243,278 in Dublin city and suburbs. On a bar chart 1,000 pixels wide scaled to the largest town, Portlaoise, 18th largest at 23,299, gets 19 pixels, the median town, Glenealy at 622, half a pixel, and 787 towns fall inside the first five pixels, so the chart shows three or four bars and a smudge that is most of the country. On a logarithmic axis the same data places the median town at pixel 201, Portlaoise at 582 and Cork at 818, and every size of town becomes readable, at the cost of compressing large differences, so the axis must be labelled. The same skew appears in the banding by powers of ten, where 562 towns under 1,000 residents hold 6.7 percent of all town residents and three places over 100,000 hold 43.6 percent, and in the mean town of 4,132 against a median of 622. The learner plots the full column both ways, counts bars narrower than a pixel, computes mean and median, and writes the caption that states the scale and why it was chosen. New family for the cluster: scale and skew.',
    requiredMentions: [
      '23,299',
      '7,785',
      '6,646',
      '9,970',
      '5,686',
      '6,542',
      '3,230',
      '1,629',
      '867',
      '787',
      'R32 P590',
      'R32 W93P'
    ],
    sources: [
      { claim: 'CSO Census 2022 table SAP2022T2T1TOWN22, usual resident population: Portlaoise, Co Laois 23,299; Dublin city and suburbs, Counties Dublin & Meath 1,243,278; Cork city and suburbs 219,445; Dromineer, Co Tipperary 92; Glenealy, Co Wicklow 622; Newbridge 24,253; Balbriggan 24,145; Athlone 22,664; Mullingar 22,470; Letterkenny 22,252; all-towns row labelled State 3,582,870, equal to the sum of the 867 towns.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T2T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T15T2TOWN22, SAP2022T11T1TOWN22, SAP2022T11T4TOWN22 and SAP2022T11T5TOWN22, Portlaoise: households 7,785, broadband 6,646; to work 9,970 with car driver 5,686, on foot 750, mainly at or from home 632, van 597, car passenger 559, train 264, bus 230, not stated 1,030; to school, college or childcare 6,542 with car passenger 3,230, on foot 1,166, bus 848, bicycle 223, train 132; 2,106 work from home at least some of the time, 6,418 never, 1,446 not stated; 1,629 children under 15 in childcare.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'Irish Rail, Portlaoise station: "Station Road, Portlaoise, Co. Laois", "Eircode R32 P590"; staffing "Monday to Saturday: 05:00 - 23:30"; "Free wifi available".', url: 'https://www.irishrail.ie/en-ie/station/portlaoise' },
      { claim: 'Dunamaise Arts Centre: "Church Street Portlaoise Co. Laois R32 W93P"; "Gallery and Box Office: Tuesday to Saturday: 10am-5pm"; operated by "The Laois Arts Theatre CLG, t/a Dunamaise Arts Centre".', url: 'https://www.dunamaise.ie/' },
      { claim: 'Health Service Executive: Midland Regional Hospital Portlaoise, "Dublin Road, Portlaoise, Laois, R32 RW61".', url: 'https://www2.hse.ie/services/hospitals/midland-regional-hospital-portlaoise/' }
    ],
    rejectedClaims: [
      'Any chart position on this page without the axis it belongs to: linear and logarithmic positions are always labelled.',
      'Treating the mean town of 4,132 residents as typical: the median town has 622, and both are given.',
      'Any ranking of towns as better or worse: the order is by usual residents only.',
      'The census town-list population of Portlaoise, the Laois County Council eircode and the Rock of Dunamase: the County Laois page owns all three.',
      'Any Dunamaise Arts Centre ticket price, and any claim about the hospital beyond its published address.',
      'Any reason for the size of any town or for Portlaoise\'s travel shares.'
    ]
  }
};
