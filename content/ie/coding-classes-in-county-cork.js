'use strict';
// County Cork (cg- county page, Ireland cluster, Phase 4). Covers Cork COUNTY
// only; the city has its own page and none of its figures appear here. Spine:
// the 2019 boundary change, which moved Ballincollig, Blarney, Tower, Glanmire,
// Douglas, Rochestown and Togher from county to city on 31 May 2019, and which
// the CSO itself gives as the reason a direct county comparison with 2016 is
// not possible. Facts read at primary sources on 16 September 2026: corkcoco.ie
// for the boundary change; CSO PxStat F1010, F1013, F1015 and FY049; the Cork
// Profile 5, 7 and 8 press statements, using only the county halves of their
// sentences; gov.ie's January 2018 LCCS list, from which the four Cork City
// schools are EXCLUDED because of the boundary change, leaving Carrigaline,
// Fermoy and Clonakilty; mtu.ie and nmci.ie; two schools' own sites for
// eircodes. Cork County Council population is 360,152. Ballincollig is treated
// as city throughout. Dataset measured by us: the council's CDP 2022
// Architectural Conservation Areas layer, CC BY 4.0, where all 50 records carry
// null in the ACA_ID, Townland and Settlement_Name fields and the geometry is
// Web Mercator rather than degrees.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'county', tag: 'COUNTY CORK', blurb: 'The county beyond the city, Carrigaline to Clonakilty, with a project on a boundary that moved.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-county-cork',
  code: 'ckc',
  accent: '#7E3F1D',
  accentRationale: 'County Cork: a burnt umber from the solver, deliberately distinct from the plum used for Cork city and from every other Ireland page',
  pageType: 'governorate',
  place: {
    name: 'County Cork',
    eyebrow: 'County Cork, Munster',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'best-coding-class-in-cork', name: 'Cork' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Cork city', href: '/best-coding-class-in-cork' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'County Cork, Ireland',
  title: 'Coding Classes in County Cork | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across County Cork, from Carrigaline and Midleton to Mallow and Clonakilty, ages 6 to 67. The first lesson is free.',
  ogDescription: 'Coding and AI classes for County Cork, on a page about a county boundary that moved in 2019 and what that does to every comparison since.',
  twitterDescription: 'Coding classes across County Cork, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '16 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for County Cork Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across County Cork, taught live in English.'
  },

  h1: 'Coding classes in County Cork',
  capsuleQ: 'What are the best coding classes in County Cork?',
  capsule: 'County Cork, the area outside the city, holds 360,152 people and the largest land area of any Irish county. Its towns are scattered: Carrigaline at 18,239, Cobh at 14,148, Midleton at 13,906, Mallow at 13,456, then Youghal, Bandon, Fermoy, Kinsale and Clonakilty. Unemployment here is 6%, which the statistics office recorded as the joint lowest in the country. What the county does not have is a class within easy reach of every town, which is where a live online school earns its place. We teach ages 6 to 67 at a fixed weekly hour in ability groups of five to ten, or one to one, with a free first lesson and then USD 100 a month in a group or USD 150 privately.',
  lead: 'On 31 May 2019 a large piece of County Cork stopped being County Cork. Ballincollig, Blarney, Tower, Glanmire, Douglas, Rochestown and Togher transferred to Cork City Council under legislation passed that January, and the county lost both territory and tens of thousands of residents overnight. This matters for anyone working with Cork figures, because the Central Statistics Office states plainly that the change means "a direct comparison with Census 2016 data is not possible" for Cork. So the growth percentages you see quoted casually for other counties simply cannot be produced honestly here. A learner who understands why will treat every time series with more respect afterwards: boundaries move, definitions change, and a number that looks comparable often is not. That is the thread of this page, and it runs through everything from school lists to council datasets.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in County Cork.',

  picks: {
    eyebrow: 'Course picks for County Cork',
    h2: 'Four courses for a very large county',
    intro: 'Pick by what the learner wants to build. Every one starts with a free lesson taught by the teacher who would take the course, and no card details are requested.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Games and stories in Scratch, with a map where the lines move halfway through and the score has to cope.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python through the Junior Cycle and Transition Year, practised on files where the categories have changed over time.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Two censuses, one moved boundary, and an honest answer about what can and cannot be compared.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults tracking figures over time: spotting the year a definition changed before drawing a trend line.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The county today',
      h2: 'A county of towns, minus the ones that became city',
      intro: 'Everything below describes County Cork after the 2019 boundary change, which is the only way these figures make sense.',
      body: [
        { kind: 'table', caption: 'County Cork in Census 2022, Central Statistics Office', head: ['Measure', 'Figure'], rows: [
          ['Population of Cork County Council', '360,152'],
          ['At work', 'Over 161,000 people'],
          ['Unemployment', '6%, recorded as the joint lowest rate in the country'],
          ['Long-term unemployment', '3%, also joint lowest'],
          ['Labour force participation', '61%, the same as the national rate'],
          ['Worked from home at least part of the time', '50,510 people, against 97,034 who never did']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The biggest towns', p: 'Carrigaline leads at 18,239, then Cobh at 14,148, Midleton at 13,906 and Mallow at 13,456, followed by Youghal at 8,564, Bandon at 8,196, Fermoy at 6,720, Kinsale at 5,991 and Clonakilty at 5,112.' },
          { h3: 'Young and old ends', p: 'Carrigaline has an average age of 35.4 with 23.8% of its people under 15, while Youghal sits at 41.0 with 18.5% under 15. The same county, six years apart in average age.' },
          { h3: 'Who lives here', p: 'In County Cork the largest non-Irish groups are Polish at 8,590, UK at 8,127 and Lithuanian at 1,602, a different order from the city, where Polish lead and Indian citizens come second.' }
        ] },
        { kind: 'p', text: 'On the Irish language, the county council area records almost 15,000 people, 10%, who speak Irish very well, just over 49,000 who speak it well, and 84,607 who cannot speak it well. Our teaching is in English, and programming keywords are English in every school, so the language of instruction at a learner\'s school makes no practical difference to how they get on here.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Computer Science in County Cork schools',
      h2: 'Three county schools in the first phase, and four that are now city',
      intro: 'This is where the boundary change bites hardest, and where most write-ups get Cork wrong.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The county three', p: 'Carrigaline Community School at Waterpark, Coláiste an Chraoibhin on the Duntaheen Road in Fermoy, and Sacred Heart Secondary School at the Convent of Mercy in Clonakilty.' },
          { h3: 'The four that moved', p: 'Coláiste Choilm in Ballincollig, Christ King Girls, Mayfield Community School and Gaelcholaiste Mhuire AG all sit inside the post-2019 city boundary, so they belong to the city page rather than this one.' },
          { h3: 'Why this matters', p: 'A list published in January 2018 describes a Cork that no longer exists. Using it without adjusting for the 2019 change puts four schools in the wrong local authority.' }
        ] },
        { kind: 'p', text: 'Both county schools publish their own eircodes, which is useful for anyone checking: Carrigaline Community School gives P43 XE06 and Coláiste an Chraoibhín gives P61 VX78. That second routing key is worth noting, because Fermoy sits on P61 rather than any of the keys people usually associate with Cork, and assuming otherwise is a good way to misfile an address.' },
        { kind: 'spec', title: 'Where third level sits in the county', p: 'The National Maritime College of Ireland is at Ringaskiddy in Cork Harbour, outside the extended city boundary. MTU describes it as a purpose-built college on a ten-acre campus, 18 kilometres from Cork city, providing training for the merchant shipping industry and the non-military needs of the Irish Naval Service. It is a reminder that specialist technical education in this county is not all in one place.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'The county that changed shape',
      intro: 'This project has no download at all in its first half. It is about understanding why a comparison is impossible before anyone tries to make one.',
      body: [
        { kind: 'table', caption: 'What changed, and what it means for the figures', head: ['Element', 'Detail'], rows: [
          ['When', '31 May 2019, under legislation passed in January 2019'],
          ['What moved', 'Ballincollig, Blarney, Tower, Glanmire, Douglas, Rochestown and Togher'],
          ['Direction', 'From Cork County Council to Cork City Council'],
          ['What the statistics office says', 'That the change means a direct comparison with Census 2016 data is not possible for Cork'],
          ['A second caveat in the same notes', 'That new built-up area definitions mean 2022 town figures cannot be compared directly with 2016 towns either']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'What a learner does first', p: 'Writes down, in plain words, what the 2016 county was and what the 2022 county is, and why subtracting one from the other measures a legal change rather than a change in people.' },
          { h3: 'What they do next', p: 'Finds a question the data can answer: how towns compare with each other today, or how the county compares with the State, both of which are honest.' },
          { h3: 'The general rule', p: 'Before any trend, ask whether the thing being counted stayed the same. Boundaries, categories, thresholds and definitions all move, and rarely with a warning label.' }
        ] },
        { kind: 'callout', h3: 'Then the county\'s own data, which has its own lesson', p: 'Cork County Council publishes nine datasets, all development plan mapping layers, under a Creative Commons Attribution licence. We opened the conservation areas layer: 50 records, and every single one of them carries nothing at all in its ACA identifier, townland and settlement name fields. A hundred per cent missing, in three fields the schema clearly expects. Only a free-text name and a bare numeric code are ever filled in. On top of that, the coordinates are in Web Mercator metres rather than degrees, so treating them as latitude and longitude drops a north Cork town somewhere off the west coast of Africa. Both faults are systematic rather than accidental, and both are invisible until you look.' },
        { kind: 'p', text: 'The written output is short: one paragraph explaining why no county growth rate appears on the page, and one listing what the conservation layer does and does not contain. Learning to write those two paragraphs is worth more than any chart.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Comparing across time',
      h2: 'Five questions before you draw a trend',
      intro: 'Every one of these has caught out a professional analyst somewhere, and all five are quick.',
      body: [
        { kind: 'table', caption: 'Before any figure is compared with an older one', head: ['Question', 'What you check', 'What it prevents'], rows: [
          ['Did the boundary move?', 'Whether the area meant the same thing in both years', 'Measuring a legal change as a real one'],
          ['Did the definition change?', 'Whether the thing counted was defined the same way', 'A jump that is only a rule'],
          ['Did the method change?', 'Whether the publisher says comparison is possible', 'Ignoring an explicit warning'],
          ['Is a like-for-like subset available?', 'Whether you can compare the parts that did not change', 'Abandoning a question that is still answerable'],
          ['Can you answer a different question?', 'Whether a cross-sectional comparison would do instead', 'Forcing a trend that the data cannot carry']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'A game where the pitch changes size between rounds, and the players work out why comparing the scores is unfair.' },
          { h3: 'Teenagers', p: 'The real census tables: state what cannot be compared for Cork and why, then find a question the figures do answer.' },
          { h3: 'Adults', p: 'The same discipline on business reporting, where reorganisations do to sales regions exactly what 2019 did to Cork.' }
        ] },
        { kind: 'p', text: 'We are not connected with Cork County Council, Munster Technological University, the National Maritime College of Ireland or any school named here. Population figures come from Central Statistics Office tables that name Cork County Council directly, and the conservation layer counts are ours, taken from the council\'s published service under its Creative Commons Attribution licence. Cork city figures belong to the city page and are deliberately not repeated here.' }
      ]
    },
    {
      id: 'living', tint: '', eyebrow: 'Living in the county',
      h2: 'Harbour towns, market towns and a long way between them',
      intro: 'County Cork runs from Youghal in the east to the Beara Peninsula in the west, which is most of the reason an online class works here.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Dense little towns', p: 'Cobh packs 2,997 people into each square kilometre and Carrigaline 2,847.7, while Clonakilty spreads across nearly five square kilometres at 1,039.' },
          { h3: 'Working patterns', p: 'Over 161,000 people work in the county, 50,510 of them from home at least part of the time, with unemployment at 6% and participation at 61%.' },
          { h3: 'Two routing keys, many more', p: 'The schools above sit on P43 in Carrigaline and P61 in Fermoy, which is a reminder that a county this size holds a dozen postal areas rather than one.' }
        ] },
        { kind: 'spec', title: 'Why distance decides the format here', p: 'A family in Castletownbere is more than two hours from Carrigaline by road. No weekly evening class in a room can serve both ends of this county, and pretending otherwise is how rural learners end up with nothing. An online group at the right level, drawn from several countries, is the only version of this that reaches everybody.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a changing pitch to an honest trend',
    intro: 'Ages are a guide only. The free lesson decides where a learner actually begins.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Fair comparisons', p: 'Programs that compare two things and notice when the rules changed in between.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Reading the notes', p: 'Opening real tables and finding the sentence that says what may not be compared.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Time series with care', p: 'Building comparisons that survive a boundary change, or explaining why none is possible.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Definitions at work', p: 'Tracking figures across reorganisations without pretending the old numbers still apply.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An assistant will give you Cork\'s growth rate. Why should a Midleton teenager refuse it?',
    intro: 'Because the honest answer is that no such figure exists for the county, and saying so is harder than producing a number.',
    p1: 'Ask how much County Cork grew between 2016 and 2022 and you will get a percentage, because two numbers exist and subtraction is easy. What that percentage actually measures is a piece of territory changing hands in 2019, not families arriving or leaving. The statistics office says as much in its own methodology notes, and those notes are exactly the kind of text a quick summary skips.',
    p2: 'A learner who has read the note will do something more useful: say which comparison is impossible, explain why in one sentence, and then find a question the data can answer honestly. That is a harder answer to give and a much better one.',
    closer: 'So a County Cork child learning to code in 2026 is learning when to say no to a number, which is the part of this work that no tool is going to do for anybody.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Mallow, Bantry, Youghal or Kinsale',
    intro: 'This is the largest county in Ireland by area, and its learners are spread across all of it.',
    cells: [
      { h3: 'The same class everywhere', p: 'Skibbereen and Midleton are two hours apart and zero minutes apart once the lesson starts.' },
      { h3: 'School stages by name', p: 'Junior Cycle, Transition Year, fifth and sixth year, as they are called in Cork schools.' },
      { h3: 'A free lesson that teaches', p: 'Real work with a real teacher, ending in a level, a course and an hour, and no request for card details.' },
      { h3: 'Ability groups', p: 'Five to ten learners at one level, drawn from County Cork and several other countries so the right class exists at a workable hour.' },
      { h3: 'Weekly and predictable', p: 'Two lessons in most weeks, about eight a month, with mid-terms and exams planned around in advance.' },
      { h3: 'The time difference', p: 'Our teachers work from India, four and a half hours ahead of Ireland in summer and five and a half in winter.' }
    ],
    spec: { title: 'For the 50,510 already working from home', p: 'Half the county\'s home workers are in towns with no evening class of any kind. Those households already have the connection and the habit, and a live class at a fixed hour is the simplest thing in the world to add to a week that already runs on video calls.' }
  },

  fees: {
    h2: 'What classes cost in County Cork',
    intro: 'Three figures and no small print.',
    first: 'A complete lesson at no charge, closing with a level named and a course recommended.',
    group: 'A month of classes, normally eight, with five to ten learners of similar ability.',
    private: 'The same month of classes, with the teacher working with one learner.',
    closer: 'Billing is monthly in US dollars at the single rate charged outside India, so Bantry pays what Carrigaline pays and there is no euro list. Nothing is charged until the free lesson has settled a course and a weekly hour, and pauses, missed lessons and format changes are set out on the pricing page.'
  },

  reviewsH2: 'Six Google reviews from our families, printed as written',

  book: {
    h2: 'Tell us about the learner',
    intro: 'The opening task fits the person: a fair-comparison game for a young child, a first real table for the middle years, or the boundary problem for a teenager.',
    success: 'Thank you. Somebody will be in touch about your County Cork class shortly.'
  },

  faq: {
    h2: 'County Cork coding class questions',
    intro: 'What families across the county ask.',
    items: [
      { q: 'How many people live in County Cork?', a: 'Cork County Council recorded 360,152 people at the 2022 census. That covers the county outside the city, after the 2019 boundary change.' },
      { q: 'Why is there no growth percentage on this page?', a: 'Because the boundary moved on 31 May 2019, when Ballincollig, Blarney, Tower, Glanmire, Douglas, Rochestown and Togher transferred to the city. The statistics office states that a direct comparison with 2016 is not possible for Cork.' },
      { q: 'Which County Cork schools first offered Leaving Certificate Computer Science?', a: 'Three: Carrigaline Community School, Coláiste an Chraoibhin in Fermoy and Sacred Heart Secondary School in Clonakilty. Four others on the same 2018 list are inside the post-2019 city boundary.' },
      { q: 'Is Ballincollig in the city or the county?', a: 'The city, since 31 May 2019. It is one of the areas the boundary change transferred, which is why it appears on our Cork city page rather than here.' },
      { q: 'What is the County Cork data project?', a: 'Students explain why a 2016 to 2022 county comparison cannot be made, then examine the council\'s conservation areas layer, where all 50 records are missing three fields entirely and the coordinates are in metres rather than degrees.' },
      { q: 'What are the biggest towns?', a: 'Carrigaline at 18,239, then Cobh at 14,148, Midleton at 13,906 and Mallow at 13,456, with Youghal, Bandon, Fermoy, Kinsale and Clonakilty behind them.' },
      { q: 'What hours do classes run?', a: 'Afternoons, evenings and weekend mornings. Our teachers are four and a half hours ahead of Irish time in summer and five and a half in winter, and the weekly hour is agreed in the free lesson.' },
      { q: 'Is there a Modern Age Coders classroom in County Cork?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, sound that works and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do County Cork coding classes cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'The city, and the counties around',
    html: 'Cork city has its own page at <a class="cg-inline-link" href="/best-coding-class-in-cork">coding classes in Cork</a>, and the next cities west and east are <a class="cg-inline-link" href="/best-coding-class-in-limerick">Limerick</a> and <a class="cg-inline-link" href="/best-coding-class-in-waterford">Waterford</a>. For comparing online schools, read <a class="cg-inline-link" href="/best-online-coding-classes-ireland">best online coding classes in Ireland</a>. Everything is gathered on the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'County Cork and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-cork', label: 'Cork city' },
    { href: '/best-coding-class-in-waterford', label: 'Waterford' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-ckc .cg-hero-grid { align-items: start; gap: clamp(1.13rem, 3.24vw, 2.74rem); }
.cg-root.cg-ckc .cg-hero h1 { font-weight: 700; letter-spacing: -0.0192em; line-height: 1.062; }
.cg-root.cg-ckc .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.13rem; }
.cg-root.cg-ckc .cg-eyebrow { letter-spacing: 0.172em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-ckc .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.0128em; }
.cg-root.cg-ckc .cg-grid-3 { gap: clamp(1.07rem, 2.56vw, 2.03rem); }
.cg-root.cg-ckc .cg-table caption { letter-spacing: 0.031em; font-weight: 700; }
.cg-root.cg-ckc .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ckc .cg-table td:first-child { font-weight: 600; }
.cg-root.cg-ckc .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 1.01rem; }
.cg-root.cg-ckc .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'County Cork, the area outside the city, Census 2022 (CSO): Cork County Council population 360,152, which with Cork City Council\'s separately published figure makes the combined Cork total of 584,156. BOUNDARY: Cork County Council states that from 31 May 2019 the local authority for the transition area changed from county to city, the transition area comprising Ballincollig, Blarney, Tower, Glanmire, Douglas, Rochestown and Togher, under legislation passed in January 2019; the CSO\'s own Profile 1 background notes state that "Changes made in 2019 to the Cork City and Cork County boundaries entail that a direct comparison with Census 2016 data is not possible", and separately that new built-up area definitions prevent direct comparison of 2022 town figures with 2016. County towns (F1013 and F1015): Carrigaline 18,239 at 2,847.7 per sq km, average age 35.4 and 23.8 percent under 15; Cobh 14,148 at 2,997.0; Midleton 13,906 at 1,848.0, average age 36.1; Mallow 13,456 at 1,487.8, average age 38.0; Youghal 8,564 at 1,487.0, average age 41.0 and 18.5 percent under 15; Bandon 8,196; Fermoy 6,720; Kinsale 5,991; Clonakilty 5,112. County employment: over 161,000 people at work; unemployment 6 percent, the joint lowest in the country, with long-term unemployment at 3 percent, also joint lowest; labour force participation 61 percent, matching the national rate; from CSO table FY049, 50,510 people working from home at least part of the time against 97,034 who never do and 13,630 not stated. Citizenship in County Cork: Polish 8,590, UK 8,127, Lithuanian 1,602. Irish language in the county council area: almost 15,000 people, 10 percent, speaking it very well, just over 49,000 speaking it well and 84,607 not able to speak it well. Gov.ie, 4 January 2018: the county\'s first-phase Leaving Certificate Computer Science schools are Carrigaline Community School, Waterpark; Colaiste an Chraoibhin, Duntaheen Road, Fermoy; and Sacred Heart Secondary School, Convent of Mercy, Clonakilty, while Colaiste Choilm in Ballincollig and three city schools fall inside the post-2019 city boundary and are excluded. School eircodes from their own sites: Carrigaline Community School P43 XE06 and Colaiste an Chraoibhin P61 VX78. MTU describes the National Maritime College of Ireland at Ringaskiddy as a purpose-built college on a 10-acre campus 18 km from Cork city, serving the merchant shipping industry and the non-military needs of the Irish Naval Service.',
    localProject: 'A county that changed shape, and a mapping layer with three empty fields. The first half of the project uses no download: learners establish that the 2019 transfer of Ballincollig, Blarney, Tower, Glanmire, Douglas, Rochestown and Togher to Cork City Council makes a 2016 to 2022 county comparison impossible, as the CSO itself states, and then choose a question the data can answer. The second half uses the council\'s own CDP 2022 Architectural Conservation Areas layer, published under Creative Commons Attribution 4.0 among the council\'s nine datasets. Measured: the service returns 50 features and a separate count request confirms 50 is the complete set rather than a first page; every one of the 50 records carries null in the ACA_ID, Townland and Settlement_Name fields, a 100 percent systematic gap, while only a free-text name and a bare numeric identifier with no published lookup table are populated; and the geometry uses spatial reference wkid 102100, Web Mercator metres, with coordinate values such as minus 965,375 and 6,843,008, so treating the rings as longitude and latitude pairs would place a north Cork conservation area off the west coast of Africa.',
    requiredMentions: [
      '360,152',
      '18,239',
      '14,148',
      '13,906',
      '13,456',
      '8,564',
      '50,510',
      '8,590',
      '84,607',
      '31 May 2019',
      'P43 XE06',
      'Ringaskiddy'
    ],
    sources: [
      { claim: 'Cork County Council: "from May 31st 2019, as a resident, business or community within the transition area, your local authority will change from Cork County Council to Cork City Council. The transition area includes Ballincollig, Blarney, Tower, Glanmire, Douglas Donnybook, Grange, Frankfield, Rochestown and Togher."', url: 'https://www.corkcoco.ie/en/council/accessibility-maps-and-publications/cork-boundary-change-information' },
      { claim: 'CSO Profile 1 background notes: "Changes made in 2019 to the Cork City and Cork County boundaries entail that a direct comparison with Census 2016 data is not possible", and that built-up area definitions prevent direct comparison of 2022 town data with 2016.', url: 'https://www.cso.ie/en/releasesandpublications/ep/p-cpp1/censusofpopulation2022profile1-populationdistributionandmovements/backgroundnotes/' },
      { claim: 'CSO table F1010: Cork County Council population 360,152, distinct from the separately published Cork City Council row.', url: 'https://data.cso.ie/table/F1010' },
      { claim: 'CSO tables F1013 and F1015: Carrigaline 18,239 at 2,847.7 per sq km with average age 35.4; Cobh 14,148 at 2,997.0; Midleton 13,906; Mallow 13,456; Youghal 8,564 with average age 41.0; Bandon 8,196; Fermoy 6,720; Kinsale 5,991; Clonakilty 5,112.', url: 'https://data.cso.ie/table/F1013' },
      { claim: 'CSO Profile 7, Cork: "over 161,000 people working in Cork County"; "Cork County had the joint lowest unemployment rate at 6%"; long-term unemployment 3%, also joint lowest; participation 61% in Cork County against 61% nationally.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile7-employmentoccupationsandcommutingcork/' },
      { claim: 'CSO table FY049: for Cork County Council, 97,034 people never work from home, 50,510 do work from home and 13,630 are not stated.', url: 'https://data.cso.ie/table/FY049' },
      { claim: 'CSO Profile 5, Cork: "In Cork County the largest group were Polish citizens (8,590 people), followed by UK citizens (8,127 people) and Lithuanian (1,602)."', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile5-diversitymigrationethnicityirishtravellersreligioncork/' },
      { claim: 'CSO Profile 8, Cork: in the County Council area almost 15,000 people (10%) spoke Irish very well, just over 49,000 spoke it well and 84,607 could not speak it well.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile8-theirishlanguageandeducationcork/' },
      { claim: 'Department of Education, 4 January 2018: the first-phase list includes Carrigaline Community School, Coláiste an Chraoibhin in Fermoy and Sacred Heart Secondary School in Clonakilty, alongside Cork city schools now inside the extended city boundary.', url: 'https://www.gov.ie/en/department-of-education/press-releases/minister-bruton-announces-leaving-certificate-computer-science-subject/' },
      { claim: 'Carrigaline Community School publishes its address as Waterpark, Carrigaline, Co. Cork, eircode P43 XE06.', url: 'https://carrigcs.ie/contact-us/' },
      { claim: 'Munster Technological University: "The NMCI is a purpose-built College on a 10-acre campus and is located 18km from Cork city in Ringaskiddy. It provides training and education for the Merchant Shipping Industry and the non-military needs of the Irish Naval Service."', url: 'https://www.mtu.ie/about-mtu/our-campuses/national-maritime-college-of-ireland/' },
      { claim: 'Cork County Council CDP 2022 Architectural Conservation Areas, licensed Creative Commons Attribution 4.0: 50 records, all carrying null ACA_ID, Townland and Settlement_Name, with geometry in spatial reference wkid 102100 rather than degrees.', url: 'https://data.gov.ie/dataset/cdp-2022-architectural-conservation-areas' }
    ],
    rejectedClaims: [
      'A County Cork population growth rate between 2016 and 2022: the CSO states such a comparison is not possible because of the 2019 boundary change.',
      'Treating Ballincollig, Blarney, Glanmire, Douglas, Rochestown or Togher as County Cork after 31 May 2019.',
      'Counting Colaiste Choilm or the three Cork city schools as County Cork schools on the 2018 list.',
      'Any Cork city figure: those belong to the Cork city page.',
      'Comparing 2022 town populations with 2016 town figures: the CSO says built-up area definitions prevent it.',
      'Reading the conservation layer coordinates as longitude and latitude: they are Web Mercator metres.'
    ]
  }
};
