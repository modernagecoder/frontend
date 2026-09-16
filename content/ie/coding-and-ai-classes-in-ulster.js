'use strict';
// Ulster, meaning only Cavan, Donegal and Monaghan (cg- province page, Ireland
// cluster, Phase 5). The CSO's own Census 2022 province tables label this area
// "Ulster (part of)", and the page uses nothing else: no Northern Ireland figure,
// statistic, school or service appears. Tables read on 17 September 2026.
// Spine: percentage points and per cent measure different things, and can order
// the same two gaps in opposite ways. Comparing Ulster (part of) with Munster,
// long journeys of an hour and a half or more (SAP2022T11T3PROV) differ by only
// 1.5 percentage points, 3.5% against 2.0% of stated journeys, yet Ulster's
// share is 76% higher. Residents born in Ireland (SAP2022T2T1PROV) differ by a
// larger 4.5 percentage points, 78.4% against 82.8%, yet Munster's share is only
// 5.7% higher. Which gap is bigger depends entirely on which measure is chosen.
// All shares are our arithmetic on published counts. Kill gate passed. Spent
// traps avoided: weighted averages (Leinster), non-response and rankings
// (Munster), definitions of a speaker (Connacht).

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'province', tag: 'ULSTER (PART OF)', blurb: 'Cavan, Donegal and Monaghan, the Ulster counties in the State, with a project on percentage points against per cent.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-and-ai-classes-in-ulster',
  code: 'uls',
  accent: '#6B3F7A',
  accentRationale: 'Ulster (part of): a northern plum from the solver, distinct from the crimson, indigo and blue used on the Cavan, Donegal and Monaghan pages',
  pageType: 'governorate',
  place: {
    name: 'Cavan, Donegal and Monaghan',
    eyebrow: 'Ulster, the three counties in the State',
    schemaType: 'Place',
    chain: [
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Donegal', href: '/coding-classes-in-county-donegal' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Cavan, Donegal and Monaghan, Ireland',
  title: 'Coding and AI Classes in Ulster | Modern Age Coders',
  description: 'Live online coding, Python and AI classes for the Ulster counties in the State, Cavan, Donegal and Monaghan, for learners aged 6 to 67. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Cavan, Donegal and Monaghan, with a project on how percentage points and per cent can tell opposite stories about the same gap.',
  twitterDescription: 'Coding and AI classes for Cavan, Donegal and Monaghan, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '17 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Cavan, Donegal and Monaghan',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Cavan, Donegal and Monaghan, taught live in English.'
  },

  h1: 'Coding and AI classes in Ulster',
  capsuleQ: 'What are the best coding and AI classes in Cavan, Donegal and Monaghan?',
  capsule: 'This page covers Ulster as the Irish census counts it: Cavan, Donegal and Monaghan, the three Ulster counties in the State, which the statistics office labels Ulster (part of). They held 310,160 usually resident people and 113,206 households at the 2022 census. Nothing here describes Northern Ireland. Each of the three counties has its own page with us, linked below. In Letterkenny, Cootehill or Clones the offer is identical: two live video lessons in a normal week, a small group matched on ability or a private teacher, and learners anywhere from six to sixty-seven. Nobody pays for the first lesson. From then on it is USD 100 monthly in a group, USD 150 privately.',
  lead: 'Here are two gaps between these three counties and Munster, and a question: which gap is bigger? Among people who stated how long their journey to work, school or college takes, 3.5% here travel an hour and a half or more, against 2.0% in Munster. On birthplace, 78.4% of residents here were born in Ireland, against 82.8% in Munster. The first gap is 1.5 percentage points, the second 4.5, so the birthplace gap looks three times bigger. Now compare them proportionally: the long-journey share here is 76% higher than Munster\'s, while Munster\'s born-in-Ireland share is only 5.7% higher. By that measure the journey gap is thirteen times bigger. Both statements are arithmetically correct, and they rank the same two gaps in opposite orders.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Cavan, Donegal or Monaghan.',

  picks: {
    eyebrow: 'Course picks for Cavan, Donegal and Monaghan',
    h2: 'Four good places to start',
    intro: 'Each course starts with a free lesson from its own teacher, and booking needs contact details only.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch projects that grow a score by adding and by multiplying, and show how different the two feel.' },
      { course: 'maths-through-coding', band: 'Ages 9 to 13', note: 'Percentages, percentage points and ratios, learned by programming the difference between them.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Comparing real census shares both ways, and saying which comparison a claim is making.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults who read or write that something rose by 50% and need to know 50% of what.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Points or per cent?',
      intro: 'Two comparisons between Ulster (part of) and Munster, each measured two ways. Counts are published; every share and difference is our arithmetic.',
      body: [
        { kind: 'table', caption: 'The same two gaps, as percentage points and as a relative difference', head: ['Comparison', 'Ulster (part of)', 'Munster', 'Gap in points', 'Relative gap'], rows: [
          ['Journeys of 1.5 hours or more, share of stated', '6,077, about 3.5%', '15,185, about 2.0%', '1.5 points', 'Ulster share 76% higher'],
          ['Residents born in Ireland', '243,018, about 78.4%', '1,122,711, about 82.8%', '4.5 points', 'Munster share 5.7% higher'],
          ['Which gap looks bigger', '', '', 'Birthplace, three times over', 'Journeys, thirteen times over']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why the measures disagree', p: 'A percentage point gap is a subtraction; a relative gap is a division. Divide by a small number and the result is large, which is why a gap between two small shares, like long journeys, looks dramatic in relative terms and trivial in points.' },
          { h3: 'Where the denominators come from', p: 'Journey shares use people who stated a journey time: here 188,977 counted, of whom 17,631 did not state one. Birthplace shares use all 310,160 usual residents. Both come straight from the census province tables.' },
          { h3: 'What a learner writes', p: 'Every comparison twice, once in points and once relative, and a sentence saying which one a headline would use and what that choice emphasises.' }
        ] },
        { kind: 'callout', h3: 'The oldest trick in reporting, and the simplest defence', p: 'A risk rising from one in a thousand to two in a thousand is up 100%, and also up by a tenth of a percentage point. Both are true. The first sells a story; the second calms one. Health scares, price rises, exam results and advertising all use whichever sounds better for the purpose. The defence costs nothing: whenever you see a percentage change, ask for the two starting numbers, and whenever you see a points change, ask what it was out of. A teenager who has seen the same two census gaps swap places has the reflex for life.' },
        { kind: 'p', text: 'The label on the data matters as well, and here the statistics office gets it exactly right. Its province tables do not call this area Ulster. They call it Ulster (part of), because the historic province also includes six counties outside the State that the Irish census does not cover. We follow that label throughout, and every figure on this page describes Cavan, Donegal and Monaghan only.' }
      ]
    },
    {
      id: 'counties', tint: 'tint', eyebrow: 'The three counties',
      h2: 'Cavan, Donegal and Monaghan',
      intro: 'Each county has a page of its own with local figures, schools and a separate data project.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'County Donegal', p: 'The largest of the three, with a Gaeltacht of its own. See <a class="cg-inline-link" href="/coding-classes-in-county-donegal">coding classes in County Donegal</a>.' },
          { h3: 'County Cavan', p: 'Two of its schools were among the first to teach Leaving Certificate Computer Science. See <a class="cg-inline-link" href="/coding-classes-in-county-cavan">coding classes in County Cavan</a>.' },
          { h3: 'County Monaghan', p: 'Monaghan town, Carrickmacross and Castleblayney, and the countryside around them. See <a class="cg-inline-link" href="/coding-classes-in-county-monaghan">coding classes in County Monaghan</a>.' }
        ] },
        { kind: 'p', text: 'The county pages already carry each county\'s census figures and a data project apiece, so this page does not repeat them. It adds what the census publishes for the three counties taken together.' }
      ]
    },
    {
      id: 'province', tint: '', eyebrow: 'The three counties in the census',
      h2: 'Ulster (part of), as the census reports it',
      intro: 'Totals from the census small area population tables for the province. Our percentages are marked.',
      body: [
        { kind: 'table', caption: 'Cavan, Donegal and Monaghan together, Census 2022', head: ['Census item', 'The three counties'], rows: [
          ['Usually resident population', '310,160'],
          ['Born in the United Kingdom', '38,819, about 12.5%, the highest share of the four provinces'],
          ['Born in Poland', '4,474'],
          ['Households, and those with broadband', '113,206 and 86,744'],
          ['Aged 3 and over and able to speak Irish', '109,292 of 302,797, about 36%'],
          ['Journey under 15 minutes', '73,087 people, about 42.7% of stated journeys']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Short trips and very long ones', p: 'These counties have the highest share of stated journeys under fifteen minutes of the four provinces, and also the highest share over an hour and a half, both by our arithmetic.' },
          { h3: 'Working from home', p: 'Of 130,188 working people, 28,479 work from home at least some of the time, about 21.9%, the lowest share of the four provinces.' },
          { h3: 'Born across the water', p: 'About one resident in eight was born in the United Kingdom, more than twice the share across the State as a whole, which is about 5.7%.' }
        ] },
        { kind: 'spec', title: 'What long journeys mean for evenings', p: 'Where a noticeable share of people travel an hour and a half or more each way, the hours after school are short and precious. A weekly class that begins at home, at a fixed time, asks for none of that travel, and gathers learners at the right level from across all three counties and beyond.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From adding to comparing properly',
    intro: 'Age bands are rough; placement happens in the free lesson.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Plus or times', p: 'Games where one score grows by adding and another by doubling, and the child sees why they part company.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Points and per cent', p: 'Writing programs that compare two shares both ways and print both answers.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Honest comparisons', p: 'Real census shares, compared in points and relative terms, with the choice explained.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Reading claims at work', p: 'Spotting when a report chose points or per cent to make a change look larger or smaller.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'A summary will say something rose by 76% and stop there',
    intro: 'The relative figure is the eye-catching one, so it is the one that tends to travel.',
    p1: 'Ask for the difference between long journeys here and in Munster and a quick answer may well lead with 76% higher. That is accurate. It is also a description of a gap of a point and a half between two small shares, and nothing in the sentence tells the reader which kind of number they are looking at.',
    p2: 'A learner who has worked both versions asks for the base before reacting to any percentage change. It is the least glamorous question in statistics and the one that most reliably stops a misleading figure from being repeated.',
    closer: 'Calculating a percentage is trivial for a machine. Knowing which percentage honestly answers the question is a human judgement, and a good reason to learn this properly in 2026.',
    blogAnchor: 'our case for learning to code properly'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How teaching reaches the three counties',
    intro: 'From Malin Head to Kingscourt, the arrangement is the same.',
    cells: [
      { h3: 'Always live', p: 'A teacher leads each lesson as it happens, and the learner takes part rather than watches.' },
      { h3: 'Grouped by ability', p: 'Five to ten learners at one level, gathered from all three counties and further afield.' },
      { h3: 'A rhythm that holds', p: 'Roughly eight sessions a month, usually two a week, on days and at an hour agreed at the outset.' },
      { h3: 'Irish school stages', p: 'From Junior Cycle to Leaving Certificate, with holidays and exam weeks built in.' },
      { h3: 'What is needed', p: 'A laptop or desktop, working sound and a connection that carries video, all checked in the free lesson.' },
      { h3: 'One to one if needed', p: 'If no suitable group meets at a workable hour, the same course is taught privately.' }
    ],
    spec: { title: 'For families along the border counties', p: 'A learner in these counties who wants to go further with programming may have nobody at the same level within easy reach. An online group removes that problem entirely, and it runs to the Irish school calendar whichever county the learner lives in.' }
  },

  fees: {
    h2: 'Fees in Cavan, Donegal and Monaghan',
    intro: 'Three prices, identical in all three counties.',
    first: 'A full first lesson, free, closing with a level and a suggested course.',
    group: 'A month in a group of five to ten at one level, about eight lessons.',
    private: 'A month of one to one teaching on the same weekly schedule.',
    closer: 'Everything is billed monthly in US dollars at the single rate we use outside India, so a family in Letterkenny and one in Carrickmacross pay the same and there is no second currency. No payment is taken until the free lesson settles a course and a time, and the pricing page covers pauses, missed lessons and changing format.'
  },

  reviewsH2: 'What six families wrote about us on Google, unedited',

  book: {
    h2: 'Book a free first lesson',
    intro: 'A few details are enough: how old the learner is and what they enjoy. The opening hour is then shaped for them, perhaps a Scratch game where adding and doubling race each other, perhaps two census gaps that swap places.',
    success: 'Thank you. Somebody will be in touch about your class in Cavan, Donegal or Monaghan shortly.'
  },

  faq: {
    h2: 'Questions from Cavan, Donegal and Monaghan',
    intro: 'What families in the three counties ask first.',
    items: [
      { q: 'Does this page cover Northern Ireland?', a: 'No. It covers only Cavan, Donegal and Monaghan, which the Irish census labels Ulster (part of). No figure on the page describes Northern Ireland.' },
      { q: 'How many people live in the three counties?', a: 'The 2022 census province tables record 310,160 usually resident people across Cavan, Donegal and Monaghan, in 113,206 households.' },
      { q: 'What is the data project on this page?', a: 'Learners compare two census gaps with Munster, long journeys and birthplace, first in percentage points and then in relative terms, and find that the two methods say opposite things about which gap is bigger.' },
      { q: 'Is there a Gaeltacht in these counties?', a: 'Yes, in Donegal, one of the seven counties the statistics office names as containing Gaeltacht areas. Lessons are in English, so a pupil from a Gaeltacht school starts level with everyone else.' },
      { q: 'Do lesson times suit Irish evenings?', a: 'They are planned for them. The teaching team works from India, where the clock runs four and a half hours ahead of Irish summer time and five and a half ahead in winter, so an Irish after-school or evening slot is a normal working hour there. The exact slot is fixed during the free lesson.' },
      { q: 'Is AI taught, or only programming?', a: 'Both. Younger children usually start with Scratch, while teenagers and adults can take Python, data science or AI courses, and the teacher recommends one at the end of the free lesson.' },
      { q: 'Which county pages do you have?', a: 'One each for Cavan, Donegal and Monaghan, linked on this page, each with its own local figures and data project.' },
      { q: 'Is there a Modern Age Coders classroom in Cavan, Donegal or Monaghan?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes cost in Cavan, Donegal and Monaghan?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'The other three provinces',
    html: 'The rest of the State is covered by pages for <a class="cg-inline-link" href="/coding-and-ai-classes-in-connacht">Connacht</a>, <a class="cg-inline-link" href="/coding-and-ai-classes-in-leinster">Leinster</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-munster">Munster</a>. Parents comparing providers can read <a class="cg-inline-link" href="/best-online-coding-classes-ireland">this comparison of online coding schools</a>, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland page</a> lists every county, city and guide.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Cavan, Donegal, Monaghan and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-donegal', label: 'County Donegal' },
    { href: '/coding-classes-in-county-cavan', label: 'County Cavan' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-uls .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3.19vw, 2.67rem); }
.cg-root.cg-uls .cg-hero h1 { font-weight: 700; letter-spacing: -0.0195em; line-height: 1.061; }
.cg-root.cg-uls .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-uls .cg-eyebrow { letter-spacing: 0.169em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-uls .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.0136em; }
.cg-root.cg-uls .cg-grid-3 { gap: clamp(1.04rem, 2.58vw, 2.05rem); }
.cg-root.cg-uls .cg-table caption { letter-spacing: 0.029em; font-weight: 700; }
.cg-root.cg-uls .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-uls .cg-table tr:last-child td { font-weight: 600; }
.cg-root.cg-uls .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 1.01rem; }
.cg-root.cg-uls .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Ulster (part of), the CSO\'s own label in its Census 2022 province tables for the three Ulster counties in the State, Cavan, Donegal and Monaghan; no Northern Ireland figure is used. Tables read 17 September 2026. SAP2022T2T1PROV usually resident population by birthplace: Ulster (part of) total 310,160, born Ireland 243,018, United Kingdom 38,819, Poland 4,474, India 1,994; Munster total 1,355,848, born Ireland 1,122,711; State total 5,084,879, born United Kingdom 289,053; Connacht 582,891 with 45,148 UK-born; Leinster 2,835,980 with 132,195 UK-born; Munster 72,891 UK-born. SAP2022T11T3PROV journey time to work, school or college, aged 5 and over: Ulster (part of) under 15 minutes 73,087, 1.5 hours and over 6,077, not stated 17,631, total 188,977; Munster 1.5 hours and over 15,185, not stated 85,705, total 839,388; Connacht under 15 minutes 124,460 of 360,119 with 35,686 not stated and 8,297 at 1.5 hours or more; Leinster under 15 minutes 461,473 of 1,798,477 with 203,248 not stated and 51,308 at 1.5 hours or more. SAP2022T15T2PROV: Ulster (part of) 113,206 households, broadband 86,744. SAP2022T3T1PROV: Ulster (part of) aged 3 and over 302,797, able to speak Irish 109,292. SAP2022T11T4PROV: Ulster (part of) 130,188 working persons, 28,479 working from home; Connacht 255,297 and 70,500; Leinster 1,308,124 and 463,956; Munster 600,129 and 173,175. The CSO Gaeltacht definition names seven counties including Donegal. County pages: Cavan, Donegal, Monaghan.',
    localProject: 'Percentage points against per cent. Two gaps between Ulster (part of) and Munster, each measured both ways, by our arithmetic on published counts. Long journeys: 6,077 of 171,346 stated journeys in Ulster (part of), being 188,977 less 17,631 not stated, is 3.55 percent; 15,185 of 753,683 in Munster, being 839,388 less 85,705, is 2.01 percent; a gap of 1.53 percentage points, but Ulster\'s share is 76.0 percent higher. Birthplace: 243,018 of 310,160 residents born in Ireland in Ulster (part of) is 78.35 percent; 1,122,711 of 1,355,848 in Munster is 82.81 percent; a gap of 4.45 percentage points, but Munster\'s share is only 5.7 percent higher. In points the birthplace gap is about three times the journey gap; in relative terms the journey gap is about thirteen times the birthplace gap, so the two measures rank the same pair of gaps in opposite orders. Output: every comparison written both ways, with a sentence stating which a headline would use and what that choice emphasises. Not used, because other province pages own them: weighted averages (Leinster), non-response and rankings (Munster), definitions of a speaker (Connacht). The page follows the CSO label Ulster (part of) and describes Cavan, Donegal and Monaghan only.',
    requiredMentions: [
      '310,160',
      '243,018',
      '38,819',
      '4,474',
      '113,206',
      '86,744',
      '109,292',
      '302,797',
      '73,087',
      '6,077',
      '188,977',
      '17,631'
    ],
    sources: [
      { claim: 'CSO Census 2022 table SAP2022T11T3PROV, population aged 5 years and over by journey time to work, school or college, by province: Ulster (part of) under 15 minutes 73,087, 1.5 hours and over 6,077, not stated 17,631, total 188,977; Munster 1.5 hours and over 15,185, not stated 85,705, total 839,388; Connacht 124,460, 8,297, 35,686, 360,119; Leinster 461,473, 51,308, 203,248, 1,798,477.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T3PROV/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 table SAP2022T2T1PROV, usually resident population by birthplace, by province: Ulster (part of) total 310,160, born Ireland 243,018, United Kingdom 38,819, Poland 4,474; Munster total 1,355,848, born Ireland 1,122,711, United Kingdom 72,891; Connacht 582,891 and 45,148 UK-born; Leinster 2,835,980 and 132,195 UK-born; Ireland 5,084,879 and 289,053 UK-born.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T2T1PROV/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 table SAP2022T15T2PROV, households with internet access by province: Ulster (part of) 113,206 households, broadband 86,744.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T15T2PROV/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 table SAP2022T3T1PROV, ability to speak Irish by province: Ulster (part of) 109,292 able of 302,797 aged 3 and over.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T3T1PROV/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 table SAP2022T11T4PROV, working from home by province: Ulster (part of) 130,188 working persons and 28,479 working from home; Connacht 255,297 and 70,500; Leinster 1,308,124 and 463,956; Munster 600,129 and 173,175.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T4PROV/JSON-stat/2.0/en' },
      { claim: 'CSO PxStat Census 2022 province dimension labels: Connacht, Leinster, Munster, Ulster (part of), Ireland.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadCollection' },
      { claim: 'CSO Census 2022 Profile 8 editor\'s note: the Gaeltacht comprises electoral divisions in Cork, Donegal, Galway, Kerry, Mayo, Meath and Waterford.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile8-theirishlanguageandeducationdonegal/' }
    ],
    rejectedClaims: [
      'Any Northern Ireland figure, statistic, school or service, or any figure for the nine-county historic province.',
      'Calling the area simply Ulster in any figure label: the CSO labels it Ulster (part of), and the page follows that.',
      'Any explanation of why journeys of 1.5 hours or more are more common here: the census does not say, so no cause is asserted.',
      'Weighted averages, non-response rankings and speaker definitions as projects: the Leinster, Munster and Connacht pages own those.',
      'County detail repeated from the Cavan, Donegal and Monaghan pages, which carry it and are linked.'
    ]
  }
};
