'use strict';
// Kildare town (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census
// 2022 town tables for "Kildare, Co Kildare", the Irish Rail station page for Kildare
// and the Irish National Stud's own site, read 19 September 2026. Spine: clustering
// and its stability. k-means on the eight standardised travel-to-work shares of the
// 94 towns with 5,000+ usual residents, 200 random starts per k (mulberry32 seeds
// 20220403 + k). Distinct groupings in 200 runs: k=2 11, k=3 29, k=4 68, k=5 157, k=6
// 194, k=8 200. Towns always grouped with Kildare: 43, 1 (Ennis), 0, 0, 0, 0.
// Kildare's group size ranges 59-73, 34-55, 23-54, 10-51, 4-40, 3-38. At k=4 the
// steadiest companions are Loughrea and Portlaoise (198 of 200), Mallow (197),
// Enniscorthy (196). Lowest within-group spread: 503.8, 401.6, 317.0, 275.1, 242.5,
// 201.7. Scratchpad eco/kmeans.js. Castlebar owns nearest neighbours (feature and
// scaling choice); this page owns clustering with random starts and choice of k.
// The Kildare county page owns the census-night population and the LEA figure.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'KILDARE TOWN', blurb: 'A machine-learning method sorts 94 towns into groups. Run it 200 times and it rarely gives the same answer twice. A page on how stable clusters really are.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-kildare',
  code: 'kdt',
  accent: '#9D492A',
  accentRationale: 'Kildare town: a rust from the widened solver search, apart from the Kildare county accent and the Newbridge, Naas and Athy pages',
  pageType: 'city',
  place: {
    name: 'Kildare',
    eyebrow: 'Kildare town, County Kildare',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'County Kildare' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-kildare', name: 'County Kildare' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Kildare', href: '/coding-classes-in-county-kildare' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Kildare town, County Kildare, Ireland',
  title: 'Best Coding Class in Kildare Town | Modern Age Coders',
  description: 'Coding, Python, AI and data classes for learners in Kildare town aged 6 to 67, live online in small groups at one level or one to one. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Kildare town, with a machine-learning project that clusters 94 towns and tests whether the groups hold up.',
  twitterDescription: 'Live online coding, Python and AI for Kildare town, ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '19 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Kildare Town',
    description: 'Online coding, Python, AI, data and mathematics in groups matched by level for children, teenagers and adults in Kildare town, County Kildare, taught live in English.'
  },

  h1: 'Coding classes in Kildare town',
  capsuleQ: 'What is the best coding class in Kildare town?',
  capsule: 'Kildare town has 10,234 usual residents in 3,463 households, and 2,897 of those households have broadband, the connection our lessons run on. Lessons are led live on video by a teacher, for a small same-level group or a single learner, generally on two days a week, and are open to anyone between six and sixty-seven. The first lesson is free. From then on, group places cost USD 100 a month and private teaching USD 150 a month.',
  lead: 'Machine learning includes methods that find groups nobody has labelled, and the most widely taught is k-means. Give it the travel-to-work pattern of the 94 towns of 5,000 or more, ask for four groups, and it returns four tidy clusters, one of them containing Kildare. Run it again from a different random start and the groups change. Run it 200 times and it produces 68 different groupings. Ask for eight groups and every one of the 200 runs disagrees with every other. The method is working as designed; what it shows is that a single set of clusters is one answer among many. This page runs the experiment and shows how to report clusters so that the instability is visible rather than hidden.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Kildare town.',

  picks: {
    eyebrow: 'Course picks for Kildare town',
    h2: 'Where Kildare town learners begin',
    intro: 'Pick by age and interest, then let the course teacher confirm the starting level in the free first lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Block coding with sorting games that group things by what they have in common.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python and a first look at AI: letting a program find groups in a small set of data.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 18', note: 'Machine learning including k-means clustering, random starts and checking results for stability.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'For adults who segment customers, products or cases and need to know how firm the segments are.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Let a program find groups of towns, then check whether it finds the same ones twice',
      intro: 'Each of the 94 towns is described by eight travel-to-work shares, scaled to a common footing. k-means is run 200 times for each number of groups, every run from a different random start.',
      body: [
        { kind: 'table', caption: 'What 200 runs of k-means produced for each number of groups', head: ['Groups (k)', 'Different groupings', 'Towns always with Kildare', 'Kildare\'s group size'], rows: [
          ['2', '11', '43', '59 to 73'],
          ['3', '29', '1', '34 to 55'],
          ['4', '68', '0', '23 to 54'],
          ['5', '157', '0', '10 to 51'],
          ['6', '194', '0', '4 to 40'],
          ['8', '200', '0', '3 to 38']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Kildare\'s pattern', p: 'Of Kildare\'s working residents who stated a way of travelling, 58.3 percent drive, 8.9 percent walk, 7.7 percent work mainly at home, 6.6 percent ride as a car passenger, 6.1 percent use a van, 5.8 percent take the train, 4.6 percent the bus and 1.4 percent cycle.' },
          { h3: 'Companions worth reporting', p: 'No town sits with Kildare in every run once k reaches four, but some come close: Loughrea and Portlaoise in 198 of 200 runs, Mallow in 197, Enniscorthy in 196. That kind of count is a finding; a single run\'s group is not.' },
          { h3: 'The method cannot pick k', p: 'The spread inside the groups always falls as k rises: 503.8 at two groups, 401.6 at three, 317.0 at four, 275.1 at five. More groups always fit better, so the number of groups is a decision the analyst makes and has to justify.' }
        ] },
        { kind: 'callout', h3: 'Clusters are found, not given: report how often they hold', p: 'k-means starts from random guesses and settles into the nearest good answer, which is not always the same answer. The usual advice is to run it many times and keep the tightest result, and that helps, but it does not remove the two choices underneath: how many groups, and which features. Honest reporting names k and the features, says how many restarts were used, and gives stability counts such as how often two towns land together. A cluster that appears in 198 of 200 runs is worth talking about. One that appears once is noise with a label.' },
        { kind: 'p', text: 'The learner writes k-means in about thirty lines: pick k random towns as starting centres, assign every town to its nearest centre, move each centre to the average of its towns, and repeat until nothing changes. A wrapper runs it 200 times with a fixed random seed per k, records every grouping, and counts two things: how many different groupings appeared, and how often each town landed in the same group as Kildare. Those two counts, not the colours of one chart, are the output worth keeping.' }
      ]
    },
    {
      id: 'uses', tint: 'tint', eyebrow: 'Where clustering turns up',
      h2: 'Groups without labels, in everyday systems',
      intro: 'The same method, and the same instability, sits behind many tools that sort things into groups.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Customer segments', p: 'Businesses group customers by what they buy or how they behave. A segment that changes each time the method is rerun is not a segment to build a campaign on.' },
          { h3: 'Sorting without labels', p: 'Clustering is used to group documents, images or sensor readings when nobody has labelled them. The groups it finds depend on the features it was given.' },
          { h3: 'Reporting a clustering', p: 'State the features, their scaling, the number of groups and restarts, and how stable the groups were. Without those, a clustering cannot be checked or repeated.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'The groups are not official categories and say nothing about what the towns are like to live in. They describe only how residents travel to work, as recorded by the census, and a different set of features would group the towns differently again.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'The town in the census',
      h2: 'A census portrait of Kildare town',
      intro: 'Counts for the town of Kildare, Co Kildare, taken from the Census 2022 small area tables for the people who usually live there.',
      body: [
        { kind: 'table', caption: 'Kildare town: census counts used on this page', head: ['Item', 'Kildare town'], rows: [
          ['Usual residents', '10,234'],
          ['Households', '3,463'],
          ['Households with broadband', '2,897'],
          ['Working residents in the travel table', '4,629'],
          ['Journeys to school, college or childcare', '2,897'],
          ['Children under fifteen in childcare', '653'],
          ['Working residents who take the train', '251']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Work journeys', p: 'Of 4,629 working residents, 2,507 drive, 382 walk, 332 work mainly at or from home, 285 travel as a car passenger, 264 by van, 251 by train, 196 by bus and 62 by bicycle.' },
          { h3: 'School journeys', p: 'Of 2,897 journeys to school, college or childcare, 1,480 are made as a car passenger and 593 on foot, with 310 by bus, 111 by train and 71 learners driving.' },
          { h3: 'Home-working', p: 'Of Kildare\'s working residents, 1,147 work from home for at least part of the week, 2,944 never do and 538 left the question blank.' }
        ] },
        { kind: 'spec', title: 'Two named places', p: 'Irish Rail gives the station address as Iarnród Éireann, Station Road, Kildare, Co. Kildare, Eircode R51 AW63, with sheltered bike parking. The Irish National Stud gives its address as Brallistown Little, Tully, Co. Kildare, R51 AP20. Neither has any connection with us.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'Lessons for Kildare town learners',
      intro: 'Expect two live lessons in an ordinary week, each led by a teacher from start to end.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'The census-night age table counts 1,243 children aged six to twelve in Kildare town. They start with blocks and sorting games, grouping things by what they share.' },
          { h3: 'Teenagers', p: 'Kildare town has 1,035 residents aged thirteen to eighteen, old enough for Python, websites, AI projects and machine-learning work like the clustering here.' },
          { h3: 'Adults', p: 'Adults begin wherever they are, beginners included, and the first lesson fixes the course.' }
        ] },
        { kind: 'p', text: 'Census counts are quoted from the Central Statistics Office without alteration; the clustering runs are ours, done on 19 September 2026. The station and the stud are quoted from their own websites.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From sorting games to clustering',
    intro: 'Age bands are a guide only; where each learner starts is decided in lesson one.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Sorting', p: 'Block-coded games that sort shapes and sprites into groups by a shared feature.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Nearest centre', p: 'Python that assigns points to the closest centre and moves the centres, one step at a time.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Clustering properly', p: 'k-means with restarts, choosing k, and measuring how stable the groups are.', courses: ['ai-ml-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Segments at work', p: 'Customer and case segmentation, and reporting it so others can check and repeat it.', courses: ['python-ai-automation-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant to group the towns',
    intro: 'It will return neat clusters. Ask it to run the method again.',
    p1: 'An AI assistant asked to cluster towns will usually run the method once, name the groups and describe them persuasively. On this data the same method, run from another random start, would very often give a different answer, and a description written for one run can sound just as convincing for the next.',
    p2: 'Having run k-means two hundred times, a learner asks the assistant for the number of restarts, how many different groupings appeared, and which pairs of towns stayed together in most runs. Those questions separate a stable pattern from a lucky draw.',
    closer: 'Finding groups is a few lines of code. Showing whether they are real takes a person who checks.',
    blogAnchor: 'why learning to code is a good bet'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons run for Kildare town',
    intro: 'In outline.',
    cells: [
      { h3: 'Live throughout', p: 'Every lesson is taught live by a teacher who works from the learner\'s code.' },
      { h3: 'Groups by level', p: 'Each group has between five and ten learners at the same stage, from Kildare, elsewhere in Ireland and overseas.' },
      { h3: 'Frequency', p: 'Around eight lessons a month, usually two a week, at hours agreed at the outset.' },
      { h3: 'Holidays and exams', p: 'The course plan builds in school holidays, mid-terms and exam weeks.' },
      { h3: 'Equipment', p: 'A laptop or desktop, headphones or speakers with a microphone, and a connection that keeps video running smoothly.' },
      { h3: 'Private teaching', p: 'A private teacher takes over for learners who are far ahead, need more time, or can only attend at an hour no group uses.' }
    ],
    spec: { title: 'Taught on video', p: 'Kildare town learners join every lesson by video. We have no premises in Kildare or anywhere in Ireland, and a lesson is the same from any connected home.' }
  },

  fees: {
    h2: 'Fees for Kildare town',
    intro: 'All of the charges.',
    first: 'A full first lesson with the level assessed, free.',
    group: 'A month in a group of five to ten at one stage, about eight live lessons.',
    private: 'A month of one-to-one lessons on the same weekly pattern.',
    closer: 'Every family outside India pays the same US dollar fee each month. The first lesson is free, billing starts once the course does, and the pricing page lists what happens with holidays, missed lessons and a change between group and private lessons.'
  },

  reviewsH2: 'Six Google reviews by families we teach, exactly as written',

  book: {
    h2: 'Book a free first lesson in Kildare town',
    intro: 'Tell us the learner\'s age and interests and we will design the first hour. It could close with a game, a first program, or a set of clusters and an honest note on how stable they are.',
    success: 'Thank you. We will be in touch about the lesson soon.'
  },

  faq: {
    h2: 'Kildare town coding class questions',
    intro: 'What Kildare town families usually ask.',
    items: [
      { q: 'How many people live in Kildare town?', a: 'The Census 2022 small area tables count 10,234 usual residents in the town of Kildare, in 3,463 households, 2,897 of which have broadband.' },
      { q: 'What is the data project on this page?', a: 'Clustering the 94 towns of 5,000 or more by how their residents travel to work, using k-means, and running it 200 times for each number of groups. With four groups it produced 68 different groupings; with five, 157. The project teaches how to report clusters with their stability.' },
      { q: 'Which towns are most like Kildare, then?', a: 'On travel to work, with four groups, Loughrea and Portlaoise landed in Kildare\'s group in 198 of 200 runs, Mallow in 197 and Enniscorthy in 196. Those counts are the reliable part; any single run\'s grouping is less so.' },
      { q: 'How do Kildare town residents get to work?', a: 'Of 4,629 working residents in the travel table, 2,507 drive, 382 walk, 332 work mainly at or from home, 285 go as a car passenger, 264 by van and 251 by train.' },
      { q: 'When are lessons?', a: 'Weekday evenings, late afternoons after school, and weekends. Kildare lessons are set on Irish time; our teachers, in India, are four and a half hours ahead during Irish summer time and five and a half in winter, and we offer only the slots that suit both.' },
      { q: 'Can adults take lessons?', a: 'Yes, up to sixty-seven and from any starting point. Adults settle in the first lesson whether to learn in a same-level group or with a private teacher.' },
      { q: 'Will a learner from Kildare town be grouped with local learners?', a: 'Only if they happen to share a level. Classmates are matched by stage, and may live in Kildare, anywhere else in Ireland or abroad.' },
      { q: 'Is there a Modern Age Coders classroom in Kildare town?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Kildare town cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around mid-Kildare',
    html: 'The <a class="cg-inline-link" href="/coding-classes-in-county-kildare">County Kildare</a> page covers the county, and the neighbouring town pages include <a class="cg-inline-link" href="/best-coding-class-in-newbridge">Newbridge</a>, <a class="cg-inline-link" href="/best-coding-class-in-athy">Athy</a> and <a class="cg-inline-link" href="/best-coding-class-in-portlaoise">Portlaoise</a>, one of Kildare\'s steadiest cluster companions, all in <a class="cg-inline-link" href="/coding-and-ai-classes-in-leinster">Leinster</a>. A comparison of online coding schools sits on <a class="cg-inline-link" href="/best-online-coding-classes-ireland">its own page</a>, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> is the index to every county and town.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Kildare town, County Kildare and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-kildare', label: 'County Kildare' },
    { href: '/best-coding-class-in-newbridge', label: 'Newbridge' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-kdt .cg-hero-grid { align-items: start; gap: clamp(1.13rem, 3.23vw, 2.6rem); }
.cg-root.cg-kdt .cg-hero h1 { font-weight: 700; letter-spacing: -0.0188em; line-height: 1.07; }
.cg-root.cg-kdt .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.16rem; }
.cg-root.cg-kdt .cg-eyebrow { letter-spacing: 0.135em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-kdt .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.013em; }
.cg-root.cg-kdt .cg-grid-3 { gap: clamp(1.06rem, 2.77vw, 2.16rem); }
.cg-root.cg-kdt .cg-table caption { letter-spacing: 0.035em; font-weight: 700; }
.cg-root.cg-kdt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-kdt .cg-table td:first-child { font-weight: 600; }
.cg-root.cg-kdt .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 1.03rem; }
.cg-root.cg-kdt .cg-callout { border-left-width: 8px; }
`,

  dossier: {
    curriculumAuthority: 'Kildare, Co Kildare, CSO Census 2022 Small Area Population town tables, read 19 September 2026. SAP2022T2T1TOWN22: usual residents 10,234. SAP2022T15T2TOWN22: households 3,463, broadband 2,897, no internet 212, not stated 289. SAP2022T11T1TOWN22 to work total 4,629: car driver 2,507, on foot 382, work mainly at or from home 332, car passenger 285, van 264, train DART or Luas 251, bus 196, bicycle 62, not stated 326; to school, college or childcare total 2,897: car passenger 1,480, on foot 593, bus 310, train 111, car driver 71, not stated 249. SAP2022T11T4TOWN22: 1,147 work from home at least some of the time, 2,944 never, 538 not stated. SAP2022T11T5TOWN22: 653 children under 15 in childcare. SAP2022T1T1TOWN22 (census-night age table): ages 6 to 12 sum to 1,243, ages 13 to 18 to 1,035. Clustering run in this session: the 94 towns with 5,000 or more usual residents, eight travel-to-work shares (on foot, bicycle, bus, train, car driver, car passenger, van, work mainly at or from home; not stated removed) standardised across the 94; Kildare 8.9, 1.4, 4.6, 5.8, 58.3, 6.6, 6.1, 7.7 percent. k-means with random initial centres chosen among the towns, 200 runs per k, seed 20220403 + k. Distinct groupings: k=2 11, k=3 29, k=4 68, k=5 157, k=6 194, k=8 200. Towns grouped with Kildare in all 200 runs: 43, 1 (Ennis), 0, 0, 0, 0. Kildare\'s group size: 59-73, 34-55, 23-54, 10-51, 4-40, 3-38. At k=4, co-assignment with Kildare: Loughrea 198, Portlaoise 198, Mallow 197, Enniscorthy 196. Lowest within-group sum of squares over the 200 runs: 503.8, 401.6, 317.0, 275.1, 242.5, 201.7. Irish Rail, Kildare: "Station Address Iarnród Éireann, Station Road, Kildare, Co. Kildare", "Eircode R51 AW63", "You can use the sheltered bike parking in Kildare station". Irish National Stud, own site: "Brallistown Little, Tully, Co. Kildare, R51 AP20".',
    localProject: 'Clustering and its stability. The learner writes k-means and runs it on the eight standardised travel-to-work shares of the 94 towns of 5,000 or more, 200 times for each number of groups from different random starts. The groupings multiply as k grows: 11 different results at two groups, 29 at three, 68 at four, 157 at five, 194 at six and 200 at eight, where no two runs agree. With four groups no town shares Kildare\'s group in every run, but Loughrea and Portlaoise do in 198 of 200, Mallow in 197 and Enniscorthy in 196; those co-assignment counts are the reportable finding. The within-group spread always falls as k rises (503.8, 401.6, 317.0, 275.1), so the method cannot choose k; the analyst must. Lessons: clusters are found, not given; report the features, scaling, k, restarts and stability counts. Castlebar owns nearest neighbours and the choice of features and scaling; this page adds random starts and the choice of k. New family for the cluster: unsupervised clustering and stability.',
    requiredMentions: [
      '10,234',
      '3,463',
      '2,897',
      '2,507',
      '1,147',
      '1,480',
      '653',
      '251',
      '1,243',
      '1,035',
      '401.6',
      'R51 AW63'
    ],
    sources: [
      { claim: 'CSO Census 2022 table SAP2022T11T1TOWN22, all towns: means of travel to work, used for the eight shares clustered across the 94 towns of 5,000 or more. Kildare, Co Kildare: to work 4,629 with car driver 2,507, on foot 382, mainly at or from home 332, car passenger 285, van 264, train 251, bus 196, bicycle 62, not stated 326; to school, college or childcare 2,897 with car passenger 1,480, on foot 593, bus 310, train 111, car driver 71.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22, SAP2022T15T2TOWN22, SAP2022T11T4TOWN22, SAP2022T11T5TOWN22 and SAP2022T1T1TOWN22, Kildare, Co Kildare: usual residents 10,234; households 3,463, broadband 2,897; 1,147 work from home at least some of the time, 2,944 never, 538 not stated; 653 children under 15 in childcare; 1,243 aged 6 to 12 and 1,035 aged 13 to 18 in the census-night age table.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T2T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'Irish Rail, Kildare station: "Station Address Iarnród Éireann, Station Road, Kildare, Co. Kildare", "Eircode R51 AW63", "You can use the sheltered bike parking in Kildare station".', url: 'https://www.irishrail.ie/en-ie/station/kildare' },
      { claim: 'Irish National Stud, own site: "Brallistown Little, Tully, Co. Kildare, R51 AP20".', url: 'https://www.irishnationalstud.ie/' }
    ],
    rejectedClaims: [
      'Any description of what the clustered groups are like as places: they reflect travel-to-work shares only.',
      'Presenting a single k-means run as the grouping of towns.',
      'Any claim about the Irish National Stud beyond its name and address.',
      'Nearest-neighbour similarity and the choice of features and scaling: the Castlebar page owns them.',
      'The census-night population and local electoral area figure: the County Kildare page owns them.'
    ]
  }
};
