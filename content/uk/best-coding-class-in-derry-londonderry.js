'use strict';
// Derry~Londonderry (cg- city page, UK cluster Phase 4, Northern Ireland). Spine: where do trains on the line to Coleraine
// pass each other? A time-distance (Marey) analysis of Translink's NI Railways timetable (OpenDataNI, TransXChange,
// updated 4 September 2026, Open Government Licence; read 23 September 2026; scratchpad dry/meet.py and meet2.py). Stops
// on the stretch: Derry~Londonderry, Bellarena, Castlerock, Coleraine. Wednesday 30 September 2026: 16 trains each way.
// A first model with one time per stop (dwell ignored) placed every meeting of an eastbound and a westbound train between
// Bellarena and Castlerock (15 meetings, hourly at :58). With arrival and departure times from the timing links (wait
// times included), all 15 meetings fall at Bellarena, where both trains are at the platform at the same time (eastbound
// sample: Derry~Londonderry 11:38, Bellarena arrive 11:58, depart 12:00, Castlerock 12:08, Coleraine 12:16). Saturday 3
// October 2026: 16 each way, 15 meetings, all at Bellarena. Sunday 4 October 2026: 6 each way, departures from
// Derry~Londonderry every two hours from 09:38, no meetings on this stretch. Straight-line distances from Translink's
// station coordinates: Derry~Londonderry to Bellarena 27.56 km, Bellarena to Castlerock 11.40 km (Coleraine not in the
// station coordinate file). The timetable does not describe track layout; no claim is made about loops or double track.
// Lesson family: time-distance (Marey) charts, interval and segment intersection, model refinement (dwell times).
// Screened 23 September 2026: Marey, segment intersection, line intersection and time-distance 0 hits (Derby uses a
// sweep line over bus trip intervals, a different question; Bangor NI uses the same timetable for the inspection
// paradox).
// Heritage from the Department for Communities Historic Environment Division: Listed Buildings NI (GeoJSON of 10
// September 2026): HB01/19/038 Guildhall, Shipquay Place, Grade A, construction 1880-1899; HB01/18/003 St Columba's
// Church, Long Tower Street, Grade A, 1780-1799; HB01/19/005 Irish Society Office, St Columb's Court, Grade A, 1760-1779;
// HB01/19/050 St Columb's Hall, Newmarket Street, Grade A, 1880-1899. HED GIS Scheduled Zones layer: scheduled monument
// 014:033 'LONDONDERRY TOWN WALLS', townland Derry; also 014:072, a 19th-century star fortification, Ebrington Barracks
// (spelt 'Ebbringtons' in the record), in Clooney.
// Census: NISRA Census 2021 MS-A01 and MS-A02: settlement DERRY CITY 85,279; DEAs Ballyarnett 25,252, Faughan 19,234,
// Foyleside 17,568, Sperrin 24,720, The Moor 17,128, Waterside 29,045; LGD Derry City and Strabane 150,756; Northern
// Ireland 1,903,175. Derry City age shares: 0-4 6.2, 10-14 6.8, 20-24 6.0, 70-74 4.2, 90+ 0.4 percent; Northern Ireland
// 6.0, 6.7, 5.9, 4.4, 0.7.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'DERRY~LONDONDERRY', blurb: 'The walled city of the north-west, with a project that plots every train on the line to Coleraine and finds exactly where they pass.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-derry-londonderry',
  code: 'dly',
  accent: '#431919',
  accentRationale: 'Derry~Londonderry: a deep oxblood, from the solver (12.25:1 on every paper tint, dE 6.8 from the nearest used accent)',
  pageType: 'city',
  place: {
    name: 'Derry~Londonderry',
    eyebrow: 'Derry~Londonderry, Northern Ireland',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Derry City and Strabane' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Northern Ireland', href: '/coding-and-ai-classes-in-northern-ireland' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Derry~Londonderry',
  title: 'Best Coding Classes in Derry~Londonderry | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Derry~Londonderry learners aged 6 to 67, from Waterside and Foyleside to Ballyarnett. The first lesson is free.',
  ogDescription: 'Coding and AI lessons for Derry~Londonderry, on a page that turns the rail timetable to Coleraine into a time-distance chart and finds where the trains pass.',
  twitterDescription: 'Learners in Derry~Londonderry from six to sixty-seven can study coding, Python, maths and AI with us in live online lessons, starting free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'Derry~Londonderry Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, graphs and scheduling, mathematics and AI taught live online in English to children, teenagers and adults in Derry~Londonderry, in small groups by level or one to one.'
  },

  h1: 'Coding classes in Derry~Londonderry',
  capsuleQ: 'What are the best coding classes in Derry~Londonderry?',
  capsule: 'The settlement NISRA calls Derry City had 85,279 usual residents at the 2021 census, in the council area of Derry City and Strabane. The Historic Environment Division lists the Guildhall on Shipquay Place at Grade A, and the town walls are a scheduled monument. Anyone here from six to sixty-seven can join our lessons, which a teacher in India leads live on a video call, one to one or with a group of five to ten working at one level, fitted around school and work in Northern Ireland. You pay nothing for the first session; staying on costs USD 100 a month in a group or USD 150 a month for private teaching.',
  lead: 'Trains leave Derry~Londonderry for Coleraine about once an hour, and trains from Coleraine come the other way. Somewhere, each pair must pass. Our project finds where, using a time-distance chart: time along one axis, distance along the other, every train a sloping line. Where an eastbound line crosses a westbound one, two trains meet. A first, simple model, with one time per station, says the meetings happen out on the line between Bellarena and Castlerock. Add the minutes each train waits at a station, from the same timetable, and all 15 of Wednesday\'s meetings move to one place: the platform at Bellarena.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Derry~Londonderry.',

  picks: {
    eyebrow: 'Course picks for Derry~Londonderry',
    h2: 'Four courses for the walled city',
    intro: 'Any of these four is a good starting point, depending on what the learner likes; whichever you choose, the first live lesson is free and you give no payment details to book it.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Block programming for younger children, from games to two trains that set off towards each other and must meet.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Graphs, gradients and where two lines cross, worked out in short programs, the maths inside every timetable chart.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from first lines to full projects, enough to read a real timetable file and draw every train as a line.' },
      { course: 'python-ai-automation-masterclass-college', band: 'University and adult', note: 'Python for adults who plan shifts, rotas or deliveries and need to see where schedules collide.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Derry~Londonderry today',
      h2: 'A city of several districts',
      intro: 'The table uses NISRA\'s 2021 census results: the settlement it names Derry City, four district electoral areas within the city, the wider council area and the whole of Northern Ireland.',
      body: [
        { kind: 'table', caption: 'Derry~Londonderry in the 2021 census, usual residents (NISRA)', head: ['Area', 'Kind of area', 'Usual residents'], rows: [
          ['Derry City', 'Settlement', '85,279'],
          ['Waterside', 'District electoral area', '29,045'],
          ['Ballyarnett', 'District electoral area', '25,252'],
          ['Foyleside', 'District electoral area', '17,568'],
          ['The Moor', 'District electoral area', '17,128'],
          ['Derry City and Strabane', 'Council area', '150,756'],
          ['Northern Ireland', 'Country', '1,903,175']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Children', p: 'Children under five were 6.2% of the Derry City settlement\'s residents in 2021 and those aged 10 to 14 were 6.8%, a little above Northern Ireland\'s 6.0% and 6.7%.' },
          { h3: 'Young adults', p: 'People aged 20 to 24 made up 6.0% of the settlement, against 5.9% across Northern Ireland, on NISRA\'s published age table.' },
          { h3: 'Older residents', p: 'Residents aged 70 to 74 were 4.2% of Derry City, against 4.4% in Northern Ireland, and those aged 90 or over 0.4%, against 0.7%.' }
        ] },
        { kind: 'p', text: 'We quote each NISRA figure as published and never add areas or age groups together. Our classes draw on the city and the places around it. In one week our teachers might see a Waterside eight-year-old on a first game, a Year 12 pupil from The Moor working on CCEA GCSE Digital Technology and a Foyleside adult automating a small business with Python, each in the class that matches their level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Walls and Guildhall',
      h2: 'A walled city in the heritage record',
      intro: 'From the Department for Communities\' Historic Environment Division: its Listed Buildings Northern Ireland dataset and its map of scheduled zones, both published openly.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Town walls', p: 'The Historic Environment Division\'s scheduled zones include monument 014:033, recorded as Londonderry Town Walls, in the townland of Derry.' },
          { h3: '1760 to 1799', p: 'The Irish Society Office in St Columb\'s Court, dated 1760 to 1779, and St Columba\'s Church on Long Tower Street, dated 1780 to 1799, are both listed at Grade A.' },
          { h3: '1880 to 1899', p: 'The Guildhall on Shipquay Place is listed at Grade A with a construction band of 1880 to 1899, as is St Columb\'s Hall on Newmarket Street.' }
        ] },
        { kind: 'p', text: 'In the townland of Clooney, the scheduled zones also include a 19th-century star fortification, which the record names Ebbringtons Barracks. The records give dates in construction bands rather than exact years, and we quote them that way. These records belong to the Department for Communities; neither it, Translink nor Derry City and Strabane District Council has any link with us.' },
        { kind: 'spec', title: 'Where the timetable comes from', p: 'Translink publishes the full NI Railways timetable on OpenDataNI in TransXChange format under the Open Government Licence; this project uses the version updated on 4 September 2026. Each journey lists its stops with running times between them and waiting times at them.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Where do the trains pass?',
      intro: 'On a time-distance chart, each train is a line that climbs as it travels and stays flat while it waits. Two trains going opposite ways meet where their lines cross. Finding those crossings is a problem of intersecting line segments, one pair at a time.',
      body: [
        { kind: 'table', caption: 'Meetings between eastbound and westbound trains on the Derry~Londonderry to Coleraine stretch, from the NI Railways timetable', head: ['Day', 'Trains each way', 'Meetings, first model (no waiting times)', 'Meetings, with waiting times'], rows: [
          ['Wednesday 30 September 2026', '16', '15, all between Bellarena and Castlerock', '15, all at Bellarena'],
          ['Saturday 3 October 2026', '16', '15, all between Bellarena and Castlerock', '15, all at Bellarena'],
          ['Sunday 4 October 2026', '6', 'None', 'None']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Rebuild each journey', p: 'From the timetable\'s patterns, work out when each train arrives at and leaves Derry~Londonderry, Bellarena, Castlerock and Coleraine. A typical eastbound train leaves at 11:38 and waits at Bellarena from 11:58 to 12:00.' },
          { h3: '2. Test every pair', p: 'For each eastbound and westbound pair, check first whether both are at the same station at overlapping times; if not, check whether their trips over the same stretch overlap in time.' },
          { h3: '3. Refine the model', p: 'The first version gave every train one time per station and put the meetings on the line. Using separate arrival and departure times moves all of them to Bellarena.' }
        ] },
        { kind: 'callout', h3: 'A small detail, a different answer', p: 'The two models disagree by only a minute or two, yet they tell a different story: one says trains pass in open country, the other that they meet, every hour, at one station. The waiting time at Bellarena, two minutes in the timetable, is what makes the meeting happen there. On Sunday, when trains leave Derry~Londonderry every two hours, the pattern is different again and no two trains meet on this stretch at all.' },
        { kind: 'p', text: 'We use Translink\'s own coordinates to show that the stations are not evenly spaced: in a straight line, Derry~Londonderry to Bellarena is 27.56 km and Bellarena to Castlerock 11.40 km, so Bellarena sits much nearer Castlerock than Derry~Londonderry. The timetable says nothing about the track itself, so the page makes no claim about why the trains meet where they do; it reports only what the times show.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Schedules and collisions',
      h2: 'Five checks before trusting a schedule model',
      intro: 'Learned on the Derry~Londonderry line, then used for bus rotas, delivery rounds, meeting-room bookings, air traffic and any plan where things share limited space and time.',
      body: [
        { kind: 'table', caption: 'Decisions behind the Derry~Londonderry timetable study', head: ['Question', 'For the Coleraine line', 'What goes wrong if you skip it'], rows: [
          ['What does each record contain?', 'Running times and waiting times', 'Dwell times dropped without anyone noticing'],
          ['Is the model detailed enough?', 'Rerun with arrival and departure separately', 'Meetings placed in the wrong place'],
          ['Which days are tested?', 'A Wednesday, a Saturday and a Sunday', 'A weekday pattern assumed for the weekend'],
          ['What can the data not say?', 'Nothing about track layout', 'A guess about infrastructure presented as fact'],
          ['Are all pairs checked?', 'Every eastbound against every westbound', 'A meeting missed between two rarely paired trains']
        ] },
        { kind: 'p', text: 'The second row is the heart of the project. A model can be simple and still wrong in a way that matters, and the only defence is to add the next level of detail and see whether the answer changes. Here it did, completely.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Two toy trains set off from opposite ends of a track on a timer, and the class predicts where they will meet.' },
          { h3: 'Teenagers', p: 'Parsing a real timetable, time-distance charts, segment intersection and model refinement in Python.' },
          { h3: 'Adults', p: 'Finding clashes in rotas and schedules, and checking a model by adding detail until the answer settles.' }
        ] },
        { kind: 'p', text: 'We have no connection with Translink, NISRA, the Department for Communities or Derry City and Strabane District Council. The timetable, census tables and heritage records are published openly; the journey rebuilding and meeting analysis on this page are our own work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From toy trains to time-distance charts',
    intro: 'The age bands are a guide; the free lesson shows where to begin.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Timers and tracks', p: 'Moving sprites towards each other on a timer in block code, and predicting where they meet.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Lines and graphs', p: 'Plotting times and distances in Python, and finding where two straight lines cross.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Real schedules', p: 'Parsing a TransXChange timetable, segment intersection and model refinement on real NI Railways data.', courses: ['python-complete-masterclass-teens', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Rotas and routes', p: 'Detecting clashes in schedules at work, and checking models against the detail they leave out.', courses: ['python-ai-automation-masterclass-college', 'data-structures-algorithms-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI can plan a timetable. Why should a teenager in Derry~Londonderry learn to check one?',
    intro: 'Because a model that leaves out a two-minute wait can put a meeting in the wrong place, and it will still look perfectly reasonable.',
    p1: 'Scheduling tools, including AI ones, work from models of time and space. If a model drops a detail such as waiting time, its output can be confidently wrong. A learner who has watched every meeting jump from open line to a station platform knows to ask what a model left out.',
    p2: 'The project also practises saying what data cannot tell you. The timetable shows where trains meet; it does not show the track. Separating what the evidence supports from what it does not is exactly the judgement AI leaves to people.',
    closer: 'So a teenager in Derry~Londonderry should keep learning to code in 2026, in a city whose town walls are a scheduled monument: AI can draft the plan, but people still have to check where things really meet.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Waterside, Foyleside or Ballyarnett, one class',
    intro: 'Learners in Derry~Londonderry live across the city and the wider council area of Derry City and Strabane. Online, every one of them is equally close to the lesson.',
    cells: [
      { h3: 'Across the city', p: 'A learner in Waterside and another near Long Tower can share one class without either travelling across town.' },
      { h3: 'Matched to local schooling', p: 'Whether a child is in primary school, facing the transfer test or taking CCEA GCSEs and A levels up to Year 14, we place them at the right stage; all teaching is in English.' },
      { h3: 'The opening lesson', p: 'The free session is spent writing real code, and closes with the teacher\'s suggested level, course and weekly time. We never ask for a card.' },
      { h3: 'Grouped by stage', p: 'A class brings together five to ten learners of the same level from here, from elsewhere in the UK and from other countries, which keeps a spread of sensible times open.' },
      { h3: 'Twice weekly', p: 'Lessons run on two set days every week, making roughly eight a month; the teacher works around school holidays and exam revision with each family.' },
      { h3: 'Evenings in India', p: 'India has one time zone all year, so a class at 5 pm here begins at 21:30 for our teachers during British Summer Time and 22:30 in winter.' }
    ],
    spec: { title: 'Across the north-west and beyond', p: 'Learners in Limavady, Coleraine, Strabane or Castlerock join exactly the same classes, as every lesson is online and classes are set by level.' }
  },

  fees: {
    h2: 'Derry~Londonderry lesson fees',
    intro: 'A free first lesson, then a single monthly fee.',
    first: 'A full lesson with no charge, ending with a suggested level, course and weekly time.',
    group: 'About eight live lessons a month, in a class of five to ten learners at one level.',
    private: 'About eight live lessons a month, with a teacher for your learner only.',
    closer: 'Every family outside India, including those in Ballyarnett and The Moor, is billed in US dollars; we do not list prices in pounds. The first charge comes only after the free lesson and once you have chosen a course and a weekly time, and the pricing page explains how breaks, missed sessions and a switch between group and one-to-one classes work.'
  },

  reviewsH2: 'What six families wrote on Google, copied as they wrote it',

  book: {
    h2: 'Book a free lesson for a learner in Derry~Londonderry',
    intro: 'We choose the opening task by age and experience: a two-trains timing game for a young child, a short Python program that finds where two lines cross for a beginner, or the real NI Railways timetable and a time-distance chart for a teenager ready for real data.',
    success: 'Thank you. We will be in touch soon to arrange the lesson for your learner in Derry~Londonderry.'
  },

  faq: {
    h2: 'Derry~Londonderry coding class questions',
    intro: 'What families in Derry~Londonderry ask us most.',
    items: [
      { q: 'How many people live in Derry~Londonderry?', a: 'NISRA\'s Census 2021 counted 85,279 usual residents in the settlement it calls Derry City. The council area of Derry City and Strabane had 150,756.' },
      { q: 'How does the city compare with Northern Ireland?', a: 'Children are a slightly bigger share and the oldest residents a smaller one: NISRA puts under-fives at 6.2% of the settlement in 2021 (Northern Ireland 6.0%) and people of 90 and over at 0.4% (Northern Ireland 0.7%).' },
      { q: 'What is a time-distance chart?', a: 'A chart with time along one axis and distance along the other, on which each train is a line. Where lines for trains going opposite ways cross, the trains meet. Finding those crossings is a problem of intersecting line segments.' },
      { q: 'Where do trains pass on the line to Coleraine?', a: 'In the NI Railways timetable for Wednesday 30 September 2026, all 15 meetings between eastbound and westbound trains happen at Bellarena, where both trains are at the station together. On Sunday, with trains every two hours, none meet on this stretch.' },
      { q: 'Where does the timetable data come from?', a: 'From Translink\'s NI Railways timetable, published on OpenDataNI in TransXChange format under the Open Government Licence. We are not connected with Translink.' },
      { q: 'Are the city walls protected?', a: 'Yes. The Historic Environment Division\'s scheduled zones include monument 014:033, recorded as Londonderry Town Walls. The Guildhall on Shipquay Place is a Grade A listed building.' },
      { q: 'When are lessons for learners here?', a: 'Most pick a regular slot straight after school, later on a weekday or at a weekend, and settle it during the free lesson. Our teachers are in India, so a teatime lesson here reaches them at about half past nine at night in summer and half past ten in winter.' },
      { q: 'Is there a centre in Derry~Londonderry?', a: 'No. We have no centre here and no premises anywhere in the UK, because every lesson is live online. Learners need a computer with sound and a steady connection, and our phone number is Indian.', boiler: true },
      { q: 'How much do lessons cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are learners grouped?', a: 'By level, pace and goals rather than by age or where they live, with five to ten learners at the same stage. When no group fits the learner\'s week, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Northern Ireland and the UK',
    h2: 'Northern Ireland and beyond',
    html: 'The same timetable powers the <a class="cg-inline-link" href="/best-coding-class-in-bangor-northern-ireland">Bangor page</a>, which shows why passengers wait longer than half the gap between trains, while <a class="cg-inline-link" href="/best-coding-class-in-belfast">Belfast</a> runs PageRank over its bus and Glider stops. Exam candidates can turn to our pages on CCEA <a class="cg-inline-link" href="/ccea-gcse-digital-technology-programming-help">GCSE Digital Technology programming</a> and CCEA <a class="cg-inline-link" href="/ccea-a-level-software-systems-development-help">A level Software Systems Development</a>. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-ireland">Northern Ireland guide</a> sets out how our stages match local schooling, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> leads to every other city.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Derry~Londonderry and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-bangor-northern-ireland', label: 'Bangor' },
    { href: '/best-coding-class-in-belfast', label: 'Belfast' },
    { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Northern Ireland' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-dly .cg-hero-grid { align-items: start; gap: clamp(1.05rem, 3.1vw, 2.5rem); }
.cg-root.cg-dly .cg-hero h1 { font-weight: 760; letter-spacing: -0.023em; line-height: 1.06; }
.cg-root.cg-dly .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-dly .cg-eyebrow { letter-spacing: 0.15em; font-weight: 690; text-transform: uppercase; }
.cg-root.cg-dly .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.015em; }
.cg-root.cg-dly .cg-grid-3 { gap: clamp(1rem, 2.5vw, 2.1rem); }
.cg-root.cg-dly .cg-table th { letter-spacing: 0.024em; }
.cg-root.cg-dly .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-dly .cg-ladder-col { border-top: 3px solid var(--cg-accent); border-bottom: 1px solid var(--cg-accent); padding: 0.9rem 0; }
.cg-root.cg-dly .cg-callout { border-left-width: 5px; border-radius: 3px; }
`,

  dossier: {
    curriculumAuthority: 'NISRA Census 2021 MS-A01: settlement DERRY CITY 85,279; DEAs Ballyarnett 25,252, Faughan 19,234, Foyleside 17,568, Sperrin 24,720, The Moor 17,128, Waterside 29,045; LGD Derry City and Strabane 150,756; Northern Ireland 1,903,175. MS-A02 shares: Derry City 0-4 6.2, 10-14 6.8, 20-24 6.0, 70-74 4.2, 90+ 0.4 percent; Northern Ireland 6.0, 6.7, 5.9, 4.4, 0.7. HED: Guildhall (A, 1880-1899), St Columba\'s Church Long Tower (A, 1780-1799), Irish Society Office (A, 1760-1779), St Columb\'s Hall (A, 1880-1899); scheduled zones 014:033 Londonderry Town Walls, 014:072 star fortification (recorded as Ebbringtons Barracks) in Clooney.',
    localProject: 'Where do the trains pass? Translink NI Railways TransXChange (updated 4 September 2026), Derry~Londonderry, Bellarena, Castlerock, Coleraine. Wednesday 30 September 2026: 16 trains each way; first model (no dwell) 15 meetings between Bellarena and Castlerock; with dwell times 15 meetings all at Bellarena. Saturday the same; Sunday 6 each way, no meetings. Straight-line distances 27.56 km and 11.40 km. No track claim. Lesson family: time-distance (Marey) charts and segment intersection.',
    requiredMentions: [
      '85,279',
      'time-distance',
      'Bellarena',
      'Castlerock',
      'Shipquay',
      'Long Tower',
      'Irish Society',
      'Foyleside',
      'Waterside',
      'Ballyarnett',
      'The Moor',
      'Derry City and Strabane'
    ],
    sources: [
      { claim: 'NISRA, Census 2021 MS-A01 usual resident population: settlement, DEA, LGD and Northern Ireland tables.', url: 'https://www.nisra.gov.uk/system/files/statistics/census-2021-ms-a01.xlsx' },
      { claim: 'NISRA, Census 2021 MS-A02 usual residents by age: Derry City and Northern Ireland.', url: 'https://www.nisra.gov.uk/system/files/statistics/census-2021-ms-a02.xlsx' },
      { claim: 'OpenDataNI, Translink Northern Ireland Rail Timetable Data (TransXChange, updated 4 September 2026, Open Government Licence).', url: 'https://www.opendatani.gov.uk/@translink/nir20160126v2' },
      { claim: 'OpenDataNI, Translink rail stations and halts: coordinates for Derry~Londonderry, Bellarena and Castlerock.', url: 'https://www.opendatani.gov.uk/@translink/northern-ireland-railways-stations' },
      { claim: 'OpenDataNI, Listed Buildings Northern Ireland (Department for Communities, Historic Environment Division), GeoJSON of 10 September 2026.', url: 'https://www.opendatani.gov.uk/@department-for-communities-historic-environment-division/listed-buildings-northern-ireland' },
      { claim: 'Historic Environment Division GIS data, Scheduled Zones layer: 014:033 Londonderry Town Walls; 014:072.', url: 'https://services2.arcgis.com/BdBkthNLO9mzGAMO/arcgis/rest/services/Historic_Environment_Division_GIS_Data/FeatureServer' }
    ],
    rejectedClaims: [
      'Track layout on the line (single track, loops, double track): not in the timetable data, so the page makes no claim about why trains meet at Bellarena.',
      'The length of the city walls: the scheduled zone\'s perimeter describes the protected area, not the walls, so no length is given.',
      'The dates and history of the walls: not in the fetched records beyond the scheduling entry.',
      'Any position on the name of the city: the page uses Translink\'s form, Derry~Londonderry, and quotes each source\'s own name for its data.',
      'Nationality, ethnicity, religion, birthplace, national identity and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with Translink, NISRA, the Department for Communities or Derry City and Strabane District Council.'
    ]
  }
};
