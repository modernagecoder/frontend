'use strict';
// Bangor, Northern Ireland (cg- city page, UK cluster Phase 4). Spine: why do you wait longer for a Bangor train than
// the timetable suggests? The inspection (waiting-time) paradox on Translink's NI Railways timetable (OpenDataNI dataset
// 'Translink Northern Ireland Rail Timetable Data', TransXChange XML, resource updated 4 September 2026, file dated 2
// September 2026, Open Government Licence; read 23 September 2026; scratchpad bni/tx.py, wait.py). Journeys rebuilt from
// journey patterns and timing links; departures from Bangor Train Station (9000BR) calling later at Lanyon Place, for
// dates in the timetable: Wednesday 30 September 2026, 51 trains, first 06:10, last 22:41, 50 gaps, mean 19.82 minutes,
// shortest 3, longest 60; gap sizes 3 (6 times), 5 (1), 6 (6), 10 (1), 14 (6), 17 (5), 20 (2), 23 (1), 24 (1), 25 (1),
// 30 (18), 41 (1), 60 (1). Half the mean gap 9.91 minutes; mean wait for a random arrival sum(h^2)/(2 sum h) 13.64,
// simulated with 200,000 random arrivals 13.64. Gaps of 20 minutes or more: 50.0 percent of gaps, 76.0 percent of the
// time. Saturday 3 October 2026: 31 trains, 06:41 to 22:41, mean gap 32.00, half 16.00, wait 16.88. Sunday 4 October
// 2026: 14 trains, 08:41 to 21:41, every 60 minutes, half 30.00, wait 30.00. Stations on the line in the timetable:
// Bangor West, Carnalea, Helen's Bay, Seahill, Cultra, Marino, Holywood.
// Lesson family: inspection paradox / waiting-time paradox, size-biased sampling, simulation against formula. Screened
// 23 September 2026: inspection paradox, waiting-time paradox and headway 0 hits in src/pages and content/uk (GTFS and
// Translink appear on the Belfast PageRank page, a different method).
// Heritage from the Department for Communities Historic Environment Division, Listed Buildings Northern Ireland
// (OpenDataNI GeoJSON of 10 September 2026): HB23/07/001 A Town Hall, Bangor Castle, Grade A, construction 1840-1859,
// former use house; HB23/05/012 The Tower House, 34 Quay Street, Grade B1, 1600-1649, former use house, now office;
// HB23/07/004 A Bangor Abbey Parish Church of Ireland, Grade B+, 1820-1839; HB23/15/039 A The Station, Station Square,
// Helen's Bay, Grade A, 1860-1879, railway station structures; HB23/15/022 Railway Viaduct, Crawfordsburn Country Park,
// Grade A, 1860-1879; HB23/03/009 Royal Ulster Yacht Club, Grade B+, 1880-1899.
// Census: NISRA Census 2021 MS-A01 and MS-A02: settlement BANGOR 64,596 usual residents; DEAs Bangor Central 26,637,
// Bangor East and Donaghadee 22,850, Bangor West 19,517; LGD Ards and North Down 163,659; Northern Ireland 1,903,175.
// Bangor settlement age shares (NISRA): 0-4 5.1 percent, 10-14 6.4, 20-24 4.5, 70-74 5.8, 90+ 1.0; Northern Ireland
// 0-4 6.0, 10-14 6.7, 20-24 5.9, 70-74 4.4, 90+ 0.7.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'BANGOR NI', blurb: 'The County Down city at the end of the line from Belfast, with a project that shows why passengers wait longer than half the gap between trains.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-bangor-northern-ireland',
  code: 'bni',
  accent: '#826417',
  accentRationale: 'Bangor, Northern Ireland: a sand gold, from the solver (4.50:1 on every paper tint, dE 7.1 from the nearest used accent)',
  pageType: 'city',
  place: {
    name: 'Bangor',
    eyebrow: 'Bangor, County Down',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Ards and North Down' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Northern Ireland', href: '/coding-and-ai-classes-in-northern-ireland' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Bangor, Northern Ireland',
  title: 'Best Coding Classes in Bangor, County Down | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Bangor learners aged 6 to 67, from Ballyholme and Groomsport to Carnalea and Crawfordsburn. First lesson free.',
  ogDescription: 'Coding and AI lessons for Bangor, County Down, on a page that uses the Bangor line timetable to show why passengers wait longer than half the gap between trains.',
  twitterDescription: 'Bangor learners from six to sixty-seven can study coding, Python, maths and AI with us in live online lessons, and the first one is free.',
  ogImageCourse: 'statistics-probability-maths-course',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'Bangor Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, probability and simulation, mathematics and AI taught live online in English to Bangor children, teenagers and adults, in small groups by level or one to one.'
  },

  h1: 'Coding classes in Bangor, Northern Ireland',
  capsuleQ: 'What are the best coding classes in Bangor, Northern Ireland?',
  capsule: 'The Bangor settlement had 64,596 usual residents at the 2021 census, according to the Northern Ireland Statistics and Research Agency, within the council area of Ards and North Down. The Historic Environment Division lists the Tower House on Quay Street with a construction date of 1600 to 1649. Bangor learners aged six to sixty-seven are taught live over video by teachers based in India, singly or in classes of five to ten at one level, with lesson times arranged around the Northern Ireland school day and working hours. The first lesson is free, and after that a class place is USD 100 a month and one-to-one teaching USD 150 a month.',
  lead: 'On an ordinary Wednesday, Translink\'s timetable has 51 trains leaving Bangor for Belfast, an average of one every 19.82 minutes. So an average wait of about ten minutes? No. Some trains leave three minutes apart in the rush hour, while in the evening the gaps stretch to half an hour or more, and a passenger who turns up at a random moment is far more likely to land in a long gap than a short one. Our Bangor project rebuilds the timetable from Translink\'s open data and measures the real average wait: 13.64 minutes, not 9.91. Teenagers prove it with a formula, then again by simulating 200,000 passengers.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Bangor, Northern Ireland.',

  picks: {
    eyebrow: 'Course picks for Bangor',
    h2: 'Four courses for the city at the end of the line',
    intro: 'Choose the course that fits what the learner already likes. All four start with a free live lesson, and booking asks for no card.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Block programming for younger children, from games to a train that leaves a station on a timetable.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Averages, fractions of time and simple probability written as short programs, the maths behind every timetable.' },
      { course: 'statistics-probability-maths-course', band: 'Ages 14 to 18', note: 'Statistics and probability built up step by step, including why a random moment is more likely to fall in a long gap.' },
      { course: 'python-ai-automation-masterclass-college', band: 'University and adult', note: 'Python for adults who read schedules, logs and service data, and need averages that match what people actually experience.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Bangor today',
      h2: 'A city in North Down',
      intro: 'Census 2021 figures from the Northern Ireland Statistics and Research Agency (NISRA), for the Bangor settlement, the three district electoral areas named after the city, the council area and Northern Ireland.',
      body: [
        { kind: 'table', caption: 'Bangor in the 2021 census, usual residents (NISRA)', head: ['Area', 'Type of area', 'Usual residents'], rows: [
          ['Bangor', 'Settlement', '64,596'],
          ['Bangor Central', 'District electoral area', '26,637'],
          ['Bangor East and Donaghadee', 'District electoral area', '22,850'],
          ['Bangor West', 'District electoral area', '19,517'],
          ['Ards and North Down', 'Council area', '163,659'],
          ['Northern Ireland', 'Country', '1,903,175']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Seventies', p: 'In the Bangor settlement, 5.8% of residents were aged 70 to 74 in 2021, against 4.4% across Northern Ireland, by NISRA\'s published age table.' },
          { h3: 'Children', p: 'Children under five made up 5.1% of Bangor\'s residents, against 6.0% in Northern Ireland; those aged 10 to 14 were 6.4%, against 6.7%.' },
          { h3: 'Nineties', p: 'People aged 90 or over were 1.0% of Bangor residents in 2021, compared with 0.7% across Northern Ireland as a whole.' }
        ] },
        { kind: 'p', text: 'Each figure is quoted exactly as NISRA publishes it, table by table, without adding areas or age groups together. Our Bangor classes draw on the city and the places along the coast and the line. A Ballyholme seven-year-old making a first game, a Year 12 student from Carnalea preparing for CCEA GCSE Digital Technology and a Groomsport adult learning Python for work could each join a different class, grouped by level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Listed Bangor',
      h2: 'A tower house, a town hall and a railway line',
      intro: 'From the Listed Buildings Northern Ireland dataset of the Department for Communities\' Historic Environment Division, published on OpenDataNI.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1600 to 1649', p: 'The Tower House at 34 Quay Street is listed at Grade B1, with a construction date in these years. The record gives its former use as a house and its current use as an office.' },
          { h3: '1840 to 1859', p: 'The Town Hall at Bangor Castle is listed at Grade A, built in these years as a house. Bangor Abbey Parish Church of Ireland, from 1820 to 1839, is listed at Grade B+.' },
          { h3: '1860 to 1879', p: 'Along the line to Belfast, the station at Helen\'s Bay and the railway viaduct in Crawfordsburn Country Park are both listed at Grade A, each with a construction date in these years.' }
        ] },
        { kind: 'p', text: 'The same dataset lists the Royal Ulster Yacht Club on Clifton Road at Grade B+, built between 1880 and 1899, and many buildings on the Clandeboye estate. The line those Grade A railway structures serve is the one whose timetable this project studies. We have no connection with the Department for Communities, Translink or Ards and North Down Borough Council, and the records here are theirs.' },
        { kind: 'spec', title: 'Where the timetable comes from', p: 'Translink publishes the complete NI Railways timetable on OpenDataNI in the TransXChange format, under the Open Government Licence. The version used here was updated on 4 September 2026. We rebuilt every journey from its pattern of stops and running times, then kept the trains leaving Bangor for Belfast.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Why is the wait longer than half the gap?',
      intro: 'If trains ran exactly every 20 minutes, a passenger arriving at a random moment would wait 10 minutes on average. When gaps vary, the long gaps take up more of the day, so more random arrivals fall into them. The average wait becomes the sum of the squared gaps divided by twice their total.',
      body: [
        { kind: 'table', caption: 'Trains from Bangor towards Belfast in the NI Railways timetable, for dates in autumn 2026', head: ['Day', 'Trains', 'Average gap', 'Half the average gap', 'Real average wait'], rows: [
          ['Wednesday 30 September', '51', '19.82 minutes', '9.91 minutes', '13.64 minutes'],
          ['Saturday 3 October', '31', '32.00 minutes', '16.00 minutes', '16.88 minutes'],
          ['Sunday 4 October', '14', '60.00 minutes', '30.00 minutes', '30.00 minutes']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Rebuild the timetable', p: 'Each journey in the file has a start time and a pattern of timed links between stations. Adding the links up gives the time every train leaves Bangor, 51 of them on the Wednesday.' },
          { h3: '2. Measure the gaps', p: 'On the Wednesday the gaps run from 3 minutes to 60: six gaps of 3 minutes and six of 6 in the busy hours, eighteen of 30 minutes, and one of an hour late in the evening.' },
          { h3: '3. Test by simulation', p: 'Drop 200,000 imaginary passengers at random times between the first and last trains and measure each wait. The simulation gives 13.64 minutes, exactly what the formula predicts.' }
        ] },
        { kind: 'callout', h3: 'Where the extra wait comes from', p: 'Half of the Wednesday\'s gaps are 20 minutes or longer, but those long gaps cover 76.0% of the day. A random passenger is therefore about three times as likely to arrive in a long gap as a short one. That is the inspection paradox: sample by time, and the long gaps are over-represented. On Sunday, when every gap is exactly an hour, the paradox disappears and the real wait is exactly half the gap.' },
        { kind: 'p', text: 'Of course, most commuters check the timetable and do not arrive at random, so the 13.64 minutes describes someone who turns up without looking. It also shows what the timetable could offer: 51 trains spread evenly over the same hours would give an average wait of 9.91 minutes. Pairing trains in the rush hour suits passengers who plan their journey; someone who turns up at a random moment gains less from it.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Averages that mislead',
      h2: 'Five checks before quoting an average wait',
      intro: 'Learned on the Bangor line, then used for bus stops, lift queues, website response times, class sizes and any average where people meet the long cases more often than the short ones.',
      body: [
        { kind: 'table', caption: 'Decisions behind the Bangor timetable study', head: ['Question', 'For the Bangor trains', 'What goes wrong if you skip it'], rows: [
          ['Average of what?', 'Waits felt by passengers, not gaps between trains', 'A service that seems twice as frequent as it feels'],
          ['Which day is it?', 'A Wednesday, a Saturday and a Sunday', 'A weekday figure quoted for the weekend'],
          ['Does the formula hold?', 'Checked with 200,000 simulated arrivals', 'A formula applied without being tested'],
          ['Who arrives at random?', 'Only passengers who do not check the timetable', 'A result stretched to cover everyone'],
          ['Which version of the timetable?', 'The file updated on 4 September 2026', 'Old times compared with new ones']
        ] },
        { kind: 'p', text: 'The first row is the lesson that transfers. The same trick explains why a school\'s average class size can look small while most pupils sit in big classes, and why the average gap between buses is shorter than the gap most passengers experience. Whenever something is counted by how often people meet it, the long cases weigh more.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Marking a day\'s trains on a paper clock, throwing counters at random and counting where they land.' },
          { h3: 'Teenagers', p: 'Parsing a real timetable file, the inspection paradox and a simulation in Python, checked against a formula.' },
          { h3: 'Adults', p: 'Spotting averages at work that describe the system rather than the people using it, and fixing them.' }
        ] },
        { kind: 'p', text: 'We have no connection with Translink, the Northern Ireland Statistics and Research Agency or the Department for Communities. The timetable, census tables and listed buildings data are published openly; the journey rebuilding, waiting-time calculations and simulation on this page are our own work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a paper clock to the inspection paradox',
    intro: 'The ages are a rough guide; the free lesson finds the right starting level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Times and gaps', p: 'Reading times, counting gaps and making a simple timetable game in block code.', courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Averages in Python', p: 'Lists of times, differences and averages in Python, with a program that finds the longest gap.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Paradoxes and simulation', p: 'Reading a real data file, the inspection paradox and Monte Carlo checks against exact formulas.', courses: ['statistics-probability-maths-course', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Service data at work', p: 'Measuring waits, delays and queues as customers experience them, with honest averages.', courses: ['python-ai-automation-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI can average any table. Why should a Bangor teenager ask what the average means?',
    intro: 'Because the average gap between trains and the average wait for a train are different numbers, and a quick summary easily confuses them.',
    p1: 'Ask an AI tool how often trains leave Bangor and it may correctly say every 20 minutes on average, and then suggest a 10 minute wait. The mistake is subtle and plausible. A learner who has simulated 200,000 passengers knows the right question: averaged over what, and from whose point of view?',
    p2: 'The project also practises working with a real, messy data format. Rebuilding journeys from TransXChange patterns and timing links is exactly the kind of careful data engineering that AI systems depend on and rarely explain.',
    closer: 'So a Bangor teenager should keep learning to code in 2026, at the end of a line whose Grade A station at Helen\'s Bay dates from the 1860s or 1870s: AI can compute an average instantly, but people still decide which average matters.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Ballyholme, Groomsport or Helen\'s Bay, in one class',
    intro: 'Bangor learners live along the coast and the railway, from Groomsport to Helen\'s Bay. Online, no one needs to catch a train for the lesson.',
    cells: [
      { h3: 'Coast and line', p: 'A learner in Seahill and another in Crawfordsburn can share a class without waiting on any platform.' },
      { h3: 'Northern Ireland school years', p: 'Our stages follow Northern Ireland schooling from P1 to Year 14, through the transfer test years to CCEA GCSE and A level, with every lesson taught in English.' },
      { h3: 'A working first lesson', p: 'The free session is real coding, not a presentation, and ends with the teacher recommending a level, a course and a weekly slot. No card is needed.' },
      { h3: 'Classes by level', p: 'Five to ten learners at the same stage, drawn from Bangor, the rest of the UK and abroad, so every level has workable times.' },
      { h3: 'Two lessons weekly', p: 'Two fixed lessons each week, about eight a month, with holidays and exam study arranged with the teacher in advance.' },
      { h3: 'India time', p: 'India does not change its clocks, so a Bangor lesson at 5 pm starts at 21:30 for our teachers in summer and 22:30 in winter.' }
    ],
    spec: { title: 'Across County Down', p: 'Learners in Newtownards, Holywood, Donaghadee or Comber join exactly the same classes, since every lesson is online and classes are set by level.' }
  },

  fees: {
    h2: 'Bangor lesson fees',
    intro: 'The first lesson is free, then there is one monthly fee.',
    first: 'A full lesson with no charge, ending with a suggested level, course and weekly slot.',
    group: 'Around eight live lessons a month, in a class of five to ten learners at one stage.',
    private: 'Around eight live lessons a month, with a teacher for your learner alone.',
    closer: 'Families in Clandeboye or Bangor West pay in US dollars, like all families outside India, and our site shows no pound prices. Nothing is charged until after the free lesson and the agreement of a course and weekly slot; the pricing page explains pauses, missed lessons and switching between group and one-to-one teaching.'
  },

  reviewsH2: 'Six Google reviews from families, as written',

  book: {
    h2: 'Book a free lesson for a Bangor learner',
    intro: 'The first lesson fits the learner: a timetable game for a young child, a short Python program that finds the gaps in a list of times for a beginner, or the real NI Railways timetable and the inspection paradox for a teenager ready for probability.',
    success: 'Thank you. We will be in touch soon to arrange the lesson for your Bangor learner.'
  },

  faq: {
    h2: 'Bangor coding class questions',
    intro: 'What Bangor families ask us most.',
    items: [
      { q: 'How many people live in Bangor?', a: 'NISRA\'s Census 2021 counted 64,596 usual residents in the Bangor settlement. The council area of Ards and North Down had 163,659.' },
      { q: 'How does Bangor compare with Northern Ireland?', a: 'It has more residents in their early seventies on NISRA\'s figures: 5.8% of residents were aged 70 to 74 in 2021, against 4.4% across Northern Ireland, and 5.1% were under five, against 6.0%.' },
      { q: 'What is the inspection paradox?', a: 'When you sample by time or by people, long intervals are over-represented. For trains, a passenger arriving at a random moment is more likely to land in a long gap, so the average wait is longer than half the average gap unless the gaps are all equal.' },
      { q: 'How long do you wait for a Bangor train?', a: 'On a Wednesday in the NI Railways timetable, trains to Belfast leave on average every 19.82 minutes, but a passenger arriving at a random moment waits 13.64 minutes on average, not 9.91. On Sunday, with trains every hour, the wait is exactly 30 minutes.' },
      { q: 'Where does the timetable data come from?', a: 'From Translink\'s NI Railways timetable, published on OpenDataNI under the Open Government Licence and updated on 4 September 2026. We are not connected with Translink.' },
      { q: 'Which Bangor buildings are listed?', a: 'The Historic Environment Division lists the Town Hall at Bangor Castle at Grade A and the Tower House on Quay Street at Grade B1, and, on the line to Belfast, the station at Helen\'s Bay and the viaduct in Crawfordsburn Country Park at Grade A.' },
      { q: 'When are Bangor lessons?', a: 'Bangor families usually choose a time after school, on a weekday evening or at the weekend, agreed in the free lesson. With our teachers in India, that is a late-evening lesson for them: four and a half hours ahead of Northern Ireland in summer, five and a half in winter.' },
      { q: 'Is there a centre in Bangor?', a: 'No. We have no Bangor centre and no premises anywhere in the UK, because every lesson is live online. Learners need a computer with sound and a steady connection, and our phone number is Indian.', boiler: true },
      { q: 'What do Bangor lessons cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are learners grouped?', a: 'By level, pace and goals rather than age or where they live, with five to ten learners at the same stage. If no group suits the learner\'s week, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Northern Ireland and the UK',
    h2: 'Northern Ireland and beyond',
    html: 'Down the line, the <a class="cg-inline-link" href="/best-coding-class-in-belfast">Belfast page</a> runs PageRank over the city\'s Metro and Glider stops, and <a class="cg-inline-link" href="/best-coding-class-in-armagh">Armagh</a> counts how far a star catalogue is out of order. Students working towards CCEA qualifications will find help for <a class="cg-inline-link" href="/ccea-gcse-digital-technology-programming-help">GCSE Digital Technology programming</a> and <a class="cg-inline-link" href="/ccea-a-level-software-systems-development-help">A level Software Systems Development</a>. How our levels line up with Northern Ireland schooling is set out in the <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-ireland">Northern Ireland guide</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> links every other city.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Bangor and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-belfast', label: 'Belfast' },
    { href: '/best-coding-class-in-armagh', label: 'Armagh' },
    { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Northern Ireland' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-bni .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.2vw, 2.5rem); }
.cg-root.cg-bni .cg-hero h1 { font-weight: 745; letter-spacing: -0.022em; line-height: 1.06; }
.cg-root.cg-bni .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 1.05rem; }
.cg-root.cg-bni .cg-eyebrow { letter-spacing: 0.14em; font-weight: 710; text-transform: uppercase; }
.cg-root.cg-bni .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.014em; }
.cg-root.cg-bni .cg-grid-3 { gap: clamp(1rem, 2.6vw, 2.2rem); }
.cg-root.cg-bni .cg-table th { letter-spacing: 0.026em; }
.cg-root.cg-bni .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bni .cg-ladder-col { border-top: 3px double var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-bni .cg-callout { border-left-width: 6px; border-radius: 2px; }
`,

  dossier: {
    curriculumAuthority: 'NISRA Census 2021 MS-A01: settlement BANGOR 64,596; DEAs Bangor Central 26,637, Bangor East and Donaghadee 22,850, Bangor West 19,517; LGD Ards and North Down 163,659; Northern Ireland 1,903,175. MS-A02 shares: Bangor 0-4 5.1, 10-14 6.4, 70-74 5.8, 90+ 1.0 percent; Northern Ireland 6.0, 6.7, 4.4, 0.7. HED Listed Buildings NI (10 September 2026): Town Hall, Bangor Castle, Grade A, 1840-1859; Tower House, 34 Quay Street, B1, 1600-1649; Bangor Abbey Parish Church of Ireland, B+, 1820-1839; Helen\'s Bay station, A, 1860-1879; Crawfordsburn railway viaduct, A, 1860-1879; Royal Ulster Yacht Club, B+, 1880-1899.',
    localProject: 'Why is the wait longer than half the gap? Translink NI Railways TransXChange timetable (updated 4 September 2026). Bangor to Belfast: Wednesday 30 September 2026 51 trains, mean gap 19.82 minutes, half 9.91, real wait 13.64 (simulation 13.64), long gaps 50 percent of gaps and 76.0 percent of time; Saturday 31 trains, 16.00 vs 16.88; Sunday 14 trains hourly, 30.00 vs 30.00. Lesson family: inspection paradox.',
    requiredMentions: [
      '64,596',
      'inspection paradox',
      'TransXChange',
      'Tower House',
      'Bangor Castle',
      'Helen\'s Bay',
      'Crawfordsburn',
      'Carnalea',
      'Ballyholme',
      'Groomsport',
      'Seahill',
      'Clandeboye'
    ],
    sources: [
      { claim: 'NISRA, Census 2021 MS-A01 usual resident population: settlement, DEA, LGD and Northern Ireland tables.', url: 'https://www.nisra.gov.uk/system/files/statistics/census-2021-ms-a01.xlsx' },
      { claim: 'NISRA, Census 2021 MS-A02 usual residents by age: Bangor settlement, Ards and North Down and Northern Ireland.', url: 'https://www.nisra.gov.uk/system/files/statistics/census-2021-ms-a02.xlsx' },
      { claim: 'OpenDataNI, Translink Northern Ireland Rail Timetable Data (TransXChange, updated 4 September 2026, Open Government Licence).', url: 'https://www.opendatani.gov.uk/@translink/nir20160126v2' },
      { claim: 'OpenDataNI, Listed Buildings Northern Ireland (Department for Communities, Historic Environment Division), GeoJSON of 10 September 2026.', url: 'https://www.opendatani.gov.uk/@department-for-communities-historic-environment-division/listed-buildings-northern-ireland' }
    ],
    rejectedClaims: [
      'That commuters wait 13.64 minutes: the figure applies only to passengers arriving at random, and the page says most check the timetable.',
      'Reasons for Translink\'s timetable pattern: not taken from a fetched source, so no reason is given.',
      'Bangor Abbey\'s early history (monastic foundation): not in the fetched listing data, so only the listed church and its construction date are given.',
      'Adding age bands or areas together: NISRA figures are quoted table by table as published.',
      'Nationality, ethnicity, religion, birthplace, national identity and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with Translink, NISRA, the Department for Communities or Ards and North Down Borough Council.'
    ]
  }
};
