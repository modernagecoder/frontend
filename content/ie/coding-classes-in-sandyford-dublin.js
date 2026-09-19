'use strict';
// Sandyford, Dublin 18 (cg- district page, Ireland cluster, Phase 6). Named sources only
// (owner rule for districts), read 19 to 20 September 2026: CSO PxStat TOA11 (Luas
// passenger numbers by line, 2018-2025, updated 21 May 2026); TII trams and depots page;
// TII Luas stops list (luasforecasts.rpa.ie stops XML); Dun Laoghaire-Rathdown County
// Council development plan 2022-2028 boundary plan areas (data.smartdublin.ie); St Mary's
// National School, Beacon Hospital and Nord Anglia International School Dublin, each on
// its own site. gov.ie school profile pages returned 502/403 (bot protection) and were
// not worked around. Spine: base-year choice. 2025 journeys indexed to each base year
// 2018-2024: Green ahead for every base except 2019 (Red 115.2, Green 112.9); 2018 base
// Red 126.8, Green 137.2. 2019 is the only year of the eight in which the Green Line
// carried more than the Red (50.3%). Scratchpad dist/TOA11.json. The Luas fare API
// returns euro fares and is NOT used. The DLR page owns the Sandyford Business District
// figures and the Luas park-and-ride list.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'area', tag: 'SANDYFORD', blurb: 'Which Luas line grew more by 2025? It depends on the year you start counting from. A page on choosing a base year.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-sandyford-dublin',
  code: 'sdf',
  accent: '#1E6735',
  accentRationale: 'Sandyford: a tram-line green from the widened solver search, apart from the Dun Laoghaire-Rathdown blue and the Leixlip and Carlow greens',
  pageType: 'district',
  place: {
    name: 'Sandyford',
    eyebrow: 'Sandyford, Dublin 18',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Dun Laoghaire-Rathdown' },
      { type: 'AdministrativeArea', name: 'County Dublin' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-dun-laoghaire-rathdown', name: 'Dún Laoghaire-Rathdown' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Dún Laoghaire-Rathdown', href: '/coding-classes-in-dun-laoghaire-rathdown' },
    { label: 'Dublin', href: '/best-coding-class-in-dublin' }
  ],
  routeLabel: 'Sandyford, Dublin 18, Ireland',
  title: 'Coding Classes in Sandyford, Dublin 18 | Modern Age Coders',
  description: 'Live online coding, Python, AI and data classes for Sandyford and Dublin 18, for ages 6 to 67, in level-matched groups or one to one. First lesson free.',
  ogDescription: 'Coding and AI classes for Sandyford, with a data project on Luas passenger numbers and how the choice of base year changes the answer.',
  twitterDescription: 'Live online coding, Python and AI for Sandyford, Dublin 18, ages 6 to 67. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '20 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Sandyford',
    description: 'Online coding, Python, AI, data and mathematics for children, teenagers and adults in Sandyford, Dublin 18, taught live in English to level-matched groups or one to one.'
  },

  h1: 'Coding classes in Sandyford',
  capsuleQ: 'What are the best coding classes in Sandyford?',
  capsule: 'In Sandyford, lessons happen live on a video call with a teacher, for a small group of learners at one level or for one learner by themselves, usually twice in a week, and they are open to every age from six to sixty-seven. No trip into Dublin 18 or anywhere else is needed. We charge nothing for the first lesson; the monthly fee that follows is USD 100 in a group and USD 150 on a one-to-one basis.',
  lead: 'The Luas Green Line runs through Sandyford, where it keeps a depot, and the statistics office publishes how many journeys each Luas line carries. Ask which line grew more by 2025 and the answer depends entirely on the year you start counting from. Start in 2018 and the Green Line grew by 37.2 percent against the Red Line\'s 26.8. Start in 2019 and the Red Line comes out ahead, 15.2 percent against 12.9. Start in any other year from 2018 to 2024 and the Green Line leads again. Nothing about the passengers changed between those sentences, only the choice of base year. This page teaches a learner to try every base, report the spread, and say why one was chosen.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Sandyford.',

  picks: {
    eyebrow: 'Courses for Dublin 18',
    h2: 'Four ways to start in Sandyford',
    intro: 'Choose the band that matches the learner; during the free first lesson the teacher settles the course, keeping it or moving it up or down.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Blocks and counting: two sprites race, and the score is kept from different starting lines.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python with yearly numbers, percentages and a first index where one year is set to 100.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Official transport statistics in Python: indices, base years and results tested for every choice.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'For adults who report growth at work and need a comparison that survives a change of starting point.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Which Luas line grew more? Try every starting year before answering',
      intro: 'Luas journeys in 2025 as a percentage of journeys in each earlier year, from the statistics office\'s table of passenger numbers by line. A value of 100 would mean no change.',
      body: [
        { kind: 'table', caption: 'Luas journeys in 2025, indexed to each base year', head: ['Base year', 'Red Line', 'Green Line', 'Grew more'], rows: [
          ['2018', '126.8', '137.2', 'Green'],
          ['2019', '115.2', '112.9', 'Red'],
          ['2020', '284.7', '290.4', 'Green'],
          ['2021', '275.8', '290.7', 'Green'],
          ['2022', '136.6', '149.2', 'Green'],
          ['2023', '109.0', '120.3', 'Green'],
          ['2024', '96.7', '107.2', 'Green']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why 2019 is the odd one', p: 'The Green Line carried 19,999,700 journeys in 2018 and 24,301,487 in 2019, a rise of 21.5 percent against the Red Line\'s 10.1. 2019 is the only year of the eight in which the Green Line carried more than the Red, 50.3 percent of all Luas journeys. Measure from a line\'s strongest year and its later growth looks small.' },
          { h3: 'Where 2025 ended', p: 'By 2025 the two lines were almost level: 27,689,678 journeys on the Red Line and 27,441,333 on the Green. In September, October and November 2025 the Green Line carried more than the Red in each month.' },
          { h3: 'Bases that shout', p: 'Measured from 2020 or 2021 both lines show indices near 290. Those numbers are correct and say almost nothing about growth, because the base years were so far below normal that any recovery looks enormous.' }
        ] },
        { kind: 'callout', h3: 'Choose the base before you see the result, and show the others', p: 'A base year is the analyst\'s decision, not a fact about the data, and every base tells a slightly different story. The fair way to use one is to name it in advance and give a reason, such as the last normal year before a disruption or the first full year of a new service, then show what the other bases would have said. If one base alone produces the headline, as 2019 does here, the headline belongs to the base and not to the trams. Readers should be able to see the whole table, not only the row that suits the argument.' },
        { kind: 'p', text: 'The learner\'s program reads the statistics office\'s table for passenger numbers by line, pulls out the annual totals for each line from 2018 to 2025, and computes the 2025 figure as a percentage of each earlier year. It prints the whole table, marks which line comes out ahead for each base, and counts how many bases agree. Here six of seven favour the Green Line and one favours the Red. The same code then prints the raw journey counts beside every index, because an index on its own hides the size of the numbers underneath: 290 from a pandemic year and 137 from a normal one are not the same kind of growth.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A new service in the base', p: 'Transport Infrastructure Ireland dates the opening of the Luas Cross City project to December 2017, so 2018 was the Green Line\'s first full year with it running. That makes 2018 a defensible base for the Green Line, and 2019 its second, stronger year.' },
          { h3: 'Longer trams in the middle', p: 'TII says the Green Line trams were lengthened to 54.7 metres between May 2019 and March 2021 and now carry over 400 passengers each. Capacity changing inside the period is one more reason no single comparison tells the whole story; this page does not claim it caused any of the changes.' },
          { h3: 'Line totals, not stop counts', p: 'The table counts journeys for the whole line. It does not say how many start or end at Sandyford, and nothing on this page should be read as a figure for the Sandyford stop.' }
        ] }
      ]
    },
    {
      id: 'place', tint: 'tint', eyebrow: 'Sandyford, named',
      h2: 'Sandyford, from the organisations based there',
      intro: 'Facts that each organisation publishes itself, with eircodes only where its own page prints them.',
      body: [
        { kind: 'table', caption: 'Named places in Sandyford', head: ['Place', 'What its own source says'], rows: [
          ['Sandyford Luas depot', 'Stabling for up to 32 trams'],
          ['Sandyford Luas stop', 'Park and ride, and cycle and ride'],
          ['Sandyford Urban Framework Plan', '192 hectares in the council\'s plan data'],
          ['St Mary\'s National School', 'Lamb\'s Cross, Sandyford'],
          ['Beacon Hospital', 'Sandyford, D18 AK68'],
          ['Nord Anglia International School', 'South County Business Park, D18 T672']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The depot', p: 'TII describes the Sandyford depot as a maintenance and repair workshop with servicing and washing facilities, a medium stabling area for up to 32 trams, and some local control facilities. The Green Line\'s other depot is at Broombridge.' },
          { h3: 'The plan area', p: 'Dún Laoghaire-Rathdown County Council\'s boundary data for its 2022 to 2028 development plan records the Sandyford Urban Framework Plan area at 192 hectares, on map 6 of the plan.' },
          { h3: 'Two schools', p: 'St Mary\'s National School is a co-educational primary school at Lamb\'s Cross. Nord Anglia International School Dublin says it is the only private school in Dublin accredited to teach the International Baccalaureate to students aged 3 to 18.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'No population is printed for Sandyford, because the page uses only facts that named organisations publish about the place itself. The Luas figures describe whole lines, not the Sandyford stop. The Department of Education\'s school profile page could not be read on 19 September 2026, so the school is described from its own website.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'What a week of lessons looks like from Sandyford',
      intro: 'Two lessons in a normal week, each run live by a teacher who is with the learners the entire time.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'Children begin with block code, races and scores, learning that where you start counting from changes who seems to be winning.' },
          { h3: 'Teenagers', p: 'Teenagers move on to Python, websites, AI projects and work with official statistics like the Luas passenger table.' },
          { h3: 'Adults', p: 'Adults can start without any coding at all; the first lesson decides the course.' }
        ] },
        { kind: 'p', text: 'Passenger numbers are the Central Statistics Office\'s, and depot, fleet and stop details are Transport Infrastructure Ireland\'s; the indices and comparisons are our own arithmetic, run on 20 September 2026. The council plan data, the schools and the hospital are quoted from their own publications and sites.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a race with two starting lines to a table of base years',
    intro: 'The bands are a first guess; lesson one shows where each learner should really begin.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Starting lines', p: 'Block-coded races where moving the start line changes the result.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Percent change', p: 'Python that works out growth from one year to another and turns it into an index.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Every base at once', p: 'Loops over base years, tables of indices and a count of how many bases agree.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Honest growth claims', p: 'Workplace reports that name their base year, give the reason and show the alternatives.', courses: ['python-ai-automation-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant which Luas line has grown more',
    intro: 'It will usually pick one base year and answer confidently.',
    p1: 'Ask an AI assistant which Luas line grew more and it will often compare 2025 with 2019, the usual pre-pandemic benchmark, and report that the Red Line did. On that base the arithmetic is right. It is also the one base out of seven that gives that answer, which the assistant is unlikely to mention.',
    p2: 'With the full table built, the learner asks the assistant which base year it chose and why, what the answer would be from 2018 or 2023, and how many possible bases agree with it. Those questions turn one confident sentence into a finding with its uncertainty attached.',
    closer: 'Calculating a percentage change is simple. Deciding which change to calculate is the skill.',
    blogAnchor: 'why learning to code still makes a difference'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons run for Sandyford',
    intro: 'The working details.',
    cells: [
      { h3: 'Real-time teaching', p: 'A teacher runs the whole lesson live and checks each learner\'s code while they write it.' },
      { h3: 'Stage-matched', p: 'Five to ten learners at the same stage, whether they are in Dublin 18, another part of Ireland or overseas.' },
      { h3: 'Fixed weekly slots', p: 'About eight lessons a month on two days each week, agreed when the course begins.' },
      { h3: 'Holidays included', p: 'School holidays, mid-terms and exam weeks are built into the course plan.' },
      { h3: 'Equipment list', p: 'A laptop or desktop, a microphone with headphones or speakers, and a connection able to carry video.' },
      { h3: 'Just one learner', p: 'One-to-one teaching when a learner is ahead of every group, wants a slower pace, or needs hours no group keeps.' }
    ],
    spec: { title: 'Nothing on site', p: 'Modern Age Coders has no premises in Sandyford, in Dún Laoghaire-Rathdown or anywhere in Ireland. Every lesson is given over video, the same for every learner wherever they are.' }
  },

  fees: {
    h2: 'Fees for Sandyford',
    intro: 'Every charge, listed.',
    first: 'A first lesson with a level check, at no cost.',
    group: 'A month in a group of five to ten at one stage, around eight live lessons.',
    private: 'A month of one-to-one lessons, same weekly pattern.',
    closer: 'All families outside India pay one monthly US dollar fee. The free lesson carries no commitment, payments start with the course and not before, and the pricing page explains how holidays, missed lessons and changes between group and private lessons are handled.'
  },

  reviewsH2: 'Six families\' Google reviews, as they were posted',

  book: {
    h2: 'Book a free first lesson in Sandyford',
    intro: 'Tell us how old the learner is and what they like doing, and the first hour will be designed around it. It could end with a game, a first program, or a table that tests an answer from every starting point.',
    success: 'Thank you. We will be in touch shortly about the first lesson.'
  },

  faq: {
    h2: 'Sandyford coding class questions',
    intro: 'Questions we are asked by Sandyford families.',
    items: [
      { q: 'Is there a Modern Age Coders centre in Sandyford?', a: 'No. We teach live over video and have no premises in Ireland. A learner needs a computer, a microphone and sound, and a steady connection. The phone number shown is our Indian number.', boiler: true },
      { q: 'What is the data project on this page?', a: 'Comparing growth on the two Luas lines from the statistics office\'s passenger table. From six of the seven possible base years the Green Line grew more by 2025; from 2019 alone the Red Line did. Learners build the full table and report the spread, not one row.' },
      { q: 'Does the page give passenger numbers for the Sandyford stop?', a: 'No. The published table counts journeys for each whole line. Stop-level figures are not in it, and the page does not estimate them.' },
      { q: 'Why is there no population for Sandyford?', a: 'District pages print only facts that named organisations publish about the place itself, such as the depot, the council\'s plan area, the schools and the hospital. None of those publish a population.' },
      { q: 'When do lessons run?', a: 'Weekdays after school and into the evening, and daytimes at weekends. Lessons are timed in Irish time, and because our teachers are in India, four and a half hours ahead in the Irish summer and five and a half in winter, we offer only hours that fit both.' },
      { q: 'Are adults welcome?', a: 'Yes, of any ability up to the age of sixty-seven. An adult can choose a same-level group or private lessons once the first lesson is done.' },
      { q: 'Will my child be in a class with other Sandyford children?', a: 'Not necessarily. Classes are formed by level, so classmates might be from Dublin 18, elsewhere in Ireland or abroad.' },
      { q: 'What do coding classes in Sandyford cost?', a: 'The first lesson is free. A group place is then USD 100 a month for about eight live lessons, two a week, with five to ten learners, and one-to-one lessons on the same schedule are USD 150 a month. Nothing is paid until the plan is agreed.', boiler: true },
      { q: 'How many learners share a class?', a: 'Five to ten, placed by level, pace and aim rather than by age or address. When no group fits a workable time, lessons are one to one.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Sandyford and south Dublin',
    html: 'The <a class="cg-inline-link" href="/coding-classes-in-dun-laoghaire-rathdown">Dún Laoghaire-Rathdown</a> page covers the council area around Sandyford, the <a class="cg-inline-link" href="/best-coding-class-in-dublin">Dublin</a> page covers the city the Green Line runs into, and further south the county has pages for <a class="cg-inline-link" href="/best-coding-class-in-bray">Bray</a> and <a class="cg-inline-link" href="/best-coding-class-in-greystones">Greystones</a>. The <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> links every page in the series.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Sandyford, Dún Laoghaire-Rathdown and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-dun-laoghaire-rathdown', label: 'Dún Laoghaire-Rathdown' },
    { href: '/best-coding-class-in-dublin', label: 'Dublin' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-sdf .cg-hero-grid { align-items: start; gap: clamp(1.04rem, 3.12vw, 2.43rem); }
.cg-root.cg-sdf .cg-hero h1 { font-weight: 650; letter-spacing: -0.0186em; line-height: 1.07; }
.cg-root.cg-sdf .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-sdf .cg-eyebrow { letter-spacing: 0.137em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-sdf .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.0119em; }
.cg-root.cg-sdf .cg-grid-3 { gap: clamp(1.09rem, 2.83vw, 2.17rem); }
.cg-root.cg-sdf .cg-table caption { letter-spacing: 0.034em; font-weight: 650; }
.cg-root.cg-sdf .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-sdf .cg-table td:last-child { font-weight: 650; }
.cg-root.cg-sdf .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 1.1rem; }
.cg-root.cg-sdf .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Sandyford, Dublin 18, named sources only (owner rule for districts), read 19 and 20 September 2026. CSO PxStat TOA11 "Luas Passenger Numbers", updated 21 May 2026, annual totals: Red Line 2018 21,837,268, 2019 24,045,744, 2020 9,727,187, 2021 10,040,293, 2022 20,275,074, 2023 25,393,165, 2024 28,620,698, 2025 27,689,678; Green Line 2018 19,999,700, 2019 24,301,487, 2020 9,448,869, 2021 9,441,025, 2022 18,392,801, 2023 22,812,052, 2024 25,606,901, 2025 27,441,333. Our arithmetic: 2025 as a percentage of each base year, Red and Green: 2018 126.8/137.2, 2019 115.2/112.9, 2020 284.7/290.4, 2021 275.8/290.7, 2022 136.6/149.2, 2023 109.0/120.3, 2024 96.7/107.2; Green share of all Luas journeys 47.2 to 50.3 percent, above half only in 2019 (50.3); Green 2018 to 2019 +21.5 percent, Red +10.1; 2025 monthly Green above Red in September (2,426,641 against 1,999,242), October (2,636,353 against 2,207,987) and November (2,562,702 against 2,174,702). TII trams and depots page: "Depot facilities for the Red Line are located at Red Cow and for the Green Line at Sandyford and Broombridge."; "Sandyford includes a maintenance and repair workshop building, servicing and washing facilities and a medium stabling area capable of accommodating up to 32 trams. It also contains some local control facilities and some limited office space."; "The Luas Green Line is operated by 41 Alstom Citadis 502 trams."; "Citadis 502 trams are 54.7m long"; Citadis 502 "have the capacity to carry over 400 passengers"; "In anticipation of the opening of the Luas Cross City project in December 2017"; Green Line 402 trams "extended between May 2019 and March 2021". TII Luas stops list: Sandyford (SAN) isParkRide="1" isCycleRide="1". Dun Laoghaire-Rathdown County Council, development plan 2022-2028 boundary plan areas CSV: "Boundary of Sandyford Urban Framework Plan", Map_Number 6, Feature_Type1 "Urban Framework Plan", Area__Ha_ 192. St Mary\'s National School own site: ", Lamb\'s Cross, Sandyford, Dublin 18", "co-educational primary school". Beacon Hospital contact page: "Beacon Hospital", "Sandyford", "Dublin 18", "D18 AK68". Nord Anglia International School Dublin: "South County Business Park", "Leopardstown", "Dublin 18", "D18 T672"; "the only private school in Dublin, Ireland, accredited to deliver the world-renowned International Baccalaureate (IB) curriculum to students aged from 3 to 18".',
    localProject: 'Base-year choice. From the CSO table of Luas passenger numbers by line, the learner indexes 2025 journeys to every base year from 2018 to 2024. Six of the seven bases show the Green Line growing more; only 2019 shows the Red Line ahead (115.2 against 112.9), because 2019 was the Green Line\'s strongest year relative to the Red (50.3 percent of all journeys, +21.5 percent on 2018 after Luas Cross City opened in December 2017). Pandemic bases (2020, 2021) give indices near 290 that say little about growth. The program prints the full table with raw counts beside each index and counts how many bases agree. Lessons: choose and justify the base in advance, show the alternatives, and never let one row carry a headline. New family for the cluster: base-year choice and index sensitivity.',
    requiredMentions: [
      '24,301,487',
      '27,441,333',
      '19,999,700',
      '27,689,678',
      '112.9',
      '137.2',
      '115.2',
      '126.8',
      '32 trams',
      '192 hectares',
      'D18 AK68',
      'D18 T672'
    ],
    sources: [
      { claim: 'CSO PxStat TOA11, Luas Passenger Numbers by line, 2018 to 2025, annual and monthly.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/TOA11/JSON-stat/2.0/en' },
      { claim: 'Transport Infrastructure Ireland, trams and depots: Green Line depots at Sandyford and Broombridge; Sandyford stabling for up to 32 trams with workshop, servicing and washing and local control facilities; 41 Citadis 502 trams, 54.7 metres, over 400 passengers; Luas Cross City opened December 2017; Green Line trams extended May 2019 to March 2021.', url: 'https://www.tii.ie/en/public-transport/luas/trams-and-depots/' },
      { claim: 'TII Luas stops list: Sandyford flagged park and ride and cycle and ride.', url: 'http://luasforecasts.rpa.ie/xml/get.ashx?action=stops&encrypt=false' },
      { claim: 'Dun Laoghaire-Rathdown County Council, development plan 2022-2028 boundary plan areas: Sandyford Urban Framework Plan, map 6, 192 hectares.', url: 'https://data.smartdublin.ie/dataset/70f527be-1f31-4c37-9c88-c1e757e5140b/resource/8da69700-a03e-429a-abcf-346850a30ddf/download/devplan_2022_2028_boundary_plan_areas.csv' },
      { claim: 'St Mary\'s National School: Lamb\'s Cross, Sandyford, Dublin 18; a co-educational primary school.', url: 'https://www.stmarysnssandyford.ie/' },
      { claim: 'Beacon Hospital contact page: Sandyford, Dublin 18, D18 AK68.', url: 'https://www.beaconhospital.ie/contact-us/' },
      { claim: 'Nord Anglia International School Dublin: South County Business Park, Leopardstown, Dublin 18, D18 T672; describes itself as the only private school in Dublin accredited to deliver the IB to students aged 3 to 18.', url: 'https://www.nordangliaeducation.com/nais-dublin' }
    ],
    rejectedClaims: [
      'Any passenger figure for the Sandyford stop: the CSO table is by line only.',
      'Any claim that Luas Cross City or the longer trams caused a particular change: the data show timing, not cause.',
      'Luas fares: the TII fare calculator returns euro prices, which this site does not show.',
      'The Sandyford Business District figures and the Luas park-and-ride list: the Dun Laoghaire-Rathdown page owns them.',
      'Any population figure for Sandyford and any aggregation of census small areas: owner rule for district pages.',
      'The gov.ie school profile (502 and 403 on 19 September 2026): not worked around; the school\'s own site is used.',
      'Leopardstown Racecourse as a Sandyford place: its own site gives Foxrock.'
    ]
  }
};
