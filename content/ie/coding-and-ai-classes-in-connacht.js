'use strict';
// Connacht (cg- province page, Ireland cluster, Phase 5). Only CSO Census 2022
// province-level figures are used, from the Small Area Population province
// tables read on 17 September 2026, plus an index of our Connacht pages.
// Spine: what counts as a speaker. In SAP2022T3T1PROV, 244,788 of Connacht's
// 571,654 residents aged three and over say they can speak Irish, about 42.8%.
// SAP2022T3T2PROV breaks those same 244,788 down by how often they speak it:
// 55,826 never do, 65,180 speak it daily only within the education system, and
// 12,973 plus 3,993, together 16,966, speak it daily outside education. The
// categories sum exactly to 244,788, which the page shows as its check. One
// headline number, several honest definitions, and a very different picture
// under each. Shares are our arithmetic. Kill gate passed. Spent traps avoided:
// weighted averages (Leinster), non-response flipping a ranking (Munster),
// percentage points against per cent (Ulster). The Mayo page's count-versus-rate
// Gaeltacht lesson is also avoided: nothing here compares years.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'province', tag: 'CONNACHT', blurb: 'Galway, Mayo, Sligo, Roscommon and Leitrim, with a project on what it means to count someone as an Irish speaker.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-and-ai-classes-in-connacht',
  code: 'cnt',
  accent: '#1E6B5C',
  accentRationale: 'Connacht: a western sea green from the solver, set apart from the greens and teals of the individual Connacht county pages',
  pageType: 'governorate',
  place: {
    name: 'Connacht',
    eyebrow: 'Connacht, the western province',
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
    { label: 'Galway', href: '/best-coding-class-in-galway' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Connacht, Ireland',
  title: 'Coding and AI Classes in Connacht | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across Connacht, from Galway and Mayo to Sligo, Roscommon and Leitrim, for learners aged 6 to 67. The first lesson is free.',
  ogDescription: 'Coding and AI classes across Connacht, with a project on how one census question about Irish becomes several very different answers.',
  twitterDescription: 'Coding and AI classes across Connacht, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '17 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Connacht',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across the five counties of Connacht, taught live in English.'
  },

  h1: 'Coding and AI classes in Connacht',
  capsuleQ: 'What are the best coding and AI classes in Connacht?',
  capsule: 'Connacht is the west: Galway, Mayo, Sligo, Roscommon and Leitrim, home to 582,891 usually resident people at the 2022 census and to Gaeltacht areas in Galway and Mayo. It has one city, Galway, and five counties we have written about separately, all linked below. Our lessons are the same here as anywhere: taught live over video twice a week at a set hour, in groups of five to ten at one level or one to one, for anybody from six to sixty-seven. Trying the first lesson costs nothing. A group place is then USD 100 a month, and USD 150 buys one to one.',
  lead: 'How many people in Connacht speak Irish? The census asks whether you can, and 244,788 people aged three and over said yes, about 43% of everyone that age in the province. It then asks the same people how often they actually speak it. Of those 244,788, 55,826 said never. Another 65,180 speak it every day, but only inside school or college. The number who speak Irish daily outside the education system is 16,966, under 7% of the headline. Every one of those figures is published, every one is accurate, and they describe very different realities. Which one you call the number of Irish speakers is a definition, not a fact, and choosing it silently is how two honest reports reach opposite conclusions.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Connacht.',

  picks: {
    eyebrow: 'Course picks for the west',
    h2: 'Four courses to begin with',
    intro: 'Each starts with a free lesson taught by the person who would teach the course, and booking needs nothing but contact details.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch projects where a character counts as a player only if it meets a rule the child has to write down.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python and an early habit of asking what exactly a program is counting.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'One census question broken into its categories, and a written definition for every total.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'For adults whose reports depend on a word, like active customer or user, that nobody has defined.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'What counts as a speaker',
      intro: 'The 244,788 people in Connacht who said they can speak Irish, broken down by how often they do. From table SAP2022T3T2PROV; shares are our arithmetic.',
      body: [
        { kind: 'table', caption: 'Irish speakers aged 3 and over in Connacht, by how often they speak Irish', head: ['How often', 'People', 'Share of the 244,788'], rows: [
          ['Daily, only within the education system', '65,180', '26.6%'],
          ['Daily, only outside the education system', '12,973', '5.3%'],
          ['Daily both within and outside the education system', '3,993', '1.6%'],
          ['Weekly, only outside the education system', '15,900', '6.5%'],
          ['Less often, only outside the education system', '83,282', '34.0%'],
          ['Never', '55,826', '22.8%'],
          ['Other combinations and not stated', '7,634', '3.1%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Four honest headlines', p: 'Irish speakers in Connacht: 244,788. Or 188,962 once those who never speak it are removed. Or 83,626 who speak it daily in any setting. Or 16,966 who speak it daily outside school and college. All four are true, and they differ by a factor of fourteen.' },
          { h3: 'The check', p: 'Every category in the table sums to exactly 244,788, the number who said they can speak Irish. That is how you know the breakdown covers the whole group and nobody has been counted twice.' },
          { h3: 'What a learner writes', p: 'A definition first, in one sentence, then the number that matches it. The same habit applies to users, customers, members, attendees and every other word that sounds precise and is not.' }
        ] },
        { kind: 'callout', h3: 'Why definitions deserve more attention than calculations', p: 'Most of the arguments about numbers that reach the news are really arguments about definitions nobody wrote down. How many people use an app depends on whether one login a year counts. How many pupils study a subject depends on whether a single module counts. How many people speak a language depends, as Connacht shows, on whether ability, habit or daily life is the test. Calculating is easy and computers do it for free. Defining what is being counted is the harder, human part, and it is teachable to a twelve year old with a table like this one.' },
        { kind: 'p', text: 'Two notes on the arithmetic, so it can be checked. The 188,962 is 244,788 minus the 55,826 who never speak Irish. The 83,626 adds everyone who speaks it daily in any setting, which is the three daily rows in the table plus 1,480 people in combinations that include daily speaking within education, all published in the same table. The 16,966 adds the two rows for daily speaking outside education. The province is also where Irish ability is most common: about 42.8% of Connacht residents aged three and over say they can speak it, against about 37.7% across the State, by our arithmetic on table SAP2022T3T1PROV.' }
      ]
    },
    {
      id: 'counties', tint: 'tint', eyebrow: 'Our Connacht pages',
      h2: 'One city and five counties',
      intro: 'Galway has a city council and a county council, and each has its own page; every other Connacht county has one.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Galway', p: 'The city at <a class="cg-inline-link" href="/best-coding-class-in-galway">coding classes in Galway</a>, and the county outside it at <a class="cg-inline-link" href="/coding-classes-in-county-galway">County Galway</a>, including its Gaeltacht.' },
          { h3: 'Mayo and Sligo', p: '<a class="cg-inline-link" href="/coding-classes-in-county-mayo">County Mayo</a>, with the second Connacht Gaeltacht, and <a class="cg-inline-link" href="/coding-classes-in-county-sligo">County Sligo</a> to its north.' },
          { h3: 'Roscommon and Leitrim', p: '<a class="cg-inline-link" href="/coding-classes-in-county-roscommon">County Roscommon</a> in the middle of the province and <a class="cg-inline-link" href="/coding-classes-in-county-leitrim">County Leitrim</a> in the north east.' }
        ] },
        { kind: 'p', text: 'Local figures, schools, towns and a separate data project live on each of those pages. What belongs here is only what the census publishes for Connacht as one province.' }
      ]
    },
    {
      id: 'province', tint: '', eyebrow: 'Connacht in figures',
      h2: 'The province in the 2022 census',
      intro: 'Published province totals from the census small area tables, with our percentages marked as such.',
      body: [
        { kind: 'table', caption: 'Connacht, April 2022', head: ['Item', 'Figure'], rows: [
          ['Usually resident population', '582,891'],
          ['Aged 3 and over', '571,654, of whom 244,788 say they can speak Irish'],
          ['Born in Ireland', '472,955, about 81%'],
          ['Born in the United Kingdom', '45,148'],
          ['Households', '217,015, of which 164,270 had broadband'],
          ['Journey to work, school or college under 15 minutes', '124,460 people']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Short journeys', p: 'Of Connacht people who stated a journey time, about 38.4% get to work, school or college in under fifteen minutes, against about 32.9% across the State.' },
          { h3: 'Working from home', p: '70,500 of the province\'s 255,297 working people work from home at least some of the time, about 27.6%.' },
          { h3: 'Two Gaeltacht counties', p: 'Of the seven counties the statistics office names as containing Gaeltacht areas, Galway and Mayo are in Connacht.' }
        ] },
        { kind: 'spec', title: 'What short journeys do and do not solve', p: 'A short trip to school is a real advantage, and many Connacht families have one. It does not create a computing class where none exists, and across a thinly populated province the learners who want one at a given level are often spread over several counties. An online group brings them together without anyone travelling at all.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting to defining',
    intro: 'Ages here are rough; the first lesson settles the level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Rules for who counts', p: 'Games where the child writes the rule that decides what gets counted, then changes it and watches the total move.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Categories that add up', p: 'Splitting a total into parts and checking the parts come back to the total.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Definitions in data', p: 'Writing the definition before the query, on real census categories, and defending the choice.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Metrics at work', p: 'Pinning down what active, engaged or retained means before anyone reports on it.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask how many people speak Irish in Connacht and you will get one number',
    intro: 'Almost certainly the largest one, because it is the one quoted most.',
    p1: 'A quick answer reaches for the headline, 244,788, and presents it as the number of speakers. Nothing in it mentions that more than a fifth of those people never speak the language, or that daily use outside education is a small fraction of it. The answer is not false. It has made a definitional choice without telling you.',
    p2: 'A learner who has broken the census question into its categories asks, before accepting any count, what exactly was counted. That question turns a single confident number into a range of honest ones, and it is the question that separates reading data from repeating it.',
    closer: 'Machines will count whatever category they are pointed at. Deciding which category answers the real question is a human skill, and one well worth building now.',
    blogAnchor: 'why understanding code still matters in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Lessons across the west',
    intro: 'From Clifden to Carrick-on-Shannon, the teaching works the same way.',
    cells: [
      { h3: 'A teacher, in real time', p: 'Lessons are taught live, with the learner answering, asking and trying things as they go.' },
      { h3: 'Matched by ability', p: 'Five to ten learners at a single level, drawn from across Connacht and other countries.' },
      { h3: 'Regular and fixed', p: 'Usually two lessons a week, about eight a month, at a time agreed at the start.' },
      { h3: 'Irish school terms', p: 'Planned around Junior Cycle, Transition Year and the Leaving Certificate, including holidays and exams.' },
      { h3: 'Needs at home', p: 'A laptop or desktop, working sound and a video-capable connection, tested in the free lesson.' },
      { h3: 'Private when needed', p: 'If no group at the right level meets at a sensible hour, lessons are one to one.' }
    ],
    spec: { title: 'For learners in the Gaeltacht', p: 'Lessons are taught in English and programming keywords are English in every language, so a pupil from a Gaeltacht school in Conamara or Erris starts on exactly the same footing as anyone else.' }
  },

  fees: {
    h2: 'Connacht fees',
    intro: 'One price list for all five counties.',
    first: 'An opening lesson, taught fully and free, that ends with a level and a recommendation.',
    group: 'Group lessons for a month, about eight, with five to ten learners at one level.',
    private: 'One to one lessons for a month on the same weekly rhythm.',
    closer: 'Monthly billing is in US dollars, the single rate for families outside India, so Leitrim and Galway pay alike and there is no euro price to set against it. Nothing is charged before the free lesson agrees a course and a time; the pricing page covers pauses, missed lessons and switching format.'
  },

  reviewsH2: 'Six reviews from our families on Google, quoted exactly',

  book: {
    h2: 'Book the free lesson',
    intro: 'Share the learner\'s age and what interests them. The first hour is built for them, from a Scratch game with a counting rule to a census question that splits into several honest answers.',
    success: 'Thank you. Somebody will be in touch about your class in Connacht shortly.'
  },

  faq: {
    h2: 'Connacht coding class questions',
    intro: 'What families in the west ask us first.',
    items: [
      { q: 'How many people live in Connacht?', a: 'The 2022 census province tables record 582,891 usually resident people in Connacht, in 217,015 households.' },
      { q: 'What is the Connacht data project?', a: 'Learners take the 244,788 people in Connacht who said they can speak Irish and break them down by how often they actually speak it, finding four honest totals ranging from 244,788 down to 16,966.' },
      { q: 'Which counties are in Connacht?', a: 'Galway, Leitrim, Mayo, Roscommon and Sligo. We have a page for each, and a separate page for Galway city.' },
      { q: 'Do you teach children from Gaeltacht schools?', a: 'Yes. Lessons are in English and programming keywords are English everywhere, so there is no disadvantage, and Connacht includes Gaeltacht areas in Galway and Mayo.' },
      { q: 'Is Irish more widely spoken in Connacht than elsewhere?', a: 'By ability, yes: about 42.8% of residents aged three and over say they can speak Irish, against about 37.7% across the State, by our arithmetic on the census province table.' },
      { q: 'When are lessons held?', a: 'After school, evenings and weekend mornings. Our teachers are in India, four and a half hours ahead of Ireland in summer and five and a half in winter; the slot is set in the free lesson.' },
      { q: 'Do you teach AI and data as well as coding?', a: 'Yes. Courses range from Scratch for young children to Python, data science and AI for teenagers and adults, and the free lesson is where the right one is chosen.' },
      { q: 'Is there a Modern Age Coders classroom in Connacht?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do Connacht coding classes cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'The rest of Ireland',
    html: 'Continue to <a class="cg-inline-link" href="/coding-and-ai-classes-in-ulster">Ulster, for its three counties in the State</a>, <a class="cg-inline-link" href="/coding-and-ai-classes-in-leinster">Leinster</a> or <a class="cg-inline-link" href="/coding-and-ai-classes-in-munster">Munster</a>. Anyone comparing online coding schools can read <a class="cg-inline-link" href="/best-online-coding-classes-ireland">our comparison</a>, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland page</a> links to everything else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Connacht and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-galway', label: 'Galway' },
    { href: '/coding-classes-in-county-mayo', label: 'County Mayo' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-cnt .cg-hero-grid { align-items: start; gap: clamp(1.13rem, 3.06vw, 2.56rem); }
.cg-root.cg-cnt .cg-hero h1 { font-weight: 700; letter-spacing: -0.0182em; line-height: 1.07; }
.cg-root.cg-cnt .cg-capsule { border-left: 7px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-cnt .cg-eyebrow { letter-spacing: 0.178em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-cnt .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.0127em; }
.cg-root.cg-cnt .cg-grid-3 { gap: clamp(1.1rem, 2.5vw, 1.99rem); }
.cg-root.cg-cnt .cg-table caption { letter-spacing: 0.034em; font-weight: 700; }
.cg-root.cg-cnt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-cnt .cg-table td:first-child { font-weight: 600; }
.cg-root.cg-cnt .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 1.07rem; }
.cg-root.cg-cnt .cg-callout { border-left-width: 8px; }
`,

  dossier: {
    curriculumAuthority: 'Connacht, one of four provinces and not an administrative unit; figures are only those the CSO publishes at province level in Census 2022 Small Area Population province tables, read on 17 September 2026. SAP2022T2T1PROV: Connacht usually resident population 582,891; born in Ireland 472,955; born in the United Kingdom 45,148; State total 5,084,879. SAP2022T3T1PROV: Connacht aged 3 and over 571,654, able to speak Irish 244,788, not able 293,060, not stated 33,806; State 1,873,997 able of 4,975,713. SAP2022T3T2PROV Irish speakers in Connacht by frequency, both sexes: daily only within the education system 65,180; daily within and daily outside 3,993; daily within and weekly outside 844; daily within and less often outside 441; daily within and never outside 195; daily only outside the education system 12,973; weekly only outside 15,900; less often only outside 83,282; never 55,826; not stated 6,154; all Irish speakers 244,788, to which the categories sum exactly. SAP2022T15T2PROV: Connacht 217,015 households, broadband 164,270. SAP2022T11T4PROV: Connacht 255,297 working persons, 70,500 working from home. SAP2022T11T3PROV: Connacht under 15 minutes 124,460, not stated 35,686, total 360,119; State under 15 minutes 936,520, not stated 342,270, total 3,186,961. The CSO Gaeltacht definition names seven counties, two of which, Galway and Mayo, are in Connacht. Connacht pages: Galway city, County Galway, Leitrim, Mayo, Roscommon, Sligo.',
    localProject: 'What counts as a speaker. SAP2022T3T1PROV records 244,788 Connacht residents aged 3 and over who can speak Irish, of 571,654, about 42.8 percent by our arithmetic against about 37.7 percent in the State. SAP2022T3T2PROV divides the same 244,788 by frequency, and its categories sum to exactly that total. Four defensible headline counts follow, all by our arithmetic on published categories: 244,788 who can speak Irish; 188,962 once the 55,826 who never speak it are removed; 83,626 who speak it daily in any setting, being daily only within education 65,180, daily only outside 12,973, daily both 3,993, and the daily-within combinations 844, 441 and 195; and 16,966 who speak it daily outside the education system, being 12,973 plus 3,993. The largest and smallest differ by a factor of about fourteen. Output: a one-sentence definition written before each count, with the check that the categories sum to the total. Nothing compares census years, so the County Mayo count-versus-rate lesson is not reused, and nothing ranks provinces by an alternative denominator, which is the Munster page\'s lesson.',
    requiredMentions: [
      '582,891',
      '571,654',
      '244,788',
      '55,826',
      '12,973',
      '3,993',
      '65,180',
      '83,282',
      '15,900',
      '472,955',
      '45,148',
      '124,460'
    ],
    sources: [
      { claim: 'CSO Census 2022 table SAP2022T3T2PROV, Irish speakers aged 3 years and over by frequency of speaking Irish, by province, both sexes: Connacht daily only within the education system 65,180, daily within and daily outside 3,993, daily within and weekly outside 844, daily within and less often outside 441, daily within and never outside 195, daily only outside 12,973, weekly only outside 15,900, less often only outside 83,282, never 55,826, not stated 6,154, all Irish speakers 244,788.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T3T2PROV/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 table SAP2022T3T1PROV, population aged 3 years and over by ability to speak Irish, by province: Connacht yes 244,788, no 293,060, not stated 33,806, total 571,654; Ireland yes 1,873,997 of 4,975,713.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T3T1PROV/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 table SAP2022T2T1PROV, usually resident population by birthplace, by province: Connacht total 582,891, born Ireland 472,955, born United Kingdom 45,148.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T2T1PROV/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 table SAP2022T15T2PROV, households with internet access by province: Connacht 217,015 households, of which 164,270 broadband.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T15T2PROV/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 table SAP2022T11T4PROV, working from home by province: Connacht 255,297 working persons, 70,500 working from home.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T4PROV/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 table SAP2022T11T3PROV, journey time to work, school or college by province: Connacht under 15 minutes 124,460, not stated 35,686, total 360,119; Ireland under 15 minutes 936,520, not stated 342,270, total 3,186,961.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T3PROV/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 Profile 8 editor\'s note: the Gaeltacht comprises electoral divisions in the counties of Cork, Donegal, Galway, Kerry, Mayo, Meath and Waterford.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile8-theirishlanguageandeducationmayo/' }
    ],
    rejectedClaims: [
      'Any single figure presented as the number of Irish speakers in Connacht without its definition.',
      'Any Connacht figure built by summing county figures ourselves: province figures come only from CSO province tables.',
      'A province ranking on an alternative definition of speaker: ranking changes under a methodological choice are the Munster page\'s lesson.',
      'Any comparison with 2016: count-versus-rate change over time is the County Mayo page\'s lesson.',
      'Weighted averages, and percentage points against per cent: the Leinster and Ulster pages own those.',
      'County detail repeated from the Connacht county and city pages, which carry it and are linked.'
    ]
  }
};
