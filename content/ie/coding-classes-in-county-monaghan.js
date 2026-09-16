'use strict';
// County Monaghan (cg- county page, Ireland cluster, Phase 4). Spine: the
// description is a claim, and claims can be tested. Monaghan County Council's
// Bring Bank Locations dataset, CC BY 4.0, 24 rows, states in its own item
// description that "The Projection of this dataset is WGS84". Its X and Y
// columns run from about minus 807,000 to minus 732,000, which no longitude or
// latitude can be, and converting them as Web Mercator reproduces the file's own
// Lat and Long columns to six decimal places in all 24 rows. The file is right
// and its description is wrong, and the learner proves it with arithmetic rather
// than opinion. A second instance from the same county, stated but not made a
// project: the Patrick Kavanagh Centre's own site says it is closed for
// refurbishment, on a site whose newest dated content is from 2019, so the
// published status may not be the current one. The coordinate-unit finding
// itself overlaps County Cork, which is why the page frames the lesson as
// testing documentation rather than as coordinate systems. NOT USED: the
// Yes/No text booleans (Galway city owns that), the per-row update date that
// predates the layer (Cavan owns metadata dates), and the three electoral areas
// that sum to the county (County Galway). REPUBLIC ONLY: Monaghan borders
// Northern Ireland; its Profile 7 release contains no cross-border commuting
// figure and no Northern Ireland statistic is used. Facts read at primary
// sources on 16 September 2026.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'county', tag: 'COUNTY MONAGHAN', blurb: 'Monaghan town, Carrickmacross and Castleblayney, with a project on a dataset whose description gets its own file wrong.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-county-monaghan',
  code: 'mgh',
  accent: '#35507C',
  accentRationale: 'County Monaghan: a drumlin-country blue from the solver, separate from the western and midland blues in the cluster',
  pageType: 'governorate',
  place: {
    name: 'County Monaghan',
    eyebrow: 'County Monaghan, Ulster',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-louth', name: 'County Louth' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'County Louth', href: '/coding-classes-in-county-louth' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'County Monaghan, Ireland',
  title: 'Coding Classes in County Monaghan | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across County Monaghan, from Monaghan town and Carrickmacross to Castleblayney, Clones and Ballybay, ages 6 to 67.',
  ogDescription: 'Coding and AI classes for County Monaghan, with a project on a public dataset whose written description contradicts its own numbers.',
  twitterDescription: 'Coding classes across County Monaghan, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '16 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for County Monaghan Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across County Monaghan, taught live in English.'
  },

  h1: 'Coding classes in County Monaghan',
  capsuleQ: 'What are the best coding classes in County Monaghan?',
  capsule: 'County Monaghan counted 65,288 residents in 2022, and in three towns: Monaghan with 7,894, Carrickmacross with 5,745 and Castleblayney with 3,926, the last home to the one Monaghan school that started Leaving Certificate Computer Science in the first wave. Employment rose 12% in six years and manufacturing is the largest employer. Lessons with us happen live on video, twice a week at an agreed hour, in a group of five to ten at the same level or on a one to one basis, for any age from six to sixty-seven. There is no charge for the first; groups then cost USD 100 a month and private lessons USD 150.',
  lead: 'Monaghan County Council publishes a small, tidy file listing the county\'s 24 bottle and can banks. Its written description says, in a plain sentence, that the data uses WGS84, which is ordinary latitude and longitude. Look at the X column and the numbers run from about minus 807,000 to minus 732,000. No longitude on earth is minus 807,000. So either the numbers are broken or the sentence describing them is wrong, and this is a question with a definite answer, not a matter of opinion. The file also contains its own latitude and longitude columns. Convert X and Y as if they were Web Mercator, the system web maps use, and you reproduce those columns to six decimal places, in every one of the 24 rows. The data was right all along. The description was not.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in County Monaghan.',

  picks: {
    eyebrow: 'Course picks for County Monaghan',
    h2: 'Courses to start from',
    intro: 'Pick by age and interest and let the first lesson confirm it. That lesson is taught by the teacher who would take the course, and booking it needs no payment details.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch projects where the instructions on screen say one thing and the game does another, and the child works out which to trust.' },
      { course: 'maths-through-coding', band: 'Ages 9 to 13', note: 'Coordinates, conversions and the arithmetic that lets you prove which of two claims is true.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Testing what a dataset says about itself against what its numbers actually contain.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'For adults who inherit files with documentation nobody has checked since it was written.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'The description says one thing, the numbers another',
      intro: 'Twenty four recycling points, one sentence of documentation, and a test that settles which is right.',
      body: [
        { kind: 'table', caption: 'What the bring bank file claims about itself, and what we measured', head: ['Question', 'The written description', 'The file itself'], rows: [
          ['What system are the X and Y columns in?', 'WGS84, meaning degrees of latitude and longitude', 'Values from about minus 807,000 to minus 732,000, impossible as degrees'],
          ['Can the claim be tested?', 'Not from the text alone', 'Yes: the file also carries Lat and Long columns to compare against'],
          ['Converting X and Y as Web Mercator', '', 'Matches the Lat and Long columns to six decimal places in all 24 rows'],
          ['Other coordinate pairs in the file', '', 'Irish Grid and Irish Transverse Mercator, each named for what it is'],
          ['Verdict', '', 'The numbers are right; the sentence describing them is wrong']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why the prose loses', p: 'A sentence of documentation is somebody\'s recollection of the data, written once and rarely revisited. The numbers are the data. When the two disagree and one of them can be recomputed from the file, recompute it.' },
          { h3: 'What a careless user does', p: 'Reads WGS84, treats X and Y as longitude and latitude, and plots 24 recycling points in a place that does not exist, or gets an error and assumes the file is corrupt.' },
          { h3: 'What a careful user does', p: 'Notices the magnitude is impossible, looks for a second column that should agree, writes a five line conversion, and proves the answer in every row.' }
        ] },
        { kind: 'callout', h3: 'The general lesson, and why it outlasts this file', p: 'Every dataset comes with claims about itself: what the columns mean, what units they use, when it was updated, how complete it is. Those claims are written by people, often in a hurry, often by someone other than whoever built the file. They are the least tested part of any dataset. A learner who has once caught a description contradicting its own numbers, and proved it with arithmetic rather than suspicion, stops treating documentation as authority and starts treating it as a hypothesis. That single shift in attitude is what separates people who can be trusted with data from people who repeat what the label says.' },
        { kind: 'p', text: 'We should be honest that a coordinate-system surprise also appears on our County Cork page, in a different council\'s conservation file. What is different here is the proof. In Cork the coordinates were simply unexpected. In Monaghan the file makes a specific written claim, carries the evidence to test it, and fails the test in all 24 rows, which turns a technical detail into a lesson about testing any statement a source makes about itself. The same county offers a second, gentler example: the Patrick Kavanagh Centre in Inniskeen says on its own website that it is closed for refurbishment, but the newest dated content on that website is from 2019, so its published status may not describe today.' }
      ]
    },
    {
      id: 'context', tint: '', eyebrow: 'The county today',
      h2: 'Three towns and the drumlins between them',
      intro: 'From the statistics office\'s Monaghan releases for Census 2022.',
      body: [
        { kind: 'table', caption: 'Monaghan in the 2022 census', head: ['Topic', 'Recorded'], rows: [
          ['People living in the county', '65,288, an increase of 3,902 or 6%, against 8% for the State'],
          ['Women and men', '32,394 and 32,894, or 102 males to every 100 females'],
          ['Average age', '38.7, just under the national 38.8'],
          ['Aged 65 and over', '10,397, up 21%'],
          ['Born outside the State', '14,665 people, 23%, above the national 20%'],
          ['Dual Irish citizens', '1,427, up from 775']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Monaghan town', p: '7,894 people across 7.2 square kilometres, average age 39.8, with 18.9% of residents under 15.' },
          { h3: 'Carrickmacross', p: '5,745 people at 1,351.4 per square kilometre and the youngest town in the county, average age 37.1, with 21.9% under 15. Emyvale is the oldest, at 41.5.' },
          { h3: 'Castleblayney', p: '3,926 people, average age 38.5, and 21.5% of residents under 15.' }
        ] },
        { kind: 'p', text: 'In Monaghan the largest non-Irish group is Lithuanian, at 2,011, followed by Latvian at 776, UK at 713 and Polish at 709, together part of the 11% of the county who are not Irish citizens. Irish is spoken by 23,571 people aged three and over, 39.3%, and the county has no Gaeltacht. Our classes are in English, which is also the language of every programming keyword, so neither fact changes anything for a learner here.' }
      ]
    },
    {
      id: 'work', tint: 'tint', eyebrow: 'Work and school',
      h2: 'Manufacturing, a one-school start and a county that walks in Clones',
      intro: 'What Monaghan does, how it travels, and how its schools began with computer science.',
      body: [
        { kind: 'table', caption: 'Monaghan at work, Census 2022', head: ['The statistics office reported', 'Detail'], rows: [
          ['People at work', 'Nearly 28,600, up 12% from more than 25,500 in 2016'],
          ['Largest sectors', 'Manufacturing almost 4,400, retail nearly 3,900, health and social work more than 3,000'],
          ['Unemployment', '8%, down from 13%, with participation at 61%, the same as nationally'],
          ['Travelling to work', '26,139, of whom 17,160 drive and 1,837 walk'],
          ['Average journey', '26.9 minutes, up from 24.9 in 2016'],
          ['Working from home at least one day a week', '5,900 people, 21%, among the least likely workforces in the country to do so']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Clones walks', p: 'The statistics office reports that almost one in three working commuters in Clones walked to work, the second highest rate in the country.' },
          { h3: 'The first-wave school', p: 'Castleblayney College on the Dublin Road was Monaghan\'s single school among the forty that began Leaving Certificate Computer Science in September 2018.' },
          { h3: 'Third level', p: 'Almost 15,400 people hold a third level qualification, up from nearly 12,400, a rate of 37% against 45% nationally, and 154 residents hold a PhD.' }
        ] },
        { kind: 'spec', title: 'A county that mostly does not work from home', p: 'Only 21% of Monaghan\'s workforce works from home at any point in a week, which the statistics office places among the lowest in Ireland, largely because manufacturing, retail and care cannot be done at a kitchen table. For a family that means the evening is often the first time everybody is home, and an evening class that requires another car journey competes with the only free hours in the day. One that happens at the kitchen table does not.' }
      ]
    },
    {
      id: 'places', tint: '', eyebrow: 'Monaghan addresses',
      h2: 'A council, a forest and a closed museum',
      intro: 'Each checked on the website of the organisation responsible.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Monaghan County Council', p: 'The Glen, Monaghan, eircode H18 YT50. The council lists 17 datasets on the national portal, including the bring bank file used in the project.' },
          { h3: 'Rossmore Forest Park', p: 'Coillte places it about three kilometres south of Monaghan town. A castle was built there in 1827 and demolished in 1974, and an avenue of yew trees runs about 500 metres from the walled garden.' },
          { h3: 'The Patrick Kavanagh Centre', p: 'In Inniskeen. Its own site says the exhibition is closed for refurbishment until further notice, with tours by appointment, and we repeat that with the caution given in the project above.' }
        ] },
        { kind: 'p', text: 'This page covers the Republic of Ireland only. Monaghan borders Northern Ireland, but the statistics office\'s Monaghan commuting release contains no figure for travel across the border, so we give none and use no Northern Ireland statistic. We have no connection with Monaghan County Council, Coillte, the Kavanagh Centre or any school named here. The census figures are the statistics office\'s; the coordinate test described in the project is ours, run on the council\'s file, which is published under a Creative Commons Attribution licence.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From following instructions to testing them',
    intro: 'Age bands are a starting guess. The first lesson places the learner properly.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'When the rules are wrong', p: 'Games whose written instructions do not match how they play, and the fun of finding out which is true.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Proving a claim', p: 'Turning a statement about some numbers into a calculation that confirms or refutes it.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Documentation as hypothesis', p: 'Checking a dataset\'s description against its contents and writing up where they part company.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Trusting inherited files', p: 'Verifying the claims attached to data you did not build, before anyone relies on them.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'A tool reading that file would believe the description',
    intro: 'The sentence is clear, confident and wrong, which is the most persuasive kind of wrong.',
    p1: 'Give an automated helper the bring bank file and its description and ask for a map. The description says WGS84, so that is how the columns will be read, and the result will either fail or quietly produce nonsense. There is nothing unreasonable in that. A clear statement from the publisher is exactly what any sensible reader, human or machine, would start from.',
    p2: 'What catches it is a person who looks at minus 807,000, knows no longitude is that size, and goes looking for a way to test the claim instead of arguing with it. That instinct, magnitude first and then proof, is teachable to a thirteen year old and still missing from a great many adult analysts.',
    closer: 'It is a very clear example of why learning to code still matters in 2026: the tools will follow the documentation, and somebody has to notice when the documentation is wrong.',
    blogAnchor: 'why learning to code still matters in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Lessons across Monaghan, in practice',
    intro: 'What a week actually involves.',
    cells: [
      { h3: 'Taught as it happens', p: 'Each lesson is live, with a teacher asking and answering questions throughout, not a recording to sit through alone.' },
      { h3: 'Among learners at the same level', p: 'Groups of five to ten are formed by ability, drawing on Monaghan and other countries so the fit is real.' },
      { h3: 'A fixed place in the week', p: 'Usually two lessons a week, about eight a month, at a time agreed at the start and then held.' },
      { h3: 'Irish school calendar respected', p: 'From Junior Cycle to Leaving Certificate, with mid-terms, holidays and exam weeks planned for.' },
      { h3: 'What sits on the desk', p: 'A laptop or desktop, audio that works and a connection that carries video. The first lesson checks all of it.' },
      { h3: 'Private where that works better', p: 'When no suitable group meets at a manageable hour, the course runs one to one.' }
    ],
    spec: { title: 'For Clones, Ballybay and the roads between', p: 'With 17,160 people already driving to work and the average journey up to 26.9 minutes, an extra weekly trip into a town for a class is a real cost for a family outside Monaghan, Carrickmacross or Castleblayney. An online group at the right level, at an hour fixed once for the term, brings the same teaching to a farmhouse outside Ballybay as to a house in Monaghan town.' }
  },

  fees: {
    h2: 'Monaghan lesson fees',
    intro: 'The whole price list.',
    first: 'An opening lesson, taught in full, free of charge.',
    group: 'A month in a group of five to ten learners at one level, around eight lessons.',
    private: 'A month of one to one lessons at the same weekly pace.',
    closer: 'Fees are charged monthly in US dollars, at the one rate we use for all families outside India, so Clones and Carrickmacross pay identical amounts and no second currency appears anywhere. Nothing is charged before that first lesson has settled a course and a weekly time, and pauses, missed lessons and a switch between group and private are covered on the pricing page.'
  },

  reviewsH2: 'Six Google reviews from our families, quoted in full',

  book: {
    h2: 'Ask for the first lesson',
    intro: 'Tell us the learner\'s age and what interests them. The first hour is planned for that learner, whether that means a Scratch game with instructions that lie or a real council file whose description does.',
    success: 'Thank you. Somebody will be in touch about your County Monaghan class shortly.'
  },

  faq: {
    h2: 'County Monaghan coding class questions',
    intro: 'What Monaghan families usually want to know.',
    items: [
      { q: 'How many people live in County Monaghan?', a: 'The 2022 census recorded 65,288, up 3,902 or 6% since 2016, with 10,397 people aged 65 or over.' },
      { q: 'What is the Monaghan data project?', a: 'Learners test the written description of the council\'s bring bank dataset, which says its coordinates are latitude and longitude, against the numbers themselves, and prove with a conversion that matches all 24 rows that the description is wrong.' },
      { q: 'Which Monaghan school first offered Leaving Certificate Computer Science?', a: 'Castleblayney College on the Dublin Road in Castleblayney, the county\'s only school among the forty that started in September 2018.' },
      { q: 'How big are the main towns?', a: 'Monaghan town had 7,894 residents in 2022, Carrickmacross 5,745 and Castleblayney 3,926. Carrickmacross is the youngest of them, with an average age of 37.1.' },
      { q: 'Does this page cover Northern Ireland?', a: 'No. All figures come from Republic of Ireland sources. The statistics office\'s Monaghan commuting release has no cross-border figure, so none appears here.' },
      { q: 'Do you teach outside the three towns?', a: 'Yes. Clones, Ballybay, Emyvale and the countryside between them receive exactly the same lessons at exactly the same times.' },
      { q: 'When are lessons held?', a: 'After school, in the evening and on weekend mornings. Our teachers are in India, four and a half hours ahead of Irish time in summer and five and a half in winter; your slot is set in the first lesson.' },
      { q: 'Is there a Modern Age Coders classroom in County Monaghan?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do County Monaghan coding classes cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Beyond Monaghan',
    html: 'Neighbouring pages include <a class="cg-inline-link" href="/coding-classes-in-county-cavan">County Cavan</a> to the south west and <a class="cg-inline-link" href="/coding-classes-in-county-louth">County Louth</a> and <a class="cg-inline-link" href="/coding-classes-in-county-meath">County Meath</a> to the south east. A straightforward comparison of online coding schools is <a class="cg-inline-link" href="/best-online-coding-classes-ireland">available here</a>, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland page</a> links to every county, city and course guide we have written.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'County Monaghan and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-cavan', label: 'County Cavan' },
    { href: '/coding-classes-in-county-louth', label: 'County Louth' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-mgh .cg-hero-grid { align-items: start; gap: clamp(1.14rem, 3.09vw, 2.59rem); }
.cg-root.cg-mgh .cg-hero h1 { font-weight: 700; letter-spacing: -0.0178em; line-height: 1.071; }
.cg-root.cg-mgh .cg-capsule { border-left: 7px solid var(--cg-accent); padding-left: 1.08rem; }
.cg-root.cg-mgh .cg-eyebrow { letter-spacing: 0.177em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-mgh .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.0126em; }
.cg-root.cg-mgh .cg-grid-3 { gap: clamp(1.08rem, 2.46vw, 1.97rem); }
.cg-root.cg-mgh .cg-table caption { letter-spacing: 0.032em; font-weight: 700; }
.cg-root.cg-mgh .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mgh .cg-table td:nth-child(3) { font-weight: 500; }
.cg-root.cg-mgh .cg-ladder-col { border-top: 6px solid var(--cg-accent); padding-top: 0.98rem; }
.cg-root.cg-mgh .cg-callout { border-left-width: 8px; }
`,

  dossier: {
    curriculumAuthority: 'County Monaghan, whose council area is the county, Census 2022 (CSO Monaghan releases, Republic of Ireland only): population 65,288, up 3,902 (6 percent) since 2016, against State growth of 8 percent; 32,394 female and 32,894 male, 102 males per 100 females; average age 38.7 against 37.4 in 2016 and a national 38.8; people aged 65 and over up 21 percent to 10,397. Birthplace: 52 percent (33,378) born in the county, 26 percent (16,753) elsewhere in the State and 23 percent (14,665) outside it, up from 21 percent and above the national 20 percent. Towns: Monaghan 7,894 at 1,097.6 per sq km over 7.2 sq km, average age 39.8, 18.9 percent under 15; Carrickmacross 5,745 at 1,351.4 over 4.3 sq km, the youngest at average age 37.1 with 21.9 percent under 15; Castleblayney 3,926, average age 38.5, 21.5 percent under 15; Emyvale the oldest at 41.5. Citizenship: non-Irish 11 percent, largest groups Lithuanian 2,011, Latvian 776, UK 713 and Polish 709; dual Irish citizens up from 775 to 1,427. Work and travel (Profile 7): nearly 28,600 at work, up 12 percent from more than 25,500; unemployment 8 percent against 13 percent; participation 61 percent, the same as nationally; manufacturing the largest sector at almost 4,400, then wholesale and retail at nearly 3,900 and health and social work at more than 3,000; 5,900 working from home at least some of the time, 21 percent, with workers in Monaghan "among the least likely to work from home"; 26,139 travelling to work, 17,160 by car, 375 by bus, 34 by train, 1,837 on foot up from 1,751, 193 by bicycle; average journey 26.9 minutes against 24.9 in 2016; "Almost one in three working commuters in Clones walked to work, the second highest rate in the country". The release contains no mention of Northern Ireland, cross-border travel, Armagh, Tyrone or Fermanagh. Education and Irish: third level up from nearly 12,400 to almost 15,400, a rate of 37 percent against 45 percent nationally; 154 PhD holders; average age of completing full time education up from 18.8 to 19.7; 23,571 people aged three and over could speak Irish, 39.3 percent; no Gaeltacht under the CSO\'s seven-county definition. School: Castleblayney College, Dublin Road, Castleblayney, the only Monaghan school on the gov.ie first-phase Leaving Certificate Computer Science list of 4 January 2018. Sites from their owners: Monaghan County Council, The Glen, Monaghan, H18 YT50; Rossmore Forest Park, which Coillte places circa 3.0 km south of Monaghan town, with a castle built in 1827 and demolished in 1974 and an avenue of yew trees running approximately 500 metres from the walled garden; the Patrick Kavanagh Centre, Inniskeen, whose own site states the exhibition is closed for refurbishment until further notice with tours by appointment, on a site whose newest dated content is from 2019.',
    localProject: 'A dataset\'s description is a claim, and claims can be tested. Monaghan County Council\'s Bring Bank Locations dataset, one of 17 the council lists on data.gov.ie, is licensed Creative Commons Attribution 4.0 and contains 24 rows and 17 columns, matching the item\'s own statement that "Currently there are 24 facilities in the county". The ArcGIS item description states "The Projection of this dataset is WGS84". Measured: the X column runs from minus 806,986 to minus 731,973, impossible as degrees of longitude, and the item\'s spatialReference is WKID 102100, Web Mercator. Converting X and Y with the spherical Web Mercator formula, radius 6,378,137 metres, reproduces the file\'s own Lat and Long columns with a maximum difference of 0.000000 degrees across all 24 rows, proving the written description wrong and the numbers right. The file also carries Irish Grid and Irish Transverse Mercator pairs named accordingly. The teaching point is to treat documentation as a hypothesis to be tested against the data it describes, using magnitude as the first check and a second column that should agree as the proof. The page acknowledges that coordinate units also appear on the County Cork page, and distinguishes this project as a test of a specific written claim rather than an unexpected unit. A second instance is stated without being made a project: the Patrick Kavanagh Centre\'s own site says it is closed for refurbishment while its newest dated content is from 2019. Not used, because other pages own them: the Yes and No text fields (Galway city), the per-row Last_Updated_Date of 2025/01/09 predating the hosted layer\'s own creation in October 2025 (Cavan owns metadata dates), and the three electoral areas summing to 65,288 (County Galway).',
    requiredMentions: [
      '65,288',
      '7,894',
      '5,745',
      '3,926',
      '10,397',
      '23,571',
      '17,160',
      '26.9 minutes',
      'H18 YT50',
      '1,427',
      '5,900',
      '14,665'
    ],
    sources: [
      { claim: 'CSO Monaghan summary press statement, 30 May 2023: "the population of Monaghan grew by 6% to 65,288, which means the number of people in the county rose by 3,902 between April 2016 and April 2022. Over the same period, Ireland\'s population grew by 8%"; average age 38.7 against 37.4, with a national 38.8; "32,394 were female and 32,894 were male, which means there were 102 males for every 100 females"; "This age group increased by 21% to 10,397 in Monaghan"; "In Monaghan, 5,900 people (aged 15 and over) worked from home at least one day a week in 2022. This represented 21% of the workforce."', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensusofpopulation2022-summaryresultsmonaghan/' },
      { claim: 'CSO Profile 1 Monaghan: "Monaghan was the largest town, with a population of 7,894 in April 2022"; "Carrickmacross was the youngest, with an average of 37.1 years. The oldest was Emyvale, with an average age of 41.5 years"; 52 percent (33,378) born in the county, 26 percent (16,753) elsewhere in the State, 23 percent (14,665) outside it, up from 21 percent.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile1-populationdistributionandmovementsmonaghan/' },
      { claim: 'CSO PxStat tables F1013 and F1015: Monaghan 7,894 at 1,097.6 per sq km over 7.2 sq km, average age 39.8, 18.9 percent under 15; Carrickmacross 5,745 at 1,351.4 over 4.3 sq km, average age 37.1, 21.9 percent under 15; Castleblayney 3,926, average age 38.5, 21.5 percent under 15.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/F1015/JSON-stat/2.0/en' },
      { claim: 'CSO Profile 5 Monaghan: "In Monaghan non-Irish citizens accounted for 11% of the county\'s population. Among the non-Irish residents, the largest group were Lithuanian citizens (2,011 people) followed by Latvian citizens (776), the UK (713) and Polish (709)"; dual Irish citizens up from 775 in 2016 to 1,427.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile5-diversitymigrationethnicityirishtravellersreligionmonaghan/' },
      { claim: 'CSO Profile 7 Monaghan: "nearly 28,600 people were at work. This was an increase of 12%"; "The unemployment rate was 8% compared with 13% in 2016"; "The labour force participation rate was 61% in Monaghan which was the same as the figure nationally"; "Manufacturing accounted for the largest number of workers in the county at almost 4,400"; "Workers in Monaghan were thus among the least likely to work from home, with just 21% doing so"; "There were 26,139 people travelling to work in the county in April 2022. The majority of these drove to work, with 17,160 people driving to work by car"; "1,837 people walked to work, up from 1,751 in 2016"; "an average journey time of 26.9 minutes compared with 24.9 minutes in 2016"; "Almost one in three working commuters in Clones walked to work, the second highest rate in the country". No mention of Northern Ireland or cross-border travel.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile7-employmentoccupationsandcommutingmonaghan/' },
      { claim: 'CSO Profile 8 Monaghan: third level up from nearly 12,400 to almost 15,400, "a rate of 37% compared with 45% nationally"; "There were 154 people in the county who held a PhD"; average age of completing education up from 18.8 to 19.7; 23,571 people aged three and over able to speak Irish, 39.3 percent; the Gaeltacht defined as electoral divisions in seven counties not including Monaghan.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile8-theirishlanguageandeducationmonaghan/' },
      { claim: 'Department of Education, 4 January 2018: "Castleblayney College / Dublin Road, Castleblayney, Co. Monaghan" is the only Monaghan entry on the first-phase Leaving Certificate Computer Science list.', url: 'https://www.gov.ie/en/department-of-education/press-releases/minister-bruton-announces-leaving-certificate-computer-science-subject/' },
      { claim: 'Monaghan County Council: "Monaghan County Council, The Glen, Monaghan, Co. Monaghan, Ireland. H18 YT50".', url: 'https://monaghan.ie/contact-us/' },
      { claim: 'Monaghan County Council Bring Bank Locations, licensed Creative Commons Attribution 4.0: item description "The Projection of this dataset is WGS84" and "Currently there are 24 facilities in the county"; spatialReference 102100; 24 rows, 17 columns; measured by us, X from minus 806,986 to minus 731,973, with Web Mercator conversion of X and Y matching the file\'s Lat and Long columns to 0.000000 degrees in all 24 rows.', url: 'https://data.gov.ie/dataset/bring-bank-locations' },
      { claim: 'Coillte, Rossmore Forest Park: "A castle was constructed in 1827... Rossmore Castle was demolished in 1974"; "Located circa 3.0 Km south of Monaghan town"; "an avenue of yew trees which runs for approximately 500 meters from the walled garden".', url: 'https://www.coillte.ie/site/rossmore-forest-park/' },
      { claim: 'Patrick Kavanagh Centre: "Due to refurbishment works at the Patrick Kavanagh Centre, the exhibition will be closed until further notice" and "Tours can be arranged at anytime by prior appointment", on a site carrying a 2019 copyright line and no dated content newer than October 2019.', url: 'https://www.patrickkavanaghcountry.com/' }
    ],
    rejectedClaims: [
      'Any Northern Ireland or cross-border commuting figure: the CSO Monaghan release contains none and this cluster covers the Republic only.',
      'Any expectation about which nationalities work in a particular Monaghan industry: only the CSO\'s published citizenship ranking is used.',
      'The Yes and No text columns in the bring bank file as a project: the Galway city page owns that trap.',
      'The per-row update date predating the hosted layer as a project: the County Cavan page owns metadata dates.',
      'The three local electoral areas summing exactly to 65,288: County Galway owns reconciliation.',
      'Eircodes for the Patrick Kavanagh Centre or Rossmore Forest Park: neither publishes one on its own site.',
      'Any claim that the Kavanagh Centre is currently closed or open: only its own published statement is reported, with the age of that site noted.',
      'A county population density figure for Monaghan: no CSO release or table publishes one.'
    ]
  }
};
